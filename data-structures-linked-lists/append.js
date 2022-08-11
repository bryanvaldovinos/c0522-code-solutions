/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported append */

function append(list, value) {
  var huh = list;
  while (huh.next !== null) {
    huh = huh.next;
  }
  huh.next = new LinkedList(value);
}
