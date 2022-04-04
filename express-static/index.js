const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const curiousValue = path.join(__dirname, 'public');
const publicRoot = express.static(curiousValue);

app.use('/', publicRoot);

app.listen(port, () => console.log(`listening on port ${port}`));
