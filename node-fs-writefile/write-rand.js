const fileSys = require('fs');

const number = Math.random();

fileSys.writeFile('random.txt', number.toString() + '\n', 'utf8', err => {
  if (err) {
    console.error(err);
  }
});
