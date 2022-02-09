/* exported capitalizeWord */

/*
-create a variable named capitalLetter and assign it the value of str at index 0
-create a variable named upperCaseWord and assign it the value of an empty str
-create a template literal with the toUpperCase method of capitalLetter and with
...the toLowerCase method of the slice method with 1 as a parameter and assign
...its value to upperCaseWord
-if upperCaseWord is strictly equal to 'Javascript'
  return 'JavaScript'
-return upperCaseWord
*/

function capitalizeWord(str) {
  var capitalLetter = str[0];
  var upperCaseWord = `${capitalLetter.toUpperCase()}${str.slice(1).toLowerCase()}`;
  if (upperCaseWord === 'Javascript') {
    return 'JavaScript';
  }
  return upperCaseWord;
}
