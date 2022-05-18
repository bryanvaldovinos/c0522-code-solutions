var numberOne = 36;
var numberTwo = 48;
var numberThree = 24;

var maximumValue = Math.max(numberOne, numberTwo, numberThree);
console.log('maximumValue:', maximumValue);

var heroes = ['spidey', 'static', 'ironman', 'jackjack'];

var randomNumber = Math.random();

randomNumber = randomNumber * heroes.length;

var randomIndex = Math.floor(randomNumber);
console.log('randomNumber:', randomIndex);

var randomHero = heroes[randomIndex];
console.log('randomHero:', randomHero);

var library = [
  {
    title: 'Harry Potter',
    author: 'JK Rowling'
  },
  {
    title: 'Hatchet',
    author: 'Gary Paulsen'
  },
  {
    title: 'Simpsons',
    author: 'Matt Groening'
  }
];

var lastBook = library.pop();
console.log('lastBook:', lastBook);

var firstBook = library.shift();
console.log('firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);

console.log('libary:', library);

var fullName = 'Bryan Valdovinos';

var firstAndLastName = fullName.split(' ');
console.log('firstAndLastName', firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('sayMyName:', sayMyName);
