const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const publicPath = path.join(__dirname, 'public');
const staticMiddleware = express.static(publicPath);

app.use(staticMiddleware);

app.listen(port, () => console.log(`listening on port ${port}`));
