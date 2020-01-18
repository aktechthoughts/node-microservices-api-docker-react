var express = require('express');
var path = require('path');

var app = express();
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.get('/',function(req,res){
    res.render('index');
});


app.listen(3000,function(){
    console.log('listening on port:'+3000)
});


/* const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
}); */