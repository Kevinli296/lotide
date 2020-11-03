const head = function(array) {
  if (array !== []) {
    return array[0];
  } else {
    return undefined;
  }
};


module.exports = head;