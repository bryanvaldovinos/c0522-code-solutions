/* exported difference */
function difference(first, second) {
  var newArray = [];
  for (var i = 0; i < first.length; i++) {
    if (second.indexOf(first[i]) === -1) {
      newArray.push(first[i]);
    }
  }
  for (var j = 0; j < second.length; j++) {
    if (first.indexOf(second[j]) === -1) {
      newArray.push(second[j]);
    }
  }
  return newArray;
}

// have to return new array
// with only elements that are unique to either array
// order must be same as they occur
// is there a way to check if elements of one array
// are present in another??
// use indexof
// will have to run through each array indepently
// if element of one array is not present in other
// push to new array
