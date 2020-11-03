const assertEqual = require('./assertEqual');

// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`ASSERTION PASSED✅✅✅: ${actual} === ${expected}`);
//   } else if (actual !== expected) {
//     console.log(`ASSERTION FAILED❌❌❌: ${actual} !== ${expected}`);
//   }
// };

//implement a function called findKey
//takes in an object and a CALLBACK
//scans the object and returns the first key for which the callback returns a truthy value
//if no key is found, return UNDEFINED


const findKey = (obj, callback) => {
  for (const key in obj) {
    if (callback(obj[key]) === true) {
      return key;
    }
  }
  return undefined;
};


module.exports = findKey;