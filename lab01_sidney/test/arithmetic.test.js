'use strict';

const expect = require('expect');

const arithmetic = require('../lib/arithmetic.js');


// describe('arithmetic', function () {
//   describe('expect()', function () {
//     it('should save without error', function () {
//     });
//   });
// });
describe('test math problems', () => {
  describe('arithmetic', () => {
    it('should result in 9', () => {
      let result = arithmetic.addNumber(5, 4);
      expect(result).toEqual(9);
    });
  });

  describe('arithmetic', () => {
    it('should result in 4', () => {
      let result = arithmetic.subtractNumber(7, 3);
      expect(result).toEqual(4);
    });
  });
});