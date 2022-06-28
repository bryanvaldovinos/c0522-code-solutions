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

// return t/f if 2nd string is anagram of 1st string
// will have to push values of strings to seperate arrays
// from here sort values of arrays alphabetically
// then draw comparison
// string the sorted arrays to produce comparison
// return boolean
