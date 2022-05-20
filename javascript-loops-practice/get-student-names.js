/* exported getStudentNames */
function getStudentNames(students) {
  var nameArray = [];
  var i = 0;
  var object = students[i];
  for (i; i < students.length; i++) {
    for (var key in object) {
      nameArray.push(object[key]);
      object = students[i + 1];
    }
  }
  return nameArray;
}
