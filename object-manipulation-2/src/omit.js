/* exported omit */

function omit(source, keys) {
  var obj = {};
  for (var property in source) {
    obj[property] = source[property];
  }
  for (var key in obj) {
    for (var i = 0; i < keys.length; i++) {
      if ((keys[i]) === key) {
        delete obj[key];
      }
    }
  }
  return obj;
}
