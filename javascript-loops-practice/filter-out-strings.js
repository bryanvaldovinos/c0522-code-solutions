/* exported filterOutStrings */
function filterOutStrings(values) {
  var exceptStrings = [];
  for (var i = 0; i < values.length; i++) {
    if (typeof values[i] === 'number') {
      exceptStrings.push(values[i]);
    }
  }
  return exceptStrings;
}
