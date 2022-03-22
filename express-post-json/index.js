const express = require('express');
const app = express();
const grades = {};
let nextId = 1;

app.get('/api/grades', (req, res) => {
  const getArray = [];
  console.log(grades);
  for (const key in grades) {
    getArray.push(grades[key]);
    console.log(grades);
  }
  res.json(getArray);
});

const expressJSON = express.json();

app.use('/api/grades', expressJSON);

app.post('/api/grades', (req, res) => {
  const newGrade = req.body;
  const id = nextId;
  newGrade.id = id;
  grades[id] = newGrade;
  console.log(newGrade);
  nextId++;
  res.status(201).json(newGrade);
});

app.listen(3000, () => {
  console.log('Server is listening');
});
