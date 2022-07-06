var express = require('express');
var app = express();

const grades = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100
  },
  273: {
    id: 273,
    name: 'Forbes Lindsay',
    course: 'JavaScript',
    score: 92
  }
};

app.get('/api/grades', (req, res) => {
  const newArray = [];
  for (const id in grades) {
    newArray.push(grades[id]);
  }
  res.json(newArray);
});

app.delete('/api/grades/:id', (req, res) => {
  const id = Number(req.params.id);
  if (!grades[id]) {
    res.sendStatus(404);
  } else {
    delete grades[id];
    res.sendStatus(204);
  }
});

app.listen(3000, err => {
  if (err) {
    console.error(err);
  }
  // console.log('Listening of port 3000!');
});
