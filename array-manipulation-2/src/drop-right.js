/* exported dropRight */

/*
-return the the slice method of arr with 0 and -count as it's arguments
*/

function dropRight(arr, count) {
  return arr.slice(0, -count);
}
