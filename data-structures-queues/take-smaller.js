/* exported takeSmaller */

function takeSmaller(queue) {
  if (queue.peek() === undefined) {
    return;
  }
  const firstValue = queue.dequeue();
  if (queue.peek() === undefined) {
    return firstValue;
  }
  const secondValue = queue.dequeue();
  if (firstValue < secondValue ||
    firstValue === secondValue) {
    queue.enqueue(secondValue);
    return firstValue;
  } else {
    queue.enqueue(firstValue);
    return secondValue;
  }
}
