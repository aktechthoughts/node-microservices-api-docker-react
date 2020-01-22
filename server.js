'use strict';

const express = require('express');
const path = require('path');
// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/sendFile', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/Frame.html'));
});


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);