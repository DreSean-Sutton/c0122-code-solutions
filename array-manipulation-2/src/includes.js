/* exported includes */

/*
-create a for loop that:
  a. assigns the value of 0 to i
  b. executes the code block if i is less than arr.length
  c. i++
  -if arr[i] is strictl equal to value
    return true;
-return false
*/

function includes(arr, value) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return true;
    }
  }
  return false;
}
