var asm1; (function (asm)
{
    asm.FullName = "HashCode.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
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
    /* Void .ctor()*/
    asm.x600000c = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    /* static Void Main()*/
    asm.x600000d_init = function ()
    {
        (((asm0)["System.ValueType"])().init)();
        ((asm1.A)().init)();
        (((asm0)["System.Boolean"])().init)();
        asm.x600000d = asm.x600000d_;
    };;
    asm.x600000d = function ()
    {
        (asm.x600000d_init.apply)(this,arguments);
        return (asm.x600000d_.apply)(this,arguments);
    };;
    asm.x600000d_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        var loc0;
        var loc1;
        var loc2;
        t0 = ((asm0)["System.ValueType"])();
        t1 = (asm1.A)();
        t2 = ((asm0)["System.Boolean"])();
        /* IL_00: newobj Void .ctor()*/
        /* IL_05: stloc.0 */
        loc0 = (BLR.newobj)(t1,asm1.x600000c,[
            null
        ]);
        /* IL_06: ldloc.0 */
        /* IL_07: callvirt Int32 GetHashCode()*/
        /* IL_0C: stloc.1 */
        loc1 = (((loc0.vtable)["asm0.x6000009"])())(loc0);
        /* IL_0D: ldloc.1 */
        /* IL_0E: ldc.i4.0 */
        /* IL_10: ceq */
        /* IL_11: ldc.i4.0 */
        /* IL_13: ceq */
        /* IL_14: box System.Boolean*/
        /* IL_19: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': ((((loc1 === (0|0)) ? (1) : (0)) === (0|0)) ? (1) : (0)),
            'type': t2,
            'vtable': t2.prototype.vtable,
            'ifacemap': t2.prototype.ifacemap
        });
        /* IL_1E: ldloc.1 */
        /* IL_1F: ldloc.0 */
        /* IL_20: callvirt Int32 GetHashCode()*/
        /* IL_26: ceq */
        /* IL_27: box System.Boolean*/
        /* IL_2C: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': ((loc1 === (((loc0.vtable)["asm0.x6000009"])())(loc0)) ? (1) : (0)),
            'type': t2,
            'vtable': t2.prototype.vtable,
            'ifacemap': t2.prototype.ifacemap
        });
        /* IL_31: newobj Void .ctor()*/
        /* IL_36: stloc.2 */
        loc2 = (BLR.newobj)(t1,asm1.x600000c,[
            null
        ]);
        /* IL_37: ldloc.2 */
        /* IL_38: callvirt Int32 GetHashCode()*/
        /* IL_3D: ldloc.2 */
        /* IL_3E: callvirt Int32 GetHashCode()*/
        /* IL_44: ceq */
        /* IL_45: box System.Boolean*/
        /* IL_4A: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (((((loc2.vtable)["asm0.x6000009"])())(loc2) === (((loc2.vtable)["asm0.x6000009"])())(loc2)) ? (1) : (0)),
            'type': t2,
            'vtable': t2.prototype.vtable,
            'ifacemap': t2.prototype.ifacemap
        });
        /* IL_4F: ldloc.2 */
        /* IL_50: callvirt Int32 GetHashCode()*/
        /* IL_55: ldloc.0 */
        /* IL_56: callvirt Int32 GetHashCode()*/
        /* IL_5C: ceq */
        /* IL_5D: ldc.i4.0 */
        /* IL_5F: ceq */
        /* IL_60: box System.Boolean*/
        /* IL_65: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (((((((loc2.vtable)["asm0.x6000009"])())(loc2) === (((loc0.vtable)["asm0.x6000009"])())(loc0)) ? (1) : (0)) === (0|0)) ? (1) : (0)),
            'type': t2,
            'vtable': t2.prototype.vtable,
            'ifacemap': t2.prototype.ifacemap
        });
        /* IL_6A: ldstr hello*/
        /* IL_6F: call Void TestString(System.String)*/
        (asm1.x600000e)((BLR.new_string)("hello"));
        /* IL_74: ret */
        return ;
    };
    /* static Void TestString(System.String)*/
    asm.x600000e_init = function ()
    {
        (((asm0)["System.Boolean"])().init)();
        asm.x600000e = asm.x600000e_;
    };;
    asm.x600000e = function (arg0)
    {
        (asm.x600000e_init.apply)(this,arguments);
        return (asm.x600000e_.apply)(this,arguments);
    };;
    asm.x600000e_ = function TestString(arg0)
    {
        var t0;
        var loc0;
        var loc1;
        t0 = ((asm0)["System.Boolean"])();
        /* IL_00: ldarg.0 */
        /* IL_01: ldstr  world*/
        /* IL_06: call String Concat(System.String, System.String)*/
        /* IL_0B: stloc.0 */
        loc0 = (asm0.x600016f)(arg0,(BLR.new_string)(" world"));
        /* IL_0C: ldstr hello world*/
        /* IL_11: stloc.1 */
        loc1 = (BLR.new_string)("hello world");
        /* IL_12: ldloc.0 */
        /* IL_13: callvirt Int32 GetHashCode()*/
        /* IL_18: ldloc.1 */
        /* IL_19: callvirt Int32 GetHashCode()*/
        /* IL_1F: ceq */
        /* IL_20: box System.Boolean*/
        /* IL_25: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (((((loc0.vtable)["asm0.x6000009"])())(loc0) === (((loc1.vtable)["asm0.x6000009"])())(loc1)) ? (1) : (0)),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_2A: ldloc.0 */
        /* IL_2B: callvirt Int32 GetHashCode()*/
        /* IL_30: ldarg.0 */
        /* IL_31: callvirt Int32 GetHashCode()*/
        /* IL_37: ceq */
        /* IL_38: box System.Boolean*/
        /* IL_3D: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (((((loc0.vtable)["asm0.x6000009"])())(loc0) === (((arg0.vtable)["asm0.x6000009"])())(arg0)) ? (1) : (0)),
            'type': t0,
            'vtable': t0.prototype.vtable,
            'ifacemap': t0.prototype.ifacemap
        });
        /* IL_42: ret */
        return ;
    };
    /* Void .ctor()*/
    asm.x600000f = function _ctor(arg0)
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
    asm.A = (BLR.declare_type)("A",function ()
    {
        this.init = BLR.nop;
        (BLR.init_type)(this,"A",asm,false,false,false,false,false,[],[],((asm0)["System.Object"])(),(BLR.is_inst_default)(this),Array,"asm1.t2000007");
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
        (BLR.init_type)(this,"Program",asm,false,false,false,false,false,[],[],((asm0)["System.Object"])(),(BLR.is_inst_default)(this),Array,"asm1.t2000008");
        this.Interfaces = [];
        (BLR.declare_virtual)(this,"asm0.x6000005","asm0.x6000005");
        (BLR.declare_virtual)(this,"asm0.x6000008","asm0.x6000008");
        (BLR.declare_virtual)(this,"asm0.x6000009","asm0.x6000009");
    },function ()
    {
        return new (((asm0)["System.Object"])())();
    },[]);
    asm.entryPoint = asm.x600000d;
})(asm1 || (asm1 = {}));
