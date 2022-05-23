/* exported reverseWord */
function reverseWord(word) {
  var newWord = '';
  for (var i = word.length - 1; i >= 0; i--) {
    newWord += word[i];
  }
  return newWord;
}

// have to return new string so assing empty string to new variable
// how can i reverse a string???
// will for sure have to loop through each letter/char in string
// but start from last index as opposed index 0
// will have to readjust what var i is equal to
// word length - 1 is equal to last letter/char
// make sure it works down to first index which is 0
// so i is greater than or equal to 0 as condition
// for each iteration, index of word at moment should be added to new string
// then assigned to same string
// return that variable holding string
