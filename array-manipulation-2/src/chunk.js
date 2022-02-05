/* exported chunk */

/*
-create a arrCounter and assign it the value of size
-create a variable named tempArr and assign it the value of an empty array literal
-create a variable named newArr and assign it the value of an empty array literal
-create a for loop that:
  a. assign the value of 0 to i
  b. executes code block if i is less than arr.length
  c. i++
  -if arrCounter is strictly equal to 0
    call the push method of newArr with tempArr as it's argument
    arrCounter = size
    tempArr = [];
  -if i is strictly equal to arr.length - 1
    call the push method of newArr with tempArr as it's argument
  -call the push method of tempArr with arr[i] as it's argument
  -decrement arrCounter by 1
-return newArr
*/

function chunk(arr, size) {
  var arrCounter = size;
  var tempArr = [];
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (arrCounter === 0) {
      newArr.push(tempArr);
      arrCounter = size;
      tempArr = [];
    }
    if (i === arr.length - 1) {
      newArr.push(tempArr);
    }
    tempArr.push(arr[i]);
    arrCounter--;
  }
  return newArr;
}
