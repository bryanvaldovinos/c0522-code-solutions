/* exported isPalindromic */
function isPalindromic(string) {
  var first = [];
  var second = [];

  for (var i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      first.push(string[i]);
    }
  }
  for (var j = string.length - 1; j >= 0; j--) {
    if (string[j] !== ' ') {
      second.push(string[j]);
    }
  }
  if (first.join() === second.join()) {
    return true;
  }
  if (first.join() !== second.join()) {
    return false;
  }

}
