var asm2;(function (asm)
{
    asm.FullName = "Sort.cs.ciljs, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    /* System.String Baz.get_Name()*/
    asm.x6000001 = function get_Name(arg0)
    {
        var t0;
        var t1;
        var in_block_0;
        var __pos__;
        var loc0;
        var loc1;
        t0 = (asm0)["System.Object"]();
        t1 = (asm0)["System.Int32"]();
        in_block_0 = true;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: ldarg.0  */
                /* IL_01: ldfld String name */
                /* IL_06: call Boolean IsNullOrEmpty(System.String) */
                /* IL_0B: brfalse.s IL_1C */
                
                if ((!(asm0.x6000140(arg0.Bazname)))){
                    __pos__ = 0x1C;
                    continue;
                }
                /* IL_0D: ldarg.0  */
                /* IL_0E: call Int32 get_Age() */
                /* IL_13: stloc.0  */
                loc0 = asm2.x6000002(arg0);
                /* IL_14: ldloca.s 0 */
                /* IL_16: call String ToString() */
                /* IL_1B: ret  */
                return asm0.x600009d({
                        'w': function (v)
                        {
                            loc0 = v;
                        },
                        'r': function ()
                        {
                            return loc0;
                        }
                    });
                case 0x1C:
                /* IL_1C: ldc.i4.4  */
                /* IL_1D: newarr System.Object */
                /* IL_22: stloc.1  */
                loc1 = CILJS.new_array(t0,(4|0));
                /* IL_23: ldloc.1  */
                /* IL_24: ldc.i4.0  */
                /* IL_25: ldarg.0  */
                /* IL_26: ldfld String name */
                /* IL_2B: stelem.ref  */
                CILJS.stelem_ref(loc1,(0|0),arg0.Bazname);
                /* IL_2C: ldloc.1  */
                /* IL_2D: ldc.i4.1  */
                /* IL_2E: ldstr  ( */
                /* IL_33: stelem.ref  */
                CILJS.stelem_ref(loc1,(1|0),CILJS.new_string(" ("));
                /* IL_34: ldloc.1  */
                /* IL_35: ldc.i4.2  */
                /* IL_36: ldarg.0  */
                /* IL_37: call Int32 get_Age() */
                /* IL_3C: box System.Int32 */
                /* IL_41: stelem.ref  */
                CILJS.stelem_ref(loc1,(2|0),{
                        'boxed': asm2.x6000002(arg0),
                        'type': t1,
                        'vtable': t1.prototype.vtable,
                        'ifacemap': t1.prototype.ifacemap
                    });
                /* IL_42: ldloc.1  */
                /* IL_43: ldc.i4.3  */
                /* IL_44: ldstr ) */
                /* IL_49: stelem.ref  */
                CILJS.stelem_ref(loc1,(3|0),CILJS.new_string(")"));
                /* IL_4A: ldloc.1  */
                /* IL_4B: call String Concat(System.Object[]) */
                /* IL_50: ret  */
                return asm0.x600012d(loc1);
            }
        }
    };;
    /* System.Int32 Baz.get_Age()*/
    asm.x6000002 = function get_Age(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: ldfld Int32 age */
        /* IL_06: ldc.i4.1  */
        /* IL_07: add  */
        /* IL_08: ret  */
        return (arg0.Bazage + (1|0)) | (0|0);
    };;
    /* System.Int32 Baz.GetHashCode()*/
    asm.x6000004 = function GetHashCode(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Int32 get_Age() */
        /* IL_06: ldarg.0  */
        /* IL_07: call String get_Name() */
        /* IL_0C: callvirt Int32 GetHashCode() */
        /* IL_11: xor  */
        /* IL_12: ret  */
        return asm2.x6000002(arg0) ^ (((asm2.x6000001(arg0).vtable)["asm0.x60000f1"])())(asm2.x6000001(arg0));
    };;
    /* System.Boolean Baz.Equals(Object)*/
    asm.x6000005_init = function ()
    {
        (asm2.Baz().init)();
        asm.x6000005 = asm.x6000005_;
    };;
    asm.x6000005 = function (arg0, arg1)
    {
        asm.x6000005_init.apply(this,arguments);
        return asm.x6000005_.apply(this,arguments);
    };;
    asm.x6000005_ = function Equals(arg0, arg1)
    {
        var t0;
        var in_block_0;
        var __pos__;
        var loc0;
        t0 = asm2.Baz();
        in_block_0 = true;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: ldarg.1  */
                /* IL_01: isinst Baz */
                /* IL_06: stloc.0  */
                loc0 = t0.IsInst(arg1);
                /* IL_07: ldloc.0  */
                /* IL_08: brtrue.s IL_0C */
                
                if (loc0){
                    __pos__ = 0xC;
                    continue;
                }
                /* IL_0A: ldc.i4.0  */
                /* IL_0B: ret  */
                return (0|0);
                case 0xC:
                /* IL_0C: ldloc.0  */
                /* IL_0D: callvirt Int32 get_Age() */
                /* IL_12: ldarg.0  */
                /* IL_13: call Int32 get_Age() */
                /* IL_18: bne.un.s IL_2C */
                
                if (CILJS.unsigned_value(asm2.x6000002(loc0)) != CILJS.unsigned_value(asm2.x6000002(arg0))){
                    __pos__ = 0x2C;
                    continue;
                }
                /* IL_1A: ldloc.0  */
                /* IL_1B: callvirt String get_Name() */
                /* IL_20: ldarg.0  */
                /* IL_21: call String get_Name() */
                /* IL_26: call Boolean op_Equality(System.String, System.String) */
                /* IL_2B: ret  */
                return asm0.x6000132(asm2.x6000001(loc0),asm2.x6000001(arg0));
                case 0x2C:
                /* IL_2C: ldc.i4.0  */
                /* IL_2D: ret  */
                return (0|0);
            }
        }
    };
    /* System.String Baz.ToString()*/
    asm.x6000006 = function ToString(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call String get_Name() */
        /* IL_06: ret  */
        return asm2.x6000001(arg0);
    };;
    /*  Baz..ctor(String,Int32)*/
    asm.x6000003 = function _ctor(arg0, arg1, arg2)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ldarg.0  */
        /* IL_07: ldarg.1  */
        /* IL_08: stfld String name */
        arg0.Bazname = arg1;
        /* IL_0D: ldarg.0  */
        /* IL_0E: ldarg.2  */
        /* IL_0F: stfld Int32 age */
        arg0.Bazage = arg2;
        /* IL_14: ret  */
        return ;
    };;
    /* System.Int32 ByNameDescending.Compare(Baz,Baz)*/
    asm.x6000007 = function Compare(arg0, arg1, arg2)
    {
        var loc0;
        /* IL_00: ldarg.1  */
        /* IL_01: callvirt String get_Name() */
        /* IL_06: ldarg.2  */
        /* IL_07: callvirt String get_Name() */
        /* IL_0C: callvirt Int32 CompareTo(System.String) */
        /* IL_11: stloc.0  */
        loc0 = (((asm2.x6000001(arg1).vtable)["asm0.x600013f"])())(asm2.x6000001(arg1),asm2.x6000001(arg2));
        /* IL_12: ldloc.0  */
        /* IL_13: neg  */
        /* IL_14: ret  */
        return (-(loc0));
    };;
    /*  ByNameDescending..ctor()*/
    asm.x6000008 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    /* System.Int32 ByName.Compare(Baz,Baz)*/
    asm.x6000009 = function Compare(arg0, arg1, arg2)
    {
        var loc0;
        /* IL_00: ldarg.1  */
        /* IL_01: callvirt String get_Name() */
        /* IL_06: ldarg.2  */
        /* IL_07: callvirt String get_Name() */
        /* IL_0C: callvirt Int32 CompareTo(System.String) */
        /* IL_11: stloc.0  */
        loc0 = (((asm2.x6000001(arg1).vtable)["asm0.x600013f"])())(asm2.x6000001(arg1),asm2.x6000001(arg2));
        /* IL_12: ldloc.0  */
        /* IL_13: ret  */
        return loc0;
    };;
    /*  ByName..ctor()*/
    asm.x600000a = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    /* static Baz[] Program.CreateBazCollection()*/
    asm.x600000b_init = function ()
    {
        (asm2.Baz().init)();
        asm.x600000b = asm.x600000b_;
    };;
    asm.x600000b = function ()
    {
        asm.x600000b_init.apply(this,arguments);
        return asm.x600000b_.apply(this,arguments);
    };;
    asm.x600000b_ = function CreateBazCollection()
    {
        var t0;
        var loc0;
        t0 = asm2.Baz();
        /* IL_00: ldc.i4.5  */
        /* IL_01: newarr Baz */
        /* IL_06: stloc.0  */
        loc0 = CILJS.new_array(t0,(5|0));
        /* IL_07: ldloc.0  */
        /* IL_08: ldc.i4.0  */
        /* IL_09: ldstr jb */
        /* IL_0E: ldc.i4.s 25 */
        /* IL_10: newobj Void .ctor(System.String, System.Int32) */
        /* IL_15: stelem.ref  */
        CILJS.stelem_ref(loc0,(0|0),CILJS.newobj(t0,asm2.x6000003,[null, CILJS.new_string("jb"), (25|0)]));
        /* IL_16: ldloc.0  */
        /* IL_17: ldc.i4.1  */
        /* IL_18: ldstr ana */
        /* IL_1D: ldc.i4.s 20 */
        /* IL_1F: newobj Void .ctor(System.String, System.Int32) */
        /* IL_24: stelem.ref  */
        CILJS.stelem_ref(loc0,(1|0),CILJS.newobj(t0,asm2.x6000003,[null, CILJS.new_string("ana"), (20|0)]));
        /* IL_25: ldloc.0  */
        /* IL_26: ldc.i4.2  */
        /* IL_27: ldstr reg */
        /* IL_2C: ldc.i4.s 28 */
        /* IL_2E: newobj Void .ctor(System.String, System.Int32) */
        /* IL_33: stelem.ref  */
        CILJS.stelem_ref(loc0,(2|0),CILJS.newobj(t0,asm2.x6000003,[null, CILJS.new_string("reg"), (28|0)]));
        /* IL_34: ldloc.0  */
        /* IL_35: ldc.i4.3  */
        /* IL_36: ldstr ro */
        /* IL_3B: ldc.i4.s 25 */
        /* IL_3D: newobj Void .ctor(System.String, System.Int32) */
        /* IL_42: stelem.ref  */
        CILJS.stelem_ref(loc0,(3|0),CILJS.newobj(t0,asm2.x6000003,[null, CILJS.new_string("ro"), (25|0)]));
        /* IL_43: ldloc.0  */
        /* IL_44: ldc.i4.4  */
        /* IL_45: ldstr jb */
        /* IL_4A: ldc.i4.7  */
        /* IL_4B: newobj Void .ctor(System.String, System.Int32) */
        /* IL_50: stelem.ref  */
        CILJS.stelem_ref(loc0,(4|0),CILJS.newobj(t0,asm2.x6000003,[null, CILJS.new_string("jb"), (7|0)]));
        /* IL_51: ldloc.0  */
        /* IL_52: ret  */
        return loc0;
    };
    /* static System.Void Program.Main()*/
    asm.x600000c_init = function ()
    {
        (asm2.ByName().init)();
        (asm2.Baz().init)();
        (asm2.ByNameDescending().init)();
        asm.x600000c = asm.x600000c_;
    };;
    asm.x600000c = function ()
    {
        asm.x600000c_init.apply(this,arguments);
        return asm.x600000c_.apply(this,arguments);
    };;
    asm.x600000c_ = function Main()
    {
        var t0;
        var t1;
        var t2;
        var in_block_0;
        var __pos__;
        var loc0;
        var loc1;
        var loc2;
        var loc3;
        CILJS.init_base_types();
        t0 = asm2.ByName();
        t1 = asm2.Baz();
        t2 = asm2.ByNameDescending();
        in_block_0 = true;
        __pos__ = 0;
        
        while (in_block_0){
            
            switch (__pos__){
                case 0x0:
                /* IL_00: ldstr Ascending */
                /* IL_05: call Void Log(System.Object) */
                asm1.x6000001(CILJS.new_string("Ascending"));
                /* IL_0A: call Baz[] CreateBazCollection() */
                /* IL_0F: stloc.0  */
                loc0 = asm2.x600000b();
                /* IL_10: ldloc.0  */
                /* IL_11: newobj Void .ctor() */
                /* IL_16: call Void Sort[Baz](Baz[], System.Collections.Generic.IComparer`1[Baz]) */
                (asm0.x600001a(asm2.Baz()))(loc0,CILJS.newobj(t0,asm2.x600000a,[null]));
                /* IL_1B: ldc.i4.0  */
                /* IL_1C: stloc.1  */
                loc1 = (0|0);
                /* IL_1D: br.s IL_2B */
                __pos__ = 0x2B;
                continue;
                case 0x1F:
                /* IL_1F: ldloc.0  */
                /* IL_20: ldloc.1  */
                /* IL_21: ldelem.ref  */
                /* IL_22: call Void Log(System.Object) */
                asm1.x6000001(CILJS.ldelem_ref(loc0,loc1));
                /* IL_27: ldloc.1  */
                /* IL_28: ldc.i4.1  */
                /* IL_29: add  */
                /* IL_2A: stloc.1  */
                loc1 = (loc1 + (1|0)) | (0|0);
                case 0x2B:
                /* IL_2B: ldloc.1  */
                /* IL_2C: ldloc.0  */
                /* IL_2D: ldlen  */
                /* IL_2E: conv.i4  */
                /* IL_2F: blt.s IL_1F */
                
                if (loc1 < (loc0.jsarr.length | (0|0))){
                    __pos__ = 0x1F;
                    continue;
                }
                /* IL_31: ldstr Descending */
                /* IL_36: call Void Log(System.Object) */
                asm1.x6000001(CILJS.new_string("Descending"));
                /* IL_3B: call Baz[] CreateBazCollection() */
                /* IL_40: stloc.2  */
                loc2 = asm2.x600000b();
                /* IL_41: ldloc.2  */
                /* IL_42: newobj Void .ctor() */
                /* IL_47: call Void Sort[Baz](Baz[], System.Collections.Generic.IComparer`1[Baz]) */
                (asm0.x600001a(asm2.Baz()))(loc2,CILJS.newobj(t2,asm2.x6000008,[null]));
                /* IL_4C: ldc.i4.0  */
                /* IL_4D: stloc.3  */
                loc3 = (0|0);
                /* IL_4E: br.s IL_5C */
                __pos__ = 0x5C;
                continue;
                case 0x50:
                /* IL_50: ldloc.2  */
                /* IL_51: ldloc.3  */
                /* IL_52: ldelem.ref  */
                /* IL_53: call Void Log(System.Object) */
                asm1.x6000001(CILJS.ldelem_ref(loc2,loc3));
                /* IL_58: ldloc.3  */
                /* IL_59: ldc.i4.1  */
                /* IL_5A: add  */
                /* IL_5B: stloc.3  */
                loc3 = (loc3 + (1|0)) | (0|0);
                case 0x5C:
                /* IL_5C: ldloc.3  */
                /* IL_5D: ldloc.2  */
                /* IL_5E: ldlen  */
                /* IL_5F: conv.i4  */
                /* IL_60: blt.s IL_50 */
                
                if (loc3 < (loc2.jsarr.length | (0|0))){
                    __pos__ = 0x50;
                    continue;
                }
                /* IL_62: ret  */
                return ;
            }
        }
    };
    /*  Program..ctor()*/
    asm.x600000d = function _ctor(arg0)
    {
        /* IL_00: ldarg.0  */
        /* IL_01: call Void .ctor() */
        /* IL_06: ret  */
        return ;
    };;
    asm.Baz = CILJS.declare_type(
        "Baz",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"Baz",false,false,false,false,false,[],[
                    [asm2, "x6000001", "get_Name"],
                    [asm2, "x6000002", "get_Age"],
                    [asm2, "x6000004", "GetHashCode"],
                    [asm2, "x6000005", "Equals"],
                    [asm2, "x6000006", "ToString"]
                ],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000002");
            this.GenericTypeMetadataName = "asm2.t2000002";
            CILJS.declare_virtual(this,"asm0.x60000f1","asm2.x6000004");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm2.x6000005");
            CILJS.declare_virtual(this,"asm0.x60000ed","asm2.x6000006");
            this.prototype.Bazname = null;
            this.prototype.Bazage = 0;
        });
    asm.ByNameDescending = CILJS.declare_type(
        "ByNameDescending",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"ByNameDescending",false,false,false,false,false,[],[
                    [asm2, "x6000007", "Compare"]
                ],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000003");
            this.GenericTypeMetadataName = "asm2.t2000003";
            CILJS.declare_virtual(this,"asm2.x6000007","asm2.x6000007");
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            CILJS.implement_interface(
                this,
                [(asm0)["System.Collections.Generic.IComparer`1"](asm2.Baz()), asm2.Baz()],
                {
                    'x60001bf': function (){ return asm2.x6000007;}
                });
        });
    asm.ByName = CILJS.declare_type(
        "ByName",
        [],
        function ()
        {
            return (asm0)["System.Object"]();
        },
        function ()
        {
            this.init = CILJS.nop;
            CILJS.init_type(this,asm,"ByName",false,false,false,false,false,[],[
                    [asm2, "x6000009", "Compare"]
                ],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000004");
            this.GenericTypeMetadataName = "asm2.t2000004";
            CILJS.declare_virtual(this,"asm2.x6000009","asm2.x6000009");
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
            CILJS.implement_interface(
                this,
                [(asm0)["System.Collections.Generic.IComparer`1"](asm2.Baz()), asm2.Baz()],
                {
                    'x60001bf': function (){ return asm2.x6000009;}
                });
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
            CILJS.init_type(this,asm,"Program",false,false,false,false,false,[],[],(asm0)["System.Object"](),CILJS.is_inst_default(this),Array,"asm2.t2000005");
            this.GenericTypeMetadataName = "asm2.t2000005";
            CILJS.declare_virtual(this,"asm0.x60000ed","asm0.x60000ed");
            CILJS.declare_virtual(this,"asm0.x60000f0","asm0.x60000f0");
            CILJS.declare_virtual(this,"asm0.x60000f1","asm0.x60000f1");
        });
    asm.entryPoint = asm.x600000c;
})(asm2 || (asm2 = {}));
