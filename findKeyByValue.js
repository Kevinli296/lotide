const assertEqual = require('./assertEqual');

// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`ASSERTION PASSED✅✅✅: ${actual} === ${expected}`);
//   } else if (actual !== expected) {
//     console.log(`ASSERTION FAILED❌❌❌: ${actual} !== ${expected}`);
//   }
// };

//implement function findKeyByValue which takes in an object and a value
//it should scan the obj and return the first key word which contains the given value
//if no keys with that given value is found, return undefined



//refactored
const findKeyByValue = (object, value) => {
  // let output = '';
  for (const key in object) {
    if (object[key] === value) {
      return /*output = */ key;
    }
  }
  return undefined;
};

module.exports = findKeyByValue;