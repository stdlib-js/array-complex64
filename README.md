<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Complex64Array

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> 64-bit complex number array.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import Complex64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-complex64@esm/index.mjs';
```

<a name="constructor"></a>

#### Complex64Array()

Creates a 64-bit complex number array.

```javascript
var arr = new Complex64Array();
// returns <Complex64Array>
```

#### Complex64Array( length )

Creates a 64-bit complex number array having a specified `length`.

```javascript
var arr = new Complex64Array( 10 );
// returns <Complex64Array>

var len = arr.length;
// returns 10
```

#### Complex64Array( complexarray )

Creates a 64-bit complex number array from another complex number array.

```javascript
var arr1 = new Complex64Array( [ 1.0, -1.0, 2.0, -2.0 ] ); // [ re, im, re, im ]
// returns <Complex64Array>

var arr2 = new Complex64Array( arr1 );
// returns <Complex64Array>

var len = arr2.length;
// returns 2
```

#### Complex64Array( typedarray )

Creates a 64-bit complex number array from a [typed array][@stdlib/array/typed] containing interleaved real and imaginary components.

```javascript
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@esm/index.mjs';

var buf = new Float32Array( [ 1.0, -1.0, 2.0, -2.0 ] ); // [ re, im, re, im ]
// returns <Float32Array>[ 1.0, -1.0, 2.0, -2.0 ]

var arr = new Complex64Array( buf );
// returns <Complex64Array>

var len = arr.length;
// returns 2
```

#### Complex64Array( obj )

Creates a 64-bit complex number array from an array-like object or iterable.

```javascript
import Complex64 from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32@esm/index.mjs';

// From an array of interleaved real and imaginary components:
var arr1 = new Complex64Array( [ 1.0, -1.0, 2.0, -2.0 ] );
// returns <Complex64Array>

var len = arr1.length;
// returns 2

// From an array containing complex numbers:
var buf = [ new Complex64( 1.0, -1.0 ), new Complex64( 2.0, -2.0 ) ];
var arr2 = new Complex64Array( buf );

len = arr2.length;
// returns 2
```

#### Complex64Array( buffer\[, byteOffset\[, length]] )

Returns a 64-bit complex number array view of an [`ArrayBuffer`][@stdlib/array/buffer].

```javascript
import ArrayBuffer from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-buffer@esm/index.mjs';
var buf = new ArrayBuffer( 240 );

var arr1 = new Complex64Array( buf );
// returns <Complex64Array>

var len = arr1.length;
// returns 30

var arr2 = new Complex64Array( buf, 8 );
// returns <Complex64Array>

len = arr2.length;
// returns 29

var arr3 = new Complex64Array( buf, 8, 20 );
// returns <Complex64Array>

len = arr3.length;
// returns 20
```

* * *

### Properties

<a name="static-prop-bytes-per-element"></a>

#### Complex64Array.BYTES_PER_ELEMENT

Static property returning the size (in bytes) of each array element.

```javascript
var nbytes = Complex64Array.BYTES_PER_ELEMENT;
// returns 8
```

<a name="static-prop-name"></a>

#### Complex64Array.name

Static property returning the constructor name.

```javascript
var str = Complex64Array.name;
// returns 'Complex64Array'
```

<a name="prop-buffer"></a>

#### Complex64Array.prototype.buffer

Pointer to the underlying data buffer.

```javascript
var arr = new Complex64Array( 2 );
// returns <Complex64Array>

var buf = arr.buffer;
// returns <ArrayBuffer>
```

<a name="prop-byte-length"></a>

#### Complex64Array.prototype.byteLength

Size (in bytes) of the array.

```javascript
var arr = new Complex64Array( 10 );
// returns <Complex64Array>

var nbytes = arr.byteLength;
// returns 80
```

<a name="prop-byte-offset"></a>

#### Complex64Array.prototype.byteOffset

Offset (in bytes) of the array from the start of its underlying `ArrayBuffer`.

```javascript
import ArrayBuffer from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-buffer@esm/index.mjs';

var arr = new Complex64Array( 10 );
// returns <Complex64Array>

var offset = arr.byteOffset;
// returns 0

var buf = new ArrayBuffer( 240 );
arr = new Complex64Array( buf, 64 );
// returns <Complex64Array>

offset = arr.byteOffset;
// returns 64
```

<a name="prop-bytes-per-element"></a>

#### Complex64Array.prototype.BYTES_PER_ELEMENT

Size (in bytes) of each array element.

```javascript
var arr = new Complex64Array( 10 );
// returns <Complex64Array>

var nbytes = arr.BYTES_PER_ELEMENT;
// returns 8
```

<a name="prop-length"></a>

#### Complex64Array.prototype.length

Number of array elements.

```javascript
var arr = new Complex64Array( 10 );
// returns <Complex64Array>

var len = arr.length;
// returns 10
```

* * *

### Methods

<a name="static-method-from"></a>

#### Complex64Array.from( src\[, clbk\[, thisArg]] )

Creates a new 64-bit complex number array from an array-like object or an iterable.

```javascript
import Complex64 from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32@esm/index.mjs';

// Create an array from interleaved real and imaginary components:
var arr = Complex64Array.from( [ 1.0, -1.0 ] );
// returns <Complex64Array>

var len = arr.length;
// returns 1

// Create an array from an array of complex numbers:
arr = Complex64Array.from( [ new Complex64( 1.0, -1.0 ) ] );
// returns <Complex64Array>

len = arr.length;
// returns 1
```

The iterator returned by an iterable must return either a complex number or an array-like object containing a real and imaginary component.

```javascript
import ITERATOR_SYMBOL from 'https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@esm/index.mjs';
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@esm/index.mjs';
import realf from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-realf@esm/index.mjs';
import imagf from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-imagf@esm/index.mjs';

var iter;
var arr;
var len;
var re;
var im;
var z;

// Define a function which returns an iterator protocol-compliant object...
function iterable() {
    var buf = new Float32Array( 2 );
    var i = 0;
    return {
        'next': next
    };

    function next() {
        i += 1;
        if ( i < 3 ) {
            // Reuse allocated memory...
            buf[ 0 ] = i;
            buf[ 1 ] = -i;
            return {
                'value': buf
            };
        }
        return {
            'done': true
        };
    }
}

