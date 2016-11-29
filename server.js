
var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;
var crypto = require('crypto');
var bodyParser = require('body-parser');
var session = require('express-session');

var config = {
    user: 'sathyanarayan09',
    database: 'sathyanarayan09',
    host: 'db.imad.hasura-app.io',
    port: '5432',
    password: process.env.DB_PASSWORD
};


var app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(session({
    secret: 'someRandomSecretValue',
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 30}
}));


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

app.get('/ui/postarticals.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'postarticals.html'));
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
  res.sendFile(path.join(__dirname, 'ui/img', 'three.jpg'));
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



function hash (input, salt) {
    // How do we create a hash?
    var hashed = crypto.pbkdf2Sync(input, salt, 10000, 512, 'sha512');
    return ["pbkdf2", "10000", salt, hashed.toString('hex')].join('$');
}


app.get('/hash/:input', function(req, res) {
   var hashedString = hash(req.params.input, 'this-is-some-random-string');
   res.send(hashedString);
});

app.post('/create-user', function (req, res) {
   // username, password
   // {"username": "tanmai", "password": "password"}
   // JSON
   var username = req.body.username;
   var password = req.body.password;
   var salt = crypto.randomBytes(128).toString('hex');
   var dbString = hash(password, salt);
   pool.query('INSERT INTO "user" (username, password) VALUES ($1, $2)', [username, dbString], function (err, result) {
      if (err) {
          res.status(500).send(err.toString());
      } else {
          res.send('User successfully created: ' + username);
      }
   });
});




app.post('/artical-post', function (req, res) {
   // JSON
   // var username = req.body.username;
   // var password = req.body.password;

    var title = req.body.title;
    var content = req.body.content;
  
  

    if (title == '' || content == '' ) {
        // Inform the user on the screen through some message or give him a alert message
        res.redirect('/publish-article');
        return;
    }
    
    //console.log(articledate);
   pool.query('INSERT INTO article(title, content) VALUES ($1, $2)', [title, content], function (err, result) {
      if (err) {
          //res.status(500).send(err.toString());
          res.redirect('/login');
      } else {
          res.send(articletitle +' published successfully.');
      }
    });

   //setTimeout(res.redirect('/login'),5000);
});










app.post('/login', function (req, res) {
   var username = req.body.username;
   var password = req.body.password;
   
   pool.query('SELECT * FROM "user" WHERE username = $1', [username], function (err, result) {
      if (err) {
          res.status(500).send(err.toString());
      } else {
          if (result.rows.length === 0) {
              res.status(403).send('username/password is invalid');
          } else {
              // Match the password
              var dbString = result.rows[0].password;
              var salt = dbString.split('$')[2];
              var hashedPassword = hash(password, salt); // Creating a hash based on the password submitted and the original salt
              if (hashedPassword === dbString) {
                
                // Set the session
                req.session.auth = {userId: result.rows[0].id};
                // set cookie with a session id
                // internally, on the server side, it maps the session id to an object
                // { auth: {userId }}
                
                res.send('credentials correct!');
                
              } else {
                res.status(403).send('username/password is invalid');
              }
          }
      }
   });
});

app.get('/check-login', function (req, res) {
   if (req.session && req.session.auth && req.session.auth.userId) {
       // Load the user object
       pool.query('SELECT * FROM "user" WHERE id = $1', [req.session.auth.userId], function (err, result) {
           if (err) {
              res.status(500).send(err.toString());
           } else {
               
              res.send(result.rows[0].username);    
           }
       });
   } else {
       res.status(400).send('You are not logged in');
   }
});

app.get('/logout', function (req, res) {
   delete req.session.auth;
   res.send('<html><head><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link rel="icon" type="/ui/img/ico.png" href="/ui/img/ico.png"/> </head><body><div class="container" style="margin-top:5%;"><div class="row"><div class="jumbotron" style="box-shadow: 2px 2px 4px #000000;"><h2 class="text-center">Thank you for signing up <span style="color:#F89406;">Stay</span><span style="color:#26A65B;">In</span><span style="color:#19B5FE;">Touch!</span></h2><center><div class="btn-group" style="margin-top:50px;"> <a href="/" class="btn btn-lg btn-primary">Home</a><a href="/ui/login.html" class="btn btn-lg btn-default">Login</a></di></center></div></div></div> <h5 align="center">Sathyanarayan09 | 2016</h5></html>');
});

var pool = new Pool(config);

app.get('/get-articles', function (req, res) {
   // make a select request
   // return a response with the results
   pool.query('SELECT * FROM article ORDER BY date DESC', function (err, result) {
      if (err) {
          res.status(500).send(err.toString());
      } else {
          res.send(JSON.stringify(result.rows));
      }
   });
});



app.get('/ui/:fileName', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', req.params.fileName));
});






var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});