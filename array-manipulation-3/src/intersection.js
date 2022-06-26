/* exported intersection */
function intersection(first, second) {
  var newArray = [];

  for (var i = 0; i < first.length; i++) {
    if (second.indexOf(first[i]) !== -1) {
      newArray.push(first[i]);
    }
  }
  return newArray;
}

// must return new array
// contains unique value that are same in both arrays
// loop through first array
// if index of first array is present in second
// pass that index to new array
