"use strict";var L=function(u,r){return function(){return r||u((r={exports:{}}).exports,r),r.exports}};var S=L(function(dr,O){"use strict";var J=require("@stdlib/assert-is-array-like-object"),K=require("@stdlib/assert-is-complex-like"),Q=require("@stdlib/complex-realf"),U=require("@stdlib/complex-imagf"),X=require("@stdlib/string-format");function Z(u){var r,e,t;for(r=[];e=u.next(),!e.done;)if(t=e.value,J(t)&&t.length>=2)r.push(t[0],t[1]);else if(K(t))r.push(Q(t),U(t));else return new TypeError(X("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",t));return r}O.exports=Z});var B=L(function(Vr,C){"use strict";var $=require("@stdlib/assert-is-array-like-object"),I=require("@stdlib/assert-is-complex-like"),rr=require("@stdlib/complex-realf"),er=require("@stdlib/complex-imagf"),tr=require("@stdlib/string-format");function ir(u,r,e){var t,i,n,a;for(t=[],a=-1;i=u.next(),!i.done;)if(a+=1,n=r.call(e,i.value,a),$(n)&&n.length>=2)t.push(n[0],n[1]);else if(I(n))t.push(rr(n),er(n));else return new TypeError(tr("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));return t}C.exports=ir});var N=L(function(xr,M){"use strict";var nr=require("@stdlib/assert-is-complex-like"),ar=require("@stdlib/complex-realf"),or=require("@stdlib/complex-imagf");function ur(u,r){var e,t,i,n;for(e=r.length,n=0,i=0;i<e;i++){if(t=r[i],!nr(t))return null;u[n]=ar(t),u[n+1]=or(t),n+=2}return u}M.exports=ur});var D=L(function(qr,H){"use strict";var A=require("@stdlib/assert-is-nonnegative-integer").isPrimitive,R=require("@stdlib/assert-is-array-like-object"),j=require("@stdlib/assert-is-collection"),z=require("@stdlib/assert-is-arraybuffer"),P=require("@stdlib/assert-is-object"),sr=require("@stdlib/assert-is-array"),fr=require("@stdlib/assert-is-string").isPrimitive,c=require("@stdlib/assert-is-function"),d=require("@stdlib/assert-is-complex-like"),k=require("@stdlib/math-base-assert-is-even"),b=require("@stdlib/math-base-assert-is-integer"),lr=require("@stdlib/array-base-assert-is-complex64array"),hr=require("@stdlib/array-base-assert-is-complex128array"),vr=require("@stdlib/assert-has-iterator-symbol-support"),q=require("@stdlib/symbol-iterator"),h=require("@stdlib/utils-define-nonenumerable-read-only-property"),F=require("@stdlib/utils-define-nonenumerable-read-only-accessor"),T=require("@stdlib/array-float32"),mr=require("@stdlib/complex-float32"),f=require("@stdlib/string-format"),V=require("@stdlib/complex-realf"),x=require("@stdlib/complex-imagf"),gr=require("@stdlib/math-base-special-floor"),pr=require("@stdlib/strided-base-reinterpret-complex64"),yr=require("@stdlib/strided-base-reinterpret-complex128"),wr=require("@stdlib/array-base-getter"),cr=require("@stdlib/array-base-accessor-getter"),Y=S(),br=B(),Er=N(),E=T.BYTES_PER_ELEMENT*2,W=vr();function v(u){return u instanceof l||typeof u=="object"&&u!==null&&(u.constructor.name==="Complex64Array"||u.constructor.name==="Complex128Array")&&typeof u._length=="number"&&typeof u._buffer=="object"}function G(u){return u===l||u.name==="Complex128Array"}function y(u,r){return r*=2,new mr(u[r],u[r+1])}function l(){var u,r,e,t;if(r=arguments.length,!(this instanceof l))return r===0?new l:r===1?new l(arguments[0]):r===2?new l(arguments[0],arguments[1]):new l(arguments[0],arguments[1],arguments[2]);if(r===0)e=new T(0);else if(r===1)if(A(arguments[0]))e=new T(arguments[0]*2);else if(j(arguments[0]))if(e=arguments[0],t=e.length,t&&sr(e)&&d(e[0])){if(e=Er(new T(t*2),e),e===null){if(!k(t))throw new RangeError(f("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",t));e=new T(arguments[0])}}else{if(lr(e))e=pr(e,0);else if(hr(e))e=yr(e,0);else if(!k(t))throw new RangeError(f("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",t));e=new T(e)}else if(z(arguments[0])){if(e=arguments[0],!b(e.byteLength/E))throw new RangeError(f("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",E,e.byteLength));e=new T(e)}else if(P(arguments[0])){if(e=arguments[0],W===!1)throw new TypeError(f("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",e));if(!c(e[q]))throw new TypeError(f("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",e));if(e=e[q](),!c(e.next))throw new TypeError(f("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",e));if(e=Y(e),e instanceof Error)throw e;e=new T(e)}else throw new TypeError(f("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));else{if(e=arguments[0],!z(e))throw new TypeError(f("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",e));if(u=arguments[1],!A(u))throw new TypeError(f("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",u));if(!b(u/E))throw new RangeError(f("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",E,u));if(r===2){if(t=e.byteLength-u,!b(t/E))throw new RangeError(f("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",E,t));e=new T(e,u)}else{if(t=arguments[2],!A(t))throw new TypeError(f("invalid argument. Length must be a nonnegative integer. Value: `%s`.",t));if(t*E>e.byteLength-u)throw new RangeError(f("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",t*E));e=new T(e,u,t*2)}}return h(this,"_buffer",e),h(this,"_length",e.length/2),this}h(l,"BYTES_PER_ELEMENT",E);h(l,"name","Complex64Array");h(l,"from",function(r){var e,t,i,n,a,o,g,s,p,w,m,_;if(!c(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!G(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(t=arguments.length,t>1){if(i=arguments[1],!c(i))throw new TypeError(f("invalid argument. Second argument must be a function. Value: `%s`.",i));t>2&&(e=arguments[2])}if(v(r)){if(s=r.length,i){for(n=new this(s),a=n._buffer,_=0,m=0;m<s;m++){if(w=i.call(e,r.get(m),m),d(w))a[_]=V(w),a[_+1]=x(w);else if(R(w)&&w.length>=2)a[_]=w[0],a[_+1]=w[1];else throw new TypeError(f("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",w));_+=2}return n}return new this(r)}if(j(r)){if(i){for(s=r.length,r.get&&r.set?g=cr("default"):g=wr("default"),m=0;m<s;m++)if(!d(g(r,m))){p=!0;break}if(p){if(!k(s))throw new RangeError(f("invalid argument. First argument must have a length which is a multiple of %u. Length: `%u`.",2,s));for(n=new this(s/2),a=n._buffer,m=0;m<s;m++)a[m]=i.call(e,g(r,m),m);return n}for(n=new this(s),a=n._buffer,_=0,m=0;m<s;m++){if(w=i.call(e,g(r,m),m),d(w))a[_]=V(w),a[_+1]=x(w);else if(R(w)&&w.length>=2)a[_]=w[0],a[_+1]=w[1];else throw new TypeError(f("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",w));_+=2}return n}return new this(r)}if(P(r)&&W&&c(r[q])){if(a=r[q](),!c(a.next))throw new TypeError(f("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r));if(i?o=br(a,i,e):o=Y(a),o instanceof Error)throw o;for(s=o.length/2,n=new this(s),a=n._buffer,m=0;m<s;m++)a[m]=o[m];return n}throw new TypeError(f("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r))});h(l,"of",function(){var r,e;if(!c(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!G(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);return new this(r)});h(l.prototype,"at",function(r){if(!v(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!b(r))throw new TypeError(f("invalid argument. Must provide an integer. Value: `%s`.",r));if(r<0&&(r+=this._length),!(r<0||r>=this._length))return y(this._buffer,r)});F(l.prototype,"buffer",function(){return this._buffer.buffer});F(l.prototype,"byteLength",function(){return this._buffer.byteLength});F(l.prototype,"byteOffset",function(){return this._buffer.byteOffset});h(l.prototype,"BYTES_PER_ELEMENT",l.BYTES_PER_ELEMENT);h(l.prototype,"copyWithin",function(r,e){if(!v(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return arguments.length===2?this._buffer.copyWithin(r*2,e*2):this._buffer.copyWithin(r*2,e*2,arguments[2]*2),this});h(l.prototype,"entries",function(){var r,e,t,i,n,a;if(!v(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return r=this,i=this._buffer,t=this._length,a=-1,e={},h(e,"next",o),h(e,"return",g),q&&h(e,q,s),e;function o(){return a+=1,n||a>=t?{done:!0}:{value:[a,y(i,a)],done:!1}}function g(p){return n=!0,arguments.length?{value:p,done:!0}:{done:!0}}function s(){return r.entries()}});h(l.prototype,"every",function(r,e){var t,i;if(!v(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!c(r))throw new TypeError(f("invalid argument. First argument must be a function. Value: `%s`.",r));for(t=this._buffer,i=0;i<this._length;i++)if(!r.call(e,y(t,i),i,this))return!1;return!0});h(l.prototype,"fill",function(r,e,t){var i,n,a,o,g,s;if(!v(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!d(r))throw new TypeError(f("invalid argument. First argument must be a complex number. Value: `%s`.",r));if(i=this._buffer,n=this._length,arguments.length>1){if(!b(e))throw new TypeError(f("invalid argument. Second argument must be an integer. Value: `%s`.",e));if(e<0&&(e+=n,e<0&&(e=0)),arguments.length>2){if(!b(t))throw new TypeError(f("invalid argument. Third argument must be an integer. Value: `%s`.",t));t<0&&(t+=n,t<0&&(t=0)),t>n&&(t=n)}else t=n}else e=0,t=n;for(o=V(r),g=x(r),s=e;s<t;s++)a=2*s,i[a]=o,i[a+1]=g;return this});h(l.prototype,"filter",function(r,e){var t,i,n,a;if(!v(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!c(r))throw new TypeError(f("invalid argument. First argument must be a function. Value: `%s`.",r));for(t=this._buffer,i=[],n=0;n<this._length;n++)a=y(t,n),r.call(e,a,n,this)&&i.push(a);return new this.constructor(i)});h(l.prototype,"find",function(r,e){var t,i,n;if(!v(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!c(r))throw new TypeError(f("invalid argument. First argument must be a function. Value: `%s`.",r));for(t=this._buffer,i=0;i<this._length;i++)if(n=y(t,i),r.call(e,n,i,this))return n});h(l.prototype,"findIndex",function(r,e){var t,i,n;if(!v(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!c(r))throw new TypeError(f("invalid argument. First argument must be a function. Value: `%s`.",r));for(t=this._buffer,i=0;i<this._length;i++)if(n=y(t,i),r.call(e,n,i,this))return i;return-1});h(l.prototype,"findLast",function(r,e){var t,i,n;if(!v(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!c(r))throw new TypeError(f("invalid argument. First argument must be a function. Value: `%s`.",r));for(t=this._buffer,i=this._length-1;i>=0;i--)if(n=y(t,i),r.call(e,n,i,this))return n});h(l.prototype,"findLastIndex",function(r,e){var t,i,n;if(!v(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!c(r))throw new TypeError(f("invalid argument. First argument must be a function. Value: `%s`.",r));for(t=this._buffer,i=this._length-1;i>=0;i--)if(n=y(t,i),r.call(e,n,i,this))return i;return-1});h(l.prototype,"forEach",function(r,e){var t,i,n;if(!v(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!c(r))throw new TypeError(f("invalid argument. First argument must be a function. Value: `%s`.",r));for(t=this._buffer,i=0;i<this._length;i++)n=y(t,i),r.call(e,n,i,this)});h(l.prototype,"get",function(r){if(!v(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!A(r))throw new TypeError(f("invalid argument. Must provide a nonnegative integer. Value: `%s`.",r));if(!(r>=this._length))return y(this._buffer,r)});h(l.prototype,"includes",function(r,e){var t,i,n,a,o;if(!v(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!d(r))throw new TypeError(f("invalid argument. First argument must be a complex number. Value: `%s`.",r));if(arguments.length>1){if(!b(e))throw new TypeError(f("invalid argument. Second argument must be an integer. Value: `%s`.",e));e<0&&(e+=this._length,e<0&&(e=0))}else e=0;for(n=V(r),a=x(r),t=this._buffer,o=e;o<this._length;o++)if(i=2*o,n===t[i]&&a===t[i+1])return!0;return!1});h(l.prototype,"indexOf",function(r,e){var t,i,n,a,o;if(!v(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!d(r))throw new TypeError(f("invalid argument. First argument must be a complex number. Value: `%s`.",r));if(arguments.length>1){if(!b(e))throw new TypeError(f("invalid argument. Second argument must be an integer. Value: `%s`.",e));e<0&&(e+=this._length,e<0&&(e=0))}else e=0;for(n=V(r),a=x(r),t=this._buffer,o=e;o<this._length;o++)if(i=2*o,n===t[i]&&a===t[i+1])return o;return-1});h(l.prototype,"join",function(r){var e,t,i,n;if(!v(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(arguments.length===0)i=",";else if(fr(r))i=r;else throw new TypeError(f("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[],t=this._buffer,n=0;n<this._length;n++)e.push(y(t,n).toString());return e.join(i)});h(l.prototype,"lastIndexOf",function(r,e){var t,i,n,a,o;if(!v(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!d(r))throw new TypeError(f("invalid argument. First argument must be a complex number. Value: `%s`.",r));if(arguments.length>1){if(!b(e))throw new TypeError(f("invalid argument. Second argument must be an integer. Value: `%s`.",e));e>=this._length?e=this._length-1:e<0&&(e+=this._length)}else e=this._length-1;for(n=V(r),a=x(r),t=this._buffer,o=e;o>=0;o--)if(i=2*o,n===t[i]&&a===t[i+1])return o;return-1});F(l.prototype,"length",function(){return this._length});h(l.prototype,"map",function(r,e){var t,i,n,a,o;if(!v(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!c(r))throw new TypeError(f("invalid argument. First argument must be a function. Value: `%s`.",r));for(i=this._buffer,n=new this.constructor(this._length),t=n._buffer,a=0;a<this._length;a++)if(o=r.call(e,y(i,a),a,this),d(o))t[2*a]=V(o),t[2*a+1]=x(o);else if(R(o)&&o.length===2)t[2*a]=o[0],t[2*a+1]=o[1];else throw new TypeError(f("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",o));return n});h(l.prototype,"reduce",function(r,e){var t,i,n,a,o;if(!v(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!c(r))throw new TypeError(f("invalid argument. First argument must be a function. Value: `%s`.",r));if(t=this._buffer,n=this._length,arguments.length>1)i=e,o=0;else{if(n===0)throw new Error("invalid operation. If not provided an initial value, an array must contain at least one element.");i=y(t,0),o=1}for(;o<n;o++)a=y(t,o),i=r(i,a,o,this);return i});h(l.prototype,"reduceRight",function(r,e){var t,i,n,a,o;if(!v(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!c(r))throw new TypeError(f("invalid argument. First argument must be a function. Value: `%s`.",r));if(t=this._buffer,n=this._length,arguments.length>1)i=e,o=n-1;else{if(n===0)throw new Error("invalid operation. If not provided an initial value, an array must contain at least one element.");i=y(t,n-1),o=n-2}for(;o>=0;o--)a=y(t,o),i=r(i,a,o,this);return i});h(l.prototype,"reverse",function(){var r,e,t,i,n,a;if(!v(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(t=this._length,r=this._buffer,i=gr(t/2),n=0;n<i;n++)a=t-n-1,e=r[2*n],r[2*n]=r[2*a],r[2*a]=e,e=r[2*n+1],r[2*n+1]=r[2*a+1],r[2*a+1]=e;return this});h(l.prototype,"set",function(r){var e,t,i,n,a,o,g,s,p;if(!v(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(i=this._buffer,arguments.length>1){if(t=arguments[1],!A(t))throw new TypeError(f("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",t))}else t=0;if(d(r)){if(t>=this._length)throw new RangeError(f("invalid argument. Index argument is out-of-bounds. Value: `%u`.",t));t*=2,i[t]=V(r),i[t+1]=x(r);return}if(v(r)){if(o=r._length,t+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r._buffer,p=i.byteOffset+t*E,e.buffer===i.buffer&&e.byteOffset<p&&e.byteOffset+e.byteLength>p){for(n=new T(e.length),s=0;s<e.length;s++)n[s]=e[s];e=n}for(t*=2,p=0,s=0;s<o;s++)i[t]=e[p],i[t+1]=e[p+1],t+=2,p+=2;return}if(j(r)){for(o=r.length,s=0;s<o;s++)if(!d(r[s])){a=!0;break}if(a){if(!k(o))throw new RangeError(f("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",o));if(t+o/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r,p=i.byteOffset+t*E,e.buffer===i.buffer&&e.byteOffset<p&&e.byteOffset+e.byteLength>p){for(n=new T(o),s=0;s<o;s++)n[s]=e[s];e=n}for(t*=2,o/=2,p=0,s=0;s<o;s++)i[t]=e[p],i[t+1]=e[p+1],t+=2,p+=2;return}if(t+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,s=0;s<o;s++)g=r[s],i[t]=V(g),i[t+1]=x(g),t+=2;return}throw new TypeError(f("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",r))});h(l.prototype,"slice",function(r,e){var t,i,n,a,o,g,s;if(!v(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(o=this._buffer,g=this._length,arguments.length===0)r=0,e=g;else{if(!b(r))throw new TypeError(f("invalid argument. First argument must be an integer. Value: `%s`.",r));if(r<0&&(r+=g,r<0&&(r=0)),arguments.length===1)e=g;else{if(!b(e))throw new TypeError(f("invalid argument. Second argument must be an integer. Value: `%s`.",e));e<0?(e+=g,e<0&&(e=0)):e>g&&(e=g)}}for(r<e?t=e-r:t=0,n=new this.constructor(t),i=n._buffer,s=0;s<t;s++)a=2*(s+r),i[2*s]=o[a],i[2*s+1]=o[a+1];return n});h(l.prototype,"some",function(r,e){var t,i;if(!v(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!c(r))throw new TypeError(f("invalid argument. First argument must be a function. Value: `%s`.",r));for(t=this._buffer,i=0;i<this._length;i++)if(r.call(e,y(t,i),i,this))return!0;return!1});h(l.prototype,"subarray",function(r,e){var t,i,n;if(!v(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(i=this._buffer,n=this._length,arguments.length===0)r=0,e=n;else{if(!b(r))throw new TypeError(f("invalid argument. First argument must be an integer. Value: `%s`.",r));if(r<0&&(r+=n,r<0&&(r=0)),arguments.length===1)e=n;else{if(!b(e))throw new TypeError(f("invalid argument. Second argument must be an integer. Value: `%s`.",e));e<0?(e+=n,e<0&&(e=0)):e>n&&(e=n)}}return r>=n?(n=0,t=i.byteLength):r>=e?(n=0,t=i.byteOffset+r*E):(n=e-r,t=i.byteOffset+r*E),new this.constructor(i.buffer,t,n<0?0:n)});h(l.prototype,"toReversed",function(){var r,e,t,i,n,a;if(!v(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(t=this._length,e=new this.constructor(t),i=this._buffer,r=e._buffer,n=0;n<t;n++)a=t-n-1,r[2*n]=i[2*a],r[2*n+1]=i[2*a+1];return e});h(l.prototype,"toString",function(){var r,e,t;if(!v(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(r=[],e=this._buffer,t=0;t<this._length;t++)r.push(y(e,t).toString());return r.join(",")});h(l.prototype,"values",function(){var r,e,t,i,n,a;if(!v(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return e=this,n=this._buffer,t=this._length,a=-1,r={},h(r,"next",o),h(r,"return",g),q&&h(r,q,s),r;function o(){return a+=1,i||a>=t?{done:!0}:{value:y(n,a),done:!1}}function g(p){return i=!0,arguments.length?{value:p,done:!0}:{done:!0}}function s(){return e.values()}});h(l.prototype,"with",function(r,e){var t,i,n;if(!v(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!b(r))throw new TypeError(f("invalid argument. First argument must be an integer. Value: `%s`.",r));if(n=this._length,r<0&&(r+=n),r<0||r>=n)throw new RangeError(f("invalid argument. Index argument is out-of-bounds. Value: `%s`.",r));if(!d(e))throw new TypeError(f("invalid argument. Second argument must be a complex number. Value: `%s`.",e));return i=new this.constructor(this._buffer),t=i._buffer,t[2*r]=V(e),t[2*r+1]=x(e),i});H.exports=l});var _r=D();module.exports=_r;
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
