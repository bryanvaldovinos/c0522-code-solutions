/* exported take */
function take(array, count) {
  var newArray = [];
  if (count > array.length) {
    count = 0;
  }
  for (var i = 0; i < count; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}

// have to return new array
// assign empty array to new variable
// must return elements up to count #
// for loop would work - set condition to i < count number
// does not work for array with elements < count so set up if statement
// if count > array.length then set count = 0;
// run loop and push array at index to new array
// return new array
