const express = require('express');
const app = express();

app.use(express.static('link'))

app.get('/', (req, res) => {
  res.render('index.ejs');
});

app.get('/top', (req, res) => {
  res.render('top.ejs');
});

app.get('/test', (req, res) => {
  res.render('test.ejs');
});

app.listen(3000);
