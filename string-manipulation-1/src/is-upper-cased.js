/* exported isUpperCased */
function isUpperCased(word) {
  for (var i = 0; i < word.length; i++) {
    if (word[i] !== word[i].toUpperCase()) {
      return false;
    }
  } return true;
}

// have to return boolean true or false to check if all
// characters in word are cap or not
// loop must happen to run through each char
// if char at index is not equal to uppercase then return false
// outside of this, return true if loop through concludes
