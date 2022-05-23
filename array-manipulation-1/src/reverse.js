/* exported reverse */
function reverse(array) {
  var newArray = [];
  for (var i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}

// need to return an array
// create empty array
// original array must be returned in reverse order in new array
// how will i make this possible?
// i have to access each element in array so a loop?
// the last element has to be the first
// instead of starting at index 0 i have to start at last index
// go backwards?
// set i to last index
// then work to first index which is 0
// loop conditional has to set i as greater than or equal to 0
// code block push array at i to empty array
// decrement i
// as loop continues elements are pushed to new array
// return new array
