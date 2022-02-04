/* exported isLowerCased */

/*
-if the toLowerCase method of string is strictly equal to string
  return true;
-return false
*/

function isLowerCased(string) {
  if (string.toLowerCase() === string) {
    return true;
  }
  return false;
}
