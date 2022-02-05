/* exported tail */

/*
-create a new variable named newArr and assign it the value of an empty array literal
-create a for loop that:
  a. assigns the value of 1 to i
  b. executes code block if i is less than arr.length
  c. i++
  -call the push method of newArr with arr[i] as it's argument
-return newArr
*/

function tail(arr) {
  var newArr = [];
  for (var i = 1; i < arr.length; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
}
