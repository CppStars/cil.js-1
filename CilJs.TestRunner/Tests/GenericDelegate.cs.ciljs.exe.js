var asm1;(function (asm)
{
    asm.FullName = "GenericDelegate.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /* TResult MFunc`2.Invoke(T)*/
    asm.x6000002 = CILJS.delegate_invoke;;
    /* System.IAsyncResult MFunc`2.BeginInvoke(T,AsyncCallback,Object)*/
    asm.x6000003 = CILJS.delegate_begin_invoke;;
    /* TResult MFunc`2.EndInvoke(IAsyncResult)*/
    asm.x6000004 = CILJS.delegate_end_invoke;;
    /*  MFunc`2..ctor(Object,IntPtr)*/
    asm.x6000001 = CILJS.delegate_ctor;;
    /*  IntWrapper..ctor()*/
    asm.x6000005 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: nop  */
        /* IL_07: ret  */
        return ;
    };;
    /*  StringWrapper..ctor()*/
    asm.x6000006 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: nop  */
        /* IL_07: ret  */
        return ;
    };;
    /* static System.Void Program.Main()*/
    asm.x6000007_init = function ()
    {
        ((asm1)["Program+<>c"]().init)();
        (asm1.IntWrapper().init)();
        (asm1.StringWrapper().init)();
        ((asm1)["MFunc`2"](asm1.IntWrapper(),asm1.StringWrapper()).init)();
        asm.x6000007 = asm.x6000007_;
    };;
    asm.x6000007 = function ()
    {
        asm.x6000007_init.apply(this,arguments);
        return asm.x6000007_.apply(this,arguments);
    };;
    asm.x6000007_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        var t3;
        var st_00;
        var st_01;
        var st_02;
        var st_03;
        var st_04;
        var st_05;
        var st_06;
        var st_07;
        var in_block_0;
        var __pos__;
        CILJS.init_base_types();
        t0 = (asm1)["Program+<>c"]();
        t1 = asm1.IntWrapper();
        t2 = asm1.StringWrapper();
        t3 = (asm1)["MFunc`2"](t1,t2);
        in_block_0 = true;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                asm1.x600000a();
                /* IL_01: ldsfld MFunc`2 <>9__0_0 */
                st_00 = (t0)["<>9__0_0"];
                /* IL_06: dup  */
                st_07 = (st_02 = (st_01 = st_00));
                /* IL_07: brtrue.s IL_20 */
                
                if (st_01){
                    __pos__ = 0x20;
                    continue;
                }
                /* IL_09: pop  */
                
                asm1.x600000a();
                /* IL_0A: ldsfld <>c <>9 */
                st_03 = (t0)["<>9"];
                /* IL_10: ldftn StringWrapper <Main>b__0_0(IntWrapper) */
                st_04 = (function ()
                {
                    asm1.x600000c_init();
                    return asm1.x600000c;
                })();
                /* IL_15: newobj Void .ctor(System.Object, System.IntPtr) */
                st_05 = CILJS.newobj(t3,asm1.x6000001,[null, st_03, st_04]);
                /* IL_1A: dup  */
                st_07 = (st_06 = st_05);
                asm1.x600000a();
                /* IL_1B: stsfld MFunc`2 <>9__0_0 */
                (t0)["<>9__0_0"] = st_06;
                case 0x20:
                /* IL_20: call Void CallDelegate(MFunc`2[IntWrapper,StringWrapper]) */
                asm1.x6000008(st_07);
                /* IL_25: nop  */
                
                /* IL_26: ret  */
                return ;
            }
        }
    };
    /* static System.Void Program.CallDelegate(MFunc`2)*/
    asm.x6000008_init = function ()
    {
        (asm1.IntWrapper().init)();
        asm.x6000008 = asm.x6000008_;
    };;
    asm.x6000008 = function (arg0)
    {
        asm.x6000008_init.apply(this,arguments);
        return asm.x6000008_.apply(this,arguments);
    };;
    asm.x6000008_ = function CallDelegate(arg0)
    {
        var t0;
        var t1;
        var st_01;
        var st_02;
        var st_03;
        var st_04;
        var st_05;
        var st_06;
        var st_07;
        var st_08;
        var loc0;
        t0 = asm1.IntWrapper();
        t1 = (asm0)["System.Object"]();
        /* IL_00: nop  */
        /* IL_01: ldarg.0  */
        st_03 = arg0;
        /* IL_02: newobj Void .ctor() */
        /* IL_07: stloc.0  */
        loc0 = CILJS.newobj(t0,asm1.x6000005,[null]);
        /* IL_08: ldloc.0  */
        st_01 = loc0;
        /* IL_09: ldc.i4.s 123 */
        st_02 = (123|0);
        /* IL_0B: stfld Int32 Value */
        st_01.Value = st_02;
        /* IL_10: ldloc.0  */
        st_04 = loc0;
        /* IL_11: callvirt StringWrapper Invoke(IntWrapper) */
        st_05 = st_03._methodPtr.apply(null,((st_03._target) ? ([
                st_03._target,
                st_04
            ]) : ([
                st_04
            ])));
        /* IL_16: ldfld String Value */
        st_07 = st_05.Value;
        /* IL_1B: ldc.i4.0  */
        st_06 = (0|0);
        /* IL_1C: newarr System.Object */
        st_08 = CILJS.new_array(t1,st_06);
        /* IL_21: call Void WriteLine(System.String, System.Object[]) */
        asm0.x600005b(st_07,st_08);
        /* IL_26: nop  */
        /* IL_27: ret  */
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
    /* StringWrapper <>c.<Main>b__0_0(IntWrapper)*/
    asm.x600000c_init = function ()
    {
        (asm1.StringWrapper().init)();
        asm.x600000c = asm.x600000c_;
    };;
    asm.x600000c = function (arg0, arg1)
    {
        asm.x600000c_init.apply(this,arguments);
        return asm.x600000c_.apply(this,arguments);
    };;
    asm.x600000c_ = function _Main_b__0_0(arg0, arg1)
    {
        var t0;
        var loc0;
        t0 = asm1.StringWrapper();
        /* IL_00: newobj Void .ctor() */
        /* IL_05: stloc.0  */
        loc0 = CILJS.newobj(t0,asm1.x6000006,[null]);
        /* IL_06: ldloc.0  */
        /* IL_07: ldstr Result */
        /* IL_0C: stfld String Value */
        loc0.Value = CILJS.new_string("Result");
        /* IL_11: ldloc.0  */
        /* IL_12: ret  */
        return loc0;
    };
    /* static  <>c..cctor()*/
    asm.x600000a_init = function ()
    {
        ((asm1)["Program+<>c"]().init)();
        asm.x600000a = asm.x600000a_;
    };;
    asm.x600000a = function ()
    {
        asm.x600000a_init.apply(this,arguments);
        return asm.x600000a_.apply(this,arguments);
    };;
    asm.x600000a_ = function _cctor()
    {
        var t0;
        
        if ((asm1)["Program+<>c"]().FieldsInitialized){
            return;
        }
        (asm1)["Program+<>c"]().FieldsInitialized = true;
        t0 = (asm1)["Program+<>c"]();
        asm1.x600000a();
        /* IL_00: newobj Void .ctor() */
        /* IL_05: stsfld <>c <>9 */
        (t0)["<>9"] = CILJS.newobj(t0,asm1.x600000b,[null]);
        /* IL_0A: ret  */
        return ;
    };
    /*  <>c..ctor()*/
    asm.x600000b = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: nop  */
        /* IL_07: ret  */
        return ;
    };;
    (asm)["MFunc`2"] = CILJS.declare_type(
        "MFunc_2",
        ["T", "TResult"],
        function (T, TResult)
        {
            return {};
        },
        function (T, TResult)
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"MFunc`2",false,false,false,true,false,[],[
                    [asm1, "x6000002", "Invoke"],
                    [asm1, "x6000003", "BeginInvoke"],
                    [asm1, "x6000004", "EndInvoke"]
                ],(asm0)["System.MulticastDelegate"](),CILJS.is_inst_default(this),Array,"asm1.t2000002");
            (this.GenericArguments)["asm1.t2000002"] = [T, TResult];
            this.GenericTypeMetadataName = ("asm1.t2000002<" + ((T.GenericTypeMetadataName + TResult.GenericTypeMetadataName) + ">"));
            CILJS.declare_virtual(this,"asm1.x6000002","asm1.x6000002");
            CILJS.declare_virtual(this,"asm1.x6000003","asm1.x6000003");
            CILJS.declare_virtual(this,"asm1.x6000004","asm1.x6000004");
            CILJS.declare_virtual(this,"asm0.x6000060","asm0.x60000d5");
            CILJS.declare_virtual(this,"asm0.x600005f","asm0.x60000d6");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x6000061");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x6000064");
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            this.prototype._invocationList = null;
            this.prototype._methodPtr = null;
            this.prototype._target = null;
        });
    asm.IntWrapper = CILJS.declare_type(
        "IntWrapper",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"IntWrapper",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000003");
            this.GenericTypeMetadataName = "asm1.t2000003";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            this.prototype.Value = 0;
        });
    asm.StringWrapper = CILJS.declare_type(
        "StringWrapper",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"StringWrapper",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000004");
            this.GenericTypeMetadataName = "asm1.t2000004";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            this.prototype.Value = null;
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
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000005");
            this.GenericTypeMetadataName = "asm1.t2000005";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    (asm)["Program+<>c"] = CILJS.declare_type(
        "__c",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"Program+<>c",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000006");
            (this)["<>9"] = null;
            (this)["<>9__0_0"] = null;
            this.GenericTypeMetadataName = "asm1.t2000006";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.entryPoint = asm.x6000007;
})(asm1 || (asm1 = {}));
