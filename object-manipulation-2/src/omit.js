/* exported omit */

/*
-create a variable named newObj and assign it the value of an empty bracket literal
-create a for key in source loop
  -if the includes method of keys with key as it's argument is false and the key property of source is not strictly equal to undefined
    assign the value of property key of source to property key of newObj
-return newObj
*/

function omit(source, keys) {
  var newObj = {};
  for (var key in source) {
    if ((!keys.includes(key)) &&
    (source[key] !== undefined)) {
      newObj[key] = source[key];
    }
  }
  return newObj;
}
