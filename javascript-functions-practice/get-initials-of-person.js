/* exported getInitialsOfPerson */
function getInitialsOfPerson(person) {
  var intialsOfPerson = person.firstName[0] + person.lastName[0];
  return intialsOfPerson;
}
