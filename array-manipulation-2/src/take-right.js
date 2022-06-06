/* exported takeRight */
function takeRight(array, count) {
  var newArray = [];
  if (count < array.length) {
    for (var i = array.length - count; i < array.length; i++) {
      newArray.push(array[i]);
    }
    return newArray;
  } else {
    return array;
  }
}

// need to return new array
// new array must not include the last count/# of indexes
// can use for loop to run through indexes
// modify initial expression variable to start at array length minues count/#
// then push the elements to new array
// how to return array if count is larger than array length??
// if statement before loop
// if count < array.length then run loop
// else return array
