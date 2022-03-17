const fs = require('fs');
let newNote = '';
for (let i = 2; i < process.argv.length; i++) {
  newNote += `${process.argv[i]} `;
}
newNote = `${newNote.slice(0, newNote.length - 1)}\n`;
const data = new Uint8Array(Buffer.from(newNote));

fs.writeFile('note.txt', data, 'utf-8', err => {

  if (err) {
    throw err;
  }
});
