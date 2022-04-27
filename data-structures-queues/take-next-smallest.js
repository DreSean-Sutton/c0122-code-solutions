/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  const newQueue = queue;
  if (newQueue.peek() === undefined) {
    return;
  }
  let firstValue = newQueue.dequeue();
  if (newQueue.peek() === undefined) {
    return firstValue;
  }
  while (queue.peek() !== undefined) {
    if (firstValue <= queue.peek()) {
      return firstValue;
    }
    queue.enqueue(firstValue);
    firstValue = queue.dequeue();
  }
}