if ( ITERATOR_SYMBOL === null ) {
    console.error( 'Environment does not support iterables.' );
} else {
    // Create an iterable:
    iter = {};
    iter[ ITERATOR_SYMBOL ] = iterable;

    // Generate a complex number array:
    arr = Complex64Array.from( iter );
    // returns <Complex64Array>

    len = arr.length;
    // returns 2

    z = arr.get( 0 );
    // returns <Complex64>

    re = realf( z );
    // returns 1.0

    im = imagf( z );
    // returns -1.0
}
```

To invoke a function for each `src` value, provide a callback function. If `src` is an iterable or an array-like object containing complex numbers, the callback must return either a complex number

```javascript
import Complex64 from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32@esm/index.mjs';
import realf from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-realf@esm/index.mjs';
import imagf from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-imagf@esm/index.mjs';

function map( z ) {
    return new Complex64( realf(z)*2.0, imagf(z)*2.0 );
}

// Create a source array:
var src = [ new Complex64( 1.0, -1.0 ) ];

// Create a new complex number array by scaling the source array:
var arr = Complex64Array.from( src, map );
// returns <Complex64Array>

var len = arr.length;
// returns 1

var z = arr.get( 0 );
// returns <Complex64>

var re = realf( z );
// returns 2.0

var im = imagf( z );
// returns -2.0
```

or an array-like object containing real and imaginary components

```javascript
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@esm/index.mjs';
import Complex64 from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32@esm/index.mjs';
import realf from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-realf@esm/index.mjs';
import imagf from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-imagf@esm/index.mjs';

// Return a callback which reuses allocated memory...
function mapFcn() {
    var buf = new Float32Array( 2 );
    return map;

    function map( z ) {
        buf[ 0 ] = realf( z ) * 2.0;
        buf[ 1 ] = imagf( z ) * 2.0;
        return buf;
    }
}

// Create a source array:
var src = [ new Complex64( 1.0, -1.0 ), new Complex64( 2.0, -2.0 ) ];

// Create a new complex number array by scaling the source array:
var arr = Complex64Array.from( src, mapFcn() );
// returns <Complex64Array>

var len = arr.length;
// returns 2

var z = arr.get( 0 );
// returns <Complex64>

var re = realf( z );
// returns 2.0

var im = imagf( z );
// returns -2.0

z = arr.get( 1 );
// returns <Complex64>

re = realf( z );
// returns 4.0

im = imagf( z );
// returns -4.0
```

If `src` is an array-like object containing interleaved real and imaginary components, the callback is invoked for each component and should return the transformed component value.

```javascript
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@esm/index.mjs';
import Complex64 from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32@esm/index.mjs';
import realf from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-realf@esm/index.mjs';
import imagf from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-imagf@esm/index.mjs';

function map( v ) {
    return v * 2.0;
}

// Create a source array:
var src = new Float32Array( [ 1.0, -1.0 ] );

// Create a new complex number array by scaling the source array:
var arr = Complex64Array.from( src, map );
// returns <Complex64Array>

var len = arr.length;
// returns 1

var z = arr.get( 0 );
// returns <Complex64>

var re = realf( z );
// returns 2.0

var im = imagf( z );
// returns -2.0
```

A callback function is provided two arguments:

-   **value**: source value.
-   **index**: source index.

To set the callback execution context, provide a `thisArg`.

```javascript
import Complex64 from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32@esm/index.mjs';
import realf from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-realf@esm/index.mjs';
import imagf from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-imagf@esm/index.mjs';

function map( z ) {
    this.count += 1;
    return new Complex64( realf(z)*2.0, imagf(z)*2.0 );
}

// Create a source array:
var src = [ new Complex64( 1.0, -1.0 ), new Complex64( 1.0, -1.0 ) ];

// Define an execution context:
var ctx = {
    'count': 0
};

// Create a new complex number array by scaling the source array:
var arr = Complex64Array.from( src, map, ctx );
// returns <Complex64Array>

var len = arr.length;
// returns 2

var n = ctx.count;
// returns 2
```

<a name="static-method-of"></a>

#### Complex64Array.of( element0\[, element1\[, ...elementN]] )

Creates a new 64-bit complex number array from a variable number of arguments.

```javascript
import Complex64 from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32@esm/index.mjs';

var arr = Complex64Array.of( 1.0, -1.0, 2.0, -2.0 );
// returns <Complex64Array>

var len = arr.length;
// returns 2

var z1 = new Complex64( 1.0, -1.0 );
var z2 = new Complex64( 2.0, -2.0 );

arr = Complex64Array.of( z1, z2 );
// returns <Complex64Array>

len = arr.length;
// returns 2
```

<a name="method-at"></a>

#### Complex64Array.prototype.at( i )

Returns an array element located at integer position (index) `i`, with support for both nonnegative and negative integer positions.

```javascript
import realf from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-realf@esm/index.mjs';
import imagf from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-imagf@esm/index.mjs';

var arr = new Complex64Array( 10 );

// Set the first, second, and last elements:
arr.set( [ 1.0, -1.0 ], 0 );
arr.set( [ 2.0, -2.0 ], 1 );
arr.set( [ 9.0, -9.0 ], 9 );

// Get the first element:
var z = arr.at( 0 );
// returns <Complex64>

var re = realf( z );
// returns 1.0

var im = imagf( z );
// returns -1.0

// Get the last element:
z = arr.at( -1 );
// returns <Complex64>

re = realf( z );
// returns 9.0

im = imagf( z );
// returns -9.0
```

If provided an out-of-bounds index, the method returns `undefined`.

```javascript
var arr = new Complex64Array( 10 );

var z = arr.at( 100 );
// returns undefined

z = arr.at( -100 );
// returns undefined
```

<a name="method-copy-within"></a>

#### Complex64Array.prototype.copyWithin( target, start\[, end] )

Copies a sequence of elements within the array starting at `start` and ending at `end` (non-inclusive) to the position starting at `target`.

```javascript
import Complex64 from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32@esm/index.mjs';
import realf from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-realf@esm/index.mjs';
import imagf from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-imagf@esm/index.mjs';

