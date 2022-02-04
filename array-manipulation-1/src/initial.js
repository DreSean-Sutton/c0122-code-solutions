/* exported initial */

/*
-create a variable named newArr and assign it the value of an empty array literal
-create a for loop that:
  a. assigns the value of 0 to i
  b. executes code block if i is less than arr.length - 1
  c. i++
  -call the push method of newArr with arr[i] as it's argument
-return newArr
*/

function initial(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length - 1; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
}
