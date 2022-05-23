/* exported getWords */
function getWords(string) {
  if (string === '') {
    var emptyString = string.split('');
    return emptyString;
  } else if (string !== '') {
    var fullString = string.split(' ');
    return fullString;
  }
}

// need to return an array
// assign empty array to variable
// can prob use split method to check for a space
// split will assign each word in string as its own element in array
// assign that to variable and return
// but then how to account for empty string?
// same but if string is equal to ''
// split method again but to check if empty or no space
// assign that to a variable and return
