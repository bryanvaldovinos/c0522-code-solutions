/* exported takeSmaller */

function takeSmaller(queue) {
  const first = queue.dequeue();
  if (queue.peek() === undefined) {
    return first;
  } else if (first >= queue.peek()) {
    queue.enqueue(first);
    const check = queue.dequeue();
    return check;
  } else if (first < queue.peek()) {
    const check = queue.dequeue();
    queue.enqueue(check);
    return first;
  }
}
