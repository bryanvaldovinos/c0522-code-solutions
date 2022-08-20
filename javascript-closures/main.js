function graduate(credential) {

  return function (fullName) {
    return fullName + ', ' + credential;
  };
}

var medicalSchool = graduate('M.D.');
var lawSchool = graduate('Esq');

console.log(medicalSchool('Bryan Valdovinos'));
console.log(lawSchool('Bryan Valdovinos'));
