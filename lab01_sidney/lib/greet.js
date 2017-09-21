'use strict';

const greet = function (name) {
  if (typeof name != 'string') {
    return null;
  } else {
    return ('Hello, ' + name);
  
  }
};

module.exports.greet = greet;
