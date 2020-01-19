'use strict';

const express = require('express');

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';


app.get('/',function(req,res) {
  //res.send('Hello World');
  res.sendFile('index.html');
});


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);