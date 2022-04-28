/* exported take2nd */

function take2nd(queue) {
  const topValue = queue.dequeue();
  if (queue.peek() !== undefined) {
    queue.enqueue(topValue);
    return queue.dequeue();
  }
  return topValue;
}
