const fs = require('fs');
const counter = 2;
handleMessages(counter);

function handleMessages(counter) {

  const operation = process.argv[counter];
  if (counter === process.argv.length) {
    return;
  }

  fs.readFile(operation, 'utf-8', (err, data) => {
    if (err) {
      throw err;
    } else {
      console.log(data);
      counter++;
      return handleMessages(counter);
    }
  });
}
