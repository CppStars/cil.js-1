var asm1; (function (asm)
{
    asm.FullName = "GenericClassBasics.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
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
    /* T A`1.get_Prop()*/
    asm.x600000a = function get_Prop(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: ldfld T <Prop>k__BackingField*/
        /* IL_06: ret */
        return (arg0)["A_1<Prop>k__BackingField"];
    };;
    /* System.Void A`1.set_Prop(T)*/
    asm.x600000b = function set_Prop(arg0,arg1)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: ldarg.1 */
        /* IL_02: stfld T <Prop>k__BackingField*/
        (arg0)["A_1<Prop>k__BackingField"] = arg1;
        /* IL_07: ret */
        return ;
    };;
    /*  A`1..ctor()*/
    asm.x600000c = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /*  IntWrapper..ctor()*/
    asm.x600000d = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /*  StringWrapper..ctor()*/
    asm.x600000e = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* static System.Void Program.Main()*/
    asm.x600000f_init = function ()
    {
        (asm1.IntWrapper().init)();
        ((asm1)["A`1"](asm1.IntWrapper()).init)();
        (asm1.StringWrapper().init)();
        ((asm1)["A`1"](asm1.StringWrapper()).init)();
        asm.x600000f = asm.x600000f_;
    };;
    asm.x600000f = function ()
    {
        CILJS.init_base_types();
        asm.x600000f_init.apply(this,arguments);
        return asm.x600000f_.apply(this,arguments);
    };;
    asm.x600000f_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        var t3;
        var t4;
        var st_02;
        var st_03;
        var st_04;
        var st_05;
        var st_08;
        var st_09;
        var st_0A;
        var st_0B;
        var __pos__;
        var loc0;
        var loc2;
        var loc1;
        var loc3;
        t0 = asm1.IntWrapper();
        t1 = (asm1)["A`1"](t0);
        t2 = asm1.StringWrapper();
        t3 = (asm1)["A`1"](t2);
        t4 = (asm0)["System.Int32"]();
        __pos__ = 0x0;
        /* IL_00: newobj Void .ctor()*/
        /* IL_05: stloc.0 */
        loc0 = CILJS.newobj(t1,asm1.x600000c,[null]);
        /* IL_06: ldloc.0 */
        st_04 = loc0;
        /* IL_07: newobj Void .ctor()*/
        /* IL_0C: stloc.2 */
        loc2 = CILJS.newobj(t0,asm1.x600000d,[null]);
        /* IL_0D: ldloc.2 */
        st_02 = loc2;
        /* IL_0E: ldc.i4.s 123*/
        st_03 = (123|0);
        /* IL_10: stfld Int32 Value*/
        st_02.Value = st_03;
        /* IL_15: ldloc.2 */
        st_05 = loc2;
        /* IL_16: callvirt Void set_Prop(IntWrapper)*/
        asm1.x600000b(st_04,st_05);
        /* IL_1B: newobj Void .ctor()*/
        /* IL_20: stloc.1 */
        loc1 = CILJS.newobj(t3,asm1.x600000c,[null]);
        /* IL_21: ldloc.1 */
        st_0A = loc1;
        /* IL_22: newobj Void .ctor()*/
        /* IL_27: stloc.3 */
        loc3 = CILJS.newobj(t2,asm1.x600000e,[null]);
        /* IL_28: ldloc.3 */
        st_08 = loc3;
        /* IL_29: ldstr Hello*/
        st_09 = CILJS.new_string("Hello");
        /* IL_2E: stfld String Value*/
        st_08.Value = st_09;
        /* IL_33: ldloc.3 */
        st_0B = loc3;
        /* IL_34: callvirt Void set_Prop(StringWrapper)*/
        asm1.x600000b(st_0A,st_0B);
        /* IL_39: ldloc.0 */
        /* IL_3A: callvirt IntWrapper get_Prop()*/
        /* IL_3F: ldfld Int32 Value*/
        /* IL_44: box System.Int32*/
        /* IL_49: call Void Log(System.Object)*/
        asm1.x6000001({
                'boxed': asm1.x600000a(loc0).Value,
                'type': t4,
                'vtable': t4.prototype.vtable,
                'ifacemap': t4.prototype.ifacemap
            });
        /* IL_4E: ldloc.1 */
        /* IL_4F: callvirt StringWrapper get_Prop()*/
        /* IL_54: ldfld String Value*/
        /* IL_59: call Void Log(System.Object)*/
        asm1.x6000001(asm1.x600000a(loc1).Value);
        /* IL_5E: ret */
        return ;
    };
    /*  Program..ctor()*/
    asm.x6000010 = function _ctor(arg0)
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
            return new ((asm0)["System.Object"]())();
        },
        function (T)
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"A`1",false,false,false,true,false,[],[
                    [asm1, "x600000a", "get_Prop"],
                    [asm1, "x600000b", "set_Prop"]
                ],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000006");
            (this.GenericArguments)["asm1.t2000006"] = [T];
            this.GenericTypeMetadataName = ("asm1.t2000006<" + (T.GenericTypeMetadataName + ">"));
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            (this.prototype)["A_1<Prop>k__BackingField"] = ((T.IsValueType) ? (((T.IsPrimitive) ? (0) : (new T()))) : (null));
        });
    asm.IntWrapper = CILJS.declare_type(
        "IntWrapper",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"IntWrapper",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000007");
            this.GenericTypeMetadataName = "asm1.t2000007";
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            this.prototype.Value = 0;
        });
    asm.StringWrapper = CILJS.declare_type(
        "StringWrapper",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"StringWrapper",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000008");
            this.GenericTypeMetadataName = "asm1.t2000008";
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            this.prototype.Value = null;
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
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000009");
            this.GenericTypeMetadataName = "asm1.t2000009";
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.entryPoint = asm.x600000f;
})(asm1 || (asm1 = {}));