var arr = new Complex64Array( 4 );

// Set the array elements:
arr.set( new Complex64( 1.0, -1.0 ), 0 );
arr.set( new Complex64( 2.0, -2.0 ), 1 );
arr.set( new Complex64( 3.0, -3.0 ), 2 );
arr.set( new Complex64( 4.0, -4.0 ), 3 );

// Get the first array element:
var z = arr.get( 0 );
// returns <Complex64>

var re = realf( z );
// returns 1.0

var im = imagf( z );
// returns -1.0

// Get the second array element:
z = arr.get( 1 );
// returns <Complex64>

re = realf( z );
// returns 2.0

im = imagf( z );
// returns -2.0

// Copy the last two elements to the first two elements:
arr.copyWithin( 0, 2 );

// Get the first array element:
z = arr.get( 0 );
// returns <Complex64>

re = realf( z );
// returns 3.0

im = imagf( z );
// returns -3.0

// Get the second array element:
z = arr.get( 1 );
// returns <Complex64>

re = realf( z );
// returns 4.0

im = imagf( z );
// returns -4.0
```

By default, `end` equals the number of array elements (i.e., one more than the last array index). To limit the sequence length, provide an `end` argument.

```javascript
import Complex64 from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32@esm/index.mjs';
import realf from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-realf@esm/index.mjs';
import imagf from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-imagf@esm/index.mjs';

var arr = new Complex64Array( 4 );

// Set the array elements:
arr.set( new Complex64( 1.0, -1.0 ), 0 );
arr.set( new Complex64( 2.0, -2.0 ), 1 );
arr.set( new Complex64( 3.0, -3.0 ), 2 );
arr.set( new Complex64( 4.0, -4.0 ), 3 );

// Get the third array element:
var z = arr.get( 2 );
// returns <Complex64>

var re = realf( z );
// returns 3.0

var im = imagf( z );
// returns -3.0

// Get the last array element:
z = arr.get( 3 );
// returns <Complex64>

re = realf( z );
// returns 4.0

im = imagf( z );
// returns -4.0

// Copy the first two elements to the last two elements:
arr.copyWithin( 2, 0, 2 );

// Get the third array element:
z = arr.get( 2 );
// returns <Complex64>

re = realf( z );
// returns 1.0

im = imagf( z );
// returns -1.0

// Get the last array element:
z = arr.get( 3 );
// returns <Complex64>

re = realf( z );
// returns 2.0

im = imagf( z );
// returns -2.0
```

When a `target`, `start`, and/or `end` index is negative, the respective index is determined relative to the last array element. The following example achieves the same behavior as the previous example:

```javascript
import Complex64 from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32@esm/index.mjs';
import realf from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-realf@esm/index.mjs';
import imagf from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-imagf@esm/index.mjs';

var arr = new Complex64Array( 4 );

// Set the array elements:
arr.set( new Complex64( 1.0, -1.0 ), 0 );
arr.set( new Complex64( 2.0, -2.0 ), 1 );
arr.set( new Complex64( 3.0, -3.0 ), 2 );
arr.set( new Complex64( 4.0, -4.0 ), 3 );

// Get the third array element:
var z = arr.get( 2 );
// returns <Complex64>

var re = realf( z );
// returns 3.0

var im = imagf( z );
// returns -3.0

// Get the last array element:
z = arr.get( 3 );
// returns <Complex64>

re = realf( z );
// returns 4.0

im = imagf( z );
// returns -4.0

// Copy the first two elements to the last two elements using negative indices:
arr.copyWithin( -2, -4, -2 );

// Get the third array element:
z = arr.get( 2 );
// returns <Complex64>

re = realf( z );
// returns 1.0

im = imagf( z );
// returns -1.0

// Get the last array element:
z = arr.get( 3 );
// returns <Complex64>

re = realf( z );
// returns 2.0

im = imagf( z );
// returns -2.0
```

<a name="method-entries"></a>

#### Complex64Array.prototype.entries()

Returns an iterator for iterating over array key-value pairs.

```javascript
import Complex64 from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32@esm/index.mjs';
import realf from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-realf@esm/index.mjs';
import imagf from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-imagf@esm/index.mjs';

var arr = [
    new Complex64( 1.0, -1.0 ),
    new Complex64( 2.0, -2.0 ),
    new Complex64( 3.0, -3.0 )
];
arr = new Complex64Array( arr );

// Create an iterator:
var it = arr.entries();

// Iterate over the key-value pairs...
var v = it.next().value;
// returns [ 0, <Complex64> ]

var re = realf( v[ 1 ] );
// returns 1.0

var im = imagf( v[ 1 ] );
// returns -1.0

v = it.next().value;
// returns [ 1, <Complex64> ]

re = realf( v[ 1 ] );
// returns 2.0

im = imagf( v[ 1 ] );
// returns -2.0

v = it.next().value;
// returns [ 2, <Complex64> ]

re = realf( v[ 1 ] );
// returns 3.0

im = imagf( v[ 1 ] );
// returns -3.0

var bool = it.next().done;
// returns true
```

<a name="method-every"></a>

#### Complex64Array.prototype.every( predicate\[, thisArg] )

Returns a boolean indicating whether all elements pass a test.

```javascript
import realf from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-realf@esm/index.mjs';
import imagf from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-imagf@esm/index.mjs';

function predicate( v ) {
    return ( realf( v ) === imagf( v ) );
}

var arr = new Complex64Array( 3 );

// Set the first three elements:
arr.set( [ 1.0, 1.0 ], 0 );
arr.set( [ 2.0, 2.0 ], 1 );
arr.set( [ 3.0, 3.0 ], 2 );

// Check whether all elements pass a test:
var z = arr.every( predicate );
// returns true
```

The `predicate` function is provided three arguments:

-   **value**: current array element.
-   **index**: current array element index.
-   **arr**: the array on which this method was called.

To set the function execution context, provide a `thisArg`.

```javascript
function predicate( v, i ) {
    this.count += 1;
    return ( i >= 0 );
}

var arr = new Complex64Array( 3 );

