const fs = require('fs');
const path = require('path');
const express = require('express');

const app = express();
const publicPath = path.join(__dirname, 'public');

function createStaticMiddleware(directoryPath) {
  // what does this function do?
  return (req, res, next) => {
    const filePath = req.url; // e.g. /styles.css
    const absoluteFilePath = path.join(directoryPath, filePath);
    fs.readFile(absoluteFilePath, 'utf8', (err, fileContent) => {
      if (err) {
        next(err);
      } else {
        res.send(fileContent);
      }
    });
    // find out what is being requested
    // try to read that file that's being requested
    // respond to the client with the file contents
  };
}
// const staticMiddleware = express.static(publicPath);
const staticMiddleware = createStaticMiddleware(publicPath);

app.use(staticMiddleware);

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000');
});
