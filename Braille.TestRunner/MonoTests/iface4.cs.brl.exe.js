var asm1; (function (asm)
{
    asm.FullName = "iface4.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    asm.next_hash = (1|0);
    /* static Void Log(System.Object)*/
    asm.x6000001 = braille_test_log;;
    /* Void .ctor()*/
    asm.x6000002 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* Void .ctor()*/
    asm.x600000b = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* Int32 IVehicle.Start()*/
    asm.x6000010 = function IVehicle_Start(arg0)
    {
        /* IL_00: ldc.i4.1 */
        /* IL_01: ret */
        return (1|0);
    };;
    /* Int32 Stop()*/
    asm.x6000011 = function Stop(arg0)
    {
        /* IL_00: ldc.i4.2 */
        /* IL_01: ret */
        return (2|0);
    };;
    /* Int32 Turn()*/
    asm.x6000012 = function Turn(arg0)
    {
        /* IL_00: ldc.i4.3 */
        /* IL_01: ret */
        return (3|0);
    };;
    /* Int32 Walk()*/
    asm.x6000013 = function Walk(arg0)
    {
        /* IL_00: ldc.i4.1 */
        /* IL_01: ret */
        return (1|0);
    };;
    /* Void .ctor()*/
    asm.x6000014 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* Int32 Turn()*/
    asm.x6000015 = function Turn(arg0)
    {
        /* IL_00: ldc.i4.4 */
        /* IL_01: ret */
        return (4|0);
    };;
    /* Void .ctor()*/
    asm.x6000016 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        (asm1.x6000014)(arg0);
        /* IL_06: ret */
        return ;
    };;
    /* Int32 Stop()*/
    asm.x6000017 = function Stop(arg0)
    {
        /* IL_00: ldc.i4.6 */
        /* IL_01: ret */
        return (6|0);
    };;
    /* Int32 IVehicle.Start()*/
    asm.x6000018 = function IVehicle_Start(arg0)
    {
        /* IL_00: ldc.i4.5 */
        /* IL_01: ret */
        return (5|0);
    };;
    /* Int32 IVehicle.Turn()*/
    asm.x6000019 = function IVehicle_Turn(arg0)
    {
        /* IL_00: ldc.i4.7 */
        /* IL_01: ret */
        return (7|0);
    };;
    /* Int32 Turn()*/
    asm.x600001a = function Turn(arg0)
    {
        /* IL_00: ldc.i4.8 */
        /* IL_01: ret */
        return (8|0);
    };;
    /* Void .ctor()*/
    asm.x600001b = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        (asm1.x6000014)(arg0);
        /* IL_06: ret */
        return ;
    };;
    /* Void .ctor()*/
    asm.x600001c = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        (asm1.x6000016)(arg0);
        /* IL_06: ret */
        return ;
    };;
    /* static Int32 Main()*/
    asm.x600001d_init = function ()
    {
        (((asm0)["System.ValueType"])().init)();
        ((asm1.Derived1)().init)();
        ((asm1.Derived2)().init)();
        ((asm1.Derived3)().init)();
        ((asm1.Base)().init)();
        ((asm1.IVehicle)().init)();
        asm.x600001d = asm.x600001d_;
    };;
    asm.x600001d = function ()
    {
        (asm.x600001d_init.apply)(this,arguments);
        return (asm.x600001d_.apply)(this,arguments);
    };;
    asm.x600001d_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        var t3;
        var t4;
        var t5;
        var __pos_0__;
        var loc0;
        var loc1;
        var loc2;
        var loc3;
        var loc4;
        t0 = ((asm0)["System.ValueType"])();
        t1 = (asm1.Derived1)();
        t2 = (asm1.Derived2)();
        t3 = (asm1.Derived3)();
        t4 = (asm1.Base)();
        t5 = (asm1.IVehicle)();
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: newobj Void .ctor()*/
                /* IL_05: stloc.0 */
                loc0 = (BLR.newobj)(t1,asm1.x6000016,[
                    null
                ]);
                /* IL_06: newobj Void .ctor()*/
                /* IL_0B: stloc.1 */
                loc1 = (BLR.newobj)(t2,asm1.x600001b,[
                    null
                ]);
                /* IL_0C: newobj Void .ctor()*/
                /* IL_11: stloc.2 */
                loc2 = (BLR.newobj)(t3,asm1.x600001c,[
                    null
                ]);
                /* IL_12: ldloc.1 */
                /* IL_13: stloc.3 */
                loc3 = loc1;
                /* IL_14: newobj Void .ctor()*/
                /* IL_19: stloc.s 4*/
                loc4 = (BLR.newobj)(t4,asm1.x6000014,[
                    null
                ]);
                /* IL_1B: ldloc.0 */
                /* IL_1C: callvirt Int32 Turn()*/
                /* IL_21: ldc.i4.4 */
                /* IL_22: beq.s IL_26*/
                
                if ((((loc0.vtable)["asm1.x6000012"])())(loc0) === (4|0)){
                    __pos_0__ = 0x26;
                    continue;
                }
                /* IL_24: ldc.i4.1 */
                /* IL_25: ret */
                return (1|0);
                case 0x26:
                /* IL_26: ldloc.0 */
                /* IL_27: callvirt Int32 Turn()*/
                /* IL_2C: ldc.i4.4 */
                /* IL_2D: beq.s IL_31*/
                
                if ((((loc0.ifacemap)[t5].x600000e)())(loc0) === (4|0)){
                    __pos_0__ = 0x31;
                    continue;
                }
                /* IL_2F: ldc.i4.2 */
                /* IL_30: ret */
                return (2|0);
                case 0x31:
                /* IL_31: ldloc.1 */
                /* IL_32: callvirt Int32 Turn()*/
                /* IL_37: ldc.i4.8 */
                /* IL_38: beq.s IL_3D*/
                
                if ((((loc1.vtable)["asm1.x6000012"])())(loc1) === (8|0)){
                    __pos_0__ = 0x3D;
                    continue;
                }
                /* IL_3A: ldc.i4.s 10*/
                /* IL_3C: ret */
                return (10|0);
                case 0x3D:
                /* IL_3D: ldloc.1 */
                /* IL_3E: callvirt Int32 Turn()*/
                /* IL_43: ldc.i4.7 */
                /* IL_44: beq.s IL_48*/
                
                if ((((loc1.ifacemap)[t5].x600000e)())(loc1) === (7|0)){
                    __pos_0__ = 0x48;
                    continue;
                }
                /* IL_46: ldc.i4.3 */
                /* IL_47: ret */
                return (3|0);
                case 0x48:
                /* IL_48: ldloc.3 */
                /* IL_49: callvirt Int32 Turn()*/
                /* IL_4E: ldc.i4.8 */
                /* IL_4F: beq.s IL_53*/
                
                if ((((loc3.vtable)["asm1.x6000012"])())(loc3) === (8|0)){
                    __pos_0__ = 0x53;
                    continue;
                }
                /* IL_51: ldc.i4.4 */
                /* IL_52: ret */
                return (4|0);
                case 0x53:
                /* IL_53: ldloc.3 */
                /* IL_54: callvirt Int32 Turn()*/
                /* IL_59: ldc.i4.7 */
                /* IL_5A: beq.s IL_5E*/
                
                if ((((loc3.ifacemap)[t5].x600000e)())(loc3) === (7|0)){
                    __pos_0__ = 0x5E;
                    continue;
                }
                /* IL_5C: ldc.i4.5 */
                /* IL_5D: ret */
                return (5|0);
                case 0x5E:
                /* IL_5E: ldloc.s 4*/
                /* IL_60: callvirt Int32 Stop()*/
                /* IL_65: ldc.i4.2 */
                /* IL_66: beq.s IL_6A*/
                
                if ((((loc4.ifacemap)[t5].x600000d)())(loc4) === (2|0)){
                    __pos_0__ = 0x6A;
                    continue;
                }
                /* IL_68: ldc.i4.6 */
                /* IL_69: ret */
                return (6|0);
                case 0x6A:
                /* IL_6A: ldloc.0 */
                /* IL_6B: callvirt Int32 Stop()*/
                /* IL_70: ldc.i4.2 */
                /* IL_71: beq.s IL_75*/
                
                if ((((loc0.ifacemap)[t5].x600000d)())(loc0) === (2|0)){
                    __pos_0__ = 0x75;
                    continue;
                }
                /* IL_73: ldc.i4.7 */
                /* IL_74: ret */
                return (7|0);
                case 0x75:
                /* IL_75: ldloc.1 */
                /* IL_76: callvirt Int32 Stop()*/
                /* IL_7B: ldc.i4.6 */
                /* IL_7C: beq.s IL_80*/
                
                if ((((loc1.ifacemap)[t5].x600000d)())(loc1) === (6|0)){
                    __pos_0__ = 0x80;
                    continue;
                }
                /* IL_7E: ldc.i4.8 */
                /* IL_7F: ret */
                return (8|0);
                case 0x80:
                /* IL_80: ldloc.2 */
                /* IL_81: callvirt Int32 Walk()*/
                /* IL_86: ldc.i4.1 */
                /* IL_87: beq.s IL_8C*/
                
                if ((((loc2.vtable)["asm1.x6000013"])())(loc2) === (1|0)){
                    __pos_0__ = 0x8C;
                    continue;
                }
                /* IL_89: ldc.i4.s 9*/
                /* IL_8B: ret */
                return (9|0);
                case 0x8C:
                /* IL_8C: ldc.i4.0 */
                /* IL_8D: ret */
                return (0|0);
            }
        }
    };
    /* Void .ctor()*/
    asm.x600001e = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    asm.TestLog = (BLR.declare_type)("TestLog",function ()
    {
        this.init = BLR.nop;
        (BLR.init_type)(this,"TestLog",asm,false,false,false,false,false,[],[],((asm0)["System.Object"])(),(BLR.is_inst_default)(this),Array,"asm1.t2000002");
        this.Interfaces = [];
        (BLR.declare_virtual)(this,"asm0.x6000005","asm0.x6000005");
        (BLR.declare_virtual)(this,"asm0.x6000008","asm0.x6000008");
        (BLR.declare_virtual)(this,"asm0.x6000009","asm0.x6000009");
    },function ()
    {
        return new (((asm0)["System.Object"])())();
    },[]);
    asm.TestHelper = (BLR.declare_type)("TestHelper",function ()
    {
        this.init = BLR.nop;
        (BLR.init_type)(this,"TestHelper",asm,false,false,false,false,false,[],[],((asm0)["System.Object"])(),(BLR.is_inst_default)(this),Array,"asm1.t2000006");
        this.Interfaces = [];
        (BLR.declare_virtual)(this,"asm0.x6000005","asm0.x6000005");
        (BLR.declare_virtual)(this,"asm0.x6000008","asm0.x6000008");
        (BLR.declare_virtual)(this,"asm0.x6000009","asm0.x6000009");
    },function ()
    {
        return new (((asm0)["System.Object"])())();
    },[]);
    asm.IVehicle = (BLR.declare_type)("IVehicle",function ()
    {
        this.init = BLR.nop;
        (BLR.init_type)(this,"IVehicle",asm,false,false,true,false,false,[],[
            [
                asm1,
                "x600000c",
                "Start"
            ],
            [
                asm1,
                "x600000d",
                "Stop"
            ],
            [
                asm1,
                "x600000e",
                "Turn"
            ]
        ],null,(BLR.is_inst_interface)(this),Array,"asm1.t2000007");
        this.Interfaces = [];
        (BLR.declare_virtual)(this,"asm1.x600000c","asm1.x600000c");
        (BLR.declare_virtual)(this,"asm1.x600000d","asm1.x600000d");
        (BLR.declare_virtual)(this,"asm1.x600000e","asm1.x600000e");
    },function ()
    {
        return {};
    },[]);
    asm.IWalker = (BLR.declare_type)("IWalker",function ()
    {
        this.init = BLR.nop;
        (BLR.init_type)(this,"IWalker",asm,false,false,true,false,false,[],[
            [
                asm1,
                "x600000f",
                "Walk"
            ]
        ],null,(BLR.is_inst_interface)(this),Array,"asm1.t2000008");
        this.Interfaces = [];
        (BLR.declare_virtual)(this,"asm1.x600000f","asm1.x600000f");
    },function ()
    {
        return {};
    },[]);
    asm.Base = (BLR.declare_type)("Base",function ()
    {
        this.init = BLR.nop;
        (BLR.init_type)(this,"Base",asm,false,false,false,false,false,[],[
            [
                asm1,
                "x6000011",
                "Stop"
            ],
            [
                asm1,
                "x6000012",
                "Turn"
            ],
            [
                asm1,
                "x6000013",
                "Walk"
            ]
        ],((asm0)["System.Object"])(),(BLR.is_inst_default)(this),Array,"asm1.t2000009");
        this.Interfaces = [
            (asm1.IVehicle)()
        ];
        (BLR.declare_virtual)(this,"asm1.x6000010","asm1.x6000010");
        (BLR.declare_virtual)(this,"asm1.x6000011","asm1.x6000011");
        (BLR.declare_virtual)(this,"asm1.x6000012","asm1.x6000012");
        (BLR.declare_virtual)(this,"asm1.x6000013","asm1.x6000013");
        (BLR.declare_virtual)(this,"asm0.x6000005","asm0.x6000005");
        (BLR.declare_virtual)(this,"asm0.x6000008","asm0.x6000008");
        (BLR.declare_virtual)(this,"asm0.x6000009","asm0.x6000009");
        (BLR.tree_set)([
            (asm1.IVehicle)()
        ],this.prototype.ifacemap,{
            'x600000c': function ()
            {
                return asm1.x6000010;
            },
            'x600000d': function ()
            {
                return asm1.x6000011;
            },
            'x600000e': function ()
            {
                return asm1.x6000012;
            }
        });
    },function ()
    {
        return new (((asm0)["System.Object"])())();
    },[]);
    asm.Derived1 = (BLR.declare_type)("Derived1",function ()
    {
        this.init = BLR.nop;
        (BLR.init_type)(this,"Derived1",asm,false,false,false,false,false,[],[
            [
                asm1,
                "x6000015",
                "Turn"
            ]
        ],(asm1.Base)(),(BLR.is_inst_default)(this),Array,"asm1.t200000a");
        this.Interfaces = [
            (asm1.IVehicle)()
        ];
        (BLR.declare_virtual)(this,"asm1.x6000012","asm1.x6000015");
        (BLR.declare_virtual)(this,"asm1.x6000011","asm1.x6000011");
        (BLR.declare_virtual)(this,"asm1.x6000013","asm1.x6000013");
        (BLR.declare_virtual)(this,"asm0.x6000005","asm0.x6000005");
        (BLR.declare_virtual)(this,"asm0.x6000008","asm0.x6000008");
        (BLR.declare_virtual)(this,"asm0.x6000009","asm0.x6000009");
        (BLR.tree_set)([
            (asm1.IVehicle)()
        ],this.prototype.ifacemap,{
            'x600000c': function ()
            {
                return asm1.x6000010;
            },
            'x600000d': function ()
            {
                return asm1.x6000011;
            },
            'x600000e': function ()
            {
                return asm1.x6000015;
            }
        });
    },function ()
    {
        return new ((asm1.Base)())();
    },[]);
    asm.Derived2 = (BLR.declare_type)("Derived2",function ()
    {
        this.init = BLR.nop;
        (BLR.init_type)(this,"Derived2",asm,false,false,false,false,false,[],[
            [
                asm1,
                "x6000017",
                "Stop"
            ],
            [
                asm1,
                "x600001a",
                "Turn"
            ]
        ],(asm1.Base)(),(BLR.is_inst_default)(this),Array,"asm1.t200000b");
        this.Interfaces = [
            (asm1.IVehicle)()
        ];
        (BLR.declare_virtual)(this,"asm1.x6000017","asm1.x6000017");
        (BLR.declare_virtual)(this,"asm1.x6000018","asm1.x6000018");
        (BLR.declare_virtual)(this,"asm1.x6000019","asm1.x6000019");
        (BLR.declare_virtual)(this,"asm1.x6000012","asm1.x600001a");
        (BLR.declare_virtual)(this,"asm1.x6000011","asm1.x6000011");
        (BLR.declare_virtual)(this,"asm1.x6000013","asm1.x6000013");
        (BLR.declare_virtual)(this,"asm0.x6000005","asm0.x6000005");
        (BLR.declare_virtual)(this,"asm0.x6000008","asm0.x6000008");
        (BLR.declare_virtual)(this,"asm0.x6000009","asm0.x6000009");
        (BLR.tree_set)([
            (asm1.IVehicle)()
        ],this.prototype.ifacemap,{
            'x600000c': function ()
            {
                return asm1.x6000018;
            },
            'x600000d': function ()
            {
                return asm1.x6000017;
            },
            'x600000e': function ()
            {
                return asm1.x6000019;
            }
        });
    },function ()
    {
        return new ((asm1.Base)())();
    },[]);
    asm.Derived3 = (BLR.declare_type)("Derived3",function ()
    {
        this.init = BLR.nop;
        (BLR.init_type)(this,"Derived3",asm,false,false,false,false,false,[],[],(asm1.Derived1)(),(BLR.is_inst_default)(this),Array,"asm1.t200000c");
        this.Interfaces = [
            (asm1.IWalker)(),
            (asm1.IVehicle)()
        ];
        (BLR.declare_virtual)(this,"asm1.x6000012","asm1.x6000015");
        (BLR.declare_virtual)(this,"asm1.x6000011","asm1.x6000011");
        (BLR.declare_virtual)(this,"asm1.x6000013","asm1.x6000013");
        (BLR.declare_virtual)(this,"asm0.x6000005","asm0.x6000005");
        (BLR.declare_virtual)(this,"asm0.x6000008","asm0.x6000008");
        (BLR.declare_virtual)(this,"asm0.x6000009","asm0.x6000009");
        (BLR.tree_set)([
            (asm1.IWalker)()
        ],this.prototype.ifacemap,{
            'x600000f': function ()
            {
                return asm1.x6000013;
            }
        });
        (BLR.tree_set)([
            (asm1.IVehicle)()
        ],this.prototype.ifacemap,{
            'x600000c': function ()
            {
                return asm1.x6000010;
            },
            'x600000d': function ()
            {
                return asm1.x6000011;
            },
            'x600000e': function ()
            {
                return asm1.x6000015;
            }
        });
    },function ()
    {
        return new ((asm1.Derived1)())();
    },[]);
    asm.Test = (BLR.declare_type)("Test",function ()
    {
        this.init = BLR.nop;
        (BLR.init_type)(this,"Test",asm,false,false,false,false,false,[],[],((asm0)["System.Object"])(),(BLR.is_inst_default)(this),Array,"asm1.t200000d");
        this.Interfaces = [];
        (BLR.declare_virtual)(this,"asm0.x6000005","asm0.x6000005");
        (BLR.declare_virtual)(this,"asm0.x6000008","asm0.x6000008");
        (BLR.declare_virtual)(this,"asm0.x6000009","asm0.x6000009");
    },function ()
    {
        return new (((asm0)["System.Object"])())();
    },[]);
    asm.entryPoint = asm.x600001d;
})(asm1 || (asm1 = {}));