var context = {
    'count': 0
};

// Set the first three elements:
arr.set( [ 1.0, 1.0 ], 0 );
arr.set( [ 2.0, 2.0 ], 1 );
arr.set( [ 3.0, 3.0 ], 2 );

var z = arr.every( predicate, context );
// returns true

var count = context.count;
// returns 3
```

<a name="method-fill"></a>

#### Complex64Array.prototype.fill( value\[, start\[, end]] )

Returns a modified typed array filled with a fill value.

```javascript
import Complex64 from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32@esm/index.mjs';
import realf from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-realf@esm/index.mjs';
import imagf from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-imagf@esm/index.mjs';

var arr = new Complex64Array( 3 );

// Set all elements to the same value:
arr.fill( new Complex64( 1.0, 1.0 ) );

var z = arr.get( 0 );
// returns <Complex64>

var re = realf( z );
// returns 1.0

var im = imagf( z );
// returns 1.0

z = arr.get( 2 );
// returns <Complex64>

re = realf( z );
// returns 1.0

im = imagf( z );
// returns 1.0

// Fill all elements starting from the second element:
arr.fill( new Complex64( 2.0, 2.0 ), 1 );

z = arr.get( 1 );
// returns <Complex64>

re = realf( z );
// returns 2.0

im = imagf( z );
// returns 2.0

z = arr.get( 2 );
// returns <Complex64>

re = realf( z );
// returns 2.0

im = imagf( z );
// returns 2.0

// Fill all elements from first element until the second-to-last element:
arr.fill( new Complex64( 3.0, 3.0 ), 0, 2 );

z = arr.get( 0 );
// returns <Complex64>

re = realf( z );
// returns 3.0

im = imagf( z );
// returns 3.0

z = arr.get( 1 );
// returns <Complex64>

re = realf( z );
// returns 3.0

im = imagf( z );
// returns 3.0
```

When a `start` and/or `end` index is negative, the respective index is determined relative to the last array element.

```javascript
import Complex64 from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32@esm/index.mjs';
import realf from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-realf@esm/index.mjs';
import imagf from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-imagf@esm/index.mjs';

var arr = new Complex64Array( 3 );

// Set all array elements, except the last element, to the same value:
arr.fill( new Complex64( 1.0, 1.0 ), 0, -1 );

var z = arr.get( 0 );
// returns <Complex64>

var re = realf( z );
// returns 1.0

var im = imagf( z );
// returns 1.0

z = arr.get( arr.length - 1 );
// returns <Complex64>

re = realf( z );
// returns 0.0

im = imagf( z );
// returns 0.0
```

<a name="method-filter"></a>

#### Complex64Array.prototype.filter( predicate\[, thisArg] )

Returns a new array containing the elements of an array which pass a test implemented by a predicate function.

```javascript
import realf from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-realf@esm/index.mjs';
import imagf from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-imagf@esm/index.mjs';

function predicate( v ) {
    return ( realf( v ) === imagf( v ) );
}

var arr = new Complex64Array( 3 );

// Set the first three elements:
arr.set( [ 1.0, -1.0 ], 0 );
arr.set( [ 2.0, 2.0 ], 1 );
arr.set( [ 3.0, -3.0 ], 2 );

var out = arr.filter( predicate );
// returns <Complex64Array>

var len = out.length;
// returns 1

var z = out.get( 0 );
// returns <Complex64>

var re = realf( z );
// returns 2.0

var im = imagf( z );
// returns 2.0
```

The `predicate` function is provided three arguments:

-   **value**: current array element.
-   **index**: current array element index.
-   **arr**: the array on which this method was called.

To set the function execution context, provide a `thisArg`.

```javascript
import realf from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-realf@esm/index.mjs';
import imagf from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-imagf@esm/index.mjs';

function predicate( v, i ) {
    this.count += 1;
    return ( i >= 0 && realf( v ) === imagf( v ) );
}

var arr = new Complex64Array( 3 );

var context = {
    'count': 0
};

// Set the first three elements:
arr.set( [ 1.0, -1.0 ], 0 );
arr.set( [ 2.0, 2.0 ], 1 );
arr.set( [ 3.0, 3.0 ], 2 );

var out = arr.filter( predicate, context );
// returns <Complex64Array>

var len = out.length;
// returns 2

var count = context.count;
// returns 3
```

<a name="method-find"></a>

#### Complex64Array.prototype.find( predicate\[, thisArg] )

Returns the first element in an array for which a predicate function returns a truthy value.

```javascript
import realf from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-realf@esm/index.mjs';
import imagf from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-imagf@esm/index.mjs';
import Complex64 from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32@esm/index.mjs';

function predicate( v ) {
    return ( realf( v ) === imagf( v ) );
}

var arr = new Complex64Array( 3 );

// Set the first three elements:
arr.set( [ 1.0, 1.0 ], 0 );
arr.set( [ 2.0, 2.0 ], 1 );
arr.set( [ 3.0, 3.0 ], 2 );

var z = arr.find( predicate );
// returns <Complex64>

var re = realf( z );
// returns 1.0

var im = imagf( z );
// returns 1.0
```

The `predicate` function is provided three arguments:

-   **value**: current array element.
-   **index**: current array element index.
-   **arr**: the array on which this method was called.

To set the function execution context, provide a `thisArg`.

```javascript
import realf from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-realf@esm/index.mjs';
import imagf from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-imagf@esm/index.mjs';

function predicate( v, i ) {
    this.count += 1;
    return ( i >= 0 && realf( v ) === imagf( v ) );
}

var arr = new Complex64Array( 3 );

var context = {
    'count': 0
};

// Set the first three elements:
arr.set( [ 1.0, -1.0 ], 0 );
arr.set( [ 2.0, 2.0 ], 1 );
arr.set( [ 3.0, 3.0 ], 2 );

var z = arr.find( predicate, context );
// returns <Complex64>

var re = realf( z );
// returns 2.0

var im = imagf( z );
// returns 2.0

var count = context.count;
// returns 2
```

<a name="method-find-index"></a>

#### Complex64Array.prototype.findIndex( predicate\[, thisArg] )

Returns the index of the first element in an array for which a predicate function returns a truthy value.

```javascript
import realf from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-realf@esm/index.mjs';
import imagf from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-imagf@esm/index.mjs';

