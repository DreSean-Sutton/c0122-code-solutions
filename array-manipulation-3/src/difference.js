/* exported difference */

/*
-create a variable named newArr and assign it the value of an empty array literal
-create a for loop that:
  a. assigns the value of 0 to i
  b. executes code block if i is less than the length method of firstArr
  c. i++
  -if the includes method of secondArr with firstArr[i] as it's argument is false
    call the push method of newArr with firstArr[i] as it's argument
-create a for loop that:
  a. assigns the value of 0 to j
  b. executes code block if j is less than the length method of firstArr
  c. j++
  -if the includes method of firstArr with secondArr[j] as it's argument is false
    call the poush method of newArr with secondArr[j] as it's argument
-return newArr
*/

function difference(firstArr, secondArr) {
  var newArr = [];
  for (var i = 0; i < firstArr.length; i++) {
    if (!secondArr.includes(firstArr[i])) {
      newArr.push(firstArr[i]);
    }
  }
  for (var j = 0; j < secondArr.length; j++) {
    if (!firstArr.includes(secondArr[j])) {
      newArr.push(secondArr[j]);
    }
  }
  return newArr;
}
