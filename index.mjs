// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-array-like-object@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-arraybuffer@v0.1.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-object@v0.1.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-array@v0.1.1-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.1.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-complex-like@v0.1.1-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-even@v0.1.0-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-integer@v0.1.1-esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-iterator-symbol-support@v0.1.1-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@v0.1.1-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@v0.1.0-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@v0.1.1-esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32@v0.1.1-esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";import b from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-realf@v0.1.1-esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-imagf@v0.1.1-esm/index.mjs";import y from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-reinterpret-complex64@v0.1.0-esm/index.mjs";import w from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-reinterpret-complex128@v0.1.1-esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-getter@v0.1.0-esm/index.mjs";import E from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-accessor-getter@v0.1.0-esm/index.mjs";import x from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";import T from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-array-like-object@esm/index.mjs";import _ from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-complex-like@esm/index.mjs";import k from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-realf@esm/index.mjs";import V from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-imagf@esm/index.mjs";function L(e){var t,n,i;for(t=[];!(n=e.next()).done;)if(i=n.value,r(i)&&i.length>=2)t.push(i[0],i[1]);else{if(!o(i))return new TypeError(x("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",i));t.push(b(i),v(i))}return t}function A(e,r,t){var n,i,s,a;for(n=[],a=-1;!(i=e.next()).done;)if(a+=1,s=r.call(t,i.value,a),T(s)&&s.length>=2)n.push(s[0],s[1]);else{if(!o(s))return new TypeError(x("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",s));n.push(b(s),v(s))}return n}function R(e,r){var t,n,i,s;for(t=r.length,s=0,i=0;i<t;i++){if(n=r[i],!_(n))return null;e[s]=k(n),e[s+1]=V(n),s+=2}return e}var B=2*p.BYTES_PER_ELEMENT,M=u();function C(e){return e instanceof P||"object"==typeof e&&null!==e&&("Complex64Array"===e.constructor.name||"Complex128Array"===e.constructor.name)&&"number"==typeof e._length&&"object"==typeof e._buffer}function O(e){return e===P||"Complex128Array"===e.name}function S(e){return"object"==typeof e&&null!==e&&"Complex64Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===B}function F(e){return"object"==typeof e&&null!==e&&"Complex128Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===2*B}function N(e,r){return new g(e[r*=2],e[r+1])}function P(){var r,u,d,g;if(u=arguments.length,!(this instanceof P))return 0===u?new P:1===u?new P(arguments[0]):2===u?new P(arguments[0],arguments[1]):new P(arguments[0],arguments[1],arguments[2]);if(0===u)d=new p(0);else if(1===u)if(e(arguments[0]))d=new p(2*arguments[0]);else if(t(arguments[0]))if((g=(d=arguments[0]).length)&&s(d)&&o(d[0])){if(null===(d=R(new p(2*g),d))){if(!l(g))throw new RangeError(c("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",g));d=new p(arguments[0])}}else{if(S(d))d=y(d,0);else if(F(d))d=w(d,0);else if(!l(g))throw new RangeError(c("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",g));d=new p(d)}else if(n(arguments[0])){if(!f((d=arguments[0]).byteLength/B))throw new RangeError(c("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",B,d.byteLength));d=new p(d)}else{if(!i(arguments[0]))throw new TypeError(c("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));if(d=arguments[0],!1===M)throw new TypeError(c("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",d));if(!a(d[m]))throw new TypeError(c("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",d));if(d=d[m](),!a(d.next))throw new TypeError(c("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",d));if((d=L(d))instanceof Error)throw d;d=new p(d)}else{if(!n(d=arguments[0]))throw new TypeError(c("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",d));if(!e(r=arguments[1]))throw new TypeError(c("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!f(r/B))throw new RangeError(c("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",B,r));if(2===u){if(g=d.byteLength-r,!f(g/B))throw new RangeError(c("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",B,g));d=new p(d,r)}else{if(!e(g=arguments[2]))throw new TypeError(c("invalid argument. Length must be a nonnegative integer. Value: `%s`.",g));if(g*B>d.byteLength-r)throw new RangeError(c("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",g*B));d=new p(d,r,2*g)}}return h(this,"_buffer",d),h(this,"_length",d.length/2),this}h(P,"BYTES_PER_ELEMENT",B),h(P,"name","Complex64Array"),h(P,"from",(function(e){var n,s,f,u,h,d,p,g,y,w,x,T;if(!a(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!O(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((s=arguments.length)>1){if(!a(f=arguments[1]))throw new TypeError(c("invalid argument. Second argument must be a function. Value: `%s`.",f));s>2&&(n=arguments[2])}if(C(e)){if(g=e.length,f){for(h=(u=new this(g))._buffer,T=0,x=0;x<g;x++){if(w=f.call(n,e.get(x),x),o(w))h[T]=b(w),h[T+1]=v(w);else{if(!(r(w)&&w.length>=2))throw new TypeError(c("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",w));h[T]=w[0],h[T+1]=w[1]}T+=2}return u}return new this(e)}if(t(e)){if(f){for(g=e.length,p=e.get&&e.set?E("default"):j("default"),x=0;x<g;x++)if(!o(p(e,x))){y=!0;break}if(y){if(!l(g))throw new RangeError(c("invalid argument. First argument must have a length which is a multiple of %u. Length: `%u`.",2,g));for(h=(u=new this(g/2))._buffer,x=0;x<g;x++)h[x]=f.call(n,p(e,x),x);return u}for(h=(u=new this(g))._buffer,T=0,x=0;x<g;x++){if(w=f.call(n,p(e,x),x),o(w))h[T]=b(w),h[T+1]=v(w);else{if(!(r(w)&&w.length>=2))throw new TypeError(c("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",w));h[T]=w[0],h[T+1]=w[1]}T+=2}return u}return new this(e)}if(i(e)&&M&&a(e[m])){if(h=e[m](),!a(h.next))throw new TypeError(c("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if((d=f?A(h,f,n):L(h))instanceof Error)throw d;for(h=(u=new this(g=d.length/2))._buffer,x=0;x<g;x++)h[x]=d[x];return u}throw new TypeError(c("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))})),h(P,"of",(function(){var e,r;if(!a(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!O(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],r=0;r<arguments.length;r++)e.push(arguments[r]);return new this(e)})),h(P.prototype,"at",(function(e){if(!C(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!f(e))throw new TypeError(c("invalid argument. Must provide an integer. Value: `%s`.",e));if(e<0&&(e+=this._length),!(e<0||e>=this._length))return N(this._buffer,e)})),d(P.prototype,"buffer",(function(){return this._buffer.buffer})),d(P.prototype,"byteLength",(function(){return this._buffer.byteLength})),d(P.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),h(P.prototype,"BYTES_PER_ELEMENT",P.BYTES_PER_ELEMENT),h(P.prototype,"copyWithin",(function(e,r){if(!C(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*e,2*r):this._buffer.copyWithin(2*e,2*r,2*arguments[2]),this})),h(P.prototype,"entries",(function(){var e,r,t,n,i,s,a;if(!C(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return r=this,e=this._buffer,n=this._length,s=-1,a=-2,h(t={},"next",(function(){var r;if(s+=1,i||s>=n)return{done:!0};return r=new g(e[a+=2],e[a+1]),{value:[s,r],done:!1}})),h(t,"return",(function(e){if(i=!0,arguments.length)return{value:e,done:!0};return{done:!0}})),m&&h(t,m,(function(){return r.entries()})),t})),h(P.prototype,"every",(function(e,r){var t,n;if(!C(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!a(e))throw new TypeError(c("invalid argument. First argument must be a function. Value: `%s`.",e));for(t=this._buffer,n=0;n<this._length;n++)if(!e.call(r,N(t,n),n,this))return!1;return!0})),h(P.prototype,"get",(function(r){if(!C(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!e(r))throw new TypeError(c("invalid argument. Must provide a nonnegative integer. Value: `%s`.",r));if(!(r>=this._length))return N(this._buffer,r)})),d(P.prototype,"length",(function(){return this._length})),h(P.prototype,"set",(function(r){var n,i,s,a,f,u,m,h,d;if(!C(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(s=this._buffer,arguments.length>1){if(!e(i=arguments[1]))throw new TypeError(c("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",i))}else i=0;if(o(r)){if(i>=this._length)throw new RangeError(c("invalid argument. Index argument is out-of-bounds. Value: `%u`.",i));return s[i*=2]=b(r),void(s[i+1]=v(r))}if(C(r)){if(i+(u=r._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(n=r._buffer,d=s.byteOffset+i*B,n.buffer===s.buffer&&n.byteOffset<d&&n.byteOffset+n.byteLength>d){for(a=new p(n.length),h=0;h<n.length;h++)a[h]=n[h];n=a}for(i*=2,d=0,h=0;h<u;h++)s[i]=n[d],s[i+1]=n[d+1],i+=2,d+=2}else{if(!t(r))throw new TypeError(c("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",r));for(u=r.length,h=0;h<u;h++)if(!o(r[h])){f=!0;break}if(f){if(!l(u))throw new RangeError(c("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",u));if(i+u/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(n=r,d=s.byteOffset+i*B,n.buffer===s.buffer&&n.byteOffset<d&&n.byteOffset+n.byteLength>d){for(a=new p(u),h=0;h<u;h++)a[h]=n[h];n=a}for(i*=2,u/=2,d=0,h=0;h<u;h++)s[i]=n[d],s[i+1]=n[d+1],i+=2,d+=2;return}if(i+u>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(i*=2,h=0;h<u;h++)m=r[h],s[i]=b(m),s[i+1]=v(m),i+=2}}));export{P as default};
//# sourceMappingURL=index.mjs.map
