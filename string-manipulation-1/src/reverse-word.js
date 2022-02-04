/* exported reverseWord */

/*
-create a variable named reversed and assign it the value of an empty array literal
-create a for loop that:
  a. assigns the value of 0 to i
  b. executes code block if i is less than str.length
  c. incremements i by 1
  -use the push method of reversed with str[i] as it's argument
-return the join method with '' as it's argument of the reverse method of reversed reversed
*/

function reverseWord(str) {
  var reversed = [];
  for (var i = 0; i < str.length; i++) {
    reversed.push(str[i]);
  }

  return reversed.reverse().join('');
}
