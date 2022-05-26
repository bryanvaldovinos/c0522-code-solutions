/* exported ransomCase */
function ransomCase(string) {
  var newString = [];
  for (var i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      var up = string[i].toLowerCase();
      newString.push(up);
    } else if (i % 2 > 0) {
      var lo = string[i].toUpperCase();
      newString.push(lo);
    }
  }
  var ns = newString.join('');
  return ns;
}
