/* exported getKeys */
function getKeys(object) {
  var keys = [];

  for (var property in object) {
    keys.push(property);
  }
  return keys;
}

// - have to access object
// have to access object property keys
// - return must be array
// - for in loop to run through properties
// - push property to empty array
// - return array
