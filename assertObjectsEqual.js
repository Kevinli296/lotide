const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;

};


const eqObjects = (obj1, obj2) => {
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);


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


const assertObjectEqual = (actual, expected) => {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`ASSERTION PASSED✅✅✅: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`ASSERTION FAILED❌❌❌: ${inspect(actual)} === ${inspect(expected)}`);
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

assertObjectEqual(ab, ba);
assertObjectEqual(ab, abc);
assertObjectEqual(cd, dc);
assertObjectEqual(cd, cd2);