/* exported tail */
function tail(array) {
  var newArray = [];
  for (var i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}

// have to return array
// create empty array
// how will access every element except first?
// loop then set var to 1
// array at index 1 would skip the first element which is index 0
// then push that to new empty array
// return array
