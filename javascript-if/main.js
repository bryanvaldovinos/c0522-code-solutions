/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */
function isUnderFive(number) {
  if (number < 5) {
    return true;
  } else {
    return false;
  }
}

function isEven(number) {
  var remainder = number % 2;
  if (remainder > 0) {
    return false;
  } else {
    return true;
  }
}

function startsWithJ(string) {
  if (string[0] === 'J') {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrink(person) {
  if (person.age >= 21) {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrive(person) {
  if (person.age >= 16) {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrinkAndDrive(person) {
  if ((person.age >= 21) && (person.age >= 16)) {
    return !true;
  } else {
    return false;
  }
}

function categorizeAcidity(pH) {
  if ((pH > 7) && (pH < 15)) {
    return 'base';
  } else if ((pH > -1) && (pH < 7)) {
    return 'acidic';
  } else if (pH === 7) {
    return 'neutral';
  } else {
    return 'invalid pH level';
  }
}

function introduceWarnerBro(name) {
  if (name === 'yako') {
    return 'We\'re the warner brothers!';
  } else if (name === 'wakko') {
    return 'We\'re the warner brothers!';
  } else if (name === 'dot') {
    return 'I\'m cute~';
  } else {
    return 'Goodnight everybody!';
  }
}
