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

app.get('/ui/blogtw.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'blogtw.html'));
});

app.get('/ui/blogthr.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'blogthr.html'));
});





app.get('/ui/blog.html', function(req, res)
{
  res.sendFile(path.join(__dirname, 'ui', 'blog.html'));
});

app.get('/ui/test.js', function(req, res)
{
  res.sendFile(path.join(__dirname, 'ui', 'test.js'));
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


app.get('/ui/img/image.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/img', 'image.jpg'));
});
app.get('/ui/img/fb.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'fb.png'));
});
app.get('/ui/img/t.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 't.png'));
});
app.get('/ui/img/l.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'l.png'));
});


app.get('/ui/img/first.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'first.jpg'));
});


app.get('/ui/img/coff.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'coff.jpg'));
});

app.get('/ui/img/j.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'j.jpg'));
});


app.get('/ui/img/three.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'three.jpg'));
});

app.get('/ui/img/four.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'four.jpg'));
});


app.get('/ui/img/two.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'two.jpg'));
});
app.get('/ui/img/one.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'one.jpg'));
});


app.get('/ui/img/icon.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'icon.jpg'));
});
app.get('/ui/img/icontw.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'icontw.jpg'));
});
app.get('/ui/img/iconth.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'iconth.jpg'));
});


app.get('/ui/img/a.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'a.jpg'));
});
app.get('/ui/img/b.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'b.jpg'));
});
app.get('/ui/img/c.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'c.jpg'));
});
app.get('/ui/img/d.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'd.jpg'));
});
app.get('/ui/img/e.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'e.jpg'));
});
app.get('/ui/img/f.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'f.jpg'));
});

app.get('/ui/img/thrb.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'thrb.jpg'));
});

app.get('/ui/img/thra.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'thra.jpg'));
});

app.get('/ui/img/ico.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'ico.png'));
});

app.get('/ui/img/th.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'th.jpg'));
});
/*login codes*/



var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});