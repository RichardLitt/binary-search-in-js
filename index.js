var bs = require("binary-search")
var _ = require('lodash')
// Woop!

// NTS Look up stuff before. 

// Assume this is a sort, non-repeating dictionary of values
var dict = [0, 1, 4, 3, 2, 6, 8, 9, 10, 11] // 123456789

// This will parse the string, and search for a character
function parseString (dict, char) {

  // Sort the dictionary
  dict = dict.sort()

  var middleOfTheDict = Math.floor(dict.length/2)

  gist.github.com

  index 150
  index 75
  value 120


  console.log(dict[middleOfTheDict])

  // Test if it is an array; if it is continute
  // else, make it an array using .split
  // if (typeof dict == 'array')

  // while ()
    // Loop through everything and see if we can find it
    // The loop needs to split the array by length at first, and then by
    // the length of the new split
    // for (i = 0; i < cars.length; i++) {

    // if the middle element is less than our search, go to right
    // if (char < newChar) {
      
    // // If the middle element is greater than, go to left
    // } else if (char > newChar) {

    // } else if (char == newChar) {
    //   console.log('Everybody wins!')
    //   break
    // }
    // Repeat
  // }

  // Take the dict, and iterate over it
  // Make a native loop
  // dict.forEach(function iterator (character, index) {
  //   if (character == char) {
  //     console.log('This is the character', char)
  //     console.log('This is the index!', index)
  //   }
  // })

}

  parseString(dict, '2')
