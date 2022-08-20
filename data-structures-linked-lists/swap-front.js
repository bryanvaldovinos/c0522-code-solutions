/* exported swapFront */

function swapFront(list) {
  if (list.next === null) {
    return list;
  } else if (list.next !== null) {
    var huh = list.data;
    list.data = list.next.data;
    list.next.data = huh;
    return list;
  }
}
