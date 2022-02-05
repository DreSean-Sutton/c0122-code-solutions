/* exported pick */

/*
-create a variable named newObj and assign it the value of an empty bracket literal
-create a for key in source loop
  -if the includes method of keys with key as a argument is true and the key property of source isn't strictly equal to undefined
    assign the value of the key property of source to the key property of newObj
-return newObj
*/

function pick(source, keys) {
  var newObj = {};
  for (var key in source) {
    if ((keys.includes(key)) &&
    (source[key] !== undefined)) {
      newObj[key] = source[key];
    }
  }
  return newObj;
}
