const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`ASSERTION PASSED✅✅✅: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`ASSERTION FAILED❌❌❌: ${actual} !== ${expected}`);
  }
};
  
// TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual('hi', 'hi');
// assertEqual('hi', 'bye');
// assertEqual(3, 3);
// assertEqual(6, 10);

module.exports = assertEqual;