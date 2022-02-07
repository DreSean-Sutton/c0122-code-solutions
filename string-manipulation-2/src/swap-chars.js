/* exported swapChars */

/*
-create a variable named newStr and assign it the value of an empty string literal
-craete a variable named firstSwap and assign it the value of str at the index of the parameter firstIndex
-craete a variable named secondSwap and assign it the value of str at the index of the parameter secondIndex
-create a for loop that:
a. assigns the value of 0 to i
b. executes code block if i is less than str.length
c. i++
  -if i is strictly equal to firstIndex:
    assign the value of secondSwap plus newStr to newStr
  -else if i is strictly equal to secondIndex:
    assign the value of firstSwap plus newStr to newStr
  -else:
    assign the value of str at index i plus newStr to newStr
-return the join method of newStr with '' as it's arguments
*/

function swapChars(firstIndex, secondIndex, str) {
  var newStr = '';
  var firstSwap = str[firstIndex];
  var secondSwap = str[secondIndex];
  for (var i = 0; i < str.length; i++) {
    if (i === firstIndex) {
      newStr += secondSwap;
    } else if (i === secondIndex) {
      newStr += firstSwap;
    } else {
      newStr += str[i];
    }
  }
  return newStr;
}
