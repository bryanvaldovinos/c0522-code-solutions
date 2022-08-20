/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  const check = stack.peek();
  if (check === undefined) {
    return undefined;
  }
  stack.pop();
  const second = stack.peek();
  stack.push(check);
  return second;
}
