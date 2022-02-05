/* exported getStudentNames */

function getStudentNames(students) {
  // debugger;
  var studentsArr = [];
  for (var i = 0; i < students.length; i++) {
    studentsArr.push(students[i].name);
  }
  return studentsArr;
}

// getStudentNames([{ name: 'Robert' }, { name: 'Steve' }, { name: 'Ken' }]);
