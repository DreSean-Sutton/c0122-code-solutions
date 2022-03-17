const fs = require('fs');

const dataJSON = require('./data.json');

const handleNotes = {
  read: handleRead,
  create: handleCreation,
  delete: handleDelete,
  update: handleUpdate,
  writeFile: handleWriteFile
};

if (process.argv[2] === 'read') {
  handleNotes.read();
} else if (process.argv[2] === 'create') {
  handleCreation();
} else if (process.argv[2] === 'delete') {
  handleNotes.delete();
} else if (process.argv[2] === 'update') {
  handleNotes.update();
}

function handleRead() {

  for (let i = 1; i < dataJSON.nextId; i++) {
    console.log(i + ': ' + dataJSON.notes[i.toString()]);
  }
}

function handleCreation() {

  let newNote = '';
  for (let i = 3; i < process.argv.length; i++) {
    newNote += `${process.argv[i]} `;
  }
  newNote = `${newNote.slice(0, newNote.length - 1)}`;
  dataJSON.notes[dataJSON.nextId] = newNote;
  dataJSON.nextId++;
  handleNotes.writeFile();
}

function handleDelete() {

  delete dataJSON.notes[process.argv[3].toString()];
  handleWriteFile();
}

function handleUpdate() {

  if (process.argv[3] >= dataJSON.nextId) {
    console.log('I\'m sorry, cannot update notes that doesn\'t exist');
    return;
  }

  let newNote = '';
  for (let i = 4; i < process.argv.length; i++) {
    newNote += `${process.argv[i]} `;
  }
  newNote = `${newNote.slice(0, newNote.length - 1)}`;
  dataJSON.notes[process.argv[3].toString()] = newNote;
  handleWriteFile();
}

function handleWriteFile() {

  const data = new Uint8Array(Buffer.from(JSON.stringify(dataJSON, null, 2)));
  fs.writeFile('data.json', data, 'utf-8', err => {

    if (err) {
      throw err;
    }
  });
}
