const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`ASSERTION PASSED✅✅✅: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`ASSERTION FAILED❌❌❌: ${actual} !== ${expected}`);
  }
};

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

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

console.log(findKeyByValue(bestTVShowsByGenre, 'Non-existant'), undefined);
console.log(findKeyByValue(bestTVShowsByGenre, 'The Expanse'));
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);