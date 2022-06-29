/* exported union */
function union(first, second) {
  var newArray = [];

  for (var i = 0; i < first.length; i++) {
    newArray.push(first[i]);
  }
  for (var j = 0; j < second.length; j++) {
    if (first.indexOf(second[j]) === -1) {
      newArray.push(second[j]);
    }
  }
  return newArray;
}

// must return new array holding all values
// that are unique to either array no repeat
// so push all elements fo first array into new array
// go through second array
// if any index of second is not in first
// push value of index to newArray
