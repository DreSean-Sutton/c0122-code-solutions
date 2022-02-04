/* exported getWords */

/*
-if str is not truthy
  return an empty array literal
-return the split method of str with ' ' as it's parameter
*/

function getWords(str) {
  if (!str) {
    return [];
  }
  return str.split(' ');
}