function predicate( v ) {
    return ( realf( v ) === imagf( v ) );
}

var arr = new Complex64Array( 3 );

// Set the first three elements:
arr.set( [ 1.0, -1.0 ], 0 );
arr.set( [ 2.0, -2.0 ], 1 );
arr.set( [ 3.0, 3.0 ], 2 );

var idx = arr.findIndex( predicate );
// returns 2
```

The `predicate` function is provided three arguments:

-   **value**: current array element.
-   **index**: current array element index.
-   **arr**: the array on which this method was called.

To set the function execution context, provide a `thisArg`.

```javascript
import realf from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-realf@esm/index.mjs';
import imagf from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-imagf@esm/index.mjs';

function predicate( v, i ) {
    this.count += 1;
    return ( i >= 0 && realf( v ) === imagf( v ) );
}

var arr = new Complex64Array( 3 );

var context = {
    'count': 0
};

// Set the first three elements:
arr.set( [ 1.0, -1.0 ], 0 );
arr.set( [ 2.0, -2.0 ], 1 );
arr.set( [ 3.0, -3.0 ], 2 );

var idx = arr.findIndex( predicate, context );
// returns -1

var count = context.count;
// returns 3
```

<a name="method-find-last"></a>

#### Complex64Array.prototype.findLast( predicate\[, thisArg] )

Returns the last element in an array for which a predicate function returns a truthy value.

```javascript
import realf from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-realf@esm/index.mjs';
import imagf from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-imagf@esm/index.mjs';
import Complex64 from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32@esm/index.mjs';

function predicate( v ) {
    return ( realf( v ) === imagf( v ) );
}

var arr = new Complex64Array( 3 );

// Set the first three elements:
arr.set( [ 1.0, 1.0 ], 0 );
arr.set( [ 2.0, 2.0 ], 1 );
arr.set( [ 3.0, 3.0 ], 2 );

var z = arr.findLast( predicate );
// returns <Complex64>

var re = realf( z );
// returns 3.0

var im = imagf( z );
// returns 3.0
```

The `predicate` function is provided three arguments:

-   **value**: current array element.
-   **index**: current array element index.
-   **arr**: the array on which this method was called.

To set the function execution context, provide a `thisArg`.

```javascript
import realf from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-realf@esm/index.mjs';
import imagf from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-imagf@esm/index.mjs';

function predicate( v, i ) {
    this.count += 1;
    return ( i >= 0 && realf( v ) === imagf( v ) );
}

var arr = new Complex64Array( 3 );

var context = {
    'count': 0
};

// Set the first three elements:
arr.set( [ 1.0, -1.0 ], 0 );
arr.set( [ 2.0, 2.0 ], 1 );
arr.set( [ 3.0, -3.0 ], 2 );

var z = arr.findLast( predicate, context );
// returns <Complex64>

var re = realf( z );
// returns 2.0

var im = imagf( z );
// returns 2.0

var count = context.count;
// returns 2
```

<a name="method-find-last-index"></a>

#### Complex64Array.prototype.findLastIndex( predicate\[, thisArg] )

Returns the index of the last element in an array for which a predicate function returns a truthy value.

```javascript
import realf from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-realf@esm/index.mjs';
import imagf from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-imagf@esm/index.mjs';

function predicate( v ) {
    return ( realf( v ) === imagf( v ) );
}

var arr = new Complex64Array( 3 );

// Set the first three elements:
arr.set( [ 1.0, 1.0 ], 0 );
arr.set( [ 2.0, 2.0 ], 1 );
arr.set( [ 3.0, -3.0 ], 2 );

var idx = arr.findLastIndex( predicate );
// returns 1
```

The `predicate` function is provided three arguments:

-   **value**: current array element.
-   **index**: current array element index.
-   **arr**: the array on which this method was called.

To set the function execution context, provide a `thisArg`.

```javascript
import realf from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-realf@esm/index.mjs';
import imagf from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-imagf@esm/index.mjs';

function predicate( v, i ) {
    this.count += 1;
    return ( i >= 0 && realf( v ) === imagf( v ) );
}

var arr = new Complex64Array( 3 );

var context = {
    'count': 0
};

// Set the first three elements:
arr.set( [ 1.0, -1.0 ], 0 );
arr.set( [ 2.0, -2.0 ], 1 );
arr.set( [ 3.0, -3.0 ], 2 );

var idx = arr.findLastIndex( predicate, context );
// returns -1

var count = context.count;
// returns 3
```

<a name="method-for-each"></a>

#### Complex64Array.prototype.forEach( callbackFn\[, thisArg] )

Invokes a function once for each array element.

```javascript
import Complex64 from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32@esm/index.mjs';

function log( v, i ) {
    console.log( '%s: %s', i, v.toString() );
}

var arr = new Complex64Array( 3 );

// Set the first three elements:
arr.set( [ 1.0, 1.0 ], 0 );
arr.set( [ 2.0, 2.0 ], 1 );
arr.set( [ 3.0, 3.0 ], 2 );

arr.forEach( log );
/* =>
    0: 1 + 1i
    1: 2 + 2i
    2: 3 + 3i
*/
```

The invoked function is provided three arguments:

-   **value**: current array element.
-   **index**: current array element index.
-   **arr**: the array on which this method was called.

To set the function execution context, provide a `thisArg`.

```javascript
import Complex64 from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32@esm/index.mjs';

function fcn( v, i ) {
    this.count += 1;
    console.log( '%s: %s', i, v.toString() );
}

var arr = new Complex64Array( 3 );

var context = {
    'count': 0
};

// Set the first three elements:
arr.set( [ 1.0, -1.0 ], 0 );
arr.set( [ 2.0, -2.0 ], 1 );
arr.set( [ 3.0, -3.0 ], 2 );

arr.forEach( fcn, context );
/* =>
    0: 1 + 1i
    1: 2 + 2i
    2: 3 + 3i
*/

