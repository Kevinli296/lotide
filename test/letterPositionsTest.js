const assertArraysEqual = require('../assertArraysEqual');
const letterPositions = require('../letterPositions');

let letterPosOfHello = letterPositions('hello');

assertArraysEqual(letterPositions('hello').e, [1]);
assertArraysEqual((letterPosOfHello['h']), [0]);
assertArraysEqual((letterPosOfHello['l']), [2, 3]);
assertArraysEqual((letterPosOfHello['a']), undefined);



/*
    output =>
    {
      'h': [0]
      'e': [1]
      'l': [2, 3]
      'o': [4]
    }

    index:  0  1  2  3  4
    value:  h  e  l  l  o
*/
