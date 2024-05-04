"use strict";var A=function(u,e){return function(){return e||u((e={exports:{}}).exports,e),e.exports}};var C=A(function(xr,O){"use strict";var K=require("@stdlib/assert-is-array-like-object"),Q=require("@stdlib/assert-is-complex-like"),U=require("@stdlib/complex-realf"),X=require("@stdlib/complex-imagf"),Z=require("@stdlib/string-format");function $(u){var e,r,t;for(e=[];r=u.next(),!r.done;)if(t=r.value,K(t)&&t.length>=2)e.push(t[0],t[1]);else if(Q(t))e.push(U(t),X(t));else return new TypeError(Z("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",t));return e}O.exports=$});var M=A(function(Vr,B){"use strict";var I=require("@stdlib/assert-is-array-like-object"),rr=require("@stdlib/assert-is-complex-like"),er=require("@stdlib/complex-realf"),tr=require("@stdlib/complex-imagf"),ir=require("@stdlib/string-format");function nr(u,e,r){var t,i,n,a;for(t=[],a=-1;i=u.next(),!i.done;)if(a+=1,n=e.call(r,i.value,a),I(n)&&n.length>=2)t.push(n[0],n[1]);else if(rr(n))t.push(er(n),tr(n));else return new TypeError(ir("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));return t}B.exports=nr});var z=A(function(qr,N){"use strict";var ar=require("@stdlib/assert-is-complex-like"),or=require("@stdlib/complex-realf"),ur=require("@stdlib/complex-imagf");function sr(u,e){var r,t,i,n;for(r=e.length,n=0,i=0;i<r;i++){if(t=e[i],!ar(t))return null;u[n]=or(t),u[n+1]=ur(t),n+=2}return u}N.exports=sr});var J=A(function(Lr,D){"use strict";var L=require("@stdlib/assert-is-nonnegative-integer").isPrimitive,R=require("@stdlib/assert-is-array-like-object"),S=require("@stdlib/assert-is-collection"),P=require("@stdlib/assert-is-arraybuffer"),j=require("@stdlib/assert-is-object"),fr=require("@stdlib/assert-is-array"),lr=require("@stdlib/assert-is-string-array").primitives,Y=require("@stdlib/assert-is-string").isPrimitive,c=require("@stdlib/assert-is-function"),d=require("@stdlib/assert-is-complex-like"),k=require("@stdlib/math-base-assert-is-even"),b=require("@stdlib/math-base-assert-is-integer"),hr=require("@stdlib/array-base-assert-is-complex64array"),vr=require("@stdlib/array-base-assert-is-complex128array"),mr=require("@stdlib/assert-has-iterator-symbol-support"),x=require("@stdlib/symbol-iterator"),h=require("@stdlib/utils-define-nonenumerable-read-only-property"),F=require("@stdlib/utils-define-nonenumerable-read-only-accessor"),_=require("@stdlib/array-float32"),gr=require("@stdlib/complex-float32"),f=require("@stdlib/string-format"),V=require("@stdlib/complex-realf"),q=require("@stdlib/complex-imagf"),yr=require("@stdlib/math-base-special-floor"),pr=require("@stdlib/strided-base-reinterpret-complex64"),wr=require("@stdlib/strided-base-reinterpret-complex128"),cr=require("@stdlib/array-base-getter"),br=require("@stdlib/array-base-accessor-getter"),W=C(),Er=M(),Tr=z(),E=_.BYTES_PER_ELEMENT*2,G=mr();function v(u){return u instanceof l||typeof u=="object"&&u!==null&&(u.constructor.name==="Complex64Array"||u.constructor.name==="Complex128Array")&&typeof u._length=="number"&&typeof u._buffer=="object"}function H(u){return u===l||u.name==="Complex128Array"}function p(u,e){return e*=2,new gr(u[e],u[e+1])}function l(){var u,e,r,t;if(e=arguments.length,!(this instanceof l))return e===0?new l:e===1?new l(arguments[0]):e===2?new l(arguments[0],arguments[1]):new l(arguments[0],arguments[1],arguments[2]);if(e===0)r=new _(0);else if(e===1)if(L(arguments[0]))r=new _(arguments[0]*2);else if(S(arguments[0]))if(r=arguments[0],t=r.length,t&&fr(r)&&d(r[0])){if(r=Tr(new _(t*2),r),r===null){if(!k(t))throw new RangeError(f("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",t));r=new _(arguments[0])}}else{if(hr(r))r=pr(r,0);else if(vr(r))r=wr(r,0);else if(!k(t))throw new RangeError(f("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",t));r=new _(r)}else if(P(arguments[0])){if(r=arguments[0],!b(r.byteLength/E))throw new RangeError(f("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",E,r.byteLength));r=new _(r)}else if(j(arguments[0])){if(r=arguments[0],G===!1)throw new TypeError(f("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",r));if(!c(r[x]))throw new TypeError(f("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",r));if(r=r[x](),!c(r.next))throw new TypeError(f("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",r));if(r=W(r),r instanceof Error)throw r;r=new _(r)}else throw new TypeError(f("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));else{if(r=arguments[0],!P(r))throw new TypeError(f("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",r));if(u=arguments[1],!L(u))throw new TypeError(f("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",u));if(!b(u/E))throw new RangeError(f("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",E,u));if(e===2){if(t=r.byteLength-u,!b(t/E))throw new RangeError(f("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",E,t));r=new _(r,u)}else{if(t=arguments[2],!L(t))throw new TypeError(f("invalid argument. Length must be a nonnegative integer. Value: `%s`.",t));if(t*E>r.byteLength-u)throw new RangeError(f("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",t*E));r=new _(r,u,t*2)}}return h(this,"_buffer",r),h(this,"_length",r.length/2),this}h(l,"BYTES_PER_ELEMENT",E);h(l,"name","Complex64Array");h(l,"from",function(e){var r,t,i,n,a,o,m,s,y,w,g,T;if(!c(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!H(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(t=arguments.length,t>1){if(i=arguments[1],!c(i))throw new TypeError(f("invalid argument. Second argument must be a function. Value: `%s`.",i));t>2&&(r=arguments[2])}if(v(e)){if(s=e.length,i){for(n=new this(s),a=n._buffer,T=0,g=0;g<s;g++){if(w=i.call(r,e.get(g),g),d(w))a[T]=V(w),a[T+1]=q(w);else if(R(w)&&w.length>=2)a[T]=w[0],a[T+1]=w[1];else throw new TypeError(f("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",w));T+=2}return n}return new this(e)}if(S(e)){if(i){for(s=e.length,e.get&&e.set?m=br("default"):m=cr("default"),g=0;g<s;g++)if(!d(m(e,g))){y=!0;break}if(y){if(!k(s))throw new RangeError(f("invalid argument. First argument must have a length which is a multiple of %u. Length: `%u`.",2,s));for(n=new this(s/2),a=n._buffer,g=0;g<s;g++)a[g]=i.call(r,m(e,g),g);return n}for(n=new this(s),a=n._buffer,T=0,g=0;g<s;g++){if(w=i.call(r,m(e,g),g),d(w))a[T]=V(w),a[T+1]=q(w);else if(R(w)&&w.length>=2)a[T]=w[0],a[T+1]=w[1];else throw new TypeError(f("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",w));T+=2}return n}return new this(e)}if(j(e)&&G&&c(e[x])){if(a=e[x](),!c(a.next))throw new TypeError(f("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if(i?o=Er(a,i,r):o=W(a),o instanceof Error)throw o;for(s=o.length/2,n=new this(s),a=n._buffer,g=0;g<s;g++)a[g]=o[g];return n}throw new TypeError(f("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))});h(l,"of",function(){var e,r;if(!c(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!H(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],r=0;r<arguments.length;r++)e.push(arguments[r]);return new this(e)});h(l.prototype,"at",function(e){if(!v(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!b(e))throw new TypeError(f("invalid argument. Must provide an integer. Value: `%s`.",e));if(e<0&&(e+=this._length),!(e<0||e>=this._length))return p(this._buffer,e)});F(l.prototype,"buffer",function(){return this._buffer.buffer});F(l.prototype,"byteLength",function(){return this._buffer.byteLength});F(l.prototype,"byteOffset",function(){return this._buffer.byteOffset});h(l.prototype,"BYTES_PER_ELEMENT",l.BYTES_PER_ELEMENT);h(l.prototype,"copyWithin",function(e,r){if(!v(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return arguments.length===2?this._buffer.copyWithin(e*2,r*2):this._buffer.copyWithin(e*2,r*2,arguments[2]*2),this});h(l.prototype,"entries",function(){var e,r,t,i,n,a;if(!v(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return e=this,i=this._buffer,t=this._length,a=-1,r={},h(r,"next",o),h(r,"return",m),x&&h(r,x,s),r;function o(){return a+=1,n||a>=t?{done:!0}:{value:[a,p(i,a)],done:!1}}function m(y){return n=!0,arguments.length?{value:y,done:!0}:{done:!0}}function s(){return e.entries()}});h(l.prototype,"every",function(e,r){var t,i;if(!v(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!c(e))throw new TypeError(f("invalid argument. First argument must be a function. Value: `%s`.",e));for(t=this._buffer,i=0;i<this._length;i++)if(!e.call(r,p(t,i),i,this))return!1;return!0});h(l.prototype,"fill",function(e,r,t){var i,n,a,o,m,s;if(!v(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!d(e))throw new TypeError(f("invalid argument. First argument must be a complex number. Value: `%s`.",e));if(i=this._buffer,n=this._length,arguments.length>1){if(!b(r))throw new TypeError(f("invalid argument. Second argument must be an integer. Value: `%s`.",r));if(r<0&&(r+=n,r<0&&(r=0)),arguments.length>2){if(!b(t))throw new TypeError(f("invalid argument. Third argument must be an integer. Value: `%s`.",t));t<0&&(t+=n,t<0&&(t=0)),t>n&&(t=n)}else t=n}else r=0,t=n;for(o=V(e),m=q(e),s=r;s<t;s++)a=2*s,i[a]=o,i[a+1]=m;return this});h(l.prototype,"filter",function(e,r){var t,i,n,a;if(!v(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!c(e))throw new TypeError(f("invalid argument. First argument must be a function. Value: `%s`.",e));for(t=this._buffer,i=[],n=0;n<this._length;n++)a=p(t,n),e.call(r,a,n,this)&&i.push(a);return new this.constructor(i)});h(l.prototype,"find",function(e,r){var t,i,n;if(!v(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!c(e))throw new TypeError(f("invalid argument. First argument must be a function. Value: `%s`.",e));for(t=this._buffer,i=0;i<this._length;i++)if(n=p(t,i),e.call(r,n,i,this))return n});h(l.prototype,"findIndex",function(e,r){var t,i,n;if(!v(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!c(e))throw new TypeError(f("invalid argument. First argument must be a function. Value: `%s`.",e));for(t=this._buffer,i=0;i<this._length;i++)if(n=p(t,i),e.call(r,n,i,this))return i;return-1});h(l.prototype,"findLast",function(e,r){var t,i,n;if(!v(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!c(e))throw new TypeError(f("invalid argument. First argument must be a function. Value: `%s`.",e));for(t=this._buffer,i=this._length-1;i>=0;i--)if(n=p(t,i),e.call(r,n,i,this))return n});h(l.prototype,"findLastIndex",function(e,r){var t,i,n;if(!v(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!c(e))throw new TypeError(f("invalid argument. First argument must be a function. Value: `%s`.",e));for(t=this._buffer,i=this._length-1;i>=0;i--)if(n=p(t,i),e.call(r,n,i,this))return i;return-1});h(l.prototype,"forEach",function(e,r){var t,i,n;if(!v(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!c(e))throw new TypeError(f("invalid argument. First argument must be a function. Value: `%s`.",e));for(t=this._buffer,i=0;i<this._length;i++)n=p(t,i),e.call(r,n,i,this)});h(l.prototype,"get",function(e){if(!v(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!L(e))throw new TypeError(f("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));if(!(e>=this._length))return p(this._buffer,e)});h(l.prototype,"includes",function(e,r){var t,i,n,a,o;if(!v(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!d(e))throw new TypeError(f("invalid argument. First argument must be a complex number. Value: `%s`.",e));if(arguments.length>1){if(!b(r))throw new TypeError(f("invalid argument. Second argument must be an integer. Value: `%s`.",r));r<0&&(r+=this._length,r<0&&(r=0))}else r=0;for(n=V(e),a=q(e),t=this._buffer,o=r;o<this._length;o++)if(i=2*o,n===t[i]&&a===t[i+1])return!0;return!1});h(l.prototype,"indexOf",function(e,r){var t,i,n,a,o;if(!v(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!d(e))throw new TypeError(f("invalid argument. First argument must be a complex number. Value: `%s`.",e));if(arguments.length>1){if(!b(r))throw new TypeError(f("invalid argument. Second argument must be an integer. Value: `%s`.",r));r<0&&(r+=this._length,r<0&&(r=0))}else r=0;for(n=V(e),a=q(e),t=this._buffer,o=r;o<this._length;o++)if(i=2*o,n===t[i]&&a===t[i+1])return o;return-1});h(l.prototype,"join",function(e){var r,t,i,n;if(!v(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(arguments.length===0)i=",";else if(Y(e))i=e;else throw new TypeError(f("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[],t=this._buffer,n=0;n<this._length;n++)r.push(p(t,n).toString());return r.join(i)});h(l.prototype,"keys",function(){var e,r,t,i,n;if(!v(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return e=this,t=this._length,n=-1,r={},h(r,"next",a),h(r,"return",o),x&&h(r,x,m),r;function a(){return n+=1,i||n>=t?{done:!0}:{value:n,done:!1}}function o(s){return i=!0,arguments.length?{value:s,done:!0}:{done:!0}}function m(){return e.keys()}});h(l.prototype,"lastIndexOf",function(e,r){var t,i,n,a,o;if(!v(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!d(e))throw new TypeError(f("invalid argument. First argument must be a complex number. Value: `%s`.",e));if(arguments.length>1){if(!b(r))throw new TypeError(f("invalid argument. Second argument must be an integer. Value: `%s`.",r));r>=this._length?r=this._length-1:r<0&&(r+=this._length)}else r=this._length-1;for(n=V(e),a=q(e),t=this._buffer,o=r;o>=0;o--)if(i=2*o,n===t[i]&&a===t[i+1])return o;return-1});F(l.prototype,"length",function(){return this._length});h(l.prototype,"map",function(e,r){var t,i,n,a,o;if(!v(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!c(e))throw new TypeError(f("invalid argument. First argument must be a function. Value: `%s`.",e));for(i=this._buffer,n=new this.constructor(this._length),t=n._buffer,a=0;a<this._length;a++)if(o=e.call(r,p(i,a),a,this),d(o))t[2*a]=V(o),t[2*a+1]=q(o);else if(R(o)&&o.length===2)t[2*a]=o[0],t[2*a+1]=o[1];else throw new TypeError(f("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",o));return n});h(l.prototype,"reduce",function(e,r){var t,i,n,a,o;if(!v(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!c(e))throw new TypeError(f("invalid argument. First argument must be a function. Value: `%s`.",e));if(t=this._buffer,n=this._length,arguments.length>1)i=r,o=0;else{if(n===0)throw new Error("invalid operation. If not provided an initial value, an array must contain at least one element.");i=p(t,0),o=1}for(;o<n;o++)a=p(t,o),i=e(i,a,o,this);return i});h(l.prototype,"reduceRight",function(e,r){var t,i,n,a,o;if(!v(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!c(e))throw new TypeError(f("invalid argument. First argument must be a function. Value: `%s`.",e));if(t=this._buffer,n=this._length,arguments.length>1)i=r,o=n-1;else{if(n===0)throw new Error("invalid operation. If not provided an initial value, an array must contain at least one element.");i=p(t,n-1),o=n-2}for(;o>=0;o--)a=p(t,o),i=e(i,a,o,this);return i});h(l.prototype,"reverse",function(){var e,r,t,i,n,a;if(!v(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(t=this._length,e=this._buffer,i=yr(t/2),n=0;n<i;n++)a=t-n-1,r=e[2*n],e[2*n]=e[2*a],e[2*a]=r,r=e[2*n+1],e[2*n+1]=e[2*a+1],e[2*a+1]=r;return this});h(l.prototype,"set",function(e){var r,t,i,n,a,o,m,s,y;if(!v(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(i=this._buffer,arguments.length>1){if(t=arguments[1],!L(t))throw new TypeError(f("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",t))}else t=0;if(d(e)){if(t>=this._length)throw new RangeError(f("invalid argument. Index argument is out-of-bounds. Value: `%u`.",t));t*=2,i[t]=V(e),i[t+1]=q(e);return}if(v(e)){if(o=e._length,t+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e._buffer,y=i.byteOffset+t*E,r.buffer===i.buffer&&r.byteOffset<y&&r.byteOffset+r.byteLength>y){for(n=new _(r.length),s=0;s<r.length;s++)n[s]=r[s];r=n}for(t*=2,y=0,s=0;s<o;s++)i[t]=r[y],i[t+1]=r[y+1],t+=2,y+=2;return}if(S(e)){for(o=e.length,s=0;s<o;s++)if(!d(e[s])){a=!0;break}if(a){if(!k(o))throw new RangeError(f("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",o));if(t+o/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e,y=i.byteOffset+t*E,r.buffer===i.buffer&&r.byteOffset<y&&r.byteOffset+r.byteLength>y){for(n=new _(o),s=0;s<o;s++)n[s]=r[s];r=n}for(t*=2,o/=2,y=0,s=0;s<o;s++)i[t]=r[y],i[t+1]=r[y+1],t+=2,y+=2;return}if(t+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,s=0;s<o;s++)m=e[s],i[t]=V(m),i[t+1]=q(m),t+=2;return}throw new TypeError(f("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",e))});h(l.prototype,"slice",function(e,r){var t,i,n,a,o,m,s;if(!v(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(o=this._buffer,m=this._length,arguments.length===0)e=0,r=m;else{if(!b(e))throw new TypeError(f("invalid argument. First argument must be an integer. Value: `%s`.",e));if(e<0&&(e+=m,e<0&&(e=0)),arguments.length===1)r=m;else{if(!b(r))throw new TypeError(f("invalid argument. Second argument must be an integer. Value: `%s`.",r));r<0?(r+=m,r<0&&(r=0)):r>m&&(r=m)}}for(e<r?t=r-e:t=0,n=new this.constructor(t),i=n._buffer,s=0;s<t;s++)a=2*(s+e),i[2*s]=o[a],i[2*s+1]=o[a+1];return n});h(l.prototype,"some",function(e,r){var t,i;if(!v(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!c(e))throw new TypeError(f("invalid argument. First argument must be a function. Value: `%s`.",e));for(t=this._buffer,i=0;i<this._length;i++)if(e.call(r,p(t,i),i,this))return!0;return!1});h(l.prototype,"subarray",function(e,r){var t,i,n;if(!v(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(i=this._buffer,n=this._length,arguments.length===0)e=0,r=n;else{if(!b(e))throw new TypeError(f("invalid argument. First argument must be an integer. Value: `%s`.",e));if(e<0&&(e+=n,e<0&&(e=0)),arguments.length===1)r=n;else{if(!b(r))throw new TypeError(f("invalid argument. Second argument must be an integer. Value: `%s`.",r));r<0?(r+=n,r<0&&(r=0)):r>n&&(r=n)}}return e>=n?(n=0,t=i.byteLength):e>=r?(n=0,t=i.byteOffset+e*E):(n=r-e,t=i.byteOffset+e*E),new this.constructor(i.buffer,t,n<0?0:n)});h(l.prototype,"toLocaleString",function(e,r){var t,i,n,a,o;if(!v(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(arguments.length===0)i=[];else if(Y(e)||lr(e))i=e;else throw new TypeError("invalid argument. First argument must be a string or an array of strings. Value: `"+e+"`.");if(arguments.length<2)t={};else if(j(r))t=r;else throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");for(a=this._buffer,n=[],o=0;o<this._length;o++)n.push(p(a,o).toLocaleString(i,t));return n.join(",")});h(l.prototype,"toReversed",function(){var e,r,t,i,n,a;if(!v(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(t=this._length,r=new this.constructor(t),i=this._buffer,e=r._buffer,n=0;n<t;n++)a=t-n-1,e[2*n]=i[2*a],e[2*n+1]=i[2*a+1];return r});h(l.prototype,"toString",function(){var e,r,t;if(!v(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],r=this._buffer,t=0;t<this._length;t++)e.push(p(r,t).toString());return e.join(",")});h(l.prototype,"values",function(){var e,r,t,i,n,a;if(!v(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return r=this,n=this._buffer,t=this._length,a=-1,e={},h(e,"next",o),h(e,"return",m),x&&h(e,x,s),e;function o(){return a+=1,i||a>=t?{done:!0}:{value:p(n,a),done:!1}}function m(y){return i=!0,arguments.length?{value:y,done:!0}:{done:!0}}function s(){return r.values()}});h(l.prototype,"with",function(e,r){var t,i,n;if(!v(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!b(e))throw new TypeError(f("invalid argument. First argument must be an integer. Value: `%s`.",e));if(n=this._length,e<0&&(e+=n),e<0||e>=n)throw new RangeError(f("invalid argument. Index argument is out-of-bounds. Value: `%s`.",e));if(!d(r))throw new TypeError(f("invalid argument. Second argument must be a complex number. Value: `%s`.",r));return i=new this.constructor(this._buffer),t=i._buffer,t[2*e]=V(r),t[2*e+1]=q(r),i});D.exports=l});var _r=J();module.exports=_r;
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
