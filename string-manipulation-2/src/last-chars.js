/* exported lastChars */
function lastChars(length, string) {
  var begin = string.length - length;
  if (begin < 0) {
    begin = 0;
  }
  var newString = string.substr(begin, string.length);
  return newString;
}

// must return last chars starting from length/#
// instead of starting from first char
// will have to start from string.length minus length/#
// will assign that to variable

// how to account for string.length - length/# superceding total amount of chars??
// set if statement
// if that  ^^ is the case set to variable to 0

// how to return only that segmented part of string starting from variable??
// use substring method on string, start segment at variable
// then end at string.length
// return the result of that substring to a new varible
// return that
