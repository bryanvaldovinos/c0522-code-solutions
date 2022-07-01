const fileSys = require('fs');
const command = process.argv[2];
const input = process.argv[3];
const input2 = process.argv[4];
const obj = require('./data.json');

if (command === 'read') {
  for (var i = 1; i < obj.nextId; i++) {
    console.log([i].toString() + ':', obj.notes[i]);
  }
}
if (command === 'create') {
  obj.notes[obj.nextId] = input;
  obj.nextId = obj.nextId + 1;
  const newFile = JSON.stringify(obj, null, 2);
  fileSys.writeFile('data.json', newFile, err => {
    if (err) {
      console.error(err);
    }
  });
}

if (command === 'update') {
  if (input < obj.nextId) {
    obj.notes[input] = input2;
    const newFile = JSON.stringify(obj, null, 2);
    fileSys.writeFile('data.json', newFile, err => {
      if (err) {
        console.error(err);
      }
    });
  }
}

if (command === 'delete') {
  if (input < obj.nextId) {
    delete obj.notes[input];
    const newFile = JSON.stringify(obj, null, 2);
    fileSys.writeFile('data.json', newFile, err => {
      if (err) {
        console.error(err);
      }
    });
  }
}
