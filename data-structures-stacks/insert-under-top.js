/* exported insertUnderTop */

function insertUnderTop(stack, value) {
  const check = stack.peek();
  if (check !== undefined) {
    stack.pop();
    stack.push(value);
    stack.push(check);
  }
}
