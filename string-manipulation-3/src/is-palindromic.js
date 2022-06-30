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
  return (first.join() === second.join());
}

// have to return t/f if string is same forward as backwards
// reverse loop to produce values backwards
// push all values of reg loop to one array
// push all values of reversed loop to another array
// arrays w identical values do not equal true
// will have to use join method to compare
// return boolean
