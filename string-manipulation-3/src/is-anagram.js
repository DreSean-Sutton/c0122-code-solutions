/* exported isAnagram */

/*
-create a variable named firstStr and a assign it the value of the sort method of the split method of firstString
-create a variable named secondStr and a assign it the value of the sort method of the split method of secondString
-create a for loop that:
  a. assigns the value of 0 to i
  b. executes code block if i is less than firstString.length
  c. i++
  -if firstStr at index i is strictly equal to ' '
    call the splice method of firstStr with i, 1 as it's arguments
    decrement i by 1
  -else if secondStr at index i is strictly equal to ' '
    call the splice method of secondStr with i, 1 as it's arguments
    decrement i by 1
  -else if firstStr at index i isn't strictly equal to secondStr at index i
    return false
-return true
*/

function isAnagram(firstString, secondString) {
  var firstStr = firstString.split('').sort();
  var secondStr = secondString.split('').sort();
  for (var i = 0; i < firstStr.length; i++) {
    if (firstStr[i] === ' ') {
      firstStr.splice(i, 1);
      i--;
    } else if (secondStr[i] === ' ') {
      secondStr.splice(i, 1);
      i--;
    } else if (firstStr[i] !== secondStr[i]) {
      return false;
    }
  }
  return true;
}
