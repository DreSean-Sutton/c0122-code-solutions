const add = require('./math/add');
const subtract = require('./math/subtract');
const multiply = require('./math/multiply');
const divide = require('./math/divide');

const mathObj = {
  addition: add(process.argv[2] * 1, process.argv[4] * 1),
  subtract: subtract(process.argv[2] * 1, process.argv[4] * 1),
  multiply: multiply(process.argv[2] * 1, process.argv[4] * 1),
  divide: divide(process.argv[2] * 1, process.argv[4] * 1)
};

if (/plus/gi.test(process.argv[3])) {
  console.log(mathObj.addition);
} else if (/minus/gi.test(process.argv[3])) {
  console.log(mathObj.subtract);
} else if (/times/gi.test(process.argv[3])) {
  console.log(mathObj.multiply);
} else if (/over/gi.test(process.argv[3])) {
  console.log(mathObj.divide);
} else {
  console.log('Error, middle operator is invalid. Please use plus, minus, times, or over.');
}
