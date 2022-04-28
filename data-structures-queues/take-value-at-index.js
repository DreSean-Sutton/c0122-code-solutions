/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  if (queue.peek() === undefined) {
    return;
  }
  let frontValue = null;
  for (let i = 0; i < index; i++) {
    frontValue = queue.dequeue();
    queue.enqueue(frontValue);
  }
  return queue.dequeue();
}
