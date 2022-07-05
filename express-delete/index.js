var express = require('express');
var app = express();
var newArray = [];

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

for (var property in grades) {
  newArray.push(grades[property]);
}

app.get('/api/grades', (req, res) => {
  res.json(newArray);
});

app.delete('/api/grades/:id', (req, res) => {
  newArray = [];
  for (var property in grades) {
    if (property === req.params.id) {
      delete grades[property];
    }
  }
  for (var prop in grades) {
    newArray.push(grades[prop]);
  }
  res.sendStatus(204);
});

app.listen(3000, err => {
  if (err) {
    console.error(err);
  }
  // console.log('Listening of port 3000!');
});
