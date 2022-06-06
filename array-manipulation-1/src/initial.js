/* exported initial */
function initial(array) {
  var newArray = [];
  for (var i = 0; i < array.length - 1; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}

// need to return new array
// create empty array
// then must return initial array except last element
// will need to run through elements so use loop
// how can i access all but the last?
// array length - 1 would leave out the last one
// code block for loop should push all elements into new array
// return new array
