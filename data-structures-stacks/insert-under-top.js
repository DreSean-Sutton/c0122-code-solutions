/* exported insertUnderTop */

function insertUnderTop(stack, value) {
  if (stack.peek() === undefined) {
    return undefined;
  } else {
    const topDeck = stack.pop();
    stack.push(value);
    stack.push(topDeck);
    return stack;
  }
}
