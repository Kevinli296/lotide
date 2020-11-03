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


//Object.keys() can be helpful
//Object.values() can be helpful
//two objects are equal WHEN:
//they have the same number of keys
//the value of keys between two objects are the same

const assertEqual = require('../assertEqual');
const eqObjects = require('../eqObjects');


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
