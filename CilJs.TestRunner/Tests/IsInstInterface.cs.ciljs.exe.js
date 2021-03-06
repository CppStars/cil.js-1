var asm1;(function (asm)
{
    asm.FullName = "IsInstInterface.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /*  A..ctor()*/
    asm.x6000001 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: nop  */
        /* IL_07: ret  */
        return ;
    };;
    /*  B..ctor()*/
    asm.x6000002 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        asm1.x6000001(arg0);
        /* IL_06: nop  */
        /* IL_07: ret  */
        return ;
    };;
    /*  C..ctor()*/
    asm.x6000003 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        asm1.x6000001(arg0);
        /* IL_06: nop  */
        /* IL_07: ret  */
        return ;
    };;
    /*  D..ctor()*/
    asm.x6000004 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        asm1.x6000003(arg0);
        /* IL_06: nop  */
        /* IL_07: ret  */
        return ;
    };;
    /* static System.Void Program.Main()*/
    asm.x6000005_init = function ()
    {
        (asm1.A().init)();
        (asm1.B().init)();
        (asm1.C().init)();
        (asm1.D().init)();
        asm.x6000005 = asm.x6000005_;
    };;
    asm.x6000005 = function ()
    {
        asm.x6000005_init.apply(this,arguments);
        return asm.x6000005_.apply(this,arguments);
    };;
    asm.x6000005_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        var t3;
        CILJS.init_base_types();
        t0 = asm1.A();
        t1 = asm1.B();
        t2 = asm1.C();
        t3 = asm1.D();
        /* IL_00: nop  */
        /* IL_01: newobj Void .ctor() */
        /* IL_06: call Void TestImpl(System.Object) */
        asm1.x6000006(CILJS.newobj(t0,asm1.x6000001,[null]));
        /* IL_0B: nop  */
        /* IL_0C: newobj Void .ctor() */
        /* IL_11: call Void TestImpl(System.Object) */
        asm1.x6000006(CILJS.newobj(t1,asm1.x6000002,[null]));
        /* IL_16: nop  */
        /* IL_17: newobj Void .ctor() */
        /* IL_1C: call Void TestImpl(System.Object) */
        asm1.x6000006(CILJS.newobj(t2,asm1.x6000003,[null]));
        /* IL_21: nop  */
        /* IL_22: newobj Void .ctor() */
        /* IL_27: call Void TestImpl(System.Object) */
        asm1.x6000006(CILJS.newobj(t3,asm1.x6000004,[null]));
        /* IL_2C: nop  */
        /* IL_2D: ret  */
        return ;
    };
    /* static System.Void Program.TestImpl(Object)*/
    asm.x6000006_init = function ()
    {
        (asm1.I1().init)();
        (asm1.I2().init)();
        (asm1.I3().init)();
        asm.x6000006 = asm.x6000006_;
    };;
    asm.x6000006 = function (arg0)
    {
        asm.x6000006_init.apply(this,arguments);
        return asm.x6000006_.apply(this,arguments);
    };;
    asm.x6000006_ = function TestImpl(arg0)
    {
        var t0;
        var t1;
        var t2;
        var t3;
        var st_02;
        var st_03;
        var st_04;
        var st_07;
        var st_08;
        var st_09;
        var st_0C;
        var st_0D;
        var st_0E;
        var in_block_0;
        var __pos__;
        t0 = asm1.I1();
        t1 = (asm0)["System.Object"]();
        t2 = asm1.I2();
        t3 = asm1.I3();
        in_block_0 = true;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                /* IL_01: ldarg.0  */
                /* IL_02: isinst I1 */
                /* IL_07: brtrue.s IL_10 */
                
                if (t0.IsInst(arg0)){
                    __pos__ = 0x10;
                    continue;
                }
                /* IL_09: ldstr false */
                st_03 = CILJS.new_string("false");
                /* IL_0E: br.s IL_15 */
                __pos__ = 0x15;
                continue;
                case 0x10:
                /* IL_10: ldstr true */
                st_03 = CILJS.new_string("true");
                case 0x15:
                /* IL_15: ldc.i4.0  */
                st_02 = (0|0);
                /* IL_16: newarr System.Object */
                st_04 = CILJS.new_array(t1,st_02);
                /* IL_1B: call Void WriteLine(System.String, System.Object[]) */
                asm0.x600005b(st_03,st_04);
                /* IL_20: nop  */
                
                /* IL_21: ldarg.0  */
                /* IL_22: isinst I2 */
                /* IL_27: brtrue.s IL_30 */
                
                if (t2.IsInst(arg0)){
                    __pos__ = 0x30;
                    continue;
                }
                /* IL_29: ldstr false */
                st_08 = CILJS.new_string("false");
                /* IL_2E: br.s IL_35 */
                __pos__ = 0x35;
                continue;
                case 0x30:
                /* IL_30: ldstr true */
                st_08 = CILJS.new_string("true");
                case 0x35:
                /* IL_35: ldc.i4.0  */
                st_07 = (0|0);
                /* IL_36: newarr System.Object */
                st_09 = CILJS.new_array(t1,st_07);
                /* IL_3B: call Void WriteLine(System.String, System.Object[]) */
                asm0.x600005b(st_08,st_09);
                /* IL_40: nop  */
                
                /* IL_41: ldarg.0  */
                /* IL_42: isinst I3 */
                /* IL_47: brtrue.s IL_50 */
                
                if (t3.IsInst(arg0)){
                    __pos__ = 0x50;
                    continue;
                }
                /* IL_49: ldstr false */
                st_0D = CILJS.new_string("false");
                /* IL_4E: br.s IL_55 */
                __pos__ = 0x55;
                continue;
                case 0x50:
                /* IL_50: ldstr true */
                st_0D = CILJS.new_string("true");
                case 0x55:
                /* IL_55: ldc.i4.0  */
                st_0C = (0|0);
                /* IL_56: newarr System.Object */
                st_0E = CILJS.new_array(t1,st_0C);
                /* IL_5B: call Void WriteLine(System.String, System.Object[]) */
                asm0.x600005b(st_0D,st_0E);
                /* IL_60: nop  */
                
                /* IL_61: ret  */
                return ;
            }
        }
    };
    /*  Program..ctor()*/
    asm.x6000007 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: nop  */
        /* IL_07: ret  */
        return ;
    };;
    asm.I1 = CILJS.declare_type(
        "I1",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"I1",false,false,true,false,false,[],[],null,CILJS.is_inst_interface(this),Array,"asm1.t2000002");
            this.GenericTypeMetadataName = "asm1.t2000002";
        });
    asm.I2 = CILJS.declare_type(
        "I2",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"I2",false,false,true,false,false,[],[],null,CILJS.is_inst_interface(this),Array,"asm1.t2000003");
            this.GenericTypeMetadataName = "asm1.t2000003";
        });
    asm.I3 = CILJS.declare_type(
        "I3",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"I3",false,false,true,false,false,[],[],null,CILJS.is_inst_interface(this),Array,"asm1.t2000004");
            this.GenericTypeMetadataName = "asm1.t2000004";
            CILJS.implement_interface(
                this,
                [asm1.I2()],
                null);
        });
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
            CILJS.init_type(this,asm,"A",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000005");
            this.GenericTypeMetadataName = "asm1.t2000005";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.B = CILJS.declare_type(
        "B",
        [],
        function ()
        {
            return asm1.A();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"B",false,false,false,false,false,[],[],asm1.A(),CILJS.is_inst_default(this),Array,"asm1.t2000006");
            this.GenericTypeMetadataName = "asm1.t2000006";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            CILJS.implement_interface(
                this,
                [asm1.I1()],
                {});
            CILJS.implement_interface(
                this,
                [asm1.I2()],
                {});
        });
    asm.C = CILJS.declare_type(
        "C",
        [],
        function ()
        {
            return asm1.A();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"C",false,false,false,false,false,[],[],asm1.A(),CILJS.is_inst_default(this),Array,"asm1.t2000007");
            this.GenericTypeMetadataName = "asm1.t2000007";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            CILJS.implement_interface(
                this,
                [asm1.I3()],
                {});
            CILJS.implement_interface(
                this,
                [asm1.I2()],
                {});
        });
    asm.D = CILJS.declare_type(
        "D",
        [],
        function ()
        {
            return asm1.C();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"D",false,false,false,false,false,[],[],asm1.C(),CILJS.is_inst_default(this),Array,"asm1.t2000008");
            this.GenericTypeMetadataName = "asm1.t2000008";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            CILJS.implement_interface(
                this,
                [asm1.I2()],
                {});
            CILJS.implement_interface(
                this,
                [asm1.I3()],
                {});
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
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000009");
            this.GenericTypeMetadataName = "asm1.t2000009";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.entryPoint = asm.x6000005;
})(asm1 || (asm1 = {}));
