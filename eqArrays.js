const eqArrays = (arr1, arr2) => { //function with 2 params (array 1 and array 2)
  if (arr1.length !== arr2.length) { //if the length of the first array is not equal to the second, by default its not the same, so false
    return false;
  } 

  for (let i = 0; i < arr1.length; i++) { //i as iterator variable, iterating over arr1 elements
    if (arr1[i] !== arr2[i]) { //if the iteration of arr1 does not equal to iteration of arr2
      return false; //short circuit the function and print false
    } 
  }
return true; //function is meant to return true

};




const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`ASSERTION PASSED✅✅✅: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`ASSERTION FAILED❌❌❌: ${actual} !== ${expected}`);
  }
};

// TEST CODE
// console.log(eqArrays([1, 2, 3], [1, 2, 3])) // => true
// console.log(eqArrays([1, 2, 3], [1, 2, 3])) // => false
// eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
// eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 5, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 4, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
