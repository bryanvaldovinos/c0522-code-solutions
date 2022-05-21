/* exported capitalize */
function capitalize(word) {
  var i = 1;
  var firstLetter = word[0].toUpperCase();
  var lettersArray = [];

  for (i; i < word.length; i++) {
    var newLetter = word[i].toLowerCase();
    lettersArray.push(newLetter);
  }
  var restOfLetters = lettersArray.join('');
  var newWord = firstLetter + restOfLetters;
  return newWord;
}
