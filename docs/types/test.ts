/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

/* eslint-disable @typescript-eslint/no-unused-expressions */

import Complex64 = require( '@stdlib/complex-float32-ctor' );
import ArrayBuffer = require( '@stdlib/array-buffer' );
import realf = require( '@stdlib/complex-float32-real' );
import imagf = require( '@stdlib/complex-float32-imag' );
import Complex64Array = require( './index' );

/**
* Callback function.
*
* @private
* @param v - input value
* @returns output value
*/
function clbk( v: Complex64 ): Complex64 {
	return new Complex64( realf( v ) * 2.0, imagf( v ) * 2.0 );
}


// TESTS //

// The function returns a complex number array...
{
	new Complex64Array(); // $ExpectType Complex64Array
	Complex64Array(); // $ExpectType Complex64Array
	new Complex64Array( 2 ); // $ExpectType Complex64Array
	Complex64Array( 2 ); // $ExpectType Complex64Array
	new Complex64Array( [ 1.0, -1.0 ] ); // $ExpectType Complex64Array
	Complex64Array( [ 1.0, -1.0 ] ); // $ExpectType Complex64Array

	const buf = new ArrayBuffer( 16 );
	new Complex64Array( buf ); // $ExpectType Complex64Array
	Complex64Array( buf ); // $ExpectType Complex64Array
	new Complex64Array( buf, 8 ); // $ExpectType Complex64Array
	Complex64Array( buf, 8 ); // $ExpectType Complex64Array
	new Complex64Array( buf, 8, 2 ); // $ExpectType Complex64Array
	Complex64Array( buf, 8, 2 ); // $ExpectType Complex64Array
}

// The compiler throws an error if the function is provided a first argument that is not a number, typed array, array-like object, or array buffer...
{
	new Complex64Array( true ); // $ExpectError
	new Complex64Array( false ); // $ExpectError
	new Complex64Array( null ); // $ExpectError
	new Complex64Array( 'abc' ); // $ExpectError
	new Complex64Array( {} ); // $ExpectError
	new Complex64Array( ( x: number ): number => x ); // $ExpectError

	Complex64Array( true ); // $ExpectError
	Complex64Array( false ); // $ExpectError
	Complex64Array( null ); // $ExpectError
	Complex64Array( 'abc' ); // $ExpectError
	Complex64Array( {} ); // $ExpectError
	Complex64Array( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument that is not a number...
{
	const buf = new ArrayBuffer( 16 );
	new Complex64Array( buf, true ); // $ExpectError
	new Complex64Array( buf, false ); // $ExpectError
	new Complex64Array( buf, null ); // $ExpectError
	new Complex64Array( buf, 'abc' ); // $ExpectError
	new Complex64Array( buf, {} ); // $ExpectError
	new Complex64Array( buf, ( x: number ): number => x ); // $ExpectError

	Complex64Array( buf, true ); // $ExpectError
	Complex64Array( buf, false ); // $ExpectError
	Complex64Array( buf, null ); // $ExpectError
	Complex64Array( buf, 'abc' ); // $ExpectError
	Complex64Array( buf, {} ); // $ExpectError
	Complex64Array( buf, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument that is not a number...
{
	const buf = new ArrayBuffer( 16 );
	new Complex64Array( buf, 8, true ); // $ExpectError
	new Complex64Array( buf, 8, false ); // $ExpectError
	new Complex64Array( buf, 8, null ); // $ExpectError
	new Complex64Array( buf, 8, 'abc' ); // $ExpectError
	new Complex64Array( buf, 8, {} ); // $ExpectError
	new Complex64Array( buf, 8, ( x: number ): number => x ); // $ExpectError

	Complex64Array( buf, 8, true ); // $ExpectError
	Complex64Array( buf, 8, false ); // $ExpectError
	Complex64Array( buf, 8, null ); // $ExpectError
	Complex64Array( buf, 8, 'abc' ); // $ExpectError
	Complex64Array( buf, 8, {} ); // $ExpectError
	Complex64Array( buf, 8, ( x: number ): number => x ); // $ExpectError
}

// The `from` method returns a complex number array...
{
	Complex64Array.from( [ 1.0, 1.0 ] ); // $ExpectType Complex64Array
	Complex64Array.from( [ 1.0, 1.0 ], ( x: number ): number => x * x ); // $ExpectType Complex64Array
	Complex64Array.from( [ new Complex64( 1.0, 1.0 ) ], clbk, {} ); // $ExpectType Complex64Array
}

// The compiler throws an error if the `from` method is provided a first argument which is not array-like or iterable...
{
	Complex64Array.from( true ); // $ExpectError
	Complex64Array.from( false ); // $ExpectError
	Complex64Array.from( 123 ); // $ExpectError
	Complex64Array.from( null ); // $ExpectError
	Complex64Array.from( {} ); // $ExpectError

	Complex64Array.from( true, clbk ); // $ExpectError
	Complex64Array.from( false, clbk ); // $ExpectError
	Complex64Array.from( 123, clbk ); // $ExpectError
	Complex64Array.from( null, clbk ); // $ExpectError
	Complex64Array.from( {}, clbk ); // $ExpectError

	Complex64Array.from( true, clbk, {} ); // $ExpectError
	Complex64Array.from( false, clbk, {} ); // $ExpectError
	Complex64Array.from( 123, clbk, {} ); // $ExpectError
	Complex64Array.from( null, clbk, {} ); // $ExpectError
	Complex64Array.from( {}, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the `from` method is provided a second argument which is not a function with a supported signature...
{
	Complex64Array.from( [ 1, 1 ], true ); // $ExpectError
	Complex64Array.from( [ 1, 1 ], false ); // $ExpectError
	Complex64Array.from( [ 1, 1 ], 123 ); // $ExpectError
	Complex64Array.from( [ 1, 1 ], null ); // $ExpectError
	Complex64Array.from( [ 1, 1 ], {} ); // $ExpectError
}

// The `of` method returns a complex number array...
{
	Complex64Array.of( 1.0, 1.0, 1.0, 1.0 ); // $ExpectType Complex64Array
}

// The compiler throws an error if the `of` method is provided arguments that are not numbers...
{
	Complex64Array.of( 'abc', 'def' ); // $ExpectError
	Complex64Array.of( true, false ); // $ExpectError
	Complex64Array.of( {}, [] ); // $ExpectError
	Complex64Array.of( null, null ); // $ExpectError
}