var count = context.count;
// returns 3
```

<a name="method-get"></a>

#### Complex64Array.prototype.get( i )

Returns an array element located at a nonnegative integer position (index) `i`.

```javascript
import realf from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-realf@esm/index.mjs';
import imagf from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-imagf@esm/index.mjs';

var arr = new Complex64Array( 10 );

// Set the first element:
arr.set( [ 1.0, -1.0 ], 0 );

// Get the first element:
var z = arr.get( 0 );
// returns <Complex64>

var re = realf( z );
// returns 1.0

var im = imagf( z );
// returns -1.0
```

If provided an out-of-bounds index, the method returns `undefined`.

```javascript
var arr = new Complex64Array( 10 );

var z = arr.get( 100 );
// returns undefined
```

<a name="method-includes"></a>

#### Complex64Array.prototype.includes( searchElement\[, fromIndex] )

Returns a boolean indicating whether an array includes a provided value.

```javascript
import Complex64 from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32@esm/index.mjs';

var arr = new Complex64Array( 5 );

arr.set( [ 1.0, -1.0 ], 0 );
arr.set( [ 2.0, -2.0 ], 1 );
arr.set( [ 3.0, -3.0 ], 2 );
arr.set( [ 4.0, -4.0 ], 3 );
arr.set( [ 5.0, -5.0 ], 4 );

var bool = arr.includes( new Complex64( 3.0, -3.0 ) );
// returns true

bool = arr.includes( new Complex64( 3.0, -3.0 ), 3 );
// returns false

bool = arr.includes( new Complex64( 4.0, -4.0 ), -3 );
// returns true
```

<a name="method-index-of"></a>

#### Complex64Array.prototype.indexOf( searchElement\[, fromIndex] )

Returns the first index at which a given element can be found.

```javascript
import Complex64 from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32@esm/index.mjs';

var arr = new Complex64Array( 5 );

arr.set( [ 1.0, -1.0 ], 0 );
arr.set( [ 2.0, -2.0 ], 1 );
arr.set( [ 3.0, -3.0 ], 2 );
arr.set( [ 4.0, -4.0 ], 3 );
arr.set( [ 2.0, -2.0 ], 4 );

var idx = arr.indexOf( new Complex64( 3.0, -3.0 ) );
// returns 2

idx = arr.indexOf( new Complex64( 2.0, -2.0 ), 2 );
// returns 4

idx = arr.indexOf( new Complex64( 4.0, -4.0 ), -3 );
// returns 3
```

If `searchElement` is not present in the array, the method returns `-1`.

```javascript
import Complex64 from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32@esm/index.mjs';

var arr = new Complex64Array( 10 );

arr.set( [ 1.0, -1.0 ], 0 );
arr.set( [ 2.0, -2.0 ], 1 );

var idx = arr.indexOf( new Complex64( 3.0, -3.0 ) );
// returns -1

idx = arr.indexOf( new Complex64( 1.0, -1.0 ), 1 );
// returns -1
```

<a name="method-join"></a>

#### Complex64Array.prototype.join( \[separator] )

Returns a new string by concatenating all array elements.

```javascript
var arr = new Complex64Array( 3 );

arr.set( [ 1.0, 1.0 ], 0 );
arr.set( [ 2.0, -2.0 ], 1 );
arr.set( [ 3.0, 3.0 ], 2 );

var str = arr.join();
// returns '1 + 1i,2 - 2i,3 + 3i'
```

By default, the method separates serialized array elements with a comma. To use an alternative separator, provide a `separator` string.

```javascript
var arr = new Complex64Array( 3 );

arr.set( [ 1.0, 1.0 ], 0 );
arr.set( [ 2.0, -2.0 ], 1 );
arr.set( [ 3.0, 3.0 ], 2 );

var str = arr.join( '/' );
// returns '1 + 1i/2 - 2i/3 + 3i'
```

<a name="method-last-index-of"></a>

#### Complex64Array.prototype.lastIndexOf( searchElement\[, fromIndex] )

Returns the last index at which a given element can be found.

```javascript
import Complex64 from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32@esm/index.mjs';

var arr = new Complex64Array( 5 );

arr.set( [ 1.0, -1.0 ], 0 );
arr.set( [ 2.0, -2.0 ], 1 );
arr.set( [ 3.0, -3.0 ], 2 );
arr.set( [ 4.0, -4.0 ], 3 );
arr.set( [ 2.0, -2.0 ], 4 );

var idx = arr.lastIndexOf( new Complex64( 3.0, -3.0 ) );
// returns 2

idx = arr.lastIndexOf( new Complex64( 2.0, -2.0 ), 2 );
// returns 1

idx = arr.lastIndexOf( new Complex64( 4.0, -4.0 ), -1 );
// returns 3
```

If `searchElement` is not present in the array, the method returns `-1`.

```javascript
import Complex64 from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32@esm/index.mjs';

var arr = new Complex64Array( 10 );

arr.set( [ 1.0, -1.0 ], 0 );
arr.set( [ 2.0, -2.0 ], 1 );

var idx = arr.lastIndexOf( new Complex64( 3.0, -3.0 ) );
// returns -1

idx = arr.lastIndexOf( new Complex64( 2.0, -2.0 ), 0 );
// returns -1
```

<a name="method-map"></a>

#### Complex64Array.prototype.map( callbackFn\[, thisArg] )

Returns a new array with each element being the result of a provided callback function.

```javascript
import Complex64 from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32@esm/index.mjs';
import realf from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-realf@esm/index.mjs';
import imagf from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-imagf@esm/index.mjs';

function scale( v ) {
    return new Complex64( 2.0*realf( v ), 2.0*imagf( v ) );
}

var arr = new Complex64Array( 3 );

// Set the first three elements:
arr.set( [ 1.0, -1.0 ], 0 );
arr.set( [ 2.0, -2.0 ], 1 );
arr.set( [ 3.0, -3.0 ], 2 );

var out = arr.map( scale );
// returns <Complex64Array>

var z = out.get( 0 );
// returns <complex64>

var re = realf( z );
// returns 2.0

