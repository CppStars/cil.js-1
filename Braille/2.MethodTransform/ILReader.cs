using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Reflection.Emit;

namespace Braille.MethodTransform
{
    public class ByteArrayReader
    {
        private int position;
        private byte[] source;

        public ByteArrayReader(byte[] source, int position)
        {
            this.source = source;
            this.position = position;
        }

        public Byte ReadByte() { return (Byte)source[position++]; }
        public SByte ReadSByte() { return (SByte)ReadByte(); }

        public UInt16 ReadUInt16() { position += 2; return BitConverter.ToUInt16(source, position - 2); }
        public UInt32 ReadUInt32() { position += 4; return BitConverter.ToUInt32(source, position - 4); }
        public UInt64 ReadUInt64() { position += 8; return BitConverter.ToUInt64(source, position - 8); }

        public Int32 ReadInt32() { position += 4; return BitConverter.ToInt32(source, position - 4); }
        public Int64 ReadInt64() { position += 8; return BitConverter.ToInt64(source, position - 8); }

        public Single ReadSingle() { position += 4; return BitConverter.ToSingle(source, position - 4); }
        public Double ReadDouble() { position += 8; return BitConverter.ToDouble(source, position - 8); }

        internal object ReadInt16()
        {
            throw new NotImplementedException();
        }
    }

    interface IILReaderResolver
    {
        FieldInfo ResolveField(int metadataToken);
        MemberInfo ResolveMember(int metadataToken);

        MethodBase ResolveMethod(int metadataToken);
        byte[] ResolveSignature(int metadataToken);

        string ResolveString(int metadataToken);
        Type ResolveType(int metadataToken);
    }

    internal class ModuleILResolver : IILReaderResolver
    {
        private Module module;

        public ModuleILResolver(Module module)
        {
            this.module = module;
        }

        public FieldInfo ResolveField(int metadataToken)
        {
            return this.module.ResolveField(metadataToken);
        }

        public MemberInfo ResolveMember(int metadataToken)
        {
            return this.module.ResolveMember(metadataToken);
        }

        public MethodBase ResolveMethod(int metadataToken)
        {
            return this.module.ResolveMethod(metadataToken);
        }

        public byte[] ResolveSignature(int metadataToken)
        {
            return this.module.ResolveSignature(metadataToken);
        }

        public string ResolveString(int metadataToken)
        {
            try
            {
                return this.module.ResolveString(metadataToken);
            }
            catch
            {
                return "ERROR: Unresolvable string";
            }
        }

        public Type ResolveType(int metadataToken)
        {
            return this.module.ResolveType(metadataToken);
        }
    }

    enum MetadataType {
        Module                       = 0x00000000,
        TypeRef                      = 0x01000000,
        TypeDef                      = 0x02000000,
        FieldDef                     = 0x04000000,
        MethodDef                    = 0x06000000,
        ParamDef                     = 0x08000000,
        InterfaceImpl                = 0x09000000,
        MemberRef                    = 0x0a000000,
        CustomAttribute              = 0x0c000000,
        Permission                   = 0x0e000000,
        Signature                    = 0x11000000,
        Event                        = 0x14000000,
        Property                     = 0x17000000,
        ModuleRef                    = 0x1a000000,
        TypeSpec                     = 0x1b000000,
        Assembly                     = 0x20000000,
        AssemblyRef                  = 0x23000000,
        File                         = 0x26000000,
        ExportedType                 = 0x27000000,
        ManifestResource             = 0x28000000,
        GenericParam                 = 0x2a000000,
        MethodSpec                   = 0x2b000000,
        GenericParamConstraint       = 0x2c000000,
        String                       = 0x70000000,
        Name                         = 0x71000000,
        BaseType                     = 0x72000000
    }

    class ILReader
    {
        #region Static initialization
        static OpCode[] OneByteOpCodes = new OpCode[0x100];
        static OpCode[] TwoByteOpCodes = new OpCode[0x100];

