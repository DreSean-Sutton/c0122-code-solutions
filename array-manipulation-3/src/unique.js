/* exported unique */

/*
-create a variable named newArr and assign it the value of an empty array literal
-create a for loop that:
  a. assigns the value of 0 to i
  b. executes code block if i is less than arr.length
  c. i++
  -if the includes method of newArr with arr[i] as it's argument is not true
    call the push method of newArr with arr[i] as it's argument
-return newArr
*/

function unique(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (!newArr.includes(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
