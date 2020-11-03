# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @kevinli296/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(...)`: Asserts true or false whether if two arrays are equal.
* `assertEqual(...)`: Asserts true or false whether if two values are equal.
* `assertObjectsEqual(...)`: Asserts true or false whether if two objects are equal.
* `countLetters(...)`: Counts how many times a letter occurs in a string.
* `countOnly(...)`: Counts only the elements you desire to count.
* `eqArrays(...)`: Checks if two arrays are exactly equal.
* `eqObjects(...)`: Checks if two objects are exactly equal.
* `findKey(...)`: Finds the key of an object.
* `findKeyByValue(...)`: Finds the key of an object via searching by value.
* `flatten(...)`: Flattens the given array by one dimension.
* `head(...)`: Returns the first element of an array.
* `letterPositions(...)`: Returns the indexed position of each letter.
* `map(...)`: Returns a new array with elements of the callback function's desired index.
* `middle(...)`: Returns the middle index of an odd numbered array, or middle two indices of an even numbered array.
* `tail(...)`: Returns the rest of the elements minus the first of the array.
* `takeUntil(...)`: Returns an array until the callback function's desired element.
* `without(...)`: Returns an array without the callback function's desired element.