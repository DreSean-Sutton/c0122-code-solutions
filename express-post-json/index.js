const express = require('express');
const app = express();
let grade = {};
let nextId = 1;
const gradesArray = [];

app.get('/api/grades', (req, res) => {

  res.json(gradesArray);
});

const expressJSON = express.json();

app.use('/api/grades', expressJSON);

app.post('/api/grades', (req, res) => {
  req.body.id = nextId;
  grade = req.body;
  gradesArray.push(grade);
  nextId++;
  res.status(201).send(grade);
});

app.listen(3000, () => {
  console.log('Server is listening');
});
