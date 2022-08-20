/* exported isEmpty */

function isEmpty(queue) {
  const check = queue.peek();
  if (check === undefined) {
    return true;
  } else {
    return false;
  }
}
