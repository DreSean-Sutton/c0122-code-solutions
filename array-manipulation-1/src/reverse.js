/* exported reverse */

/*
-create a variable named newArr and assign it the value of an empty array literal
-create a for loop that:
  a. assign the value of arr.length-1 to i
  b. executes code block if i is greater than or equal to 0
  c. i--
  -call the push method of newArr with arr[i] as it's argument
-return newArr
*/

function reverse(arr) {
  var newArr = [];
  for (var i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
}
