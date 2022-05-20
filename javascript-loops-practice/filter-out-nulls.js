/* exported filterOutNulls */
function filterOutNulls(values) {
  var exceptNull = [];
  for (var i = 0; i < values.length; i++) {
    if (values[i] === null) {
      values.splice(i, 1, i + 1);
    } else {
      exceptNull.push(values[i]);
    }
  }
  return exceptNull;
}
