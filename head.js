const assertEqual = require('./assertEqual');

const head = function(array) {
  if (array !== []) {
    return array[0];
  } else {
    return undefined;
  }
};


module.exports = head;

// TEST CODE
// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// assertEqual(head([]), 6);
// assertEqual(head([21]), 21);