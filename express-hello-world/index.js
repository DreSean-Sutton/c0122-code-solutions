const express = require('express');
const app = express();

app.use(function (req, res) {
  res.send('I see you :eyes:');
});

app.listen(3000, () => {
});
