var express = require('express');
var app = express();
const data = require('./data.json');
const fileSys = require('fs');

app.get('/api/notes', (req, res) => {
  const newArray = [];
  for (var property in data.notes) {
    newArray.push(data.notes[property]);
  }
  res.status(200).send(newArray);
});

app.get('/api/notes/:id', (req, res) => {
  const inputID = Number(req.params.id);
  var dataNote = data.notes[inputID];

  if ((inputID < 0) || (isNaN(inputID))) {
    const errObj = {
      error: 'id must be a positive integer'
    };
    res.status(400).send(errObj);
  } else if (dataNote !== undefined) {
    if (inputID === dataNote.id) {
      res.status(200).send(dataNote);
    }
  } else if (dataNote === undefined) {
    const errObj = {
      error: `cannot find note with id ${inputID}`
    };
    res.status(404).send(errObj);
  }
});

app.use(express.json());

app.post('/api/notes', (req, res) => {
  const inputC = req.body;
  const inputD = Object.keys(inputC)[0];
  if (inputD === undefined) {
    const newObj = {
      error: 'content is a required field'
    };
    res.status(400).send(newObj);
  } else {
    const cont = inputC.content;
    const inputObj = {
      id: data.nextId,
      content: cont
    };
    data.notes[data.nextId] = inputObj;
    data.nextId = data.nextId + 1;
    const newFile = JSON.stringify(data, null, 2);
    fileSys.writeFile('./data.json', newFile, err => {
      const errObj = {
        error: 'An unexpected error occurred.'
      };
      if (err) {
        console.error(errObj);
        res.status(500).send(errObj);
      } else {
        res.status(201).send(inputObj);
      }
    });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  if ((id < 0) || (isNaN)) {
    const errObj = {
      error: 'id must be a positive integer'
    };
    res.status(400).send(errObj);
  } else if (!data.notes[id]) {
    const errObj = {
      error: `cannot find note with id ${id}`
    };
    res.status(404).send(errObj);
  } else {
    delete data.notes[id];
    const newFile = JSON.stringify(data, null, 2);
    fileSys.writeFile('data.json', newFile, err => {
      const errObj = {
        error: 'An unexpected error occurred.'
      };
      if (err) {
        console.error(errObj);
        res.status(500).send(errObj);
      } else {
        res.sendStatus(204);
      }
    });
  }
});

app.put('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  const inputC = Object.keys(req.body)[0];
  if (inputC === undefined) {
    const errObj = {
      error: 'content is a required field'
    };
    res.status(400).send(errObj);
  } else if (id < 0) {
    const errObj = {
      error: 'id must be a positive integer'
    };
    res.status(400).send(errObj);
  } else if (!data.notes[id]) {
    const errObj = {
      error: `cannot find note with id ${id}`
    };
    res.status(404).send(errObj);
  } else {
    data.notes[id].content = req.body.content;
    const newFile = JSON.stringify(data, null, 2);
    const inputObj = {
      content: req.body.content,
      id: Number(req.params.id)
    };
    fileSys.writeFile('data.json', newFile, err => {
      const errObj = {
        error: 'An unexpected error occurred.'
      };
      if (err) {
        console.error(errObj);
        res.status(500).send(errObj);
      } else {
        res.status(200).send(inputObj);
      }
    });
  }
});

app.listen(3000, err => {
  if (err) {
    console.error(err);
  }
  // console.log('Server listening on port 3000!');
});
