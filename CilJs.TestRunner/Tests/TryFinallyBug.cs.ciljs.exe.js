var asm1;(function (asm)
{
    asm.FullName = "TryFinallyBug.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /* static System.Void Program.Main()*/
    asm.x6000001 = function Main()
    {
        var t0;
        var t1;
        var in_block_0;
        var __pos__;
        var in_block_2;
        var __finally_continuation_2__;
        var loc0;
        var __error_handled_1__;
        var loc1;
        CILJS.init_base_types();
        t0 = (asm0)["System.Object"]();
        t1 = (asm0)["System.Exception"]();
        in_block_0 = true;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: nop  */
                
                
                try {
                    /* IL_01: nop  */
                    
                    /* IL_02: ldstr Try 1 */
                    /* IL_07: ldc.i4.0  */
                    /* IL_08: newarr System.Object */
                    /* IL_0D: call Void WriteLine(System.String, System.Object[]) */
                    asm0.x600005b(CILJS.new_string("Try 1"),CILJS.new_array(t0,(0|0)));
                    /* IL_12: nop  */
                    
                    
                    try {
                        /* IL_13: nop  */
                        
                        /* IL_14: ldstr Try 2 */
                        /* IL_19: ldc.i4.0  */
                        /* IL_1A: newarr System.Object */
                        /* IL_1F: call Void WriteLine(System.String, System.Object[]) */
                        asm0.x600005b(CILJS.new_string("Try 2"),CILJS.new_array(t0,(0|0)));
                        /* IL_24: nop  */
                        
                        /* IL_25: newobj Void .ctor() */
                        /* IL_2A: throw  */
                        throw CILJS.newobj(t1,asm0.x6000076,[null]);
                    }
                    
                    finally {
                        in_block_2 = true;
                        __finally_continuation_2__ = __pos__;
                        __pos__ = 43;
                        
                        while (in_block_2){
                            
                            switch (__pos__){
                                case 0x2B:
                                /* IL_2B: nop  */
                                
                                /* IL_2C: ldstr Finally with branching */
                                /* IL_31: ldc.i4.0  */
                                /* IL_32: newarr System.Object */
                                /* IL_37: call Void WriteLine(System.String, System.Object[]) */
                                asm0.x600005b(CILJS.new_string("Finally with branching"),CILJS.new_array(t0,(0|0)));
                                /* IL_3C: nop  */
                                
                                /* IL_3D: call Boolean What() */
                                /* IL_42: stloc.0  */
                                loc0 = asm1.x6000002();
                                /* IL_43: ldloc.0  */
                                /* IL_44: brfalse.s IL_57 */
                                
                                if ((!(loc0))){
                                    __pos__ = 0x57;
                                    continue;
                                }
                                /* IL_46: ldstr In branch */
                                /* IL_4B: ldc.i4.0  */
                                /* IL_4C: newarr System.Object */
                                /* IL_51: call Void WriteLine(System.String, System.Object[]) */
                                asm0.x600005b(CILJS.new_string("In branch"),CILJS.new_array(t0,(0|0)));
                                /* IL_56: nop  */
                                
                                case 0x57:
                                /* IL_57: ldstr After branch */
                                /* IL_5C: ldc.i4.0  */
                                /* IL_5D: newarr System.Object */
                                /* IL_62: call Void WriteLine(System.String, System.Object[]) */
                                asm0.x600005b(CILJS.new_string("After branch"),CILJS.new_array(t0,(0|0)));
                                /* IL_67: nop  */
                                
                                /* IL_68: nop  */
                                
                                /* IL_69: endfinally  */
                                in_block_2 = false;
                                __pos__ = __finally_continuation_2__;
                                break;
                            }
                        }
                    }
                }
                
                catch (__error__) {
                    __error_handled_1__ = false;
                    
                    if ((!(__error_handled_1__)) && (__error__ instanceof (asm0)["System.Exception"]())){
                        st_12 = __error__;
                        st_12 = __error__;
                        __error_handled_1__ = true;
                        /* IL_6A: stloc.1  */
                        loc1 = st_12;
                        /* IL_6B: nop  */
                        
                        /* IL_6C: ldstr Catch */
                        /* IL_71: ldc.i4.0  */
                        /* IL_72: newarr System.Object */
                        /* IL_77: call Void WriteLine(System.String, System.Object[]) */
                        asm0.x600005b(CILJS.new_string("Catch"),CILJS.new_array(t0,(0|0)));
                        /* IL_7C: nop  */
                        
                        /* IL_7D: nop  */
                        
                        /* IL_7E: leave.s IL_80 */
                        __pos__ = 0x80;
                    }
                    
                    if ((!(__error_handled_1__))){
                        throw __error__;
                    }
                }
                break;
                case 0x80:
                /* IL_80: ret  */
                return ;
            }
        }
    };;
    /* static System.Boolean Program.What()*/
    asm.x6000002 = function What()
    {
        var loc0;
        /* IL_00: nop  */
        /* IL_01: ldc.i4.1  */
        /* IL_02: stloc.0  */
        loc0 = (1|0);
        /* IL_05: ldloc.0  */
        /* IL_06: ret  */
        return loc0;
    };;
    /*  Program..ctor()*/
    asm.x6000003 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: nop  */
        /* IL_07: ret  */
        return ;
    };;
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
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm1.t2000002");
            this.GenericTypeMetadataName = "asm1.t2000002";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.entryPoint = asm.x6000001;
})(asm1 || (asm1 = {}));
