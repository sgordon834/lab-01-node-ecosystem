'use strict';

let addNumber = function (a, b) {
  if (typeof a != 'number' || typeof b != 'number') {
    return null;
  } else {
    return a + b;
  }
};

let subtractNumber = function (a, b) {
  if (typeof a != 'number'|| typeof b != 'number') {
    return null;
  } else {
    return a - b;
  }
};

module.exports.addNumber = addNumber;
module.exports.subtractNumber = subtractNumber;
