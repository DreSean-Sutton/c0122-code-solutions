/* exported sumAll */

function sumAll(numbers) {
  var numbersSum = 0;
  for (let i = 0; i < numbers.length; i++) {
    numbersSum += numbers[i];
  }
  return numbersSum;
}
