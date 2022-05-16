var student = {
  firstName: 'Bryan',
  lastName: 'Valdovinos',
  age: '26'
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'security';
console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of student.previousOccupation:', student.previousOccupation);

var vehicle = {
  make: 'Toyota',
  model: 'Supra',
  year: '2022'
};

vehicle['color'] = 'Nitro Yellow';
vehicle['isConvertible'] = false;
console.log('value of vehicle.color:', vehicle.color);
console.log('value of vehicle.isConvertible:', vehicle.isConvertible);
console.log('value of vehicle:', vehicle);

var pet = {
  name: 'Buster',
  type: 'Yorkshire Terrier'
};

delete pet.name;
delete pet.type;
console.log(pet);
