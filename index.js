// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).Complex64Array=e()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(o):n(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var e,n,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(n=(-u).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(e),u||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):o.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function f(r){return"string"==typeof r}var l=Math.abs,s=String.prototype.toLowerCase,c=String.prototype.toUpperCase,h=String.prototype.replace,p=/e\+(\d)$/,g=/e-(\d)$/,m=/^(\d+)$/,y=/^(\d+)e/,w=/\.0$/,b=/\.0*e/,v=/(\..*[^0])0*e/;function d(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":l(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=h.call(n,v,"$1e"),n=h.call(n,b,"e"),n=h.call(n,w,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=h.call(n,p,"e+0$1"),n=h.call(n,g,"e-0$1"),r.alternate&&(n=h.call(n,m,"$1."),n=h.call(n,y,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===c.call(r.specifier)?c.call(n):s.call(n)}function E(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function _(r,e,t){var n=e-r.length;return n<0?r:r=t?r+E(n):E(n)+r}var T=String.fromCharCode,x=isNaN,V=Array.isArray;function j(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function S(r){var e,t,n,o,a,l,s,c,h;if(!V(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(l="",s=1,c=0;c<r.length;c++)if(f(n=r[c]))l+=n;else{if(e=void 0!==n.precision,!(n=j(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(s=n.mapping),t=n.flags,h=0;h<t.length;h++)switch(o=t.charAt(h)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[s],10),s+=1,x(n.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[s],10),s+=1,x(n.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[s],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!x(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=x(a)?String(n.arg):T(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=d(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=_(n.arg,n.width,n.padRight)),l+=n.arg||"",s+=1}return l}var A=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function F(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function k(r){var e,t,n,i;for(t=[],i=0,n=A.exec(r);n;)(e=r.slice(i,A.lastIndex-n[0].length)).length&&t.push(e),t.push(F(n)),i=A.lastIndex,n=A.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function L(r){return"string"==typeof r}function O(r){var e,t,n;if(!L(r))throw new TypeError(O("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=k(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return S.apply(null,t)}var R,B=Object.prototype,N=B.toString,I=B.__defineGetter__,M=B.__defineSetter__,P=B.__lookupGetter__,C=B.__lookupSetter__;R=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===N.call(r))throw new TypeError(O("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===N.call(t))throw new TypeError(O("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(P.call(r,e)||C.call(r,e)?(n=r.__proto__,r.__proto__=B,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&I&&I.call(r,e,t.get),a&&M&&M.call(r,e,t.set),r};var Y=R;function $(r,e,t){Y(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function W(r){return"number"==typeof r}var G="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Z(){return G&&"symbol"==typeof Symbol.toStringTag}var U=Object.prototype.toString;var X=Object.prototype.hasOwnProperty;function J(r,e){return null!=r&&X.call(r,e)}var z="function"==typeof Symbol?Symbol:void 0,q="function"==typeof z?z.toStringTag:"";var D=Z()?function(r){var e,t,n;if(null==r)return U.call(r);t=r[q],e=J(r,q);try{r[q]=void 0}catch(e){return U.call(r)}return n=U.call(r),e?r[q]=t:delete r[q],n}:function(r){return U.call(r)},H=Number,K=H.prototype.toString;var Q=Z();function rr(r){return"object"==typeof r&&(r instanceof H||(Q?function(r){try{return K.call(r),!0}catch(r){return!1}}(r):"[object Number]"===D(r)))}function er(r){return W(r)||rr(r)}$(er,"isPrimitive",W),$(er,"isObject",rr);var tr=Number.POSITIVE_INFINITY,nr=H.NEGATIVE_INFINITY,ir=Math.floor;function or(r){return ir(r)===r}function ar(r){return r<tr&&r>nr&&or(r)}function ur(r){return W(r)&&ar(r)}function fr(r){return rr(r)&&ar(r.valueOf())}function lr(r){return ur(r)||fr(r)}function sr(r){return ur(r)&&r>=0}function cr(r){return fr(r)&&r.valueOf()>=0}function hr(r){return sr(r)||cr(r)}$(lr,"isPrimitive",ur),$(lr,"isObject",fr),$(hr,"isPrimitive",sr),$(hr,"isObject",cr);function pr(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&or(r.length)&&r.length>=0&&r.length<=4294967295}function gr(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&or(r.length)&&r.length>=0&&r.length<=9007199254740991}var mr="function"==typeof ArrayBuffer;function yr(r){return mr&&r instanceof ArrayBuffer||"[object ArrayBuffer]"===D(r)}var wr=Array.isArray?Array.isArray:function(r){return"[object Array]"===D(r)};function br(r){return"object"==typeof r&&null!==r&&!wr(r)}function vr(r){return"string"==typeof r}var dr=String.prototype.valueOf;var Er=Z();function _r(r){return"object"==typeof r&&(r instanceof String||(Er?function(r){try{return dr.call(r),!0}catch(r){return!1}}(r):"[object String]"===D(r)))}function Tr(r){return vr(r)||_r(r)}$(Tr,"isPrimitive",vr),$(Tr,"isObject",_r);var xr=/./;function Vr(r){return"boolean"==typeof r}var jr=Boolean,Sr=Boolean.prototype.toString;var Ar=Z();function Fr(r){return"object"==typeof r&&(r instanceof jr||(Ar?function(r){try{return Sr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===D(r)))}function kr(r){return Vr(r)||Fr(r)}function Lr(){return new Function("return this;")()}$(kr,"isPrimitive",Vr),$(kr,"isObject",Fr);var Or="object"==typeof self?self:null,Rr="object"==typeof window?window:null,Br="object"==typeof global?global:null,Nr="object"==typeof globalThis?globalThis:null;var Ir=function(r){if(arguments.length){if(!Vr(r))throw new TypeError(O("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Lr()}if(Nr)return Nr;if(Or)return Or;if(Rr)return Rr;if(Br)return Br;throw new Error("unexpected error. Unable to resolve global object.")}(),Mr=Ir.document&&Ir.document.childNodes,Pr=Int8Array;function Cr(){return/^\s*function\s*([^(]*)/i}var Yr=/^\s*function\s*([^(]*)/i;function $r(r){return null!==r&&"object"==typeof r}function Wr(r){var e,t,n,i;if(("Object"===(t=D(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=Yr.exec(n.toString()))return e[1]}return $r(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}$(Cr,"REGEXP",Yr),$($r,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(O("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!wr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}($r));var Gr="function"==typeof xr||"object"==typeof Pr||"function"==typeof Mr?function(r){return Wr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?Wr(r).toLowerCase():e};function Zr(r){return"function"===Gr(r)}function Ur(r,e){if(!(this instanceof Ur))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!W(r))throw new TypeError(O("invalid argument. Real component must be a number. Value: `%s`.",r));if(!W(e))throw new TypeError(O("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return Y(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:r}),Y(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:e}),this}$(Ur,"BYTES_PER_ELEMENT",8),$(Ur.prototype,"BYTES_PER_ELEMENT",8),$(Ur.prototype,"byteLength",16),$(Ur.prototype,"toString",(function(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i"})),$(Ur.prototype,"toJSON",(function(){var r={type:"Complex128"};return r.re=this.re,r.im=this.im,r}));var Xr="function"==typeof Math.fround?Math.fround:null,Jr="function"==typeof Float32Array;var zr="function"==typeof Float32Array?Float32Array:null;var qr="function"==typeof Float32Array?Float32Array:void 0;var Dr=function(){var r,e,t;if("function"!=typeof zr)return!1;try{e=new zr([1,3.14,-3.14,5e40]),t=e,r=(Jr&&t instanceof Float32Array||"[object Float32Array]"===D(t))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===tr}catch(e){r=!1}return r}()?qr:function(){throw new Error("not implemented")},Hr=new Dr(1);var Kr="function"==typeof Xr?Xr:function(r){return Hr[0]=r,Hr[0]};function Qr(r,e){if(!(this instanceof Qr))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!W(r))throw new TypeError(O("invalid argument. Real component must be a number. Value: `%s`.",r));if(!W(e))throw new TypeError(O("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return Y(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:Kr(r)}),Y(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:Kr(e)}),this}function re(r){return r instanceof Ur||r instanceof Qr||"object"==typeof r&&null!==r&&"number"==typeof r.re&&"number"==typeof r.im}function ee(r){return or(r/2)}$(Qr,"BYTES_PER_ELEMENT",4),$(Qr.prototype,"BYTES_PER_ELEMENT",4),$(Qr.prototype,"byteLength",8),$(Qr.prototype,"toString",(function(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i"})),$(Qr.prototype,"toJSON",(function(){var r={type:"Complex64"};return r.re=this.re,r.im=this.im,r}));function te(r){return"object"==typeof r&&null!==r&&"Complex64Array"===r.constructor.name&&8===r.BYTES_PER_ELEMENT}function ne(){return"function"==typeof z&&"symbol"==typeof z("foo")&&J(z,"iterator")&&"symbol"==typeof z.iterator}var ie=ne()?Symbol.iterator:null;function oe(r,e,t){Y(r,e,{configurable:!1,enumerable:!1,get:t})}function ae(r){return r.re}function ue(r){return r.im}function fe(r,e){return new Dr(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}var le="function"==typeof Float64Array;var se="function"==typeof Float64Array?Float64Array:null;var ce="function"==typeof Float64Array?Float64Array:void 0;var he=function(){var r,e,t;if("function"!=typeof se)return!1;try{e=new se([1,3.14,-3.14,NaN]),t=e,r=(le&&t instanceof Float64Array||"[object Float64Array]"===D(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?ce:function(){throw new Error("not implemented")};function pe(r,e){return new he(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}var ge={float64:function(r,e){return r[e]},float32:function(r,e){return r[e]},int32:function(r,e){return r[e]},int16:function(r,e){return r[e]},int8:function(r,e){return r[e]},uint32:function(r,e){return r[e]},uint16:function(r,e){return r[e]},uint8:function(r,e){return r[e]},uint8c:function(r,e){return r[e]},generic:function(r,e){return r[e]},default:function(r,e){return r[e]}};function me(r){var e=ge[r];return"function"==typeof e?e:ge.default}var ye={complex128:function(r,e){return r.get(e)},complex64:function(r,e){return r.get(e)},default:function(r,e){return r.get(e)}};function we(r){var e=ye[r];return"function"==typeof e?e:ye.default}function be(r){var e,t,n;for(e=[];!(t=r.next()).done;)if(pr(n=t.value)&&n.length>=2)e.push(n[0],n[1]);else{if(!re(n))return new TypeError(O("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));e.push(ae(n),ue(n))}return e}function ve(r,e,t){var n,i,o,a;for(n=[],a=-1;!(i=r.next()).done;)if(a+=1,pr(o=e.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!re(o))return new TypeError(O("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",o));n.push(ae(o),ue(o))}return n}function de(r,e){var t,n,i,o;for(t=e.length,o=0,i=0;i<t;i++){if(!re(n=e[i]))return null;r[o]=ae(n),r[o+1]=ue(n),o+=2}return r}var Ee=2*Dr.BYTES_PER_ELEMENT,_e=ne();function Te(r){return r instanceof Se||"object"==typeof r&&null!==r&&("Complex64Array"===r.constructor.name||"Complex128Array"===r.constructor.name)&&"number"==typeof r._length&&"object"==typeof r._buffer}function xe(r){return r===Se||"Complex128Array"===r.name}function Ve(r){return"object"==typeof r&&null!==r&&"Complex128Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===2*Ee}function je(r,e){return new Qr(r[e*=2],r[e+1])}function Se(){var r,e,t,n;if(e=arguments.length,!(this instanceof Se))return 0===e?new Se:1===e?new Se(arguments[0]):2===e?new Se(arguments[0],arguments[1]):new Se(arguments[0],arguments[1],arguments[2]);if(0===e)t=new Dr(0);else if(1===e)if(sr(arguments[0]))t=new Dr(2*arguments[0]);else if(gr(arguments[0]))if((n=(t=arguments[0]).length)&&wr(t)&&re(t[0])){if(null===(t=de(new Dr(2*n),t))){if(!ee(n))throw new RangeError(O("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new Dr(arguments[0])}}else{if(te(t))t=fe(t,0);else if(Ve(t))t=pe(t,0);else if(!ee(n))throw new RangeError(O("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new Dr(t)}else if(yr(arguments[0])){if(!or((t=arguments[0]).byteLength/Ee))throw new RangeError(O("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",Ee,t.byteLength));t=new Dr(t)}else{if(!br(arguments[0]))throw new TypeError(O("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));if(t=arguments[0],!1===_e)throw new TypeError(O("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!Zr(t[ie]))throw new TypeError(O("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(!Zr((t=t[ie]()).next))throw new TypeError(O("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if((t=be(t))instanceof Error)throw t;t=new Dr(t)}else{if(!yr(t=arguments[0]))throw new TypeError(O("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(!sr(r=arguments[1]))throw new TypeError(O("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!or(r/Ee))throw new RangeError(O("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",Ee,r));if(2===e){if(!or((n=t.byteLength-r)/Ee))throw new RangeError(O("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",Ee,n));t=new Dr(t,r)}else{if(!sr(n=arguments[2]))throw new TypeError(O("invalid argument. Length must be a nonnegative integer. Value: `%s`.",n));if(n*Ee>t.byteLength-r)throw new RangeError(O("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",n*Ee));t=new Dr(t,r,2*n)}}return $(this,"_buffer",t),$(this,"_length",t.length/2),this}return $(Se,"BYTES_PER_ELEMENT",Ee),$(Se,"name","Complex64Array"),$(Se,"from",(function(r){var e,t,n,i,o,a,u,f,l,s,c,h;if(!Zr(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!xe(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!Zr(n=arguments[1]))throw new TypeError(O("invalid argument. Second argument must be a function. Value: `%s`.",n));t>2&&(e=arguments[2])}if(Te(r)){if(f=r.length,n){for(o=(i=new this(f))._buffer,h=0,c=0;c<f;c++){if(re(s=n.call(e,r.get(c),c)))o[h]=ae(s),o[h+1]=ue(s);else{if(!(pr(s)&&s.length>=2))throw new TypeError(O("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",s));o[h]=s[0],o[h+1]=s[1]}h+=2}return i}return new this(r)}if(gr(r)){if(n){for(f=r.length,u=r.get&&r.set?we("default"):me("default"),c=0;c<f;c++)if(!re(u(r,c))){l=!0;break}if(l){if(!ee(f))throw new RangeError(O("invalid argument. First argument must have a length which is a multiple of %u. Length: `%u`.",2,f));for(o=(i=new this(f/2))._buffer,c=0;c<f;c++)o[c]=n.call(e,u(r,c),c);return i}for(o=(i=new this(f))._buffer,h=0,c=0;c<f;c++){if(re(s=n.call(e,u(r,c),c)))o[h]=ae(s),o[h+1]=ue(s);else{if(!(pr(s)&&s.length>=2))throw new TypeError(O("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",s));o[h]=s[0],o[h+1]=s[1]}h+=2}return i}return new this(r)}if(br(r)&&_e&&Zr(r[ie])){if(!Zr((o=r[ie]()).next))throw new TypeError(O("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r));if((a=n?ve(o,n,e):be(o))instanceof Error)throw a;for(o=(i=new this(f=a.length/2))._buffer,c=0;c<f;c++)o[c]=a[c];return i}throw new TypeError(O("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r))})),$(Se,"of",(function(){var r,e;if(!Zr(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!xe(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);return new this(r)})),$(Se.prototype,"at",(function(r){if(!Te(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!or(r))throw new TypeError(O("invalid argument. Must provide an integer. Value: `%s`.",r));if(r<0&&(r+=this._length),!(r<0||r>=this._length))return je(this._buffer,r)})),oe(Se.prototype,"buffer",(function(){return this._buffer.buffer})),oe(Se.prototype,"byteLength",(function(){return this._buffer.byteLength})),oe(Se.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),$(Se.prototype,"BYTES_PER_ELEMENT",Se.BYTES_PER_ELEMENT),$(Se.prototype,"copyWithin",(function(r,e){if(!Te(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*r,2*e):this._buffer.copyWithin(2*r,2*e,2*arguments[2]),this})),$(Se.prototype,"entries",(function(){var r,e,t,n,i,o,a;if(!Te(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return e=this,r=this._buffer,n=this._length,o=-1,a=-2,$(t={},"next",(function(){var e;if(o+=1,i||o>=n)return{done:!0};return e=new Qr(r[a+=2],r[a+1]),{value:[o,e],done:!1}})),$(t,"return",(function(r){if(i=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),ie&&$(t,ie,(function(){return e.entries()})),t})),$(Se.prototype,"every",(function(r,e){var t,n;if(!Te(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Zr(r))throw new TypeError(O("invalid argument. First argument must be a function. Value: `%s`.",r));for(t=this._buffer,n=0;n<this._length;n++)if(!r.call(e,je(t,n),n,this))return!1;return!0})),$(Se.prototype,"fill",(function(r,e,t){var n,i,o,a,u,f;if(!Te(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!re(r))throw new TypeError(O("invalid argument. First argument must be a complex number. Value: `%s`.",r));if(n=this._buffer,i=this._length,arguments.length>1){if(!or(e))throw new TypeError(O("invalid argument. Second argument must be an integer. Value: `%s`.",e));if(e<0&&(e+=i)<0&&(e=0),arguments.length>2){if(!or(t))throw new TypeError(O("invalid argument. Third argument must be an integer. Value: `%s`.",t));t<0&&(t+=i)<0&&(t=0),t>i&&(t=i)}else t=i}else e=0,t=i;for(a=ae(r),u=ue(r),f=e;f<t;f++)n[o=2*f]=a,n[o+1]=u;return this})),$(Se.prototype,"filter",(function(r,e){var t,n,i,o;if(!Te(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Zr(r))throw new TypeError(O("invalid argument. First argument must be a function. Value: `%s`.",r));for(t=this._buffer,n=[],i=0;i<this._length;i++)o=je(t,i),r.call(e,o,i,this)&&n.push(o);return new this.constructor(n)})),$(Se.prototype,"find",(function(r,e){var t,n,i;if(!Te(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Zr(r))throw new TypeError(O("invalid argument. First argument must be a function. Value: `%s`.",r));for(t=this._buffer,n=0;n<this._length;n++)if(i=je(t,n),r.call(e,i,n,this))return i})),$(Se.prototype,"findIndex",(function(r,e){var t,n,i;if(!Te(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Zr(r))throw new TypeError(O("invalid argument. First argument must be a function. Value: `%s`.",r));for(t=this._buffer,n=0;n<this._length;n++)if(i=je(t,n),r.call(e,i,n,this))return n;return-1})),$(Se.prototype,"findLast",(function(r,e){var t,n,i;if(!Te(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Zr(r))throw new TypeError(O("invalid argument. First argument must be a function. Value: `%s`.",r));for(t=this._buffer,n=this._length-1;n>=0;n--)if(i=je(t,n),r.call(e,i,n,this))return i})),$(Se.prototype,"findLastIndex",(function(r,e){var t,n,i;if(!Te(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Zr(r))throw new TypeError(O("invalid argument. First argument must be a function. Value: `%s`.",r));for(t=this._buffer,n=this._length-1;n>=0;n--)if(i=je(t,n),r.call(e,i,n,this))return n;return-1})),$(Se.prototype,"forEach",(function(r,e){var t,n,i;if(!Te(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Zr(r))throw new TypeError(O("invalid argument. First argument must be a function. Value: `%s`.",r));for(t=this._buffer,n=0;n<this._length;n++)i=je(t,n),r.call(e,i,n,this)})),$(Se.prototype,"get",(function(r){if(!Te(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!sr(r))throw new TypeError(O("invalid argument. Must provide a nonnegative integer. Value: `%s`.",r));if(!(r>=this._length))return je(this._buffer,r)})),$(Se.prototype,"includes",(function(r,e){var t,n,i,o,a;if(!Te(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!re(r))throw new TypeError(O("invalid argument. First argument must be a complex number. Value: `%s`.",r));if(arguments.length>1){if(!or(e))throw new TypeError(O("invalid argument. Second argument must be an integer. Value: `%s`.",e));e<0&&(e+=this._length)<0&&(e=0)}else e=0;for(i=ae(r),o=ue(r),t=this._buffer,a=e;a<this._length;a++)if(i===t[n=2*a]&&o===t[n+1])return!0;return!1})),$(Se.prototype,"indexOf",(function(r,e){var t,n,i,o,a;if(!Te(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!re(r))throw new TypeError(O("invalid argument. First argument must be a complex number. Value: `%s`.",r));if(arguments.length>1){if(!or(e))throw new TypeError(O("invalid argument. Second argument must be an integer. Value: `%s`.",e));e<0&&(e+=this._length)<0&&(e=0)}else e=0;for(i=ae(r),o=ue(r),t=this._buffer,a=e;a<this._length;a++)if(i===t[n=2*a]&&o===t[n+1])return a;return-1})),$(Se.prototype,"join",(function(r){var e,t,n,i;if(!Te(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(0===arguments.length)n=",";else{if(!vr(r))throw new TypeError(O("invalid argument. First argument must be a string. Value: `%s`.",r));n=r}for(e=[],t=this._buffer,i=0;i<this._length;i++)e.push(je(t,i).toString());return e.join(n)})),$(Se.prototype,"lastIndexOf",(function(r,e){var t,n,i,o,a;if(!Te(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!re(r))throw new TypeError(O("invalid argument. First argument must be a complex number. Value: `%s`.",r));if(arguments.length>1){if(!or(e))throw new TypeError(O("invalid argument. Second argument must be an integer. Value: `%s`.",e));e>=this._length?e=this._length-1:e<0&&(e+=this._length)}else e=this._length-1;for(i=ae(r),o=ue(r),t=this._buffer,a=e;a>=0;a--)if(i===t[n=2*a]&&o===t[n+1])return a;return-1})),oe(Se.prototype,"length",(function(){return this._length})),$(Se.prototype,"map",(function(r,e){var t,n,i,o,a;if(!Te(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Zr(r))throw new TypeError(O("invalid argument. First argument must be a function. Value: `%s`.",r));for(n=this._buffer,t=(i=new this.constructor(this._length))._buffer,o=0;o<this._length;o++)if(re(a=r.call(e,je(n,o),o,this)))t[2*o]=ae(a),t[2*o+1]=ue(a);else{if(!pr(a)||2!==a.length)throw new TypeError(O("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",a));t[2*o]=a[0],t[2*o+1]=a[1]}return i})),$(Se.prototype,"reverse",(function(){var r,e,t,n,i,o;if(!Te(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(t=this._length,r=this._buffer,n=ir(t/2),i=0;i<n;i++)o=t-i-1,e=r[2*i],r[2*i]=r[2*o],r[2*o]=e,e=r[2*i+1],r[2*i+1]=r[2*o+1],r[2*o+1]=e;return this})),$(Se.prototype,"set",(function(r){var e,t,n,i,o,a,u,f,l;if(!Te(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!sr(t=arguments[1]))throw new TypeError(O("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",t))}else t=0;if(re(r)){if(t>=this._length)throw new RangeError(O("invalid argument. Index argument is out-of-bounds. Value: `%u`.",t));return n[t*=2]=ae(r),void(n[t+1]=ue(r))}if(Te(r)){if(t+(a=r._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r._buffer,l=n.byteOffset+t*Ee,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(i=new Dr(e.length),f=0;f<e.length;f++)i[f]=e[f];e=i}for(t*=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2}else{if(!gr(r))throw new TypeError(O("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",r));for(a=r.length,f=0;f<a;f++)if(!re(r[f])){o=!0;break}if(o){if(!ee(a))throw new RangeError(O("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",a));if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r,l=n.byteOffset+t*Ee,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(i=new Dr(a),f=0;f<a;f++)i[f]=e[f];e=i}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=r[f],n[t]=ae(u),n[t+1]=ue(u),t+=2}})),$(Se.prototype,"slice",(function(r,e){var t,n,i,o,a,u,f;if(!Te(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(a=this._buffer,u=this._length,0===arguments.length)r=0,e=u;else{if(!or(r))throw new TypeError(O("invalid argument. First argument must be an integer. Value: `%s`.",r));if(r<0&&(r+=u)<0&&(r=0),1===arguments.length)e=u;else{if(!or(e))throw new TypeError(O("invalid argument. Second argument must be an integer. Value: `%s`.",e));e<0?(e+=u)<0&&(e=0):e>u&&(e=u)}}for(t=r<e?e-r:0,n=(i=new this.constructor(t))._buffer,f=0;f<t;f++)o=2*(f+r),n[2*f]=a[o],n[2*f+1]=a[o+1];return i})),$(Se.prototype,"some",(function(r,e){var t,n;if(!Te(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Zr(r))throw new TypeError(O("invalid argument. First argument must be a function. Value: `%s`.",r));for(t=this._buffer,n=0;n<this._length;n++)if(r.call(e,je(t,n),n,this))return!0;return!1})),$(Se.prototype,"subarray",(function(r,e){var t,n,i;if(!Te(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,i=this._length,0===arguments.length)r=0,e=i;else{if(!or(r))throw new TypeError(O("invalid argument. First argument must be an integer. Value: `%s`.",r));if(r<0&&(r+=i)<0&&(r=0),1===arguments.length)e=i;else{if(!or(e))throw new TypeError(O("invalid argument. Second argument must be an integer. Value: `%s`.",e));e<0?(e+=i)<0&&(e=0):e>i&&(e=i)}}return r>=i?(i=0,t=n.byteLength):r>=e?(i=0,t=n.byteOffset+r*Ee):(i=e-r,t=n.byteOffset+r*Ee),new this.constructor(n.buffer,t,i<0?0:i)})),$(Se.prototype,"toReversed",(function(){var r,e,t,n,i,o;if(!Te(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(t=this._length,e=new this.constructor(t),n=this._buffer,r=e._buffer,i=0;i<t;i++)o=t-i-1,r[2*i]=n[2*o],r[2*i+1]=n[2*o+1];return e})),$(Se.prototype,"toString",(function(){var r,e,t;if(!Te(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(r=[],e=this._buffer,t=0;t<this._length;t++)r.push(je(e,t).toString());return r.join(",")})),$(Se.prototype,"with",(function(r,e){var t,n,i;if(!Te(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!or(r))throw new TypeError(O("invalid argument. First argument must be an integer. Value: `%s`.",r));if(i=this._length,r<0&&(r+=i),r<0||r>=i)throw new RangeError(O("invalid argument. Index argument is out-of-bounds. Value: `%s`.",r));if(!re(e))throw new TypeError(O("invalid argument. Second argument must be a complex number. Value: `%s`.",e));return(t=(n=new this.constructor(this._buffer))._buffer)[2*r]=ae(e),t[2*r+1]=ue(e),n})),Se}));
//# sourceMappingURL=index.js.map
