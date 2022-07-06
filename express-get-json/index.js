var express = require('express');
var app = express();

var grades = {
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

app.listen(3000, () => {
  // console.log('Express server listening on port 3000');
});

app.get('/api/grades', (req, res) => {
  const newArray = [];
  for (var key in grades) {
    newArray.push(grades[key]);
  }
  res.json(newArray);
});
