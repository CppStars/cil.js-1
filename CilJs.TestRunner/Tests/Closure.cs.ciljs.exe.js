var asm1;(function (asm)
{
    asm.FullName = "Closure.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /* System.String A.get_Prop()*/
    asm.x6000001 = function get_Prop(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: ldfld String <Prop>k__BackingField */
        /* IL_06: ret  */
        return (arg0)["A<Prop>k__BackingField"];
    };;
    /* System.Void A.set_Prop(String)*/
    asm.x6000002 = function set_Prop(arg0, arg1)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: ldarg.1  */
        /* IL_02: stfld String <Prop>k__BackingField */
        (arg0)["A<Prop>k__BackingField"] = arg1;
        /* IL_07: ret  */
        return ;
    };;
    /*  A..ctor()*/
    asm.x6000003 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: nop  */
        /* IL_07: ret  */
        return ;
    };;
    /* System.Void X.Invoke()*/
    asm.x6000005 = CILJS.delegate_invoke;;
    /* System.IAsyncResult X.BeginInvoke(AsyncCallback,Object)*/
    asm.x6000006 = CILJS.delegate_begin_invoke;;
    /* System.Void X.EndInvoke(IAsyncResult)*/
    asm.x6000007 = CILJS.delegate_end_invoke;;
    /*  X..ctor(Object,IntPtr)*/
    asm.x6000004 = CILJS.delegate_ctor;;
    /* static System.Void Program.Main()*/
    asm.x6000008_init = function ()
    {
        ((asm1)["Program+<>c__DisplayClass0_0"]().init)();
        (asm1.A().init)();
        (asm1.X().init)();
        asm.x6000008 = asm.x6000008_;
    };;
    asm.x6000008 = function ()
    {
        asm.x6000008_init.apply(this,arguments);
        return asm.x6000008_.apply(this,arguments);
    };;
    asm.x6000008_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        var t3;
        var st_02;
        var st_03;
        var st_04;
        var st_05;
        var loc0;
        var loc2;
        var loc1;
        CILJS.init_base_types();
        t0 = (asm1)["Program+<>c__DisplayClass0_0"]();
        t1 = asm1.A();
        t2 = asm1.X();
        t3 = (asm0)["System.Object"]();
        /* IL_00: newobj Void .ctor() */
        /* IL_05: stloc.0  */
        loc0 = CILJS.newobj(t0,asm1.x600000a,[null]);
        /* IL_06: nop  */
        /* IL_07: ldloc.0  */
        st_04 = loc0;
        /* IL_08: newobj Void .ctor() */
        /* IL_0D: stloc.2  */
        loc2 = CILJS.newobj(t1,asm1.x6000003,[null]);
        /* IL_0E: ldloc.2  */
        st_02 = loc2;
        /* IL_0F: ldstr hello */
        st_03 = CILJS.new_string("hello");
        /* IL_14: callvirt Void set_Prop(System.String) */
        asm1.x6000002(st_02,st_03);
        /* IL_19: nop  */
        /* IL_1A: ldloc.2  */
        st_05 = loc2;
        /* IL_1B: stfld A a */
        st_04.a = st_05;
        /* IL_20: ldloc.0  */
        /* IL_21: ldnull  */
        /* IL_22: stfld A b */
        loc0.b = null;
        /* IL_27: ldloc.0  */
        /* IL_29: ldftn Void <Main>b__0() */
        /* IL_2E: newobj Void .ctor(System.Object, System.IntPtr) */
        /* IL_33: stloc.1  */
        loc1 = CILJS.newobj(t2,asm1.x6000004,[null, loc0, asm1.x600000b]);
        /* IL_34: ldloc.1  */
        /* IL_35: callvirt Void Invoke() */
        loc1._methodPtr.apply(null,((loc1._target) ? ([
                loc1._target
            ]) : ([])));
        /* IL_3A: nop  */
        /* IL_3B: ldloc.0  */
        /* IL_3C: ldfld A b */
        /* IL_41: callvirt String get_Prop() */
        /* IL_46: ldc.i4.0  */
        /* IL_47: newarr System.Object */
        /* IL_4C: call Void WriteLine(System.String, System.Object[]) */
        asm0.x600005b((loc0.b)["A<Prop>k__BackingField"],CILJS.new_array(t3,(0|0)));
        /* IL_51: nop  */
        /* IL_52: ret  */
        return ;
    };
    /*  Program..ctor()*/
    asm.x6000009 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: nop  */
        /* IL_07: ret  */
        return ;
    };;
    /* System.Void <>c__DisplayClass0_0.<Main>b__0()*/
    asm.x600000b = function _Main_b__0(arg0)
    {
        /* IL_00: nop  */
        /* IL_01: ldarg.0  */
        /* IL_02: ldarg.0  */
        /* IL_03: ldfld A a */
        /* IL_08: stfld A b */
        arg0.b = arg0.a;
        /* IL_0F: ret  */
        return ;
    };;
    /*  <>c__DisplayClass0_0..ctor()*/
    asm.x600000a = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: nop  */
        /* IL_07: ret  */
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
            CILJS.init_type(this,asm,"A",false,false,false,false,false,[],[
                    [asm1, "x6000001", "get_Prop"],
                    [asm1, "x6000002", "set_Prop"]
                ],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000002");
            this.GenericTypeMetadataName = "asm1.t2000002";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            (this.prototype)["A<Prop>k__BackingField"] = null;
        });
    asm.X = CILJS.declare_type(
        "X",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"X",false,false,false,false,false,[],[
                    [asm1, "x6000005", "Invoke"],
                    [asm1, "x6000006", "BeginInvoke"],
                    [asm1, "x6000007", "EndInvoke"]
                ],(asm0)["System.MulticastDelegate"](),CILJS.is_inst_default(this),Array,"asm1.t2000003");
            this.GenericTypeMetadataName = "asm1.t2000003";
            CILJS.declare_virtual(this,"asm1.x6000005","asm1.x6000005");
            CILJS.declare_virtual(this,"asm1.x6000006","asm1.x6000006");
            CILJS.declare_virtual(this,"asm1.x6000007","asm1.x6000007");
            CILJS.declare_virtual(this,"asm0.x6000060","asm0.x60000d5");
            CILJS.declare_virtual(this,"asm0.x600005f","asm0.x60000d6");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x6000061");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x6000064");
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            this.prototype._invocationList = null;
            this.prototype._methodPtr = null;
            this.prototype._target = null;
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
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000004");
            this.GenericTypeMetadataName = "asm1.t2000004";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    (asm)["Program+<>c__DisplayClass0_0"] = CILJS.declare_type(
        "__c__DisplayClass0_0",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"Program+<>c__DisplayClass0_0",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000005");
            this.GenericTypeMetadataName = "asm1.t2000005";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            this.prototype.b = null;
            this.prototype.a = null;
        });
    asm.entryPoint = asm.x6000008;
})(asm1 || (asm1 = {}));
