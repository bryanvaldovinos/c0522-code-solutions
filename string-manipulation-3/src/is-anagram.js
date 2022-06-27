/* exported isAnagram */
function isAnagram(firstString, secondString) {
  var first = [];
  var second = [];

  for (var i = 0; i < firstString.length; i++) {
    if (firstString[i] !== ' ') {
      first.push(firstString[i]);
    }
  }

  for (var j = 0; j < secondString.length; j++) {
    if (secondString[j] !== ' ') {
      second.push(secondString[j]);
    }
  }

  first.sort();
  second.sort();

  if (first.toString() === second.toString()) {
    return true;
  } else {
    return false;
  }
}
