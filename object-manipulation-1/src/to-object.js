/* exported toObject */

/*
-create a variable named newObj and assign it the value of an empty bracket literal
-assign the value of keyValuePair at index 1 to the keyValuePair property at index 0 to the obj newObj
-return newObj
*/

function toObject(keyValuePair) {
  var newObj = {};
  newObj[keyValuePair[0]] = keyValuePair[1];
  return newObj;
}
