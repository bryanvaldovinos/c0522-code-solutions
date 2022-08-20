/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported prepend */

function prepend(list, value) {
  var we = new LinkedList(value);
  we.next = list;
  return we;
}
