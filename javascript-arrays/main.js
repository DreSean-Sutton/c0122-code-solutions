/* eslint-disable no-unused-vars */
var colors = ['red', 'white', 'blue'];

for (var i = 0; i < colors.length; i++) {
  console.log(`value of colors at colors[${i}] `, colors[i]);
}
console.log('America is ' + colors[0] + ', ' + colors[1] + ', and ' + colors[2]);

colors[2] = 'green';

console.log('Mexico is ' + colors[0] + ', ' + colors[1] + ', and ' + colors[2]);
console.log('value of colors: ', colors);

var students = ['someone', 'someoneElse', 'uhh', 'wut'];

var numberOfStudents = students.length;

console.log('there are ' + numberOfStudents + ' students in the class.');

var lastIndex = numberOfStudents - 1;
var lastStudent = students[lastIndex];

console.log('the last student in the array is ' + lastStudent + '.');
console.log('value of students: ', students);
