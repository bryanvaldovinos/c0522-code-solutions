/* exported take2nd */

function take2nd(queue) {
  const check = queue.peek();
  if (typeof check !== 'undefined') {
    const move = queue.dequeue();
    queue.enqueue(move);
    return queue.dequeue();
  }
}
