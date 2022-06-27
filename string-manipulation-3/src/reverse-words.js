/* exported reverseWords */
function reverseWords(string) {
  var newArray = string.split(' ');
  var altArray = [];

  for (var i = 0; i < newArray.length; i++) {
    altArray.push([]);
    for (var j = newArray[i].length - 1; j >= 0; j--) {
      altArray[i].push(newArray[i][j]);
    }
  }

  var modArray = [];

  for (var k = 0; k < altArray.length; k++) {
    modArray.push(altArray[k].join(''));
  }

  var stringMod = modArray.join(' ');

  return stringMod;
}
