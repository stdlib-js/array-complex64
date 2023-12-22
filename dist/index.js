"use strict";var k=function(i,e){return function(){return e||i((e={exports:{}}).exports,e),e.exports}};var C=k(function(dr,j){"use strict";var J=require("@stdlib/assert-is-array-like-object"),K=require("@stdlib/assert-is-complex-like"),Q=require("@stdlib/complex-realf"),U=require("@stdlib/complex-imagf"),X=require("@stdlib/string-format");function Z(i){var e,r,t;for(e=[];r=i.next(),!r.done;)if(t=r.value,J(t)&&t.length>=2)e.push(t[0],t[1]);else if(K(t))e.push(Q(t),U(t));else return new TypeError(X("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",t));return e}j.exports=Z});var M=k(function(Tr,B){"use strict";var $=require("@stdlib/assert-is-array-like-object"),rr=require("@stdlib/assert-is-complex-like"),er=require("@stdlib/complex-realf"),tr=require("@stdlib/complex-imagf"),nr=require("@stdlib/string-format");function ir(i,e,r){var t,n,a,s;for(t=[],s=-1;n=i.next(),!n.done;)if(s+=1,a=e.call(r,n.value,s),$(a)&&a.length>=2)t.push(a[0],a[1]);else if(rr(a))t.push(er(a),tr(a));else return new TypeError(nr("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",a));return t}B.exports=ir});var F=k(function(_r,S){"use strict";var ar=require("@stdlib/assert-is-complex-like"),or=require("@stdlib/complex-realf"),ur=require("@stdlib/complex-imagf");function sr(i,e){var r,t,n,a;for(r=e.length,a=0,n=0;n<r;n++){if(t=e[n],!ar(t))return null;i[a]=or(t),i[a+1]=ur(t),a+=2}return i}S.exports=sr});var D=k(function(qr,I){"use strict";var L=require("@stdlib/assert-is-nonnegative-integer").isPrimitive,N=require("@stdlib/assert-is-array-like-object"),O=require("@stdlib/assert-is-collection"),Y=require("@stdlib/assert-is-arraybuffer"),P=require("@stdlib/assert-is-object"),fr=require("@stdlib/assert-is-array"),E=require("@stdlib/assert-is-function"),d=require("@stdlib/assert-is-complex-like"),V=require("@stdlib/math-base-assert-is-even"),T=require("@stdlib/math-base-assert-is-integer"),lr=require("@stdlib/assert-has-iterator-symbol-support"),_=require("@stdlib/symbol-iterator"),m=require("@stdlib/utils-define-nonenumerable-read-only-property"),R=require("@stdlib/utils-define-nonenumerable-read-only-accessor"),c=require("@stdlib/array-float32"),z=require("@stdlib/complex-float32"),f=require("@stdlib/string-format"),q=require("@stdlib/complex-realf"),x=require("@stdlib/complex-imagf"),hr=require("@stdlib/strided-base-reinterpret-complex64"),gr=require("@stdlib/strided-base-reinterpret-complex128"),mr=require("@stdlib/array-base-getter"),vr=require("@stdlib/array-base-accessor-getter"),W=C(),yr=M(),pr=F(),y=c.BYTES_PER_ELEMENT*2,G=lr();function p(i){return i instanceof l||typeof i=="object"&&i!==null&&(i.constructor.name==="Complex64Array"||i.constructor.name==="Complex128Array")&&typeof i._length=="number"&&typeof i._buffer=="object"}function H(i){return i===l||i.name==="Complex128Array"}function wr(i){return typeof i=="object"&&i!==null&&i.constructor.name==="Complex64Array"&&i.BYTES_PER_ELEMENT===y}function cr(i){return typeof i=="object"&&i!==null&&i.constructor.name==="Complex128Array"&&i.BYTES_PER_ELEMENT===y*2}function A(i,e){return e*=2,new z(i[e],i[e+1])}function l(){var i,e,r,t;if(e=arguments.length,!(this instanceof l))return e===0?new l:e===1?new l(arguments[0]):e===2?new l(arguments[0],arguments[1]):new l(arguments[0],arguments[1],arguments[2]);if(e===0)r=new c(0);else if(e===1)if(L(arguments[0]))r=new c(arguments[0]*2);else if(O(arguments[0]))if(r=arguments[0],t=r.length,t&&fr(r)&&d(r[0])){if(r=pr(new c(t*2),r),r===null){if(!V(t))throw new RangeError(f("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",t));r=new c(arguments[0])}}else{if(wr(r))r=hr(r,0);else if(cr(r))r=gr(r,0);else if(!V(t))throw new RangeError(f("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",t));r=new c(r)}else if(Y(arguments[0])){if(r=arguments[0],!T(r.byteLength/y))throw new RangeError(f("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",y,r.byteLength));r=new c(r)}else if(P(arguments[0])){if(r=arguments[0],G===!1)throw new TypeError(f("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",r));if(!E(r[_]))throw new TypeError(f("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",r));if(r=r[_](),!E(r.next))throw new TypeError(f("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",r));if(r=W(r),r instanceof Error)throw r;r=new c(r)}else throw new TypeError(f("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));else{if(r=arguments[0],!Y(r))throw new TypeError(f("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",r));if(i=arguments[1],!L(i))throw new TypeError(f("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",i));if(!T(i/y))throw new RangeError(f("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",y,i));if(e===2){if(t=r.byteLength-i,!T(t/y))throw new RangeError(f("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",y,t));r=new c(r,i)}else{if(t=arguments[2],!L(t))throw new TypeError(f("invalid argument. Length must be a nonnegative integer. Value: `%s`.",t));if(t*y>r.byteLength-i)throw new RangeError(f("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",t*y));r=new c(r,i,t*2)}}return m(this,"_buffer",r),m(this,"_length",r.length/2),this}m(l,"BYTES_PER_ELEMENT",y);m(l,"name","Complex64Array");m(l,"from",function(e){var r,t,n,a,s,u,b,o,v,g,h,w;if(!E(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!H(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(t=arguments.length,t>1){if(n=arguments[1],!E(n))throw new TypeError(f("invalid argument. Second argument must be a function. Value: `%s`.",n));t>2&&(r=arguments[2])}if(p(e)){if(o=e.length,n){for(a=new this(o),s=a._buffer,w=0,h=0;h<o;h++){if(g=n.call(r,e.get(h),h),d(g))s[w]=q(g),s[w+1]=x(g);else if(N(g)&&g.length>=2)s[w]=g[0],s[w+1]=g[1];else throw new TypeError(f("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",g));w+=2}return a}return new this(e)}if(O(e)){if(n){for(o=e.length,e.get&&e.set?b=vr("default"):b=mr("default"),h=0;h<o;h++)if(!d(b(e,h))){v=!0;break}if(v){if(!V(o))throw new RangeError(f("invalid argument. First argument must have a length which is a multiple of %u. Length: `%u`.",2,o));for(a=new this(o/2),s=a._buffer,h=0;h<o;h++)s[h]=n.call(r,b(e,h),h);return a}for(a=new this(o),s=a._buffer,w=0,h=0;h<o;h++){if(g=n.call(r,b(e,h),h),d(g))s[w]=q(g),s[w+1]=x(g);else if(N(g)&&g.length>=2)s[w]=g[0],s[w+1]=g[1];else throw new TypeError(f("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",g));w+=2}return a}return new this(e)}if(P(e)&&G&&E(e[_])){if(s=e[_](),!E(s.next))throw new TypeError(f("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if(n?u=yr(s,n,r):u=W(s),u instanceof Error)throw u;for(o=u.length/2,a=new this(o),s=a._buffer,h=0;h<o;h++)s[h]=u[h];return a}throw new TypeError(f("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))});m(l,"of",function(){var e,r;if(!E(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!H(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],r=0;r<arguments.length;r++)e.push(arguments[r]);return new this(e)});m(l.prototype,"at",function(e){if(!p(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!T(e))throw new TypeError(f("invalid argument. Must provide an integer. Value: `%s`.",e));if(e<0&&(e+=this._length),!(e<0||e>=this._length))return A(this._buffer,e)});R(l.prototype,"buffer",function(){return this._buffer.buffer});R(l.prototype,"byteLength",function(){return this._buffer.byteLength});R(l.prototype,"byteOffset",function(){return this._buffer.byteOffset});m(l.prototype,"BYTES_PER_ELEMENT",l.BYTES_PER_ELEMENT);m(l.prototype,"copyWithin",function(e,r){if(!p(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return arguments.length===2?this._buffer.copyWithin(e*2,r*2):this._buffer.copyWithin(e*2,r*2,arguments[2]*2),this});m(l.prototype,"entries",function(){var e,r,t,n,a,s,u;if(!p(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return r=this,e=this._buffer,n=this._length,s=-1,u=-2,t={},m(t,"next",b),m(t,"return",o),_&&m(t,_,v),t;function b(){var g;return s+=1,a||s>=n?{done:!0}:(u+=2,g=new z(e[u],e[u+1]),{value:[s,g],done:!1})}function o(g){return a=!0,arguments.length?{value:g,done:!0}:{done:!0}}function v(){return r.entries()}});m(l.prototype,"every",function(e,r){var t,n;if(!p(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!E(e))throw new TypeError(f("invalid argument. First argument must be a function. Value: `%s`.",e));for(t=this._buffer,n=0;n<this._length;n++)if(!e.call(r,A(t,n),n,this))return!1;return!0});m(l.prototype,"find",function(e,r){var t,n,a;if(!p(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!E(e))throw new TypeError(f("invalid argument. First argument must be a function. Value: `%s`.",e));for(t=this._buffer,n=0;n<this._length;n++)if(a=A(t,n),e.call(r,a,n,this))return a});m(l.prototype,"findIndex",function(e,r){var t,n,a;if(!p(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!E(e))throw new TypeError(f("invalid argument. First argument must be a function. Value: `%s`.",e));for(t=this._buffer,n=0;n<this._length;n++)if(a=A(t,n),e.call(r,a,n,this))return n;return-1});m(l.prototype,"get",function(e){if(!p(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!L(e))throw new TypeError(f("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));if(!(e>=this._length))return A(this._buffer,e)});m(l.prototype,"indexOf",function(e,r){var t,n,a,s,u;if(!p(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!d(e))throw new TypeError(f("invalid argument. First argument must be a complex number. Value: `%s`.",e));if(arguments.length>1){if(!T(r))throw new TypeError(f("invalid argument. Second argument must be an integer. Value: `%s`.",r));r<0&&(r+=this._length,r<0&&(r=0))}else r=0;for(a=q(e),s=x(e),t=this._buffer,u=r;u<this._length;u++)if(n=2*u,a===t[n]&&s===t[n+1])return u;return-1});m(l.prototype,"lastIndexOf",function(e,r){var t,n,a,s,u;if(!p(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!d(e))throw new TypeError(f("invalid argument. First argument must be a complex number. Value: `%s`.",e));if(arguments.length>1){if(!T(r))throw new TypeError(f("invalid argument. Second argument must be an integer. Value: `%s`.",r));r>=this._length?r=this._length-1:r<0&&(r+=this._length)}else r=this._length-1;for(a=q(e),s=x(e),t=this._buffer,u=r;u>=0;u--)if(n=2*u,a===t[n]&&s===t[n+1])return u;return-1});R(l.prototype,"length",function(){return this._length});m(l.prototype,"set",function(e){var r,t,n,a,s,u,b,o,v;if(!p(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(t=arguments[1],!L(t))throw new TypeError(f("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",t))}else t=0;if(d(e)){if(t>=this._length)throw new RangeError(f("invalid argument. Index argument is out-of-bounds. Value: `%u`.",t));t*=2,n[t]=q(e),n[t+1]=x(e);return}if(p(e)){if(u=e._length,t+u>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e._buffer,v=n.byteOffset+t*y,r.buffer===n.buffer&&r.byteOffset<v&&r.byteOffset+r.byteLength>v){for(a=new c(r.length),o=0;o<r.length;o++)a[o]=r[o];r=a}for(t*=2,v=0,o=0;o<u;o++)n[t]=r[v],n[t+1]=r[v+1],t+=2,v+=2;return}if(O(e)){for(u=e.length,o=0;o<u;o++)if(!d(e[o])){s=!0;break}if(s){if(!V(u))throw new RangeError(f("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",u));if(t+u/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e,v=n.byteOffset+t*y,r.buffer===n.buffer&&r.byteOffset<v&&r.byteOffset+r.byteLength>v){for(a=new c(u),o=0;o<u;o++)a[o]=r[o];r=a}for(t*=2,u/=2,v=0,o=0;o<u;o++)n[t]=r[v],n[t+1]=r[v+1],t+=2,v+=2;return}if(t+u>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,o=0;o<u;o++)b=e[o],n[t]=q(b),n[t+1]=x(b),t+=2;return}throw new TypeError(f("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",e))});m(l.prototype,"some",function(e,r){var t,n;if(!p(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!E(e))throw new TypeError(f("invalid argument. First argument must be a function. Value: `%s`.",e));for(t=this._buffer,n=0;n<this._length;n++)if(e.call(r,A(t,n),n,this))return!0;return!1});I.exports=l});var br=D();module.exports=br;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
