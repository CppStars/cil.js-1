var asm1; (function (asm)
{
    asm.FullName = "iface.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    asm.next_hash = (1|0);
    /* static System.Void TestLog.Log(Object)*/
    asm.x6000001 = braille_test_log;;
    /*  TestLog..ctor()*/
    asm.x6000002 = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    /* System.Int32 RealWriter.WriteIt()*/
    asm.x600000b = function WriteIt(arg0)
    {
        var __pos__;
        var loc0;
        __pos__ = 0x0;
        /* IL_00: nop  iface.cs:9:5*/
        /* IL_01: ldc.i4.s 33 */
        /* IL_03: stloc.0  */
        loc0 = (33|0);
        /* IL_06: ldloc.0  */
        /* IL_07: ret  */
        return loc0;
    };;
    /*  RealWriter..ctor()*/
    asm.x600000c = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    /* static System.Int32 ProjectName.Main()*/
    asm.x600000d_init = function ()
    {
        (asm1.RealWriter().init)();
        (asm1.IHelloWorldWriter().init)();
        asm.x600000d = asm.x600000d_;
    };;
    asm.x600000d = function ()
    {
        BLR.init_base_types();
        asm.x600000d_init.apply(this,arguments);
        return asm.x600000d_.apply(this,arguments);
    };;
    asm.x600000d_ = function Main()
    {
        var t0;
        var t1;
        var __pos__;
        var in_block_0;
        var __finally_continuation_0__;
        var loc0;
        var loc2;
        var loc1;
        t0 = asm1.RealWriter();
        t1 = asm1.IHelloWorldWriter();
        __pos__ = 0x0;
        in_block_0 = true;
        __finally_continuation_0__ = __pos__;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  iface.cs:17:5*/
                
                /* IL_01: newobj Void .ctor() */
                /* IL_06: stloc.0  */
                loc0 = BLR.newobj(t0,asm1.x600000c,[null]);
                /* IL_07: ldloc.0  */
                /* IL_08: callvirt Int32 WriteIt() */
                /* IL_0D: ldc.i4.s 33 */
                /* IL_10: ceq  */
                /* IL_11: stloc.2  */
                loc2 = (((((loc0.ifacemap)[t1].x600000a)())(BLR.convert_box_to_pointer_as_needed(loc0)) === (33|0)) ? (1) : (0));
                /* IL_12: ldloc.2  */
                /* IL_13: brtrue.s IL_19 */
                
                if (loc2){
                    __pos__ = 0x19;
                    continue;
                }
                /* IL_15: ldc.i4.1  */
                /* IL_16: stloc.1  */
                loc1 = (1|0);
                /* IL_17: br.s IL_1D */
                __pos__ = 0x1D;
                continue;
                case 0x19:
                /* IL_19: ldc.i4.0  */
                /* IL_1A: stloc.1  */
                loc1 = (0|0);
                case 0x1D:
                /* IL_1D: ldloc.1  */
                /* IL_1E: ret  */
                return loc1;
            }
        }
    };
    /*  ProjectName..ctor()*/
    asm.x600000e = function _ctor(arg0)
    {
        var __pos__;
        __pos__ = 0x0;
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    asm.TestLog = BLR.declare_type(
        "TestLog",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"TestLog",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000002");
            this.GenericTypeMetadataName = "asm1.t2000002";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.IHelloWorldWriter = BLR.declare_type(
        "IHelloWorldWriter",
        [],
        function ()
        {
            return {};
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"IHelloWorldWriter",false,false,true,false,false,[],[
                    [asm1, "x600000a", "WriteIt"]
                ],null,BLR.is_inst_interface(this),Array,"asm1.t2000006");
            this.GenericTypeMetadataName = "asm1.t2000006";
            BLR.declare_virtual(this,"asm1.x600000a","asm1.x600000a");
        });
    asm.RealWriter = BLR.declare_type(
        "RealWriter",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"RealWriter",false,false,false,false,false,[],[
                    [asm1, "x600000b", "WriteIt"]
                ],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000007");
            this.GenericTypeMetadataName = "asm1.t2000007";
            BLR.declare_virtual(this,"asm1.x600000b","asm1.x600000b");
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
            BLR.implement_interface(
                this,
                [asm1.IHelloWorldWriter()],
                {
                    'x600000a': function (){ return asm1.x600000b;}
                });
        });
    asm.ProjectName = BLR.declare_type(
        "ProjectName",
        [],
        function ()
        {
            return new ((asm0)["System.Object"]())();
        },
        function ()
        {
            this.init = BLR.nop;
            BLR.init_type(this,asm,"ProjectName",false,false,false,false,false,[],[],(asm0)["System.Object"](),BLR.is_inst_default(this),Array,"asm1.t2000008");
            this.GenericTypeMetadataName = "asm1.t2000008";
            BLR.declare_virtual(this,"asm0.x6000005","asm0.x6000005");
            BLR.declare_virtual(this,"asm0.x6000008","asm0.x6000008");
            BLR.declare_virtual(this,"asm0.x6000009","asm0.x6000009");
        });
    asm.entryPoint = asm.x600000d;
})(asm1 || (asm1 = {}));
