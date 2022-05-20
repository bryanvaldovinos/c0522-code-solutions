/* exported getDescriptionOfPerson */
function getDescriptionOfPerson(person) {
  var bioOfPerson = person.name + ' is a ' + person.occupation + ' from ' + person.birthPlace + '.';
  return bioOfPerson;
}
