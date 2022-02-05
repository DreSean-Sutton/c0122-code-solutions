/* exported isVowel */

/*
-if str is strictly equal to a, A, e, E, i, I, o, O, u, or U
  return true
-return false;
*/

function isVowel(str) {
  if ((str === 'a') ||
      (str === 'A') ||
      (str === 'e') ||
      (str === 'E') ||
      (str === 'i') ||
      (str === 'I') ||
      (str === 'o') ||
      (str === 'O') ||
      (str === 'u') ||
      (str === 'U')) {
    return true;
  }
  return false;
}
