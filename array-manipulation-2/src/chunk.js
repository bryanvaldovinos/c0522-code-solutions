/* exported chunk */
function chunk(array, size) {
  var newArray = [];
  for (var i = 0; newArray.length < (array.length / size); i++) {
    newArray.push([]);
  }
  return newArray;
}
