var student = {
  firstName: 'Dre Sean',
  lastName: 'Sutton',
  age: 27
};

var fullName = student.firstName + ' ' + student.lastName;

console.log('value of fullName: ', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Bus Driver for People Physically or Mentally Incapable of Transporting Themselves';

console.log('value of student.livesInIrvine: ', student.livesInIrvine);
console.log('value of student.previousOccupation: ', student.previousOccupation);

var vehicle = {
  make: 'Model S',
  model: 'Tesla',
  year: 2022
};

vehicle['color'] = 'Midnight Grey';
vehicle['isConvertible'] = false;
console.log('value of vehicle[\'color\']: ', vehicle['color']);
console.log('value of vehicle[\'isConvertible\']: ', vehicle['isConvertible']);
console.log('value of vehicle  object:', vehicle);

var pet = {
  name: 'Bellah',
  type: 'Chihuahua'
};

delete pet.name;
delete pet.type;
console.log('value of pet: ', pet);
