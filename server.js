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
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});



app.get('/artical-two', function(req, res)
{
  res.sendFile(path.join(__dirname, 'ui', 'artical-two.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/j.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'j.jpg'));
});

var sub_com=[];
app.get('/comments/:sub_com', function(req, res)
{ //get the name from request
  var sub_com = req.params.sub_com;
  
  sub_com.push(sub_com);
  //JSON
  
  req.send(JSON.stringify(sub_com));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});