// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function o(r,e,t){var o=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=t?r+n(i):n(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,f=String.prototype.toUpperCase;function u(r){var e,n,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(n=(-u).toString(e),r.precision&&(n=o(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(e),u||r.precision?r.precision&&(n=o(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===f.call(r.specifier)?f.call(n):i.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var a=Math.abs,s=String.prototype.toLowerCase,h=String.prototype.toUpperCase,l=String.prototype.replace,c=/e\+(\d)$/,p=/e-(\d)$/,w=/^(\d+)$/,y=/^(\d+)e/,g=/\.0$/,b=/\.0*e/,E=/(\..*[^0])0*e/;function d(r){var e,n,o=parseFloat(r.arg);if(!isFinite(o)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);o=r.arg}switch(r.specifier){case"e":case"E":n=o.toExponential(r.precision);break;case"f":case"F":n=o.toFixed(r.precision);break;case"g":case"G":a(o)<1e-4?((e=r.precision)>0&&(e-=1),n=o.toExponential(e)):n=o.toPrecision(r.precision),r.alternate||(n=l.call(n,E,"$1e"),n=l.call(n,b,"e"),n=l.call(n,g,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=l.call(n,c,"e+0$1"),n=l.call(n,p,"e-0$1"),r.alternate&&(n=l.call(n,w,"$1."),n=l.call(n,y,"$1.e")),o>=0&&r.sign&&(n=r.sign+n),n=r.specifier===h.call(r.specifier)?h.call(n):s.call(n)}function v(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var _=String.fromCharCode,m=isNaN,R=Array.isArray;function T(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function j(r){var e,t,n,i,f,a,s,h,l,c,p,w,y;if(!R(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",s=1,h=0;h<r.length;h++)if("string"==typeof(n=r[h]))a+=n;else{if(e=void 0!==n.precision,!(n=T(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+h+"`. Value: `"+n+"`.");for(n.mapping&&(s=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(i=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[s],10),s+=1,m(n.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[s],10),s+=1,m(n.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[s],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!m(n.arg)){if((f=parseInt(n.arg,10))<0||f>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=m(f)?String(n.arg):_(f)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=d(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(c=n.arg,p=n.width,w=n.padRight,y=void 0,(y=p-c.length)<0?c:c=w?c+v(y):v(y)+c)),a+=n.arg||"",s+=1}return a}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function A(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function x(r){var e,t,n,o;for(t=[],o=0,n=S.exec(r);n;)(e=r.slice(o,S.lastIndex-n[0].length)).length&&t.push(e),t.push(A(n)),o=S.lastIndex,n=S.exec(r);return(e=r.slice(o)).length&&t.push(e),t}function O(r){var e,t;if("string"!=typeof r)throw new TypeError(O("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[x(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return j.apply(null,e)}var F,L=Object.prototype,N=L.toString,I=L.__defineGetter__,P=L.__defineSetter__,B=L.__lookupGetter__,k=L.__lookupSetter__;F=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,o,i,f;if("object"!=typeof r||null===r||"[object Array]"===N.call(r))throw new TypeError(O("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===N.call(t))throw new TypeError(O("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(B.call(r,e)||k.call(r,e)?(n=r.__proto__,r.__proto__=L,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),i="get"in t,f="set"in t,o&&(i||f))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&I&&I.call(r,e,t.get),f&&P&&P.call(r,e,t.set),r};var C=F;function M(r,e,t){C(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function V(r){return"number"==typeof r}var Y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function G(){return Y&&"symbol"==typeof Symbol.toStringTag}var $=Object.prototype.toString,W=Object.prototype.hasOwnProperty;function Z(r,e){return null!=r&&W.call(r,e)}var J="function"==typeof Symbol?Symbol:void 0,U="function"==typeof J?J.toStringTag:"",X=G()?function(r){var e,t,n;if(null==r)return $.call(r);t=r[U],e=Z(r,U);try{r[U]=void 0}catch(e){return $.call(r)}return n=$.call(r),e?r[U]=t:delete r[U],n}:function(r){return $.call(r)},z=Number,H=z.prototype.toString,K=G();function Q(r){return"object"==typeof r&&(r instanceof z||(K?function(r){try{return H.call(r),!0}catch(r){return!1}}(r):"[object Number]"===X(r)))}function q(r){return V(r)||Q(r)}M(q,"isPrimitive",V),M(q,"isObject",Q);var D=Number.POSITIVE_INFINITY,rr=z.NEGATIVE_INFINITY,er=Math.floor;function tr(r){return er(r)===r}function nr(r){return r<D&&r>rr&&tr(r)}function or(r){return V(r)&&nr(r)}function ir(r){return Q(r)&&nr(r.valueOf())}function fr(r){return or(r)||ir(r)}function ur(r){return or(r)&&r>=0}function ar(r){return ir(r)&&r.valueOf()>=0}function sr(r){return ur(r)||ar(r)}M(fr,"isPrimitive",or),M(fr,"isObject",ir),M(sr,"isPrimitive",ur),M(sr,"isObject",ar);var hr=4294967295;function lr(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&tr(r.length)&&r.length>=0&&r.length<=hr}var cr=9007199254740991;function pr(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&tr(r.length)&&r.length>=0&&r.length<=cr}var wr="function"==typeof ArrayBuffer;function yr(r){return wr&&r instanceof ArrayBuffer||"[object ArrayBuffer]"===X(r)}var gr=Array.isArray?Array.isArray:function(r){return"[object Array]"===X(r)};function br(r){return"object"==typeof r&&null!==r&&!gr(r)}function Er(r){return"string"==typeof r}var dr=String.prototype.valueOf,vr=G();function _r(r){return"object"==typeof r&&(r instanceof String||(vr?function(r){try{return dr.call(r),!0}catch(r){return!1}}(r):"[object String]"===X(r)))}function mr(r){return Er(r)||_r(r)}M(mr,"isPrimitive",Er),M(mr,"isObject",_r);var Rr=/./;function Tr(r){return"boolean"==typeof r}var jr=Boolean,Sr=Boolean.prototype.toString,Ar=G();function xr(r){return"object"==typeof r&&(r instanceof jr||(Ar?function(r){try{return Sr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===X(r)))}function Or(r){return Tr(r)||xr(r)}M(Or,"isPrimitive",Tr),M(Or,"isObject",xr);var Fr="object"==typeof self?self:null,Lr="object"==typeof window?window:null,Nr="object"==typeof globalThis?globalThis:null,Ir=function(r){if(arguments.length){if(!Tr(r))throw new TypeError(O("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(Nr)return Nr;if(Fr)return Fr;if(Lr)return Lr;throw new Error("unexpected error. Unable to resolve global object.")}(),Pr=Ir.document&&Ir.document.childNodes,Br=Int8Array;function kr(){return/^\s*function\s*([^(]*)/i}var Cr=/^\s*function\s*([^(]*)/i;function Mr(r){return null!==r&&"object"==typeof r}function Vr(r){var e,t,n,o;if(("Object"===(t=X(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=Cr.exec(n.toString()))return e[1]}return Mr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}M(kr,"REGEXP",Cr),M(Mr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(O("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!gr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Mr));var Yr="function"==typeof Rr||"object"==typeof Br||"function"==typeof Pr?function(r){return Vr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"==(e=typeof r)?Vr(r).toLowerCase():e};function Gr(r){return"function"===Yr(r)}function $r(r,e){if(!(this instanceof $r))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!V(r))throw new TypeError(O("invalid argument. Real component must be a number. Value: `%s`.",r));if(!V(e))throw new TypeError(O("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return C(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:r}),C(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:e}),this}M($r,"BYTES_PER_ELEMENT",8),M($r.prototype,"BYTES_PER_ELEMENT",8),M($r.prototype,"byteLength",16),M($r.prototype,"toString",(function(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i"})),M($r.prototype,"toJSON",(function(){var r={type:"Complex128"};return r.re=this.re,r.im=this.im,r}));var Wr="function"==typeof Math.fround?Math.fround:null,Zr="function"==typeof Float32Array,Jr="function"==typeof Float32Array?Float32Array:null,Ur="function"==typeof Float32Array?Float32Array:void 0,Xr=function(){var r,e,t;if("function"!=typeof Jr)return!1;try{e=new Jr([1,3.14,-3.14,5e40]),t=e,r=(Zr&&t instanceof Float32Array||"[object Float32Array]"===X(t))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===D}catch(e){r=!1}return r}()?Ur:function(){throw new Error("not implemented")},zr=new Xr(1),Hr="function"==typeof Wr?Wr:function(r){return zr[0]=r,zr[0]};function Kr(r,e){if(!(this instanceof Kr))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!V(r))throw new TypeError(O("invalid argument. Real component must be a number. Value: `%s`.",r));if(!V(e))throw new TypeError(O("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return C(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:Hr(r)}),C(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:Hr(e)}),this}function Qr(r){return r instanceof $r||r instanceof Kr||"object"==typeof r&&null!==r&&"number"==typeof r.re&&"number"==typeof r.im}function qr(r){return tr(r/2)}M(Kr,"BYTES_PER_ELEMENT",4),M(Kr.prototype,"BYTES_PER_ELEMENT",4),M(Kr.prototype,"byteLength",8),M(Kr.prototype,"toString",(function(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i"})),M(Kr.prototype,"toJSON",(function(){var r={type:"Complex64"};return r.re=this.re,r.im=this.im,r}));var Dr=8,re=16;function ee(){return"function"==typeof J&&"symbol"==typeof J("foo")&&Z(J,"iterator")&&"symbol"==typeof J.iterator}var te=ee()?Symbol.iterator:null;function ne(r,e,t){C(r,e,{configurable:!1,enumerable:!1,get:t})}function oe(){var r,e=arguments,t="https://stdlib.io/e/"+e[0]+"?";for(r=1;r<e.length;r++)t+="&arg[]="+encodeURIComponent(e[r]);return t}function ie(r){return r.re}function fe(r){return r.im}var ue="function"==typeof Float64Array,ae="function"==typeof Float64Array?Float64Array:null,se="function"==typeof Float64Array?Float64Array:void 0,he=function(){var r,e,t;if("function"!=typeof ae)return!1;try{e=new ae([1,3.14,-3.14,NaN]),t=e,r=(ue&&t instanceof Float64Array||"[object Float64Array]"===X(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?se:function(){throw new Error("not implemented")},le={float64:function(r,e){return r[e]},float32:function(r,e){return r[e]},int32:function(r,e){return r[e]},int16:function(r,e){return r[e]},int8:function(r,e){return r[e]},uint32:function(r,e){return r[e]},uint16:function(r,e){return r[e]},uint8:function(r,e){return r[e]},uint8c:function(r,e){return r[e]},generic:function(r,e){return r[e]},default:function(r,e){return r[e]}},ce={complex128:function(r,e){return r.get(e)},complex64:function(r,e){return r.get(e)},default:function(r,e){return r.get(e)}};function pe(r){var e,t,n;for(e=[];!(t=r.next()).done;)if(lr(n=t.value)&&n.length>=2)e.push(n[0],n[1]);else{if(!Qr(n))return new TypeError(oe("00R24",n));e.push(ie(n),fe(n))}return e}var we=2*Xr.BYTES_PER_ELEMENT,ye=ee();function ge(r){return r instanceof de||"object"==typeof r&&null!==r&&("Complex64Array"===r.constructor.name||"Complex128Array"===r.constructor.name)&&"number"==typeof r._length&&"object"==typeof r._buffer}function be(r){return r===de||"Complex128Array"===r.name}function Ee(r,e){return new Kr(r[e*=2],r[e+1])}function de(){var r,e,t,n,o,i,f;if(e=arguments.length,!(this instanceof de))return 0===e?new de:1===e?new de(arguments[0]):2===e?new de(arguments[0],arguments[1]):new de(arguments[0],arguments[1],arguments[2]);if(0===e)t=new Xr(0);else if(1===e)if(ur(arguments[0]))t=new Xr(2*arguments[0]);else if(pr(arguments[0]))if((n=(t=arguments[0]).length)&&gr(t)&&Qr(t[0])){if(t=function(r,e){var t,n,o,i;for(t=e.length,i=0,o=0;o<t;o++){if(!Qr(n=e[o]))return null;r[i]=ie(n),r[i+1]=fe(n),i+=2}return r}(new Xr(2*n),t),null===t){if(!qr(n))throw new RangeError(oe("00R26",n));t=new Xr(arguments[0])}}else{if("object"==typeof(f=t)&&null!==f&&"Complex64Array"===f.constructor.name&&f.BYTES_PER_ELEMENT===Dr)i=0,t=new Xr((o=t).buffer,o.byteOffset+o.BYTES_PER_ELEMENT*i,2*(o.length-i));else if(function(r){return"object"==typeof r&&null!==r&&"Complex128Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===re}(t))t=function(r,e){return new he(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}(t,0);else if(!qr(n))throw new RangeError(oe("00R27",n));t=new Xr(t)}else if(yr(arguments[0])){if(!tr((t=arguments[0]).byteLength/we))throw new RangeError(oe("00RE9",we,t.byteLength));t=new Xr(t)}else{if(!br(arguments[0]))throw new TypeError(oe("00R2A",arguments[0]));if(t=arguments[0],!1===ye)throw new TypeError(oe("00R29",t));if(!Gr(t[te]))throw new TypeError(oe("00R2A",t));if(!Gr((t=t[te]()).next))throw new TypeError(oe("00R2A",t));if((t=pe(t))instanceof Error)throw t;t=new Xr(t)}else{if(!yr(t=arguments[0]))throw new TypeError(oe("00R2B",t));if(!ur(r=arguments[1]))throw new TypeError(oe("00R2C",r));if(!tr(r/we))throw new RangeError(oe("00REA",we,r));if(2===e){if(!tr((n=t.byteLength-r)/we))throw new RangeError(oe("00R2E",we,n));t=new Xr(t,r)}else{if(!ur(n=arguments[2]))throw new TypeError(oe("00R2F",n));if(n*we>t.byteLength-r)throw new RangeError(oe("00R2G",n*we));t=new Xr(t,r,2*n)}}return M(this,"_buffer",t),M(this,"_length",t.length/2),this}return M(de,"BYTES_PER_ELEMENT",we),M(de,"name","Complex64Array"),M(de,"from",(function(r){var e,t,n,o,i,f,u,a,s,h,l,c;if(!Gr(this))throw new TypeError(oe("00R01"));if(!be(this))throw new TypeError(oe("00R02"));if((t=arguments.length)>1){if(!Gr(n=arguments[1]))throw new TypeError(oe("00R2H",n));t>2&&(e=arguments[2])}if(ge(r)){if(a=r.length,n){for(i=(o=new this(a))._buffer,c=0,l=0;l<a;l++){if(Qr(h=n.call(e,r.get(l),l)))i[c]=ie(h),i[c+1]=fe(h);else{if(!(lr(h)&&h.length>=2))throw new TypeError(oe("00R25",h));i[c]=h[0],i[c+1]=h[1]}c+=2}return o}return new this(r)}if(pr(r)){if(n){for(a=r.length,u=r.get&&r.set?function(r){var e=ce[r];return"function"==typeof e?e:ce.default}("default"):function(r){var e=le[r];return"function"==typeof e?e:le.default}("default"),l=0;l<a;l++)if(!Qr(u(r,l))){s=!0;break}if(s){if(!qr(a))throw new RangeError(oe("00REB",2,a));for(i=(o=new this(a/2))._buffer,l=0;l<a;l++)i[l]=n.call(e,u(r,l),l);return o}for(i=(o=new this(a))._buffer,c=0,l=0;l<a;l++){if(Qr(h=n.call(e,u(r,l),l)))i[c]=ie(h),i[c+1]=fe(h);else{if(!(lr(h)&&h.length>=2))throw new TypeError(oe("00R25",h));i[c]=h[0],i[c+1]=h[1]}c+=2}return o}return new this(r)}if(br(r)&&ye&&Gr(r[te])){if(!Gr((i=r[te]()).next))throw new TypeError(oe("00R2J",r));if(f=n?function(r,e,t){var n,o,i,f;for(n=[],f=-1;!(o=r.next()).done;)if(f+=1,lr(i=e.call(t,o.value,f))&&i.length>=2)n.push(i[0],i[1]);else{if(!Qr(i))return new TypeError(oe("00R25",i));n.push(ie(i),fe(i))}return n}(i,n,e):pe(i),f instanceof Error)throw f;for(i=(o=new this(a=f.length/2))._buffer,l=0;l<a;l++)i[l]=f[l];return o}throw new TypeError(oe("00R2J",r))})),M(de,"of",(function(){var r,e;if(!Gr(this))throw new TypeError(oe("00R01"));if(!be(this))throw new TypeError(oe("00R02"));for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);return new this(r)})),M(de.prototype,"at",(function(r){if(!ge(this))throw new TypeError(oe("00R02"));if(!tr(r))throw new TypeError(oe("00R8A",r));if(r<0&&(r+=this._length),!(r<0||r>=this._length))return Ee(this._buffer,r)})),ne(de.prototype,"buffer",(function(){return this._buffer.buffer})),ne(de.prototype,"byteLength",(function(){return this._buffer.byteLength})),ne(de.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),M(de.prototype,"BYTES_PER_ELEMENT",de.BYTES_PER_ELEMENT),M(de.prototype,"copyWithin",(function(r,e){if(!ge(this))throw new TypeError(oe("00R02"));return 2===arguments.length?this._buffer.copyWithin(2*r,2*e):this._buffer.copyWithin(2*r,2*e,2*arguments[2]),this})),M(de.prototype,"entries",(function(){var r,e,t,n,o,i,f;if(!ge(this))throw new TypeError(oe("00R02"));return e=this,r=this._buffer,n=this._length,i=-1,f=-2,M(t={},"next",(function(){var e;return i+=1,o||i>=n?{done:!0}:(e=new Kr(r[f+=2],r[f+1]),{value:[i,e],done:!1})})),M(t,"return",(function(r){return o=!0,arguments.length?{value:r,done:!0}:{done:!0}})),te&&M(t,te,(function(){return e.entries()})),t})),M(de.prototype,"every",(function(r,e){var t,n;if(!ge(this))throw new TypeError(oe("00R02"));if(!Gr(r))throw new TypeError(oe("00R3c",r));for(t=this._buffer,n=0;n<this._length;n++)if(!r.call(e,Ee(t,n),n,this))return!1;return!0})),M(de.prototype,"fill",(function(r,e,t){var n,o,i,f,u,a;if(!ge(this))throw new TypeError(oe("00R02"));if(!Qr(r))throw new TypeError(oe("00RFG",r));if(n=this._buffer,o=this._length,arguments.length>1){if(!tr(e))throw new TypeError(oe("00R7f",e));if(e<0&&(e+=o)<0&&(e=0),arguments.length>2){if(!tr(t))throw new TypeError(oe("00R2z",t));t<0&&(t+=o)<0&&(t=0),t>o&&(t=o)}else t=o}else e=0,t=o;for(f=ie(r),u=fe(r),a=e;a<t;a++)n[i=2*a]=f,n[i+1]=u;return this})),M(de.prototype,"filter",(function(r,e){var t,n,o,i;if(!ge(this))throw new TypeError(oe("00R02"));if(!Gr(r))throw new TypeError(oe("00R3c",r));for(t=this._buffer,n=[],o=0;o<this._length;o++)i=Ee(t,o),r.call(e,i,o,this)&&n.push(i);return new this.constructor(n)})),M(de.prototype,"find",(function(r,e){var t,n,o;if(!ge(this))throw new TypeError(oe("00R02"));if(!Gr(r))throw new TypeError(oe("00R3c",r));for(t=this._buffer,n=0;n<this._length;n++)if(o=Ee(t,n),r.call(e,o,n,this))return o})),M(de.prototype,"findIndex",(function(r,e){var t,n,o;if(!ge(this))throw new TypeError(oe("00R02"));if(!Gr(r))throw new TypeError(oe("00R3c",r));for(t=this._buffer,n=0;n<this._length;n++)if(o=Ee(t,n),r.call(e,o,n,this))return n;return-1})),M(de.prototype,"findLast",(function(r,e){var t,n,o;if(!ge(this))throw new TypeError(oe("00R02"));if(!Gr(r))throw new TypeError(oe("00R3c",r));for(t=this._buffer,n=this._length-1;n>=0;n--)if(o=Ee(t,n),r.call(e,o,n,this))return o})),M(de.prototype,"findLastIndex",(function(r,e){var t,n,o;if(!ge(this))throw new TypeError(oe("00R02"));if(!Gr(r))throw new TypeError(oe("00R3c",r));for(t=this._buffer,n=this._length-1;n>=0;n--)if(o=Ee(t,n),r.call(e,o,n,this))return n;return-1})),M(de.prototype,"forEach",(function(r,e){var t,n,o;if(!ge(this))throw new TypeError(oe("00R02"));if(!Gr(r))throw new TypeError(oe("00R3c",r));for(t=this._buffer,n=0;n<this._length;n++)o=Ee(t,n),r.call(e,o,n,this)})),M(de.prototype,"get",(function(r){if(!ge(this))throw new TypeError(oe("00R02"));if(!ur(r))throw new TypeError(oe("00R2K",r));if(!(r>=this._length))return Ee(this._buffer,r)})),M(de.prototype,"includes",(function(r,e){var t,n,o,i,f;if(!ge(this))throw new TypeError(oe("00R02"));if(!Qr(r))throw new TypeError(oe("00RFG",r));if(arguments.length>1){if(!tr(e))throw new TypeError(oe("00R7f",e));e<0&&(e+=this._length)<0&&(e=0)}else e=0;for(o=ie(r),i=fe(r),t=this._buffer,f=e;f<this._length;f++)if(o===t[n=2*f]&&i===t[n+1])return!0;return!1})),M(de.prototype,"indexOf",(function(r,e){var t,n,o,i,f;if(!ge(this))throw new TypeError(oe("00R02"));if(!Qr(r))throw new TypeError(oe("00RFG",r));if(arguments.length>1){if(!tr(e))throw new TypeError(oe("00R7f",e));e<0&&(e+=this._length)<0&&(e=0)}else e=0;for(o=ie(r),i=fe(r),t=this._buffer,f=e;f<this._length;f++)if(o===t[n=2*f]&&i===t[n+1])return f;return-1})),M(de.prototype,"join",(function(r){var e,t,n,o;if(!ge(this))throw new TypeError(oe("00R02"));if(0===arguments.length)n=",";else{if(!Er(r))throw new TypeError(oe("00R3F",r));n=r}for(e=[],t=this._buffer,o=0;o<this._length;o++)e.push(Ee(t,o).toString());return e.join(n)})),M(de.prototype,"lastIndexOf",(function(r,e){var t,n,o,i,f;if(!ge(this))throw new TypeError(oe("00R02"));if(!Qr(r))throw new TypeError(oe("00RFG",r));if(arguments.length>1){if(!tr(e))throw new TypeError(oe("00R7f",e));e>=this._length?e=this._length-1:e<0&&(e+=this._length)}else e=this._length-1;for(o=ie(r),i=fe(r),t=this._buffer,f=e;f>=0;f--)if(o===t[n=2*f]&&i===t[n+1])return f;return-1})),ne(de.prototype,"length",(function(){return this._length})),M(de.prototype,"map",(function(r,e){var t,n,o,i,f;if(!ge(this))throw new TypeError(oe("00R02"));if(!Gr(r))throw new TypeError(oe("00R3c",r));for(n=this._buffer,t=(o=new this.constructor(this._length))._buffer,i=0;i<this._length;i++)if(Qr(f=r.call(e,Ee(n,i),i,this)))t[2*i]=ie(f),t[2*i+1]=fe(f);else{if(!lr(f)||2!==f.length)throw new TypeError(oe("00R25",f));t[2*i]=f[0],t[2*i+1]=f[1]}return o})),M(de.prototype,"reduce",(function(r,e){var t,n,o,i;if(!ge(this))throw new TypeError(oe("00R02"));if(!Gr(r))throw new TypeError(oe("00R3c",r));if(t=this._buffer,o=this._length,arguments.length>1)n=e,i=0;else{if(0===o)throw new Error("invalid operation. If not provided an initial value, an array must contain at least one element.");n=Ee(t,0),i=1}for(;i<o;i++)n=r(n,Ee(t,i),i,this);return n})),M(de.prototype,"reduceRight",(function(r,e){var t,n,o,i;if(!ge(this))throw new TypeError(oe("00R02"));if(!Gr(r))throw new TypeError(oe("00R3c",r));if(t=this._buffer,o=this._length,arguments.length>1)n=e,i=o-1;else{if(0===o)throw new Error("invalid operation. If not provided an initial value, an array must contain at least one element.");n=Ee(t,o-1),i=o-2}for(;i>=0;i--)n=r(n,Ee(t,i),i,this);return n})),M(de.prototype,"reverse",(function(){var r,e,t,n,o,i;if(!ge(this))throw new TypeError(oe("00R02"));for(t=this._length,r=this._buffer,n=er(t/2),o=0;o<n;o++)i=t-o-1,e=r[2*o],r[2*o]=r[2*i],r[2*i]=e,e=r[2*o+1],r[2*o+1]=r[2*i+1],r[2*i+1]=e;return this})),M(de.prototype,"set",(function(r){var e,t,n,o,i,f,u,a,s;if(!ge(this))throw new TypeError(oe("00R02"));if(n=this._buffer,arguments.length>1){if(!ur(t=arguments[1]))throw new TypeError(oe("00R2L",t))}else t=0;if(Qr(r)){if(t>=this._length)throw new RangeError(oe("00R2M",t));return n[t*=2]=ie(r),void(n[t+1]=fe(r))}if(ge(r)){if(t+(f=r._length)>this._length)throw new RangeError(oe("00R03"));if(e=r._buffer,s=n.byteOffset+t*we,e.buffer===n.buffer&&e.byteOffset<s&&e.byteOffset+e.byteLength>s){for(o=new Xr(e.length),a=0;a<e.length;a++)o[a]=e[a];e=o}for(t*=2,s=0,a=0;a<f;a++)n[t]=e[s],n[t+1]=e[s+1],t+=2,s+=2}else{if(!pr(r))throw new TypeError(oe("00R2N",r));for(f=r.length,a=0;a<f;a++)if(!Qr(r[a])){i=!0;break}if(i){if(!qr(f))throw new RangeError(oe("00R26",f));if(t+f/2>this._length)throw new RangeError(oe("00R03"));if(e=r,s=n.byteOffset+t*we,e.buffer===n.buffer&&e.byteOffset<s&&e.byteOffset+e.byteLength>s){for(o=new Xr(f),a=0;a<f;a++)o[a]=e[a];e=o}for(t*=2,f/=2,s=0,a=0;a<f;a++)n[t]=e[s],n[t+1]=e[s+1],t+=2,s+=2;return}if(t+f>this._length)throw new RangeError(oe("00R03"));for(t*=2,a=0;a<f;a++)u=r[a],n[t]=ie(u),n[t+1]=fe(u),t+=2}})),M(de.prototype,"slice",(function(r,e){var t,n,o,i,f,u,a;if(!ge(this))throw new TypeError(oe("00R02"));if(f=this._buffer,u=this._length,0===arguments.length)r=0,e=u;else{if(!tr(r))throw new TypeError(oe("00R7e",r));if(r<0&&(r+=u)<0&&(r=0),1===arguments.length)e=u;else{if(!tr(e))throw new TypeError(oe("00R7f",e));e<0?(e+=u)<0&&(e=0):e>u&&(e=u)}}for(t=r<e?e-r:0,n=(o=new this.constructor(t))._buffer,a=0;a<t;a++)i=2*(a+r),n[2*a]=f[i],n[2*a+1]=f[i+1];return o})),M(de.prototype,"some",(function(r,e){var t,n;if(!ge(this))throw new TypeError(oe("00R02"));if(!Gr(r))throw new TypeError(oe("00R3c",r));for(t=this._buffer,n=0;n<this._length;n++)if(r.call(e,Ee(t,n),n,this))return!0;return!1})),M(de.prototype,"subarray",(function(r,e){var t,n,o;if(!ge(this))throw new TypeError(oe("00R02"));if(n=this._buffer,o=this._length,0===arguments.length)r=0,e=o;else{if(!tr(r))throw new TypeError(oe("00R7e",r));if(r<0&&(r+=o)<0&&(r=0),1===arguments.length)e=o;else{if(!tr(e))throw new TypeError(oe("00R7f",e));e<0?(e+=o)<0&&(e=0):e>o&&(e=o)}}return r>=o?(o=0,t=n.byteLength):r>=e?(o=0,t=n.byteOffset+r*we):(o=e-r,t=n.byteOffset+r*we),new this.constructor(n.buffer,t,o<0?0:o)})),M(de.prototype,"toReversed",(function(){var r,e,t,n,o,i;if(!ge(this))throw new TypeError(oe("00R02"));for(t=this._length,e=new this.constructor(t),n=this._buffer,r=e._buffer,o=0;o<t;o++)i=t-o-1,r[2*o]=n[2*i],r[2*o+1]=n[2*i+1];return e})),M(de.prototype,"toString",(function(){var r,e,t;if(!ge(this))throw new TypeError(oe("00R02"));for(r=[],e=this._buffer,t=0;t<this._length;t++)r.push(Ee(e,t).toString());return r.join(",")})),M(de.prototype,"with",(function(r,e){var t,n,o;if(!ge(this))throw new TypeError(oe("00R02"));if(!tr(r))throw new TypeError(oe("00R7e",r));if(o=this._length,r<0&&(r+=o),r<0||r>=o)throw new RangeError(oe("00RFP",r));if(!Qr(e))throw new TypeError(oe("00RFQ",e));return(t=(n=new this.constructor(this._buffer))._buffer)[2*r]=ie(e),t[2*r+1]=fe(e),n})),de},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).Complex64Array=e();
//# sourceMappingURL=browser.js.map
