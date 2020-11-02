const assertEqual = require('./assertEqual');

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

module.exports = eqArrays;
