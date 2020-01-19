'use strict';

const express = require('express');

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
<<<<<<< HEAD:src/server.js
  //res.send('Hello World');
    res.sendfile('index.html')
});

app.get('/',function(req,res) {
  res.sendFile('index.html');
=======
  res.send('Hello World');
>>>>>>> parent of d155257a... Update:server.js
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);