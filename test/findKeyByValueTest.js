const assertEqual = require('../assertEqual');
const findKeyByValue = require('../findKeyByValue');


const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};
console.log(findKeyByValue(bestTVShowsByGenre, 'Non-existant'), undefined);
console.log(findKeyByValue(bestTVShowsByGenre, 'The Expanse'));
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);