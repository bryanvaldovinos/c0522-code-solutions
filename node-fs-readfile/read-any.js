const fileSys = require('fs');

const anyFile = process.argv[2];

fileSys.readFile(anyFile, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
