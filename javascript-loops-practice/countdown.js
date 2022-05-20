/* exported countdown */
function countdown(number) {
  var array = [];
  var i = number;
  for (i; number >= 0; number--) {
    array.push(number);
  }
  return array;
}
