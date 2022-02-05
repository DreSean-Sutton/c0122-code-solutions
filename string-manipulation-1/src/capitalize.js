/* exported capitalize */

/*
-create a new variable named firstLetter and assign it the value the toUpperCase metho of the slice method of string wit 0, 1 as it's parameters
-return firstLetter concatonated with the toLowerCase method with 0 as it's parameter of the slice method of string with 1 as it's parameter
*/

function capitalize(string) {
  var firstLetter = string.slice(0, 1).toUpperCase();
  return firstLetter + string.slice(1).toLowerCase(0);
}
