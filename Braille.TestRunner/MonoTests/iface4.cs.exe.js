var asm0; (function (asm) { var self;
 
function tree_get(a, s) {
    if (a.length == 0) return s;
    var c = s[a[0]];
    return c && tree_get(a.slice(1), c);
}

function tree_set(a, s, v) {
    if (a.length == 1) {
        s[a[0]] = v;
    }
    else {
        var c = s[a[0]];
        if (!c) s[a[0]] = c = {};
        tree_set(a.slice(1), c, v);
    }
}
;
asm.x6000001 = function () { 
  };
asm.x6000002 = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
/* IL_06: ret */
return ; };
asm.x6000003 = function () { 
  };
asm.x6000005 = function () { 
  };
asm.x6000006 = function () { 
  };
asm.x6000004 = function () { 
  };
asm.x6000007 = function () { 
  };
asm.x6000008 = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
/* IL_06: ret */
return ; };
asm.x6000009 = function () { 
  };
asm.x600000a = function () { 
  };
asm.x600000b = function () { 
  };
asm.x600000c = function () { 
  };
asm.x600000d = function IVehicle_Start() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldc.i4.1 */
st_00 = 1;
/* IL_01: ret */
return st_00; };
asm.x600000e = function Stop() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldc.i4.2 */
st_00 = 2;
/* IL_01: ret */
return st_00; };
asm.x600000f = function Turn() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldc.i4.3 */
st_00 = 3;
/* IL_01: ret */
return st_00; };
asm.x6000010 = function Walk() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldc.i4.1 */
st_00 = 1;
/* IL_01: ret */
return st_00; };
asm.x6000011 = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
/* IL_06: ret */
return ; };
asm.x6000012 = function Turn() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldc.i4.4 */
st_00 = 4;
/* IL_01: ret */
return st_00; };
asm.x6000013 = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
(asm0.x6000011)(st_00);
/* IL_06: ret */
return ; };
asm.x6000014 = function Stop() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldc.i4.6 */
st_00 = 6;
/* IL_01: ret */
return st_00; };
asm.x6000015 = function IVehicle_Start() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldc.i4.5 */
st_00 = 5;
/* IL_01: ret */
return st_00; };
asm.x6000016 = function IVehicle_Turn() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldc.i4.7 */
st_00 = 7;
/* IL_01: ret */
return st_00; };
asm.x6000017 = function Turn() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldc.i4.8 */
st_00 = 8;
/* IL_01: ret */
return st_00; };
asm.x6000018 = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
(asm0.x6000011)(st_00);
/* IL_06: ret */
return ; };
asm.x6000019 = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
(asm0.x6000013)(st_00);
/* IL_06: ret */
return ; };
asm.x600001a = function Main() { var __braille_args__;
var st_00;
var st_01;
var st_02;
var st_03;
var st_04;
var st_05;
var st_06;
var st_07;
var st_08;
var st_09;
var st_0A;
var st_0B;
var st_0C;
var st_0D;
var st_0E;
var st_0F;
var st_10;
var st_11;
var st_12;
var st_13;
var st_14;
var st_15;
var st_16;
var st_17;
var st_18;
var st_19;
var st_1A;
var st_1B;
var st_1C;
var st_1D;
var st_1E;
var st_1F;
var st_20;
var st_21;
var st_22;
var st_23;
var st_24;
var st_25;
var st_26;
var st_27;
var st_28;
var st_29;
var st_2A;
var st_2B;
var st_2C;
var st_2D;
var __braille_pos_0__;
var loc0;
var loc1;
var loc2;
var loc3;
var loc4;
 __braille_args__ = arguments;
__braille_pos_0__ = 0x0;
while (__braille_pos_0__ >= 0){
switch (__braille_pos_0__) {
case 0x0:
/* IL_00: newobj Void .ctor()*/
st_00 = (function () { var result;
 result = new (asm0.Derived1)();
(asm0.x6000013)(result);
return result; })();
/* IL_05: stloc.0 */
loc0 = st_00;
/* IL_06: newobj Void .ctor()*/
st_01 = (function () { var result;
 result = new (asm0.Derived2)();
(asm0.x6000018)(result);
return result; })();
/* IL_0B: stloc.1 */
loc1 = st_01;
/* IL_0C: newobj Void .ctor()*/
st_02 = (function () { var result;
 result = new (asm0.Derived3)();
(asm0.x6000019)(result);
return result; })();
/* IL_11: stloc.2 */
loc2 = st_02;
/* IL_12: ldloc.1 */
st_03 = loc1;
/* IL_13: stloc.3 */
loc3 = st_03;
/* IL_14: newobj Void .ctor()*/
st_04 = (function () { var result;
 result = new (asm0.Base)();
(asm0.x6000011)(result);
return result; })();
/* IL_19: stloc.s 4*/
loc4 = st_04;
/* IL_1B: ldloc.0 */
st_05 = loc0;
/* IL_1C: callvirt Int32 Turn()*/
st_06 = (st_05.vtable.x600000f)(st_05);
/* IL_21: ldc.i4.4 */
st_07 = 4;
/* IL_22: beq.s IL_26*/
if (st_06 === st_07){
__braille_pos_0__ = 0x26;continue;
}
/* IL_24: ldc.i4.1 */
st_08 = 1;
/* IL_25: ret */
return st_08;
case 0x26:
/* IL_26: ldloc.0 */
st_09 = loc0;
/* IL_27: callvirt Int32 Turn()*/
st_0A = (st_09.IVehicle.x600000b)(st_09);
/* IL_2C: ldc.i4.4 */
st_0B = 4;
/* IL_2D: beq.s IL_31*/
if (st_0A === st_0B){
__braille_pos_0__ = 0x31;continue;
}
/* IL_2F: ldc.i4.2 */
st_0C = 2;
/* IL_30: ret */
return st_0C;
case 0x31:
/* IL_31: ldloc.1 */
st_0D = loc1;
/* IL_32: callvirt Int32 Turn()*/
st_0E = (st_0D.vtable.x600000f)(st_0D);
/* IL_37: ldc.i4.8 */
st_0F = 8;
/* IL_38: beq.s IL_3D*/
if (st_0E === st_0F){
__braille_pos_0__ = 0x3D;continue;
}
/* IL_3A: ldc.i4.s 10*/
st_10 = 10;
/* IL_3C: ret */
return st_10;
case 0x3D:
/* IL_3D: ldloc.1 */
st_11 = loc1;
/* IL_3E: callvirt Int32 Turn()*/
st_12 = (st_11.IVehicle.x600000b)(st_11);
/* IL_43: ldc.i4.7 */
st_13 = 7;
/* IL_44: beq.s IL_48*/
if (st_12 === st_13){
__braille_pos_0__ = 0x48;continue;
}
/* IL_46: ldc.i4.3 */
st_14 = 3;
/* IL_47: ret */
return st_14;
case 0x48:
/* IL_48: ldloc.3 */
st_15 = loc3;
/* IL_49: callvirt Int32 Turn()*/
st_16 = (st_15.vtable.x600000f)(st_15);
/* IL_4E: ldc.i4.8 */
st_17 = 8;
/* IL_4F: beq.s IL_53*/
if (st_16 === st_17){
__braille_pos_0__ = 0x53;continue;
}
/* IL_51: ldc.i4.4 */
st_18 = 4;
/* IL_52: ret */
return st_18;
case 0x53:
/* IL_53: ldloc.3 */
st_19 = loc3;
/* IL_54: callvirt Int32 Turn()*/
st_1A = (st_19.IVehicle.x600000b)(st_19);
/* IL_59: ldc.i4.7 */
st_1B = 7;
/* IL_5A: beq.s IL_5E*/
if (st_1A === st_1B){
__braille_pos_0__ = 0x5E;continue;
}
/* IL_5C: ldc.i4.5 */
st_1C = 5;
/* IL_5D: ret */
return st_1C;
case 0x5E:
/* IL_5E: ldloc.s 4*/
st_1D = loc4;
/* IL_60: callvirt Int32 Stop()*/
st_1E = (st_1D.IVehicle.x600000a)(st_1D);
/* IL_65: ldc.i4.2 */
st_1F = 2;
/* IL_66: beq.s IL_6A*/
if (st_1E === st_1F){
__braille_pos_0__ = 0x6A;continue;
}
/* IL_68: ldc.i4.6 */
st_20 = 6;
/* IL_69: ret */
return st_20;
case 0x6A:
/* IL_6A: ldloc.0 */
st_21 = loc0;
/* IL_6B: callvirt Int32 Stop()*/
st_22 = (st_21.IVehicle.x600000a)(st_21);
/* IL_70: ldc.i4.2 */
st_23 = 2;
/* IL_71: beq.s IL_75*/
if (st_22 === st_23){
__braille_pos_0__ = 0x75;continue;
}
/* IL_73: ldc.i4.7 */
st_24 = 7;
/* IL_74: ret */
return st_24;
case 0x75:
/* IL_75: ldloc.1 */
st_25 = loc1;
/* IL_76: callvirt Int32 Stop()*/
st_26 = (st_25.IVehicle.x600000a)(st_25);
/* IL_7B: ldc.i4.6 */
st_27 = 6;
/* IL_7C: beq.s IL_80*/
if (st_26 === st_27){
__braille_pos_0__ = 0x80;continue;
}
/* IL_7E: ldc.i4.8 */
st_28 = 8;
/* IL_7F: ret */
return st_28;
case 0x80:
/* IL_80: ldloc.2 */
st_29 = loc2;
/* IL_81: callvirt Int32 Walk()*/
st_2A = (st_29.vtable.x6000010)(st_29);
/* IL_86: ldc.i4.1 */
st_2B = 1;
/* IL_87: beq.s IL_8C*/
if (st_2A === st_2B){
__braille_pos_0__ = 0x8C;continue;
}
/* IL_89: ldc.i4.s 9*/
st_2C = 9;
/* IL_8B: ret */
return st_2C;
case 0x8C:
/* IL_8C: ldc.i4.0 */
st_2D = 0;
/* IL_8D: ret */
return st_2D;
}
} };
asm.x600001b = function _ctor() { var __braille_args__;
var st_00;
 __braille_args__ = arguments;
/* IL_00: ldarg.0 */
st_00 = __braille_args__[0];
/* IL_01: call Void .ctor()*/
/* IL_06: ret */
return ; };
self = (function () { 
 function TestLog() { 
  };
TestLog.prototype = { 
 
};;
TestLog.IsValueType = false;
TestLog.prototype.vtable = { 
'x6000002': asm.x6000002,
'x6000003': asm.x6000003,
'x6000006': asm.x6000006 
};;
return TestLog; })();
asm.TestLog = self;
self = (function () { 
 function TestHelper() { 
  };
TestHelper.prototype = { 
 
};;
TestHelper.IsValueType = false;
TestHelper.prototype.vtable = { 
'x6000002': asm.x6000002,
'x6000003': asm.x6000003,
'x6000006': asm.x6000006 
};;
return TestHelper; })();
asm.TestHelper = self;
self = (function () { 
 function IVehicle() { 
  };
IVehicle.prototype = { 
 
};;
IVehicle.IsValueType = false;
IVehicle.prototype.vtable = { 
'x6000009': asm.x6000009,
'x600000a': asm.x600000a,
'x600000b': asm.x600000b 
};;
return IVehicle; })();
asm.IVehicle = self;
self = (function () { 
 function IWalker() { 
  };
IWalker.prototype = { 
 
};;
IWalker.IsValueType = false;
IWalker.prototype.vtable = { 
'x600000c': asm.x600000c 
};;
return IWalker; })();
asm.IWalker = self;
self = (function () { 
 function Base() { 
  };
Base.prototype = { 
 
};;
Base.IsValueType = false;
Base.prototype.vtable = { 
'x600000e': asm.x600000e,
'x600000f': asm.x600000f,
'x6000010': asm.x6000010,
'x6000002': asm.x6000002,
'x6000003': asm.x6000003,
'x6000006': asm.x6000006 
};;
Base.prototype.IVehicle = { 
'x6000009': asm.x600000d,
'x600000a': asm.x600000e,
'x600000b': asm.x600000f 
};;
return Base; })();
asm.Base = self;
self = (function () { 
 function Derived1() { 
  };
Derived1.prototype = new (asm.Base)();;
Derived1.IsValueType = false;
Derived1.prototype.vtable = { 
'x600000f': asm.x6000012,
'x600000e': asm.x600000e,
'x6000010': asm.x6000010,
'x6000002': asm.x6000002,
'x6000003': asm.x6000003,
'x6000006': asm.x6000006 
};;
Derived1.prototype.IVehicle = { 
'x6000009': asm.x600000d,
'x600000a': asm.x600000e,
'x600000b': asm.x6000012 
};;
return Derived1; })();
asm.Derived1 = self;
self = (function () { 
 function Derived2() { 
  };
Derived2.prototype = new (asm.Base)();;
Derived2.IsValueType = false;
Derived2.prototype.vtable = { 
'x6000014': asm.x6000014,
'x600000f': asm.x6000017,
'x600000e': asm.x600000e,
'x6000010': asm.x6000010,
'x6000002': asm.x6000002,
'x6000003': asm.x6000003,
'x6000006': asm.x6000006 
};;
Derived2.prototype.IVehicle = { 
'x6000009': asm.x6000015,
'x600000a': asm.x6000014,
'x600000b': asm.x6000016 
};;
return Derived2; })();
asm.Derived2 = self;
self = (function () { 
 function Derived3() { 
  };
Derived3.prototype = new (asm.Derived1)();;
Derived3.IsValueType = false;
Derived3.prototype.vtable = { 
'x600000f': asm.x6000012,
'x600000e': asm.x600000e,
'x6000010': asm.x6000010,
'x6000002': asm.x6000002,
'x6000003': asm.x6000003,
'x6000006': asm.x6000006 
};;
Derived3.prototype.IVehicle = { 
'x6000009': asm.x600000d,
'x600000a': asm.x600000e,
'x600000b': asm.x6000012 
};;
Derived3.prototype.IWalker = { 
'x600000c': asm.x6000010 
};;
return Derived3; })();
asm.Derived3 = self;
self = (function () { 
 function Test() { 
  };
Test.prototype = { 
 
};;
Test.IsValueType = false;
Test.prototype.vtable = { 
'x6000002': asm.x6000002,
'x6000003': asm.x6000003,
'x6000006': asm.x6000006 
};;
return Test; })();
asm.Test = self;
asm.entryPoint = asm.x600001a; })(asm0 || (asm0 = {}))