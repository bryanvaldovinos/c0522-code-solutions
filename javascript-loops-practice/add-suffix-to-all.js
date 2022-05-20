/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var sufArray = [];
  var newWord = words[0] + suffix;
  for (var i = 0; i < words.length; i++) {
    sufArray.push(newWord);
    newWord = words[i + 1] + suffix;
  }
  return sufArray;
}
