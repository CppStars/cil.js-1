var asm0; (function (asm) { 
 
function clone_value(v) {
    if (v == null) return v;
    if (typeof v === 'number') return v;
    if (typeof v === 'function') return v;
    if (!v.constructor.IsValueType) return v;
    var result = new v.constructor();
//    var result = {};
    for (var p in v) {
        if (v.hasOwnProperty(p))
            result[p] = clone_value(v[p]);
    }
    return result;
}

function box(v, type) {
    if (v === null)
        return v;
    
    if (type.IsNullable) {
        if (v.has_value)
            return box(v.value, type.GenericArguments[0]);
        else
            return null;
    }

    if (!type.IsValueType)
        return v;
    
    return {
        'boxed': v,
        'vtable': type.prototype.vtable
    };
}

function unbox(o, type) {
    return o.boxed;
}

function unbox_any(o, type) {
    if (type.IsNullable) {
        var result = new type();
        if (o !== null) {
            result.value = o.boxed;
            result.has_value = true;
        }
        return result;
    }
    
    if (type.IsValueType)
        return o.boxed;
    else
        return o;
}

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

function new_string(str) {
    var r = new (asm0['System.String']())();
    r.jsstr = str;
    return r;
}

function new_array(type, length) {
    var r = new (asm0['System.Array`1'](type))();
    r.type = type;
    r.jsarr = new Array(length);
    return r;
}
;
asm.x6000003 = function (arg0) { 
 asm.x6000003 = asm.x6000003_;
return (asm.x6000003.apply)(this,arguments); };
asm.x6000003_ = function ToString(arg0) { var loc0;
var st_00;
var st_01;
 loc0 = null;
/* IL_00: nop */
/* IL_01: ldstr System.Object*/
st_00 = new_string("System.Object");
/* IL_06: stloc.0 */
loc0 = st_00;
/* IL_09: ldloc.0 */
st_01 = loc0;
/* IL_0A: ret */
return st_01; };
asm.x6000004 = function (arg0) { 
 asm.x6000004 = asm.x6000004_;
return (asm.x6000004.apply)(this,arguments); };
asm.x6000004_ = function GetHashCode(arg0) { var loc0;
var st_00;
var st_01;
 loc0 = 0;
/* IL_00: nop */
/* IL_01: ldc.i4.0 */
st_00 = 0;
/* IL_02: stloc.0 */
loc0 = st_00;
/* IL_05: ldloc.0 */
st_01 = loc0;
/* IL_06: ret */
return st_01; };
asm.x6000005 = function (arg0) { 
 asm.x6000005 = asm.x6000005_;
return (asm.x6000005.apply)(this,arguments); };
asm.x6000005_ = function ToJavaScriptString(arg0) { var loc0;
var loc1;
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
var __braille_pos_0__;
 loc0 = null;
loc1 = false;
__braille_pos_0__ = 0x0;
while (__braille_pos_0__ >= 0){
switch (__braille_pos_0__) {
case 0x0:
/* IL_00: nop */

/* IL_01: ldarg.0 */
st_00 = arg0;
/* IL_02: ldnull */
st_01 = null;
/* IL_04: ceq */
st_02 = (st_00 === st_01) ? (1) : (0);
/* IL_05: ldc.i4.0 */
st_03 = 0;
/* IL_07: ceq */
st_04 = (st_02 === st_03) ? (1) : (0);
/* IL_08: stloc.1 */
loc1 = st_04;
/* IL_09: ldloc.1 */
st_05 = loc1;
/* IL_0A: brtrue.s IL_19*/
if (st_05){
__braille_pos_0__ = 0x19;continue;
}
/* IL_0C: ldstr */
st_06 = new_string("");
/* IL_11: ldfld Object jsstr*/
st_07 = st_06.jsstr;
/* IL_16: stloc.0 */
loc0 = st_07;
/* IL_17: br.s IL_27*/
__braille_pos_0__ = 0x27;
continue;
case 0x19:
/* IL_19: ldarg.0 */
st_08 = arg0;
/* IL_1A: callvirt String ToString()*/
st_09 = (st_08.vtable.x6000003)(st_08);
/* IL_1F: ldfld Object jsstr*/
st_0A = st_09.jsstr;
/* IL_24: stloc.0 */
loc0 = st_0A;
case 0x27:
/* IL_27: ldloc.0 */
st_0B = loc0;
/* IL_28: ret */
return st_0B;
}
} };
asm.ToJavaScriptString = asm.x6000005;
asm.x6000006 = function (arg0,arg1) { 
 asm.x6000006 = asm.x6000006_;
return (asm.x6000006.apply)(this,arguments); };
asm.x6000006_ = function ReferenceEquals(arg0,arg1) { var loc0;
var st_00;
var st_01;
var st_02;
var st_03;
 loc0 = false;
/* IL_00: nop */
/* IL_01: ldarg.0 */
st_00 = arg0;
/* IL_02: ldarg.1 */
st_01 = arg1;
/* IL_03: call Boolean ReferenceEqualsImpl(System.Object, System.Object)*/
st_02 = (function (a, b) { return a === b; })(st_00,st_01);
/* IL_08: stloc.0 */
loc0 = st_02;
/* IL_0B: ldloc.0 */
st_03 = loc0;
/* IL_0C: ret */
return st_03; };
asm.x6000007 = function (arg0,arg1) { 
 asm.x6000007 = asm.x6000007_;
return (asm.x6000007.apply)(this,arguments); };
asm.x6000007_ = function Equals(arg0,arg1) { var loc0;
var st_00;
var st_01;
var st_02;
var st_03;
 loc0 = false;
/* IL_00: nop */
/* IL_01: ldarg.0 */
st_00 = arg0;
/* IL_02: ldarg.1 */
st_01 = arg1;
/* IL_03: call Boolean ReferenceEquals(System.Object, System.Object)*/
st_02 = (asm0.x6000006)(st_00,st_01);
/* IL_08: stloc.0 */
loc0 = st_02;
/* IL_0B: ldloc.0 */
st_03 = loc0;
/* IL_0C: ret */
return st_03; };
asm.x6000008 = function (arg0) { 
 asm.x6000008 = asm.x6000008_;
return (asm.x6000008.apply)(this,arguments); };
asm.x6000008_ = function GetType(arg0) { var loc0;
var st_00;
var st_01;
var st_02;
 loc0 = null;
/* IL_00: nop */
/* IL_01: ldarg.0 */
st_00 = arg0;
/* IL_02: call Type GetTypeImpl(System.Object)*/
st_01 = (function (o) { return o.constructor; })(st_00);
/* IL_07: stloc.0 */
loc0 = st_01;
/* IL_0A: ldloc.0 */
st_02 = loc0;
/* IL_0B: ret */
return st_02; };
asm.x6000009 = function (arg0) { 
 asm.x6000009 = asm.x6000009_;
return (asm.x6000009.apply)(this,arguments); };
asm.x6000009_ = function _ctor(arg0) { var __braille_pos_0__;
 __braille_pos_0__ = 0x0;
while (__braille_pos_0__ >= 0){
switch (__braille_pos_0__) {
case 0x0:
/* IL_00: br.s IL_02*/
__braille_pos_0__ = 0x2;
continue;
case 0x2:
/* IL_02: ret */
return ;
}
} };
asm.x600000b = function (arg0) { 
 asm.x600000b = asm.x600000b_;
return (asm.x600000b.apply)(this,arguments); };
asm.x600000b_ = function get_Length(arg0) { var loc0;
var st_00;
var st_01;
var st_02;
 loc0 = 0;
/* IL_00: nop */
/* IL_01: ldarg.0 */
st_00 = arg0;
/* IL_02: call Int32 GetLengthImpl(System.Object)*/
st_01 = (function(o) { return o.jsarr.length; })(st_00);
/* IL_07: stloc.0 */
loc0 = st_01;
/* IL_0A: ldloc.0 */
st_02 = loc0;
/* IL_0B: ret */
return st_02; };
asm.x600000e = function (arg0,arg1) { 
 asm.x600000e = asm.x600000e_;
return (asm.x600000e.apply)(this,arguments); };
asm.x600000e_ = function GetValue(arg0,arg1) { var loc0;
var st_00;
var st_01;
var st_02;
var st_03;
 loc0 = null;
/* IL_00: nop */
/* IL_01: ldarg.0 */
st_00 = arg0;
/* IL_02: ldarg.1 */
st_01 = arg1;
/* IL_03: call Object GetValueImpl(System.Object, System.Int32)*/
st_02 = (function(o, i) { return box(o.jsarr[i], o.type); })(st_00,st_01);
/* IL_08: stloc.0 */
loc0 = st_02;
/* IL_0B: ldloc.0 */
st_03 = loc0;
/* IL_0C: ret */
return st_03; };
asm.x600000f = function (arg0) { 
 asm.x600000f = asm.x600000f_;
return (asm.x600000f.apply)(this,arguments); };
asm.x600000f_ = function GetEnumerator(arg0) { var loc0;
var st_00;
var st_01;
var st_02;
 loc0 = null;
/* IL_00: nop */
/* IL_01: ldarg.0 */
st_00 = arg0;
/* IL_02: callvirt IEnumerator GetEnumeratorImpl()*/
st_01 = (st_00.vtable.x6000010)(st_00);
/* IL_07: stloc.0 */
loc0 = st_01;
/* IL_0A: ldloc.0 */
st_02 = loc0;
/* IL_0B: ret */
return st_02; };
asm.x6000011 = function (arg0) { 
 asm.x6000011 = asm.x6000011_;
return (asm.x6000011.apply)(this,arguments); };
asm.x6000011_ = function _ctor(arg0) { var st_00;
 /* IL_00: ldarg.0 */
st_00 = arg0;
/* IL_01: call Void .ctor()*/
/* IL_06: ret */
return ; };
asm.x6000013 = function (arg0) { 
 (((asm0)["System.Array`1+<GetEnumerator>d__0"])(((arguments)[0].constructor.GenericArguments)[0]).init)();
asm.x6000013 = asm.x6000013_;
return (asm.x6000013.apply)(this,arguments); };
asm.x6000013_ = function GetEnumerator(arg0) { var t0;
var loc0;
var loc1;
var st_00;
var st_01;
var st_02;
var st_03;
var st_04;
var st_05;
 t0 = ((asm0)["System.Array`1+<GetEnumerator>d__0"])(((arguments)[0].constructor.GenericArguments)[0]);
loc0 = null;
loc1 = null;
/* IL_00: ldc.i4.0 */
st_00 = 0;
/* IL_01: newobj Void .ctor(System.Int32)*/
st_01 = (function () { var result;
 result = new ((arguments)[0])();
(asm0.x6000085)(result,st_00);
return result; })(t0);
/* IL_06: stloc.0 */
loc0 = st_01;
/* IL_07: ldloc.0 */
st_02 = loc0;
/* IL_08: ldarg.0 */
st_03 = arg0;
/* IL_09: stfld IKVM.Reflection.GenericFieldInstance*/
(st_02)["<>4__this"] = st_03;
/* IL_0E: ldloc.0 */
st_04 = loc0;
/* IL_0F: stloc.1 */
loc1 = st_04;
/* IL_12: ldloc.1 */
st_05 = loc1;
/* IL_13: ret */
return st_05; };
asm.x6000014 = function (arg0) { 
 asm.x6000014 = asm.x6000014_;
return (asm.x6000014.apply)(this,arguments); };
asm.x6000014_ = function GetEnumeratorImpl(arg0) { var loc0;
var st_00;
var st_01;
var st_02;
 loc0 = null;
/* IL_00: nop */
/* IL_01: ldarg.0 */
st_00 = arg0;
/* IL_02: call IEnumerator`1 GetEnumerator()*/
st_01 = (asm0.x6000013)(st_00);
/* IL_07: stloc.0 */
loc0 = st_01;
/* IL_0A: ldloc.0 */
st_02 = loc0;
/* IL_0B: ret */
return st_02; };
asm.x6000015 = function (arg0) { 
 asm.x6000015 = asm.x6000015_;
return (asm.x6000015.apply)(this,arguments); };
asm.x6000015_ = function _ctor(arg0) { var st_00;
 /* IL_00: ldarg.0 */
st_00 = arg0;
/* IL_01: call Void .ctor()*/
(asm0.x6000011)(st_00);
/* IL_06: ret */
return ; };
asm.x6000016 = function (arg0) { 
 asm.x6000016 = asm.x6000016_;
return (asm.x6000016.apply)(this,arguments); };
asm.x6000016_ = function _ctor(arg0) { var st_00;
 /* IL_00: ldarg.0 */
st_00 = arg0;
/* IL_01: call Void .ctor()*/
/* IL_06: ret */
return ; };
asm.x6000017 = function (arg0) { 
 asm.x6000017 = asm.x6000017_;
return (asm.x6000017.apply)(this,arguments); };
asm.x6000017_ = function _ctor(arg0) { var st_00;
 /* IL_00: ldarg.0 */
st_00 = arg0;
/* IL_01: call Void .ctor()*/
(asm0.x6000016)(st_00);
/* IL_06: ret */
return ; };
asm.x6000018 = function (arg0) { 
 asm.x6000018 = asm.x6000018_;
return (asm.x6000018.apply)(this,arguments); };
asm.x6000018_ = function _ctor(arg0) { var st_00;
 /* IL_00: ldarg.0 */
st_00 = arg0;
/* IL_01: call Void .ctor()*/
/* IL_06: ret */
return ; };
asm.x6000019 = function (arg0) { 
 asm.x6000019 = asm.x6000019_;
return (asm.x6000019.apply)(this,arguments); };
asm.x6000019_ = function _ctor(arg0) { var st_00;
 /* IL_00: ldarg.0 */
st_00 = arg0;
/* IL_01: call Void .ctor()*/
(asm0.x6000018)(st_00);
/* IL_06: ret */
return ; };
asm.x600001a = function (arg0,arg1) { 
 asm.x600001a = asm.x600001a_;
return (asm.x600001a.apply)(this,arguments); };
asm.x600001a_ = function _ctor(arg0,arg1) { var st_00;
 /* IL_00: ldarg.0 */
st_00 = arg0;
/* IL_01: call Void .ctor()*/
(asm0.x6000016)(st_00);
/* IL_06: nop */
/* IL_07: nop */
/* IL_08: nop */
/* IL_09: ret */
return ; };
asm.x600001c = function (arg0) { 
 asm.x600001c = asm.x600001c_;
return (asm.x600001c.apply)(this,arguments); };
asm.x600001c_ = function get_HasValue(arg0) { var loc0;
var st_00;
var st_01;
var st_02;
 loc0 = false;
/* IL_00: nop */
/* IL_01: ldarg.0 */
st_00 = arg0;
/* IL_02: ldfld Boolean has_value*/
st_01 = (st_00.r)().has_value;
/* IL_07: stloc.0 */
loc0 = st_01;
/* IL_0A: ldloc.0 */
st_02 = loc0;
/* IL_0B: ret */
return st_02; };
asm.x600001d = function (arg0) { 
 (((asm0)["System.InvalidOperationException"])().init)();
asm.x600001d = asm.x600001d_;
return (asm.x600001d.apply)(this,arguments); };
asm.x600001d_ = function get_Value(arg0) { var t0;
var loc0;
var loc1;
var st_00;
var st_01;
var st_02;
var st_03;
var st_04;
var st_05;
var st_06;
var st_07;
var __braille_pos_0__;
 t0 = ((asm0)["System.InvalidOperationException"])();
loc0 = ((((arguments)[0].r)().constructor.GenericArguments)[0].IsValueType) ? (((((arguments)[0].r)().constructor.GenericArguments)[0].IsPrimitive) ? (0) : (new ((((arguments)[0].r)().constructor.GenericArguments)[0])())) : (null);
loc1 = false;
__braille_pos_0__ = 0x0;
while (__braille_pos_0__ >= 0){
switch (__braille_pos_0__) {
case 0x0:
/* IL_00: nop */

/* IL_01: ldarg.0 */
st_00 = arg0;
/* IL_02: ldfld Boolean has_value*/
st_01 = (st_00.r)().has_value;
/* IL_07: stloc.1 */
loc1 = st_01;
/* IL_08: ldloc.1 */
st_02 = loc1;
/* IL_09: brtrue.s IL_16*/
if (st_02){
__braille_pos_0__ = 0x16;continue;
}
/* IL_0B: ldstr Nullable object must have a value.*/
st_03 = new_string("Nullable object must have a value.");
/* IL_10: newobj Void .ctor(System.String)*/
st_04 = (function () { var result;
 result = new ((arguments)[0])();
(asm0.x600004c)(result,st_03);
return result; })(t0);
/* IL_15: throw */
throw st_04;
case 0x16:
/* IL_16: ldarg.0 */
st_05 = arg0;
/* IL_17: ldfld T value*/
st_06 = (st_05.r)().value;
/* IL_1C: stloc.0 */
loc0 = st_06;
/* IL_1F: ldloc.0 */
st_07 = loc0;
/* IL_20: ret */
return st_07;
}
} };
asm.x600001e = function (arg0,arg1) { 
 (((asm0)["System.Nullable`1"])((((arguments)[0].r)().constructor.GenericArguments)[0]).init)();
asm.x600001e = asm.x600001e_;
return (asm.x600001e.apply)(this,arguments); };
asm.x600001e_ = function Equals(arg0,arg1) { var t0;
var loc0;
var loc1;
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
var st_11;
var st_10;
var st_12;
var st_13;
var st_14;
var __braille_pos_0__;
 t0 = ((asm0)["System.Nullable`1"])((((arguments)[0].r)().constructor.GenericArguments)[0]);
loc0 = false;
loc1 = false;
__braille_pos_0__ = 0x0;
while (__braille_pos_0__ >= 0){
switch (__braille_pos_0__) {
case 0x0:
/* IL_00: nop */

/* IL_01: ldarg.1 */
st_00 = arg1;
/* IL_02: ldnull */
st_01 = null;
/* IL_04: ceq */
st_02 = (st_00 === st_01) ? (1) : (0);
/* IL_05: ldc.i4.0 */
st_03 = 0;
/* IL_07: ceq */
st_04 = (st_02 === st_03) ? (1) : (0);
/* IL_08: stloc.1 */
loc1 = st_04;
/* IL_09: ldloc.1 */
st_05 = loc1;
/* IL_0A: brtrue.s IL_18*/
if (st_05){
__braille_pos_0__ = 0x18;continue;
}
/* IL_0C: ldarg.0 */
st_06 = arg0;
/* IL_0D: ldfld Boolean has_value*/
st_07 = (st_06.r)().has_value;
/* IL_12: ldc.i4.0 */
st_08 = 0;
/* IL_14: ceq */
st_09 = (st_07 === st_08) ? (1) : (0);
/* IL_15: stloc.0 */
loc0 = st_09;
/* IL_16: br.s IL_38*/
__braille_pos_0__ = 0x38;
continue;
case 0x18:
/* IL_18: ldarg.1 */
st_0A = arg1;
/* IL_19: isinst System.Nullable`1[T]*/
st_0B = (t0.IsInst)(st_0A);
/* IL_1E: ldnull */
st_0C = null;
/* IL_20: cgt.un */
st_0D = (st_0B > st_0C) ? (1) : (0);
/* IL_21: stloc.1 */
loc1 = st_0D;
/* IL_22: ldloc.1 */
st_0E = loc1;
/* IL_23: brtrue.s IL_29*/
if (st_0E){
__braille_pos_0__ = 0x29;continue;
}
/* IL_25: ldc.i4.0 */
st_0F = 0;
/* IL_26: stloc.0 */
loc0 = st_0F;
/* IL_27: br.s IL_38*/
__braille_pos_0__ = 0x38;
continue;
case 0x29:
/* IL_29: ldarg.0 */
st_11 = arg0;
/* IL_2A: ldarg.1 */
st_10 = arg1;
/* IL_2B: unbox.any System.Nullable`1[T]*/
st_12 = unbox_any(st_10,t0);
/* IL_30: call Boolean Equals(System.Nullable`1[T])*/
st_13 = (asm0.x600001f)(st_11,clone_value(st_12));
/* IL_35: stloc.0 */
loc0 = st_13;
case 0x38:
/* IL_38: ldloc.0 */
st_14 = loc0;
/* IL_39: ret */
return st_14;
}
} };
asm.x600001f = function (arg0,arg1) { 
 asm.x600001f = asm.x600001f_;
return (asm.x600001f.apply)(this,arguments); };
asm.x600001f_ = function Equals(arg0,arg1) { var loc0;
var loc1;
var st_00;
var st_02;
var st_01;
var st_03;
var st_04;
var st_05;
var st_06;
var st_07;
var st_08;
var st_09;
var st_0A;
var st_0B;
var st_0E;
var st_0C;
var st_0D;
var st_0F;
var st_10;
var st_11;
var __braille_pos_0__;
 loc0 = false;
loc1 = false;
__braille_pos_0__ = 0x0;
while (__braille_pos_0__ >= 0){
switch (__braille_pos_0__) {
case 0x0:
/* IL_00: nop */

/* IL_01: ldarga.s 1*/
st_00 = { 
'w': function () { 
 arg1 = (arguments)[0]; },
'r': function () { 
 return arg1; } 
};
/* IL_03: ldfld Boolean has_value*/
st_02 = (st_00.r)().has_value;
/* IL_08: ldarg.0 */
st_01 = arg0;
/* IL_09: ldfld Boolean has_value*/
st_03 = (st_01.r)().has_value;
/* IL_0F: ceq */
st_04 = (st_02 === st_03) ? (1) : (0);
/* IL_10: stloc.1 */
loc1 = st_04;
/* IL_11: ldloc.1 */
st_05 = loc1;
/* IL_12: brtrue.s IL_18*/
if (st_05){
__braille_pos_0__ = 0x18;continue;
}
/* IL_14: ldc.i4.0 */
st_06 = 0;
/* IL_15: stloc.0 */
loc0 = st_06;
/* IL_16: br.s IL_46*/
__braille_pos_0__ = 0x46;
continue;
case 0x18:
/* IL_18: ldarg.0 */
st_07 = arg0;
/* IL_19: ldfld Boolean has_value*/
st_08 = (st_07.r)().has_value;
/* IL_1E: stloc.1 */
loc1 = st_08;
/* IL_1F: ldloc.1 */
st_09 = loc1;
/* IL_20: brtrue.s IL_26*/
if (st_09){
__braille_pos_0__ = 0x26;continue;
}
/* IL_22: ldc.i4.1 */
st_0A = 1;
/* IL_23: stloc.0 */
loc0 = st_0A;
/* IL_24: br.s IL_46*/
__braille_pos_0__ = 0x46;
continue;
case 0x26:
/* IL_26: ldarga.s 1*/
st_0B = { 
'w': function () { 
 arg1 = (arguments)[0]; },
'r': function () { 
 return arg1; } 
};
/* IL_28: ldflda T value*/
st_0E = { 
'w': function () { 
 (((asm0)["System.Nullable`1"])((((arguments)[0].r)().constructor.GenericArguments)[0]))["value"] = (arguments)[0]; },
'r': function () { 
 return (((asm0)["System.Nullable`1"])((((arguments)[0].r)().constructor.GenericArguments)[0]))["value"]; } 
};
/* IL_2D: ldarg.0 */
st_0C = arg0;
/* IL_2E: ldfld T value*/
st_0D = (st_0C.r)().value;
/* IL_33: box T*/
st_0F = box(st_0D,(((arguments)[0].r)().constructor.GenericArguments)[0]);
/* IL_3E: callvirt Boolean Equals(System.Object)*/
/* ignoring prefixes constrained.*/
st_10 = (st_0E.vtable.x6000007)(st_0E,st_0F);
/* IL_43: stloc.0 */
loc0 = st_10;
case 0x46:
/* IL_46: ldloc.0 */
st_11 = loc0;
/* IL_47: ret */
return st_11;
}
} };
asm.x6000020 = function (arg0) { 
 asm.x6000020 = asm.x6000020_;
return (asm.x6000020.apply)(this,arguments); };
asm.x6000020_ = function GetHashCode(arg0) { var loc0;
var loc1;
var st_00;
var st_01;
var st_02;
var st_03;
var st_04;
var st_05;
var st_06;
var st_07;
var __braille_pos_0__;
 loc0 = 0;
loc1 = false;
__braille_pos_0__ = 0x0;
while (__braille_pos_0__ >= 0){
switch (__braille_pos_0__) {
case 0x0:
/* IL_00: nop */

/* IL_01: ldarg.0 */
st_00 = arg0;
/* IL_02: ldfld Boolean has_value*/
st_01 = (st_00.r)().has_value;
/* IL_07: stloc.1 */
loc1 = st_01;
/* IL_08: ldloc.1 */
st_02 = loc1;
/* IL_09: brtrue.s IL_0F*/
if (st_02){
__braille_pos_0__ = 0xF;continue;
}
/* IL_0B: ldc.i4.0 */
st_03 = 0;
/* IL_0C: stloc.0 */
loc0 = st_03;
/* IL_0D: br.s IL_23*/
__braille_pos_0__ = 0x23;
continue;
case 0xF:
/* IL_0F: ldarg.0 */
st_04 = arg0;
/* IL_10: ldflda T value*/
st_05 = { 
'w': function () { 
 (((asm0)["System.Nullable`1"])((((arguments)[0].r)().constructor.GenericArguments)[0]))["value"] = (arguments)[0]; },
'r': function () { 
 return (((asm0)["System.Nullable`1"])((((arguments)[0].r)().constructor.GenericArguments)[0]))["value"]; } 
};
/* IL_1B: callvirt Int32 GetHashCode()*/
/* ignoring prefixes constrained.*/
st_06 = (st_05.vtable.x6000004)(st_05);
/* IL_20: stloc.0 */
loc0 = st_06;
case 0x23:
/* IL_23: ldloc.0 */
st_07 = loc0;
/* IL_24: ret */
return st_07;
}
} };
asm.x6000021 = function (arg0) { 
 asm.x6000021 = asm.x6000021_;
return (asm.x6000021.apply)(this,arguments); };
asm.x6000021_ = function GetValueOrDefault(arg0) { var loc0;
var st_00;
var st_01;
var st_02;
 loc0 = ((((arguments)[0].r)().constructor.GenericArguments)[0].IsValueType) ? (((((arguments)[0].r)().constructor.GenericArguments)[0].IsPrimitive) ? (0) : (new ((((arguments)[0].r)().constructor.GenericArguments)[0])())) : (null);
/* IL_00: nop */
/* IL_01: ldarg.0 */
st_00 = arg0;
/* IL_02: ldfld T value*/
st_01 = (st_00.r)().value;
/* IL_07: stloc.0 */
loc0 = st_01;
/* IL_0A: ldloc.0 */
st_02 = loc0;
/* IL_0B: ret */
return st_02; };
asm.x6000022 = function (arg0,arg1) { 
 asm.x6000022 = asm.x6000022_;
return (asm.x6000022.apply)(this,arguments); };
asm.x6000022_ = function GetValueOrDefault(arg0,arg1) { var loc0;
var st_00;
var st_01;
var st_03;
var st_02;
var st_04;
var __braille_pos_0__;
 loc0 = ((((arguments)[0].r)().constructor.GenericArguments)[0].IsValueType) ? (((((arguments)[0].r)().constructor.GenericArguments)[0].IsPrimitive) ? (0) : (new ((((arguments)[0].r)().constructor.GenericArguments)[0])())) : (null);
__braille_pos_0__ = 0x0;
while (__braille_pos_0__ >= 0){
switch (__braille_pos_0__) {
case 0x0:
/* IL_00: nop */

/* IL_01: ldarg.0 */
st_00 = arg0;
/* IL_02: ldfld Boolean has_value*/
st_01 = (st_00.r)().has_value;
/* IL_07: brtrue.s IL_0C*/
if (st_01){
__braille_pos_0__ = 0xC;continue;
}
/* IL_09: ldarg.1 */
st_03 = arg1;
/* IL_0A: br.s IL_12*/
__braille_pos_0__ = 0x12;
continue;
case 0xC:
/* IL_0C: ldarg.0 */
st_02 = arg0;
/* IL_0D: ldfld T value*/
st_03 = (st_02.r)().value;
case 0x12:
/* IL_12: nop */

/* IL_13: stloc.0 */
loc0 = st_03;
/* IL_16: ldloc.0 */
st_04 = loc0;
/* IL_17: ret */
return st_04;
}
} };
asm.x6000023 = function (arg0) { 
 (((asm0)["System.String"])().init)();
asm.x6000023 = asm.x6000023_;
return (asm.x6000023.apply)(this,arguments); };
asm.x6000023_ = function ToString(arg0) { var t0;
var loc0;
var loc1;
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
var __braille_pos_0__;
 t0 = ((asm0)["System.String"])();
loc0 = null;
loc1 = false;
__braille_pos_0__ = 0x0;
while (__braille_pos_0__ >= 0){
switch (__braille_pos_0__) {
case 0x0:
/* IL_00: nop */

/* IL_01: ldarg.0 */
st_00 = arg0;
/* IL_02: ldfld Boolean has_value*/
st_01 = (st_00.r)().has_value;
/* IL_07: ldc.i4.0 */
st_02 = 0;
/* IL_09: ceq */
st_03 = (st_01 === st_02) ? (1) : (0);
/* IL_0A: stloc.1 */
loc1 = st_03;
/* IL_0B: ldloc.1 */
st_04 = loc1;
/* IL_0C: brtrue.s IL_22*/
if (st_04){
__braille_pos_0__ = 0x22;continue;
}
/* IL_0E: ldarg.0 */
st_05 = arg0;
/* IL_0F: ldflda T value*/
st_06 = { 
'w': function () { 
 (((asm0)["System.Nullable`1"])((((arguments)[0].r)().constructor.GenericArguments)[0]))["value"] = (arguments)[0]; },
'r': function () { 
 return (((asm0)["System.Nullable`1"])((((arguments)[0].r)().constructor.GenericArguments)[0]))["value"]; } 
};
/* IL_1A: callvirt String ToString()*/
/* ignoring prefixes constrained.*/
st_07 = (st_06.vtable.x6000003)(st_06);
/* IL_1F: stloc.0 */
loc0 = st_07;
/* IL_20: br.s IL_2A*/
__braille_pos_0__ = 0x2A;
continue;
case 0x22:
/* IL_22: ldsfld String Empty*/
st_08 = t0.Empty;
/* IL_27: stloc.0 */
loc0 = st_08;
case 0x2A:
/* IL_2A: ldloc.0 */
st_09 = loc0;
/* IL_2B: ret */
return st_09;
}
} };
asm.x6000024 = function (T) { 
 return function (arg0) { 
 (((asm0)["System.Nullable`1"])(T).init)();
asm.x6000024 = asm.x6000024_;
return ((asm.x6000024)(T).apply)(this,arguments); }; };
asm.x6000024_ = function (T) { 
 return function op_Implicit(arg0) { var t0;
var loc0;
var st_00;
var st_01;
var st_02;
 t0 = ((asm0)["System.Nullable`1"])(T);
loc0 = new (((asm0)["System.Nullable`1"])(T))();
/* IL_00: nop */
/* IL_01: ldarg.0 */
st_00 = arg0;
/* IL_02: newobj Void .ctor(T)*/
st_01 = (function () { var result;
 result = new ((arguments)[0])();
(asm0.x600001b)({ 
'w': function () { 
 result = (arguments)[0]; },
'r': function () { 
 return result; } 
},clone_value(st_00));
return result; })(t0);
/* IL_07: stloc.0 */
loc0 = st_01;
/* IL_0A: ldloc.0 */
st_02 = loc0;
/* IL_0B: ret */
return st_02; }; };
asm.x6000025 = function (T) { 
 return function (arg0) { 
 asm.x6000025 = asm.x6000025_;
return ((asm.x6000025)(T).apply)(this,arguments); }; };
asm.x6000025_ = function (T) { 
 return function op_Explicit(arg0) { var loc0;
var st_00;
var st_01;
var st_02;
 loc0 = (T.IsValueType) ? ((T.IsPrimitive) ? (0) : (new T())) : (null);
/* IL_00: nop */
/* IL_01: ldarga.s 0*/
st_00 = { 
'w': function () { 
 arg0 = (arguments)[0]; },
'r': function () { 
 return arg0; } 
};
/* IL_03: call T get_Value()*/
st_01 = (asm0.x600001d)(st_00);
/* IL_08: stloc.0 */
loc0 = st_01;
/* IL_0B: ldloc.0 */
st_02 = loc0;
/* IL_0C: ret */
return st_02; }; };
asm.x6000026 = function (T) { 
 return function (arg0) { 
 asm.x6000026 = asm.x6000026_;
return ((asm.x6000026)(T).apply)(this,arguments); }; };
asm.x6000026_ = function (T) { 
 return function Box(arg0) { var loc0;
var loc1;
var st_00;
var st_01;
var st_02;
var st_03;
var st_04;
var st_05;
var st_06;
var st_07;
var __braille_pos_0__;
 loc0 = null;
loc1 = false;
__braille_pos_0__ = 0x0;
while (__braille_pos_0__ >= 0){
switch (__braille_pos_0__) {
case 0x0:
/* IL_00: nop */

/* IL_01: ldarga.s 0*/
st_00 = { 
'w': function () { 
 arg0 = (arguments)[0]; },
'r': function () { 
 return arg0; } 
};
/* IL_03: ldfld Boolean has_value*/
st_01 = (st_00.r)().has_value;
/* IL_08: stloc.1 */
loc1 = st_01;
/* IL_09: ldloc.1 */
st_02 = loc1;
/* IL_0A: brtrue.s IL_10*/
if (st_02){
__braille_pos_0__ = 0x10;continue;
}
/* IL_0C: ldnull */
st_03 = null;
/* IL_0D: stloc.0 */
loc0 = st_03;
/* IL_0E: br.s IL_1F*/
__braille_pos_0__ = 0x1F;
continue;
case 0x10:
/* IL_10: ldarga.s 0*/
st_04 = { 
'w': function () { 
 arg0 = (arguments)[0]; },
'r': function () { 
 return arg0; } 
};
/* IL_12: ldfld T value*/
st_05 = (st_04.r)().value;
/* IL_17: box T*/
st_06 = box(st_05,T);
/* IL_1C: stloc.0 */
loc0 = st_06;
case 0x1F:
/* IL_1F: ldloc.0 */
st_07 = loc0;
/* IL_20: ret */
return st_07;
}
} }; };
asm.x6000027 = function (T) { 
 return function (arg0) { 
 (((asm0)["System.Nullable`1"])(T).init)();
asm.x6000027 = asm.x6000027_;
return ((asm.x6000027)(T).apply)(this,arguments); }; };
asm.x6000027_ = function (T) { 
 return function Unbox(arg0) { var t0;
var loc0;
var loc1;
var loc2;
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
var __braille_pos_0__;
 t0 = ((asm0)["System.Nullable`1"])(T);
loc0 = new (((asm0)["System.Nullable`1"])(T))();
loc1 = false;
loc2 = new (((asm0)["System.Nullable`1"])(T))();
__braille_pos_0__ = 0x0;
while (__braille_pos_0__ >= 0){
switch (__braille_pos_0__) {
case 0x0:
/* IL_00: nop */

/* IL_01: ldarg.0 */
st_00 = arg0;
/* IL_02: ldnull */
st_01 = null;
/* IL_04: ceq */
st_02 = (st_00 === st_01) ? (1) : (0);
/* IL_05: ldc.i4.0 */
st_03 = 0;
/* IL_07: ceq */
st_04 = (st_02 === st_03) ? (1) : (0);
/* IL_08: stloc.1 */
loc1 = st_04;
/* IL_09: ldloc.1 */
st_05 = loc1;
/* IL_0A: brtrue.s IL_18*/
if (st_05){
__braille_pos_0__ = 0x18;continue;
}
/* IL_0C: ldloca.s 2*/
st_06 = { 
'w': function () { 
 loc2 = (arguments)[0]; },
'r': function () { 
 return loc2; } 
};
/* IL_0F: initobj System.Nullable`1[T]*/
(t0.IsValueType) ? ((st_06.w)(new t0())) : (null);
/* IL_14: ldloc.2 */
st_07 = loc2;
/* IL_15: stloc.0 */
loc0 = st_07;
/* IL_16: br.s IL_26*/
__braille_pos_0__ = 0x26;
continue;
case 0x18:
/* IL_18: ldarg.0 */
st_08 = arg0;
/* IL_19: unbox.any T*/
st_09 = unbox_any(st_08,T);
/* IL_1E: newobj Void .ctor(T)*/
st_0A = (function () { var result;
 result = new ((arguments)[0])();
(asm0.x600001b)({ 
'w': function () { 
 result = (arguments)[0]; },
'r': function () { 
 return result; } 
},clone_value(st_09));
return result; })(t0);
/* IL_23: stloc.0 */
loc0 = st_0A;
case 0x26:
/* IL_26: ldloc.0 */
st_0B = loc0;
/* IL_27: ret */
return st_0B;
}
} }; };
asm.x600001b = function (arg0,arg1) { 
 asm.x600001b = asm.x600001b_;
return (asm.x600001b.apply)(this,arguments); };
asm.x600001b_ = function _ctor(arg0,arg1) { var st_00;
var st_01;
var st_02;
var st_03;
 /* IL_00: nop */
/* IL_01: ldarg.0 */
st_00 = arg0;
/* IL_02: ldc.i4.1 */
st_01 = 1;
/* IL_03: stfld Boolean has_value*/
(st_00.r)().has_value = st_01;
/* IL_08: ldarg.0 */
st_02 = arg0;
/* IL_09: ldarg.1 */
st_03 = arg1;
/* IL_0A: stfld T value*/
(st_02.r)().value = st_03;
/* IL_0F: ret */
return ; };
asm.x6000028 = function (arg0) { 
 asm.x6000028 = asm.x6000028_;
return (asm.x6000028.apply)(this,arguments); };
asm.x6000028_ = function _ctor(arg0) { var st_00;
 /* IL_00: ldarg.0 */
st_00 = arg0;
/* IL_01: call Void .ctor()*/
(asm0.x6000016)(st_00);
/* IL_06: ret */
return ; };
asm.x600002c = function (arg0,arg1) { 
 (((asm0)["System.Exception"])().init)();
asm.x600002c = asm.x600002c_;
return (asm.x600002c.apply)(this,arguments); };
asm.x600002c_ = function get_Chars(arg0,arg1) { var t0;
var st_00;
var st_01;
 t0 = ((asm0)["System.Exception"])();
/* IL_00: nop */
/* IL_01: ldstr Not implemented.*/
st_00 = new_string("Not implemented.");
/* IL_06: newobj Void .ctor(System.String)*/
st_01 = (function () { var result;
 result = new ((arguments)[0])();
(asm0.x6000049)(result,st_00);
return result; })(t0);
/* IL_0B: throw */
throw st_01; };
asm.x600002d = function (arg0,arg1) { 
 (((asm0)["System.String"])().init)();
asm.x600002d = asm.x600002d_;
return (asm.x600002d.apply)(this,arguments); };
asm.x600002d_ = function Concat(arg0,arg1) { var t0;
var loc0;
var loc1;
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
 t0 = ((asm0)["System.String"])();
loc0 = null;
loc1 = null;
/* IL_00: nop */
/* IL_01: ldc.i4.2 */
st_00 = 2;
/* IL_02: newarr System.String*/
st_01 = new_array(t0,st_00);
/* IL_07: stloc.1 */
loc1 = st_01;
/* IL_08: ldloc.1 */
st_02 = loc1;
/* IL_09: ldc.i4.0 */
st_03 = 0;
/* IL_0A: ldarg.0 */
st_04 = arg0;
/* IL_0B: stelem.ref */
(st_02.jsarr)[st_03] = st_04;
/* IL_0C: ldloc.1 */
st_05 = loc1;
/* IL_0D: ldc.i4.1 */
st_06 = 1;
/* IL_0E: ldarg.1 */
st_07 = arg1;
/* IL_0F: stelem.ref */
(st_05.jsarr)[st_06] = st_07;
/* IL_10: ldloc.1 */
st_08 = loc1;
/* IL_11: call String ConcatImpl(System.String[])*/
st_09 = (function () { return new_string(String.prototype.concat.apply('', arguments)); })(st_08);
/* IL_16: stloc.0 */
loc0 = st_09;
/* IL_19: ldloc.0 */
st_0A = loc0;
/* IL_1A: ret */
return st_0A; };
asm.x600002e = function (arg0,arg1) { 
 (((asm0)["System.String"])().init)();
asm.x600002e = asm.x600002e_;
return (asm.x600002e.apply)(this,arguments); };
asm.x600002e_ = function Concat(arg0,arg1) { var t0;
var loc0;
var loc1;
var st_00;
var st_01;
var st_03;
var st_04;
var st_02;
var st_05;
var st_07;
var st_08;
var st_06;
var st_09;
var st_0A;
var st_0B;
var st_0C;
 t0 = ((asm0)["System.String"])();
loc0 = null;
loc1 = null;
/* IL_00: nop */
/* IL_01: ldc.i4.2 */
st_00 = 2;
/* IL_02: newarr System.String*/
st_01 = new_array(t0,st_00);
/* IL_07: stloc.1 */
loc1 = st_01;
/* IL_08: ldloc.1 */
st_03 = loc1;
/* IL_09: ldc.i4.0 */
st_04 = 0;
/* IL_0A: ldarg.0 */
st_02 = arg0;
/* IL_0B: callvirt String ToString()*/
st_05 = (st_02.vtable.x6000003)(st_02);
/* IL_10: stelem.ref */
(st_03.jsarr)[st_04] = st_05;
/* IL_11: ldloc.1 */
st_07 = loc1;
/* IL_12: ldc.i4.1 */
st_08 = 1;
/* IL_13: ldarg.1 */
st_06 = arg1;
/* IL_14: callvirt String ToString()*/
st_09 = (st_06.vtable.x6000003)(st_06);
/* IL_19: stelem.ref */
(st_07.jsarr)[st_08] = st_09;
/* IL_1A: ldloc.1 */
st_0A = loc1;
/* IL_1B: call String ConcatImpl(System.String[])*/
st_0B = (function () { return new_string(String.prototype.concat.apply('', arguments)); })(st_0A);
/* IL_20: stloc.0 */
loc0 = st_0B;
/* IL_23: ldloc.0 */
st_0C = loc0;
/* IL_24: ret */
return st_0C; };
asm.x600002f = function (arg0) { 
 asm.x600002f = asm.x600002f_;
return (asm.x600002f.apply)(this,arguments); };
asm.x600002f_ = function Concat(arg0) { var loc0;
var st_00;
var st_01;
var st_02;
 loc0 = null;
/* IL_00: nop */
/* IL_01: ldarg.0 */
st_00 = arg0;
/* IL_02: call String ConcatImpl(System.String[])*/
st_01 = (function () { return new_string(String.prototype.concat.apply('', arguments)); })(st_00);
/* IL_07: stloc.0 */
loc0 = st_01;
/* IL_0A: ldloc.0 */
st_02 = loc0;
/* IL_0B: ret */
return st_02; };
asm.x6000030 = function (arg0) { 
 (((asm0)["System.Exception"])().init)();
asm.x6000030 = asm.x6000030_;
return (asm.x6000030.apply)(this,arguments); };
asm.x6000030_ = function Concat(arg0) { var t0;
var st_00;
var st_01;
 t0 = ((asm0)["System.Exception"])();
/* IL_00: nop */
/* IL_01: ldstr Not implemented*/
st_00 = new_string("Not implemented");
/* IL_06: newobj Void .ctor(System.String)*/
st_01 = (function () { var result;
 result = new ((arguments)[0])();
(asm0.x6000049)(result,st_00);
return result; })(t0);
/* IL_0B: throw */
throw st_01; };
asm.x6000031 = function (arg0) { 
 asm.x6000031 = asm.x6000031_;
return (asm.x6000031.apply)(this,arguments); };
asm.x6000031_ = function get_Length(arg0) { var loc0;
var st_00;
var st_01;
var st_02;
 loc0 = 0;
/* IL_00: nop */
/* IL_01: ldarg.0 */
st_00 = arg0;
/* IL_02: call Int32 GetLengthImpl(System.Object)*/
st_01 = (function(o) { return o.jsstr.length; })(st_00);
/* IL_07: stloc.0 */
loc0 = st_01;
/* IL_0A: ldloc.0 */
st_02 = loc0;
/* IL_0B: ret */
return st_02; };
asm.x6000032 = function (arg0) { 
 asm.x6000032 = asm.x6000032_;
return (asm.x6000032.apply)(this,arguments); };
asm.x6000032_ = function ToString(arg0) { var loc0;
var st_00;
var st_01;
 loc0 = null;
/* IL_00: nop */
/* IL_01: ldarg.0 */
st_00 = arg0;
/* IL_02: stloc.0 */
loc0 = st_00;
/* IL_05: ldloc.0 */
st_01 = loc0;
/* IL_06: ret */
return st_01; };
asm.x6000033 = function (arg0,arg1) { 
 asm.x6000033 = asm.x6000033_;
return (asm.x6000033.apply)(this,arguments); };
asm.x6000033_ = function op_Inequality(arg0,arg1) { var loc0;
var st_00;
var st_01;
var st_02;
var st_03;
var st_04;
var st_05;
 loc0 = false;
/* IL_00: nop */
/* IL_01: ldarg.0 */
st_00 = arg0;
/* IL_02: ldarg.1 */
st_01 = arg1;
/* IL_03: call Boolean EqualsImpl(System.String, System.String)*/
st_02 = (function(a, b) { return a.jsstr === b.jsstr; })(st_00,st_01);
/* IL_08: ldc.i4.0 */
st_03 = 0;
/* IL_0A: ceq */
st_04 = (st_02 === st_03) ? (1) : (0);
/* IL_0B: stloc.0 */
loc0 = st_04;
/* IL_0E: ldloc.0 */
st_05 = loc0;
/* IL_0F: ret */
return st_05; };
asm.x6000034 = function (arg0,arg1) { 
 asm.x6000034 = asm.x6000034_;
return (asm.x6000034.apply)(this,arguments); };
asm.x6000034_ = function op_Equality(arg0,arg1) { var loc0;
var st_00;
var st_01;
var st_02;
var st_03;
 loc0 = false;
/* IL_00: nop */
/* IL_01: ldarg.0 */
st_00 = arg0;
/* IL_02: ldarg.1 */
st_01 = arg1;
/* IL_03: call Boolean EqualsImpl(System.String, System.String)*/
st_02 = (function(a, b) { return a.jsstr === b.jsstr; })(st_00,st_01);
/* IL_08: stloc.0 */
loc0 = st_02;
/* IL_0B: ldloc.0 */
st_03 = loc0;
/* IL_0C: ret */
return st_03; };
asm.x6000035 = function (arg0,arg1) { 
 asm.x6000035 = asm.x6000035_;
return (asm.x6000035.apply)(this,arguments); };
asm.x6000035_ = function Equals(arg0,arg1) { var loc0;
var st_00;
var st_01;
var st_02;
var st_03;
 loc0 = false;
/* IL_00: nop */
/* IL_01: ldarg.0 */
st_00 = arg0;
/* IL_02: ldarg.1 */
st_01 = arg1;
/* IL_03: call Boolean EqualsImpl(System.String, System.String)*/
st_02 = (function(a, b) { return a.jsstr === b.jsstr; })(st_00,st_01);
/* IL_08: stloc.0 */
loc0 = st_02;
/* IL_0B: ldloc.0 */
st_03 = loc0;
/* IL_0C: ret */
return st_03; };
asm.x6000036 = function (arg0) { 
 asm.x6000036 = asm.x6000036_;
return (asm.x6000036.apply)(this,arguments); };
asm.x6000036_ = function _ctor(arg0) { var st_00;
 /* IL_00: ldarg.0 */
st_00 = arg0;
/* IL_01: call Void .ctor()*/
/* IL_06: ret */
return ; };
asm.x6000037 = function () { 
 (((asm0)["System.String"])().init)();
asm.x6000037 = asm.x6000037_;
return (asm.x6000037.apply)(this,arguments); };
asm.x6000037_ = function _cctor() { var t0;
var st_00;
 t0 = ((asm0)["System.String"])();
/* IL_00: ldstr */
st_00 = new_string("");
/* IL_05: stsfld String Empty*/
(t0)["Empty"] = st_00;
/* IL_0A: ret */
return ; };
asm.x6000039 = function (arg0) { 
 asm.x6000039 = asm.x6000039_;
return (asm.x6000039.apply)(this,arguments); };
asm.x6000039_ = function get_MemberName(arg0) { var loc0;
var st_00;
var st_01;
var st_02;
 loc0 = null;
/* IL_00: nop */
/* IL_01: ldarg.0 */
st_00 = arg0;
/* IL_02: ldfld String member_name*/
st_01 = st_00.System_ReflectionDefaultMemberAttributemember_name;
/* IL_07: stloc.0 */
loc0 = st_01;
/* IL_0A: ldloc.0 */
st_02 = loc0;
/* IL_0B: ret */
return st_02; };
asm.x6000038 = function (arg0,arg1) { 
 asm.x6000038 = asm.x6000038_;
return (asm.x6000038.apply)(this,arguments); };
asm.x6000038_ = function _ctor(arg0,arg1) { var st_00;
var st_01;
var st_02;
 /* IL_00: ldarg.0 */
st_00 = arg0;
/* IL_01: call Void .ctor()*/
(asm0.x6000016)(st_00);
/* IL_06: nop */
/* IL_07: nop */
/* IL_08: ldarg.0 */
st_01 = arg0;
/* IL_09: ldarg.1 */
st_02 = arg1;
/* IL_0A: stfld String member_name*/
st_01.System_ReflectionDefaultMemberAttributemember_name = st_02;
/* IL_0F: nop */
/* IL_10: ret */
return ; };
asm.x600003b = function (arg0) { 
 asm.x600003b = asm.x600003b_;
return (asm.x600003b.apply)(this,arguments); };
asm.x600003b_ = function get_ValidOn(arg0) { var loc0;
var st_00;
var st_01;
var st_02;
 loc0 = new (((asm0)["System.AttributeTargets"])())();
/* IL_00: ldarg.0 */
st_00 = arg0;
/* IL_01: ldfld AttributeTargets <ValidOn>k__BackingField*/
st_01 = (st_00)["SystemAttributeUsageAttribute<ValidOn>k__BackingField"];
/* IL_06: stloc.0 */
loc0 = st_01;
/* IL_09: ldloc.0 */
st_02 = loc0;
/* IL_0A: ret */
return st_02; };
asm.x600003c = function (arg0,arg1) { 
 asm.x600003c = asm.x600003c_;
return (asm.x600003c.apply)(this,arguments); };
asm.x600003c_ = function set_ValidOn(arg0,arg1) { var st_00;
var st_01;
 /* IL_00: ldarg.0 */
st_00 = arg0;
/* IL_01: ldarg.1 */
st_01 = arg1;
/* IL_02: stfld AttributeTargets <ValidOn>k__BackingField*/
(st_00)["SystemAttributeUsageAttribute<ValidOn>k__BackingField"] = st_01;
/* IL_07: ret */
return ; };
asm.x600003d = function (arg0) { 
 asm.x600003d = asm.x600003d_;
return (asm.x600003d.apply)(this,arguments); };
asm.x600003d_ = function get_Inherited(arg0) { var loc0;
var st_00;
var st_01;
var st_02;
 loc0 = false;
/* IL_00: ldarg.0 */
st_00 = arg0;
/* IL_01: ldfld Boolean <Inherited>k__BackingField*/
st_01 = (st_00)["SystemAttributeUsageAttribute<Inherited>k__BackingField"];
/* IL_06: stloc.0 */
loc0 = st_01;
/* IL_09: ldloc.0 */
st_02 = loc0;
/* IL_0A: ret */
return st_02; };
asm.x600003e = function (arg0,arg1) { 
 asm.x600003e = asm.x600003e_;
return (asm.x600003e.apply)(this,arguments); };
asm.x600003e_ = function set_Inherited(arg0,arg1) { var st_00;
var st_01;
 /* IL_00: ldarg.0 */
st_00 = arg0;
/* IL_01: ldarg.1 */
st_01 = arg1;
/* IL_02: stfld Boolean <Inherited>k__BackingField*/
(st_00)["SystemAttributeUsageAttribute<Inherited>k__BackingField"] = st_01;
/* IL_07: ret */
return ; };
asm.x600003a = function (arg0,arg1) { 
 asm.x600003a = asm.x600003a_;
return (asm.x600003a.apply)(this,arguments); };
asm.x600003a_ = function _ctor(arg0,arg1) { var st_00;
var st_01;
var st_02;
 /* IL_00: ldarg.0 */
st_00 = arg0;
/* IL_01: call Void .ctor()*/
(asm0.x6000016)(st_00);
/* IL_06: nop */
/* IL_07: nop */
/* IL_08: ldarg.0 */
st_01 = arg0;
/* IL_09: ldarg.1 */
st_02 = arg1;
/* IL_0A: call Void set_ValidOn(System.AttributeTargets)*/
(asm0.x600003c)(st_01,clone_value(st_02));
/* IL_0F: nop */
/* IL_10: nop */
/* IL_11: ret */
return ; };
asm.x600003f = function (arg0) { 
 asm.x600003f = asm.x600003f_;
return (asm.x600003f.apply)(this,arguments); };
asm.x600003f_ = function ToString(arg0) { var loc0;
var st_00;
var st_01;
var st_02;
var st_03;
var __braille_pos_0__;
 loc0 = null;
__braille_pos_0__ = 0x0;
while (__braille_pos_0__ >= 0){
switch (__braille_pos_0__) {
case 0x0:
/* IL_00: nop */

/* IL_01: ldarg.0 */
st_00 = arg0;
/* IL_02: ldind.i1 */
st_01 = st_00.boxed;
/* IL_03: brtrue.s IL_0C*/
if (st_01){
__braille_pos_0__ = 0xC;continue;
}
/* IL_05: ldstr False*/
st_02 = new_string("False");
/* IL_0A: br.s IL_11*/
__braille_pos_0__ = 0x11;
continue;
case 0xC:
/* IL_0C: ldstr True*/
st_02 = new_string("True");
case 0x11:
/* IL_11: nop */

/* IL_12: stloc.0 */
loc0 = st_02;
/* IL_15: ldloc.0 */
st_03 = loc0;
/* IL_16: ret */
return st_03;
}
} };
asm.x6000040 = function (arg0) { 
 (((asm0)["System.Byte"])().init)();
asm.x6000040 = asm.x6000040_;
return (asm.x6000040.apply)(this,arguments); };
asm.x6000040_ = function ToString(arg0) { var t0;
var loc0;
var st_00;
var st_01;
var st_02;
var st_03;
var st_04;
 t0 = ((asm0)["System.Byte"])();
loc0 = null;
/* IL_00: nop */
/* IL_01: ldarg.0 */
st_00 = arg0;
/* IL_02: ldind.u1 */
st_01 = st_00.boxed;
/* IL_03: box System.Byte*/
st_02 = { 
'boxed': st_01,
'vtable': t0.prototype.vtable 
};
/* IL_08: call String NumberStructToString(System.Object)*/
st_03 = (function(o) { return new_string(o.boxed.toString()); })(st_02);
/* IL_0D: stloc.0 */
loc0 = st_03;
/* IL_10: ldloc.0 */
st_04 = loc0;
/* IL_11: ret */
return st_04; };
asm.x6000041 = function (arg0) { 
 (((asm0)["System.Char"])().init)();
asm.x6000041 = asm.x6000041_;
return (asm.x6000041.apply)(this,arguments); };
asm.x6000041_ = function ToString(arg0) { var t0;
var loc0;
var st_00;
var st_01;
var st_02;
var st_03;
var st_04;
 t0 = ((asm0)["System.Char"])();
loc0 = null;
/* IL_00: nop */
/* IL_01: ldarg.0 */
st_00 = arg0;
/* IL_02: ldind.u2 */
st_01 = st_00.boxed;
/* IL_03: box System.Char*/
st_02 = { 
'boxed': st_01,
'vtable': t0.prototype.vtable 
};
/* IL_08: call String ToStringImpl(System.Object)*/
st_03 = (function(o) { return new_string(String.fromCharCode(o.boxed)); })(st_02);
/* IL_0D: stloc.0 */
loc0 = st_03;
/* IL_10: ldloc.0 */
st_04 = loc0;
/* IL_11: ret */
return st_04; };
asm.x6000044 = function (arg0) { 
 asm.x6000044 = asm.x6000044_;
return (asm.x6000044.apply)(this,arguments); };
asm.x6000044_ = function WriteLine(arg0) { var st_00;
var st_01;
 /* IL_00: nop */
/* IL_01: ldarg.0 */
st_00 = arg0;
/* IL_02: callvirt String ToString()*/
st_01 = (st_00.vtable.x6000003)(st_00);
/* IL_07: call Void WriteLineImpl(System.String)*/
((function (o) { console.log(o.jsstr); }))(st_01);
/* IL_0C: nop */
/* IL_0D: ret */
return ; };
asm.x6000045 = function (arg0) { 
 asm.x6000045 = asm.x6000045_;
return (asm.x6000045.apply)(this,arguments); };
asm.x6000045_ = function _ctor(arg0) { var st_00;
 /* IL_00: ldarg.0 */
st_00 = arg0;
/* IL_01: call Void .ctor()*/
/* IL_06: ret */
return ; };
asm.x6000046 = function (arg0) { 
 asm.x6000046 = asm.x6000046_;
return (asm.x6000046.apply)(this,arguments); };
asm.x6000046_ = function _ctor(arg0) { var st_00;
 /* IL_00: ldarg.0 */
st_00 = arg0;
/* IL_01: call Void .ctor()*/
/* IL_06: ret */
return ; };
asm.x6000047 = function (arg0) { 
 (((asm0)["System.Double"])().init)();
asm.x6000047 = asm.x6000047_;
return (asm.x6000047.apply)(this,arguments); };
asm.x6000047_ = function ToString(arg0) { var t0;
var loc0;
var st_00;
var st_01;
var st_02;
var st_03;
var st_04;
 t0 = ((asm0)["System.Double"])();
loc0 = null;
/* IL_00: nop */
/* IL_01: ldarg.0 */
st_00 = arg0;
/* IL_02: ldind.r8 */
st_01 = st_00.boxed;
/* IL_03: box System.Double*/
st_02 = { 
'boxed': st_01,
'vtable': t0.prototype.vtable 
};
/* IL_08: call String NumberStructToString(System.Object)*/
st_03 = (function(o) { return new_string(o.boxed.toString()); })(st_02);
/* IL_0D: stloc.0 */
loc0 = st_03;
/* IL_10: ldloc.0 */
st_04 = loc0;
/* IL_11: ret */
return st_04; };
asm.x600004a = function (arg0) { 
 asm.x600004a = asm.x600004a_;
return (asm.x600004a.apply)(this,arguments); };
asm.x600004a_ = function get_Message(arg0) { var loc0;
var st_00;
var st_01;
var st_02;
 loc0 = null;
/* IL_00: ldarg.0 */
st_00 = arg0;
/* IL_01: ldfld String <Message>k__BackingField*/
st_01 = (st_00)["SystemException<Message>k__BackingField"];
/* IL_06: stloc.0 */
loc0 = st_01;
/* IL_09: ldloc.0 */
st_02 = loc0;
/* IL_0A: ret */
return st_02; };
asm.x600004b = function (arg0,arg1) { 
 asm.x600004b = asm.x600004b_;
return (asm.x600004b.apply)(this,arguments); };
asm.x600004b_ = function set_Message(arg0,arg1) { var st_00;
var st_01;
 /* IL_00: ldarg.0 */
st_00 = arg0;
/* IL_01: ldarg.1 */
st_01 = arg1;
/* IL_02: stfld String <Message>k__BackingField*/
(st_00)["SystemException<Message>k__BackingField"] = st_01;
/* IL_07: ret */
return ; };
asm.x6000048 = function (arg0) { 
 asm.x6000048 = asm.x6000048_;
return (asm.x6000048.apply)(this,arguments); };
asm.x6000048_ = function _ctor(arg0) { var st_00;
 /* IL_00: ldarg.0 */
st_00 = arg0;
/* IL_01: call Void .ctor()*/
/* IL_06: nop */
/* IL_07: nop */
/* IL_08: nop */
/* IL_09: ret */
return ; };
asm.x6000049 = function (arg0,arg1) { 
 asm.x6000049 = asm.x6000049_;
return (asm.x6000049.apply)(this,arguments); };
asm.x6000049_ = function _ctor(arg0,arg1) { var st_00;
var st_01;
var st_02;
 /* IL_00: ldarg.0 */
st_00 = arg0;
/* IL_01: call Void .ctor()*/
/* IL_06: nop */
/* IL_07: nop */
/* IL_08: ldarg.0 */
st_01 = arg0;
/* IL_09: ldarg.1 */
st_02 = arg1;
/* IL_0A: call Void set_Message(System.String)*/
(asm0.x600004b)(st_01,st_02);
/* IL_0F: nop */
/* IL_10: nop */
/* IL_11: ret */
return ; };
asm.x600004c = function (arg0,arg1) { 
 asm.x600004c = asm.x600004c_;
return (asm.x600004c.apply)(this,arguments); };
asm.x600004c_ = function _ctor(arg0,arg1) { var st_00;
var st_01;
 /* IL_00: ldarg.0 */
st_00 = arg0;
/* IL_01: ldarg.1 */
st_01 = arg1;
/* IL_02: call Void .ctor(System.String)*/
(asm0.x6000049)(st_00,st_01);
/* IL_07: nop */
/* IL_08: nop */
/* IL_09: nop */
/* IL_0A: ret */
return ; };
asm.x600004d = function (arg0) { 
 asm.x600004d = asm.x600004d_;
return (asm.x600004d.apply)(this,arguments); };
asm.x600004d_ = function _ctor(arg0) { var st_00;
 /* IL_00: ldarg.0 */
st_00 = arg0;
/* IL_01: call Void .ctor()*/
(asm0.x6000016)(st_00);
/* IL_06: ret */
return ; };
asm.x6000050 = function (arg0) { 
 (((asm0)["System.Int16"])().init)();
asm.x6000050 = asm.x6000050_;
return (asm.x6000050.apply)(this,arguments); };
asm.x6000050_ = function ToString(arg0) { var t0;
var loc0;
var st_00;
var st_01;
var st_02;
var st_03;
var st_04;
 t0 = ((asm0)["System.Int16"])();
loc0 = null;
/* IL_00: nop */
/* IL_01: ldarg.0 */
st_00 = arg0;
/* IL_02: ldind.i2 */
st_01 = st_00.boxed;
/* IL_03: box System.Int16*/
st_02 = { 
'boxed': st_01,
'vtable': t0.prototype.vtable 
};
/* IL_08: call String NumberStructToString(System.Object)*/
st_03 = (function(o) { return new_string(o.boxed.toString()); })(st_02);
/* IL_0D: stloc.0 */
loc0 = st_03;
/* IL_10: ldloc.0 */
st_04 = loc0;
/* IL_11: ret */
return st_04; };
asm.x6000051 = function (arg0) { 
 (((asm0)["System.Int32"])().init)();
asm.x6000051 = asm.x6000051_;
return (asm.x6000051.apply)(this,arguments); };
asm.x6000051_ = function ToString(arg0) { var t0;
var loc0;
var st_00;
var st_01;
var st_02;
var st_03;
var st_04;
 t0 = ((asm0)["System.Int32"])();
loc0 = null;
/* IL_00: nop */
/* IL_01: ldarg.0 */
st_00 = arg0;
/* IL_02: ldind.i4 */
st_01 = st_00.boxed;
/* IL_03: box System.Int32*/
st_02 = { 
'boxed': st_01,
'vtable': t0.prototype.vtable 
};
/* IL_08: call String NumberStructToString(System.Object)*/
st_03 = (function(o) { return new_string(o.boxed.toString()); })(st_02);
/* IL_0D: stloc.0 */
loc0 = st_03;
/* IL_10: ldloc.0 */
st_04 = loc0;
/* IL_11: ret */
return st_04; };
asm.x6000053 = function (arg0) { 
 (((asm0)["System.Int64"])().init)();
asm.x6000053 = asm.x6000053_;
return (asm.x6000053.apply)(this,arguments); };
asm.x6000053_ = function ToString(arg0) { var t0;
var loc0;
var st_00;
var st_01;
var st_02;
var st_03;
var st_04;
 t0 = ((asm0)["System.Int64"])();
loc0 = null;
/* IL_00: nop */
/* IL_01: ldarg.0 */
st_00 = arg0;
/* IL_02: ldind.i8 */
st_01 = st_00.boxed;
/* IL_03: box System.Int64*/
st_02 = { 
'boxed': st_01,
'vtable': t0.prototype.vtable 
};
/* IL_08: call String NumberStructToString(System.Object)*/
st_03 = (function(o) { return new_string(o.boxed.toString()); })(st_02);
/* IL_0D: stloc.0 */
loc0 = st_03;
/* IL_10: ldloc.0 */
st_04 = loc0;
/* IL_11: ret */
return st_04; };
asm.x6000054 = function (arg0) { 
 (((asm0)["System.IntPtr"])().init)();
asm.x6000054 = asm.x6000054_;
return (asm.x6000054.apply)(this,arguments); };
asm.x6000054_ = function ToString(arg0) { var t0;
var loc0;
var st_00;
var st_01;
var st_02;
var st_03;
var st_04;
 t0 = ((asm0)["System.IntPtr"])();
loc0 = null;
/* IL_00: nop */
/* IL_01: ldarg.0 */
st_00 = arg0;
/* IL_02: ldobj System.IntPtr*/
st_01 = st_00;
/* IL_07: box System.IntPtr*/
st_02 = { 
'boxed': st_01,
'vtable': t0.prototype.vtable 
};
/* IL_0C: call String NumberStructToString(System.Object)*/
st_03 = (function(o) { return new_string(o.boxed.toString()); })(st_02);
/* IL_11: stloc.0 */
loc0 = st_03;
/* IL_14: ldloc.0 */
st_04 = loc0;
/* IL_15: ret */
return st_04; };
asm.x6000055 = function (arg0) { 
 (((asm0)["System.Double"])().init)();
asm.x6000055 = asm.x6000055_;
return (asm.x6000055.apply)(this,arguments); };
asm.x6000055_ = function Sqrt(arg0) { var t0;
var loc0;
var st_00;
var st_01;
var st_02;
var st_03;
 t0 = ((asm0)["System.Double"])();
loc0 = 0;
/* IL_00: nop */
/* IL_01: ldarg.0 */
st_00 = arg0;
/* IL_02: box System.Double*/
st_01 = { 
'boxed': st_00,
'vtable': t0.prototype.vtable 
};
/* IL_07: call Double SqrtImpl(System.Object)*/
st_02 = (function(o) { return Math.sqrt(o.boxed); })(st_01);
/* IL_0C: stloc.0 */
loc0 = st_02;
/* IL_0F: ldloc.0 */
st_03 = loc0;
/* IL_10: ret */
return st_03; };
asm.x6000056 = function (arg0) { 
 (((asm0)["System.Double"])().init)();
asm.x6000056 = asm.x6000056_;
return (asm.x6000056.apply)(this,arguments); };
asm.x6000056_ = function Floor(arg0) { var t0;
var loc0;
var st_00;
var st_01;
var st_02;
var st_03;
 t0 = ((asm0)["System.Double"])();
loc0 = 0;
/* IL_00: nop */
/* IL_01: ldarg.0 */
st_00 = arg0;
/* IL_02: box System.Double*/
st_01 = { 
'boxed': st_00,
'vtable': t0.prototype.vtable 
};
/* IL_07: call Double FloorImpl(System.Object)*/
st_02 = (function(o) { return Math.floor(o.boxed); })(st_01);
/* IL_0C: stloc.0 */
loc0 = st_02;
/* IL_0F: ldloc.0 */
st_03 = loc0;
/* IL_10: ret */
return st_03; };
asm.x6000057 = function (arg0,arg1) { 
 (((asm0)["System.Double"])().init)();
asm.x6000057 = asm.x6000057_;
return (asm.x6000057.apply)(this,arguments); };
asm.x6000057_ = function Pow(arg0,arg1) { var t0;
var loc0;
var st_00;
var st_02;
var st_01;
var st_03;
var st_04;
var st_05;
 t0 = ((asm0)["System.Double"])();
loc0 = 0;
/* IL_00: nop */
/* IL_01: ldarg.0 */
st_00 = arg0;
/* IL_02: box System.Double*/
st_02 = { 
'boxed': st_00,
'vtable': t0.prototype.vtable 
};
/* IL_07: ldarg.1 */
st_01 = arg1;
/* IL_08: box System.Double*/
st_03 = { 
'boxed': st_01,
'vtable': t0.prototype.vtable 
};
/* IL_0D: call Double PowImpl(System.Object, System.Object)*/
st_04 = (function(a, b) { return Math.pow(a.boxed, b.boxed); })(st_02,st_03);
/* IL_12: stloc.0 */
loc0 = st_04;
/* IL_15: ldloc.0 */
st_05 = loc0;
/* IL_16: ret */
return st_05; };
asm.x600005b = function (arg0) { 
 asm.x600005b = asm.x600005b_;
return (asm.x600005b.apply)(this,arguments); };
asm.x600005b_ = function _ctor(arg0) { var st_00;
 /* IL_00: ldarg.0 */
st_00 = arg0;
/* IL_01: call Void .ctor()*/
/* IL_06: ret */
return ; };
asm.x600005c = function (arg0) { 
 asm.x600005c = asm.x600005c_;
return (asm.x600005c.apply)(this,arguments); };
asm.x600005c_ = function _ctor(arg0) { var st_00;
 /* IL_00: ldarg.0 */
st_00 = arg0;
/* IL_01: call Void .ctor()*/
(asm0.x6000046)(st_00);
/* IL_06: ret */
return ; };
asm.x600005d = function (arg0) { 
 asm.x600005d = asm.x600005d_;
return (asm.x600005d.apply)(this,arguments); };
asm.x600005d_ = function _ctor(arg0) { var st_00;
 /* IL_00: ldarg.0 */
st_00 = arg0;
/* IL_01: call Void .ctor()*/
(asm0.x6000016)(st_00);
/* IL_06: ret */
return ; };
asm.x600005e = function (arg0) { 
 (((asm0)["System.SByte"])().init)();
asm.x600005e = asm.x600005e_;
return (asm.x600005e.apply)(this,arguments); };
asm.x600005e_ = function ToString(arg0) { var t0;
var loc0;
var st_00;
var st_01;
var st_02;
var st_03;
var st_04;
 t0 = ((asm0)["System.SByte"])();
loc0 = null;
/* IL_00: nop */
/* IL_01: ldarg.0 */
st_00 = arg0;
/* IL_02: ldind.i1 */
st_01 = st_00.boxed;
/* IL_03: box System.SByte*/
st_02 = { 
'boxed': st_01,
'vtable': t0.prototype.vtable 
};
/* IL_08: call String NumberStructToString(System.Object)*/
st_03 = (function(o) { return new_string(o.boxed.toString()); })(st_02);
/* IL_0D: stloc.0 */
loc0 = st_03;
/* IL_10: ldloc.0 */
st_04 = loc0;
/* IL_11: ret */
return st_04; };
asm.x600005f = function (arg0) { 
 (((asm0)["System.Single"])().init)();
asm.x600005f = asm.x600005f_;
return (asm.x600005f.apply)(this,arguments); };
asm.x600005f_ = function ToString(arg0) { var t0;
var loc0;
var st_00;
var st_01;
var st_02;
var st_03;
var st_04;
 t0 = ((asm0)["System.Single"])();
loc0 = null;
/* IL_00: nop */
/* IL_01: ldarg.0 */
st_00 = arg0;
/* IL_02: ldind.r4 */
st_01 = st_00.boxed;
/* IL_03: box System.Single*/
st_02 = { 
'boxed': st_01,
'vtable': t0.prototype.vtable 
};
/* IL_08: call String NumberStructToString(System.Object)*/
st_03 = (function(o) { return new_string(o.boxed.toString()); })(st_02);
/* IL_0D: stloc.0 */
loc0 = st_03;
/* IL_10: ldloc.0 */
st_04 = loc0;
/* IL_11: ret */
return st_04; };
asm.x6000060 = function (arg0) { 
 asm.x6000060 = asm.x6000060_;
return (asm.x6000060.apply)(this,arguments); };
asm.x6000060_ = function _ctor(arg0) { var st_00;
 /* IL_00: ldarg.0 */
st_00 = arg0;
/* IL_01: call Void .ctor()*/
/* IL_06: ret */
return ; };
asm.x6000061 = function (arg0) { 
 (((asm0)["System.UInt16"])().init)();
asm.x6000061 = asm.x6000061_;
return (asm.x6000061.apply)(this,arguments); };
asm.x6000061_ = function ToString(arg0) { var t0;
var loc0;
var st_00;
var st_01;
var st_02;
var st_03;
var st_04;
 t0 = ((asm0)["System.UInt16"])();
loc0 = null;
/* IL_00: nop */
/* IL_01: ldarg.0 */
st_00 = arg0;
/* IL_02: ldind.u2 */
st_01 = st_00.boxed;
/* IL_03: box System.UInt16*/
st_02 = { 
'boxed': st_01,
'vtable': t0.prototype.vtable 
};
/* IL_08: call String NumberStructToString(System.Object)*/
st_03 = (function(o) { return new_string(o.boxed.toString()); })(st_02);
/* IL_0D: stloc.0 */
loc0 = st_03;
/* IL_10: ldloc.0 */
st_04 = loc0;
/* IL_11: ret */
return st_04; };
asm.x6000062 = function (arg0) { 
 (((asm0)["System.UInt32"])().init)();
asm.x6000062 = asm.x6000062_;
return (asm.x6000062.apply)(this,arguments); };
asm.x6000062_ = function ToString(arg0) { var t0;
var loc0;
var st_00;
var st_01;
var st_02;
var st_03;
var st_04;
 t0 = ((asm0)["System.UInt32"])();
loc0 = null;
/* IL_00: nop */
/* IL_01: ldarg.0 */
st_00 = arg0;
/* IL_02: ldind.u4 */
st_01 = st_00.boxed;
/* IL_03: box System.UInt32*/
st_02 = { 
'boxed': st_01,
'vtable': t0.prototype.vtable 
};
/* IL_08: call String NumberStructToString(System.Object)*/
st_03 = (function(o) { return new_string(o.boxed.toString()); })(st_02);
/* IL_0D: stloc.0 */
loc0 = st_03;
/* IL_10: ldloc.0 */
st_04 = loc0;
/* IL_11: ret */
return st_04; };
asm.x6000063 = function (arg0) { 
 (((asm0)["System.UInt64"])().init)();
asm.x6000063 = asm.x6000063_;
return (asm.x6000063.apply)(this,arguments); };
asm.x6000063_ = function ToString(arg0) { var t0;
var loc0;
var st_00;
var st_01;
var st_02;
var st_03;
var st_04;
 t0 = ((asm0)["System.UInt64"])();
loc0 = null;
/* IL_00: nop */
/* IL_01: ldarg.0 */
st_00 = arg0;
/* IL_02: ldind.i8 */
st_01 = st_00.boxed;
/* IL_03: box System.UInt64*/
st_02 = { 
'boxed': st_01,
'vtable': t0.prototype.vtable 
};
/* IL_08: call String NumberStructToString(System.Object)*/
st_03 = (function(o) { return new_string(o.boxed.toString()); })(st_02);
/* IL_0D: stloc.0 */
loc0 = st_03;
/* IL_10: ldloc.0 */
st_04 = loc0;
/* IL_11: ret */
return st_04; };
asm.x6000064 = function (arg0) { 
 (((asm0)["System.UIntPtr"])().init)();
asm.x6000064 = asm.x6000064_;
return (asm.x6000064.apply)(this,arguments); };
asm.x6000064_ = function ToString(arg0) { var t0;
var loc0;
var st_00;
var st_01;
var st_02;
var st_03;
var st_04;
 t0 = ((asm0)["System.UIntPtr"])();
loc0 = null;
/* IL_00: nop */
/* IL_01: ldarg.0 */
st_00 = arg0;
/* IL_02: ldobj System.UIntPtr*/
st_01 = st_00;
/* IL_07: box System.UIntPtr*/
st_02 = { 
'boxed': st_01,
'vtable': t0.prototype.vtable 
};
/* IL_0C: call String NumberStructToString(System.Object)*/
st_03 = (function(o) { return new_string(o.boxed.toString()); })(st_02);
/* IL_11: stloc.0 */
loc0 = st_03;
/* IL_14: ldloc.0 */
st_04 = loc0;
/* IL_15: ret */
return st_04; };
asm.x6000065 = function (arg0) { 
 asm.x6000065 = asm.x6000065_;
return (asm.x6000065.apply)(this,arguments); };
asm.x6000065_ = function _ctor(arg0) { var st_00;
var st_01;
 /* IL_00: ldarg.0 */
st_00 = arg0;
/* IL_01: ldstr Operation not supported*/
st_01 = new_string("Operation not supported");
/* IL_06: call Void .ctor(System.String)*/
(asm0.x6000049)(st_00,st_01);
/* IL_0B: nop */
/* IL_0C: nop */
/* IL_0D: nop */
/* IL_0E: ret */
return ; };
asm.x6000066 = function (arg0,arg1) { 
 asm.x6000066 = asm.x6000066_;
return (asm.x6000066.apply)(this,arguments); };
asm.x6000066_ = function _ctor(arg0,arg1) { var st_00;
var st_01;
 /* IL_00: ldarg.0 */
st_00 = arg0;
/* IL_01: ldarg.1 */
st_01 = arg1;
/* IL_02: call Void .ctor(System.String)*/
(asm0.x6000049)(st_00,st_01);
/* IL_07: nop */
/* IL_08: nop */
/* IL_09: nop */
/* IL_0A: ret */
return ; };
asm.x6000067 = function (arg0) { 
 asm.x6000067 = asm.x6000067_;
return (asm.x6000067.apply)(this,arguments); };
asm.x6000067_ = function _ctor(arg0) { var st_00;
 /* IL_00: ldarg.0 */
st_00 = arg0;
/* IL_01: call Void .ctor()*/
(asm0.x6000048)(st_00);
/* IL_06: ret */
return ; };
asm.x6000068 = function () { 
 asm.x6000068 = asm.x6000068_;
return (asm.x6000068.apply)(this,arguments); };
asm.x6000068_ = function get_CurrentManagedThreadId() { var loc0;
var st_00;
var st_01;
 loc0 = 0;
/* IL_00: nop */
/* IL_01: ldc.i4.0 */
st_00 = 0;
/* IL_02: stloc.0 */
loc0 = st_00;
/* IL_05: ldloc.0 */
st_01 = loc0;
/* IL_06: ret */
return st_01; };
asm.x600006a = function Invoke() { 
 
                                            var m = arguments[0]._methodPtr;
                                            var t = arguments[0]._target;
                                            if (t != null)
                                                arguments[0] = t;
                                            else
                                                arguments = Array.prototype.slice.call(arguments, 1);
                                            return m.apply(null, arguments); };
asm.x6000069 = function ctor() { 
 arguments[0]._methodPtr = arguments[2]; arguments[0]._target = arguments[1];; };
asm.x6000076 = function (arg0) { 
 asm.x6000076 = asm.x6000076_;
return (asm.x6000076.apply)(this,arguments); };
asm.x6000076_ = function _ctor(arg0) { var st_00;
 /* IL_00: ldarg.0 */
st_00 = arg0;
/* IL_01: call Void .ctor()*/
/* IL_06: ret */
return ; };
asm.x600007c = function (arg0) { 
 asm.x600007c = asm.x600007c_;
return (asm.x600007c.apply)(this,arguments); };
asm.x600007c_ = function _ctor(arg0) { var st_00;
 /* IL_00: ldarg.0 */
st_00 = arg0;
/* IL_01: call Void .ctor()*/
(asm0.x6000016)(st_00);
/* IL_06: ret */
return ; };
asm.x600007d = function (arg0,arg1) { 
 asm.x600007d = asm.x600007d_;
return (asm.x600007d.apply)(this,arguments); };
asm.x600007d_ = function _ctor(arg0,arg1) { var st_00;
 /* IL_00: ldarg.0 */
st_00 = arg0;
/* IL_01: call Void .ctor()*/
(asm0.x6000016)(st_00);
/* IL_06: nop */
/* IL_07: nop */
/* IL_08: nop */
/* IL_09: ret */
return ; };
asm.x600007e = function (arg0) { 
 asm.x600007e = asm.x600007e_;
return (asm.x600007e.apply)(this,arguments); };
asm.x600007e_ = function _ctor(arg0) { var st_00;
 /* IL_00: ldarg.0 */
st_00 = arg0;
/* IL_01: call Void .ctor()*/
(asm0.x6000016)(st_00);
/* IL_06: ret */
return ; };
asm.x6000080 = function (arg0) { 
 asm.x6000080 = asm.x6000080_;
return (asm.x6000080.apply)(this,arguments); };
asm.x6000080_ = function MoveNext(arg0) { var loc0;
var loc1;
var loc2;
var st_00;
var st_01;
var st_02;
var st_03;
var st_04;
var st_05;
var st_06;
var st_0C;
var st_07;
var st_09;
var st_08;
var st_0A;
var st_0B;
var st_0D;
var st_0E;
var st_0F;
var st_10;
var st_11;
var st_12;
var st_13;
var st_14;
var st_17;
var st_15;
var st_16;
var st_18;
var st_19;
var st_1C;
var st_1A;
var st_1B;
var st_1D;
var st_1E;
var st_1F;
var st_20;
var st_21;
var __braille_pos_0__;
var __braille_switch_value__;
var __braille_jmp__;
 loc0 = false;
loc1 = 0;
loc2 = false;
__braille_pos_0__ = 0x0;
while (__braille_pos_0__ >= 0){
switch (__braille_pos_0__) {
case 0x0:
/* IL_00: ldarg.0 */
st_00 = arg0;
/* IL_01: ldfld Int32 <>1__state*/
st_01 = (st_00)["System_GetEnumerator_d__0<>1__state"];
/* IL_06: stloc.1 */
loc1 = st_01;
/* IL_07: ldloc.1 */
st_02 = loc1;
/* IL_08: switch System.Int32[]*/
__braille_switch_value__ = st_02;
if (__braille_switch_value__ >= 0x2){
__braille_pos_0__ = 0x15;continue;
}
__braille_jmp__ = [ 0x4,0x2 ];
__braille_pos_0__ = (0x15 + (__braille_jmp__)[__braille_switch_value__]);
continue;
case 0x15:
/* IL_15: br.s IL_1B*/
__braille_pos_0__ = 0x1B;
continue;
case 0x17:
/* IL_17: br.s IL_55*/
__braille_pos_0__ = 0x55;
continue;
case 0x19:
/* IL_19: br.s IL_1D*/
__braille_pos_0__ = 0x1D;
continue;
case 0x1B:
/* IL_1B: br.s IL_82*/
__braille_pos_0__ = 0x82;
continue;
case 0x1D:
/* IL_1D: ldarg.0 */
st_03 = arg0;
/* IL_1E: ldc.i4.m1 */
st_04 = -1;
/* IL_1F: stfld Int32 <>1__state*/
(st_03)["System_GetEnumerator_d__0<>1__state"] = st_04;
/* IL_24: nop */

/* IL_25: ldarg.0 */
st_05 = arg0;
/* IL_26: ldc.i4.0 */
st_06 = 0;
/* IL_27: stfld Int32 <i>5__1*/
(st_05)["<i>5__1"] = st_06;
/* IL_2C: br.s IL_6A*/
__braille_pos_0__ = 0x6A;
continue;
case 0x2E:
/* IL_2E: ldarg.0 */
st_0C = arg0;
/* IL_2F: ldarg.0 */
st_07 = arg0;
/* IL_30: ldfld Array`1 <>4__this*/
st_09 = (st_07)["<>4__this"];
/* IL_35: ldarg.0 */
st_08 = arg0;
/* IL_36: ldfld Int32 <i>5__1*/
st_0A = (st_08)["<i>5__1"];
/* IL_3B: call Object GetValue(System.Int32)*/
st_0B = (asm0.x600000e)(st_09,st_0A);
/* IL_40: unbox.any T*/
st_0D = unbox_any(st_0B,((arguments)[0].constructor.GenericArguments)[0]);
/* IL_45: stfld T <>2__current*/
(st_0C)["System_GetEnumerator_d__0<>2__current"] = st_0D;
/* IL_4A: ldarg.0 */
st_0E = arg0;
/* IL_4B: ldc.i4.1 */
st_0F = 1;
/* IL_4C: stfld Int32 <>1__state*/
(st_0E)["System_GetEnumerator_d__0<>1__state"] = st_0F;
/* IL_51: ldc.i4.1 */
st_10 = 1;
/* IL_52: stloc.0 */
loc0 = st_10;
/* IL_53: br.s IL_86*/
__braille_pos_0__ = 0x86;
continue;
case 0x55:
/* IL_55: ldarg.0 */
st_11 = arg0;
/* IL_56: ldc.i4.m1 */
st_12 = -1;
/* IL_57: stfld Int32 <>1__state*/
(st_11)["System_GetEnumerator_d__0<>1__state"] = st_12;
/* IL_5C: ldarg.0 */
st_13 = arg0;
/* IL_5D: dup */
st_17 = (st_14 = st_13);
/* IL_5E: ldfld Int32 <i>5__1*/
st_15 = (st_14)["<i>5__1"];
/* IL_63: ldc.i4.1 */
st_16 = 1;
/* IL_64: add */
st_18 = (st_15 + st_16);
/* IL_65: stfld Int32 <i>5__1*/
(st_17)["<i>5__1"] = st_18;
case 0x6A:
/* IL_6A: ldarg.0 */
st_19 = arg0;
/* IL_6B: ldfld Int32 <i>5__1*/
st_1C = (st_19)["<i>5__1"];
/* IL_70: ldarg.0 */
st_1A = arg0;
/* IL_71: ldfld Array`1 <>4__this*/
st_1B = (st_1A)["<>4__this"];
/* IL_76: call Int32 get_Length()*/
st_1D = (asm0.x600000b)(st_1B);
/* IL_7C: clt */
st_1E = (st_1C < st_1D) ? (1) : (0);
/* IL_7D: stloc.2 */
loc2 = st_1E;
/* IL_7E: ldloc.2 */
st_1F = loc2;
/* IL_7F: brtrue.s IL_2E*/
if (st_1F){
__braille_pos_0__ = 0x2E;continue;
}
/* IL_81: nop */

case 0x82:
/* IL_82: ldc.i4.0 */
st_20 = 0;
/* IL_83: stloc.0 */
loc0 = st_20;
case 0x86:
/* IL_86: ldloc.0 */
st_21 = loc0;
/* IL_87: ret */
return st_21;
}
} };
asm.x6000081 = function (arg0) { 
 asm.x6000081 = asm.x6000081_;
return (asm.x6000081.apply)(this,arguments); };
asm.x6000081_ = function System_Collections_Generic_IEnumerator_T__get_Current(arg0) { var loc0;
var st_00;
var st_01;
var st_02;
 loc0 = (((arguments)[0].constructor.GenericArguments)[0].IsValueType) ? ((((arguments)[0].constructor.GenericArguments)[0].IsPrimitive) ? (0) : (new (((arguments)[0].constructor.GenericArguments)[0])())) : (null);
/* IL_00: ldarg.0 */
st_00 = arg0;
/* IL_01: ldfld T <>2__current*/
st_01 = (st_00)["System_GetEnumerator_d__0<>2__current"];
/* IL_06: stloc.0 */
loc0 = st_01;
/* IL_09: ldloc.0 */
st_02 = loc0;
/* IL_0A: ret */
return st_02; };
asm.x6000082 = function (arg0) { 
 (((asm0)["System.NotSupportedException"])().init)();
asm.x6000082 = asm.x6000082_;
return (asm.x6000082.apply)(this,arguments); };
asm.x6000082_ = function System_Collections_IEnumerator_Reset(arg0) { var t0;
var st_00;
 t0 = ((asm0)["System.NotSupportedException"])();
/* IL_00: newobj Void .ctor()*/
st_00 = (function () { var result;
 result = new ((arguments)[0])();
(asm0.x6000065)(result);
return result; })(t0);
/* IL_05: throw */
throw st_00; };
asm.x6000083 = function (arg0) { 
 asm.x6000083 = asm.x6000083_;
return (asm.x6000083.apply)(this,arguments); };
asm.x6000083_ = function System_IDisposable_Dispose(arg0) { 
 /* IL_00: nop */
/* IL_01: ret */
return ; };
asm.x6000084 = function (arg0) { 
 asm.x6000084 = asm.x6000084_;
return (asm.x6000084.apply)(this,arguments); };
asm.x6000084_ = function System_Collections_IEnumerator_get_Current(arg0) { var loc0;
var st_00;
var st_01;
var st_02;
var st_03;
 loc0 = null;
/* IL_00: ldarg.0 */
st_00 = arg0;
/* IL_01: ldfld T <>2__current*/
st_01 = (st_00)["System_GetEnumerator_d__0<>2__current"];
/* IL_06: box T*/
st_02 = box(st_01,((arguments)[0].constructor.GenericArguments)[0]);
/* IL_0B: stloc.0 */
loc0 = st_02;
/* IL_0E: ldloc.0 */
st_03 = loc0;
/* IL_0F: ret */
return st_03; };
asm.x6000085 = function (arg0,arg1) { 
 asm.x6000085 = asm.x6000085_;
return (asm.x6000085.apply)(this,arguments); };
asm.x6000085_ = function _ctor(arg0,arg1) { var st_00;
var st_01;
var st_02;
 /* IL_00: ldarg.0 */
st_00 = arg0;
/* IL_01: call Void .ctor()*/
/* IL_06: ldarg.0 */
st_01 = arg0;
/* IL_07: ldarg.1 */
st_02 = arg1;
/* IL_08: stfld Int32 <>1__state*/
(st_01)["System_GetEnumerator_d__0<>1__state"] = st_02;
/* IL_0D: ret */
return ; };
(asm)["System.Object"] = (function () { var ct;
 ct = null;
return function () { var c;
var initialized;
 c = ct;
if (c){
return c;
}
initialized = false;;
function $$Object() { 
 ($$Object.init)();
this.constructor = $$Object; };
$$Object.init = function () { 
 if (initialized){
return;
}
initialized = true;
$$Object.Interfaces = [  ];
$$Object.IsInst = function (t) { return t instanceof $$Object; };
$$Object.IsValueType = false;
$$Object.IsPrimitive = false;
$$Object.IsNullable = false;
$$Object.prototype.vtable = { 
'x6000003': asm0.x6000003,
'x6000004': asm0.x6000004,
'x6000007': asm0.x6000007 
}; };
$$Object.prototype = { 
 
};;
c = $$Object;
ct = c;
return c; }; })();
(asm)["System.Collections.IEnumerable"] = (function () { var ct;
 ct = null;
return function () { var c;
var initialized;
 c = ct;
if (c){
return c;
}
initialized = false;;
function IEnumerable() { 
 (IEnumerable.init)();
this.constructor = IEnumerable; };
IEnumerable.init = function () { 
 if (initialized){
return;
}
initialized = true;
IEnumerable.Interfaces = [  ];
IEnumerable.IsInst = function (t) { return t.constructor.Interfaces.indexOf(IEnumerable) != -1; };
IEnumerable.IsValueType = false;
IEnumerable.IsPrimitive = false;
IEnumerable.IsNullable = false;
IEnumerable.prototype.vtable = { 
'x600000a': asm0.x600000a 
}; };
IEnumerable.prototype = { 
 
};;
c = IEnumerable;
ct = c;
return c; }; })();
(asm)["System.Array"] = (function () { var ct;
 ct = null;
return function () { var c;
var initialized;
 c = ct;
if (c){
return c;
}
initialized = false;;
function Array() { 
 (Array.init)();
this.constructor = Array; };
Array.init = function () { 
 if (initialized){
return;
}
initialized = true;
Array.Interfaces = [ ((asm0)["System.Collections.IEnumerable"])() ];
Array.IsInst = function (t) { return t instanceof Array; };
Array.IsValueType = false;
Array.IsPrimitive = false;
Array.IsNullable = false;
Array.prototype.type = null;
Array.prototype.jsarr = null;
Array.prototype.vtable = { 
'x600000f': asm0.x600000f,
'x6000010': asm0.x6000010,
'x6000003': asm0.x6000003,
'x6000004': asm0.x6000004,
'x6000007': asm0.x6000007 
};
(Array.prototype)[((asm0)["System.Collections.IEnumerable"])()] = { 
'x600000a': asm0.x600000f 
}; };
Array.prototype = new (((asm0)["System.Object"])())();;
c = Array;
ct = c;
return c; }; })();
(asm)["System.Collections.Generic.IEnumerable`1"] = (function () { var ct;
 ct = { 
 
};
return function (T) { var c;
var initialized;
 c = tree_get([ T ],ct);
if (c){
return c;
}
initialized = false;;
function IEnumerable_1() { 
 (IEnumerable_1.init)();
this.constructor = IEnumerable_1; };
IEnumerable_1.init = function () { 
 if (initialized){
return;
}
initialized = true;
IEnumerable_1.Interfaces = [ ((asm0)["System.Collections.IEnumerable"])() ];
IEnumerable_1.IsInst = function (t) { return t.constructor.Interfaces.indexOf(IEnumerable_1) != -1; };
IEnumerable_1.IsValueType = false;
IEnumerable_1.IsPrimitive = false;
IEnumerable_1.IsNullable = false;
IEnumerable_1.GenericArguments = [ T ];
IEnumerable_1.prototype.vtable = { 
'x6000012': asm0.x6000012 
}; };
IEnumerable_1.prototype = { 
 
};;
c = IEnumerable_1;
tree_set([ T ],ct,c);
return c; }; })();
(asm)["System.Array`1"] = (function () { var ct;
 ct = { 
 
};
return function (T) { var c;
var initialized;
 c = tree_get([ T ],ct);
if (c){
return c;
}
initialized = false;;
function Array_1() { 
 (Array_1.init)();
this.constructor = Array_1; };
Array_1.init = function () { 
 if (initialized){
return;
}
initialized = true;
Array_1.Interfaces = [ ((asm0)["System.Collections.Generic.IEnumerable`1"])(T),((asm0)["System.Collections.IEnumerable"])() ];
Array_1.IsInst = function (t) { return t instanceof Array_1; };
Array_1.IsValueType = false;
Array_1.IsPrimitive = false;
Array_1.IsNullable = false;
Array_1.GenericArguments = [ T ];
Array_1.prototype.type = null;
Array_1.prototype.jsarr = null;
Array_1.prototype.vtable = { 
'x6000013': asm0.x6000013,
'x6000010': asm0.x6000014,
'x600000f': asm0.x600000f,
'x6000003': asm0.x6000003,
'x6000004': asm0.x6000004,
'x6000007': asm0.x6000007 
};
(Array_1.prototype)[((asm0)["System.Collections.Generic.IEnumerable`1"])(T)] = { 
'x6000012': asm0.x6000013 
};
(Array_1.prototype)[((asm0)["System.Collections.IEnumerable"])()] = { 
'x600000a': asm0.x600000f 
}; };
Array_1.prototype = new (((asm0)["System.Array"])())();;
c = Array_1;
tree_set([ T ],ct,c);
return c; }; })();
(asm)["System.Attribute"] = (function () { var ct;
 ct = null;
return function () { var c;
var initialized;
 c = ct;
if (c){
return c;
}
initialized = false;;
function Attribute() { 
 (Attribute.init)();
this.constructor = Attribute; };
Attribute.init = function () { 
 if (initialized){
return;
}
initialized = true;
Attribute.Interfaces = [  ];
Attribute.IsInst = function (t) { return t instanceof Attribute; };
Attribute.IsValueType = false;
Attribute.IsPrimitive = false;
Attribute.IsNullable = false;
Attribute.prototype.vtable = { 
'x6000003': asm0.x6000003,
'x6000004': asm0.x6000004,
'x6000007': asm0.x6000007 
}; };
Attribute.prototype = new (((asm0)["System.Object"])())();;
c = Attribute;
ct = c;
return c; }; })();
(asm)["System.Diagnostics.DebuggerStepThroughAttribute"] = (function () { var ct;
 ct = null;
return function () { var c;
var initialized;
 c = ct;
if (c){
return c;
}
initialized = false;;
function DebuggerStepThroughAttribute() { 
 (DebuggerStepThroughAttribute.init)();
this.constructor = DebuggerStepThroughAttribute; };
DebuggerStepThroughAttribute.init = function () { 
 if (initialized){
return;
}
initialized = true;
DebuggerStepThroughAttribute.Interfaces = [  ];
DebuggerStepThroughAttribute.IsInst = function (t) { return t instanceof DebuggerStepThroughAttribute; };
DebuggerStepThroughAttribute.IsValueType = false;
DebuggerStepThroughAttribute.IsPrimitive = false;
DebuggerStepThroughAttribute.IsNullable = false;
DebuggerStepThroughAttribute.prototype.vtable = { 
'x6000003': asm0.x6000003,
'x6000004': asm0.x6000004,
'x6000007': asm0.x6000007 
}; };
DebuggerStepThroughAttribute.prototype = new (((asm0)["System.Attribute"])())();;
c = DebuggerStepThroughAttribute;
ct = c;
return c; }; })();
(asm)["System.ValueType"] = (function () { var ct;
 ct = null;
return function () { var c;
var initialized;
 c = ct;
if (c){
return c;
}
initialized = false;;
function ValueType() { 
 (ValueType.init)();
this.constructor = ValueType; };
ValueType.init = function () { 
 if (initialized){
return;
}
initialized = true;
ValueType.Interfaces = [  ];
ValueType.IsInst = function (t) { return t instanceof ValueType; };
ValueType.IsValueType = false;
ValueType.IsPrimitive = false;
ValueType.IsNullable = false;
ValueType.prototype.vtable = { 
'x6000003': asm0.x6000003,
'x6000004': asm0.x6000004,
'x6000007': asm0.x6000007 
}; };
ValueType.prototype = new (((asm0)["System.Object"])())();;
c = ValueType;
ct = c;
return c; }; })();
(asm)["System.Enum"] = (function () { var ct;
 ct = null;
return function () { var c;
var initialized;
 c = ct;
if (c){
return c;
}
initialized = false;;
function Enum() { 
 (Enum.init)();
this.constructor = Enum; };
Enum.init = function () { 
 if (initialized){
return;
}
initialized = true;
Enum.Interfaces = [  ];
Enum.IsInst = function (t) { return t instanceof Enum; };
Enum.IsValueType = false;
Enum.IsPrimitive = false;
Enum.IsNullable = false;
Enum.prototype.vtable = { 
'x6000003': asm0.x6000003,
'x6000004': asm0.x6000004,
'x6000007': asm0.x6000007 
}; };
Enum.prototype = { 
 
};;
c = Enum;
ct = c;
return c; }; })();
(asm)["System.AttributeTargets"] = (function () { var ct;
 ct = null;
return function () { var c;
var initialized;
 c = ct;
if (c){
return c;
}
initialized = false;;
function AttributeTargets() { 
 (AttributeTargets.init)();
this.constructor = AttributeTargets; };
AttributeTargets.init = function () { 
 if (initialized){
return;
}
initialized = true;
AttributeTargets.Assembly = new (((asm0)["System.AttributeTargets"])())();
AttributeTargets.Module = new (((asm0)["System.AttributeTargets"])())();
AttributeTargets.Class = new (((asm0)["System.AttributeTargets"])())();
AttributeTargets.Struct = new (((asm0)["System.AttributeTargets"])())();
AttributeTargets.Enum = new (((asm0)["System.AttributeTargets"])())();
AttributeTargets.Constructor = new (((asm0)["System.AttributeTargets"])())();
AttributeTargets.Method = new (((asm0)["System.AttributeTargets"])())();
AttributeTargets.Property = new (((asm0)["System.AttributeTargets"])())();
AttributeTargets.Field = new (((asm0)["System.AttributeTargets"])())();
AttributeTargets.Event = new (((asm0)["System.AttributeTargets"])())();
AttributeTargets.Interface = new (((asm0)["System.AttributeTargets"])())();
AttributeTargets.Parameter = new (((asm0)["System.AttributeTargets"])())();
AttributeTargets.Delegate = new (((asm0)["System.AttributeTargets"])())();
AttributeTargets.ReturnValue = new (((asm0)["System.AttributeTargets"])())();
AttributeTargets.GenericParameter = new (((asm0)["System.AttributeTargets"])())();
AttributeTargets.All = new (((asm0)["System.AttributeTargets"])())();
AttributeTargets.Interfaces = [  ];
AttributeTargets.IsInst = function (t) { return t instanceof AttributeTargets; };
AttributeTargets.IsValueType = true;
AttributeTargets.IsPrimitive = false;
AttributeTargets.IsNullable = false;
AttributeTargets.prototype.value__ = 0;
AttributeTargets.prototype.vtable = { 
'x6000003': asm0.x6000003,
'x6000004': asm0.x6000004,
'x6000007': asm0.x6000007 
}; };
AttributeTargets.prototype = new (((asm0)["System.Enum"])())();;
c = AttributeTargets;
ct = c;
return c; }; })();
(asm)["System.ComVisibleAttribute"] = (function () { var ct;
 ct = null;
return function () { var c;
var initialized;
 c = ct;
if (c){
return c;
}
initialized = false;;
function ComVisibleAttribute() { 
 (ComVisibleAttribute.init)();
this.constructor = ComVisibleAttribute; };
ComVisibleAttribute.init = function () { 
 if (initialized){
return;
}
initialized = true;
ComVisibleAttribute.Interfaces = [  ];
ComVisibleAttribute.IsInst = function (t) { return t instanceof ComVisibleAttribute; };
ComVisibleAttribute.IsValueType = false;
ComVisibleAttribute.IsPrimitive = false;
ComVisibleAttribute.IsNullable = false;
ComVisibleAttribute.prototype.vtable = { 
'x6000003': asm0.x6000003,
'x6000004': asm0.x6000004,
'x6000007': asm0.x6000007 
}; };
ComVisibleAttribute.prototype = new (((asm0)["System.Attribute"])())();;
c = ComVisibleAttribute;
ct = c;
return c; }; })();
(asm)["System.Nullable`1"] = (function () { var ct;
 ct = { 
 
};
return function (T) { var c;
var initialized;
 c = tree_get([ T ],ct);
if (c){
return c;
}
initialized = false;;
function Nullable_1() { 
 (Nullable_1.init)();
this.constructor = Nullable_1; };
Nullable_1.init = function () { 
 if (initialized){
return;
}
initialized = true;
Nullable_1.Interfaces = [  ];
Nullable_1.IsInst = function (t) { return t instanceof Nullable_1; };
Nullable_1.IsValueType = true;
Nullable_1.IsPrimitive = false;
Nullable_1.IsNullable = true;
Nullable_1.GenericArguments = [ T ];
Nullable_1.prototype.value = (T.IsValueType) ? ((T.IsPrimitive) ? (0) : (new T())) : (null);
Nullable_1.prototype.has_value = false;
Nullable_1.prototype.vtable = { 
'x6000007': asm0.x600001e,
'x6000004': asm0.x6000020,
'x6000003': asm0.x6000023 
}; };
Nullable_1.prototype = { 
 
};;
c = Nullable_1;
tree_set([ T ],ct,c);
return c; }; })();
(asm)["System.SerializableAttribute"] = (function () { var ct;
 ct = null;
return function () { var c;
var initialized;
 c = ct;
if (c){
return c;
}
initialized = false;;
function SerializableAttribute() { 
 (SerializableAttribute.init)();
this.constructor = SerializableAttribute; };
SerializableAttribute.init = function () { 
 if (initialized){
return;
}
initialized = true;
SerializableAttribute.Interfaces = [  ];
SerializableAttribute.IsInst = function (t) { return t instanceof SerializableAttribute; };
SerializableAttribute.IsValueType = false;
SerializableAttribute.IsPrimitive = false;
SerializableAttribute.IsNullable = false;
SerializableAttribute.prototype.vtable = { 
'x6000003': asm0.x6000003,
'x6000004': asm0.x6000004,
'x6000007': asm0.x6000007 
}; };
SerializableAttribute.prototype = new (((asm0)["System.Attribute"])())();;
c = SerializableAttribute;
ct = c;
return c; }; })();
(asm)["System.String"] = (function () { var ct;
 ct = null;
return function () { var c;
var initialized;
 c = ct;
if (c){
return c;
}
initialized = false;;
function $$String() { 
 ($$String.init)();
this.constructor = $$String; };
$$String.init = function () { 
 if (initialized){
return;
}
initialized = true;
$$String.Empty = null;
$$String.Interfaces = [  ];
$$String.IsInst = function (t) { return t instanceof $$String; };
$$String.IsValueType = false;
$$String.IsPrimitive = false;
$$String.IsNullable = false;
(asm0.x6000037)();
$$String.prototype.jsstr = null;
$$String.prototype.vtable = { 
'x6000003': asm0.x6000032,
'x6000004': asm0.x6000004,
'x6000007': asm0.x6000007 
}; };
$$String.prototype = new (((asm0)["System.Object"])())();;
c = $$String;
ct = c;
return c; }; })();
(asm)["System.Reflection.DefaultMemberAttribute"] = (function () { var ct;
 ct = null;
return function () { var c;
var initialized;
 c = ct;
if (c){
return c;
}
initialized = false;;
function DefaultMemberAttribute() { 
 (DefaultMemberAttribute.init)();
this.constructor = DefaultMemberAttribute; };
DefaultMemberAttribute.init = function () { 
 if (initialized){
return;
}
initialized = true;
DefaultMemberAttribute.Interfaces = [  ];
DefaultMemberAttribute.IsInst = function (t) { return t instanceof DefaultMemberAttribute; };
DefaultMemberAttribute.IsValueType = false;
DefaultMemberAttribute.IsPrimitive = false;
DefaultMemberAttribute.IsNullable = false;
DefaultMemberAttribute.prototype.System_ReflectionDefaultMemberAttributemember_name = null;
DefaultMemberAttribute.prototype.vtable = { 
'x6000003': asm0.x6000003,
'x6000004': asm0.x6000004,
'x6000007': asm0.x6000007 
}; };
DefaultMemberAttribute.prototype = new (((asm0)["System.Attribute"])())();;
c = DefaultMemberAttribute;
ct = c;
return c; }; })();
(asm)["System.AttributeUsageAttribute"] = (function () { var ct;
 ct = null;
return function () { var c;
var initialized;
 c = ct;
if (c){
return c;
}
initialized = false;;
function AttributeUsageAttribute() { 
 (AttributeUsageAttribute.init)();
this.constructor = AttributeUsageAttribute; };
AttributeUsageAttribute.init = function () { 
 if (initialized){
return;
}
initialized = true;
AttributeUsageAttribute.Interfaces = [  ];
AttributeUsageAttribute.IsInst = function (t) { return t instanceof AttributeUsageAttribute; };
AttributeUsageAttribute.IsValueType = false;
AttributeUsageAttribute.IsPrimitive = false;
AttributeUsageAttribute.IsNullable = false;
(AttributeUsageAttribute.prototype)["SystemAttributeUsageAttribute<ValidOn>k__BackingField"] = new (((asm0)["System.AttributeTargets"])())();
(AttributeUsageAttribute.prototype)["SystemAttributeUsageAttribute<Inherited>k__BackingField"] = false;
AttributeUsageAttribute.prototype.vtable = { 
'x6000003': asm0.x6000003,
'x6000004': asm0.x6000004,
'x6000007': asm0.x6000007 
}; };
AttributeUsageAttribute.prototype = new (((asm0)["System.Attribute"])())();;
c = AttributeUsageAttribute;
ct = c;
return c; }; })();
(asm)["System.Boolean"] = (function () { var ct;
 ct = null;
return function () { var c;
var initialized;
 c = ct;
if (c){
return c;
}
initialized = false;;
function $$Boolean() { 
 ($$Boolean.init)();
this.constructor = $$Boolean; };
$$Boolean.init = function () { 
 if (initialized){
return;
}
initialized = true;
$$Boolean.Interfaces = [  ];
$$Boolean.IsInst = function (t) { return t instanceof $$Boolean; };
$$Boolean.IsValueType = true;
$$Boolean.IsPrimitive = true;
$$Boolean.IsNullable = false;
$$Boolean.prototype.vtable = { 
'x6000003': asm0.x600003f,
'x6000004': asm0.x6000004,
'x6000007': asm0.x6000007 
}; };
$$Boolean.prototype = { 
 
};;
c = $$Boolean;
ct = c;
return c; }; })();
(asm)["System.Byte"] = (function () { var ct;
 ct = null;
return function () { var c;
var initialized;
 c = ct;
if (c){
return c;
}
initialized = false;;
function Byte() { 
 (Byte.init)();
this.constructor = Byte; };
Byte.init = function () { 
 if (initialized){
return;
}
initialized = true;
Byte.Interfaces = [  ];
Byte.IsInst = function (t) { return t instanceof Byte; };
Byte.IsValueType = true;
Byte.IsPrimitive = true;
Byte.IsNullable = false;
Byte.prototype.vtable = { 
'x6000003': asm0.x6000040,
'x6000004': asm0.x6000004,
'x6000007': asm0.x6000007 
}; };
Byte.prototype = { 
 
};;
c = Byte;
ct = c;
return c; }; })();
(asm)["System.Char"] = (function () { var ct;
 ct = null;
return function () { var c;
var initialized;
 c = ct;
if (c){
return c;
}
initialized = false;;
function Char() { 
 (Char.init)();
this.constructor = Char; };
Char.init = function () { 
 if (initialized){
return;
}
initialized = true;
Char.MinValue = 0;
Char.MaxValue = 0;
Char.Interfaces = [  ];
Char.IsInst = function (t) { return t instanceof Char; };
Char.IsValueType = true;
Char.IsPrimitive = true;
Char.IsNullable = false;
Char.prototype.vtable = { 
'x6000003': asm0.x6000041,
'x6000004': asm0.x6000004,
'x6000007': asm0.x6000007 
}; };
Char.prototype = { 
 
};;
c = Char;
ct = c;
return c; }; })();
(asm)["System.Console"] = (function () { var ct;
 ct = null;
return function () { var c;
var initialized;
 c = ct;
if (c){
return c;
}
initialized = false;;
function Console() { 
 (Console.init)();
this.constructor = Console; };
Console.init = function () { 
 if (initialized){
return;
}
initialized = true;
Console.Interfaces = [  ];
Console.IsInst = function (t) { return t instanceof Console; };
Console.IsValueType = false;
Console.IsPrimitive = false;
Console.IsNullable = false;
Console.prototype.vtable = { 
'x6000003': asm0.x6000003,
'x6000004': asm0.x6000004,
'x6000007': asm0.x6000007 
}; };
Console.prototype = new (((asm0)["System.Object"])())();;
c = Console;
ct = c;
return c; }; })();
(asm)["System.Delegate"] = (function () { var ct;
 ct = null;
return function () { var c;
var initialized;
 c = ct;
if (c){
return c;
}
initialized = false;;
function Delegate() { 
 (Delegate.init)();
this.constructor = Delegate; };
Delegate.init = function () { 
 if (initialized){
return;
}
initialized = true;
Delegate.Interfaces = [  ];
Delegate.IsInst = function (t) { return t instanceof Delegate; };
Delegate.IsValueType = false;
Delegate.IsPrimitive = false;
Delegate.IsNullable = false;
Delegate.prototype.vtable = { 
'x6000003': asm0.x6000003,
'x6000004': asm0.x6000004,
'x6000007': asm0.x6000007 
}; };
Delegate.prototype = new (((asm0)["System.Object"])())();;
c = Delegate;
ct = c;
return c; }; })();
(asm)["System.Double"] = (function () { var ct;
 ct = null;
return function () { var c;
var initialized;
 c = ct;
if (c){
return c;
}
initialized = false;;
function Double() { 
 (Double.init)();
this.constructor = Double; };
Double.init = function () { 
 if (initialized){
return;
}
initialized = true;
Double.Epsilon = 0;
Double.MaxValue = 0;
Double.MinValue = 0;
Double.NaN = 0;
Double.NegativeInfinity = 0;
Double.PositiveInfinity = 0;
Double.Interfaces = [  ];
Double.IsInst = function (t) { return t instanceof Double; };
Double.IsValueType = true;
Double.IsPrimitive = true;
Double.IsNullable = false;
Double.prototype.vtable = { 
'x6000003': asm0.x6000047,
'x6000004': asm0.x6000004,
'x6000007': asm0.x6000007 
}; };
Double.prototype = { 
 
};;
c = Double;
ct = c;
return c; }; })();
(asm)["System.Exception"] = (function () { var ct;
 ct = null;
return function () { var c;
var initialized;
 c = ct;
if (c){
return c;
}
initialized = false;;
function Exception() { 
 (Exception.init)();
this.constructor = Exception; };
Exception.init = function () { 
 if (initialized){
return;
}
initialized = true;
Exception.Interfaces = [  ];
Exception.IsInst = function (t) { return t instanceof Exception; };
Exception.IsValueType = false;
Exception.IsPrimitive = false;
Exception.IsNullable = false;
(Exception.prototype)["SystemException<Message>k__BackingField"] = null;
Exception.prototype.vtable = { 
'x6000003': asm0.x6000003,
'x6000004': asm0.x6000004,
'x6000007': asm0.x6000007 
}; };
Exception.prototype = new (((asm0)["System.Object"])())();;
c = Exception;
ct = c;
return c; }; })();
(asm)["System.InvalidOperationException"] = (function () { var ct;
 ct = null;
return function () { var c;
var initialized;
 c = ct;
if (c){
return c;
}
initialized = false;;
function InvalidOperationException() { 
 (InvalidOperationException.init)();
this.constructor = InvalidOperationException; };
InvalidOperationException.init = function () { 
 if (initialized){
return;
}
initialized = true;
InvalidOperationException.Interfaces = [  ];
InvalidOperationException.IsInst = function (t) { return t instanceof InvalidOperationException; };
InvalidOperationException.IsValueType = false;
InvalidOperationException.IsPrimitive = false;
InvalidOperationException.IsNullable = false;
InvalidOperationException.prototype.vtable = { 
'x6000003': asm0.x6000003,
'x6000004': asm0.x6000004,
'x6000007': asm0.x6000007 
}; };
InvalidOperationException.prototype = new (((asm0)["System.Exception"])())();;
c = InvalidOperationException;
ct = c;
return c; }; })();
(asm)["System.FlagsAttribute"] = (function () { var ct;
 ct = null;
return function () { var c;
var initialized;
 c = ct;
if (c){
return c;
}
initialized = false;;
function FlagsAttribute() { 
 (FlagsAttribute.init)();
this.constructor = FlagsAttribute; };
FlagsAttribute.init = function () { 
 if (initialized){
return;
}
initialized = true;
FlagsAttribute.Interfaces = [  ];
FlagsAttribute.IsInst = function (t) { return t instanceof FlagsAttribute; };
FlagsAttribute.IsValueType = false;
FlagsAttribute.IsPrimitive = false;
FlagsAttribute.IsNullable = false;
FlagsAttribute.prototype.vtable = { 
'x6000003': asm0.x6000003,
'x6000004': asm0.x6000004,
'x6000007': asm0.x6000007 
}; };
FlagsAttribute.prototype = new (((asm0)["System.Attribute"])())();;
c = FlagsAttribute;
ct = c;
return c; }; })();
(asm)["System.IDisposable"] = (function () { var ct;
 ct = null;
return function () { var c;
var initialized;
 c = ct;
if (c){
return c;
}
initialized = false;;
function IDisposable() { 
 (IDisposable.init)();
this.constructor = IDisposable; };
IDisposable.init = function () { 
 if (initialized){
return;
}
initialized = true;
IDisposable.Interfaces = [  ];
IDisposable.IsInst = function (t) { return t.constructor.Interfaces.indexOf(IDisposable) != -1; };
IDisposable.IsValueType = false;
IDisposable.IsPrimitive = false;
IDisposable.IsNullable = false;
IDisposable.prototype.vtable = { 
'x600004e': asm0.x600004e 
}; };
IDisposable.prototype = { 
 
};;
c = IDisposable;
ct = c;
return c; }; })();
(asm)["System.ICloneable"] = (function () { var ct;
 ct = null;
return function () { var c;
var initialized;
 c = ct;
if (c){
return c;
}
initialized = false;;
function ICloneable() { 
 (ICloneable.init)();
this.constructor = ICloneable; };
ICloneable.init = function () { 
 if (initialized){
return;
}
initialized = true;
ICloneable.Interfaces = [  ];
ICloneable.IsInst = function (t) { return t.constructor.Interfaces.indexOf(ICloneable) != -1; };
ICloneable.IsValueType = false;
ICloneable.IsPrimitive = false;
ICloneable.IsNullable = false;
ICloneable.prototype.vtable = { 
'x600004f': asm0.x600004f 
}; };
ICloneable.prototype = { 
 
};;
c = ICloneable;
ct = c;
return c; }; })();
(asm)["System.Int16"] = (function () { var ct;
 ct = null;
return function () { var c;
var initialized;
 c = ct;
if (c){
return c;
}
initialized = false;;
function Int16() { 
 (Int16.init)();
this.constructor = Int16; };
Int16.init = function () { 
 if (initialized){
return;
}
initialized = true;
Int16.Interfaces = [  ];
Int16.IsInst = function (t) { return t instanceof Int16; };
Int16.IsValueType = true;
Int16.IsPrimitive = true;
Int16.IsNullable = false;
Int16.prototype.vtable = { 
'x6000003': asm0.x6000050,
'x6000004': asm0.x6000004,
'x6000007': asm0.x6000007 
}; };
Int16.prototype = { 
 
};;
c = Int16;
ct = c;
return c; }; })();
(asm)["System.Int32"] = (function () { var ct;
 ct = null;
return function () { var c;
var initialized;
 c = ct;
if (c){
return c;
}
initialized = false;;
function Int32() { 
 (Int32.init)();
this.constructor = Int32; };
Int32.init = function () { 
 if (initialized){
return;
}
initialized = true;
Int32.Interfaces = [  ];
Int32.IsInst = function (t) { return t instanceof Int32; };
Int32.IsValueType = true;
Int32.IsPrimitive = true;
Int32.IsNullable = false;
Int32.prototype.vtable = { 
'x6000003': asm0.x6000051,
'x6000004': asm0.x6000004,
'x6000007': asm0.x6000007 
}; };
Int32.prototype = { 
 
};;
c = Int32;
ct = c;
return c; }; })();
(asm)["System.InternalFormatting"] = (function () { var ct;
 ct = null;
return function () { var c;
var initialized;
 c = ct;
if (c){
return c;
}
initialized = false;;
function InternalFormatting() { 
 (InternalFormatting.init)();
this.constructor = InternalFormatting; };
InternalFormatting.init = function () { 
 if (initialized){
return;
}
initialized = true;
InternalFormatting.Interfaces = [  ];
InternalFormatting.IsInst = function (t) { return t instanceof InternalFormatting; };
InternalFormatting.IsValueType = false;
InternalFormatting.IsPrimitive = false;
InternalFormatting.IsNullable = false;
InternalFormatting.prototype.vtable = { 
'x6000003': asm0.x6000003,
'x6000004': asm0.x6000004,
'x6000007': asm0.x6000007 
}; };
InternalFormatting.prototype = new (((asm0)["System.Object"])())();;
c = InternalFormatting;
ct = c;
return c; }; })();
(asm)["System.Int64"] = (function () { var ct;
 ct = null;
return function () { var c;
var initialized;
 c = ct;
if (c){
return c;
}
initialized = false;;
function Int64() { 
 (Int64.init)();
this.constructor = Int64; };
Int64.init = function () { 
 if (initialized){
return;
}
initialized = true;
Int64.Interfaces = [  ];
Int64.IsInst = function (t) { return t instanceof Int64; };
Int64.IsValueType = true;
Int64.IsPrimitive = true;
Int64.IsNullable = false;
Int64.prototype.vtable = { 
'x6000003': asm0.x6000053,
'x6000004': asm0.x6000004,
'x6000007': asm0.x6000007 
}; };
Int64.prototype = { 
 
};;
c = Int64;
ct = c;
return c; }; })();
(asm)["System.IntPtr"] = (function () { var ct;
 ct = null;
return function () { var c;
var initialized;
 c = ct;
if (c){
return c;
}
initialized = false;;
function IntPtr() { 
 (IntPtr.init)();
this.constructor = IntPtr; };
IntPtr.init = function () { 
 if (initialized){
return;
}
initialized = true;
IntPtr.Interfaces = [  ];
IntPtr.IsInst = function (t) { return t instanceof IntPtr; };
IntPtr.IsValueType = true;
IntPtr.IsPrimitive = true;
IntPtr.IsNullable = false;
IntPtr.prototype.vtable = { 
'x6000003': asm0.x6000054,
'x6000004': asm0.x6000004,
'x6000007': asm0.x6000007 
}; };
IntPtr.prototype = { 
 
};;
c = IntPtr;
ct = c;
return c; }; })();
(asm)["System.Math"] = (function () { var ct;
 ct = null;
return function () { var c;
var initialized;
 c = ct;
if (c){
return c;
}
initialized = false;;
function Math() { 
 (Math.init)();
this.constructor = Math; };
Math.init = function () { 
 if (initialized){
return;
}
initialized = true;
Math.PI = 0;
Math.Interfaces = [  ];
Math.IsInst = function (t) { return t instanceof Math; };
Math.IsValueType = false;
Math.IsPrimitive = false;
Math.IsNullable = false;
Math.prototype.vtable = { 
'x6000003': asm0.x6000003,
'x6000004': asm0.x6000004,
'x6000007': asm0.x6000007 
}; };
Math.prototype = new (((asm0)["System.Object"])())();;
c = Math;
ct = c;
return c; }; })();
(asm)["System.MulticastDelegate"] = (function () { var ct;
 ct = null;
return function () { var c;
var initialized;
 c = ct;
if (c){
return c;
}
initialized = false;;
function MulticastDelegate() { 
 (MulticastDelegate.init)();
this.constructor = MulticastDelegate; };
MulticastDelegate.init = function () { 
 if (initialized){
return;
}
initialized = true;
MulticastDelegate.Interfaces = [  ];
MulticastDelegate.IsInst = function (t) { return t instanceof MulticastDelegate; };
MulticastDelegate.IsValueType = false;
MulticastDelegate.IsPrimitive = false;
MulticastDelegate.IsNullable = false;
MulticastDelegate.prototype.vtable = { 
'x6000003': asm0.x6000003,
'x6000004': asm0.x6000004,
'x6000007': asm0.x6000007 
}; };
MulticastDelegate.prototype = new (((asm0)["System.Delegate"])())();;
c = MulticastDelegate;
ct = c;
return c; }; })();
(asm)["System.ParamArrayAttribute"] = (function () { var ct;
 ct = null;
return function () { var c;
var initialized;
 c = ct;
if (c){
return c;
}
initialized = false;;
function ParamArrayAttribute() { 
 (ParamArrayAttribute.init)();
this.constructor = ParamArrayAttribute; };
ParamArrayAttribute.init = function () { 
 if (initialized){
return;
}
initialized = true;
ParamArrayAttribute.Interfaces = [  ];
ParamArrayAttribute.IsInst = function (t) { return t instanceof ParamArrayAttribute; };
ParamArrayAttribute.IsValueType = false;
ParamArrayAttribute.IsPrimitive = false;
ParamArrayAttribute.IsNullable = false;
ParamArrayAttribute.prototype.vtable = { 
'x6000003': asm0.x6000003,
'x6000004': asm0.x6000004,
'x6000007': asm0.x6000007 
}; };
ParamArrayAttribute.prototype = new (((asm0)["System.Attribute"])())();;
c = ParamArrayAttribute;
ct = c;
return c; }; })();
(asm)["System.RuntimeFieldHandle"] = (function () { var ct;
 ct = null;
return function () { var c;
var initialized;
 c = ct;
if (c){
return c;
}
initialized = false;;
function RuntimeFieldHandle() { 
 (RuntimeFieldHandle.init)();
this.constructor = RuntimeFieldHandle; };
RuntimeFieldHandle.init = function () { 
 if (initialized){
return;
}
initialized = true;
RuntimeFieldHandle.Interfaces = [  ];
RuntimeFieldHandle.IsInst = function (t) { return t instanceof RuntimeFieldHandle; };
RuntimeFieldHandle.IsValueType = true;
RuntimeFieldHandle.IsPrimitive = false;
RuntimeFieldHandle.IsNullable = false;
RuntimeFieldHandle.prototype.vtable = { 
'x6000003': asm0.x6000003,
'x6000004': asm0.x6000004,
'x6000007': asm0.x6000007 
}; };
RuntimeFieldHandle.prototype = { 
 
};;
c = RuntimeFieldHandle;
ct = c;
return c; }; })();
(asm)["System.RuntimeTypeHandle"] = (function () { var ct;
 ct = null;
return function () { var c;
var initialized;
 c = ct;
if (c){
return c;
}
initialized = false;;
function RuntimeTypeHandle() { 
 (RuntimeTypeHandle.init)();
this.constructor = RuntimeTypeHandle; };
RuntimeTypeHandle.init = function () { 
 if (initialized){
return;
}
initialized = true;
RuntimeTypeHandle.Interfaces = [  ];
RuntimeTypeHandle.IsInst = function (t) { return t instanceof RuntimeTypeHandle; };
RuntimeTypeHandle.IsValueType = true;
RuntimeTypeHandle.IsPrimitive = false;
RuntimeTypeHandle.IsNullable = false;
RuntimeTypeHandle.prototype.vtable = { 
'x6000003': asm0.x6000003,
'x6000004': asm0.x6000004,
'x6000007': asm0.x6000007 
}; };
RuntimeTypeHandle.prototype = { 
 
};;
c = RuntimeTypeHandle;
ct = c;
return c; }; })();
(asm)["System.SByte"] = (function () { var ct;
 ct = null;
return function () { var c;
var initialized;
 c = ct;
if (c){
return c;
}
initialized = false;;
function SByte() { 
 (SByte.init)();
this.constructor = SByte; };
SByte.init = function () { 
 if (initialized){
return;
}
initialized = true;
SByte.Interfaces = [  ];
SByte.IsInst = function (t) { return t instanceof SByte; };
SByte.IsValueType = true;
SByte.IsPrimitive = true;
SByte.IsNullable = false;
SByte.prototype.vtable = { 
'x6000003': asm0.x600005e,
'x6000004': asm0.x6000004,
'x6000007': asm0.x6000007 
}; };
SByte.prototype = { 
 
};;
c = SByte;
ct = c;
return c; }; })();
(asm)["System.Single"] = (function () { var ct;
 ct = null;
return function () { var c;
var initialized;
 c = ct;
if (c){
return c;
}
initialized = false;;
function Single() { 
 (Single.init)();
this.constructor = Single; };
Single.init = function () { 
 if (initialized){
return;
}
initialized = true;
Single.Interfaces = [  ];
Single.IsInst = function (t) { return t instanceof Single; };
Single.IsValueType = true;
Single.IsPrimitive = true;
Single.IsNullable = false;
Single.prototype.vtable = { 
'x6000003': asm0.x600005f,
'x6000004': asm0.x6000004,
'x6000007': asm0.x6000007 
}; };
Single.prototype = { 
 
};;
c = Single;
ct = c;
return c; }; })();
(asm)["System.Type"] = (function () { var ct;
 ct = null;
return function () { var c;
var initialized;
 c = ct;
if (c){
return c;
}
initialized = false;;
function Type() { 
 (Type.init)();
this.constructor = Type; };
Type.init = function () { 
 if (initialized){
return;
}
initialized = true;
Type.Interfaces = [  ];
Type.IsInst = function (t) { return t instanceof Type; };
Type.IsValueType = false;
Type.IsPrimitive = false;
Type.IsNullable = false;
Type.prototype.vtable = { 
'x6000003': asm0.x6000003,
'x6000004': asm0.x6000004,
'x6000007': asm0.x6000007 
}; };
Type.prototype = new (((asm0)["System.Object"])())();;
c = Type;
ct = c;
return c; }; })();
(asm)["System.UInt16"] = (function () { var ct;
 ct = null;
return function () { var c;
var initialized;
 c = ct;
if (c){
return c;
}
initialized = false;;
function UInt16() { 
 (UInt16.init)();
this.constructor = UInt16; };
UInt16.init = function () { 
 if (initialized){
return;
}
initialized = true;
UInt16.Interfaces = [  ];
UInt16.IsInst = function (t) { return t instanceof UInt16; };
UInt16.IsValueType = true;
UInt16.IsPrimitive = true;
UInt16.IsNullable = false;
UInt16.prototype.vtable = { 
'x6000003': asm0.x6000061,
'x6000004': asm0.x6000004,
'x6000007': asm0.x6000007 
}; };
UInt16.prototype = { 
 
};;
c = UInt16;
ct = c;
return c; }; })();
(asm)["System.UInt32"] = (function () { var ct;
 ct = null;
return function () { var c;
var initialized;
 c = ct;
if (c){
return c;
}
initialized = false;;
function UInt32() { 
 (UInt32.init)();
this.constructor = UInt32; };
UInt32.init = function () { 
 if (initialized){
return;
}
initialized = true;
UInt32.Interfaces = [  ];
UInt32.IsInst = function (t) { return t instanceof UInt32; };
UInt32.IsValueType = true;
UInt32.IsPrimitive = true;
UInt32.IsNullable = false;
UInt32.prototype.vtable = { 
'x6000003': asm0.x6000062,
'x6000004': asm0.x6000004,
'x6000007': asm0.x6000007 
}; };
UInt32.prototype = { 
 
};;
c = UInt32;
ct = c;
return c; }; })();
(asm)["System.UInt64"] = (function () { var ct;
 ct = null;
return function () { var c;
var initialized;
 c = ct;
if (c){
return c;
}
initialized = false;;
function UInt64() { 
 (UInt64.init)();
this.constructor = UInt64; };
UInt64.init = function () { 
 if (initialized){
return;
}
initialized = true;
UInt64.Interfaces = [  ];
UInt64.IsInst = function (t) { return t instanceof UInt64; };
UInt64.IsValueType = true;
UInt64.IsPrimitive = true;
UInt64.IsNullable = false;
UInt64.prototype.vtable = { 
'x6000003': asm0.x6000063,
'x6000004': asm0.x6000004,
'x6000007': asm0.x6000007 
}; };
UInt64.prototype = { 
 
};;
c = UInt64;
ct = c;
return c; }; })();
(asm)["System.UIntPtr"] = (function () { var ct;
 ct = null;
return function () { var c;
var initialized;
 c = ct;
if (c){
return c;
}
initialized = false;;
function UIntPtr() { 
 (UIntPtr.init)();
this.constructor = UIntPtr; };
UIntPtr.init = function () { 
 if (initialized){
return;
}
initialized = true;
UIntPtr.Interfaces = [  ];
UIntPtr.IsInst = function (t) { return t instanceof UIntPtr; };
UIntPtr.IsValueType = true;
UIntPtr.IsPrimitive = true;
UIntPtr.IsNullable = false;
UIntPtr.prototype.vtable = { 
'x6000003': asm0.x6000064,
'x6000004': asm0.x6000004,
'x6000007': asm0.x6000007 
}; };
UIntPtr.prototype = { 
 
};;
c = UIntPtr;
ct = c;
return c; }; })();
(asm)["System.Void"] = (function () { var ct;
 ct = null;
return function () { var c;
var initialized;
 c = ct;
if (c){
return c;
}
initialized = false;;
function Void() { 
 (Void.init)();
this.constructor = Void; };
Void.init = function () { 
 if (initialized){
return;
}
initialized = true;
Void.Interfaces = [  ];
Void.IsInst = function (t) { return t instanceof Void; };
Void.IsValueType = true;
Void.IsPrimitive = false;
Void.IsNullable = false;
Void.prototype.vtable = { 
'x6000003': asm0.x6000003,
'x6000004': asm0.x6000004,
'x6000007': asm0.x6000007 
}; };
Void.prototype = { 
 
};;
c = Void;
ct = c;
return c; }; })();
(asm)["System.NotSupportedException"] = (function () { var ct;
 ct = null;
return function () { var c;
var initialized;
 c = ct;
if (c){
return c;
}
initialized = false;;
function NotSupportedException() { 
 (NotSupportedException.init)();
this.constructor = NotSupportedException; };
NotSupportedException.init = function () { 
 if (initialized){
return;
}
initialized = true;
NotSupportedException.Interfaces = [  ];
NotSupportedException.IsInst = function (t) { return t instanceof NotSupportedException; };
NotSupportedException.IsValueType = false;
NotSupportedException.IsPrimitive = false;
NotSupportedException.IsNullable = false;
NotSupportedException.prototype.vtable = { 
'x6000003': asm0.x6000003,
'x6000004': asm0.x6000004,
'x6000007': asm0.x6000007 
}; };
NotSupportedException.prototype = new (((asm0)["System.Exception"])())();;
c = NotSupportedException;
ct = c;
return c; }; })();
(asm)["System.NotImplementedException"] = (function () { var ct;
 ct = null;
return function () { var c;
var initialized;
 c = ct;
if (c){
return c;
}
initialized = false;;
function NotImplementedException() { 
 (NotImplementedException.init)();
this.constructor = NotImplementedException; };
NotImplementedException.init = function () { 
 if (initialized){
return;
}
initialized = true;
NotImplementedException.Interfaces = [  ];
NotImplementedException.IsInst = function (t) { return t instanceof NotImplementedException; };
NotImplementedException.IsValueType = false;
NotImplementedException.IsPrimitive = false;
NotImplementedException.IsNullable = false;
NotImplementedException.prototype.vtable = { 
'x6000003': asm0.x6000003,
'x6000004': asm0.x6000004,
'x6000007': asm0.x6000007 
}; };
NotImplementedException.prototype = new (((asm0)["System.Exception"])())();;
c = NotImplementedException;
ct = c;
return c; }; })();
(asm)["System.Environment"] = (function () { var ct;
 ct = null;
return function () { var c;
var initialized;
 c = ct;
if (c){
return c;
}
initialized = false;;
function Environment() { 
 (Environment.init)();
this.constructor = Environment; };
Environment.init = function () { 
 if (initialized){
return;
}
initialized = true;
Environment.Interfaces = [  ];
Environment.IsInst = function (t) { return t instanceof Environment; };
Environment.IsValueType = false;
Environment.IsPrimitive = false;
Environment.IsNullable = false;
Environment.prototype.vtable = { 
'x6000003': asm0.x6000003,
'x6000004': asm0.x6000004,
'x6000007': asm0.x6000007 
}; };
Environment.prototype = new (((asm0)["System.Object"])())();;
c = Environment;
ct = c;
return c; }; })();
(asm)["System.Func`2"] = (function () { var ct;
 ct = { 
 
};
return function (T,TResult) { var c;
var initialized;
 c = tree_get([ T,TResult ],ct);
if (c){
return c;
}
initialized = false;;
function Func_2() { 
 (Func_2.init)();
this.constructor = Func_2; };
Func_2.init = function () { 
 if (initialized){
return;
}
initialized = true;
Func_2.Interfaces = [  ];
Func_2.IsInst = function (t) { return t instanceof Func_2; };
Func_2.IsValueType = false;
Func_2.IsPrimitive = false;
Func_2.IsNullable = false;
Func_2.GenericArguments = [ T,TResult ];
Func_2.prototype.vtable = { 
'x600006a': asm0.x600006a,
'x6000003': asm0.x6000003,
'x6000004': asm0.x6000004,
'x6000007': asm0.x6000007 
}; };
Func_2.prototype = { 
 
};;
c = Func_2;
tree_set([ T,TResult ],ct,c);
return c; }; })();
(asm)["System.Diagnostics.Debugger"] = (function () { var ct;
 ct = null;
return function () { var c;
var initialized;
 c = ct;
if (c){
return c;
}
initialized = false;;
function Debugger() { 
 (Debugger.init)();
this.constructor = Debugger; };
Debugger.init = function () { 
 if (initialized){
return;
}
initialized = true;
Debugger.Interfaces = [  ];
Debugger.IsInst = function (t) { return t instanceof Debugger; };
Debugger.IsValueType = false;
Debugger.IsPrimitive = false;
Debugger.IsNullable = false;
Debugger.prototype.vtable = { 
'x6000003': asm0.x6000003,
'x6000004': asm0.x6000004,
'x6000007': asm0.x6000007 
}; };
Debugger.prototype = new (((asm0)["System.Object"])())();;
c = Debugger;
ct = c;
return c; }; })();
(asm)["System.Collections.IEnumerator"] = (function () { var ct;
 ct = null;
return function () { var c;
var initialized;
 c = ct;
if (c){
return c;
}
initialized = false;;
function IEnumerator() { 
 (IEnumerator.init)();
this.constructor = IEnumerator; };
IEnumerator.init = function () { 
 if (initialized){
return;
}
initialized = true;
IEnumerator.Interfaces = [ ((asm0)["System.IDisposable"])() ];
IEnumerator.IsInst = function (t) { return t.constructor.Interfaces.indexOf(IEnumerator) != -1; };
IEnumerator.IsValueType = false;
IEnumerator.IsPrimitive = false;
IEnumerator.IsNullable = false;
IEnumerator.prototype.vtable = { 
'x6000077': asm0.x6000077,
'x6000078': asm0.x6000078,
'x6000079': asm0.x6000079 
}; };
IEnumerator.prototype = { 
 
};;
c = IEnumerator;
ct = c;
return c; }; })();
(asm)["System.Collections.Generic.IEnumerator`1"] = (function () { var ct;
 ct = { 
 
};
return function (T) { var c;
var initialized;
 c = tree_get([ T ],ct);
if (c){
return c;
}
initialized = false;;
function IEnumerator_1() { 
 (IEnumerator_1.init)();
this.constructor = IEnumerator_1; };
IEnumerator_1.init = function () { 
 if (initialized){
return;
}
initialized = true;
IEnumerator_1.Interfaces = [ ((asm0)["System.Collections.IEnumerator"])(),((asm0)["System.IDisposable"])() ];
IEnumerator_1.IsInst = function (t) { return t.constructor.Interfaces.indexOf(IEnumerator_1) != -1; };
IEnumerator_1.IsValueType = false;
IEnumerator_1.IsPrimitive = false;
IEnumerator_1.IsNullable = false;
IEnumerator_1.GenericArguments = [ T ];
IEnumerator_1.prototype.vtable = { 
'x600007a': asm0.x600007a,
'x600007b': asm0.x600007b 
}; };
IEnumerator_1.prototype = { 
 
};;
c = IEnumerator_1;
tree_set([ T ],ct,c);
return c; }; })();
(asm)["System.Runtime.InteropServices.OutAttribute"] = (function () { var ct;
 ct = null;
return function () { var c;
var initialized;
 c = ct;
if (c){
return c;
}
initialized = false;;
function OutAttribute() { 
 (OutAttribute.init)();
this.constructor = OutAttribute; };
OutAttribute.init = function () { 
 if (initialized){
return;
}
initialized = true;
OutAttribute.Interfaces = [  ];
OutAttribute.IsInst = function (t) { return t instanceof OutAttribute; };
OutAttribute.IsValueType = false;
OutAttribute.IsPrimitive = false;
OutAttribute.IsNullable = false;
OutAttribute.prototype.vtable = { 
'x6000003': asm0.x6000003,
'x6000004': asm0.x6000004,
'x6000007': asm0.x6000007 
}; };
OutAttribute.prototype = new (((asm0)["System.Attribute"])())();;
c = OutAttribute;
ct = c;
return c; }; })();
(asm)["System.Runtime.CompilerServices.IndexerNameAttribute"] = (function () { var ct;
 ct = null;
return function () { var c;
var initialized;
 c = ct;
if (c){
return c;
}
initialized = false;;
function IndexerNameAttribute() { 
 (IndexerNameAttribute.init)();
this.constructor = IndexerNameAttribute; };
IndexerNameAttribute.init = function () { 
 if (initialized){
return;
}
initialized = true;
IndexerNameAttribute.Interfaces = [  ];
IndexerNameAttribute.IsInst = function (t) { return t instanceof IndexerNameAttribute; };
IndexerNameAttribute.IsValueType = false;
IndexerNameAttribute.IsPrimitive = false;
IndexerNameAttribute.IsNullable = false;
IndexerNameAttribute.prototype.vtable = { 
'x6000003': asm0.x6000003,
'x6000004': asm0.x6000004,
'x6000007': asm0.x6000007 
}; };
IndexerNameAttribute.prototype = new (((asm0)["System.Attribute"])())();;
c = IndexerNameAttribute;
ct = c;
return c; }; })();
(asm)["System.Runtime.CompilerServices.ExtensionAttribute"] = (function () { var ct;
 ct = null;
return function () { var c;
var initialized;
 c = ct;
if (c){
return c;
}
initialized = false;;
function ExtensionAttribute() { 
 (ExtensionAttribute.init)();
this.constructor = ExtensionAttribute; };
ExtensionAttribute.init = function () { 
 if (initialized){
return;
}
initialized = true;
ExtensionAttribute.Interfaces = [  ];
ExtensionAttribute.IsInst = function (t) { return t instanceof ExtensionAttribute; };
ExtensionAttribute.IsValueType = false;
ExtensionAttribute.IsPrimitive = false;
ExtensionAttribute.IsNullable = false;
ExtensionAttribute.prototype.vtable = { 
'x6000003': asm0.x6000003,
'x6000004': asm0.x6000004,
'x6000007': asm0.x6000007 
}; };
ExtensionAttribute.prototype = new (((asm0)["System.Attribute"])())();;
c = ExtensionAttribute;
ct = c;
return c; }; })();
(asm)["System.Array`1+<GetEnumerator>d__0"] = (function () { var ct;
 ct = { 
 
};
return function (T) { var c;
var initialized;
 c = tree_get([ T ],ct);
if (c){
return c;
}
initialized = false;;
function _GetEnumerator_d__0() { 
 (_GetEnumerator_d__0.init)();
this.constructor = _GetEnumerator_d__0; };
_GetEnumerator_d__0.init = function () { 
 if (initialized){
return;
}
initialized = true;
_GetEnumerator_d__0.Interfaces = [ ((asm0)["System.Collections.Generic.IEnumerator`1"])(T),((asm0)["System.Collections.IEnumerator"])(),((asm0)["System.IDisposable"])() ];
_GetEnumerator_d__0.IsInst = function (t) { return t instanceof _GetEnumerator_d__0; };
_GetEnumerator_d__0.IsValueType = false;
_GetEnumerator_d__0.IsPrimitive = false;
_GetEnumerator_d__0.IsNullable = false;
_GetEnumerator_d__0.GenericArguments = [ T ];
(_GetEnumerator_d__0.prototype)["System_GetEnumerator_d__0<>2__current"] = (T.IsValueType) ? ((T.IsPrimitive) ? (0) : (new T())) : (null);
(_GetEnumerator_d__0.prototype)["System_GetEnumerator_d__0<>1__state"] = 0;
(_GetEnumerator_d__0.prototype)["<>4__this"] = null;
(_GetEnumerator_d__0.prototype)["<i>5__1"] = 0;
_GetEnumerator_d__0.prototype.vtable = { 
'x6000080': asm0.x6000080,
'x6000081': asm0.x6000081,
'x6000082': asm0.x6000082,
'x6000083': asm0.x6000083,
'x6000084': asm0.x6000084,
'x6000003': asm0.x6000003,
'x6000004': asm0.x6000004,
'x6000007': asm0.x6000007 
};
(_GetEnumerator_d__0.prototype)[((asm0)["System.Collections.Generic.IEnumerator`1"])(T)] = { 
'x600007a': asm0.x6000081,
'x600007b': asm0.x6000080 
};
(_GetEnumerator_d__0.prototype)[((asm0)["System.Collections.IEnumerator"])()] = { 
'x6000077': asm0.x6000084,
'x6000078': asm0.x6000080,
'x6000079': asm0.x6000082 
};
(_GetEnumerator_d__0.prototype)[((asm0)["System.IDisposable"])()] = { 
'x600004e': asm0.x6000083 
}; };
_GetEnumerator_d__0.prototype = new (((asm0)["System.Object"])())();;
c = _GetEnumerator_d__0;
tree_set([ T ],ct,c);
return c; }; })(); })(asm0 || (asm0 = {}));
var asm1; (function (asm) { 
 
function clone_value(v) {
    if (v == null) return v;
    if (typeof v === 'number') return v;
    if (typeof v === 'function') return v;
    if (!v.constructor.IsValueType) return v;
    var result = new v.constructor();
//    var result = {};
    for (var p in v) {
        if (v.hasOwnProperty(p))
            result[p] = clone_value(v[p]);
    }
    return result;
}

function box(v, type) {
    if (v === null)
        return v;
    
    if (type.IsNullable) {
        if (v.has_value)
            return box(v.value, type.GenericArguments[0]);
        else
            return null;
    }

    if (!type.IsValueType)
        return v;
    
    return {
        'boxed': v,
        'vtable': type.prototype.vtable
    };
}

function unbox(o, type) {
    return o.boxed;
}

function unbox_any(o, type) {
    if (type.IsNullable) {
        var result = new type();
        if (o !== null) {
            result.value = o.boxed;
            result.has_value = true;
        }
        return result;
    }
    
    if (type.IsValueType)
        return o.boxed;
    else
        return o;
}

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

function new_string(str) {
    var r = new (asm0['System.String']())();
    r.jsstr = str;
    return r;
}

function new_array(type, length) {
    var r = new (asm0['System.Array`1'](type))();
    r.type = type;
    r.jsarr = new Array(length);
    return r;
}
;
asm.x6000002 = function (arg0) { 
 asm.x6000002 = asm.x6000002_;
return (asm.x6000002.apply)(this,arguments); };
asm.x6000002_ = function _ctor(arg0) { var st_00;
 /* IL_00: ldarg.0 */
st_00 = arg0;
/* IL_01: call Void .ctor()*/
/* IL_06: ret */
return ; };
asm.x600000b = function (arg0) { 
 asm.x600000b = asm.x600000b_;
return (asm.x600000b.apply)(this,arguments); };
asm.x600000b_ = function _ctor(arg0) { var st_00;
 /* IL_00: ldarg.0 */
st_00 = arg0;
/* IL_01: call Void .ctor()*/
/* IL_06: ret */
return ; };
asm.x600000c = function () { 
 ((asm1.A)().init)();
(((asm0)["System.Nullable`1"])((asm1.A)()).init)();
asm.x600000c = asm.x600000c_;
return (asm.x600000c.apply)(this,arguments); };
asm.x600000c_ = function Main() { var t0;
var t1;
var loc0;
var loc1;
var loc2;
var loc3;
var loc4;
var loc5;
var loc6;
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
 t0 = (asm1.A)();
t1 = ((asm0)["System.Nullable`1"])((asm1.A)());
loc0 = new ((asm1.A)())();
loc1 = new ((asm1.A)())();
loc2 = new (((asm0)["System.Nullable`1"])((asm1.A)()))();
loc3 = new (((asm0)["System.Nullable`1"])((asm1.A)()))();
loc4 = new ((asm1.A)())();
loc5 = new (((asm0)["System.Nullable`1"])((asm1.A)()))();
loc6 = new ((asm1.A)())();
/* IL_00: ldloca.s 2*/
st_00 = { 
'w': function () { 
 loc2 = (arguments)[0]; },
'r': function () { 
 return loc2; } 
};
/* IL_03: initobj System.Nullable`1[A]*/
(t1.IsValueType) ? ((st_00.w)(new t1())) : (null);
/* IL_08: ldloc.2 */
st_01 = loc2;
/* IL_09: call Void Print(System.Nullable`1[A])*/
(asm1.x600000e)(clone_value(st_01));
/* IL_0E: ldloca.s 3*/
st_02 = { 
'w': function () { 
 loc3 = (arguments)[0]; },
'r': function () { 
 return loc3; } 
};
/* IL_11: initobj System.Nullable`1[A]*/
(t1.IsValueType) ? ((st_02.w)(new t1())) : (null);
/* IL_16: ldloc.3 */
st_03 = loc3;
/* IL_17: call Void Print(System.Nullable`1[A])*/
(asm1.x600000e)(clone_value(st_03));
/* IL_1C: ldloca.s 0*/
st_04 = { 
'w': function () { 
 loc0 = (arguments)[0]; },
'r': function () { 
 return loc0; } 
};
/* IL_1F: initobj A*/
(t0.IsValueType) ? ((st_04.w)(new t0())) : (null);
/* IL_24: ldloca.s 0*/
st_05 = { 
'w': function () { 
 loc0 = (arguments)[0]; },
'r': function () { 
 return loc0; } 
};
/* IL_26: ldc.i4.s 33*/
st_06 = 33;
/* IL_28: stfld Int32 X*/
(st_05.r)().X = st_06;
/* IL_2D: ldloc.0 */
st_07 = loc0;
/* IL_2E: newobj Void .ctor(A)*/
st_08 = (function () { var result;
 result = new ((arguments)[0])();
(asm0.x600001b)({ 
'w': function () { 
 result = (arguments)[0]; },
'r': function () { 
 return result; } 
},clone_value(st_07));
return result; })(t1);
/* IL_33: call Void Print(System.Nullable`1[A])*/
(asm1.x600000e)(clone_value(st_08));
/* IL_38: ldloca.s 4*/
st_09 = { 
'w': function () { 
 loc4 = (arguments)[0]; },
'r': function () { 
 return loc4; } 
};
/* IL_3B: initobj A*/
(t0.IsValueType) ? ((st_09.w)(new t0())) : (null);
/* IL_40: ldloc.s 4*/
st_0A = loc4;
/* IL_42: newobj Void .ctor(A)*/
st_0B = (function () { var result;
 result = new ((arguments)[0])();
(asm0.x600001b)({ 
'w': function () { 
 result = (arguments)[0]; },
'r': function () { 
 return result; } 
},clone_value(st_0A));
return result; })(t1);
/* IL_47: call Void Print(System.Nullable`1[A])*/
(asm1.x600000e)(clone_value(st_0B));
/* IL_4C: ldnull */
st_0C = null;
/* IL_4D: call Void PrintObject(System.Object)*/
(asm1.x600000d)(st_0C);
/* IL_52: ldloca.s 5*/
st_0D = { 
'w': function () { 
 loc5 = (arguments)[0]; },
'r': function () { 
 return loc5; } 
};
/* IL_55: initobj System.Nullable`1[A]*/
(t1.IsValueType) ? ((st_0D.w)(new t1())) : (null);
/* IL_5A: ldloc.s 5*/
st_0E = loc5;
/* IL_5C: box System.Nullable`1[A]*/
st_0F = (st_0E.has_value) ? ({ 
'boxed': clone_value(st_0E.value),
'vtable': t0.prototype.vtable 
}) : (null);
/* IL_61: call Void PrintObject(System.Object)*/
(asm1.x600000d)(st_0F);
/* IL_66: ldloca.s 1*/
st_10 = { 
'w': function () { 
 loc1 = (arguments)[0]; },
'r': function () { 
 return loc1; } 
};
/* IL_69: initobj A*/
(t0.IsValueType) ? ((st_10.w)(new t0())) : (null);
/* IL_6E: ldloca.s 1*/
st_11 = { 
'w': function () { 
 loc1 = (arguments)[0]; },
'r': function () { 
 return loc1; } 
};
/* IL_70: ldc.i4.s 33*/
st_12 = 33;
/* IL_72: stfld Int32 X*/
(st_11.r)().X = st_12;
/* IL_77: ldloc.1 */
st_13 = loc1;
/* IL_78: box A*/
st_14 = { 
'boxed': clone_value(st_13),
'vtable': t0.prototype.vtable 
};
/* IL_7D: call Void PrintObject(System.Object)*/
(asm1.x600000d)(st_14);
/* IL_82: ldloca.s 6*/
st_15 = { 
'w': function () { 
 loc6 = (arguments)[0]; },
'r': function () { 
 return loc6; } 
};
/* IL_85: initobj A*/
(t0.IsValueType) ? ((st_15.w)(new t0())) : (null);
/* IL_8A: ldloc.s 6*/
st_16 = loc6;
/* IL_8C: box A*/
st_17 = { 
'boxed': clone_value(st_16),
'vtable': t0.prototype.vtable 
};
/* IL_91: call Void PrintObject(System.Object)*/
(asm1.x600000d)(st_17);
/* IL_96: ret */
return ; };
asm.x600000d = function (arg0) { 
 asm.x600000d = asm.x600000d_;
return (asm.x600000d.apply)(this,arguments); };
asm.x600000d_ = function PrintObject(arg0) { var st_00;
var st_01;
 /* IL_00: ldarg.0 */
st_00 = arg0;
/* IL_01: unbox.any System.Nullable`1[A]*/
st_01 = unbox_any(st_00,((asm0)["System.Nullable`1"])((asm1.A)()));
/* IL_06: call Void Print(System.Nullable`1[A])*/
(asm1.x600000e)(clone_value(st_01));
/* IL_0B: ret */
return ; };
asm.x600000e = function (arg0) { 
 (((asm0)["System.Int32"])().init)();
asm.x600000e = asm.x600000e_;
return (asm.x600000e.apply)(this,arguments); };
asm.x600000e_ = function Print(arg0) { var t0;
var st_00;
var st_01;
var st_02;
var st_03;
var st_04;
var st_05;
var st_06;
var st_07;
var st_08;
var __braille_pos_0__;
 t0 = ((asm0)["System.Int32"])();
__braille_pos_0__ = 0x0;
while (__braille_pos_0__ >= 0){
switch (__braille_pos_0__) {
case 0x0:
/* IL_00: ldarga.s 0*/
st_00 = { 
'w': function () { 
 arg0 = (arguments)[0]; },
'r': function () { 
 return arg0; } 
};
/* IL_02: call Boolean get_HasValue()*/
st_01 = (asm0.x600001c)(st_00);
/* IL_07: brtrue.s IL_10*/
if (st_01){
__braille_pos_0__ = 0x10;continue;
}
/* IL_09: ldstr false*/
st_02 = new_string("false");
/* IL_0E: br.s IL_15*/
__braille_pos_0__ = 0x15;
continue;
case 0x10:
/* IL_10: ldstr true*/
st_02 = new_string("true");
case 0x15:
/* IL_15: call Void Log(System.Object)*/
(braille_test_log)(st_02);
/* IL_1A: ldarga.s 0*/
st_03 = { 
'w': function () { 
 arg0 = (arguments)[0]; },
'r': function () { 
 return arg0; } 
};
/* IL_1C: call Boolean get_HasValue()*/
st_04 = (asm0.x600001c)(st_03);
/* IL_21: brfalse.s IL_39*/
if ((!st_04)){
__braille_pos_0__ = 0x39;continue;
}
/* IL_23: ldarga.s 0*/
st_05 = { 
'w': function () { 
 arg0 = (arguments)[0]; },
'r': function () { 
 return arg0; } 
};
/* IL_25: call A get_Value()*/
st_06 = (asm0.x600001d)(st_05);
/* IL_2A: ldfld Int32 X*/
st_07 = st_06.X;
/* IL_2F: box System.Int32*/
st_08 = { 
'boxed': st_07,
'vtable': t0.prototype.vtable 
};
/* IL_34: call Void Log(System.Object)*/
(braille_test_log)(st_08);
case 0x39:
/* IL_39: ret */
return ;
}
} };
asm.x600000f = function (arg0) { 
 asm.x600000f = asm.x600000f_;
return (asm.x600000f.apply)(this,arguments); };
asm.x600000f_ = function _ctor(arg0) { var st_00;
 /* IL_00: ldarg.0 */
st_00 = arg0;
/* IL_01: call Void .ctor()*/
/* IL_06: ret */
return ; };
asm.TestLog = (function () { var ct;
 ct = null;
return function () { var c;
var initialized;
 c = ct;
if (c){
return c;
}
initialized = false;;
function TestLog() { 
 (TestLog.init)();
this.constructor = TestLog; };
TestLog.init = function () { 
 if (initialized){
return;
}
initialized = true;
TestLog.Interfaces = [  ];
TestLog.IsInst = function (t) { return t instanceof TestLog; };
TestLog.IsValueType = false;
TestLog.IsPrimitive = false;
TestLog.IsNullable = false;
TestLog.prototype.vtable = { 
'x6000003': asm0.x6000003,
'x6000004': asm0.x6000004,
'x6000007': asm0.x6000007 
}; };
TestLog.prototype = new (((asm0)["System.Object"])())();;
c = TestLog;
ct = c;
return c; }; })();
asm.TestHelper = (function () { var ct;
 ct = null;
return function () { var c;
var initialized;
 c = ct;
if (c){
return c;
}
initialized = false;;
function TestHelper() { 
 (TestHelper.init)();
this.constructor = TestHelper; };
TestHelper.init = function () { 
 if (initialized){
return;
}
initialized = true;
TestHelper.Interfaces = [  ];
TestHelper.IsInst = function (t) { return t instanceof TestHelper; };
TestHelper.IsValueType = false;
TestHelper.IsPrimitive = false;
TestHelper.IsNullable = false;
TestHelper.prototype.vtable = { 
'x6000003': asm0.x6000003,
'x6000004': asm0.x6000004,
'x6000007': asm0.x6000007 
}; };
TestHelper.prototype = new (((asm0)["System.Object"])())();;
c = TestHelper;
ct = c;
return c; }; })();
asm.A = (function () { var ct;
 ct = null;
return function () { var c;
var initialized;
 c = ct;
if (c){
return c;
}
initialized = false;;
function A() { 
 (A.init)();
this.constructor = A; };
A.init = function () { 
 if (initialized){
return;
}
initialized = true;
A.Interfaces = [  ];
A.IsInst = function (t) { return t instanceof A; };
A.IsValueType = true;
A.IsPrimitive = false;
A.IsNullable = false;
A.prototype.X = 0;
A.prototype.vtable = { 
'x6000003': asm0.x6000003,
'x6000004': asm0.x6000004,
'x6000007': asm0.x6000007 
}; };
A.prototype = { 
 
};;
c = A;
ct = c;
return c; }; })();
asm.Program = (function () { var ct;
 ct = null;
return function () { var c;
var initialized;
 c = ct;
if (c){
return c;
}
initialized = false;;
function Program() { 
 (Program.init)();
this.constructor = Program; };
Program.init = function () { 
 if (initialized){
return;
}
initialized = true;
Program.Interfaces = [  ];
Program.IsInst = function (t) { return t instanceof Program; };
Program.IsValueType = false;
Program.IsPrimitive = false;
Program.IsNullable = false;
Program.prototype.vtable = { 
'x6000003': asm0.x6000003,
'x6000004': asm0.x6000004,
'x6000007': asm0.x6000007 
}; };
Program.prototype = new (((asm0)["System.Object"])())();;
c = Program;
ct = c;
return c; }; })();
asm.entryPoint = asm.x600000c; })(asm1 || (asm1 = {}));
