const express = require('express');
const app = express();
const port = 3000;
const pg = require('pg');
const expressJSON = express.json();
app.use('/api/grades', expressJSON);

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.get('/api/grades', (req, res) => {
  const sql = `
    SELECT *
    FROM
      "grades"
      ORDER BY
        "name"
      `;
  db.query(sql)
    .then(result => {
      const allGrades = result.rows;
      res.json(allGrades);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occurred.' });
    });
});

app.post('/api/grades', (req, res) => {
  const text = `
    INSERT INTO
      GRADES
        ("name",
        "course",
        "score")
      VALUES
        ($1, $2, $3)
      RETURNING *
      `;
  const newGrade = req.body;
  const values = [newGrade.name, newGrade.course, newGrade.score];
  if (newGrade.name === undefined ||
    newGrade.course === undefined ||
    newGrade.score === undefined) {
    res.status(400).json({ error: 'name, course, and score are required fields' });
  } else if (newGrade.score < 0 ||
    newGrade.score > 100) {
    res.status(400).json({ error: 'score must be from 0 to 100' });
  } else {
    db.query(text, values)
      .then(result => {
        res.status(201).json(result.rows[0]);
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred.' });
      });
  }
});

app.put('/api/grades/:gradeId', (req, res) => {
  const currentId = req.params.gradeId;
  const updatedGrade = req.body;
  const text = `
  UPDATE
  "grades"
  SET
  "name" = $1,
  "course" = $2,
  "score" = $3
    WHERE
    "gradeId" = $4
    RETURNING *;
      `;
  const values = [
    updatedGrade.name,
    updatedGrade.course,
    updatedGrade.score,
    currentId
  ];
  if (updatedGrade.name === undefined ||
    updatedGrade.course === undefined ||
    updatedGrade.score === undefined) {
    res.status(400).json({ error: 'name, course, and score are required fields' });
  } else if (updatedGrade.score < 0 ||
    updatedGrade.score > 100) {
    res.status(400).json({ error: 'score must be from 0 to 100' });
  } else if (currentId < 1) {
    res.status(400).json({ error: 'id must be greater than 0' });
  } else {
    db.query(text, values)
      .then(result => {
        if (result.rows.length === 0) {
          res.status(404).json({ error: `gradeId ${currentId} doesn't exist` });
        } else {
          res.json(result.rows[0]);
        }
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred.' });
      });
  }
});

app.delete('/api/grades/:gradeId', (req, res) => {
  const currentId = req.params.gradeId;
  const text = `
  DELETE FROM
  "grades"
  WHERE
  "gradeId" = $1
  RETURNING *;
  `;
  const values = [currentId];
  if (currentId < 1) {
    res.status(400).json({ error: 'id must be greater than 0' });
  } else {
    db.query(text, values)
      .then(result => {
        if (result.rows.length === 0) {
          res.status(404).json({ error: `gradeId ${currentId} doesn't exist` });
        } else {
          res.status(204).json(result.rows[0]);
        }
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred.' });
      });
  }
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server ${port} is listening`);
});
