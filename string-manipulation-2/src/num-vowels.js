/* exported numVowels */

/*
-create a varialbe named lowerCaseStr and assign it the value of the
a.toLowerCase method of the slice method of str with 0 as it's argument
-create a variable named vowelCounter and assign it the value of 0
-create a for loop that:
  a. assign the value of 0 to i
  b. executes code block if i is less than str.length
  c. i++
  -if str[i] is strictly equal to 'a', 'e', 'i', 'o', or 'u'
  increment vowelCounter by 1
-return vowelCounter
*/

function numVowels(str) {
  var lowerCaseStr = str.slice(0).toLowerCase();
  var vowelCounter = 0;
  for (var i = 0; i < lowerCaseStr.length; i++) {
    if (lowerCaseStr[i] === 'a' ||
        lowerCaseStr[i] === 'e' ||
        lowerCaseStr[i] === 'i' ||
        lowerCaseStr[i] === 'o' ||
        lowerCaseStr[i] === 'u') {
      vowelCounter++;
    }
  }
  return vowelCounter;
}
