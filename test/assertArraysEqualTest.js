const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 3, 3], [1, 2, 3]);
assertArraysEqual([2, 2, 3], [1, 2, 4]);
assertArraysEqual([1, 2, 1], [1, 2, 3]);
assertArraysEqual([2, 2, 3], [1, 3]);
assertArraysEqual([1, 2, 3], [1, 6]);