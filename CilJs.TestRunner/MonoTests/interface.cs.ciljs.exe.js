var asm1; (function (asm)
{
    asm.FullName = "interface.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
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
    /* System.Double Obj.Area()*/
    asm.x600000b = function Area(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldc.r8 0*/
        /* IL_09: ret */
        return (+0);
    };;
    /*  Obj..ctor()*/
    asm.x600000c = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* System.Double Rect.Area()*/
    asm.x600000e = function Area(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: ldfld Int32 w*/
        /* IL_06: conv.r8 */
        /* IL_07: ldarg.0 */
        /* IL_08: ldfld Int32 h*/
        /* IL_0D: conv.r8 */
        /* IL_0E: mul */
        /* IL_0F: ret */
        return arg0.ObjRectw * arg0.ObjRecth;
    };;
    /*  Rect..ctor(Int32,Int32,Int32,Int32)*/
    asm.x600000d = function _ctor(arg0,arg1,arg2,arg3,arg4)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        asm1.x600000c(arg0);
        /* IL_06: ldarg.0 */
        /* IL_07: ldarg.1 */
        /* IL_08: stfld Int32 x*/
        arg0.ObjRectx = arg1;
        /* IL_0D: ldarg.0 */
        /* IL_0E: ldarg.2 */
        /* IL_0F: stfld Int32 y*/
        arg0.ObjRecty = arg2;
        /* IL_14: ldarg.0 */
        /* IL_15: ldarg.3 */
        /* IL_16: stfld Int32 w*/
        arg0.ObjRectw = arg3;
        /* IL_1B: ldarg.0 */
        /* IL_1C: ldarg.s 4*/
        /* IL_1E: stfld Int32 h*/
        arg0.ObjRecth = arg4;
        /* IL_23: ret */
        return ;
    };;
    /* System.Double Circle.Area()*/
    asm.x6000010 = function Area(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: ldfld Int32 r*/
        /* IL_06: ldarg.0 */
        /* IL_07: ldfld Int32 r*/
        /* IL_0C: mul */
        /* IL_0D: conv.r8 */
        /* IL_0E: ldc.r8 3,14159265359*/
        /* IL_17: mul */
        /* IL_18: ret */
        return (arg0.ObjCircler * arg0.ObjCircler) * (+3.14159265359);
    };;
    /*  Circle..ctor(Int32,Int32,Int32)*/
    asm.x600000f = function _ctor(arg0,arg1,arg2,arg3)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        asm1.x600000c(arg0);
        /* IL_06: ldarg.0 */
        /* IL_07: ldarg.1 */
        /* IL_08: stfld Int32 x*/
        arg0.ObjCirclex = arg1;
        /* IL_0D: ldarg.0 */
        /* IL_0E: ldarg.2 */
        /* IL_0F: stfld Int32 y*/
        arg0.ObjCircley = arg2;
        /* IL_14: ldarg.0 */
        /* IL_15: ldarg.3 */
        /* IL_16: stfld Int32 r*/
        arg0.ObjCircler = arg3;
        /* IL_1B: ret */
        return ;
    };;
    /* static System.Int32 Test.Main()*/
    asm.x6000011_init = function ()
    {
        ((asm1)["Obj.Rect"]().init)();
        ((asm1)["Obj.Circle"]().init)();
        ((asm1)["Obj.Measurable"]().init)();
        asm.x6000011 = asm.x6000011_;
    };;
    asm.x6000011 = function ()
    {
        CILJS.init_base_types();
        asm.x6000011_init.apply(this,arguments);
        return asm.x6000011_.apply(this,arguments);
    };;
    asm.x6000011_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc0;
        var loc1;
        var loc2;
        t0 = (asm1)["Obj.Rect"]();
        t1 = (asm1)["Obj.Circle"]();
        t2 = (asm1)["Obj.Measurable"]();
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: ldc.i4.0 */
                /* IL_01: ldc.i4.0 */
                /* IL_02: ldc.i4.s 10*/
                /* IL_04: ldc.i4.s 20*/
                /* IL_06: newobj Void .ctor(System.Int32, System.Int32, System.Int32, System.Int32)*/
                /* IL_0B: stloc.0 */
                loc0 = CILJS.newobj(t0,asm1.x600000d,[null, (0|0), (0|0), (10|0), (20|0)]);
                /* IL_0C: ldc.i4.0 */
                /* IL_0D: ldc.i4.0 */
                /* IL_0E: ldc.i4.s 20*/
                /* IL_10: newobj Void .ctor(System.Int32, System.Int32, System.Int32)*/
                /* IL_15: stloc.1 */
                loc1 = CILJS.newobj(t1,asm1.x600000f,[null, (0|0), (0|0), (20|0)]);
                /* IL_16: ldloc.0 */
                /* IL_17: callvirt Double Area()*/
                /* IL_1C: ldloc.1 */
                /* IL_1D: callvirt Double Area()*/
                /* IL_22: add */
                /* IL_23: stloc.2 */
                loc2 = ((loc0.vtable)["asm1.x600000b"]())(loc0) + ((loc1.vtable)["asm1.x600000b"]())(loc1);
                /* IL_24: ldloc.2 */
                /* IL_25: ldc.r8 0*/
                /* IL_2E: beq.s IL_32*/
                
                if (loc2 === (+0)){
                    __pos__ = 0x32;
                    continue;
                }
                /* IL_30: ldc.i4.1 */
                /* IL_31: ret */
                return (1|0);
                case 0x32:
                /* IL_32: ldloc.0 */
                /* IL_33: castclass Obj.Rect*/
                /* IL_38: callvirt Double Area()*/
                /* IL_3D: ldloc.1 */
                /* IL_3E: castclass Obj.Circle*/
                /* IL_43: callvirt Double Area()*/
                /* IL_48: add */
                /* IL_49: stloc.2 */
                loc2 = asm1.x600000e(CILJS.cast_class(loc0,t0)) + asm1.x6000010(CILJS.cast_class(loc1,t1));
                /* IL_4A: ldloc.2 */
                /* IL_4B: ldc.r8 1456,637061436*/
                /* IL_54: sub */
                /* IL_55: ldc.r8 1E-06*/
                /* IL_5E: ble.un.s IL_62*/
                
                if (CILJS.unsigned_value(loc2 - (+1456.637061436)) <= CILJS.unsigned_value((+1E-06))){
                    __pos__ = 0x62;
                    continue;
                }
                /* IL_60: ldc.i4.2 */
                /* IL_61: ret */
                return (2|0);
                case 0x62:
                /* IL_62: ldloc.0 */
                /* IL_63: callvirt Double Area()*/
                /* IL_68: ldloc.1 */
                /* IL_69: callvirt Double Area()*/
                /* IL_6E: add */
                /* IL_6F: stloc.2 */
                loc2 = (((loc0.ifacemap)[t2].x600000a)())(loc0) + (((loc1.ifacemap)[t2].x600000a)())(loc1);
                /* IL_70: ldloc.2 */
                /* IL_71: ldc.r8 0*/
                /* IL_7A: beq.s IL_7E*/
                
                if (loc2 === (+0)){
                    __pos__ = 0x7E;
                    continue;
                }
                /* IL_7C: ldc.i4.3 */
                /* IL_7D: ret */
                return (3|0);
                case 0x7E:
                /* IL_7E: ldc.i4.0 */
                /* IL_7F: ret */
                return (0|0);
            }
        }
    };
    /*  Test..ctor()*/
    asm.x6000012 = function _ctor(arg0)
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
    (asm)["Obj.Measurable"] = CILJS.declare_type(
        "Measurable",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"Obj.Measurable",false,false,true,false,false,[],[
                    [asm1, "x600000a", "Area"]
                ],null,CILJS.is_inst_interface(this),Array,"asm1.t2000006");
            this.GenericTypeMetadataName = "asm1.t2000006";
            CILJS.declare_virtual(this,"asm1.x600000a","asm1.x600000a");
        });
    (asm)["Obj.Obj"] = CILJS.declare_type(
        "Obj",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"Obj.Obj",false,false,false,false,false,[],[
                    [asm1, "x600000b", "Area"]
                ],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000007");
            this.GenericTypeMetadataName = "asm1.t2000007";
            CILJS.declare_virtual(this,"asm1.x600000b","asm1.x600000b");
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            CILJS.implement_interface(
                this,
                [(asm1)["Obj.Measurable"]()],
                {
                    'x600000a': function (){ return asm1.x600000b;}
                });
        });
    (asm)["Obj.Rect"] = CILJS.declare_type(
        "Rect",
        [],
        function ()
        {
            return new ((asm1)["Obj.Obj"]())();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"Obj.Rect",false,false,false,false,false,[],[
                    [asm1, "x600000e", "Area"]
                ],(asm1)["Obj.Obj"](),CILJS.is_inst_default(this),Array,"asm1.t2000008");
            this.GenericTypeMetadataName = "asm1.t2000008";
            CILJS.declare_virtual(this,"asm1.x600000b","asm1.x600000b");
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            CILJS.implement_interface(
                this,
                [(asm1)["Obj.Measurable"]()],
                {
                    'x600000a': function (){ return asm1.x600000b;}
                });
            this.prototype.ObjRectx = 0;
            this.prototype.ObjRecty = 0;
            this.prototype.ObjRectw = 0;
            this.prototype.ObjRecth = 0;
        });
    (asm)["Obj.Circle"] = CILJS.declare_type(
        "Circle",
        [],
        function ()
        {
            return new ((asm1)["Obj.Obj"]())();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"Obj.Circle",false,false,false,false,false,[],[
                    [asm1, "x6000010", "Area"]
                ],(asm1)["Obj.Obj"](),CILJS.is_inst_default(this),Array,"asm1.t2000009");
            this.GenericTypeMetadataName = "asm1.t2000009";
            CILJS.declare_virtual(this,"asm1.x600000b","asm1.x600000b");
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            CILJS.implement_interface(
                this,
                [(asm1)["Obj.Measurable"]()],
                {
                    'x600000a': function (){ return asm1.x600000b;}
                });
            this.prototype.ObjCirclex = 0;
            this.prototype.ObjCircley = 0;
            this.prototype.ObjCircler = 0;
        });
    (asm)["Obj.Test"] = CILJS.declare_type(
        "Test",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"Obj.Test",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t200000a");
            this.GenericTypeMetadataName = "asm1.t200000a";
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.entryPoint = asm.x6000011;
})(asm1 || (asm1 = {}));
