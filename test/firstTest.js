"use strict";

var assert = require('assert');


var tools = require('../lib/tools')

describe('Tools', function() {
  describe('#add()', function () {
    it('should return two args added together', function () {
      assert.equal(3, tools.add(1, 2))

    });
  });
})

var app = require('../app')
var request = require('supertest')
var agent = request.agent(app)

describe('Calc', function() {
  describe('get', function () {
    it('should contain 80, (because 10 * 8 = 80)',
      function (done) {
      agent
        .get('/calc?amount=10')
        .expect(hasEighty)
        .end(done)
    })
  });
})

function hasEighty(res) {
  let result = res.text.search("80")
  if (result === -1) {
    throw new Error("No 80 found")
  } else if (typeof result === 'number' && result >= 0) {
    return "correct!"
  }
  return new Error("something else")
}
