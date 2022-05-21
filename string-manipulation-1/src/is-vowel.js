/* exported isVowel */
function isVowel(char) {
  if (char.length === 1) {
    var vowels = 'aeiouAEIOU';
    var isVowel = vowels.indexOf(char) >= 0;

    return isVowel;
  }
}
