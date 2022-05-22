/* exported compact */
// no false, no null, no Nan, no 0 or -0, no undefined,
// no empty ----- maintain order

function compact(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (!array[i]) {
      continue;
    } newArray.push(array[i]);
  } return newArray;
}
