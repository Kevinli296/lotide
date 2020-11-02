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
};

module.exports = middle;