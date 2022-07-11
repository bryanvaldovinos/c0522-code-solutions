const pg = require('pg');
const express = require('express');
var app = express();

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.get('/api/grades', (req, res) => {
  const params = [];
  const sql = `
  select "gradeId",
           "name",
           "course",
           "score",
           "createdAt"
      from "grades"
  `;
  db.query(sql, params)
    .then(result => {
      const grade = result.rows;
      res.status(200).json(grade);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'an unexepected error occured'
      });
    });
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  const inputC = req.body.course;
  const inputN = req.body.name;
  const inputS = Number(req.body.score);
  const params = [inputC, inputN, inputS];

  if (((inputN || inputC || inputS) === undefined) || (!Number.isInteger(inputS)) || (inputS <= 0)) {
    res.status(400).send({ error: 'grade must include name, course, and score(must be positive integer)' });
  } else {
    const sql = `
    insert into "grades" ("name", "course", "score")
    values ($1, $2, $3)
    returning *;
    `;
    db.query(sql, params)
      .then(result => {
        const grade = result.rows[0];
        res.status(201).send(grade);
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({
          error: 'an unexepected error occured'
        });
      });
  }
});

app.put('/api/grades/:gradeId', (req, res) => {
  const id = Number(req.params.gradeId);
  const inputC = req.body.course;
  const inputN = req.body.name;
  const inputS = Number(req.body.score);
  const params = [inputC, inputN, inputS, id];

  if (((inputN || inputC || inputS) === undefined) || (!Number.isInteger(inputS)) || (inputS <= 0)) {
    res.status(400).send({ error: 'grade must include name, course, and score(must be positive integer)' });
    return;
  }

  const sql = `
    update "grades"
      set "course" = $1,
          "name" = $2,
          "score" = $3
        where "gradeId" = $4
      returning *
  `;

  db.query(sql, params)
    .then(result => {
      const grades = result.rows;
      if (!grades[0]) {
        res.status(404).send({ error: `cannot find grade with id ${id}` });
      } else {
        res.status(200).send(grades[0]);
      }

    })
    .catch(err => {
      console.error(err);
      res.status(500).send({ error: 'an unexpected error occured' });
    });
});

app.delete('/api/grades/:gradeId', (req, res) => {
  const id = Number(req.params.gradeId);
  if (isNaN(id) || id <= 0) {
    res.status(400).send({ error: 'gradeId must be a positive integer' });
    return;
  }

  // const check = `
  //   select "gradeId",
  //          "name",
  //          "course",
  //          "score",
  //          "createdAt"
  //     from "grades"
  // `;

  // db.query(check)
  //   .then(result => {
  //     const grades = result.rows;
  //     const verify = obj => obj.gradeId === id;
  //     if (!grades.some(verify)) {
  //       res.status(404).send({ error: `cannot find grade with id ${id}` });
  //     }

  //   });

  const sql = `
    delete from "grades"
      where "gradeId" = $1
  `;

  const param = [id];
  db.query(sql, param)
    .then(result => {
      const grades = result.rows;
      if (!grades[0]) {
        res.status(404).send({ error: `cannot find grade with id ${id}` });
      } else {
        res.status(204);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).send({ error: 'an unexpected error occured' });
    });
});

app.listen(3000, () => {
  // console.log('Listening on port 3000!');
});
