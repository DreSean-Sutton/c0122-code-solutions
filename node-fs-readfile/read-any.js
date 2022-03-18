const fs = require('fs');
const operation = process.argv[2];
fs.readFile(operation, 'utf-8', (err, data) => {
  if (err) {
    throw err;
  } else {
    console.log(data);
  }
});
