/* exported truncate */

/*
-return the template literal of the slice method of string with 0 and length as it's arguments and concatonate it with '...'
*/

function truncate(length, string) {
  return `${string.slice(0, length)}...`;
}
