/* exported isVowel */
function isVowel(char) {
  if (char.length === 1) {
    var vowels = 'aeiouAEIOU';
    for (var i = 0; i < vowels.length; i++) {
      if (vowels[i] >= 0) {
        return i;
      }
      var isVowel = vowels[i];
    }
    // var isVowel = vowels.indexOf(char) >= 0;

    return isVowel;
  }
}

// return boolean true or false to check if char is vowel
// need to account for cap and lowercase
// its a single char so check for that with if?
// can prob include indexof method to check char in a string
// strings are array like
// so assign vowels uppercase and lowercase as string to variable
// then index of that variable and compare if greater than or equal to 0
// assign that to a new variable and return
