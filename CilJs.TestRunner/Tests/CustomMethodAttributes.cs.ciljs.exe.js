var asm1; (function (asm)
{
    asm.FullName = "CustomMethodAttributes.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
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
    /*  A..ctor()*/
    asm.x600000a = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        asm0.x6000048(arg0);
        /* IL_06: ret */
        return ;
    };;
    /* System.Type B.get_T()*/
    asm.x600000b = function get_T(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: ldfld Type <T>k__BackingField*/
        /* IL_06: ret */
        return (arg0)["B<T>k__BackingField"];
    };;
    /* System.Void B.set_T(Type)*/
    asm.x600000c = function set_T(arg0,arg1)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: ldarg.1 */
        /* IL_02: stfld Type <T>k__BackingField*/
        (arg0)["B<T>k__BackingField"] = arg1;
        /* IL_07: ret */
        return ;
    };;
    /*  B..ctor(Type)*/
    asm.x600000d = function _ctor(arg0,arg1)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        asm0.x6000048(arg0);
        /* IL_06: ldarg.0 */
        /* IL_07: ldarg.1 */
        /* IL_08: call Void set_T(System.Type)*/
        asm1.x600000c(arg0,arg1);
        /* IL_0D: ret */
        return ;
    };;
    /*  D..ctor()*/
    asm.x600000e = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* System.Void C.M()*/
    asm.x600000f = function M(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ret */
        return ;
    };;
    /* System.Void C.N()*/
    asm.x6000010 = function N(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ret */
        return ;
    };;
    /*  C..ctor()*/
    asm.x6000011 = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* static System.Void Program.Main()*/
    asm.x6000012_init = function ()
    {
        (asm1.C().init)();
        (asm1.B().init)();
        asm.x6000012 = asm.x6000012_;
    };;
    asm.x6000012 = function ()
    {
        CILJS.init_base_types();
        asm.x6000012_init.apply(this,arguments);
        return asm.x6000012_.apply(this,arguments);
    };;
    asm.x6000012_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        var __pos__;
        var loc0;
        var loc1;
        var loc2;
        t0 = asm1.C();
        t1 = (asm0)["System.Int32"]();
        t2 = asm1.B();
        __pos__ = 0x0;
        /* IL_00: ldtoken C*/
        /* IL_05: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_0A: callvirt MethodInfo[] GetMethods()*/
        /* IL_0F: stloc.0 */
        loc0 = (((asm0.x60000e1(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t0)).vtable)["asm0.x60000f1"])())(asm0.x60000e1(CILJS.new_handle((asm0)["System.RuntimeTypeHandle"](),t0)));
        /* IL_10: ldloc.0 */
        /* IL_11: ldc.i4.0 */
        /* IL_12: ldelem.ref */
        /* IL_13: ldc.i4.1 */
        /* IL_14: callvirt Object[] GetCustomAttributes(System.Boolean)*/
        /* IL_19: stloc.1 */
        loc1 = (((CILJS.ldelem_ref(loc0,(0|0)).vtable)["asm0.x600003a"])())(CILJS.ldelem_ref(loc0,(0|0)),(1|0));
        /* IL_1A: ldloc.0 */
        /* IL_1B: ldc.i4.1 */
        /* IL_1C: ldelem.ref */
        /* IL_1D: ldc.i4.1 */
        /* IL_1E: callvirt Object[] GetCustomAttributes(System.Boolean)*/
        /* IL_23: stloc.2 */
        loc2 = (((CILJS.ldelem_ref(loc0,(1|0)).vtable)["asm0.x600003a"])())(CILJS.ldelem_ref(loc0,(1|0)),(1|0));
        /* IL_24: ldloc.1 */
        /* IL_25: ldlen */
        /* IL_26: conv.i4 */
        /* IL_27: box System.Int32*/
        /* IL_2C: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': loc1.jsarr.length | (0|0),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_31: ldloc.1 */
        /* IL_32: ldc.i4.0 */
        /* IL_33: ldelem.ref */
        /* IL_34: callvirt Type GetType()*/
        /* IL_39: callvirt String get_Name()*/
        /* IL_3E: call Void Log(System.Object)*/
        asm1.x6000001((((asm0.x600000a(CILJS.ldelem_ref(loc1,(0|0))).vtable)["asm0.x600003e"])())(asm0.x600000a(CILJS.ldelem_ref(loc1,(0|0)))));
        /* IL_43: ldloc.2 */
        /* IL_44: ldlen */
        /* IL_45: conv.i4 */
        /* IL_46: box System.Int32*/
        /* IL_4B: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': loc2.jsarr.length | (0|0),
                'type': t1,
                'vtable': t1.prototype.vtable,
                'ifacemap': t1.prototype.ifacemap
            });
        /* IL_50: ldloc.2 */
        /* IL_51: ldc.i4.0 */
        /* IL_52: ldelem.ref */
        /* IL_53: castclass B*/
        /* IL_58: callvirt Type get_T()*/
        /* IL_5D: callvirt String get_Name()*/
        /* IL_62: call Void Log(System.Object)*/
        asm1.x6000001((((asm1.x600000b(CILJS.cast_class(CILJS.ldelem_ref(loc2,(0|0)),t2)).vtable)["asm0.x600003e"])())(asm1.x600000b(CILJS.cast_class(CILJS.ldelem_ref(loc2,(0|0)),t2))));
        /* IL_67: ret */
        return ;
    };
    /*  Program..ctor()*/
    asm.x6000013 = function _ctor(arg0)
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
    asm.A = CILJS.declare_type(
        "A",
        [],
        function ()
        {
            return new ((asm0)["System.Attribute"]())();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"A",false,false,false,false,false,[],[],(asm0)["System.Attribute"](),CILJS.is_inst_default(this),Array,"asm1.t2000006");
            this.GenericTypeMetadataName = "asm1.t2000006";
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.B = CILJS.declare_type(
        "B",
        [],
        function ()
        {
            return new ((asm0)["System.Attribute"]())();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"B",false,false,false,false,false,[],[
                    [asm1, "x600000b", "get_T"],
                    [asm1, "x600000c", "set_T"]
                ],(asm0)["System.Attribute"](),CILJS.is_inst_default(this),Array,"asm1.t2000007");
            this.GenericTypeMetadataName = "asm1.t2000007";
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            (this.prototype)["B<T>k__BackingField"] = null;
        });
    asm.D = CILJS.declare_type(
        "D",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"D",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000008");
            this.GenericTypeMetadataName = "asm1.t2000008";
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.C = CILJS.declare_type(
        "C",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"C",false,false,false,false,false,[],[
                    [asm1, "x600000f", "M", [
                            [
                                asm1.A(),
                                asm1.x600000a
                            ]
                        ]],
                    [asm1, "x6000010", "N", [
                            [
                                asm1.B(),
                                asm1.x600000d,
                                [
                                    asm1.D()
                                ]
                            ]
                        ]]
                ],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000009");
            this.GenericTypeMetadataName = "asm1.t2000009";
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
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t200000a");
            this.GenericTypeMetadataName = "asm1.t200000a";
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.entryPoint = asm.x6000012;
})(asm1 || (asm1 = {}));
