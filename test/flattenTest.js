const flatten = require('../flatten');

/*
INDEX
0 1  2     3  4
1 2 [3, 4] 5 [6]
ELEMENT
*/

console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]