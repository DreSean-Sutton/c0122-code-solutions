/* exported ransomCase */

/*
-create a variable named newStr and assign it the value of a string liteal
-create a for loop that:
  a. assigns the value of 0 to i
  b. executes code block if i is less than str.length
  c. i++
  -if i % 2 is strictly equal to 0
    assign newStr the value of the toUpperCase method of str[i] plus newStr
    -else
    assign newStr the value of the toLowerCase method of str[i] plus newStr
-return newStr
*/

function ransomCase(str) {
  var newStr = '';
  for (var i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      newStr += str[i].toLowerCase();
    } else {
      newStr += str[i].toUpperCase();
    }
  }
  return newStr;
}
