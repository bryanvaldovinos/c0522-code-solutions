/* exported pick */
function pick(source, keys) {
  var obj = {};
  for (var i = 0; i < keys.length; i++) {
    obj[keys[i]] = source[keys[i]];
    if (obj[keys[i]] === undefined) {
      delete obj[keys[i]];
    }
  }
  return obj;
}
