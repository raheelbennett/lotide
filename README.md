# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @raheelbennett/lotide`

**Require it:**

`const _ = require('@raheelbennett/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head`: returns the first element of an array
* `tail`: returns the array without the first element
* `middle`: returns the middle element(s) of an array
* `assertArrayEqual`: asserts whether two arrays are equal
* `assertEqual`: asserts whether two values are equal
* `assertObjectsEqual`: asserts whether two objects are equal
* `countLetters`: takes in a sentence (as a string) and then return a count of each of the letters in that sentence.
* `countOnly`: counts how many times an item and items is present in an object
* `eqArrays`: compares two array and returns true or false
* `eqObjects`: compares two objects and returns true or false
* `findKey`: takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value.
* `findKeyByValue`: takes in an object and a value. It should scan the object and return the first key which contains the given value. 
* `letterPositions`: will return all the indices in the string where each character is found.
* `map`: will return a new array based on the results of the callback function.
* `takeUntil`: will keep collecting items from a provided array until the callback provided returns a truthy value.
* `without`: will take two arrays and generate a new array of elements from source array that are not found in itemsToRemove array.
