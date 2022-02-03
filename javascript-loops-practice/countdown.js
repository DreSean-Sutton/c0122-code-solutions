/* exported countdown */

function countdown(number) {
  var numbersArr = [];
  for (var i = number; i >= 0; i--) {
    numbersArr.push(i);
  }
  return numbersArr;
}
