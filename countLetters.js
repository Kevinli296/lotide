const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`ASSERTION PASSED✅✅✅: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`ASSERTION FAILED❌❌❌: ${actual} !== ${expected}`);
  }
};

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

console.log(countLetters('LHLHLHL'));
console.log(countLetters('ABBCCCDDDDEEEEEFFFFFF'));

// output => 
// { L: 4,
//   H: 3}