/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  if (stack.peek() === undefined) {
    return undefined;
  } else {

    const topDeck = stack.pop();
    const secondCard = stack.peek();
    stack.push(topDeck);
    return secondCard;
  }
}