var im = imagf( z );
// returns -2.0
```

The callback function is provided three arguments:

-   **value**: current array element.
-   **index**: current array element index.
-   **arr**: the array on which this method was called.

To set the function execution context, provide a `thisArg`.

```javascript
import Complex64 from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32@esm/index.mjs';
import realf from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-realf@esm/index.mjs';
import imagf from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-imagf@esm/index.mjs';

function scale( v ) {
    this.count += 1;
    return new Complex64( 2.0*realf( v ), 2.0*imagf( v ) );
}

var arr = new Complex64Array( 3 );

var context = {
    'count': 0
};

// Set the first three elements:
arr.set( [ 1.0, 1.0 ], 0 );
arr.set( [ 2.0, 2.0 ], 1 );
arr.set( [ 3.0, 3.0 ], 2 );

var out = arr.map( scale, context );
// returns <Complex64Array>

var count = context.count;
// returns 3
```

<a name="method-set"></a>

#### Complex64Array.prototype.set( z\[, i] )

Sets one or more array elements.

```javascript
import Complex64 from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32@esm/index.mjs';
import realf from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-realf@esm/index.mjs';
import imagf from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-imagf@esm/index.mjs';

var arr = new Complex64Array( 10 );

// Get the first element:
var z = arr.get( 0 );
// returns <Complex64>

var re = realf( z );
// returns 0.0

var im = imagf( z );
// returns 0.0

// Set the first element:
arr.set( new Complex64( 1.0, -1.0 ) );

// Get the first element:
z = arr.get( 0 );
// returns <Complex64>

re = realf( z );
// returns 1.0

im = imagf( z );
// returns -1.0
```

By default, the method sets array elements starting at position (index) `i = 0`. To set elements starting elsewhere in the array, provide an index argument `i`.

```javascript
import Complex64 from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32@esm/index.mjs';
import realf from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-realf@esm/index.mjs';
import imagf from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-imagf@esm/index.mjs';

var arr = new Complex64Array( 10 );

// Get the fifth element:
var z = arr.get( 4 );
// returns <Complex64>

var re = realf( z );
// returns 0.0

var im = imagf( z );
// returns 0.0

// Set the fifth element:
arr.set( new Complex64( 1.0, -1.0 ), 4 );

// Get the fifth element:
z = arr.get( 4 );
// returns <Complex64>

re = realf( z );
// returns 1.0

im = imagf( z );
// returns -1.0
```

In addition to providing a complex number, to set one or more array elements, provide an array-like object containing either complex numbers

```javascript
import Complex64 from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32@esm/index.mjs';
import realf from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-realf@esm/index.mjs';
import imagf from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-imagf@esm/index.mjs';

var arr = new Complex64Array( 10 );

// Define an array of complex numbers:
var buf = [
    new Complex64( 1.0, -1.0 ),
    new Complex64( 2.0, -2.0 ),
    new Complex64( 3.0, -3.0 )
];

// Set the fifth, sixth, and seventh elements:
arr.set( buf, 4 );

// Get the sixth element:
var z = arr.get( 5 );
// returns <Complex64>

var re = realf( z );
// returns 2.0

var im = imagf( z );
// returns -2.0
```

or interleaved real and imaginary components

```javascript
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@esm/index.mjs';
import realf from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-realf@esm/index.mjs';
import imagf from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-imagf@esm/index.mjs';

var arr = new Complex64Array( 10 );

// Define an interleaved array of real and imaginary components:
var buf = new Float32Array( [ 1.0, -1.0, 2.0, -2.0, 3.0, -3.0 ] );

// Set the fifth, sixth, and seventh elements:
arr.set( buf, 4 );

// Get the sixth element:
var z = arr.get( 5 );
// returns <Complex64>

var re = realf( z );
// returns 2.0

var im = imagf( z );
// returns -2.0
```

A few notes:

-   If `i` is out-of-bounds, the method throws an error.
-   If a target array cannot accommodate all values (i.e., the length of source array plus `i` exceeds the target array length), the method throws an error.
-   If provided a [typed array][@stdlib/array/typed] which shares an [`ArrayBuffer`][@stdlib/array/buffer] with the target array, the method will intelligently copy the source range to the destination range.

<a name="method-some"></a>

#### Complex64Array.prototype.some( predicate\[, thisArg] )

Returns a boolean indicating whether at least one element passes a test.

```javascript
import realf from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-realf@esm/index.mjs';
import imagf from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-imagf@esm/index.mjs';

function predicate( v ) {
    return ( realf( v ) === imagf( v ) );
}

var arr = new Complex64Array( 3 );

// Set the first three elements:
arr.set( [ 1.0, -1.0 ], 0 );
arr.set( [ 2.0, 2.0 ], 1 );
arr.set( [ 3.0, -3.0 ], 2 );

// Check whether at least one element passes a test:
var z = arr.some( predicate );
// returns true
```

The `predicate` function is provided three arguments:

-   **value**: current array element.
-   **index**: current array element index.
-   **arr**: the array on which this method was called.

To set the function execution context, provide a `thisArg`.

```javascript
import realf from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-realf@esm/index.mjs';
import imagf from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-imagf@esm/index.mjs';

function predicate( v, i ) {
    this.count += 1;
    return ( imagf( v ) === realf( v ) );
}

var arr = new Complex64Array( 3 );

var context = {
    'count': 0
};

// Set the first three elements:
arr.set( [ 1.0, -1.0 ], 0 );
arr.set( [ 2.0, 2.0 ], 1 );
arr.set( [ 3.0, -3.0 ], 2 );

var z = arr.some( predicate, context );
// returns true

var count = context.count;
// returns 2
```

<a name="method-subarray"></a>

#### Complex64Array.prototype.subarray( \[begin\[, end]] )

Creates a new typed array view over the same underlying [`ArrayBuffer`][@stdlib/array/buffer] and with the same underlying data type as the host array.

```javascript
import realf from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-realf@esm/index.mjs';
import imagf from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-imagf@esm/index.mjs';

var arr = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );

var subarr = arr.subarray();
// returns <Complex64Array>

var len = subarr.length;
// returns 4

var z = subarr.get( 0 );
// returns <Complex64>

var re = realf( z );
// returns 1.0

var im = imagf( z );
// returns 2.0

