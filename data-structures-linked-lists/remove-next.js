/* exported removeNext */

function removeNext(list) {
  if (list.next === null) {
    return list;
  } else if (list.next !== null) {
    var yo = list.next.next;
    list.next = yo;
    return list;
  }
}
