var asm1; (function (asm)
{
    asm.FullName = "array-cast.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
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
    /* static System.Int32 Test.Main()*/
    asm.x600000a_init = function ()
    {
        ((asm0)["System.Attribute"]().init)();
        ((asm0)["System.Array`1"]((asm0)["System.Object"]()).init)();
        asm.x600000a = asm.x600000a_;
    };;
    asm.x600000a = function ()
    {
        CILJS.init_base_types();
        asm.x600000a_init.apply(this,arguments);
        return asm.x600000a_.apply(this,arguments);
    };;
    asm.x600000a_ = function Main()
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
        t0 = (asm0)["System.Attribute"]();
        t1 = (asm0)["System.Object"]();
        t2 = (asm0)["System.Array`1"](t1);
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: ldc.i4.1 */
                /* IL_01: newarr System.Attribute*/
                /* IL_06: stloc.0 */
                loc0 = CILJS.new_array(t0,(1|0));
                /* IL_07: ldloc.0 */
                /* IL_08: stloc.1 */
                loc1 = loc0;
                /* IL_09: ldloc.1 */
                /* IL_0A: castclass System.Object[]*/
                /* IL_0F: stloc.2 */
                loc2 = CILJS.cast_class(loc1,t2);
                /* IL_10: ldloc.1 */
                /* IL_11: isinst System.Object[]*/
                /* IL_16: stloc.2 */
                loc2 = t2.IsInst(loc1);
                /* IL_17: ldloc.2 */
                /* IL_18: brtrue.s IL_1C*/
                
                if (loc2){
                    __pos__ = 0x1C;
                    continue;
                }
                /* IL_1A: ldc.i4.1 */
                /* IL_1B: ret */
                return (1|0);
                case 0x1C:
                /* IL_1C: ldc.i4.0 */
                /* IL_1D: ret */
                return (0|0);
            }
        }
    };
    /*  Test..ctor()*/
    asm.x600000b = function _ctor(arg0)
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
    (asm)["Test.Test"] = CILJS.declare_type(
        "Test",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"Test.Test",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000006");
            this.GenericTypeMetadataName = "asm1.t2000006";
            CILJS.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            CILJS.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            CILJS.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.entryPoint = asm.x600000a;
})(asm1 || (asm1 = {}));
