var asm1;(function (asm)
{
    asm.FullName = "NestedClasses.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /*  A..ctor()*/
    asm.x6000001 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: nop  */
        /* IL_07: ret  */
        return ;
    };;
    /*  C..ctor()*/
    asm.x6000002 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: nop  */
        /* IL_07: ret  */
        return ;
    };;
    /* static System.Void Program.Main()*/
    asm.x6000003_init = function ()
    {
        ((asm1)["A+B"]().init)();
        ((asm1)["C+D+E"]().init)();
        asm.x6000003 = asm.x6000003_;
    };;
    asm.x6000003 = function ()
    {
        asm.x6000003_init.apply(this,arguments);
        return asm.x6000003_.apply(this,arguments);
    };;
    asm.x6000003_ = function Main()
    {
        var t0;
        var t1;
        var loc0;
        var loc1;
        CILJS.init_base_types();
        t0 = (asm1)["A+B"]();
        t1 = (asm1)["C+D+E"]();
        /* IL_00: nop  */
        /* IL_01: call Void M() */
        asm1.x6000005();
        /* IL_06: nop  */
        /* IL_07: newobj Void .ctor() */
        /* IL_0C: stloc.0  */
        loc0 = CILJS.newobj(t0,asm1.x6000007,[null]);
        /* IL_0D: ldloc.0  */
        /* IL_0E: callvirt Void X() */
        asm1.x6000006(loc0);
        /* IL_13: nop  */
        asm1.x600000b();
        /* IL_14: newobj Void .ctor() */
        /* IL_19: stloc.1  */
        loc1 = CILJS.newobj(t1,asm1.x600000a,[null]);
        /* IL_1A: ldloc.1  */
        /* IL_1B: callvirt Void Y() */
        asm1.x6000009(loc1);
        /* IL_20: nop  */
        /* IL_21: ret  */
        return ;
    };
    /*  Program..ctor()*/
    asm.x6000004 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: nop  */
        /* IL_07: ret  */
        return ;
    };;
    /* static System.Void B.M()*/
    asm.x6000005 = function M()
    {
        var t0;
        t0 = (asm0)["System.Object"]();
        /* IL_00: nop  */
        /* IL_01: ldstr A.B.M */
        /* IL_06: ldc.i4.0  */
        /* IL_07: newarr System.Object */
        /* IL_0C: call Void WriteLine(System.String, System.Object[]) */
        asm0.x600005b(CILJS.new_string("A.B.M"),CILJS.new_array(t0,(0|0)));
        /* IL_11: nop  */
        /* IL_12: ret  */
        return ;
    };;
    /* System.Void B.X()*/
    asm.x6000006 = function X(arg0)
    {
        var t0;
        t0 = (asm0)["System.Object"]();
        /* IL_00: nop  */
        /* IL_01: ldstr A.B.X */
        /* IL_06: ldc.i4.0  */
        /* IL_07: newarr System.Object */
        /* IL_0C: call Void WriteLine(System.String, System.Object[]) */
        asm0.x600005b(CILJS.new_string("A.B.X"),CILJS.new_array(t0,(0|0)));
        /* IL_11: nop  */
        /* IL_12: ret  */
        return ;
    };;
    /*  B..ctor()*/
    asm.x6000007 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: nop  */
        /* IL_07: ret  */
        return ;
    };;
    /*  D..ctor()*/
    asm.x6000008 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: nop  */
        /* IL_07: ret  */
        return ;
    };;
    /* System.Void E.Y()*/
    asm.x6000009_init = function ()
    {
        ((asm1)["C+D+E"]().init)();
        asm.x6000009 = asm.x6000009_;
    };;
    asm.x6000009 = function (arg0)
    {
        asm.x6000009_init.apply(this,arguments);
        return asm.x6000009_.apply(this,arguments);
    };;
    asm.x6000009_ = function Y(arg0)
    {
        var t0;
        var t1;
        var t2;
        var st_01;
        var st_02;
        var st_03;
        var st_04;
        var st_05;
        var st_06;
        var st_07;
        var st_08;
        var st_09;
        var loc0;
        t0 = (asm1)["C+D+E"]();
        t1 = (asm0)["System.Int32"]();
        t2 = (asm0)["System.Object"]();
        /* IL_00: nop  */
        /* IL_01: ldstr C.D.E.Y */
        st_05 = CILJS.new_string("C.D.E.Y");
        asm1.x600000b();
        /* IL_06: ldsfld Int32 y */
        /* IL_0B: stloc.0  */
        loc0 = t0.y;
        /* IL_0C: ldloc.0  */
        st_01 = loc0;
        /* IL_0D: ldc.i4.1  */
        st_02 = (1|0);
        /* IL_0E: add  */
        st_03 = ((st_01 + st_02) | (0|0));
        asm1.x600000b();
        /* IL_0F: stsfld Int32 y */
        t0.y = st_03;
        /* IL_14: ldloc.0  */
        st_04 = loc0;
        /* IL_15: box System.Int32 */
        st_06 = CILJS.make_box(st_04,t1);
        /* IL_1A: call String Concat(System.Object, System.Object) */
        st_08 = asm0.x600012b(st_05,st_06);
        /* IL_1F: ldc.i4.0  */
        st_07 = (0|0);
        /* IL_20: newarr System.Object */
        st_09 = CILJS.new_array(t2,st_07);
        /* IL_25: call Void WriteLine(System.String, System.Object[]) */
        asm0.x600005b(st_08,st_09);
        /* IL_2A: nop  */
        /* IL_2B: ret  */
        return ;
    };
    /*  E..ctor()*/
    asm.x600000a = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: nop  */
        /* IL_07: ret  */
        return ;
    };;
    /* static  E..cctor()*/
    asm.x600000b_init = function ()
    {
        ((asm1)["C+D+E"]().init)();
        asm.x600000b = asm.x600000b_;
    };;
    asm.x600000b = function ()
    {
        asm.x600000b_init.apply(this,arguments);
        return asm.x600000b_.apply(this,arguments);
    };;
    asm.x600000b_ = function _cctor()
    {
        var t0;
        
        if ((asm1)["C+D+E"]().FieldsInitialized){
            return;
        }
        (asm1)["C+D+E"]().FieldsInitialized = true;
        t0 = (asm1)["C+D+E"]();
        /* IL_00: ldc.i4.s 123 */
        /* IL_02: stsfld Int32 y */
        t0.y = (123|0);
        /* IL_07: ret  */
        return ;
    };
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
    asm.C = CILJS.declare_type(
        "C",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"C",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000003");
            this.GenericTypeMetadataName = "asm1.t2000003";
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
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000004");
            this.GenericTypeMetadataName = "asm1.t2000004";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    (asm)["A+B"] = CILJS.declare_type(
        "B",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"A+B",false,false,false,false,false,[],[
                    [asm1, "x6000006", "X"]
                ],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000005");
            this.GenericTypeMetadataName = "asm1.t2000005";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    (asm)["C+D"] = CILJS.declare_type(
        "D",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"C+D",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000006");
            this.GenericTypeMetadataName = "asm1.t2000006";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    (asm)["C+D+E"] = CILJS.declare_type(
        "E",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"C+D+E",false,false,false,false,false,[],[
                    [asm1, "x6000009", "Y"]
                ],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000007");
            this.y = 0;
            this.GenericTypeMetadataName = "asm1.t2000007";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.entryPoint = asm.x6000003;
})(asm1 || (asm1 = {}));
