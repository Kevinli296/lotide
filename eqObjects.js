const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`ASSERTION PASSED✅✅✅: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`ASSERTION FAILED❌❌❌: ${actual} !== ${expected}`);
  }
};

//implement the definition for funciton eqObjects which will take in two objects and returns true or false, based on a PERFECT match (===)

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

/*
eqArrays(obj1[key], obj2[key])
  
*/


/*
    obj1 = { a: "1", b: [0, 1] }
    obj2 = { b: [0, 1], a: "1" }

    keys1 = ['a', 'b']
    keys2 = ['b', 'a']

    key = 'a'
*/

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);
assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(cd, cd2), false);


//Object.keys() can be helpful
//Object.values() can be helpful
//two objects are equal WHEN:
//they have the same number of keys
//the value of keys between two objects are the same