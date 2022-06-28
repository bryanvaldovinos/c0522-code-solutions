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

// have to a v of string w every character of each word reversed
// words returned in original order
// split string into array to work w string and assign to new var
// run through array and for each element push an empty array
// to another empty array assigned to new var
// for each element of array reverse order and push to new empty arr
// join elements of arrays and push to yet another array
// then join all those elements to return desired result
