/* exported union */

/*
-create a variable named newArr and assign it the value of an empty array literal
-create a for loop that:
  a. assigns the value of 0 to i
  b. executes code block if i is less than firstArr.length
  c. i++
  -if the includes method of newArr with firstArr[i] as it's argument is false:
    call the push method of newArr with firstArr[i] as it's argument
-create a for loop that:
  a. assigns the value of 0 to i
  b. executes code block if i is less than firstArr.length
  c. i++
  -if the includes method of newArr with secondArr[j] as it's argument is false
    call the push method of newArr with secondArr[j] as it's argument
-return newArr
*/

function union(firstArr, secondArr) {
  var newArr = [];
  for (var i = 0; i < firstArr.length; i++) {
    if (!newArr.includes(firstArr[i])) {
      newArr.push(firstArr[i]);
    }
  }

  for (var j = 0; j < secondArr.length; j++) {
    if (!newArr.includes(secondArr[j])) {
      newArr.push(secondArr[j]);
    }
  }
  return newArr;
}
