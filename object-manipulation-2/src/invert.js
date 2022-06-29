/* exported invert */
function invert(source) {
  var obj = {};
  for (var property in source) {
    obj[source[property]] = property;
  }
  return obj;
}
