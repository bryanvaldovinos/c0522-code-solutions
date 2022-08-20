/* exported postpone */

function postpone(queue) {
  const check = queue.peek();
  if (check !== undefined) {
    const move = queue.dequeue();
    queue.enqueue(move);
  }
}
