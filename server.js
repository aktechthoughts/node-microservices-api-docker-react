'use strict';

const express = require('express');

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  //res.send('Hello World');
    res.sendfile('index.html')
});

app.get('/',function(req,res) {
  res.sendFile('index.html');
});


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);