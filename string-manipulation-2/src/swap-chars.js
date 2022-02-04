/* exported swapChars */

/*
create a variable named newStr and assign it the value of the split method with ''
...as it's argument of the slice method of str with 0 as it's argument
-create a variable named firstSwap and assign it the value of newStr[firstIndex]
-create a variable named secondSwap and assign it the value of newStr[secondIndex]
-call the splice method of newStr with firstIndex, 1, secondSwap as it's arguments
-call the splice method of newStr with secondIndex, 1, firstSwap as it's arguments
-return the join method of newStr with '' as it's arguments
*/

function swapChars(firstIndex, secondIndex, str) {
  var newStr = str.slice(0).split('');
  var firstSwap = newStr[firstIndex];
  var secondSwap = newStr[secondIndex];
  newStr.splice(firstIndex, 1, secondSwap);
  newStr.splice(secondIndex, 1, firstSwap);
  return newStr.join('');
}
