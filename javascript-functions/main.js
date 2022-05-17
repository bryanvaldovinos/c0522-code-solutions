function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}

console.log(convertMinutesToSeconds(6));

function greet(name) {
  return 'Hey, ' + name;
}

console.log(greet('Stiffler'));

function getArea(width, height) {
  return width * height;
}

console.log(getArea(8, 9));

function getFirstName(person) {
  return person.firstName;
}

console.log(getFirstName({ firstName: 'Ever', lastName: 'Greatest' }));

function getLastElement(array) {
  var lastElement = array.length - 1;
  return array[lastElement];
}

console.log(getLastElement(['propane', 'and', 'propane', 'accessories']));
