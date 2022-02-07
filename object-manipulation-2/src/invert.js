/* exported invert */
/*
-create a variable named newObj and assign it the value of an empty bracket literal
-create a for key in source loop
-create a variable named newKey and assign it the value of property key of object source
-assign the value of key to the newKey property of newObj object
-return newObj
*/

function invert(source) {
  var newObj = {};
  for (var key in source) {
    var newKey = source[key];
    newObj[newKey] = key;
  }
  return newObj;
}
