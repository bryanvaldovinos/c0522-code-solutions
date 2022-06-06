/* exported drop */
function drop(array, count) {
  var newArray = [];
  for (var i = count; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}

// must return new array
// assign empty array to variable
// have to return array elements after first count #
// for loop should work to run through elements in array
// have to skip first elements up to count
// set var i = count
// loop through elements and push to new array
// return to newArray;
