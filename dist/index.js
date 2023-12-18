"use strict";var q=function(n,e){return function(){return e||n((e={exports:{}}).exports,e),e.exports}};var B=q(function(dr,V){"use strict";var J=require("@stdlib/assert-is-array-like-object"),K=require("@stdlib/assert-is-complex-like"),Q=require("@stdlib/complex-realf"),U=require("@stdlib/complex-imagf"),X=require("@stdlib/string-format");function Z(n){var e,r,t;for(e=[];r=n.next(),!r.done;)if(t=r.value,J(t)&&t.length>=2)e.push(t[0],t[1]);else if(K(t))e.push(Q(t),U(t));else return new TypeError(X("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",t));return e}V.exports=Z});var M=q(function(Tr,O){"use strict";var $=require("@stdlib/assert-is-array-like-object"),rr=require("@stdlib/assert-is-complex-like"),er=require("@stdlib/complex-realf"),tr=require("@stdlib/complex-imagf"),nr=require("@stdlib/string-format");function ar(n,e,r){var t,a,o,u;for(t=[],u=-1;a=n.next(),!a.done;)if(u+=1,o=e.call(r,a.value,u),$(o)&&o.length>=2)t.push(o[0],o[1]);else if(rr(o))t.push(er(o),tr(o));else return new TypeError(nr("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",o));return t}O.exports=ar});var I=q(function(_r,S){"use strict";var ir=require("@stdlib/assert-is-complex-like"),or=require("@stdlib/complex-realf"),ur=require("@stdlib/complex-imagf");function fr(n,e){var r,t,a,o;for(r=e.length,o=0,a=0;a<r;a++){if(t=e[a],!ir(t))return null;n[o]=or(t),n[o+1]=ur(t),o+=2}return n}S.exports=fr});var D=q(function(qr,H){"use strict";var _=require("@stdlib/assert-is-nonnegative-integer").isPrimitive,N=require("@stdlib/assert-is-array-like-object"),j=require("@stdlib/assert-is-collection"),F=require("@stdlib/assert-is-arraybuffer"),Y=require("@stdlib/assert-is-object"),sr=require("@stdlib/assert-is-array"),b=require("@stdlib/assert-is-function"),d=require("@stdlib/assert-is-complex-like"),A=require("@stdlib/math-base-assert-is-even"),x=require("@stdlib/math-base-assert-is-integer"),lr=require("@stdlib/assert-has-iterator-symbol-support"),T=require("@stdlib/symbol-iterator"),v=require("@stdlib/utils-define-nonenumerable-read-only-property"),R=require("@stdlib/utils-define-nonenumerable-read-only-accessor"),c=require("@stdlib/array-float32"),P=require("@stdlib/complex-float32"),s=require("@stdlib/string-format"),L=require("@stdlib/complex-realf"),k=require("@stdlib/complex-imagf"),mr=require("@stdlib/strided-base-reinterpret-complex64"),gr=require("@stdlib/strided-base-reinterpret-complex128"),hr=require("@stdlib/array-base-getter"),vr=require("@stdlib/array-base-accessor-getter"),W=B(),yr=M(),pr=I(),y=c.BYTES_PER_ELEMENT*2,z=lr();function E(n){return n instanceof m||typeof n=="object"&&n!==null&&(n.constructor.name==="Complex64Array"||n.constructor.name==="Complex128Array")&&typeof n._length=="number"&&typeof n._buffer=="object"}function G(n){return n===m||n.name==="Complex128Array"}function cr(n){return typeof n=="object"&&n!==null&&n.constructor.name==="Complex64Array"&&n.BYTES_PER_ELEMENT===y}function wr(n){return typeof n=="object"&&n!==null&&n.constructor.name==="Complex128Array"&&n.BYTES_PER_ELEMENT===y*2}function C(n,e){return e*=2,new P(n[e],n[e+1])}function m(){var n,e,r,t;if(e=arguments.length,!(this instanceof m))return e===0?new m:e===1?new m(arguments[0]):e===2?new m(arguments[0],arguments[1]):new m(arguments[0],arguments[1],arguments[2]);if(e===0)r=new c(0);else if(e===1)if(_(arguments[0]))r=new c(arguments[0]*2);else if(j(arguments[0]))if(r=arguments[0],t=r.length,t&&sr(r)&&d(r[0])){if(r=pr(new c(t*2),r),r===null){if(!A(t))throw new RangeError(s("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",t));r=new c(arguments[0])}}else{if(cr(r))r=mr(r,0);else if(wr(r))r=gr(r,0);else if(!A(t))throw new RangeError(s("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",t));r=new c(r)}else if(F(arguments[0])){if(r=arguments[0],!x(r.byteLength/y))throw new RangeError(s("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",y,r.byteLength));r=new c(r)}else if(Y(arguments[0])){if(r=arguments[0],z===!1)throw new TypeError(s("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",r));if(!b(r[T]))throw new TypeError(s("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",r));if(r=r[T](),!b(r.next))throw new TypeError(s("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",r));if(r=W(r),r instanceof Error)throw r;r=new c(r)}else throw new TypeError(s("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));else{if(r=arguments[0],!F(r))throw new TypeError(s("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",r));if(n=arguments[1],!_(n))throw new TypeError(s("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",n));if(!x(n/y))throw new RangeError(s("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",y,n));if(e===2){if(t=r.byteLength-n,!x(t/y))throw new RangeError(s("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",y,t));r=new c(r,n)}else{if(t=arguments[2],!_(t))throw new TypeError(s("invalid argument. Length must be a nonnegative integer. Value: `%s`.",t));if(t*y>r.byteLength-n)throw new RangeError(s("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",t*y));r=new c(r,n,t*2)}}return v(this,"_buffer",r),v(this,"_length",r.length/2),this}v(m,"BYTES_PER_ELEMENT",y);v(m,"name","Complex64Array");v(m,"from",function(e){var r,t,a,o,u,f,w,i,h,g,l,p;if(!b(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!G(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(t=arguments.length,t>1){if(a=arguments[1],!b(a))throw new TypeError(s("invalid argument. Second argument must be a function. Value: `%s`.",a));t>2&&(r=arguments[2])}if(E(e)){if(i=e.length,a){for(o=new this(i),u=o._buffer,p=0,l=0;l<i;l++){if(g=a.call(r,e.get(l),l),d(g))u[p]=L(g),u[p+1]=k(g);else if(N(g)&&g.length>=2)u[p]=g[0],u[p+1]=g[1];else throw new TypeError(s("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",g));p+=2}return o}return new this(e)}if(j(e)){if(a){for(i=e.length,e.get&&e.set?w=vr("default"):w=hr("default"),l=0;l<i;l++)if(!d(w(e,l))){h=!0;break}if(h){if(!A(i))throw new RangeError(s("invalid argument. First argument must have a length which is a multiple of %u. Length: `%u`.",2,i));for(o=new this(i/2),u=o._buffer,l=0;l<i;l++)u[l]=a.call(r,w(e,l),l);return o}for(o=new this(i),u=o._buffer,p=0,l=0;l<i;l++){if(g=a.call(r,w(e,l),l),d(g))u[p]=L(g),u[p+1]=k(g);else if(N(g)&&g.length>=2)u[p]=g[0],u[p+1]=g[1];else throw new TypeError(s("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",g));p+=2}return o}return new this(e)}if(Y(e)&&z&&b(e[T])){if(u=e[T](),!b(u.next))throw new TypeError(s("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if(a?f=yr(u,a,r):f=W(u),f instanceof Error)throw f;for(i=f.length/2,o=new this(i),u=o._buffer,l=0;l<i;l++)u[l]=f[l];return o}throw new TypeError(s("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))});v(m,"of",function(){var e,r;if(!b(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!G(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],r=0;r<arguments.length;r++)e.push(arguments[r]);return new this(e)});v(m.prototype,"at",function(e){if(!E(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!x(e))throw new TypeError(s("invalid argument. Must provide an integer. Value: `%s`.",e));if(e<0&&(e+=this._length),!(e<0||e>=this._length))return C(this._buffer,e)});R(m.prototype,"buffer",function(){return this._buffer.buffer});R(m.prototype,"byteLength",function(){return this._buffer.byteLength});R(m.prototype,"byteOffset",function(){return this._buffer.byteOffset});v(m.prototype,"BYTES_PER_ELEMENT",m.BYTES_PER_ELEMENT);v(m.prototype,"copyWithin",function(e,r){if(!E(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return arguments.length===2?this._buffer.copyWithin(e*2,r*2):this._buffer.copyWithin(e*2,r*2,arguments[2]*2),this});v(m.prototype,"entries",function(){var e,r,t,a,o,u,f;if(!E(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return r=this,e=this._buffer,a=this._length,u=-1,f=-2,t={},v(t,"next",w),v(t,"return",i),T&&v(t,T,h),t;function w(){var g;return u+=1,o||u>=a?{done:!0}:(f+=2,g=new P(e[f],e[f+1]),{value:[u,g],done:!1})}function i(g){return o=!0,arguments.length?{value:g,done:!0}:{done:!0}}function h(){return r.entries()}});v(m.prototype,"every",function(e,r){var t,a;if(!E(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!b(e))throw new TypeError(s("invalid argument. First argument must be a function. Value: `%s`.",e));for(t=this._buffer,a=0;a<this._length;a++)if(!e.call(r,C(t,a),a,this))return!1;return!0});v(m.prototype,"get",function(e){if(!E(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!_(e))throw new TypeError(s("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));if(!(e>=this._length))return C(this._buffer,e)});R(m.prototype,"length",function(){return this._length});v(m.prototype,"set",function(e){var r,t,a,o,u,f,w,i,h;if(!E(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(a=this._buffer,arguments.length>1){if(t=arguments[1],!_(t))throw new TypeError(s("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",t))}else t=0;if(d(e)){if(t>=this._length)throw new RangeError(s("invalid argument. Index argument is out-of-bounds. Value: `%u`.",t));t*=2,a[t]=L(e),a[t+1]=k(e);return}if(E(e)){if(f=e._length,t+f>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e._buffer,h=a.byteOffset+t*y,r.buffer===a.buffer&&r.byteOffset<h&&r.byteOffset+r.byteLength>h){for(o=new c(r.length),i=0;i<r.length;i++)o[i]=r[i];r=o}for(t*=2,h=0,i=0;i<f;i++)a[t]=r[h],a[t+1]=r[h+1],t+=2,h+=2;return}if(j(e)){for(f=e.length,i=0;i<f;i++)if(!d(e[i])){u=!0;break}if(u){if(!A(f))throw new RangeError(s("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",f));if(t+f/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e,h=a.byteOffset+t*y,r.buffer===a.buffer&&r.byteOffset<h&&r.byteOffset+r.byteLength>h){for(o=new c(f),i=0;i<f;i++)o[i]=r[i];r=o}for(t*=2,f/=2,h=0,i=0;i<f;i++)a[t]=r[h],a[t+1]=r[h+1],t+=2,h+=2;return}if(t+f>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,i=0;i<f;i++)w=e[i],a[t]=L(w),a[t+1]=k(w),t+=2;return}throw new TypeError(s("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",e))});H.exports=m});var br=D();module.exports=br;
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
