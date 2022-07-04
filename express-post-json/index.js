var express = require('express');
var app = express();
let nextId = 1;
let grades = {};
const newArray = [];

app.get('/api/grades', (req, res) => {
  res.json(newArray);
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  grades.name = req.body.name;
  grades.course = req.body.course;
  grades.score = req.body.score;
  grades.id = nextId;
  res.status(201).send(grades);
  newArray.push(grades);
  grades = {};
  nextId = nextId + 1;
});

app.listen(3000, err => {
  if (err) {
    console.error(err);
  }
  // console.log('Express server listening on port 3000');
});
