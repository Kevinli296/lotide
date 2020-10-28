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
  if(eqArrays(arr1, arr2)) {
    console.log(`ASSERTION PASSED✅✅✅: ${arr1} === ${arr2}`);
  } else if (!eqArrays(arr1, arr2)) {
    console.log(`ASSERTION FAILED❌❌❌: ${arr1} === ${arr2}`);
  }
}


//implement middle which takes in an array and returns the middle-most elements of the array
//middle function should return an array with only the middle elements of the provided array.

//first attempt:
// const middle = (midArr) => { //defining function middle with midArr as param
//   let middle = []; //declaring empty array for pushing result

//   if (midArr.length > 2) { //if the length of the array is more than 2, run below code
//     for(let i = 0; i < midArr.length; i++) { //looping through the array
//       if (midArr.length % 2 === 0) { //if the length of the array is EVEN, run below code
//         middle.push(midArr[Math.round(midArr.length / 2 - 1)]); //pushing the array's first middle element
//         middle.push(midArr[midArr.length / 2]); //pushing the array's second middle element
//         break; //break
//       } else { //otherwise if odd
//         middle.push(midArr[Math.round(midArr.length / 2 - 1)]); //pushing the array's middle element
//         break; //break
//       }
//     }
//   }
//   return middle; //return the result array
// }

//refactored code
const middle = (midArr) => { //defining function middle with parameter midArr
  let middle = []; //defining empty array to push result

  if (midArr.length > 2) { //if length of the array we're passing in is more than 2, run below code
      if (midArr.length % 2 === 0) { //if length of array is EVEN, run below code
        middle.push(midArr[Math.round(midArr.length / 2 - 1)]); //pushing element of argument's index length /2 + 1 (first middle)
        middle.push(midArr[midArr.length / 2]); //pushing element of argument's index length /2 (second middle)
      } else {
        middle.push(midArr[Math.round(midArr.length / 2 - 1)]); //pushing middle element at index length /2
      }
  }
  return middle; //return middle result array
}

//for arrays with one or two elements, return an empty array.
//ex.
console.log(middle([1])) // => []
console.log(middle([1, 2])) // => []

//for arrays with odd numbers elements, an array containing a single middle element should be returned.
//ex.
console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]

//for arrays with even numbers elements, an array containing the two middle should be returned.
//ex.
console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]


console.log(middle([1, 4, 3, 2, 6, 8])); // => [3, 2]
//write test assertions for the various scenarios with middle

const test1 = ['hi', 'bye', 'hello', 'whatsup','morning'];
const test2 = ['hi', 'bye', 'hello', 'whatsup','morning', 'night'];

assertArraysEqual(middle(test1), middle(test2))
assertArraysEqual(middle(test1), middle(test1))