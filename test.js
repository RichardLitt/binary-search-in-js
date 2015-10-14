/* globals it */
'use strict'

var assert = require('assert')
var binSearch = require('./')

// Need a different testing framework or something

it('should ', function () {
  assert.equal(binSearch([1, 2, 3, 4], 2), 2)
})

it('should ', function () {
  assert.equal(binSearch([1, 2, 3, 4], 5), null)
})
