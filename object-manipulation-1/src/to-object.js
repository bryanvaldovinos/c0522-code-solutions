/* exported toObject */
function toObject(keyValuePair) {
  var key = [keyValuePair[0]];
  var value = [keyValuePair[1]];
  var object = {};

  object[key[0]] = value[0];
  return object;
}

// - have to return object
// - object must consist of the key value pair
// - how to access elements?
// - get index at array[#]
// - assign variable for key and value
// - assign key and value to those variables
// - object to hold property
// - value[0] to assign to object[key[0]]
// - return obj
