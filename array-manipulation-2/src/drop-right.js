/* exported dropRight */
function dropRight(array, count) {
  var newArray = [];
  if (count < array.length) {
    for (var i = 0; i < array.length - count; i++) {
      newArray.push(array[i]);
    }
    return newArray;
  } else {
    return array;
  }
}

// must return new array with elements before last count/#
// can run loop and set condition for loop to run until length of array
// minus count
// how do i account for count larger than array length?
// set if statement
// so loop will only run if count is smaller
// else return original array
