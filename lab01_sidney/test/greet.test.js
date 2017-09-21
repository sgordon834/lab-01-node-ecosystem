'use strict';

const expect = require('expect');

const greet = require('../lib/greet.js');


describe('test greet function', function() { 
  describe('greet', () => {
    it('should result in Hello, world', () => {
      // let result = greet.greet('world');
      expect(greet.greet('world')).toBe('Hello, world');
    });
  });
});