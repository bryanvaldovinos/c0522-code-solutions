/* exported truncate */
function truncate(length, string) {
  var firstPart = string.substring(0, length);
  var newString = firstPart + '...';
  return newString;
}
