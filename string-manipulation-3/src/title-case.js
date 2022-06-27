/* exported titleCase */
function titleCase(title) {
  title = title.toLowerCase().split(' ');
  for (var i = 0; i < title.length; i++) {
    title[i] = title[i].charAt(0).toUpperCase() + title[i].slice(1);
  }
  return title.join(' ');
}
