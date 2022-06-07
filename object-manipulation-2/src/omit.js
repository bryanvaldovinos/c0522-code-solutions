/* exported omit */
function omit(source, keys) {
  var obj = {};
  for (var i = 0; i < keys.length; i++) {
    for (var property in source) {
      obj[keys[i]] = source[property];
    }
  }
  return obj;
}
