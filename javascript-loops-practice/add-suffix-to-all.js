/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var sufArray = [];
  for (var i = 0; i < words.length; i++) {
    sufArray.push(words[i] + suffix);
  }
  return sufArray;
}
