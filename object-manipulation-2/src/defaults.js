/* exported defaults */
function defaults(target, source) {
  for (var property in target) {
    for (var key in source) {
      if (target[property] !== source[key]) {
        target[property] = source[key];
      }
    }
  }
}
