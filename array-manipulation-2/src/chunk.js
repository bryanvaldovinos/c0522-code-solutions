/* exported chunk */
function chunk(array, size) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    var b = newArray[newArray.length - 1];
    if (!b || b.length === size) {
      newArray.push([array[i]]);
    } else {
      b.push(array[i]);
    }
  }
  return newArray;
}

// need to return new array of sub arrays equal to size
// leftover elements are in own sub array
// will have to loop through each element of array to work with
// if length of new array copy is equal to size then push a new sub
// array to new array
// else push element at index of i of array into new array copy
// loop will continue running through all elements
// and will sort out to either new sub array or same sub array
// depending on length;
// finally return new array
