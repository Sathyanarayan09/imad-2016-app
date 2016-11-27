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
  res.sendFile(path.join(__dirname, 'ui/img', 'fb.png'));
});
app.get('/ui/img/t.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/img', 't.png'));
});
app.get('/ui/img/l.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/img', 'l.png'));
});


app.get('/ui/img/first.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/img', 'first.jpg'));
});


app.get('/ui/img/coff.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/img', 'coff.jpg'));
});

app.get('/ui/img/j.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/img', 'j.jpg'));
});


app.get('/ui/img/three.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'three.jpg'));
});

app.get('/ui/img/four.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/img', 'four.jpg'));
});


app.get('/ui/img/two.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/img', 'two.jpg'));
});
app.get('/ui/img/one.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/img', 'one.jpg'));
});


app.get('/ui/img/icon.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/img', 'icon.jpg'));
});
app.get('/ui/img/icontw.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/img', 'icontw.jpg'));
});
app.get('/ui/img/iconth.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/img', 'iconth.jpg'));
});


app.get('/ui/img/a.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/img', 'a.jpg'));
});
app.get('/ui/img/b.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/img', 'b.jpg'));
});
app.get('/ui/img/c.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/img', 'c.jpg'));
});
app.get('/ui/img/d.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/img', 'd.jpg'));
});
app.get('/ui/img/e.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/img', 'e.jpg'));
});
app.get('/ui/img/f.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/img', 'f.jpg'));
});

app.get('/ui/img/thrb.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/img', 'thrb.jpg'));
});

app.get('/ui/img/thra.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/img', 'thra.jpg'));
});

app.get('/ui/img/ico.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/img', 'ico.png'));
});

app.get('/ui/img/th.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/img', 'th.jpg'));
});
/*login codes*/



var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});