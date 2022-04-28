/* exported maxValue */

function maxValue(stack) {
  let highestNumber = null;
  while (stack.peek() !== undefined) {
    if (stack.peek() > highestNumber ||
      highestNumber === null) {
      highestNumber = stack.pop();
    } else {
      stack.pop();
    }
  }
  if (highestNumber === null) {
    return -Infinity;
  }
  return highestNumber;
}
