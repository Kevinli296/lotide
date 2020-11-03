const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`ASSERTION PASSED✅✅✅: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`ASSERTION FAILED❌❌❌: ${actual} !== ${expected}`);
  }
};

module.exports = assertEqual;