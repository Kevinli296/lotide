const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('ASSERTION PASSED✔️✔️✔️: ' + actual + ' === ' + expected);
  } else if (actual !== expected) {
    console.log('ASSERTION FAILED❌❌❌: ' + actual + ' !== ' + expected);
  }
};


const head = function(array) {
  if (array !== []) {
    return array[0];
  } else {
    return undefined;
  }
};




// TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), 6);
assertEqual(head([21]), 21);