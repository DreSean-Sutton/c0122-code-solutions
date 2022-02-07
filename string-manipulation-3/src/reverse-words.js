/* exported reverseWords */

/*
-create a variable named splitStr and assign it the value of the split method with ' ' as it's argument
...of the slice method of str with 0 as it's argument
-create a variable named newStr and assign it the value of an empty string literal
-create a for loop that:
  a. assigns the value of 0 to i
  b. executes code block if i is less than splitStr.length
  c. i++
  -create a for loop that:
    a. assigns the value of 0 to j
    b. executes code block if j is less than splitStr[i].length
    c. j++
    -newStr += splitStr[i][j]
    -if i is less than the length method of splitStr - 1 is true
      newStr += ' '
-return newStr
*/

function reverseWords(str) {
  var splitStr = str.slice(0).split(' ');
  var newStr = '';
  for (let i = 0; i < splitStr.length; i++) {
    for (let j = splitStr[i].length - 1; j >= 0; j--) {
      newStr += splitStr[i][j];
    }
    if (i < splitStr.length - 1) {
      newStr += ' ';
    }
  }
  return newStr;
}

reverseWords('What is unit testing?');
