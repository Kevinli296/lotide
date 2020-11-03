const assertArraysEqual = require('./assertArraysEqual');

//our map function will take in two args:
//an array to map, a callback function
//map function will return a new array based on the results of the callback function

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

// const assertArraysEqual = (arr1, arr2) => {
//   if (Array.isArray(arr1) && Array.isArray(arr2)) {
//     if (eqArrays(arr1, arr2)) {
//       console.log(`ASSERTION PASSED✅✅✅: ${arr1} === ${arr2}`);
//     } else {
//       console.log(`ASSERTION FAILED❌❌❌: ${arr1} === ${arr2}`);
//     }
//   } else if (arr1 === undefined && arr2 === undefined) {
//     console.log(`ASSERTION PASSED✅✅✅: undefined === undefined`);
//   } else {
//     console.log(`ASSERTION FAILED❌❌❌: arr1 is NOT an array AND/OR arr2 is NOT an arary`);
//   }
// };


const map = function(array, callback) {
  const results = [];
  for (const item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;