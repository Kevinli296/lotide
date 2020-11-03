const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');


//implementing a function called takeUntil
//take two parameters: the array to work with, the callback (which Lodash calls "predicate")
//the function will return a "slice of the array with elements taken from the beginning"
//it should keep going until the callback/predicate returns a TRUTHY value
//implement takeUntil which will:
//keep collecting items from a provided array until the callback returns a truthy value

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

// first attempt
// const takeUntil = function (array, callback) {
//   array.map((element) => {
//     if (element < 0) {

//     } else {
//     return callback(element);
//     }
//   });
//   // ...
// }

// second attempt
// const takeUntil = function (array, callback) {
//   array.some((element) => {
//     if (element < 0) {
//       return false;
//     } else {
//     return callback(element);
//     }
//   });
//   // ...
// }

const takeUntil = function(array, callback) {
  let output = [];
  for (let item of array) {
    if (callback(item) === false) {
      output.push(item);
    } else {
      return output;
    }
  }
};

module.exports = takeUntil;