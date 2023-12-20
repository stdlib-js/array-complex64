"use strict";var L=function(n,e){return function(){return e||n((e={exports:{}}).exports,e),e.exports}};var C=L(function(dr,j){"use strict";var K=require("@stdlib/assert-is-array-like-object"),Q=require("@stdlib/assert-is-complex-like"),U=require("@stdlib/complex-realf"),X=require("@stdlib/complex-imagf"),Z=require("@stdlib/string-format");function $(n){var e,r,t;for(e=[];r=n.next(),!r.done;)if(t=r.value,K(t)&&t.length>=2)e.push(t[0],t[1]);else if(Q(t))e.push(U(t),X(t));else return new TypeError(Z("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",t));return e}j.exports=$});var M=L(function(Tr,B){"use strict";var I=require("@stdlib/assert-is-array-like-object"),rr=require("@stdlib/assert-is-complex-like"),er=require("@stdlib/complex-realf"),tr=require("@stdlib/complex-imagf"),nr=require("@stdlib/string-format");function ir(n,e,r){var t,i,a,s;for(t=[],s=-1;i=n.next(),!i.done;)if(s+=1,a=e.call(r,i.value,s),I(a)&&a.length>=2)t.push(a[0],a[1]);else if(rr(a))t.push(er(a),tr(a));else return new TypeError(nr("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",a));return t}B.exports=ir});var F=L(function(_r,S){"use strict";var ar=require("@stdlib/assert-is-complex-like"),or=require("@stdlib/complex-realf"),ur=require("@stdlib/complex-imagf");function sr(n,e){var r,t,i,a;for(r=e.length,a=0,i=0;i<r;i++){if(t=e[i],!ar(t))return null;n[a]=or(t),n[a+1]=ur(t),a+=2}return n}S.exports=sr});var J=L(function(qr,D){"use strict";var x=require("@stdlib/assert-is-nonnegative-integer").isPrimitive,N=require("@stdlib/assert-is-array-like-object"),O=require("@stdlib/assert-is-collection"),Y=require("@stdlib/assert-is-arraybuffer"),P=require("@stdlib/assert-is-object"),fr=require("@stdlib/assert-is-array"),E=require("@stdlib/assert-is-function"),d=require("@stdlib/assert-is-complex-like"),k=require("@stdlib/math-base-assert-is-even"),T=require("@stdlib/math-base-assert-is-integer"),lr=require("@stdlib/assert-has-iterator-symbol-support"),_=require("@stdlib/symbol-iterator"),v=require("@stdlib/utils-define-nonenumerable-read-only-property"),V=require("@stdlib/utils-define-nonenumerable-read-only-accessor"),w=require("@stdlib/array-float32"),W=require("@stdlib/complex-float32"),f=require("@stdlib/string-format"),q=require("@stdlib/complex-realf"),A=require("@stdlib/complex-imagf"),gr=require("@stdlib/strided-base-reinterpret-complex64"),hr=require("@stdlib/strided-base-reinterpret-complex128"),mr=require("@stdlib/array-base-getter"),vr=require("@stdlib/array-base-accessor-getter"),z=C(),yr=M(),pr=F(),y=w.BYTES_PER_ELEMENT*2,G=lr();function b(n){return n instanceof l||typeof n=="object"&&n!==null&&(n.constructor.name==="Complex64Array"||n.constructor.name==="Complex128Array")&&typeof n._length=="number"&&typeof n._buffer=="object"}function H(n){return n===l||n.name==="Complex128Array"}function wr(n){return typeof n=="object"&&n!==null&&n.constructor.name==="Complex64Array"&&n.BYTES_PER_ELEMENT===y}function cr(n){return typeof n=="object"&&n!==null&&n.constructor.name==="Complex128Array"&&n.BYTES_PER_ELEMENT===y*2}function R(n,e){return e*=2,new W(n[e],n[e+1])}function l(){var n,e,r,t;if(e=arguments.length,!(this instanceof l))return e===0?new l:e===1?new l(arguments[0]):e===2?new l(arguments[0],arguments[1]):new l(arguments[0],arguments[1],arguments[2]);if(e===0)r=new w(0);else if(e===1)if(x(arguments[0]))r=new w(arguments[0]*2);else if(O(arguments[0]))if(r=arguments[0],t=r.length,t&&fr(r)&&d(r[0])){if(r=pr(new w(t*2),r),r===null){if(!k(t))throw new RangeError(f("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",t));r=new w(arguments[0])}}else{if(wr(r))r=gr(r,0);else if(cr(r))r=hr(r,0);else if(!k(t))throw new RangeError(f("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",t));r=new w(r)}else if(Y(arguments[0])){if(r=arguments[0],!T(r.byteLength/y))throw new RangeError(f("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",y,r.byteLength));r=new w(r)}else if(P(arguments[0])){if(r=arguments[0],G===!1)throw new TypeError(f("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",r));if(!E(r[_]))throw new TypeError(f("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",r));if(r=r[_](),!E(r.next))throw new TypeError(f("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",r));if(r=z(r),r instanceof Error)throw r;r=new w(r)}else throw new TypeError(f("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));else{if(r=arguments[0],!Y(r))throw new TypeError(f("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",r));if(n=arguments[1],!x(n))throw new TypeError(f("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",n));if(!T(n/y))throw new RangeError(f("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",y,n));if(e===2){if(t=r.byteLength-n,!T(t/y))throw new RangeError(f("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",y,t));r=new w(r,n)}else{if(t=arguments[2],!x(t))throw new TypeError(f("invalid argument. Length must be a nonnegative integer. Value: `%s`.",t));if(t*y>r.byteLength-n)throw new RangeError(f("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",t*y));r=new w(r,n,t*2)}}return v(this,"_buffer",r),v(this,"_length",r.length/2),this}v(l,"BYTES_PER_ELEMENT",y);v(l,"name","Complex64Array");v(l,"from",function(e){var r,t,i,a,s,u,c,o,m,h,g,p;if(!E(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!H(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(t=arguments.length,t>1){if(i=arguments[1],!E(i))throw new TypeError(f("invalid argument. Second argument must be a function. Value: `%s`.",i));t>2&&(r=arguments[2])}if(b(e)){if(o=e.length,i){for(a=new this(o),s=a._buffer,p=0,g=0;g<o;g++){if(h=i.call(r,e.get(g),g),d(h))s[p]=q(h),s[p+1]=A(h);else if(N(h)&&h.length>=2)s[p]=h[0],s[p+1]=h[1];else throw new TypeError(f("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",h));p+=2}return a}return new this(e)}if(O(e)){if(i){for(o=e.length,e.get&&e.set?c=vr("default"):c=mr("default"),g=0;g<o;g++)if(!d(c(e,g))){m=!0;break}if(m){if(!k(o))throw new RangeError(f("invalid argument. First argument must have a length which is a multiple of %u. Length: `%u`.",2,o));for(a=new this(o/2),s=a._buffer,g=0;g<o;g++)s[g]=i.call(r,c(e,g),g);return a}for(a=new this(o),s=a._buffer,p=0,g=0;g<o;g++){if(h=i.call(r,c(e,g),g),d(h))s[p]=q(h),s[p+1]=A(h);else if(N(h)&&h.length>=2)s[p]=h[0],s[p+1]=h[1];else throw new TypeError(f("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",h));p+=2}return a}return new this(e)}if(P(e)&&G&&E(e[_])){if(s=e[_](),!E(s.next))throw new TypeError(f("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if(i?u=yr(s,i,r):u=z(s),u instanceof Error)throw u;for(o=u.length/2,a=new this(o),s=a._buffer,g=0;g<o;g++)s[g]=u[g];return a}throw new TypeError(f("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))});v(l,"of",function(){var e,r;if(!E(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!H(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],r=0;r<arguments.length;r++)e.push(arguments[r]);return new this(e)});v(l.prototype,"at",function(e){if(!b(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!T(e))throw new TypeError(f("invalid argument. Must provide an integer. Value: `%s`.",e));if(e<0&&(e+=this._length),!(e<0||e>=this._length))return R(this._buffer,e)});V(l.prototype,"buffer",function(){return this._buffer.buffer});V(l.prototype,"byteLength",function(){return this._buffer.byteLength});V(l.prototype,"byteOffset",function(){return this._buffer.byteOffset});v(l.prototype,"BYTES_PER_ELEMENT",l.BYTES_PER_ELEMENT);v(l.prototype,"copyWithin",function(e,r){if(!b(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return arguments.length===2?this._buffer.copyWithin(e*2,r*2):this._buffer.copyWithin(e*2,r*2,arguments[2]*2),this});v(l.prototype,"entries",function(){var e,r,t,i,a,s,u;if(!b(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return r=this,e=this._buffer,i=this._length,s=-1,u=-2,t={},v(t,"next",c),v(t,"return",o),_&&v(t,_,m),t;function c(){var h;return s+=1,a||s>=i?{done:!0}:(u+=2,h=new W(e[u],e[u+1]),{value:[s,h],done:!1})}function o(h){return a=!0,arguments.length?{value:h,done:!0}:{done:!0}}function m(){return r.entries()}});v(l.prototype,"every",function(e,r){var t,i;if(!b(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!E(e))throw new TypeError(f("invalid argument. First argument must be a function. Value: `%s`.",e));for(t=this._buffer,i=0;i<this._length;i++)if(!e.call(r,R(t,i),i,this))return!1;return!0});v(l.prototype,"get",function(e){if(!b(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!x(e))throw new TypeError(f("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));if(!(e>=this._length))return R(this._buffer,e)});v(l.prototype,"indexOf",function(e,r){var t,i,a,s,u;if(!b(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!d(e))throw new TypeError(f("invalid argument. First argument must be a complex number. Value: `%s`.",e));if(arguments.length>1){if(!T(r))throw new TypeError(f("invalid argument. Second argument must be an integer. Value: `%s`.",r));r<0&&(r+=this._length,r<0&&(r=0))}else r=0;for(a=q(e),s=A(e),t=this._buffer,u=r;u<this._length;u++)if(i=2*u,a===t[i]&&s===t[i+1])return u;return-1});v(l.prototype,"lastIndexOf",function(e,r){var t,i,a,s,u;if(!b(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!d(e))throw new TypeError(f("invalid argument. First argument must be a complex number. Value: `%s`.",e));if(arguments.length>1){if(!T(r))throw new TypeError(f("invalid argument. Second argument must be an integer. Value: `%s`.",r));r>=this._length?r=this._length-1:r<0&&(r+=this._length)}else r=this._length-1;for(a=q(e),s=A(e),t=this._buffer,u=r;u>=0;u--)if(i=2*u,a===t[i]&&s===t[i+1])return u;return-1});V(l.prototype,"length",function(){return this._length});v(l.prototype,"set",function(e){var r,t,i,a,s,u,c,o,m;if(!b(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(i=this._buffer,arguments.length>1){if(t=arguments[1],!x(t))throw new TypeError(f("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",t))}else t=0;if(d(e)){if(t>=this._length)throw new RangeError(f("invalid argument. Index argument is out-of-bounds. Value: `%u`.",t));t*=2,i[t]=q(e),i[t+1]=A(e);return}if(b(e)){if(u=e._length,t+u>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e._buffer,m=i.byteOffset+t*y,r.buffer===i.buffer&&r.byteOffset<m&&r.byteOffset+r.byteLength>m){for(a=new w(r.length),o=0;o<r.length;o++)a[o]=r[o];r=a}for(t*=2,m=0,o=0;o<u;o++)i[t]=r[m],i[t+1]=r[m+1],t+=2,m+=2;return}if(O(e)){for(u=e.length,o=0;o<u;o++)if(!d(e[o])){s=!0;break}if(s){if(!k(u))throw new RangeError(f("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",u));if(t+u/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e,m=i.byteOffset+t*y,r.buffer===i.buffer&&r.byteOffset<m&&r.byteOffset+r.byteLength>m){for(a=new w(u),o=0;o<u;o++)a[o]=r[o];r=a}for(t*=2,u/=2,m=0,o=0;o<u;o++)i[t]=r[m],i[t+1]=r[m+1],t+=2,m+=2;return}if(t+u>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,o=0;o<u;o++)c=e[o],i[t]=q(c),i[t+1]=A(c),t+=2;return}throw new TypeError(f("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",e))});v(l.prototype,"some",function(e,r){var t,i;if(!b(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!E(e))throw new TypeError(f("invalid argument. First argument must be a function. Value: `%s`.",e));for(t=this._buffer,i=0;i<this._length;i++)if(e.call(r,R(t,i),i,this))return!0;return!1});D.exports=l});var br=J();module.exports=br;
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
