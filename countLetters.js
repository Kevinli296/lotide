const assertEqual = require('./assertEqual');

// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`ASSERTION PASSED✅✅✅: ${actual} === ${expected}`);
//   } else if (actual !== expected) {
//     console.log(`ASSERTION FAILED❌❌❌: ${actual} !== ${expected}`);
//   }
// };

//create a function called countLetters
//function should take in a sentence (as a string)
//it should then return a count of each of the letters in that sentence
//can use for of loop


const countLetters = (string) => {
  let result = {};
  for (const letter of string) {
    if (result[letter]) {
      result[letter] += 1;
    } else {
      result[letter] = 1;
    }
  }
  return result;
};

module.exports = countLetters;