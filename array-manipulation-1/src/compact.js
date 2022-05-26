/* exported compact */
// no false, no null, no Nan, no 0 or -0, no undefined,
// no empty ----- maintain order

function compact(array) {
  var newArray = [];

  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

// need to return a new array that filters out
// falsy values
// a loop is needed to check for every element in original array
// if index of array returns as true AKA not a falsy value
// push that to new array
// return new array
