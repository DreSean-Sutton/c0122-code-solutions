/* exported swapFront */

function swapFront(list) {
  // debugger;
  if (list.next === null) return list;
  if (list.data !== null) {
    const firstNode = list.data;
    const secondNode = list.next.data;
    list.data = secondNode;
    list.next.data = firstNode;
    return list;
  }
}
