var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var counter=0;
app.get('/counter', function(req, res){
    
  counter=counter+1;  
  res.send(counter.toString());
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});




app.get('/artical-one', function(req, res)
{
   res.sendFile(path.join(__dirname, 'ui', 'artical-one.html'));
});



app.get('/artical-two', function(req, res)
{
  res.sendFile(path.join(__dirname, 'ui', 'artical-two.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/image.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'image.jpg'));
});

app.get('/ui/j.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'j.jpg'));
});


