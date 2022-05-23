/* exported isVowel */
function isVowel(char) {
  if (char === 'a' || char === 'A' || char === 'e' || char === 'E' || char === 'i' || char === 'I' || char === 'o' || char === 'O' || char === 'u' || char === 'U') {
    return true;
  }
  return false;
}

// return boolean true or false to check if char is vowel
// need to account for cap and lowercase
// if statement that checks each vowel, lower and upper using ||
// return true if any of those vowel
// false if not one of those vowel
