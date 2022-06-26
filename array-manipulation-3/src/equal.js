/* exported equal */
function equal(first, second) {
  if (first === second) {
    return true;
  }
  if (first.length !== second.length) {
    return false;
  }
  for (var i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
}

// have to return boolean if arrays match index for index
// if first array is stict equal to second array then true
// if lengths of both arrays dont match then false
// run through first
// if index of first array is not equal to second then false
