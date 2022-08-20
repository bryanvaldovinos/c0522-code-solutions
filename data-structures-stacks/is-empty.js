/* exported isEmpty */

function isEmpty(stack) {
  const check = stack.peek();
  if (check === undefined) {
    return true;
  } else {
    return false;
  }
}
