// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-array-like-object@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-arraybuffer@v0.2.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-object@v0.2.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-array@v0.2.1-esm/index.mjs";import{isPrimitive as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.2.1-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.1-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-complex-like@v0.2.1-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-even@v0.2.2-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-integer@v0.2.4-esm/index.mjs";import w from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-assert-is-complex64array@v0.2.1-esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-assert-is-complex128array@v0.2.1-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-iterator-symbol-support@v0.2.1-esm/index.mjs";import y from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@v0.2.1-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@v0.2.2-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@v0.2.1-esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32@v0.2.1-esm/index.mjs";import E from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.1-esm/index.mjs";import b from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-realf@v0.2.1-esm/index.mjs";import R from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-imagf@v0.2.1-esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@v0.2.2-esm/index.mjs";import _ from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-reinterpret-complex64@v0.2.0-esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-reinterpret-complex128@v0.2.1-esm/index.mjs";import T from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-getter@v0.2.1-esm/index.mjs";import x from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-accessor-getter@v0.2.1-esm/index.mjs";function L(r){var t,n,i;for(t=[];!(n=r.next()).done;)if(i=n.value,e(i)&&i.length>=2)t.push(i[0],i[1]);else{if(!h(i))return new TypeError(E("00R24",i));t.push(b(i),R(i))}return t}var O=2*m.BYTES_PER_ELEMENT,A=a();function F(r){return r instanceof P||"object"==typeof r&&null!==r&&("Complex64Array"===r.constructor.name||"Complex128Array"===r.constructor.name)&&"number"==typeof r._length&&"object"==typeof r._buffer}function S(r){return r===P||"Complex128Array"===r.name}function B(r,e){return new g(r[e*=2],r[e+1])}function P(){var e,s,a,c;if(s=arguments.length,!(this instanceof P))return 0===s?new P:1===s?new P(arguments[0]):2===s?new P(arguments[0],arguments[1]):new P(arguments[0],arguments[1],arguments[2]);if(0===s)a=new m(0);else if(1===s)if(r(arguments[0]))a=new m(2*arguments[0]);else if(t(arguments[0]))if((c=(a=arguments[0]).length)&&o(a)&&h(a[0])){if(a=function(r,e){var t,n,i,o;for(t=e.length,o=0,i=0;i<t;i++){if(n=e[i],!h(n))return null;r[o]=b(n),r[o+1]=R(n),o+=2}return r}(new m(2*c),a),null===a){if(!l(c))throw new RangeError(E("00R26",c));a=new m(arguments[0])}}else{if(w(a))a=_(a,0);else if(u(a))a=j(a,0);else if(!l(c))throw new RangeError(E("00R27",c));a=new m(a)}else if(n(arguments[0])){if(!p((a=arguments[0]).byteLength/O))throw new RangeError(E("00RE9",O,a.byteLength));a=new m(a)}else{if(!i(arguments[0]))throw new TypeError(E("00R2A",arguments[0]));if(a=arguments[0],!1===A)throw new TypeError(E("00R29",a));if(!f(a[y]))throw new TypeError(E("00R2A",a));if(a=a[y](),!f(a.next))throw new TypeError(E("00R2A",a));if((a=L(a))instanceof Error)throw a;a=new m(a)}else{if(!n(a=arguments[0]))throw new TypeError(E("00R2B",a));if(!r(e=arguments[1]))throw new TypeError(E("00R2C",e));if(!p(e/O))throw new RangeError(E("00REA",O,e));if(2===s){if(c=a.byteLength-e,!p(c/O))throw new RangeError(E("00R2E",O,c));a=new m(a,e)}else{if(!r(c=arguments[2]))throw new TypeError(E("00R2F",c));if(c*O>a.byteLength-e)throw new RangeError(E("00R2G",c*O));a=new m(a,e,2*c)}}return d(this,"_buffer",a),d(this,"_length",a.length/2),this}d(P,"BYTES_PER_ELEMENT",O),d(P,"name","Complex64Array"),d(P,"from",(function(r){var n,o,s,p,w,u,a,d,c,m,g,v;if(!f(this))throw new TypeError(E("00R01"));if(!S(this))throw new TypeError(E("00R02"));if((o=arguments.length)>1){if(!f(s=arguments[1]))throw new TypeError(E("00R2H",s));o>2&&(n=arguments[2])}if(F(r)){if(d=r.length,s){for(w=(p=new this(d))._buffer,v=0,g=0;g<d;g++){if(m=s.call(n,r.get(g),g),h(m))w[v]=b(m),w[v+1]=R(m);else{if(!(e(m)&&m.length>=2))throw new TypeError(E("00R25",m));w[v]=m[0],w[v+1]=m[1]}v+=2}return p}return new this(r)}if(t(r)){if(s){for(d=r.length,a=r.get&&r.set?x("default"):T("default"),g=0;g<d;g++)if(!h(a(r,g))){c=!0;break}if(c){if(!l(d))throw new RangeError(E("00REB",2,d));for(w=(p=new this(d/2))._buffer,g=0;g<d;g++)w[g]=s.call(n,a(r,g),g);return p}for(w=(p=new this(d))._buffer,v=0,g=0;g<d;g++){if(m=s.call(n,a(r,g),g),h(m))w[v]=b(m),w[v+1]=R(m);else{if(!(e(m)&&m.length>=2))throw new TypeError(E("00R25",m));w[v]=m[0],w[v+1]=m[1]}v+=2}return p}return new this(r)}if(i(r)&&A&&f(r[y])){if(w=r[y](),!f(w.next))throw new TypeError(E("00R2J",r));if(u=s?function(r,t,n){var i,o,s,f;for(i=[],f=-1;!(o=r.next()).done;)if(f+=1,s=t.call(n,o.value,f),e(s)&&s.length>=2)i.push(s[0],s[1]);else{if(!h(s))return new TypeError(E("00R25",s));i.push(b(s),R(s))}return i}(w,s,n):L(w),u instanceof Error)throw u;for(w=(p=new this(d=u.length/2))._buffer,g=0;g<d;g++)w[g]=u[g];return p}throw new TypeError(E("00R2J",r))})),d(P,"of",(function(){var r,e;if(!f(this))throw new TypeError(E("00R01"));if(!S(this))throw new TypeError(E("00R02"));for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);return new this(r)})),d(P.prototype,"at",(function(r){if(!F(this))throw new TypeError(E("00R02"));if(!p(r))throw new TypeError(E("00R8A",r));if(r<0&&(r+=this._length),!(r<0||r>=this._length))return B(this._buffer,r)})),c(P.prototype,"buffer",(function(){return this._buffer.buffer})),c(P.prototype,"byteLength",(function(){return this._buffer.byteLength})),c(P.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),d(P.prototype,"BYTES_PER_ELEMENT",P.BYTES_PER_ELEMENT),d(P.prototype,"copyWithin",(function(r,e){if(!F(this))throw new TypeError(E("00R02"));return 2===arguments.length?this._buffer.copyWithin(2*r,2*e):this._buffer.copyWithin(2*r,2*e,2*arguments[2]),this})),d(P.prototype,"entries",(function(){var r,e,t,n,i,o;if(!F(this))throw new TypeError(E("00R02"));return r=this,n=this._buffer,t=this._length,o=-1,d(e={},"next",(function(){if(o+=1,i||o>=t)return{done:!0};return{value:[o,B(n,o)],done:!1}})),d(e,"return",(function(r){if(i=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),y&&d(e,y,(function(){return r.entries()})),e})),d(P.prototype,"every",(function(r,e){var t,n;if(!F(this))throw new TypeError(E("00R02"));if(!f(r))throw new TypeError(E("00R3c",r));for(t=this._buffer,n=0;n<this._length;n++)if(!r.call(e,B(t,n),n,this))return!1;return!0})),d(P.prototype,"fill",(function(r,e,t){var n,i,o,s,f,l;if(!F(this))throw new TypeError(E("00R02"));if(!h(r))throw new TypeError(E("00RFG",r));if(n=this._buffer,i=this._length,arguments.length>1){if(!p(e))throw new TypeError(E("00R7f",e));if(e<0&&(e+=i)<0&&(e=0),arguments.length>2){if(!p(t))throw new TypeError(E("00R2z",t));t<0&&(t+=i)<0&&(t=0),t>i&&(t=i)}else t=i}else e=0,t=i;for(s=b(r),f=R(r),l=e;l<t;l++)n[o=2*l]=s,n[o+1]=f;return this})),d(P.prototype,"filter",(function(r,e){var t,n,i,o;if(!F(this))throw new TypeError(E("00R02"));if(!f(r))throw new TypeError(E("00R3c",r));for(t=this._buffer,n=[],i=0;i<this._length;i++)o=B(t,i),r.call(e,o,i,this)&&n.push(o);return new this.constructor(n)})),d(P.prototype,"find",(function(r,e){var t,n,i;if(!F(this))throw new TypeError(E("00R02"));if(!f(r))throw new TypeError(E("00R3c",r));for(t=this._buffer,n=0;n<this._length;n++)if(i=B(t,n),r.call(e,i,n,this))return i})),d(P.prototype,"findIndex",(function(r,e){var t,n,i;if(!F(this))throw new TypeError(E("00R02"));if(!f(r))throw new TypeError(E("00R3c",r));for(t=this._buffer,n=0;n<this._length;n++)if(i=B(t,n),r.call(e,i,n,this))return n;return-1})),d(P.prototype,"findLast",(function(r,e){var t,n,i;if(!F(this))throw new TypeError(E("00R02"));if(!f(r))throw new TypeError(E("00R3c",r));for(t=this._buffer,n=this._length-1;n>=0;n--)if(i=B(t,n),r.call(e,i,n,this))return i})),d(P.prototype,"findLastIndex",(function(r,e){var t,n,i;if(!F(this))throw new TypeError(E("00R02"));if(!f(r))throw new TypeError(E("00R3c",r));for(t=this._buffer,n=this._length-1;n>=0;n--)if(i=B(t,n),r.call(e,i,n,this))return n;return-1})),d(P.prototype,"forEach",(function(r,e){var t,n,i;if(!F(this))throw new TypeError(E("00R02"));if(!f(r))throw new TypeError(E("00R3c",r));for(t=this._buffer,n=0;n<this._length;n++)i=B(t,n),r.call(e,i,n,this)})),d(P.prototype,"get",(function(e){if(!F(this))throw new TypeError(E("00R02"));if(!r(e))throw new TypeError(E("00R2K",e));if(!(e>=this._length))return B(this._buffer,e)})),d(P.prototype,"includes",(function(r,e){var t,n,i,o,s;if(!F(this))throw new TypeError(E("00R02"));if(!h(r))throw new TypeError(E("00RFG",r));if(arguments.length>1){if(!p(e))throw new TypeError(E("00R7f",e));e<0&&(e+=this._length)<0&&(e=0)}else e=0;for(i=b(r),o=R(r),t=this._buffer,s=e;s<this._length;s++)if(i===t[n=2*s]&&o===t[n+1])return!0;return!1})),d(P.prototype,"indexOf",(function(r,e){var t,n,i,o,s;if(!F(this))throw new TypeError(E("00R02"));if(!h(r))throw new TypeError(E("00RFG",r));if(arguments.length>1){if(!p(e))throw new TypeError(E("00R7f",e));e<0&&(e+=this._length)<0&&(e=0)}else e=0;for(i=b(r),o=R(r),t=this._buffer,s=e;s<this._length;s++)if(i===t[n=2*s]&&o===t[n+1])return s;return-1})),d(P.prototype,"join",(function(r){var e,t,n,i;if(!F(this))throw new TypeError(E("00R02"));if(0===arguments.length)n=",";else{if(!s(r))throw new TypeError(E("00R3F",r));n=r}for(e=[],t=this._buffer,i=0;i<this._length;i++)e.push(B(t,i).toString());return e.join(n)})),d(P.prototype,"lastIndexOf",(function(r,e){var t,n,i,o,s;if(!F(this))throw new TypeError(E("00R02"));if(!h(r))throw new TypeError(E("00RFG",r));if(arguments.length>1){if(!p(e))throw new TypeError(E("00R7f",e));e>=this._length?e=this._length-1:e<0&&(e+=this._length)}else e=this._length-1;for(i=b(r),o=R(r),t=this._buffer,s=e;s>=0;s--)if(i===t[n=2*s]&&o===t[n+1])return s;return-1})),c(P.prototype,"length",(function(){return this._length})),d(P.prototype,"map",(function(r,t){var n,i,o,s,l;if(!F(this))throw new TypeError(E("00R02"));if(!f(r))throw new TypeError(E("00R3c",r));for(i=this._buffer,n=(o=new this.constructor(this._length))._buffer,s=0;s<this._length;s++)if(l=r.call(t,B(i,s),s,this),h(l))n[2*s]=b(l),n[2*s+1]=R(l);else{if(!e(l)||2!==l.length)throw new TypeError(E("00R25",l));n[2*s]=l[0],n[2*s+1]=l[1]}return o})),d(P.prototype,"reduce",(function(r,e){var t,n,i,o;if(!F(this))throw new TypeError(E("00R02"));if(!f(r))throw new TypeError(E("00R3c",r));if(t=this._buffer,i=this._length,arguments.length>1)n=e,o=0;else{if(0===i)throw new Error("invalid operation. If not provided an initial value, an array must contain at least one element.");n=B(t,0),o=1}for(;o<i;o++)n=r(n,B(t,o),o,this);return n})),d(P.prototype,"reduceRight",(function(r,e){var t,n,i,o;if(!F(this))throw new TypeError(E("00R02"));if(!f(r))throw new TypeError(E("00R3c",r));if(t=this._buffer,i=this._length,arguments.length>1)n=e,o=i-1;else{if(0===i)throw new Error("invalid operation. If not provided an initial value, an array must contain at least one element.");n=B(t,i-1),o=i-2}for(;o>=0;o--)n=r(n,B(t,o),o,this);return n})),d(P.prototype,"reverse",(function(){var r,e,t,n,i,o;if(!F(this))throw new TypeError(E("00R02"));for(t=this._length,r=this._buffer,n=v(t/2),i=0;i<n;i++)o=t-i-1,e=r[2*i],r[2*i]=r[2*o],r[2*o]=e,e=r[2*i+1],r[2*i+1]=r[2*o+1],r[2*o+1]=e;return this})),d(P.prototype,"set",(function(e){var n,i,o,s,f,p,w,u,a;if(!F(this))throw new TypeError(E("00R02"));if(o=this._buffer,arguments.length>1){if(!r(i=arguments[1]))throw new TypeError(E("00R2L",i))}else i=0;if(h(e)){if(i>=this._length)throw new RangeError(E("00R2M",i));return o[i*=2]=b(e),void(o[i+1]=R(e))}if(F(e)){if(i+(p=e._length)>this._length)throw new RangeError(E("00R03"));if(n=e._buffer,a=o.byteOffset+i*O,n.buffer===o.buffer&&n.byteOffset<a&&n.byteOffset+n.byteLength>a){for(s=new m(n.length),u=0;u<n.length;u++)s[u]=n[u];n=s}for(i*=2,a=0,u=0;u<p;u++)o[i]=n[a],o[i+1]=n[a+1],i+=2,a+=2}else{if(!t(e))throw new TypeError(E("00R2N",e));for(p=e.length,u=0;u<p;u++)if(!h(e[u])){f=!0;break}if(f){if(!l(p))throw new RangeError(E("00R26",p));if(i+p/2>this._length)throw new RangeError(E("00R03"));if(n=e,a=o.byteOffset+i*O,n.buffer===o.buffer&&n.byteOffset<a&&n.byteOffset+n.byteLength>a){for(s=new m(p),u=0;u<p;u++)s[u]=n[u];n=s}for(i*=2,p/=2,a=0,u=0;u<p;u++)o[i]=n[a],o[i+1]=n[a+1],i+=2,a+=2;return}if(i+p>this._length)throw new RangeError(E("00R03"));for(i*=2,u=0;u<p;u++)w=e[u],o[i]=b(w),o[i+1]=R(w),i+=2}})),d(P.prototype,"slice",(function(r,e){var t,n,i,o,s,f,h;if(!F(this))throw new TypeError(E("00R02"));if(s=this._buffer,f=this._length,0===arguments.length)r=0,e=f;else{if(!p(r))throw new TypeError(E("00R7e",r));if(r<0&&(r+=f)<0&&(r=0),1===arguments.length)e=f;else{if(!p(e))throw new TypeError(E("00R7f",e));e<0?(e+=f)<0&&(e=0):e>f&&(e=f)}}for(t=r<e?e-r:0,n=(i=new this.constructor(t))._buffer,h=0;h<t;h++)o=2*(h+r),n[2*h]=s[o],n[2*h+1]=s[o+1];return i})),d(P.prototype,"some",(function(r,e){var t,n;if(!F(this))throw new TypeError(E("00R02"));if(!f(r))throw new TypeError(E("00R3c",r));for(t=this._buffer,n=0;n<this._length;n++)if(r.call(e,B(t,n),n,this))return!0;return!1})),d(P.prototype,"subarray",(function(r,e){var t,n,i;if(!F(this))throw new TypeError(E("00R02"));if(n=this._buffer,i=this._length,0===arguments.length)r=0,e=i;else{if(!p(r))throw new TypeError(E("00R7e",r));if(r<0&&(r+=i)<0&&(r=0),1===arguments.length)e=i;else{if(!p(e))throw new TypeError(E("00R7f",e));e<0?(e+=i)<0&&(e=0):e>i&&(e=i)}}return r>=i?(i=0,t=n.byteLength):r>=e?(i=0,t=n.byteOffset+r*O):(i=e-r,t=n.byteOffset+r*O),new this.constructor(n.buffer,t,i<0?0:i)})),d(P.prototype,"toReversed",(function(){var r,e,t,n,i,o;if(!F(this))throw new TypeError(E("00R02"));for(t=this._length,e=new this.constructor(t),n=this._buffer,r=e._buffer,i=0;i<t;i++)o=t-i-1,r[2*i]=n[2*o],r[2*i+1]=n[2*o+1];return e})),d(P.prototype,"toString",(function(){var r,e,t;if(!F(this))throw new TypeError(E("00R02"));for(r=[],e=this._buffer,t=0;t<this._length;t++)r.push(B(e,t).toString());return r.join(",")})),d(P.prototype,"values",(function(){var r,e,t,n,i,o;if(!F(this))throw new TypeError(E("00R02"));return e=this,i=this._buffer,t=this._length,o=-1,d(r={},"next",(function(){if(o+=1,n||o>=t)return{done:!0};return{value:B(i,o),done:!1}})),d(r,"return",(function(r){if(n=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),y&&d(r,y,(function(){return e.values()})),r})),d(P.prototype,"with",(function(r,e){var t,n,i;if(!F(this))throw new TypeError(E("00R02"));if(!p(r))throw new TypeError(E("00R7e",r));if(i=this._length,r<0&&(r+=i),r<0||r>=i)throw new RangeError(E("00RFP",r));if(!h(e))throw new TypeError(E("00RFQ",e));return(t=(n=new this.constructor(this._buffer))._buffer)[2*r]=b(e),t[2*r+1]=R(e),n}));export{P as default};
//# sourceMappingURL=index.mjs.map
