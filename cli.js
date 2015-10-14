#!/usr/bin/env node
'use strict'
var meow = require('meow')
var binSearch = require('./')

var cli = meow({
  help: [
    'Usage',
    '  $ binSearch [dict] [input]',
    '',
    'Examples',
    '  $ binSearch [1,2,3,4,5,6,7] 2',
    '  2'
  ]
})

binSearch([1,2,3,4,5,6,7], cli.input[1])
