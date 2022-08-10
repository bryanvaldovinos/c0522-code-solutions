/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported insertNext */

function insertNext(list, value) {
  var we = new LinkedList(value);
  we.next = list.next;
  list.next = we;
  return list;
}
