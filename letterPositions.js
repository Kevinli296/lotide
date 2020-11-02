//challenge will be similar to countLetters
//implementing a function called letterPositions
//return all the indices (zero-based positions) in the string where each character is found
//for each letter, instead of using one nubmer to represent the occurrences, you will need mulitple (aka result should be an object)
//use assertArraysEqual to compare the 4 letters and their expected positions.

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

// Array.isArray()

const assertArraysEqual = (arr1, arr2) => {
  if (Array.isArray(arr1) && Array.isArray(arr2)) {
    if (eqArrays(arr1, arr2)) {
      console.log(`ASSERTION PASSED✅✅✅: ${arr1} === ${arr2}`);
    } else {
      console.log(`ASSERTION FAILED❌❌❌: ${arr1} === ${arr2}`);
    }
  } else if (arr1 === undefined && arr2 === undefined) {
    console.log(`ASSERTION PASSED✅✅✅: undefined === undefined`);
  } else {
    console.log(`ASSERTION FAILED❌❌❌: arr1 is NOT an array AND/OR arr2 is NOT an arary`);
  }
};


/*
    results = {
        'h': [0],
        'e': [1],
        'l': [2]
    }
    index = 3
    element = 'l'
    tmp = []
*/


const letterPositions = (sentence) => {
  const results = {};

  for (const index in sentence) {
    let element = sentence[index];
    
    if (results[element]) {
      results[element].push(Number(index));
    } else {
      let tmp = [];
      tmp.push(Number(index));
      results[element] = tmp;
    }

  }
  return results;
};

let letterPosOfHello = letterPositions('hello');



//TESTCODE
assertArraysEqual(letterPositions('hello').e, [1]);
assertArraysEqual((letterPosOfHello['h']), [0]);
assertArraysEqual((letterPosOfHello['l']), [2, 3]);
assertArraysEqual((letterPosOfHello['a']), undefined);



/*
    output =>
    {
      'h': [0]
      'e': [1]
      'l': [2, 3]
      'o': [4]
    }

    index:  0  1  2  3  4
    value:  h  e  l  l  o
*/
