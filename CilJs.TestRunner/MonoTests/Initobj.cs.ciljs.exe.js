var asm1;(function (asm)
{
    asm.FullName = "Initobj.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /*  A..ctor()*/
    asm.x6000001 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    /* static T Program.CreateDefault<T>()*/
    asm.x6000002 = function (T)
    {
        return function CreateDefault()
        {
            var t0;
            var loc0;
            t0 = T;
            loc0 = ((T.IsValueType) ? (((T.IsPrimitive) ? (0) : (new T()))) : (null));
            /* IL_00: ldloca.s 0 */
            /* IL_03: initobj T */
            loc0 = ((t0.IsValueType) ? (((t0.IsPrimitive) ? ((0|0)) : (new t0()))) : (null));
            /* IL_08: ldloc.0  */
            /* IL_09: ret  */
            return loc0;
        };
    };;
    /* static System.Void Program.Main()*/
    asm.x6000003 = function Main()
    {
        var t0;
        var t1;
        CILJS.init_base_types();
        t0 = (asm0)["System.Int32"]();
        t1 = (asm0)["System.Object"]();
        /* IL_00: ldc.i4.0  */
        /* IL_01: box System.Int32 */
        /* IL_06: call Void WriteLine(System.Object) */
        asm0.x600005a({
                'boxed': (0|0),
                'type': t0,
                'vtable': t0.prototype.vtable,
                'ifacemap': t0.prototype.ifacemap
            });
        /* IL_0B: ldnull  */
        /* IL_0C: ldc.i4.0  */
        /* IL_0D: newarr System.Object */
        /* IL_12: call Void WriteLine(System.String, System.Object[]) */
        asm0.x600005b(null,CILJS.new_array(t1,(0|0)));
        /* IL_17: ldnull  */
        /* IL_18: call Void WriteLine(System.Object) */
        asm0.x600005a(null);
        /* IL_1D: ret  */
        return ;
    };;
    /*  Program..ctor()*/
    asm.x6000004 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    asm.A = CILJS.declare_type(
        "A",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"A",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000002");
            this.GenericTypeMetadataName = "asm1.t2000002";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.Program = CILJS.declare_type(
        "Program",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000003");
            this.GenericTypeMetadataName = "asm1.t2000003";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.entryPoint = asm.x6000003;
})(asm1 || (asm1 = {}));