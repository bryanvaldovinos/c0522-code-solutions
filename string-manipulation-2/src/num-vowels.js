/* exported numVowels */
function numVowels(string) {
  var array = [];
  for (var i = 0; i < string.length; i++) {
    if (string[i] === 'a' || string[i] === 'A' || string[i] === 'e' || string[i] === 'E' ||
      string[i] === 'i' || string[i] === 'I' || string[i] === 'o' || string[i] === 'O' || string[i] === 'u' ||
      string[i] === 'U') {
      array.push(string[i]);
    }
  }
  return array.length;
}

// have to return number of vowels in string
// will need to check for vowels in string
// will have to run through each char of string
// how to do that? loop
// compare string at current index to vowel
// if vowel then must find way to count
// mmm... empty array could store, assign empty array
// at term of loop, all vowels should be in array
// return array length
