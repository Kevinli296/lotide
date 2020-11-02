const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('ASSERTION PASSED✔️✔️✔️: ' + actual + ' === ' + expected);
  } else if (actual !== expected) {
    console.log('ASSERTION FAILED❌❌❌: ' + actual + ' !== ' + expected);
  }
};


const tail = function(array) {
  let newArr = [];
  for (let i = 1; i < array.length; i++) {
    newArr.push(array[i]);
  }
  return newArr;
};

module.exports = tail;

// TEST CODE
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// console.log(tail(words)); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!