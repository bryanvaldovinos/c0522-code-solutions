/* exported includes */
function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}

// need to return true or false if value is at any index of array
// in order to check every index a for loop would get the job done
// compare array at index to value
// if comparison is true, return true
// if code block for loop does not return true
// return false
