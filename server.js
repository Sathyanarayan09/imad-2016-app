var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var Pool = require('pg').Pool;





app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/login.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'login.html'));
});






app.get('/ui/blog.html', function(req, res)
{
  res.sendFile(path.join(__dirname, 'ui', 'blog.html'));
});



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/blog.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'blog.css'));
});


app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});


app.get('/ui/image.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'image.jpg'));
});
app.get('/ui/fb.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'fb.png'));
});
app.get('/ui/t.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 't.png'));
});
app.get('/ui/l.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'l.png'));
});


app.get('/ui/first.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'first.jpg'));
});


app.get('/ui/coff.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'coff.jpg'));
});

app.get('/ui/j.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'j.jpg'));
});


app.get('/ui/three.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'three.jpg'));
});

app.get('/ui/four.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'three.jpg'));
});


app.get('/ui/two.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'two.jpg'));
});
app.get('/ui/one.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'one.jpg'));
});
app.get('/ui/th.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'th.jpg'));
});
app.get('/ui/icon.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'icon.jpg'));
});
app.get('/ui/icon2.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'icon2.jpg'));
});
app.get('/ui/icon3.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'icon3.jpg'));
});




/*login codes*/



var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});