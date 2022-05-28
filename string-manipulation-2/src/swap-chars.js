/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  var strArray = string.split('');
  strArray.splice(firstIndex, 1, string.charAt(secondIndex));
  strArray.splice(secondIndex, 1, string.charAt(firstIndex));
  return strArray.join('');
}

// have to return string, with char at firstIndex swapped to char secondIndex
// and vice versa
// how will i be able to replace?
// must convert string into array
// use split method to individualize every char
// then substitute chat at firstIndex, w char at secondIndex using splice
// do the same for char at secondIndex
// join method of array to join array and return the result of that
