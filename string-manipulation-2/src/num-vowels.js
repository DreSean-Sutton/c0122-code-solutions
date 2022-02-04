/* exported numVowels */

/*
-create a variable named vowelCounter and assign it the value of 0
-create a for loop that:
  a. assign the value of 0 to i
  b. executes code block if i is less than str.length
  c. i++
  -if str[i] is strictly equal to 'a', A, e, E, i, I, o, O, u, U
  increment vowelCounter by 1
-return vowelCounter
*/

function numVowels(str) {
  var vowelCounter = 0;
  for (var i = 0; i < str.length; i++) {
    if ((str[i] === 'a') ||
        (str[i] === 'A') ||
        (str[i] === 'e') ||
        (str[i] === 'E') ||
        (str[i] === 'i') ||
        (str[i] === 'I') ||
        (str[i] === 'o') ||
        (str[i] === 'O') ||
        (str[i] === 'u') ||
        (str[i] === 'U')) {
      vowelCounter++;
    }
  }
  return vowelCounter;
}
