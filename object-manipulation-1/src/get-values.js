/* exported getValues */
function getValues(object) {
  var newArray = [];

  for (var key in object) {
    newArray.push(object[key]);
  }
  return newArray;
}

// - have to access object
// - have to also access object property values
// - use object[key] to access value
// - must return array so create empty array
// - push value to array
// - return value
