/* exported flatten */
function flatten(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (var j = 0; j < array[i].length; j++) {
        newArray.push(array[i][j]);
      }
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

// new array to be returned
// will contain all values of nested arrays
// run through array, if value of index of array is
// an array then loop through that array and push to new array
// otherwise if value of index is not array then
// push value of index to new array
