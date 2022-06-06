/* exported capitalizeWord */
function capitalizeWord(word) {
  var newWord = word[0].toUpperCase() + word.substring(1).toLowerCase();
  if (newWord === 'Javascript') {
    return 'JavaScript';
  }
  return newWord;
}

// word must be returned w first char CAP and rest of letters Lo
// with exception of word JavaScript where J is always kept CAP
// first work on all other words...
// CAP first char by using toUpperCase method
// rest of chars can be separated from string by creating substring
// lowercase substring
// add first CAP letter to substring that is Lo
// assign result of that to new variable
// now for JS exception
// if new variable is equal to Javascript
// uppercase S in JS by using toUpperCase method on fourth index
