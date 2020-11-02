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

const assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1, arr2)) {
    console.log(`ASSERTION PASSED✅✅✅: ${arr1} === ${arr2}`);
  } else if (!eqArrays(arr1, arr2)) {
    console.log(`ASSERTION FAILED❌❌❌: ${arr1} === ${arr2}`);
  }
};

//implement without function, which will return a subset of a given array that removes unwanted elements
//the function should take in a SOURCE array, and an ITEMSTOREMOVE array.
//it shuold return a new array with elements from source that are not present in the itemstoremove array.
//use assertArraysEqual to write test cases for various scenarios
//write a test case to make sure the original array is not modified.
//may need to use type coercion?
//if source.includes(itemsToRemove[i])
//


let without = (source, itemsToRemove) => {
  let output = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      output.push(source[i]);
    }
  }
  return output;
};

//ex:
const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);


//expected output:
console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

