const express = require('express');
const path = require('path');

const app = express();

// MIDDLEWARES
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public/index.html'))
});

const port = 3000;
app.listen(port, (req, res) => {
  console.log(`Server listening on port ${port}`);
});
