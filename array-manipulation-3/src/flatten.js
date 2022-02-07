/* exported flatten */

/*
-create a variable named newArr and assign it the value of an empty array literal
-create a for loop that:
  a. assigns the value of 0 to i
  b. executes code block if i is less than arr.length
  c. i++
  -if the isArray method of Array with arr[i] is true:
    create a for loop that:
      a. assigns the value of 0 to j
      b. executes code block if j is less than arr[i].length
      c. j++
      -call the push method of newArr with arr[i][j] as it's argument
  -else
    call the push method of newArr with arr[i] as it's argument
-return newArr
*/

function flatten(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      for (var j = 0; j < arr[i].length; j++) {
        newArr.push(arr[i][j]);
      }
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
