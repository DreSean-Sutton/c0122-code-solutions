/* exported capitalizeWords */

/*
create a variable named newStr and assign it the value of an empty string literal
-create a variable named capitalLetterStr and assign it the value of the
... toUpperCase method of str at index 0 concatonated with the toLowerCase
... method of the slice method of str with 1 as it's argument
-create a for loop that:
  a. assigns the value of 0 to i
  b. executes code block if i is less than str.length
  c.i++
  -if str[i] is strictly equal to ' '
    assign the value of ' ' concatonated with the toUpperCase method of str at index i + 1
    increment i by 1
  -else
    assign the value of str[i] + newStr to newStr
-return newStr
*/

function capitalizeWords(str) {
  var newStr = '';
  var capitalLetter = str[0].toUpperCase() + str.slice(1).toLowerCase();
  for (var i = 0; i < capitalLetter.length; i++) {
    if (capitalLetter[i] === ' ') {
      newStr += capitalLetter[i] + capitalLetter[i + 1].toUpperCase();
      i++;
    } else {
      newStr += capitalLetter[i];
    }
  }
  return newStr;
}