        static ILReader()
        {
            foreach (var fi in typeof(OpCodes).GetFields(BindingFlags.Public | BindingFlags.Static))
            {
                var opCode = (OpCode)fi.GetValue(null);
                var value = (UInt16)opCode.Value;

                if (value < 0x100)
                    OneByteOpCodes[value] = opCode;
                else if ((value & 0xff00) == 0xfe00)
                    TwoByteOpCodes[value & 0xff] = opCode;

            }

            //File.Delete("out.js");

            //var sb = new List<string>();
            //foreach (var item in OneByteOpCodes.OrderBy(o => (UInt16)o.Value).Where(o => o.Name != null))
            //{
            //    sb.Add(string.Format("case 0x{0:x}: // {1} (0x{2:x})", (UInt16)item.Value, item.Name, item.Value, MethodTransformTask.GetLength(null, item.Name)));
            //    sb.Add("    break;");
            //}

            //sb.Add("two bytes from here");


            //foreach (var item in TwoByteOpCodes.OrderBy(o => (UInt16)o.Value).Where(o => o.Name != null))
            //{
            //    sb.Add(string.Format("case 0x{0:x}: // {1} (0x{2:x}) ({3})", ((UInt16)item.Value) & 0xff, item.Name, item.Value, MethodTransformTask.GetLength(null, item.Name)));
            //    sb.Add("    break;");
            //}

            //File.WriteAllLines("out.js", sb.ToArray());
        }
        #endregion

        byte[] ilCode;
        int position = 0;
        IILReaderResolver resolver;

        public ILReader(byte[] il, IILReaderResolver resolver)
        {
            ilCode = il;
            this.resolver = resolver;
        }

        public IEnumerable<ILInstruction> Process()
        {
            while (position < ilCode.Length)
            {
                OpCode opCode;

                var p = position;

                var code = ilCode[p];
                if (code != 0xFE)
                {
                    opCode = OneByteOpCodes[code];
                }
                else
                {
                    position++;
                    code = ilCode[++p];
                    opCode = TwoByteOpCodes[code];
                }

                position++;
                position += GetSize(opCode.OperandType);
                
                var data = GetData(opCode, new ByteArrayReader(ilCode, p + 1));

                if (opCode.Name == "switch")
                {
                    var l = (int)data;
                    int target = 0;
                    for (int i = 0; i < l; i++)
                    {
                        target = BitConverter.ToInt32(ilCode, position + i);
                    }
                    position = position + l + target;
                }

                yield return new ILInstruction
                {
                    OpCode = opCode,
                    Data = data
                };

            }
        }

        private static int GetSize(OperandType operandType)
        {
            switch (operandType)
            {
                case OperandType.InlineNone:
                    return 0;
                case OperandType.ShortInlineBrTarget:
                case OperandType.ShortInlineI:
                case OperandType.ShortInlineVar:
                    return 1;
                case OperandType.InlineVar:
                    return 2;
                case OperandType.InlineBrTarget:
                case OperandType.InlineField:
                case OperandType.InlineI:
                case OperandType.InlineMethod:
                case OperandType.InlineSig:
                case OperandType.InlineString:
                case OperandType.InlineSwitch:
                case OperandType.InlineTok:
                case OperandType.InlineType:
                case OperandType.ShortInlineR:
                    return 4;
                case OperandType.InlineI8:
                case OperandType.InlineR:
                    return 8;
                default:
                    return 0;
            }
        }

        private object GetData(OpCode code, ByteArrayReader reader)
        {
            object data = null;
            switch (code.OperandType)
            {
                case OperandType.InlineField:
                    data = resolver.ResolveField(reader.ReadInt32());
                    break;
                case OperandType.InlineSwitch:
                    data = reader.ReadInt32();
                    break;
                case OperandType.InlineBrTarget:
                case OperandType.InlineI:
                    data = reader.ReadInt32();
                    break;
                case OperandType.InlineI8:
                    data = reader.ReadInt64();
                    break;
                case OperandType.InlineMethod:
                    data = resolver.ResolveMethod(reader.ReadInt32());
                    break;
                case OperandType.InlineR:
                    data = reader.ReadDouble();
                    break;
                case OperandType.InlineSig:
                    data = resolver.ResolveSignature(reader.ReadInt32());
                    break;
                case OperandType.InlineString:
                    data = resolver.ResolveString(reader.ReadInt32());
                    break;
                case OperandType.InlineTok:
                case OperandType.InlineType:
                    data = resolver.ResolveType(reader.ReadInt32());
                    break;
                case OperandType.InlineVar:
                    data = reader.ReadInt16();
                    break;
                case OperandType.ShortInlineVar:
                case OperandType.ShortInlineI:
                case OperandType.ShortInlineBrTarget:
                    data = reader.ReadByte();
                    break;
                case OperandType.ShortInlineR:
                    data = reader.ReadSingle();
                    break;
            }

            return data;
        }
    }
}