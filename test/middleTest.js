const assertArraysEqual = require('../assertArraysEqual');
const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
    it("returns [] for [1]", () => {
      assert.deepEqual(middle([1]), []);
    });

    it("returns [] for [1, 2]", () => {
        assert.deepEqual(middle([1, 2]), []); 
    });
    
    it("returns [2] for [1, 2, 3]", () => {
        assert.deepEqual(middle([1, 2, 3]), [2]); 
    });

    it("returns [2, 3] for [1, 2, 3, 4]", () => {
        assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]); 
    });

    it("returns [3, 2] for [1, 4, 3, 2, 6, 8]", () => {
        assert.deepEqual(middle([1, 4, 3, 2, 6, 8]), [3, 2]); 
    });

    it("returns ['hello'] for ['hi', 'bye', 'hello', 'whatsup', 'morning']", () => {
        assert.deepEqual(middle(['hi', 'bye', 'hello', 'whatsup', 'morning']), ['hello']); 
    });

    it("returns ['hello', 'whatsup'] for ['hi', 'bye', 'hello', 'whatsup', 'morning']", () => {
        assert.deepEqual(middle(['hi', 'bye', 'hello', 'whatsup', 'morning', 'night']), ['hello', 'whatsup']); 
    });

  });

//for arrays with one or two elements, return an empty array.
//ex.
console.log(middle([1])) // => []
console.log(middle([1, 2])) // => []

//for arrays with odd numbers elements, an array containing a single middle element should be returned.
//ex.
console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]

//for arrays with even numbers elements, an array containing the two middle should be returned.
//ex.
console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]


console.log(middle([1, 4, 3, 2, 6, 8])); // => [3, 2]
//write test assertions for the various scenarios with middle

const test1 = ['hi', 'bye', 'hello', 'whatsup','morning'];
const test2 = ['hi', 'bye', 'hello', 'whatsup','morning', 'night'];

assertArraysEqual(middle(test2), middle(test2))
assertArraysEqual(middle(test1), middle(test1))