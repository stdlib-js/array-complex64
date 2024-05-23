"use strict";var A=function(u,e){return function(){return e||u((e={exports:{}}).exports,e),e.exports}};var C=A(function(xr,O){"use strict";var K=require("@stdlib/assert-is-array-like-object"),Q=require("@stdlib/assert-is-complex-like"),U=require("@stdlib/complex-realf"),X=require("@stdlib/complex-imagf"),Z=require("@stdlib/string-format");function $(u){var e,r,t;for(e=[];r=u.next(),!r.done;)if(t=r.value,K(t)&&t.length>=2)e.push(t[0],t[1]);else if(Q(t))e.push(U(t),X(t));else return new TypeError(Z("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",t));return e}O.exports=$});var M=A(function(Vr,B){"use strict";var I=require("@stdlib/assert-is-array-like-object"),rr=require("@stdlib/assert-is-complex-like"),er=require("@stdlib/complex-realf"),tr=require("@stdlib/complex-imagf"),ir=require("@stdlib/string-format");function nr(u,e,r){var t,n,i,a;for(t=[],a=-1;n=u.next(),!n.done;)if(a+=1,i=e.call(r,n.value,a),I(i)&&i.length>=2)t.push(i[0],i[1]);else if(rr(i))t.push(er(i),tr(i));else return new TypeError(ir("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",i));return t}B.exports=nr});var z=A(function(qr,N){"use strict";var ar=require("@stdlib/assert-is-complex-like"),or=require("@stdlib/complex-realf"),ur=require("@stdlib/complex-imagf");function sr(u,e){var r,t,n,i;for(r=e.length,i=0,n=0;n<r;n++){if(t=e[n],!ar(t))return null;u[i]=or(t),u[i+1]=ur(t),i+=2}return u}N.exports=sr});var J=A(function(Lr,D){"use strict";var L=require("@stdlib/assert-is-nonnegative-integer").isPrimitive,j=require("@stdlib/assert-is-array-like-object"),R=require("@stdlib/assert-is-collection"),P=require("@stdlib/assert-is-arraybuffer"),S=require("@stdlib/assert-is-object"),fr=require("@stdlib/assert-is-array"),lr=require("@stdlib/assert-is-string-array").primitives,Y=require("@stdlib/assert-is-string").isPrimitive,w=require("@stdlib/assert-is-function"),d=require("@stdlib/assert-is-complex-like"),k=require("@stdlib/math-base-assert-is-even"),b=require("@stdlib/math-base-assert-is-integer"),hr=require("@stdlib/array-base-assert-is-complex64array"),vr=require("@stdlib/array-base-assert-is-complex128array"),mr=require("@stdlib/assert-has-iterator-symbol-support"),q=require("@stdlib/symbol-iterator"),h=require("@stdlib/utils-define-nonenumerable-read-only-property"),F=require("@stdlib/utils-define-nonenumerable-read-only-accessor"),_=require("@stdlib/array-float32"),gr=require("@stdlib/complex-float32"),f=require("@stdlib/string-format"),x=require("@stdlib/complex-realf"),V=require("@stdlib/complex-imagf"),pr=require("@stdlib/math-base-special-floor"),yr=require("@stdlib/strided-base-reinterpret-complex64"),wr=require("@stdlib/strided-base-reinterpret-complex128"),cr=require("@stdlib/array-base-getter"),br=require("@stdlib/array-base-accessor-getter"),W=C(),Er=M(),Tr=z(),E=_.BYTES_PER_ELEMENT*2,G=mr();function v(u){return u instanceof l||typeof u=="object"&&u!==null&&(u.constructor.name==="Complex64Array"||u.constructor.name==="Complex128Array")&&typeof u._length=="number"&&typeof u._buffer=="object"}function H(u){return u===l||u.name==="Complex128Array"}function y(u,e){return e*=2,new gr(u[e],u[e+1])}function l(){var u,e,r,t;if(e=arguments.length,!(this instanceof l))return e===0?new l:e===1?new l(arguments[0]):e===2?new l(arguments[0],arguments[1]):new l(arguments[0],arguments[1],arguments[2]);if(e===0)r=new _(0);else if(e===1)if(L(arguments[0]))r=new _(arguments[0]*2);else if(R(arguments[0]))if(r=arguments[0],t=r.length,t&&fr(r)&&d(r[0])){if(r=Tr(new _(t*2),r),r===null){if(!k(t))throw new RangeError(f("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",t));r=new _(arguments[0])}}else{if(hr(r))r=yr(r,0);else if(vr(r))r=wr(r,0);else if(!k(t))throw new RangeError(f("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",t));r=new _(r)}else if(P(arguments[0])){if(r=arguments[0],!b(r.byteLength/E))throw new RangeError(f("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",E,r.byteLength));r=new _(r)}else if(S(arguments[0])){if(r=arguments[0],G===!1)throw new TypeError(f("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",r));if(!w(r[q]))throw new TypeError(f("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",r));if(r=r[q](),!w(r.next))throw new TypeError(f("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",r));if(r=W(r),r instanceof Error)throw r;r=new _(r)}else throw new TypeError(f("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));else{if(r=arguments[0],!P(r))throw new TypeError(f("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",r));if(u=arguments[1],!L(u))throw new TypeError(f("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",u));if(!b(u/E))throw new RangeError(f("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",E,u));if(e===2){if(t=r.byteLength-u,!b(t/E))throw new RangeError(f("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",E,t));r=new _(r,u)}else{if(t=arguments[2],!L(t))throw new TypeError(f("invalid argument. Length must be a nonnegative integer. Value: `%s`.",t));if(t*E>r.byteLength-u)throw new RangeError(f("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",t*E));r=new _(r,u,t*2)}}return h(this,"_buffer",r),h(this,"_length",r.length/2),this}h(l,"BYTES_PER_ELEMENT",E);h(l,"name","Complex64Array");h(l,"from",function(e){var r,t,n,i,a,o,m,s,p,c,g,T;if(!w(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!H(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(t=arguments.length,t>1){if(n=arguments[1],!w(n))throw new TypeError(f("invalid argument. Second argument must be a function. Value: `%s`.",n));t>2&&(r=arguments[2])}if(v(e)){if(s=e.length,n){for(i=new this(s),a=i._buffer,T=0,g=0;g<s;g++){if(c=n.call(r,e.get(g),g),d(c))a[T]=x(c),a[T+1]=V(c);else if(j(c)&&c.length>=2)a[T]=c[0],a[T+1]=c[1];else throw new TypeError(f("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));T+=2}return i}return new this(e)}if(R(e)){if(n){for(s=e.length,e.get&&e.set?m=br("default"):m=cr("default"),g=0;g<s;g++)if(!d(m(e,g))){p=!0;break}if(p){if(!k(s))throw new RangeError(f("invalid argument. First argument must have a length which is a multiple of %u. Length: `%u`.",2,s));for(i=new this(s/2),a=i._buffer,g=0;g<s;g++)a[g]=n.call(r,m(e,g),g);return i}for(i=new this(s),a=i._buffer,T=0,g=0;g<s;g++){if(c=n.call(r,m(e,g),g),d(c))a[T]=x(c),a[T+1]=V(c);else if(j(c)&&c.length>=2)a[T]=c[0],a[T+1]=c[1];else throw new TypeError(f("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));T+=2}return i}return new this(e)}if(S(e)&&G&&w(e[q])){if(a=e[q](),!w(a.next))throw new TypeError(f("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if(n?o=Er(a,n,r):o=W(a),o instanceof Error)throw o;for(s=o.length/2,i=new this(s),a=i._buffer,g=0;g<s;g++)a[g]=o[g];return i}throw new TypeError(f("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))});h(l,"of",function(){var e,r;if(!w(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!H(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],r=0;r<arguments.length;r++)e.push(arguments[r]);return new this(e)});h(l.prototype,"at",function(e){if(!v(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!b(e))throw new TypeError(f("invalid argument. Must provide an integer. Value: `%s`.",e));if(e<0&&(e+=this._length),!(e<0||e>=this._length))return y(this._buffer,e)});F(l.prototype,"buffer",function(){return this._buffer.buffer});F(l.prototype,"byteLength",function(){return this._buffer.byteLength});F(l.prototype,"byteOffset",function(){return this._buffer.byteOffset});h(l.prototype,"BYTES_PER_ELEMENT",l.BYTES_PER_ELEMENT);h(l.prototype,"copyWithin",function(e,r){if(!v(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return arguments.length===2?this._buffer.copyWithin(e*2,r*2):this._buffer.copyWithin(e*2,r*2,arguments[2]*2),this});h(l.prototype,"entries",function(){var e,r,t,n,i,a;if(!v(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return e=this,n=this._buffer,t=this._length,a=-1,r={},h(r,"next",o),h(r,"return",m),q&&h(r,q,s),r;function o(){return a+=1,i||a>=t?{done:!0}:{value:[a,y(n,a)],done:!1}}function m(p){return i=!0,arguments.length?{value:p,done:!0}:{done:!0}}function s(){return e.entries()}});h(l.prototype,"every",function(e,r){var t,n;if(!v(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!w(e))throw new TypeError(f("invalid argument. First argument must be a function. Value: `%s`.",e));for(t=this._buffer,n=0;n<this._length;n++)if(!e.call(r,y(t,n),n,this))return!1;return!0});h(l.prototype,"fill",function(e,r,t){var n,i,a,o,m,s;if(!v(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!d(e))throw new TypeError(f("invalid argument. First argument must be a complex number. Value: `%s`.",e));if(n=this._buffer,i=this._length,arguments.length>1){if(!b(r))throw new TypeError(f("invalid argument. Second argument must be an integer. Value: `%s`.",r));if(r<0&&(r+=i,r<0&&(r=0)),arguments.length>2){if(!b(t))throw new TypeError(f("invalid argument. Third argument must be an integer. Value: `%s`.",t));t<0&&(t+=i,t<0&&(t=0)),t>i&&(t=i)}else t=i}else r=0,t=i;for(o=x(e),m=V(e),s=r;s<t;s++)a=2*s,n[a]=o,n[a+1]=m;return this});h(l.prototype,"filter",function(e,r){var t,n,i,a;if(!v(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!w(e))throw new TypeError(f("invalid argument. First argument must be a function. Value: `%s`.",e));for(t=this._buffer,n=[],i=0;i<this._length;i++)a=y(t,i),e.call(r,a,i,this)&&n.push(a);return new this.constructor(n)});h(l.prototype,"find",function(e,r){var t,n,i;if(!v(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!w(e))throw new TypeError(f("invalid argument. First argument must be a function. Value: `%s`.",e));for(t=this._buffer,n=0;n<this._length;n++)if(i=y(t,n),e.call(r,i,n,this))return i});h(l.prototype,"findIndex",function(e,r){var t,n,i;if(!v(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!w(e))throw new TypeError(f("invalid argument. First argument must be a function. Value: `%s`.",e));for(t=this._buffer,n=0;n<this._length;n++)if(i=y(t,n),e.call(r,i,n,this))return n;return-1});h(l.prototype,"findLast",function(e,r){var t,n,i;if(!v(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!w(e))throw new TypeError(f("invalid argument. First argument must be a function. Value: `%s`.",e));for(t=this._buffer,n=this._length-1;n>=0;n--)if(i=y(t,n),e.call(r,i,n,this))return i});h(l.prototype,"findLastIndex",function(e,r){var t,n,i;if(!v(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!w(e))throw new TypeError(f("invalid argument. First argument must be a function. Value: `%s`.",e));for(t=this._buffer,n=this._length-1;n>=0;n--)if(i=y(t,n),e.call(r,i,n,this))return n;return-1});h(l.prototype,"forEach",function(e,r){var t,n,i;if(!v(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!w(e))throw new TypeError(f("invalid argument. First argument must be a function. Value: `%s`.",e));for(t=this._buffer,n=0;n<this._length;n++)i=y(t,n),e.call(r,i,n,this)});h(l.prototype,"get",function(e){if(!v(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!L(e))throw new TypeError(f("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));if(!(e>=this._length))return y(this._buffer,e)});h(l.prototype,"includes",function(e,r){var t,n,i,a,o;if(!v(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!d(e))throw new TypeError(f("invalid argument. First argument must be a complex number. Value: `%s`.",e));if(arguments.length>1){if(!b(r))throw new TypeError(f("invalid argument. Second argument must be an integer. Value: `%s`.",r));r<0&&(r+=this._length,r<0&&(r=0))}else r=0;for(i=x(e),a=V(e),t=this._buffer,o=r;o<this._length;o++)if(n=2*o,i===t[n]&&a===t[n+1])return!0;return!1});h(l.prototype,"indexOf",function(e,r){var t,n,i,a,o;if(!v(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!d(e))throw new TypeError(f("invalid argument. First argument must be a complex number. Value: `%s`.",e));if(arguments.length>1){if(!b(r))throw new TypeError(f("invalid argument. Second argument must be an integer. Value: `%s`.",r));r<0&&(r+=this._length,r<0&&(r=0))}else r=0;for(i=x(e),a=V(e),t=this._buffer,o=r;o<this._length;o++)if(n=2*o,i===t[n]&&a===t[n+1])return o;return-1});h(l.prototype,"join",function(e){var r,t,n,i;if(!v(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(arguments.length===0)n=",";else if(Y(e))n=e;else throw new TypeError(f("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[],t=this._buffer,i=0;i<this._length;i++)r.push(y(t,i).toString());return r.join(n)});h(l.prototype,"keys",function(){var e,r,t,n,i;if(!v(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return e=this,t=this._length,i=-1,r={},h(r,"next",a),h(r,"return",o),q&&h(r,q,m),r;function a(){return i+=1,n||i>=t?{done:!0}:{value:i,done:!1}}function o(s){return n=!0,arguments.length?{value:s,done:!0}:{done:!0}}function m(){return e.keys()}});h(l.prototype,"lastIndexOf",function(e,r){var t,n,i,a,o;if(!v(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!d(e))throw new TypeError(f("invalid argument. First argument must be a complex number. Value: `%s`.",e));if(arguments.length>1){if(!b(r))throw new TypeError(f("invalid argument. Second argument must be an integer. Value: `%s`.",r));r>=this._length?r=this._length-1:r<0&&(r+=this._length)}else r=this._length-1;for(i=x(e),a=V(e),t=this._buffer,o=r;o>=0;o--)if(n=2*o,i===t[n]&&a===t[n+1])return o;return-1});F(l.prototype,"length",function(){return this._length});h(l.prototype,"map",function(e,r){var t,n,i,a,o;if(!v(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!w(e))throw new TypeError(f("invalid argument. First argument must be a function. Value: `%s`.",e));for(n=this._buffer,i=new this.constructor(this._length),t=i._buffer,a=0;a<this._length;a++)if(o=e.call(r,y(n,a),a,this),d(o))t[2*a]=x(o),t[2*a+1]=V(o);else if(j(o)&&o.length===2)t[2*a]=o[0],t[2*a+1]=o[1];else throw new TypeError(f("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",o));return i});h(l.prototype,"reduce",function(e,r){var t,n,i,a,o;if(!v(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!w(e))throw new TypeError(f("invalid argument. First argument must be a function. Value: `%s`.",e));if(t=this._buffer,i=this._length,arguments.length>1)n=r,o=0;else{if(i===0)throw new Error("invalid operation. If not provided an initial value, an array must contain at least one element.");n=y(t,0),o=1}for(;o<i;o++)a=y(t,o),n=e(n,a,o,this);return n});h(l.prototype,"reduceRight",function(e,r){var t,n,i,a,o;if(!v(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!w(e))throw new TypeError(f("invalid argument. First argument must be a function. Value: `%s`.",e));if(t=this._buffer,i=this._length,arguments.length>1)n=r,o=i-1;else{if(i===0)throw new Error("invalid operation. If not provided an initial value, an array must contain at least one element.");n=y(t,i-1),o=i-2}for(;o>=0;o--)a=y(t,o),n=e(n,a,o,this);return n});h(l.prototype,"reverse",function(){var e,r,t,n,i,a;if(!v(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(t=this._length,e=this._buffer,n=pr(t/2),i=0;i<n;i++)a=t-i-1,r=e[2*i],e[2*i]=e[2*a],e[2*a]=r,r=e[2*i+1],e[2*i+1]=e[2*a+1],e[2*a+1]=r;return this});h(l.prototype,"set",function(e){var r,t,n,i,a,o,m,s,p;if(!v(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(t=arguments[1],!L(t))throw new TypeError(f("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",t))}else t=0;if(d(e)){if(t>=this._length)throw new RangeError(f("invalid argument. Index argument is out-of-bounds. Value: `%u`.",t));t*=2,n[t]=x(e),n[t+1]=V(e);return}if(v(e)){if(o=e._length,t+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e._buffer,p=n.byteOffset+t*E,r.buffer===n.buffer&&r.byteOffset<p&&r.byteOffset+r.byteLength>p){for(i=new _(r.length),s=0;s<r.length;s++)i[s]=r[s];r=i}for(t*=2,p=0,s=0;s<o;s++)n[t]=r[p],n[t+1]=r[p+1],t+=2,p+=2;return}if(R(e)){for(o=e.length,s=0;s<o;s++)if(!d(e[s])){a=!0;break}if(a){if(!k(o))throw new RangeError(f("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",o));if(t+o/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e,p=n.byteOffset+t*E,r.buffer===n.buffer&&r.byteOffset<p&&r.byteOffset+r.byteLength>p){for(i=new _(o),s=0;s<o;s++)i[s]=r[s];r=i}for(t*=2,o/=2,p=0,s=0;s<o;s++)n[t]=r[p],n[t+1]=r[p+1],t+=2,p+=2;return}if(t+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,s=0;s<o;s++)m=e[s],n[t]=x(m),n[t+1]=V(m),t+=2;return}throw new TypeError(f("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",e))});h(l.prototype,"slice",function(e,r){var t,n,i,a,o,m,s;if(!v(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(o=this._buffer,m=this._length,arguments.length===0)e=0,r=m;else{if(!b(e))throw new TypeError(f("invalid argument. First argument must be an integer. Value: `%s`.",e));if(e<0&&(e+=m,e<0&&(e=0)),arguments.length===1)r=m;else{if(!b(r))throw new TypeError(f("invalid argument. Second argument must be an integer. Value: `%s`.",r));r<0?(r+=m,r<0&&(r=0)):r>m&&(r=m)}}for(e<r?t=r-e:t=0,i=new this.constructor(t),n=i._buffer,s=0;s<t;s++)a=2*(s+e),n[2*s]=o[a],n[2*s+1]=o[a+1];return i});h(l.prototype,"some",function(e,r){var t,n;if(!v(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!w(e))throw new TypeError(f("invalid argument. First argument must be a function. Value: `%s`.",e));for(t=this._buffer,n=0;n<this._length;n++)if(e.call(r,y(t,n),n,this))return!0;return!1});h(l.prototype,"sort",function(e){var r,t,n,i,a;if(!v(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!w(e))throw new TypeError(f("invalid argument. First argument must be a function. Value: `%s`.",e));for(t=this._buffer,n=this._length,r=[],i=0;i<n;i++)r.push(y(t,i));for(r.sort(e),i=0;i<n;i++)a=2*i,t[a]=x(r[i]),t[a+1]=V(r[i]);return this});h(l.prototype,"subarray",function(e,r){var t,n,i;if(!v(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,i=this._length,arguments.length===0)e=0,r=i;else{if(!b(e))throw new TypeError(f("invalid argument. First argument must be an integer. Value: `%s`.",e));if(e<0&&(e+=i,e<0&&(e=0)),arguments.length===1)r=i;else{if(!b(r))throw new TypeError(f("invalid argument. Second argument must be an integer. Value: `%s`.",r));r<0?(r+=i,r<0&&(r=0)):r>i&&(r=i)}}return e>=i?(i=0,t=n.byteLength):e>=r?(i=0,t=n.byteOffset+e*E):(i=r-e,t=n.byteOffset+e*E),new this.constructor(n.buffer,t,i<0?0:i)});h(l.prototype,"toLocaleString",function(e,r){var t,n,i,a,o;if(!v(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(arguments.length===0)n=[];else if(Y(e)||lr(e))n=e;else throw new TypeError("invalid argument. First argument must be a string or an array of strings. Value: `"+e+"`.");if(arguments.length<2)t={};else if(S(r))t=r;else throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");for(a=this._buffer,i=[],o=0;o<this._length;o++)i.push(y(a,o).toLocaleString(n,t));return i.join(",")});h(l.prototype,"toReversed",function(){var e,r,t,n,i,a;if(!v(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(t=this._length,r=new this.constructor(t),n=this._buffer,e=r._buffer,i=0;i<t;i++)a=t-i-1,e[2*i]=n[2*a],e[2*i+1]=n[2*a+1];return r});h(l.prototype,"toString",function(){var e,r,t;if(!v(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],r=this._buffer,t=0;t<this._length;t++)e.push(y(r,t).toString());return e.join(",")});h(l.prototype,"values",function(){var e,r,t,n,i,a;if(!v(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return r=this,i=this._buffer,t=this._length,a=-1,e={},h(e,"next",o),h(e,"return",m),q&&h(e,q,s),e;function o(){return a+=1,n||a>=t?{done:!0}:{value:y(i,a),done:!1}}function m(p){return n=!0,arguments.length?{value:p,done:!0}:{done:!0}}function s(){return r.values()}});h(l.prototype,"with",function(e,r){var t,n,i;if(!v(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!b(e))throw new TypeError(f("invalid argument. First argument must be an integer. Value: `%s`.",e));if(i=this._length,e<0&&(e+=i),e<0||e>=i)throw new RangeError(f("invalid argument. Index argument is out-of-bounds. Value: `%s`.",e));if(!d(r))throw new TypeError(f("invalid argument. Second argument must be a complex number. Value: `%s`.",r));return n=new this.constructor(this._buffer),t=n._buffer,t[2*e]=x(r),t[2*e+1]=V(r),n});D.exports=l});var _r=J();module.exports=_r;
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
