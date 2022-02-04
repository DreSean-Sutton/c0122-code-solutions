/* exported isVowel */

/*
-if the test method of the regex /aeiou/i with str as it's parameter is true
  return true
-return false;
*/

function isVowel(str) {
  if (/[aeiou]/i.test(str)) {
    return true;
  }
  return false;
}
