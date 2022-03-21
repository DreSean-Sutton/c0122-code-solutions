const express = require('express');
const fs = require('fs');

const app = express();
const port = 3000;
const dataJSON = require('./data.json');
const expressJSON = express.json();
app.use('/api/notes', expressJSON);

app.get('/api/notes', (req, res) => {
  const notesArr = [];
  for (const key in dataJSON.notes) {
    notesArr.push(dataJSON.notes[key]);
  }
  res.json(notesArr);
});

app.get('/api/notes/:id', (req, res) => {
  const currentId = req.params.id;
  if (currentId < 0) {
    const error = function newError() {
      return { error: 'id must be a positive integer' };
    };
    console.error(error());
    res.status(400).json(error());
  } else if (dataJSON.notes[currentId] === undefined) {
    const error = function newError() {
      return { error: `cannot find note with id ${currentId}` };
    };
    console.error(error());
    res.status(404).json(error());
  }
  res.json(dataJSON.notes[currentId]);
});

app.post('/api/notes', (req, res) => {
  const newNote = req.body;
  console.error(newNote.content);
  if (newNote.content === undefined) {
    const error = function newError() {
      return { error: 'content is a required field' };
    };
    console.error(error());
    res.status(400).json(error());
  }
  const id = dataJSON.nextId;
  newNote.id = id;
  dataJSON.notes[id] = newNote;
  dataJSON.nextId++;
  console.error(dataJSON);
  const data = new Uint8Array(Buffer.from(JSON.stringify(dataJSON, null, 2)));
  fs.writeFile('data.json', data, 'utf-8', err => {
    if (err) {
      const error = function newError() {
        return { error: 'An unexpected error occurred.' };
      };
      console.error(error());
      res.status(500).json(error());
    } else {
      res.status(201).json(newNote);
    }
  });
});

app.delete('/api/notes/:id', (req, res) => {
  const currentId = req.params.id;
  if (currentId < 0) {
    const error = function newError() {
      return { error: 'id must be a positive integer' };
    };
    console.error(error);
    res.status(400).json(error);
  } else if (dataJSON.notes[currentId] === undefined) {
    const error = function newError() {
      return { error: `cannot find note with id ${currentId}` };
    };
    console.error(error());
    res.status(404).json(error());
  } else {
    delete dataJSON.notes[currentId];
    const data = new Uint8Array(Buffer.from(JSON.stringify(dataJSON, null, 2)));
    fs.writeFile('data.json', data, 'utf-8', err => {
      if (err) {
        const error = function newError() {
          return { error: 'An unexpected error occurred.' };
        };
        console.error(error());
        res.status(500).json(error());
      } else {
        res.status(204).send();
      }
    });
  }
});

app.put('/api/notes/:id', (req, res) => {
  const currentId = req.params.id;
  if (currentId < 0) {
    const error = function newError() {
      return { error: 'id must be a positive integer' };
    };
    console.error(error());
    res.status(400).json(error());
  } else if (req.body.content === undefined) {
    const error = function newError() {
      return { error: 'content is a required field' };
    };
    console.error(error());
    res.status(400).json(error());
  } else if (dataJSON.notes[currentId] === undefined) {
    const error = function newError() {
      return { error: `cannot find note with id ${currentId}` };
    };
    console.error(error());
    res.status(400).json(error());
  } else {
    const updatedNote = req.body;
    updatedNote.id = currentId;
    dataJSON.notes[currentId] = updatedNote;
    const data = new Uint8Array(Buffer.from(JSON.stringify(dataJSON, null, 2)));
    fs.writeFile('data.json', data, 'utf-8', err => {
      if (err) {
        const error = function newError() {
          return { error: 'An unexpected error occurred.' };
        };
        console.error(error());
        res.status(500).json(error());
      } else {
        res.status(200).json(updatedNote);
      }
    });
  }
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('Server is listening');
});
