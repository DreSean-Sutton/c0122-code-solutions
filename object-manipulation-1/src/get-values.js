/* exported getValues */

/*
-create a variable named newArr and assign it the value of an empty array literal
-create a for key in obj loop
  -call the push method of newArr with obj[key] as it's argument
-return newArr
*/

function getValues(obj) {
  var newArr = [];
  for (var key in obj) {
    newArr.push(obj[key]);
  }
  return newArr;
}
