var asm1; (function (asm)
{
    asm.FullName = "DefaultOnRefStructBug.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    asm.next_hash = (1|0);
    /* static System.Void TestLog.Log(Object)*/
    asm.x6000001 = ciljs_test_log;;
    /*  TestLog..ctor()*/
    asm.x6000002 = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* System.Void A`1.Reset()*/
    asm.x600000a = function Reset(arg0)
    {
        var t0;
        var __pos__;
        t0 = ((((arguments)[0].r)().constructor.GenericArguments)["asm1.t2000006"])[0];
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: ldflda T X*/
        /* IL_07: initobj T*/
        arg0.r().X = ((t0.IsValueType) ? (((t0.IsPrimitive) ? ((0|0)) : (new t0()))) : (null));
        /* IL_0C: ret */
        return ;
    };;
    /*  B..ctor()*/
    asm.x600000b = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* static System.Void Program.Main()*/
    asm.x600000c_init = function ()
    {
        ((asm1)["A`1"]((asm0)["System.Int32"]()).init)();
        (asm1.B().init)();
        ((asm1)["A`1"](asm1.B()).init)();
        asm.x600000c = asm.x600000c_;
    };;
    asm.x600000c = function ()
    {
        CILJS.init_base_types();
        asm.x600000c_init.apply(this,arguments);
        return asm.x600000c_.apply(this,arguments);
    };;
    asm.x600000c_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        var t3;
        var loc0;
        var loc1;
        var st_0F;
        var st_13;
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        t0 = (asm0)["System.Int32"]();
        t1 = (asm1)["A`1"](t0);
        t2 = asm1.B();
        t3 = (asm1)["A`1"](t2);
        loc0 = new ((asm1)["A`1"]((asm0)["System.Int32"]()))();
        loc1 = new ((asm1)["A`1"](asm1.B()))();
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: ldloca.s 0*/
                /* IL_03: initobj A`1[System.Int32]*/
                loc0 = new t1();
                /* IL_08: ldloca.s 0*/
                /* IL_0A: ldc.i4.s 123*/
                /* IL_0C: stfld IKVM.Reflection.GenericFieldInstance*/
                loc0.X = (123|0);
                /* IL_11: ldloca.s 0*/
                /* IL_13: ldfld IKVM.Reflection.GenericFieldInstance*/
                /* IL_18: box System.Int32*/
                /* IL_1D: call Void Log(System.Object)*/
                asm1.x6000001({
                        'boxed': loc0.X,
                        'type': t0,
                        'vtable': t0.prototype.vtable,
                        'ifacemap': t0.prototype.ifacemap
                    });
                /* IL_22: ldloca.s 0*/
                /* IL_24: call Void Reset()*/
                asm1.x600000a({
                        'w': function (v)
                        {
                            loc0 = v;
                        },
                        'r': function ()
                        {
                            return loc0;
                        }
                    });
                /* IL_29: ldloca.s 0*/
                /* IL_2B: ldfld IKVM.Reflection.GenericFieldInstance*/
                /* IL_30: box System.Int32*/
                /* IL_35: call Void Log(System.Object)*/
                asm1.x6000001({
                        'boxed': loc0.X,
                        'type': t0,
                        'vtable': t0.prototype.vtable,
                        'ifacemap': t0.prototype.ifacemap
                    });
                /* IL_3A: ldloca.s 1*/
                /* IL_3D: initobj A`1[B]*/
                loc1 = new t3();
                /* IL_42: ldloca.s 1*/
                /* IL_44: newobj Void .ctor()*/
                /* IL_49: stfld IKVM.Reflection.GenericFieldInstance*/
                loc1.X = CILJS.newobj(t2,asm1.x600000b,[null]);
                /* IL_4E: ldloca.s 1*/
                /* IL_50: ldfld IKVM.Reflection.GenericFieldInstance*/
                /* IL_55: brfalse.s IL_5E*/
                
                if ((!(loc1.X))){
                    __pos__ = 0x5E;
                    continue;
                }
                /* IL_57: ldstr false*/
                st_0F = CILJS.new_string("false");
                /* IL_5C: br.s IL_63*/
                __pos__ = 0x63;
                continue;
                case 0x5E:
                /* IL_5E: ldstr true*/
                st_0F = CILJS.new_string("true");
                case 0x63:
                /* IL_63: call Void Log(System.Object)*/
                asm1.x6000001(st_0F);
                /* IL_68: ldloca.s 1*/
                /* IL_6A: call Void Reset()*/
                asm1.x600000a({
                        'w': function (v)
                        {
                            loc1 = v;
                        },
                        'r': function ()
                        {
                            return loc1;
                        }
                    });
                /* IL_6F: ldloca.s 1*/
                /* IL_71: ldfld IKVM.Reflection.GenericFieldInstance*/
                /* IL_76: brfalse.s IL_7F*/
                
                if ((!(loc1.X))){
                    __pos__ = 0x7F;
                    continue;
                }
                /* IL_78: ldstr false*/
                st_13 = CILJS.new_string("false");
                /* IL_7D: br.s IL_84*/
                __pos__ = 0x84;
                continue;
                case 0x7F:
                /* IL_7F: ldstr true*/
                st_13 = CILJS.new_string("true");
                case 0x84:
                /* IL_84: call Void Log(System.Object)*/
                asm1.x6000001(st_13);
                /* IL_89: ret */
                return ;
            }
        }
    };
    /*  Program..ctor()*/
    asm.x600000d = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    asm.TestLog = CILJS.declare_type(
        "TestLog",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"TestLog",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000002");
            this.GenericTypeMetadataName = "asm1.t2000002";
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    (asm)["A`1"] = CILJS.declare_type(
        "A_1",
        ["T"],
        function (T)
        {
            return {};
        },
        function (T)
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"A`1",true,false,false,true,false,[],[
                    [asm1, "x600000a", "Reset"]
                ],(asm0)["System.ValueType"](),CILJS.is_inst_value_type(this),Array,"asm1.t2000006");
            (this.GenericArguments)["asm1.t2000006"] = [T];
            this.GenericTypeMetadataName = ("asm1.t2000006<" + (T.GenericTypeMetadataName + ">"));
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000016");
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            this.prototype.X = ((T.IsValueType) ? (((T.IsPrimitive) ? (0) : (new T()))) : (null));
        });
    asm.B = CILJS.declare_type(
        "B",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"B",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000007");
            this.GenericTypeMetadataName = "asm1.t2000007";
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.Program = CILJS.declare_type(
        "Program",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000008");
            this.GenericTypeMetadataName = "asm1.t2000008";
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.entryPoint = asm.x600000c;
})(asm1 || (asm1 = {}));
