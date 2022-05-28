/* exported capitalizeWords */
function capitalizeWords(string) {
  var lo = string.toLowerCase().split(' ');
  for (var i = 0; i < lo.length; i++) {
    lo[i] = lo[i].charAt(0).toUpperCase() + lo[i].substring(1);
  }
  return lo.join(' ');
}

// need to return string of words with every word CAP
// how can i work with every word one at a time?
// have to split string into array
// to start off w will lo the entire string then split
// assign that to a new variable
// then will loop through the elements(words) in the array
// have to uppercase first char of first word
// rest of word can remain lo but create substring after first char
// concatenate first cap char and remainder of word and assign to first element
// /word of array
// loop will run through array until code is applied to all elements/word
// then return the joined result of the array
