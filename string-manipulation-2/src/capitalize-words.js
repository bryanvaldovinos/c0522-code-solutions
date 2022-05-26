/* exported capitalizeWords */
function capitalizeWords(string) {
  var lo = string.toLowerCase().split(' ');
  for (var i = 0; i < lo.length; i++) {
    lo[i] = lo[i].charAt(0).toUpperCase() + lo[i].substring(1);
  }
  return lo.join(' ');
}
