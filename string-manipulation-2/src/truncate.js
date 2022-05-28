/* exported truncate */
function truncate(length, string) {
  var firstPart = string.substring(0, length);
  var newString = firstPart + '...';
  return newString;
}

// must reduce length of string and return that with ...
// first work on shortened string
// create shortened string using substring method starting at index 0
// then stopping at given length number --- return that to a variable
// adding ... to shortened string would be simple, just concatenate
// once added assign to new variable
// return the addition of string ... and new variable
