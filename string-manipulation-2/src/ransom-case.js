/* exported ransomCase */
function ransomCase(string) {
  var newString = '';
  for (var i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      var up = string[i].toLowerCase();
      newString += up;
    } else {
      var lo = string[i].toUpperCase();
      newString += lo;
    }
  }
  return newString;
}

// must return string with every other char CAP
// will need to run through each char using loop
// how to know what char to CAP?
// use an if inside loop
// if index is even then lo, else cap
// how to figure out if index is even?
// can use remainder and compare to 0
// if true, then lo string at current index
// else, then CAP string at current index
// must push to recreate string.... but must first assing empty array
// outside of loop, join that array at conclusion of loop
// return joined array
