/* exported postpone */

function postpone(queue) {
  if (queue.peek() !== undefined) {
    const value = queue.dequeue();
    return queue.enqueue(value);
  }
}
