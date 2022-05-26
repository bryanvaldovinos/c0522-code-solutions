/* exported capitalizeWord */
function capitalizeWord(word) {
  var newWord = word[0].toUpperCase() + word.substring(1).toLowerCase();
  if (newWord === 'Javascript') {
    var capS = newWord[4].toUpperCase();
    newWord = 'Java' + capS + 'cript';
  }
  return newWord;
}
