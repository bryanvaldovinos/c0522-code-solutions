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
