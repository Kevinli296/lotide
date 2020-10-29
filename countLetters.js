const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`ASSERTION PASSED✅✅✅: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`ASSERTION FAILED❌❌❌: ${actual} !== ${expected}`);
  }
};

//create a function called countLetters
//function should take in a sentence (as a string)
//it should then return a count of each of the letters in that sentence
//can use for of loop




//ex.
//countLetters('LHL') should return results indicating L appears twice, H appears once

//maybe want to output as object to state how many occurrences of a letter
//apply key values
//takes in one parameter, which is the string we're testing


const countLetters = (string) => {
  let result = {};
  for (letter of string) {
    if (result[letter]) {
      result[letter] += 1;
    } else {
      result[letter] = 1;
    }
  }
  return result;
};



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