// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).Complex64Array=r()}(this,(function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function i(e,r,t){var i=!1,o=r-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+n(o):n(o)+e,i&&(e="-"+e)),e}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(e){var r,n,u;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===e.specifier||10!==r)&&(u=4294967295+u+1),u<0?(n=(-u).toString(r),e.precision&&(n=i(n,e.precision,e.padRight)),n="-"+n):(n=u.toString(r),u||e.precision?e.precision&&(n=i(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===a.call(e.specifier)?a.call(n):o.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function f(e){return"string"==typeof e}var l=Math.abs,s=String.prototype.toLowerCase,c=String.prototype.toUpperCase,h=String.prototype.replace,p=/e\+(\d)$/,g=/e-(\d)$/,y=/^(\d+)$/,m=/^(\d+)e/,b=/\.0$/,w=/\.0*e/,v=/(\..*[^0])0*e/;function d(e){var r,n,i=parseFloat(e.arg);if(!isFinite(i)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+n);i=e.arg}switch(e.specifier){case"e":case"E":n=i.toExponential(e.precision);break;case"f":case"F":n=i.toFixed(e.precision);break;case"g":case"G":l(i)<1e-4?((r=e.precision)>0&&(r-=1),n=i.toExponential(r)):n=i.toPrecision(e.precision),e.alternate||(n=h.call(n,v,"$1e"),n=h.call(n,w,"e"),n=h.call(n,b,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=h.call(n,p,"e+0$1"),n=h.call(n,g,"e-0$1"),e.alternate&&(n=h.call(n,y,"$1."),n=h.call(n,m,"$1.e")),i>=0&&e.sign&&(n=e.sign+n),n=e.specifier===c.call(e.specifier)?c.call(n):s.call(n)}function E(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function _(e,r,t){var n=r-e.length;return n<0?e:e=t?e+E(n):E(n)+e}var T=String.fromCharCode,x=isNaN,V=Array.isArray;function j(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function A(e){var r,t,n,o,a,l,s,c,h;if(!V(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(l="",s=1,c=0;c<e.length;c++)if(f(n=e[c]))l+=n;else{if(r=void 0!==n.precision,!(n=j(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(s=n.mapping),t=n.flags,h=0;h<t.length;h++)switch(o=t.charAt(h)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[s],10),s+=1,x(n.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[s],10),s+=1,x(n.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[s],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!x(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=x(a)?String(n.arg):T(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=d(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=_(n.arg,n.width,n.padRight)),l+=n.arg||"",s+=1}return l}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function F(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function k(e){var r,t,n,i;for(t=[],i=0,n=S.exec(e);n;)(r=e.slice(i,S.lastIndex-n[0].length)).length&&t.push(r),t.push(F(n)),i=S.lastIndex,n=S.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function L(e){return"string"==typeof e}function B(e){var r,t,n;if(!L(e))throw new TypeError(B("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=k(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return A.apply(null,t)}var O,R=Object.prototype,N=R.toString,I=R.__defineGetter__,M=R.__defineSetter__,P=R.__lookupGetter__,C=R.__lookupSetter__;O=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===N.call(e))throw new TypeError(B("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===N.call(t))throw new TypeError(B("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(P.call(e,r)||C.call(e,r)?(n=e.__proto__,e.__proto__=R,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&I&&I.call(e,r,t.get),a&&M&&M.call(e,r,t.set),e};var Y=O;function $(e,r,t){Y(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function W(e){return"number"==typeof e}var G="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Z(){return G&&"symbol"==typeof Symbol.toStringTag}var U=Object.prototype.toString;var X=Object.prototype.hasOwnProperty;function J(e,r){return null!=e&&X.call(e,r)}var z="function"==typeof Symbol?Symbol:void 0,q="function"==typeof z?z.toStringTag:"";var D=Z()?function(e){var r,t,n;if(null==e)return U.call(e);t=e[q],r=J(e,q);try{e[q]=void 0}catch(r){return U.call(e)}return n=U.call(e),r?e[q]=t:delete e[q],n}:function(e){return U.call(e)},H=Number,K=H.prototype.toString;var Q=Z();function ee(e){return"object"==typeof e&&(e instanceof H||(Q?function(e){try{return K.call(e),!0}catch(e){return!1}}(e):"[object Number]"===D(e)))}function re(e){return W(e)||ee(e)}$(re,"isPrimitive",W),$(re,"isObject",ee);var te=Number.POSITIVE_INFINITY,ne=H.NEGATIVE_INFINITY,ie=Math.floor;function oe(e){return ie(e)===e}function ae(e){return e<te&&e>ne&&oe(e)}function ue(e){return W(e)&&ae(e)}function fe(e){return ee(e)&&ae(e.valueOf())}function le(e){return ue(e)||fe(e)}function se(e){return ue(e)&&e>=0}function ce(e){return fe(e)&&e.valueOf()>=0}function he(e){return se(e)||ce(e)}$(le,"isPrimitive",ue),$(le,"isObject",fe),$(he,"isPrimitive",se),$(he,"isObject",ce);function pe(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&oe(e.length)&&e.length>=0&&e.length<=4294967295}function ge(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&oe(e.length)&&e.length>=0&&e.length<=9007199254740991}var ye="function"==typeof ArrayBuffer;function me(e){return ye&&e instanceof ArrayBuffer||"[object ArrayBuffer]"===D(e)}var be=Array.isArray?Array.isArray:function(e){return"[object Array]"===D(e)};function we(e){return"object"==typeof e&&null!==e&&!be(e)}var ve=/./;function de(e){return"boolean"==typeof e}var Ee=Boolean,_e=Boolean.prototype.toString;var Te=Z();function xe(e){return"object"==typeof e&&(e instanceof Ee||(Te?function(e){try{return _e.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===D(e)))}function Ve(e){return de(e)||xe(e)}function je(){return new Function("return this;")()}$(Ve,"isPrimitive",de),$(Ve,"isObject",xe);var Ae="object"==typeof self?self:null,Se="object"==typeof window?window:null,Fe="object"==typeof global?global:null,ke="object"==typeof globalThis?globalThis:null;var Le=function(e){if(arguments.length){if(!de(e))throw new TypeError(B("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return je()}if(ke)return ke;if(Ae)return Ae;if(Se)return Se;if(Fe)return Fe;throw new Error("unexpected error. Unable to resolve global object.")}(),Be=Le.document&&Le.document.childNodes,Oe=Int8Array;function Re(){return/^\s*function\s*([^(]*)/i}var Ne=/^\s*function\s*([^(]*)/i;function Ie(e){return null!==e&&"object"==typeof e}function Me(e){var r,t,n,i;if(("Object"===(t=D(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=Ne.exec(n.toString()))return r[1]}return Ie(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}$(Re,"REGEXP",Ne),$(Ie,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(B("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!be(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(Ie));var Pe="function"==typeof ve||"object"==typeof Oe||"function"==typeof Be?function(e){return Me(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?Me(e).toLowerCase():r};function Ce(e){return"function"===Pe(e)}function Ye(e,r){if(!(this instanceof Ye))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!W(e))throw new TypeError(B("invalid argument. Real component must be a number. Value: `%s`.",e));if(!W(r))throw new TypeError(B("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return Y(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:e}),Y(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:r}),this}$(Ye,"BYTES_PER_ELEMENT",8),$(Ye.prototype,"BYTES_PER_ELEMENT",8),$(Ye.prototype,"byteLength",16),$(Ye.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),$(Ye.prototype,"toJSON",(function(){var e={type:"Complex128"};return e.re=this.re,e.im=this.im,e}));var $e="function"==typeof Math.fround?Math.fround:null,We="function"==typeof Float32Array;var Ge="function"==typeof Float32Array?Float32Array:null;var Ze="function"==typeof Float32Array?Float32Array:void 0;var Ue=function(){var e,r,t;if("function"!=typeof Ge)return!1;try{r=new Ge([1,3.14,-3.14,5e40]),t=r,e=(We&&t instanceof Float32Array||"[object Float32Array]"===D(t))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===te}catch(r){e=!1}return e}()?Ze:function(){throw new Error("not implemented")},Xe=new Ue(1);var Je="function"==typeof $e?$e:function(e){return Xe[0]=e,Xe[0]};function ze(e,r){if(!(this instanceof ze))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!W(e))throw new TypeError(B("invalid argument. Real component must be a number. Value: `%s`.",e));if(!W(r))throw new TypeError(B("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return Y(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:Je(e)}),Y(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:Je(r)}),this}function qe(e){return e instanceof Ye||e instanceof ze||"object"==typeof e&&null!==e&&"number"==typeof e.re&&"number"==typeof e.im}function De(e){return oe(e/2)}function He(){return"function"==typeof z&&"symbol"==typeof z("foo")&&J(z,"iterator")&&"symbol"==typeof z.iterator}$(ze,"BYTES_PER_ELEMENT",4),$(ze.prototype,"BYTES_PER_ELEMENT",4),$(ze.prototype,"byteLength",8),$(ze.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),$(ze.prototype,"toJSON",(function(){var e={type:"Complex64"};return e.re=this.re,e.im=this.im,e}));var Ke=He()?Symbol.iterator:null;function Qe(e,r,t){Y(e,r,{configurable:!1,enumerable:!1,get:t})}function er(e){return e.re}function rr(e){return e.im}function tr(e,r){return new Ue(e.buffer,e.byteOffset+e.BYTES_PER_ELEMENT*r,2*(e.length-r))}var nr="function"==typeof Float64Array;var ir="function"==typeof Float64Array?Float64Array:null;var or="function"==typeof Float64Array?Float64Array:void 0;var ar=function(){var e,r,t;if("function"!=typeof ir)return!1;try{r=new ir([1,3.14,-3.14,NaN]),t=r,e=(nr&&t instanceof Float64Array||"[object Float64Array]"===D(t))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){e=!1}return e}()?or:function(){throw new Error("not implemented")};function ur(e,r){return new ar(e.buffer,e.byteOffset+e.BYTES_PER_ELEMENT*r,2*(e.length-r))}var fr={float64:function(e,r){return e[r]},float32:function(e,r){return e[r]},int32:function(e,r){return e[r]},int16:function(e,r){return e[r]},int8:function(e,r){return e[r]},uint32:function(e,r){return e[r]},uint16:function(e,r){return e[r]},uint8:function(e,r){return e[r]},uint8c:function(e,r){return e[r]},generic:function(e,r){return e[r]},default:function(e,r){return e[r]}};function lr(e){var r=fr[e];return"function"==typeof r?r:fr.default}var sr={complex128:function(e,r){return e.get(r)},complex64:function(e,r){return e.get(r)},default:function(e,r){return e.get(r)}};function cr(e){var r=sr[e];return"function"==typeof r?r:sr.default}function hr(e){var r,t,n;for(r=[];!(t=e.next()).done;)if(pe(n=t.value)&&n.length>=2)r.push(n[0],n[1]);else{if(!qe(n))return new TypeError(B("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));r.push(er(n),rr(n))}return r}function pr(e,r,t){var n,i,o,a;for(n=[],a=-1;!(i=e.next()).done;)if(a+=1,pe(o=r.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!qe(o))return new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",o));n.push(er(o),rr(o))}return n}function gr(e,r){var t,n,i,o;for(t=r.length,o=0,i=0;i<t;i++){if(!qe(n=r[i]))return null;e[o]=er(n),e[o+1]=rr(n),o+=2}return e}var yr=2*Ue.BYTES_PER_ELEMENT,mr=He();function br(e){return e instanceof _r||"object"==typeof e&&null!==e&&("Complex64Array"===e.constructor.name||"Complex128Array"===e.constructor.name)&&"number"==typeof e._length&&"object"==typeof e._buffer}function wr(e){return e===_r||"Complex128Array"===e.name}function vr(e){return"object"==typeof e&&null!==e&&"Complex64Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===yr}function dr(e){return"object"==typeof e&&null!==e&&"Complex128Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===2*yr}function Er(e,r){return new ze(e[r*=2],e[r+1])}function _r(){var e,r,t,n;if(r=arguments.length,!(this instanceof _r))return 0===r?new _r:1===r?new _r(arguments[0]):2===r?new _r(arguments[0],arguments[1]):new _r(arguments[0],arguments[1],arguments[2]);if(0===r)t=new Ue(0);else if(1===r)if(se(arguments[0]))t=new Ue(2*arguments[0]);else if(ge(arguments[0]))if((n=(t=arguments[0]).length)&&be(t)&&qe(t[0])){if(null===(t=gr(new Ue(2*n),t))){if(!De(n))throw new RangeError(B("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new Ue(arguments[0])}}else{if(vr(t))t=tr(t,0);else if(dr(t))t=ur(t,0);else if(!De(n))throw new RangeError(B("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new Ue(t)}else if(me(arguments[0])){if(!oe((t=arguments[0]).byteLength/yr))throw new RangeError(B("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",yr,t.byteLength));t=new Ue(t)}else{if(!we(arguments[0]))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));if(t=arguments[0],!1===mr)throw new TypeError(B("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!Ce(t[Ke]))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(!Ce((t=t[Ke]()).next))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if((t=hr(t))instanceof Error)throw t;t=new Ue(t)}else{if(!me(t=arguments[0]))throw new TypeError(B("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(!se(e=arguments[1]))throw new TypeError(B("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",e));if(!oe(e/yr))throw new RangeError(B("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",yr,e));if(2===r){if(!oe((n=t.byteLength-e)/yr))throw new RangeError(B("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",yr,n));t=new Ue(t,e)}else{if(!se(n=arguments[2]))throw new TypeError(B("invalid argument. Length must be a nonnegative integer. Value: `%s`.",n));if(n*yr>t.byteLength-e)throw new RangeError(B("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",n*yr));t=new Ue(t,e,2*n)}}return $(this,"_buffer",t),$(this,"_length",t.length/2),this}return $(_r,"BYTES_PER_ELEMENT",yr),$(_r,"name","Complex64Array"),$(_r,"from",(function(e){var r,t,n,i,o,a,u,f,l,s,c,h;if(!Ce(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!wr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!Ce(n=arguments[1]))throw new TypeError(B("invalid argument. Second argument must be a function. Value: `%s`.",n));t>2&&(r=arguments[2])}if(br(e)){if(f=e.length,n){for(o=(i=new this(f))._buffer,h=0,c=0;c<f;c++){if(qe(s=n.call(r,e.get(c),c)))o[h]=er(s),o[h+1]=rr(s);else{if(!(pe(s)&&s.length>=2))throw new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",s));o[h]=s[0],o[h+1]=s[1]}h+=2}return i}return new this(e)}if(ge(e)){if(n){for(f=e.length,u=e.get&&e.set?cr("default"):lr("default"),c=0;c<f;c++)if(!qe(u(e,c))){l=!0;break}if(l){if(!De(f))throw new RangeError(B("invalid argument. First argument must have a length which is a multiple of %u. Length: `%u`.",2,f));for(o=(i=new this(f/2))._buffer,c=0;c<f;c++)o[c]=n.call(r,u(e,c),c);return i}for(o=(i=new this(f))._buffer,h=0,c=0;c<f;c++){if(qe(s=n.call(r,u(e,c),c)))o[h]=er(s),o[h+1]=rr(s);else{if(!(pe(s)&&s.length>=2))throw new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",s));o[h]=s[0],o[h+1]=s[1]}h+=2}return i}return new this(e)}if(we(e)&&mr&&Ce(e[Ke])){if(!Ce((o=e[Ke]()).next))throw new TypeError(B("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if((a=n?pr(o,n,r):hr(o))instanceof Error)throw a;for(o=(i=new this(f=a.length/2))._buffer,c=0;c<f;c++)o[c]=a[c];return i}throw new TypeError(B("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))})),$(_r,"of",(function(){var e,r;if(!Ce(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!wr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],r=0;r<arguments.length;r++)e.push(arguments[r]);return new this(e)})),$(_r.prototype,"at",(function(e){if(!br(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!oe(e))throw new TypeError(B("invalid argument. Must provide an integer. Value: `%s`.",e));if(e<0&&(e+=this._length),!(e<0||e>=this._length))return Er(this._buffer,e)})),Qe(_r.prototype,"buffer",(function(){return this._buffer.buffer})),Qe(_r.prototype,"byteLength",(function(){return this._buffer.byteLength})),Qe(_r.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),$(_r.prototype,"BYTES_PER_ELEMENT",_r.BYTES_PER_ELEMENT),$(_r.prototype,"copyWithin",(function(e,r){if(!br(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*e,2*r):this._buffer.copyWithin(2*e,2*r,2*arguments[2]),this})),$(_r.prototype,"entries",(function(){var e,r,t,n,i,o,a;if(!br(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return r=this,e=this._buffer,n=this._length,o=-1,a=-2,$(t={},"next",(function(){var r;if(o+=1,i||o>=n)return{done:!0};return r=new ze(e[a+=2],e[a+1]),{value:[o,r],done:!1}})),$(t,"return",(function(e){if(i=!0,arguments.length)return{value:e,done:!0};return{done:!0}})),Ke&&$(t,Ke,(function(){return r.entries()})),t})),$(_r.prototype,"every",(function(e,r){var t,n;if(!br(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Ce(e))throw new TypeError(B("invalid argument. First argument must be a function. Value: `%s`.",e));for(t=this._buffer,n=0;n<this._length;n++)if(!e.call(r,Er(t,n),n,this))return!1;return!0})),$(_r.prototype,"filter",(function(e,r){var t,n,i,o;if(!br(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Ce(e))throw new TypeError(B("invalid argument. First argument must be a function. Value: `%s`.",e));for(t=this._buffer,n=[],i=0;i<this._length;i++)o=Er(t,i),e.call(r,o,i,this)&&n.push(o);return new this.constructor(n)})),$(_r.prototype,"find",(function(e,r){var t,n,i;if(!br(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Ce(e))throw new TypeError(B("invalid argument. First argument must be a function. Value: `%s`.",e));for(t=this._buffer,n=0;n<this._length;n++)if(i=Er(t,n),e.call(r,i,n,this))return i})),$(_r.prototype,"findIndex",(function(e,r){var t,n,i;if(!br(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Ce(e))throw new TypeError(B("invalid argument. First argument must be a function. Value: `%s`.",e));for(t=this._buffer,n=0;n<this._length;n++)if(i=Er(t,n),e.call(r,i,n,this))return n;return-1})),$(_r.prototype,"findLast",(function(e,r){var t,n,i;if(!br(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Ce(e))throw new TypeError(B("invalid argument. First argument must be a function. Value: `%s`.",e));for(t=this._buffer,n=this._length-1;n>=0;n--)if(i=Er(t,n),e.call(r,i,n,this))return i})),$(_r.prototype,"findLastIndex",(function(e,r){var t,n,i;if(!br(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Ce(e))throw new TypeError(B("invalid argument. First argument must be a function. Value: `%s`.",e));for(t=this._buffer,n=this._length-1;n>=0;n--)if(i=Er(t,n),e.call(r,i,n,this))return n;return-1})),$(_r.prototype,"forEach",(function(e,r){var t,n,i;if(!br(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Ce(e))throw new TypeError(B("invalid argument. First argument must be a function. Value: `%s`.",e));for(t=this._buffer,n=0;n<this._length;n++)i=Er(t,n),e.call(r,i,n,this)})),$(_r.prototype,"get",(function(e){if(!br(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!se(e))throw new TypeError(B("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));if(!(e>=this._length))return Er(this._buffer,e)})),$(_r.prototype,"includes",(function(e,r){var t,n,i,o,a;if(!br(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!qe(e))throw new TypeError(B("invalid argument. First argument must be a complex number. Value: `%s`.",e));if(arguments.length>1){if(!oe(r))throw new TypeError(B("invalid argument. Second argument must be an integer. Value: `%s`.",r));r<0&&(r+=this._length)<0&&(r=0)}else r=0;for(i=er(e),o=rr(e),t=this._buffer,a=r;a<this._length;a++)if(i===t[n=2*a]&&o===t[n+1])return!0;return!1})),$(_r.prototype,"indexOf",(function(e,r){var t,n,i,o,a;if(!br(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!qe(e))throw new TypeError(B("invalid argument. First argument must be a complex number. Value: `%s`.",e));if(arguments.length>1){if(!oe(r))throw new TypeError(B("invalid argument. Second argument must be an integer. Value: `%s`.",r));r<0&&(r+=this._length)<0&&(r=0)}else r=0;for(i=er(e),o=rr(e),t=this._buffer,a=r;a<this._length;a++)if(i===t[n=2*a]&&o===t[n+1])return a;return-1})),$(_r.prototype,"lastIndexOf",(function(e,r){var t,n,i,o,a;if(!br(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!qe(e))throw new TypeError(B("invalid argument. First argument must be a complex number. Value: `%s`.",e));if(arguments.length>1){if(!oe(r))throw new TypeError(B("invalid argument. Second argument must be an integer. Value: `%s`.",r));r>=this._length?r=this._length-1:r<0&&(r+=this._length)}else r=this._length-1;for(i=er(e),o=rr(e),t=this._buffer,a=r;a>=0;a--)if(i===t[n=2*a]&&o===t[n+1])return a;return-1})),Qe(_r.prototype,"length",(function(){return this._length})),$(_r.prototype,"set",(function(e){var r,t,n,i,o,a,u,f,l;if(!br(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!se(t=arguments[1]))throw new TypeError(B("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",t))}else t=0;if(qe(e)){if(t>=this._length)throw new RangeError(B("invalid argument. Index argument is out-of-bounds. Value: `%u`.",t));return n[t*=2]=er(e),void(n[t+1]=rr(e))}if(br(e)){if(t+(a=e._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e._buffer,l=n.byteOffset+t*yr,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(i=new Ue(r.length),f=0;f<r.length;f++)i[f]=r[f];r=i}for(t*=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2}else{if(!ge(e))throw new TypeError(B("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",e));for(a=e.length,f=0;f<a;f++)if(!qe(e[f])){o=!0;break}if(o){if(!De(a))throw new RangeError(B("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",a));if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e,l=n.byteOffset+t*yr,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(i=new Ue(a),f=0;f<a;f++)i[f]=r[f];r=i}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=e[f],n[t]=er(u),n[t+1]=rr(u),t+=2}})),$(_r.prototype,"some",(function(e,r){var t,n;if(!br(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Ce(e))throw new TypeError(B("invalid argument. First argument must be a function. Value: `%s`.",e));for(t=this._buffer,n=0;n<this._length;n++)if(e.call(r,Er(t,n),n,this))return!0;return!1})),$(_r.prototype,"subarray",(function(e,r){var t,n,i;if(!br(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,i=this._length,0===arguments.length)e=0,r=i;else{if(!oe(e))throw new TypeError(B("invalid argument. First argument must be an integer. Value: `%s`.",e));if(e<0&&(e+=i)<0&&(e=0),1===arguments.length)r=i;else{if(!oe(r))throw new TypeError(B("invalid argument. Second argument must be an integer. Value: `%s`.",r));r<0?(r+=i)<0&&(r=0):r>i&&(r=i)}}return e>=i?(i=0,t=n.byteLength):e>=r?(i=0,t=n.byteOffset+e*yr):(i=r-e,t=n.byteOffset+e*yr),new this.constructor(n.buffer,t,i<0?0:i)})),_r}));
//# sourceMappingURL=index.js.map
