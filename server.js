var express = require('express');
var morgan = require('morgan');
var path = require('path');
var crypto = require('crypto');
var app = express();
var bodyParser = require('body-parser');
var Pool = require('pg').Pool;
var config = {
    user: 'sathyanarayan09',
    database: 'sathyanarayan09',
    host: 'db.imad.hasura-app.io',
    port: '5432',
  
  password: process.env.DB_PASSWORD
 
  
};




app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(morgan('combined'));


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/login.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'login.html'));
});


var pool = new Pool(config);
app.get('/test-db', function (req, res) {

 pool.query('SELECT * FROM articals', function(err, result) {
     
     
     
     if(err)
     {
         
         res.status(500).send(err.toString());
     }
     
     else
     {
         
         res.send(JSON.stringify(result.rows));
     }
}); 

});

app.get('/articals/:articalname', function(req, res)
{
 
 
 
pool.query("SELECT * FROM articals where title = '"+ req.params.articalname+"'",function(err, result) {
      
     
     
     
     if(err)
     {
         
         res.status(500).send(err.toString());
     }
     
     else
     {
         
        if(result.rows.length===0)
        {
            res.status(404).send('Artical not found');
            
        }
        else{
            
            var articalDate = result.rows[0];
            res.send(createTemplate(articalDate));
        }
     }
}); 
 
 
 
 
 
});





app.get('/ui/blog.html', function(req, res)
{
  res.sendFile(path.join(__dirname, 'ui', 'blog.html'));
});



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
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
app.get('/ui/four.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'four.jpg'));
});
app.get('/ui/three.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'three.jpg'));
});

app.get('/ui/bg.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'bg.jpg'));
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


function hash(input, salt){
    var hashed = crypto.pbkdf2Sync(input, 'salt', 100000, 512, 'sha512');
    return ["pbkdf2","100000",salt,hashed.toString('hex')].join('$');
}


app.get('/hash/:input', function (req, res) {

var hashedString = hash(req.params.input, 'thisisrandomstring');
res.send(hashedString);

});





app.post('/create-user', function (req, res) {
    
    var username = req.body.username;
    var password = req.body.password;
    var salt = crypto.randomBytes(128).toString('hex');
    var dbString = hash(password, salt);
    pool.query('INSERT INTO "users" (username,password) VALUES ($1,$2)',[username , dbString], function(err, result)
{
    if(err)
    {
        res.status(500).send(err.toString());
        
    }
    else{
        
        res.send('User Successfully created:' + username);
    }
    
    
});
});   




var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});