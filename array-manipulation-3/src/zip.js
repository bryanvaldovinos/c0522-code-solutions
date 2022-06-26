/* exported zip */
function zip(first, second) {
  var newArray = [];

  if (first.length <= second.length) {
    for (var i = 0; i < first.length; i++) {
      newArray.push([]);
      newArray[i].push(first[i]);
      newArray[i].push(second[i]);
    }
  } else if (second.length <= first.length) {
    for (var j = 0; j < second.length; j++) {
      newArray.push([]);
      newArray[j].push(first[j]);
      newArray[j].push(second[j]);
    }
  }
  return newArray;
}

// output to be array of arrays
// result has to be only as long as shortest of two arrays
// check to see which is shorter
// run loop through shorter array
// for each index of shorter array push a subarray into
// new array to be returned
// push element at index of first array to new subarray
// push element at index of second array to new subarray
// finish loop to assign values to subarrays
