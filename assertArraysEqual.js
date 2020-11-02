const eqArrays = require('./eqArrays');


//implement assertArraysEqual which will take in TWO arrays
//console.log an appropriate message to the console
//msg will be similar to that of assertEqual
//refer to assertEqual
//this assertion function will make use of your eqArrays function for array comparison
//still call the function below its declaration and visuallyt ensure that the msg printed to the console is accurate.

const assertArraysEqual = (arr1, arr2) => {
  if (Array.isArray(arr1) && Array.isArray(arr2)) {
    if (eqArrays(arr1, arr2)) {
      console.log(`ASSERTION PASSED✅✅✅: ${arr1} === ${arr2}`);
    } else {
      console.log(`ASSERTION FAILED❌❌❌: ${arr1} === ${arr2}`);
    }
  } else if (arr1 === undefined && arr2 === undefined) {
    console.log(`ASSERTION PASSED✅✅✅: undefined === undefined`);
  } else {
    console.log(`ASSERTION FAILED❌❌❌: arr1 is NOT an array AND/OR arr2 is NOT an arary`);
  }
};

module.exports = assertArraysEqual;


//TEST CODE
// assertArraysEqual([1, 2, 3], [1, 2, 3]);
// assertArraysEqual([1, 3, 3], [1, 2, 3]);
// assertArraysEqual([2, 2, 3], [1, 2, 4]);
// assertArraysEqual([1, 2, 1], [1, 2, 3]);
// assertArraysEqual([2, 2, 3], [1, 3]);
// assertArraysEqual([1, 2, 3], [1, 6]);
