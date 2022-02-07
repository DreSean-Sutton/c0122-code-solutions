/* exported isPalindromic */

/*
-create a variable named splitStr and assign it the value the split method of str
-create a variable named reverseStr and assign it the value of an empty array literal
-create a for loop that:
  a. assigns the value of 0 to variable i
  b. executes code block if i is less than the length method of splitStr
  c. i++
  -if splitStr[i] is not strictly equal to ' '
    call the push method of reverseStr with splitStr at index i as it's argument
-if the join method with '' as its argument of the reverse method of reverseStr is strictly equal to the join method of checkingArr with '' as it's argument
  return true
-return false
*/

function isPalindromic(str) {
  var splitStr = str.split('');
  var reverseStr = [];
  for (var i = 0; i < splitStr.length; i++) {
    if (splitStr[i] !== ' ') {
      reverseStr.push(splitStr[i]);
    }
  }
  var checkingArr = reverseStr.slice(0);
  if (reverseStr.reverse().join('') === checkingArr.join('')) {
    return true;
  }
  return false;
}
