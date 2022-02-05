/* exported getKeys */

/*
-create a variable named newArr and assign it the value of an empty array literal
-create a for key in obj loop
  -call the push method of newArr with key as it's argument
return newArr
*/

function getKeys(obj) {
  var newArr = [];
  for (var key in obj) {
    newArr.push(key);
  }
  return newArr;

}
