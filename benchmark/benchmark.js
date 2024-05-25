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

'use strict';

// MODULES //

var bench = require( '@stdlib/bench-harness' );
var ArrayBuffer = require( '@stdlib/array-buffer' );
var Float32Array = require( '@stdlib/array-float32' );
var isArrayBuffer = require( '@stdlib/assert-is-arraybuffer' );
var isNonNegativeInteger = require( '@stdlib/assert-is-nonnegative-integer' ).isPrimitive;
var ITERATOR_SYMBOL = require( '@stdlib/symbol-iterator' );
var pkg = require( './../package.json' ).name;
var Complex64Array = require( './../lib' );


// VARIABLES //

var opts = {
	'skip': ( ITERATOR_SYMBOL === null )
};


// MAIN //

bench( pkg+'::instantiation,new', function benchmark( b ) {
	var arr;
	var i;
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = new Complex64Array();
		if ( arr.length !== 0 ) {
			b.fail( 'should have length 0' );
		}
	}
	b.toc();
	if ( !(arr instanceof Complex64Array) ) {
		b.fail( 'should return an instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::instantiation,no_new', function benchmark( b ) {
	var ctor;
	var arr;
	var i;

	ctor = Complex64Array;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = ctor();
		if ( arr.length !== 0 ) {
			b.fail( 'should have length 0' );
		}
	}
	b.toc();
	if ( !(arr instanceof Complex64Array) ) {
		b.fail( 'should return an instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::instantiation,length', function benchmark( b ) {
	var arr;
	var i;
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = new Complex64Array( 0 );
		if ( arr.length !== 0 ) {
			b.fail( 'should have length 0' );
		}
	}
	b.toc();
	if ( !(arr instanceof Complex64Array) ) {
		b.fail( 'should return an instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::instantiation,typed_array', function benchmark( b ) {
	var buf;
	var arr;
	var i;

	buf = new Float32Array( 0 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = new Complex64Array( buf );
		if ( arr.length !== 0 ) {
			b.fail( 'should have length 0' );
		}
	}
	b.toc();
	if ( !(arr instanceof Complex64Array) ) {
		b.fail( 'should return an instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::instantiation,complex_typed_array', function benchmark( b ) {
	var buf;
	var arr;
	var i;

	buf = new Complex64Array( 0 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = new Complex64Array( buf );
		if ( arr.length !== 0 ) {
			b.fail( 'should have length 0' );
		}
	}
	b.toc();
	if ( !(arr instanceof Complex64Array) ) {
		b.fail( 'should return an instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::instantiation,array', function benchmark( b ) {
	var buf;
	var arr;
	var i;

	buf = [];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = new Complex64Array( buf );
		if ( arr.length !== 0 ) {
			b.fail( 'should have length 0' );
		}
	}
	b.toc();
	if ( !(arr instanceof Complex64Array) ) {
		b.fail( 'should return an instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::instantiation,iterable', opts, function benchmark( b ) {
	var arr;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = new Complex64Array( createIterable() );
		if ( arr.length !== 0 ) {
			b.fail( 'should have length 0' );
		}
	}
	b.toc();
	if ( !(arr instanceof Complex64Array) ) {
		b.fail( 'should return an instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();

	function createIterable() {
		var out = {};
		out[ ITERATOR_SYMBOL ] = iterator;
		return out;

		function iterator() {
			return {
				'next': next
			};
		}

		function next() {
			return {
				'done': true
			};
		}
	}
});

bench( pkg+'::instantiation,arraybuffer', function benchmark( b ) {
	var buf;
	var arr;
	var i;

	buf = new ArrayBuffer( 0 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = new Complex64Array( buf );
		if ( arr.length !== 0 ) {
			b.fail( 'should have length 0' );
		}
	}
	b.toc();
	if ( !(arr instanceof Complex64Array) ) {
		b.fail( 'should return an instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::instantiation,arraybuffer,byte_offset', function benchmark( b ) {
	var buf;
	var arr;
	var i;

	buf = new ArrayBuffer( 8 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = new Complex64Array( buf, 8 );
		if ( arr.length !== 0 ) {
			b.fail( 'should have length 0' );
		}
	}
	b.toc();
	if ( !(arr instanceof Complex64Array) ) {
		b.fail( 'should return an instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::instantiation,arraybuffer,byte_offset,length', function benchmark( b ) {
	var buf;
	var arr;
	var i;

	buf = new ArrayBuffer( 8 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = new Complex64Array( buf, 8, 0 );
		if ( arr.length !== 0 ) {
			b.fail( 'should have length 0' );
		}
	}
	b.toc();
	if ( !(arr instanceof Complex64Array) ) {
		b.fail( 'should return an instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::get:buffer', function benchmark( b ) {
	var arr;
	var v;
	var i;

	arr = new Complex64Array();

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		// Note: the following may be optimized away due to loop invariant code motion and/or other compiler optimizations, rendering this benchmark meaningless...
		v = arr.buffer;
		if ( typeof v !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isArrayBuffer( v ) ) {
		b.fail( 'should return an ArrayBuffer' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::get:byteLength', function benchmark( b ) {
	var arr;
	var v;
	var i;

	arr = new Complex64Array();

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		// Note: the following may be optimized away due to loop invariant code motion and/or other compiler optimizations, rendering this benchmark meaningless...
		v = arr.byteLength;
		if ( v !== v ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( !isNonNegativeInteger( v ) ) {
		b.fail( 'should return a nonnegative integer' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::get:byteOffset', function benchmark( b ) {
	var arr;
	var v;
	var i;

	arr = new Complex64Array();

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		// Note: the following may be optimized away due to loop invariant code motion and/or other compiler optimizations, rendering this benchmark meaningless...
		v = arr.byteOffset;
		if ( v !== v ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( !isNonNegativeInteger( v ) ) {
		b.fail( 'should return a nonnegative integer' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::get:length', function benchmark( b ) {
	var arr;
	var v;
	var i;

	arr = new Complex64Array();

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		// Note: the following may be optimized away due to loop invariant code motion and/or other compiler optimizations, rendering this benchmark meaningless...
		v = arr.length;
		if ( v !== v ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( !isNonNegativeInteger( v ) ) {
		b.fail( 'should return a nonnegative integer' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
