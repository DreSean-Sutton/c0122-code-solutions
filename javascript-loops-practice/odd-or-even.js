/* exported oddOrEven */

function oddOrEven(numbers) {
  var newNumbersArr = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      newNumbersArr.push('even');
    } else {
      newNumbersArr.push('odd');
    }
  }
  return newNumbersArr;
}