z = subarr.get( len-1 );
// returns <Complex64>

re = realf( z );
// returns 7.0

im = imagf( z );
// returns 8.0
```

By default, the method creates a typed array view beginning with the first array element. To specify an alternative array index at which to begin, provide a `begin` index (inclusive).

```javascript
import imagf from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-imagf@esm/index.mjs';
import realf from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-realf@esm/index.mjs';

var arr = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );

var subarr = arr.subarray( 1 );
// returns <Complex64Array>

var len = subarr.length;
// returns 3

var z = subarr.get( 0 );
// returns <Complex64>

var re = realf( z );
// returns 3.0

var im = imagf( z );
// returns 4.0
```

By default, the method creates a typed array view which includes all array elements after `begin`. To limit the number of array elements after `begin`, provide an `end` index (exclusive).

```javascript
import realf from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-realf@esm/index.mjs';
import imagf from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-imagf@esm/index.mjs';

var arr = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );

var subarr = arr.subarray( 1, -1 );
// returns <Complex64Array>

var len = subarr.length;
// returns 2

var z = subarr.get( 0 );
// returns <Complex64>

var re = realf( z );
// returns 3.0

var im = imagf( z );
// returns 4.0

z = subarr.get( len-1 );
// returns <Complex64>

re = realf( z );
// returns 5.0

im = imagf( z );
// returns 6.0
```

<a name="method-to-string"></a>

#### Complex64Array.prototype.toString()

Serializes an array as a string.

```javascript
var arr = new Complex64Array( 3 );

arr.set( [ 1.0, 1.0 ], 0 );
arr.set( [ 2.0, -2.0 ], 1 );
arr.set( [ 3.0, 3.0 ], 2 );

var str = arr.toString();
// returns '1 + 1i,2 - 2i,3 + 3i'
```

<a name="method-with"></a>

#### Complex128Array.prototype.with( index, value )

Returns a new typed array with the element at a provided index replaced with a provided value.

```javascript
import realf from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-realf@esm/index.mjs';
import imagf from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-imagf@esm/index.mjs';
import Complex64 from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32@esm/index.mjs';

var arr = new Complex64Array( 3 );

arr.set( [ 1.0, 1.0 ], 0 );
arr.set( [ 2.0, 2.0 ], 1 );
arr.set( [ 3.0, 3.0 ], 1 );

var out = arr.with( 0, new Complex64( 4.0, 4.0 ) );
// returns <Complex64Array>

var z = out.get( 0 );
// returns <Complex64>

var re = realf( z );
// returns 4.0

var im = imagf( z );
// returns 4.0
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

* * *

## Notes

-   While a `Complex64Array` _strives_ to maintain (but does not **guarantee**) consistency with [typed arrays][@stdlib/array/typed], significant deviations from ECMAScript-defined [typed array][@stdlib/array/typed] behavior are as follows:

    -   The constructor does **not** require the `new` operator.
    -   The constructor and associated methods support a broader variety of input argument types in order to better accommodate complex number input.
    -   Accessing array elements using bracket syntax (e.g., `Z[i]`) is **not** supported. Instead, one **must** use the `.get()` method which returns a value compatible with complex number output.
    -   The `set` method has extended behavior in order to support complex numbers.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

* * *

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import Complex64 from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32@esm/index.mjs';
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@esm/index.mjs';
import logEach from 'https://cdn.jsdelivr.net/gh/stdlib-js/console-log-each@esm/index.mjs';
import Complex64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-complex64@esm/index.mjs';

// Create a complex array by specifying a length:
var out = new Complex64Array( 3 );
logEach( '%s', out );

// Create a complex array from an array of complex numbers:
var arr = [
    new Complex64( 1.0, -1.0 ),
    new Complex64( -3.14, 3.14 ),
    new Complex64( 0.5, 0.5 )
];
out = new Complex64Array( arr );
logEach( '%s', out );

// Create a complex array from an interleaved typed array:
arr = new Float32Array( [ 1.0, -1.0, -3.14, 3.14, 0.5, 0.5 ] );
out = new Complex64Array( arr );
logEach( '%s', out );

// Create a complex array from an array buffer:
arr = new Float32Array( [ 1.0, -1.0, -3.14, 3.14, 0.5, 0.5 ] );
out = new Complex64Array( arr.buffer );
logEach( '%s', out );

// Create a complex array from an array buffer view:
arr = new Float32Array( [ 1.0, -1.0, -3.14, 3.14, 0.5, 0.5 ] );
out = new Complex64Array( arr.buffer, 8, 2 );
logEach( '%s', out );

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/array-complex128`][@stdlib/array/complex128]</span><span class="delimiter">: </span><span class="description">Complex128Array.</span>
-   <span class="package-name">[`@stdlib/complex-cmplx`][@stdlib/complex/cmplx]</span><span class="delimiter">: </span><span class="description">create a complex number.</span>
-   <span class="package-name">[`@stdlib/complex-float32`][@stdlib/complex/float32]</span><span class="delimiter">: </span><span class="description">64-bit complex number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/array-complex64.svg
[npm-url]: https://npmjs.org/package/@stdlib/array-complex64

[test-image]: https://github.com/stdlib-js/array-complex64/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/array-complex64/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/array-complex64/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/array-complex64?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/array-complex64.svg
[dependencies-url]: https://david-dm.org/stdlib-js/array-complex64/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/array-complex64/tree/deno
[umd-url]: https://github.com/stdlib-js/array-complex64/tree/umd
[esm-url]: https://github.com/stdlib-js/array-complex64/tree/esm
[branches-url]: https://github.com/stdlib-js/array-complex64/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/array-complex64/main/LICENSE

[@stdlib/array/typed]: https://github.com/stdlib-js/array-typed/tree/esm

[@stdlib/array/buffer]: https://github.com/stdlib-js/array-buffer/tree/esm

[@stdlib/complex/float32]: https://github.com/stdlib-js/complex-float32/tree/esm

<!-- <related-links> -->

[@stdlib/array/complex128]: https://github.com/stdlib-js/array-complex128/tree/esm

[@stdlib/complex/cmplx]: https://github.com/stdlib-js/complex-cmplx/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->
