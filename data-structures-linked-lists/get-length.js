/* exported getLength */

function getLength(list) {

  let counter = 1;
  while (list.next !== null) {
    counter++;
    list = list.next;
  }
  return counter;
}
