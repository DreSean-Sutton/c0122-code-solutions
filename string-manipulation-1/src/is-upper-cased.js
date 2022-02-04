/* exported isUpperCased */

/*
-if the toUpperCase method of string is strictly equal to string
  return true
-return false
*/

function isUpperCased(string) {
  if (string.toUpperCase() === string) {
    return true;
  }
  return false;
}
