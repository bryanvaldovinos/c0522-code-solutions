/* exported updateNext */

function updateNext(list, value) {
  if (list.next === null) {
    return list;
  } else if (list.next !== null) {
    var we = list.next;
    we.data = value;
    list.next = we;
    return we;
  }
}
