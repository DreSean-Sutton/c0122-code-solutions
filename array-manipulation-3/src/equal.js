/* exported equal */
/*
-if firstArr.length is not strictly equal to secondArr.length
  return false
-create a for loop that:
  a. assigns the value of 0 to i
  b. executes code block if i is less than firstArr.length
  c. i++
  -if firstArr[i] is not strictly equal to secondArr[i]
    return false
-return true
*/

function equal(firstArr, secondArr) {
  if (firstArr.length !== secondArr.length) {
    return false;
  }

  for (var i = 0; i < firstArr.length; i++) {
    if (firstArr[i] !== secondArr[i]) {
      return false;
    }
  }
  return true;
}
