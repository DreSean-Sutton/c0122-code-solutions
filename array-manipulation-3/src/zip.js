/* exported zip */

/*
-create a variable named newArr and assign it the value of an empty []
-create a for loop that:
  a. Assign the value of 0 to i
  b. execute code block if i is less than the min method of the Math
  ...object with firstArr.length and secondArr.length as it's arguments
  c. i++
  -call the push method of newArr with firstArr[i] and secondArr as it's argument's inside an array literal
-return newArr
*/

function zip(firstArr, secondArr) {
  var newArr = [];
  for (var i = 0; i < Math.min(firstArr.length, secondArr.length); i++) {
    newArr.push([firstArr[i], secondArr[i]]);
  }
  return newArr;
}
