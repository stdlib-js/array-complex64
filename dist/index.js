"use strict";var L=function(a,e){return function(){return e||a((e={exports:{}}).exports,e),e.exports}};var O=L(function(dr,F){"use strict";var K=require("@stdlib/assert-is-array-like-object"),Q=require("@stdlib/assert-is-complex-like"),U=require("@stdlib/complex-realf"),X=require("@stdlib/complex-imagf"),Z=require("@stdlib/string-format");function $(a){var e,r,t;for(e=[];r=a.next(),!r.done;)if(t=r.value,K(t)&&t.length>=2)e.push(t[0],t[1]);else if(Q(t))e.push(U(t),X(t));else return new TypeError(Z("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",t));return e}F.exports=$});var B=L(function(Vr,C){"use strict";var I=require("@stdlib/assert-is-array-like-object"),rr=require("@stdlib/assert-is-complex-like"),er=require("@stdlib/complex-realf"),tr=require("@stdlib/complex-imagf"),ir=require("@stdlib/string-format");function nr(a,e,r){var t,i,n,o;for(t=[],o=-1;i=a.next(),!i.done;)if(o+=1,n=e.call(r,i.value,o),I(n)&&n.length>=2)t.push(n[0],n[1]);else if(rr(n))t.push(er(n),tr(n));else return new TypeError(ir("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));return t}C.exports=nr});var N=L(function(xr,M){"use strict";var ar=require("@stdlib/assert-is-complex-like"),or=require("@stdlib/complex-realf"),ur=require("@stdlib/complex-imagf");function sr(a,e){var r,t,i,n;for(r=e.length,n=0,i=0;i<r;i++){if(t=e[i],!ar(t))return null;a[n]=or(t),a[n+1]=ur(t),n+=2}return a}M.exports=sr});var J=L(function(qr,D){"use strict";var A=require("@stdlib/assert-is-nonnegative-integer").isPrimitive,R=require("@stdlib/assert-is-array-like-object"),S=require("@stdlib/assert-is-collection"),z=require("@stdlib/assert-is-arraybuffer"),P=require("@stdlib/assert-is-object"),fr=require("@stdlib/assert-is-array"),lr=require("@stdlib/assert-is-string").isPrimitive,w=require("@stdlib/assert-is-function"),d=require("@stdlib/assert-is-complex-like"),k=require("@stdlib/math-base-assert-is-even"),b=require("@stdlib/math-base-assert-is-integer"),hr=require("@stdlib/assert-has-iterator-symbol-support"),q=require("@stdlib/symbol-iterator"),h=require("@stdlib/utils-define-nonenumerable-read-only-property"),j=require("@stdlib/utils-define-nonenumerable-read-only-accessor"),_=require("@stdlib/array-float32"),Y=require("@stdlib/complex-float32"),f=require("@stdlib/string-format"),V=require("@stdlib/complex-realf"),x=require("@stdlib/complex-imagf"),mr=require("@stdlib/math-base-special-floor"),gr=require("@stdlib/strided-base-reinterpret-complex64"),vr=require("@stdlib/strided-base-reinterpret-complex128"),yr=require("@stdlib/array-base-getter"),pr=require("@stdlib/array-base-accessor-getter"),W=O(),wr=B(),cr=N(),c=_.BYTES_PER_ELEMENT*2,G=hr();function m(a){return a instanceof l||typeof a=="object"&&a!==null&&(a.constructor.name==="Complex64Array"||a.constructor.name==="Complex128Array")&&typeof a._length=="number"&&typeof a._buffer=="object"}function H(a){return a===l||a.name==="Complex128Array"}function br(a){return typeof a=="object"&&a!==null&&a.constructor.name==="Complex64Array"&&a.BYTES_PER_ELEMENT===c}function Er(a){return typeof a=="object"&&a!==null&&a.constructor.name==="Complex128Array"&&a.BYTES_PER_ELEMENT===c*2}function E(a,e){return e*=2,new Y(a[e],a[e+1])}function l(){var a,e,r,t;if(e=arguments.length,!(this instanceof l))return e===0?new l:e===1?new l(arguments[0]):e===2?new l(arguments[0],arguments[1]):new l(arguments[0],arguments[1],arguments[2]);if(e===0)r=new _(0);else if(e===1)if(A(arguments[0]))r=new _(arguments[0]*2);else if(S(arguments[0]))if(r=arguments[0],t=r.length,t&&fr(r)&&d(r[0])){if(r=cr(new _(t*2),r),r===null){if(!k(t))throw new RangeError(f("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",t));r=new _(arguments[0])}}else{if(br(r))r=gr(r,0);else if(Er(r))r=vr(r,0);else if(!k(t))throw new RangeError(f("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",t));r=new _(r)}else if(z(arguments[0])){if(r=arguments[0],!b(r.byteLength/c))throw new RangeError(f("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",c,r.byteLength));r=new _(r)}else if(P(arguments[0])){if(r=arguments[0],G===!1)throw new TypeError(f("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",r));if(!w(r[q]))throw new TypeError(f("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",r));if(r=r[q](),!w(r.next))throw new TypeError(f("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",r));if(r=W(r),r instanceof Error)throw r;r=new _(r)}else throw new TypeError(f("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));else{if(r=arguments[0],!z(r))throw new TypeError(f("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",r));if(a=arguments[1],!A(a))throw new TypeError(f("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",a));if(!b(a/c))throw new RangeError(f("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",c,a));if(e===2){if(t=r.byteLength-a,!b(t/c))throw new RangeError(f("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",c,t));r=new _(r,a)}else{if(t=arguments[2],!A(t))throw new TypeError(f("invalid argument. Length must be a nonnegative integer. Value: `%s`.",t));if(t*c>r.byteLength-a)throw new RangeError(f("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",t*c));r=new _(r,a,t*2)}}return h(this,"_buffer",r),h(this,"_length",r.length/2),this}h(l,"BYTES_PER_ELEMENT",c);h(l,"name","Complex64Array");h(l,"from",function(e){var r,t,i,n,o,u,y,s,p,v,g,T;if(!w(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!H(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(t=arguments.length,t>1){if(i=arguments[1],!w(i))throw new TypeError(f("invalid argument. Second argument must be a function. Value: `%s`.",i));t>2&&(r=arguments[2])}if(m(e)){if(s=e.length,i){for(n=new this(s),o=n._buffer,T=0,g=0;g<s;g++){if(v=i.call(r,e.get(g),g),d(v))o[T]=V(v),o[T+1]=x(v);else if(R(v)&&v.length>=2)o[T]=v[0],o[T+1]=v[1];else throw new TypeError(f("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",v));T+=2}return n}return new this(e)}if(S(e)){if(i){for(s=e.length,e.get&&e.set?y=pr("default"):y=yr("default"),g=0;g<s;g++)if(!d(y(e,g))){p=!0;break}if(p){if(!k(s))throw new RangeError(f("invalid argument. First argument must have a length which is a multiple of %u. Length: `%u`.",2,s));for(n=new this(s/2),o=n._buffer,g=0;g<s;g++)o[g]=i.call(r,y(e,g),g);return n}for(n=new this(s),o=n._buffer,T=0,g=0;g<s;g++){if(v=i.call(r,y(e,g),g),d(v))o[T]=V(v),o[T+1]=x(v);else if(R(v)&&v.length>=2)o[T]=v[0],o[T+1]=v[1];else throw new TypeError(f("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",v));T+=2}return n}return new this(e)}if(P(e)&&G&&w(e[q])){if(o=e[q](),!w(o.next))throw new TypeError(f("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if(i?u=wr(o,i,r):u=W(o),u instanceof Error)throw u;for(s=u.length/2,n=new this(s),o=n._buffer,g=0;g<s;g++)o[g]=u[g];return n}throw new TypeError(f("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))});h(l,"of",function(){var e,r;if(!w(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!H(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],r=0;r<arguments.length;r++)e.push(arguments[r]);return new this(e)});h(l.prototype,"at",function(e){if(!m(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!b(e))throw new TypeError(f("invalid argument. Must provide an integer. Value: `%s`.",e));if(e<0&&(e+=this._length),!(e<0||e>=this._length))return E(this._buffer,e)});j(l.prototype,"buffer",function(){return this._buffer.buffer});j(l.prototype,"byteLength",function(){return this._buffer.byteLength});j(l.prototype,"byteOffset",function(){return this._buffer.byteOffset});h(l.prototype,"BYTES_PER_ELEMENT",l.BYTES_PER_ELEMENT);h(l.prototype,"copyWithin",function(e,r){if(!m(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return arguments.length===2?this._buffer.copyWithin(e*2,r*2):this._buffer.copyWithin(e*2,r*2,arguments[2]*2),this});h(l.prototype,"entries",function(){var e,r,t,i,n,o,u;if(!m(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return r=this,e=this._buffer,i=this._length,o=-1,u=-2,t={},h(t,"next",y),h(t,"return",s),q&&h(t,q,p),t;function y(){var v;return o+=1,n||o>=i?{done:!0}:(u+=2,v=new Y(e[u],e[u+1]),{value:[o,v],done:!1})}function s(v){return n=!0,arguments.length?{value:v,done:!0}:{done:!0}}function p(){return r.entries()}});h(l.prototype,"every",function(e,r){var t,i;if(!m(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!w(e))throw new TypeError(f("invalid argument. First argument must be a function. Value: `%s`.",e));for(t=this._buffer,i=0;i<this._length;i++)if(!e.call(r,E(t,i),i,this))return!1;return!0});h(l.prototype,"fill",function(e,r,t){var i,n,o,u,y,s;if(!m(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!d(e))throw new TypeError(f("invalid argument. First argument must be a complex number. Value: `%s`.",e));if(i=this._buffer,n=this._length,arguments.length>1){if(!b(r))throw new TypeError(f("invalid argument. Second argument must be an integer. Value: `%s`.",r));if(r<0&&(r+=n,r<0&&(r=0)),arguments.length>2){if(!b(t))throw new TypeError(f("invalid argument. Third argument must be an integer. Value: `%s`.",t));t<0&&(t+=n,t<0&&(t=0)),t>n&&(t=n)}else t=n}else r=0,t=n;for(u=V(e),y=x(e),s=r;s<t;s++)o=2*s,i[o]=u,i[o+1]=y;return this});h(l.prototype,"filter",function(e,r){var t,i,n,o;if(!m(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!w(e))throw new TypeError(f("invalid argument. First argument must be a function. Value: `%s`.",e));for(t=this._buffer,i=[],n=0;n<this._length;n++)o=E(t,n),e.call(r,o,n,this)&&i.push(o);return new this.constructor(i)});h(l.prototype,"find",function(e,r){var t,i,n;if(!m(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!w(e))throw new TypeError(f("invalid argument. First argument must be a function. Value: `%s`.",e));for(t=this._buffer,i=0;i<this._length;i++)if(n=E(t,i),e.call(r,n,i,this))return n});h(l.prototype,"findIndex",function(e,r){var t,i,n;if(!m(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!w(e))throw new TypeError(f("invalid argument. First argument must be a function. Value: `%s`.",e));for(t=this._buffer,i=0;i<this._length;i++)if(n=E(t,i),e.call(r,n,i,this))return i;return-1});h(l.prototype,"findLast",function(e,r){var t,i,n;if(!m(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!w(e))throw new TypeError(f("invalid argument. First argument must be a function. Value: `%s`.",e));for(t=this._buffer,i=this._length-1;i>=0;i--)if(n=E(t,i),e.call(r,n,i,this))return n});h(l.prototype,"findLastIndex",function(e,r){var t,i,n;if(!m(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!w(e))throw new TypeError(f("invalid argument. First argument must be a function. Value: `%s`.",e));for(t=this._buffer,i=this._length-1;i>=0;i--)if(n=E(t,i),e.call(r,n,i,this))return i;return-1});h(l.prototype,"forEach",function(e,r){var t,i,n;if(!m(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!w(e))throw new TypeError(f("invalid argument. First argument must be a function. Value: `%s`.",e));for(t=this._buffer,i=0;i<this._length;i++)n=E(t,i),e.call(r,n,i,this)});h(l.prototype,"get",function(e){if(!m(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!A(e))throw new TypeError(f("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));if(!(e>=this._length))return E(this._buffer,e)});h(l.prototype,"includes",function(e,r){var t,i,n,o,u;if(!m(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!d(e))throw new TypeError(f("invalid argument. First argument must be a complex number. Value: `%s`.",e));if(arguments.length>1){if(!b(r))throw new TypeError(f("invalid argument. Second argument must be an integer. Value: `%s`.",r));r<0&&(r+=this._length,r<0&&(r=0))}else r=0;for(n=V(e),o=x(e),t=this._buffer,u=r;u<this._length;u++)if(i=2*u,n===t[i]&&o===t[i+1])return!0;return!1});h(l.prototype,"indexOf",function(e,r){var t,i,n,o,u;if(!m(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!d(e))throw new TypeError(f("invalid argument. First argument must be a complex number. Value: `%s`.",e));if(arguments.length>1){if(!b(r))throw new TypeError(f("invalid argument. Second argument must be an integer. Value: `%s`.",r));r<0&&(r+=this._length,r<0&&(r=0))}else r=0;for(n=V(e),o=x(e),t=this._buffer,u=r;u<this._length;u++)if(i=2*u,n===t[i]&&o===t[i+1])return u;return-1});h(l.prototype,"join",function(e){var r,t,i,n;if(!m(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(arguments.length===0)i=",";else if(lr(e))i=e;else throw new TypeError(f("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[],t=this._buffer,n=0;n<this._length;n++)r.push(E(t,n).toString());return r.join(i)});h(l.prototype,"lastIndexOf",function(e,r){var t,i,n,o,u;if(!m(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!d(e))throw new TypeError(f("invalid argument. First argument must be a complex number. Value: `%s`.",e));if(arguments.length>1){if(!b(r))throw new TypeError(f("invalid argument. Second argument must be an integer. Value: `%s`.",r));r>=this._length?r=this._length-1:r<0&&(r+=this._length)}else r=this._length-1;for(n=V(e),o=x(e),t=this._buffer,u=r;u>=0;u--)if(i=2*u,n===t[i]&&o===t[i+1])return u;return-1});j(l.prototype,"length",function(){return this._length});h(l.prototype,"map",function(e,r){var t,i,n,o,u;if(!m(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!w(e))throw new TypeError(f("invalid argument. First argument must be a function. Value: `%s`.",e));for(i=this._buffer,n=new this.constructor(this._length),t=n._buffer,o=0;o<this._length;o++)if(u=e.call(r,E(i,o),o,this),d(u))t[2*o]=V(u),t[2*o+1]=x(u);else if(R(u)&&u.length===2)t[2*o]=u[0],t[2*o+1]=u[1];else throw new TypeError(f("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",u));return n});h(l.prototype,"reverse",function(){var e,r,t,i,n,o;if(!m(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(t=this._length,e=this._buffer,i=mr(t/2),n=0;n<i;n++)o=t-n-1,r=e[2*n],e[2*n]=e[2*o],e[2*o]=r,r=e[2*n+1],e[2*n+1]=e[2*o+1],e[2*o+1]=r;return this});h(l.prototype,"set",function(e){var r,t,i,n,o,u,y,s,p;if(!m(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(i=this._buffer,arguments.length>1){if(t=arguments[1],!A(t))throw new TypeError(f("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",t))}else t=0;if(d(e)){if(t>=this._length)throw new RangeError(f("invalid argument. Index argument is out-of-bounds. Value: `%u`.",t));t*=2,i[t]=V(e),i[t+1]=x(e);return}if(m(e)){if(u=e._length,t+u>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e._buffer,p=i.byteOffset+t*c,r.buffer===i.buffer&&r.byteOffset<p&&r.byteOffset+r.byteLength>p){for(n=new _(r.length),s=0;s<r.length;s++)n[s]=r[s];r=n}for(t*=2,p=0,s=0;s<u;s++)i[t]=r[p],i[t+1]=r[p+1],t+=2,p+=2;return}if(S(e)){for(u=e.length,s=0;s<u;s++)if(!d(e[s])){o=!0;break}if(o){if(!k(u))throw new RangeError(f("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",u));if(t+u/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e,p=i.byteOffset+t*c,r.buffer===i.buffer&&r.byteOffset<p&&r.byteOffset+r.byteLength>p){for(n=new _(u),s=0;s<u;s++)n[s]=r[s];r=n}for(t*=2,u/=2,p=0,s=0;s<u;s++)i[t]=r[p],i[t+1]=r[p+1],t+=2,p+=2;return}if(t+u>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,s=0;s<u;s++)y=e[s],i[t]=V(y),i[t+1]=x(y),t+=2;return}throw new TypeError(f("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",e))});h(l.prototype,"slice",function(e,r){var t,i,n,o,u,y,s;if(!m(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(u=this._buffer,y=this._length,arguments.length===0)e=0,r=y;else{if(!b(e))throw new TypeError(f("invalid argument. First argument must be an integer. Value: `%s`.",e));if(e<0&&(e+=y,e<0&&(e=0)),arguments.length===1)r=y;else{if(!b(r))throw new TypeError(f("invalid argument. Second argument must be an integer. Value: `%s`.",r));r<0?(r+=y,r<0&&(r=0)):r>y&&(r=y)}}for(e<r?t=r-e:t=0,n=new this.constructor(t),i=n._buffer,s=0;s<t;s++)o=2*(s+e),i[2*s]=u[o],i[2*s+1]=u[o+1];return n});h(l.prototype,"some",function(e,r){var t,i;if(!m(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!w(e))throw new TypeError(f("invalid argument. First argument must be a function. Value: `%s`.",e));for(t=this._buffer,i=0;i<this._length;i++)if(e.call(r,E(t,i),i,this))return!0;return!1});h(l.prototype,"subarray",function(e,r){var t,i,n;if(!m(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(i=this._buffer,n=this._length,arguments.length===0)e=0,r=n;else{if(!b(e))throw new TypeError(f("invalid argument. First argument must be an integer. Value: `%s`.",e));if(e<0&&(e+=n,e<0&&(e=0)),arguments.length===1)r=n;else{if(!b(r))throw new TypeError(f("invalid argument. Second argument must be an integer. Value: `%s`.",r));r<0?(r+=n,r<0&&(r=0)):r>n&&(r=n)}}return e>=n?(n=0,t=i.byteLength):e>=r?(n=0,t=i.byteOffset+e*c):(n=r-e,t=i.byteOffset+e*c),new this.constructor(i.buffer,t,n<0?0:n)});h(l.prototype,"toString",function(){var e,r,t;if(!m(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],r=this._buffer,t=0;t<this._length;t++)e.push(E(r,t).toString());return e.join(",")});h(l.prototype,"with",function(e,r){var t,i,n;if(!m(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!b(e))throw new TypeError(f("invalid argument. First argument must be an integer. Value: `%s`.",e));if(n=this._length,e<0&&(e+=n),e<0||e>=n)throw new RangeError(f("invalid argument. Index argument is out-of-bounds. Value: `%s`.",e));if(!d(r))throw new TypeError(f("invalid argument. Second argument must be a complex number. Value: `%s`.",r));return i=new this.constructor(this._buffer),t=i._buffer,t[2*e]=V(r),t[2*e+1]=x(r),i});D.exports=l});var Tr=J();module.exports=Tr;
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
