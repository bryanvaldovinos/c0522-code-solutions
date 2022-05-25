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

// must return orginal word aka string but with capital first letter
// and rest lowercase
// first letter capital just index it then uppercase with method
// assign that to a variable
// then loop through rest of letters
// set var i to 1 to skip first already uppercased letter
// lower case letters as they loop and assign to variable
// push variable to array as loop continues
// join the letters array and assign to var
// concatenate variable to first letter then return the result
// of that concatenation
