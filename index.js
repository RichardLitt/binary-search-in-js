function binSearch (array, hunt) {
  var len = array.length
  var half = Math.floor(len / 2)

  if (len === 1) {
    if (array[0] === hunt) {
      return hunt
    } else {
      return null
    }
  } else if (len === 0) {
    return null
  } else {
    if (array[half] === hunt) {
      return hunt
    } else if (array[half] < hunt) {
      return binSearch(array.slice(half, len), hunt)
    } else {
      return binSearch(array.slice(0, half), hunt)
    }
  }
}

exports = module.exports = binSearch
