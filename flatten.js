//challenge will be similar to countLetters
//implementing a function called letterPositions
//return all the indices (zero-based positions) in the string where each character is found
//for each letter, instead of using one nubmer to represent the occurrences, you will need mulitple (aka result should be an object)
//use assertArraysEqual to compare the 4 letters and their expected positions.

// const eqArrays = (arr1, arr2) => {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }

//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       return false;
//     }
//   }
//   return true;

// };

// Array.isArray()

// const assertArraysEqual = (arr1, arr2) => {
//   if(Array.isArray(arr1) && Array.isArray(arr2)) {
//     if(eqArrays(arr1, arr2)) {
//       console.log(`ASSERTION PASSED✅✅✅: ${arr1} === ${arr2}`);
//     } else {
//       console.log(`ASSERTION FAILED❌❌❌: ${arr1} === ${arr2}`);
//     }
//   } else if (arr1 === undefined && arr2 === undefined) {
//     console.log(`ASSERTION PASSED✅✅✅: undefined === undefined`);
//   } else {
//     console.log(`ASSERTION FAILED❌❌❌: arr1 is NOT an array AND/OR arr2 is NOT an arary`);
//   }
// }

//create a function flatten which will:
//take in an array that contains elements including nested arrays of elements
//return a "flattened" version of the array

const flatten = (arr) => {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      for (let j = 0; j < arr[i].length; j++) {
        result.push(arr[i][j]);
      }
    } else {
      result.push(arr[i]);
    }
  }
  return result;
};

module.exports = flatten;