const fs = require('fs');
console.log('fs result: ', fs);

fs.readFile('./dijkstra.txt', 'utf-8', (err, data) => {
  if (err) {
    throw err;
  } else {
    console.log(data);
  }
});
