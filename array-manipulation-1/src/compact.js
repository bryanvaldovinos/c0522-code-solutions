/* exported compact */
// no false, no null, no Nan, no 0 or -0, no undefined,
// no empty ----- maintain order

function compact(array) {
  var newArray = [];
  array.forEach(i => {
    if (i) {
      newArray.push(i);
    }
  });
  return newArray;
}

// need to return a new array that filters out
// falsy values
// a loop is needed to check for every element in original array
// is there a way to skip over array element/ not include?
// using forEach method to test if element is truthy
// if element of array is truthy then push to newArray
// if element of array is not truthy then push will not occur
// return new array
