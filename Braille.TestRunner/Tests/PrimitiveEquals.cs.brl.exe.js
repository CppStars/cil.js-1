var asm1; (function (asm)
{
    asm.FullName = "PrimitiveEquals.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
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
    /* static Void Main()*/
    asm.x600000c_init = function ()
    {
        (((asm0)["System.ValueType"])().init)();
        (((asm0)["System.Byte"])().init)();
        (((asm0)["System.Int32"])().init)();
        (((asm0)["System.SByte"])().init)();
        (((asm0)["System.Boolean"])().init)();
        asm.x600000c = asm.x600000c_;
    };;
    asm.x600000c = function ()
    {
        (asm.x600000c_init.apply)(this,arguments);
        return (asm.x600000c_.apply)(this,arguments);
    };;
    asm.x600000c_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        var t3;
        var t4;
        t0 = ((asm0)["System.ValueType"])();
        t1 = ((asm0)["System.Byte"])();
        t2 = ((asm0)["System.Int32"])();
        t3 = ((asm0)["System.SByte"])();
        t4 = ((asm0)["System.Boolean"])();
        /* IL_00: ldc.i4.0 */
        /* IL_01: box System.Byte*/
        /* IL_06: ldc.i4.0 */
        /* IL_07: box System.Byte*/
        /* IL_0C: call Void Test(System.Object, System.Object)*/
        (asm1.x600000d)({
            'boxed': (0|0),
            'type': t1,
            'vtable': t1.prototype.vtable,
            'ifacemap': t1.prototype.ifacemap
        },{
            'boxed': (0|0),
            'type': t1,
            'vtable': t1.prototype.vtable,
            'ifacemap': t1.prototype.ifacemap
        });
        /* IL_11: ldc.i4.0 */
        /* IL_12: box System.Byte*/
        /* IL_17: ldc.i4.1 */
        /* IL_18: box System.Byte*/
        /* IL_1D: call Void Test(System.Object, System.Object)*/
        (asm1.x600000d)({
            'boxed': (0|0),
            'type': t1,
            'vtable': t1.prototype.vtable,
            'ifacemap': t1.prototype.ifacemap
        },{
            'boxed': (1|0),
            'type': t1,
            'vtable': t1.prototype.vtable,
            'ifacemap': t1.prototype.ifacemap
        });
        /* IL_22: ldc.i4.1 */
        /* IL_23: box System.Byte*/
        /* IL_28: ldc.i4.1 */
        /* IL_29: box System.Int32*/
        /* IL_2E: call Void Test(System.Object, System.Object)*/
        (asm1.x600000d)({
            'boxed': (1|0),
            'type': t1,
            'vtable': t1.prototype.vtable,
            'ifacemap': t1.prototype.ifacemap
        },{
            'boxed': (1|0),
            'type': t2,
            'vtable': t2.prototype.vtable,
            'ifacemap': t2.prototype.ifacemap
        });
        /* IL_33: ldc.i4.0 */
        /* IL_34: box System.Byte*/
        /* IL_39: ldc.i4.0 */
        /* IL_3A: box System.SByte*/
        /* IL_3F: call Void Test(System.Object, System.Object)*/
        (asm1.x600000d)({
            'boxed': (0|0),
            'type': t1,
            'vtable': t1.prototype.vtable,
            'ifacemap': t1.prototype.ifacemap
        },{
            'boxed': (0|0),
            'type': t3,
            'vtable': t3.prototype.vtable,
            'ifacemap': t3.prototype.ifacemap
        });
        /* IL_44: ldc.i4.0 */
        /* IL_45: box System.SByte*/
        /* IL_4A: ldc.i4.0 */
        /* IL_4B: box System.Byte*/
        /* IL_50: call Void Test(System.Object, System.Object)*/
        (asm1.x600000d)({
            'boxed': (0|0),
            'type': t3,
            'vtable': t3.prototype.vtable,
            'ifacemap': t3.prototype.ifacemap
        },{
            'boxed': (0|0),
            'type': t1,
            'vtable': t1.prototype.vtable,
            'ifacemap': t1.prototype.ifacemap
        });
        /* IL_55: ldc.i4.0 */
        /* IL_56: box System.SByte*/
        /* IL_5B: ldc.i4.1 */
        /* IL_5C: box System.Byte*/
        /* IL_61: call Void Test(System.Object, System.Object)*/
        (asm1.x600000d)({
            'boxed': (0|0),
            'type': t3,
            'vtable': t3.prototype.vtable,
            'ifacemap': t3.prototype.ifacemap
        },{
            'boxed': (1|0),
            'type': t1,
            'vtable': t1.prototype.vtable,
            'ifacemap': t1.prototype.ifacemap
        });
        /* IL_66: ldc.i4.1 */
        /* IL_67: box System.SByte*/
        /* IL_6C: ldc.i4 1000*/
        /* IL_71: box System.Int32*/
        /* IL_76: call Void Test(System.Object, System.Object)*/
        (asm1.x600000d)({
            'boxed': (1|0),
            'type': t3,
            'vtable': t3.prototype.vtable,
            'ifacemap': t3.prototype.ifacemap
        },{
            'boxed': (1000|0),
            'type': t2,
            'vtable': t2.prototype.vtable,
            'ifacemap': t2.prototype.ifacemap
        });
        /* IL_7B: ldc.i4.0 */
        /* IL_7C: box System.SByte*/
        /* IL_81: ldc.i4.0 */
        /* IL_82: box System.SByte*/
        /* IL_87: call Void Test(System.Object, System.Object)*/
        (asm1.x600000d)({
            'boxed': (0|0),
            'type': t3,
            'vtable': t3.prototype.vtable,
            'ifacemap': t3.prototype.ifacemap
        },{
            'boxed': (0|0),
            'type': t3,
            'vtable': t3.prototype.vtable,
            'ifacemap': t3.prototype.ifacemap
        });
        /* IL_8C: ldc.i4 255*/
        /* IL_91: box System.Byte*/
        /* IL_96: ldc.i4.m1 */
        /* IL_97: box System.SByte*/
        /* IL_9C: call Void Test(System.Object, System.Object)*/
        (asm1.x600000d)({
            'boxed': (255|0),
            'type': t1,
            'vtable': t1.prototype.vtable,
            'ifacemap': t1.prototype.ifacemap
        },{
            'boxed': (-1|0),
            'type': t3,
            'vtable': t3.prototype.vtable,
            'ifacemap': t3.prototype.ifacemap
        });
        /* IL_A1: ldc.i4.0 */
        /* IL_A2: box System.SByte*/
        /* IL_A7: ldc.i4.1 */
        /* IL_A8: box System.Byte*/
        /* IL_AD: call Void Test(System.Object, System.Object)*/
        (asm1.x600000d)({
            'boxed': (0|0),
            'type': t3,
            'vtable': t3.prototype.vtable,
            'ifacemap': t3.prototype.ifacemap
        },{
            'boxed': (1|0),
            'type': t1,
            'vtable': t1.prototype.vtable,
            'ifacemap': t1.prototype.ifacemap
        });
        /* IL_B2: ldc.i4.1 */
        /* IL_B3: box System.SByte*/
        /* IL_B8: ldc.i4 1000*/
        /* IL_BD: box System.Int32*/
        /* IL_C2: call Void Test(System.Object, System.Object)*/
        (asm1.x600000d)({
            'boxed': (1|0),
            'type': t3,
            'vtable': t3.prototype.vtable,
            'ifacemap': t3.prototype.ifacemap
        },{
            'boxed': (1000|0),
            'type': t2,
            'vtable': t2.prototype.vtable,
            'ifacemap': t2.prototype.ifacemap
        });
        /* IL_C7: ldc.i4.0 */
        /* IL_C8: box System.SByte*/
        /* IL_CD: ldc.i4.0 */
        /* IL_CE: box System.SByte*/
        /* IL_D3: call Void Test(System.Object, System.Object)*/
        (asm1.x600000d)({
            'boxed': (0|0),
            'type': t3,
            'vtable': t3.prototype.vtable,
            'ifacemap': t3.prototype.ifacemap
        },{
            'boxed': (0|0),
            'type': t3,
            'vtable': t3.prototype.vtable,
            'ifacemap': t3.prototype.ifacemap
        });
        /* IL_D8: ldc.i4.1 */
        /* IL_D9: box System.Boolean*/
        /* IL_DE: ldc.i4.1 */
        /* IL_DF: box System.Boolean*/
        /* IL_E4: call Void Test(System.Object, System.Object)*/
        (asm1.x600000d)({
            'boxed': (1|0),
            'type': t4,
            'vtable': t4.prototype.vtable,
            'ifacemap': t4.prototype.ifacemap
        },{
            'boxed': (1|0),
            'type': t4,
            'vtable': t4.prototype.vtable,
            'ifacemap': t4.prototype.ifacemap
        });
        /* IL_E9: ldc.i4.1 */
        /* IL_EA: box System.Boolean*/
        /* IL_EF: ldc.i4.0 */
        /* IL_F0: box System.Boolean*/
        /* IL_F5: call Void Test(System.Object, System.Object)*/
        (asm1.x600000d)({
            'boxed': (1|0),
            'type': t4,
            'vtable': t4.prototype.vtable,
            'ifacemap': t4.prototype.ifacemap
        },{
            'boxed': (0|0),
            'type': t4,
            'vtable': t4.prototype.vtable,
            'ifacemap': t4.prototype.ifacemap
        });
        /* IL_FA: ldc.i4.0 */
        /* IL_FB: box System.Boolean*/
        /* IL_100: ldc.i4.1 */
        /* IL_101: box System.Boolean*/
        /* IL_106: call Void Test(System.Object, System.Object)*/
        (asm1.x600000d)({
            'boxed': (0|0),
            'type': t4,
            'vtable': t4.prototype.vtable,
            'ifacemap': t4.prototype.ifacemap
        },{
            'boxed': (1|0),
            'type': t4,
            'vtable': t4.prototype.vtable,
            'ifacemap': t4.prototype.ifacemap
        });
        /* IL_10B: ldc.i4.0 */
        /* IL_10C: box System.Boolean*/
        /* IL_111: ldc.i4.0 */
        /* IL_112: box System.Boolean*/
        /* IL_117: call Void Test(System.Object, System.Object)*/
        (asm1.x600000d)({
            'boxed': (0|0),
            'type': t4,
            'vtable': t4.prototype.vtable,
            'ifacemap': t4.prototype.ifacemap
        },{
            'boxed': (0|0),
            'type': t4,
            'vtable': t4.prototype.vtable,
            'ifacemap': t4.prototype.ifacemap
        });
        /* IL_11C: ret */
        return ;
    };
    /* static Void Test(System.Object, System.Object)*/
    asm.x600000d_init = function ()
    {
        (((asm0)["System.Boolean"])().init)();
        asm.x600000d = asm.x600000d_;
    };;
    asm.x600000d = function (arg0,arg1)
    {
        (asm.x600000d_init.apply)(this,arguments);
        return (asm.x600000d_.apply)(this,arguments);
    };;
    asm.x600000d_ = function Test(arg0,arg1)
    {
        var t0;
        t0 = ((asm0)["System.Boolean"])();
        /* IL_00: ldarg.0 */
        /* IL_01: ldarg.1 */
        /* IL_02: callvirt Boolean Equals(System.Object)*/
        /* IL_07: box System.Boolean*/
        /* IL_0C: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (((arg0.vtable)["asm0.x6000008"])())((BLR.convert_box_to_pointer_as_needed)(arg0),arg1),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_11: ret */
        return ;
    };
    /* Void .ctor()*/
    asm.x600000e = function _ctor(arg0)
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
    asm.Program = (BLR.declare_type)("Program",function ()
    {
        this.init = BLR.nop;
        (BLR.init_type)(this,"Program",asm,false,false,false,false,false,[],[],((asm0)["System.Object"])(),(BLR.is_inst_default)(this),Array,"asm1.t2000007");
        this.Interfaces = [];
        (BLR.declare_virtual)(this,"asm0.x6000005","asm0.x6000005");
        (BLR.declare_virtual)(this,"asm0.x6000008","asm0.x6000008");
        (BLR.declare_virtual)(this,"asm0.x6000009","asm0.x6000009");
    },function ()
    {
        return new (((asm0)["System.Object"])())();
    },[]);
    asm.entryPoint = asm.x600000c;
})(asm1 || (asm1 = {}));
