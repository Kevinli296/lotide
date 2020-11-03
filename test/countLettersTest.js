const assertEqual = require('../assertEqual');
const countLetters = require('../countLetters');

//ex.
//countLetters('LHL') should return results indicating L appears twice, H appears once

//maybe want to output as object to state how many occurrences of a letter
//apply key values
//takes in one parameter, which is the string we're testing

const test1 = countLetters('LHLHLHL');
const test2 = countLetters('ABBCCCDDDD');
//TEST CODE
assertEqual(test1['L'], 4);
assertEqual(test1['H'], 3);
assertEqual(test1['C'], undefined);
assertEqual(test1['A'], undefined);
assertEqual(test2['A'], 1);
assertEqual(test2['B'], 2);
assertEqual(test2['C'], 3);
assertEqual(test2['D'], 4);
assertEqual(test2['E'], undefined);

// output =>
// { L: 4,
//   H: 3}