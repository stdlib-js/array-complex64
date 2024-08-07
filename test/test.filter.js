/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

var tape = require( 'tape' );
var hasOwnProp = require( '@stdlib/assert-has-own-property' );
var isFunction = require( '@stdlib/assert-is-function' );
var reinterpret64 = require( '@stdlib/strided-base-reinterpret-complex64' );
var instanceOf = require( '@stdlib/assert-instance-of' );
var realf = require( '@stdlib/complex-float32-real' );
var imagf = require( '@stdlib/complex-float32-imag' );
var Float32Array = require( '@stdlib/array-float32' );
var Complex64Array = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof Complex64Array, 'function', 'main export is a function' );
	t.end();
});

tape( 'attached to the prototype of the main export is a `filter` method', function test( t ) {
	t.strictEqual( hasOwnProp( Complex64Array.prototype, 'filter' ), true, 'has property' );
	t.strictEqual( isFunction( Complex64Array.prototype.filter ), true, 'has method' );
	t.end();
});

tape( 'the method throws an error if invoked with a `this` context which is not a complex number array instance', function test( t ) {
	var values;
	var arr;
	var i;

	arr = new Complex64Array( 5 );

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[],
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			return arr.filter.call( value, predicate );
		};
	}

	function predicate( v ) {
		return ( realf( v ) > 0 && imagf( v ) < 0 );
	}
});

tape( 'the method throws an error if provided a first argument which is not a function', function test( t ) {
	var values;
	var arr;
	var i;

	arr = new Complex64Array( 10 );

	values = [
		'5',
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			return arr.filter( value );
		};
	}
});

tape( 'the method returns an empty array if operating on an empty complex number array', function test( t ) {
	var arr;
	var out;

	arr = new Complex64Array();
	out = arr.filter( predicate );

	t.strictEqual( out.length, 0, 'returns expected value' );
	t.end();

	function predicate( v ) {
		return ( realf( v ) > 0 && imagf( v ) < 0 );
	}
});

tape( 'the method returns a new complex number array containing only those elements which satisfy a test condition', function test( t ) {
	var expected;
	var actual;
	var arr;

	arr = new Complex64Array( [ 1.0, -1.0, 2.0, 2.0, 3.0, -3.0 ] );
	expected = new Float32Array( [ 1.0, -1.0, 3.0, -3.0 ] );
	actual = arr.filter( predicate );

	t.strictEqual( instanceOf( actual, Complex64Array ), true, 'returns expected value' );
	t.strictEqual( actual.length, expected.length/2, 'returns expected value' );
	t.deepEqual( reinterpret64( actual, 0 ), expected, 'returns expected value' );
	t.end();

	function predicate( v ) {
		return ( realf( v ) > 0 && imagf( v ) < 0 );
	}
});

tape( 'the method copies all elements to a new array if all elements satisfy a test condition', function test( t ) {
	var expected;
	var actual;
	var arr;

	arr = new Complex64Array( [ 1.0, -1.0, 2.0, -2.0, 3.0, -3.0 ] );
	expected = new Float32Array( [ 1.0, -1.0, 2.0, -2.0, 3.0, -3.0 ] );
	actual = arr.filter( predicate );

	t.strictEqual( instanceOf( actual, Complex64Array ), true, 'returns expected value' );
	t.notEqual( actual, arr, 'returns a new instance' );
	t.strictEqual( actual.length, expected.length/2, 'returns expected value' );
	t.deepEqual( reinterpret64( actual, 0 ), expected, 'returns expected value' );
	t.end();

	function predicate( v ) {
		return ( realf( v ) > 0 && imagf( v ) < 0 );
	}
});

tape( 'the method supports providing an execution context', function test( t ) {
	var expected;
	var actual;
	var arr;
	var ctx;

	arr = new Complex64Array( [ 1.0, -1.0, 2.0, 2.0, 3.0, -3.0 ] );
	expected = new Float32Array( [ 1.0, -1.0, 3.0, -3.0 ] );
	ctx = {
		'count': 0
	};
	actual = arr.filter( predicate, ctx );

	t.strictEqual( instanceOf( actual, Complex64Array ), true, 'returns expected value' );
	t.strictEqual( actual.length, expected.length/2, 'returns expected value' );
	t.deepEqual( reinterpret64( actual, 0 ), expected, 'returns expected value' );
	t.strictEqual( ctx.count, 3, 'returns expected value' );
	t.end();

	function predicate( v ) {
		this.count += 1; // eslint-disable-line no-invalid-this
		return ( realf( v ) > 0 && imagf( v ) < 0 );
	}
});
