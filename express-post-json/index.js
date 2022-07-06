var express = require('express');
var app = express();
let nextId = 1;
const grades = {};

app.get('/api/grades', (req, res) => {
  const newArray = [];
  for (const id in grades) {
    newArray.push(grades[id]);
  }
  res.json(newArray);
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  const student = req.body;
  const id = nextId++;
  student.id = id;
  grades[id] = student;
  res.status(201).send(student);
});

app.listen(3000, err => {
  if (err) {
    console.error(err);
  }
  // console.log('Express server listening on port 3000');
});
