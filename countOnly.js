const assertEqual = require('./assertEqual');


// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`ASSERTION PASSED✅✅✅: ${actual} === ${expected}`);
//   } else if (actual !== expected) {
//     console.log(`ASSERTION FAILED❌❌❌: ${actual} !== ${expected}`);
//   }
// };

//this function should take in a collection of items
//return counts for a specific subset of those items
//it will NOT count everything
//it will be given an idea of which items we care about and will ONLY count those
//it will ignore the others
//items in our case will be limited to STRINGS
//countOnly will be given an array and an object
//it will return an object containing counts of everything in the input object listed


// start by defining the function
// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count


const countOnly = (allItems, itemsToCount) => {

  const results = {};

  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};

module.exports = countOnly;