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
var Float32Array = require( '@stdlib/array-float32' );
var Complex64 = require( '@stdlib/complex-float32-ctor' );
var pkg = require( './../package.json' ).name;
var Complex64Array = require( './../lib' );


// MAIN //

bench( pkg+'::complex_number:set', function benchmark( b ) {
	var values;
	var arr;
	var N;
	var v;
	var i;

	values = [];
	for ( i = 0; i < 10; i++ ) {
		values.push( new Complex64( i, i ) );
	}
	arr = new Complex64Array( values );
	N = arr.length;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = arr.set( values[ (i+1)%N ] );
		if ( typeof v !== 'undefined' ) {
			b.fail( 'should return undefined' );
		}
	}
	b.toc();
	if ( typeof v !== 'undefined' ) {
		b.fail( 'should return undefined' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::array:set', function benchmark( b ) {
	var values;
	var arr;
	var N;
	var v;
	var i;

	values = [];
	for ( i = 0; i < 10; i++ ) {
		values.push( new Complex64( i, i ) );
	}
	arr = new Complex64Array( values );
	N = arr.length;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = arr.set( [ values[ (i+1)%N ] ] );
		if ( typeof v !== 'undefined' ) {
			b.fail( 'should return undefined' );
		}
	}
	b.toc();
	if ( typeof v !== 'undefined' ) {
		b.fail( 'should return undefined' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::typed_array:set', function benchmark( b ) {
	var values;
	var arr;
	var buf;
	var M;
	var N;
	var v;
	var i;

	values = new Float32Array( 20 );
	M = values.length;
	for ( i = 0; i < M; i++ ) {
		values[ i ] = i;
	}

	arr = new Complex64Array( values );
	N = arr.length;

	buf = new Float32Array( 2 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		buf[ 0 ] = values[ i%N ];
		buf[ 1 ] = values[ (i+1)%N ];
		v = arr.set( buf );
		if ( typeof v !== 'undefined' ) {
			b.fail( 'should return undefined' );
		}
	}
	b.toc();
	if ( typeof v !== 'undefined' ) {
		b.fail( 'should return undefined' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::complex_typed_array:set', function benchmark( b ) {
	var values;
	var arr;
	var buf;
	var M;
	var N;
	var v;
	var i;

	values = new Float32Array( 20 );
	M = values.length;
	for ( i = 0; i < M; i++ ) {
		values[ i ] = i;
	}

	arr = new Complex64Array( values );
	N = arr.length;

	buf = new Complex64Array( 1 );
	buf.set( new Complex64( 1.0, -1.0 ) );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = arr.set( buf, i%N );
		if ( typeof v !== 'undefined' ) {
			b.fail( 'should return undefined' );
		}
	}
	b.toc();
	if ( typeof v !== 'undefined' ) {
		b.fail( 'should return undefined' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
