const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');


// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`ASSERTION PASSED✅✅✅: ${actual} === ${expected}`);
//   } else if (actual !== expected) {
//     console.log(`ASSERTION FAILED❌❌❌: ${actual} !== ${expected}`);
//   }
// };

//implement the definition for funciton eqObjects which will take in two objects and returns true or false, based on a PERFECT match (===)

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

const eqObjects = (obj1, obj2) => {
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);

  // if (eqArrays(keys1, keys2) !== true) {
  //   return false;
  // } else {
  //   return true;
  // }

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
      if (eqArrays(obj1[key], obj2[key]) !== true) {
        return false;
      }
    } else if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;