'use strict';

let greet = function (name) {
  console.log('Hello ' + name);
  if (name != '')
    return null;

};

module.exports.greet = greet;
