function loadLoginForm () {
    var loginHtml = `
      <h3>Login/Register Here for Posting Comments on the Articles!</h3>
        <div class="row control-group">
            <div class="form-group col-xs-12 floating-label-form-group controls">
              <label>Username</label>
                <input type="text" class="form-control" id="username" placeholder="Enter Your Username" required>
            </div>
        </div>
        <div class="row control-group">
            <div class="form-group col-xs-12 floating-label-form-group controls">
              <label>Password</label>
                <input type="password" class="form-control" id="password" placeholder="Password" required>
            </div>
        </div>
        <br/>
        <input type="submit" class="btn btn-default" id="login_btn" value="Login" />
        <input type="submit" class="btn btn-default" id="register_btn" value="Register" />
        `;
    document.getElementById('login_area').innerHTML = loginHtml;
    
    // Submit username/password to login
    var submit = document.getElementById('login_btn');
    submit.onclick = function () {
        // Create a request object
        var request = new XMLHttpRequest();
        
        // Capture the response and store it in a variable
        request.onreadystatechange = function () {
          if (request.readyState === XMLHttpRequest.DONE) {
              // Take some action
              if (request.status === 200) {
                  submit.value = 'Sucess!';
              } else if (request.status === 403) {
                  submit.value = 'Invalid credentials. Try again?';
              } else if (request.status === 500) {
                  alert('Something went wrong on the server');
                  submit.value = 'Login';
              } else {
                  alert('Something went wrong on the server');
                  submit.value = 'Login';
              }
              loadLogin();
          }  
          // Not done yet
        };
        
        // Make the request
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        console.log(username);
        console.log(password);
        
             if (username == '' || password == '') {
        // Inform the user on the screen through some message or give him a alert message
         alert('Why is that field empty?!');
         return false;
       
    }
        request.open('POST', '/login', true);
        request.setRequestHeader('Content-Type', 'application/json');
        request.send(JSON.stringify({username: username, password: password}));  
        submit.value = 'Logging in...';
        
    };
    
    var register = document.getElementById('register_btn');
    register.onclick = function () {
        // Create a request object
        var request = new XMLHttpRequest();
        
        // Capture the response and store it in a variable
        request.onreadystatechange = function () {
          if (request.readyState === XMLHttpRequest.DONE) {
              // Take some action
              if (request.status === 200) {
                  alert('User created successfully');
                  register.value = 'Registered!';
              } else {
                  alert('Could not register the user');
                  register.value = 'Register';
              }
          }
        };
        
        
        
        
        // Make the request
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        console.log(username);
        console.log(password);
        
           if (username == '' || password == '') {
        // Inform the user on the screen through some message or give him a alert message
         alert('Why is that field empty?!');
         return false;
       
    }
        
        request.open('POST', '/create-user', true);
        request.setRequestHeader('Content-Type', 'application/json');
        request.send(JSON.stringify({username: username, password: password}));  
        register.value = 'Registering...';
    
    };
}

function loadLoggedInUser (username) {
    var loginArea = document.getElementById('login_area');
    loginArea.innerHTML = `
        <h3> Hi <i>${username}</i></h3>
        <a href="/logout">Logout</a>
                <h1 align="center"> Publish Your Artical</h1>
        
       <div class="row control-group">
            <div class="form-group col-xs-12 floating-label-form-group controls">
              <label>Title</label>
                <input type="text" class="form-control" id="title" placeholder="Type.." required>
            </div>
        </div>
         <div class="row control-group">
            <div class="form-group col-xs-12 floating-label-form-group controls">
              <label>heading</label>
                <input type="text" class="form-control" id="heading" placeholder="Type.." required>
            </div>
        </div>
        <div class="row control-group">
            <div class="form-group col-xs-12 floating-label-form-group controls">
              <label>Content</label>
                <textarea class="form-control" rows="5" placeholder="Type.." id="content"></textarea>
            </div>
        </div>
        
        <input type="submit" class="btn btn-default" id="sum" value="Submit" />
        <a href="article.html" class="btn btn-info" role="button">View Articles</a>
    `;
    
       var art = document.getElementById('sum');
    art.onclick = function () {
        // Create a request object
        var request = new XMLHttpRequest();
        
        var date = new Date();

        // Capture the response and store it in a variable
        request.onreadystatechange = function () {
          if (request.readyState === XMLHttpRequest.DONE) {
              // Take some action
              if (request.status === 200) {
                  alert('Article successfully posted');
                  art.value = 'Posted succesful!';
                  this.setHeader('Location', '/');
              } else {
                  alert('Could not able to post! try again');
                  
              }
          }
        };
        
        // Make the request
        var title = document.getElementById('title').value;
        var content = document.getElementById('content').value;
  
          var  heading = document.getElementById('heading').value;
           var date = new Date();
    
       console.log(title);
        console.log(content);
          console.log(heading);
           
          if (title == '' || content == '' ||  heading == '') {
        // Inform the user on the screen through some message or give him a alert message
         alert('Why is that field empty?!');
       return false;
    }
       
        request.open('POST', '/article-post', true);
        request.setRequestHeader('Content-Type', 'application/json');
        request.send(JSON.stringify({title: title, content: content, heading: heading, date: date}));  
        register.value = 'Posting...';
    
    };
}

function loadLogin () {
    // Check if the user is already logged in
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                loadLoggedInUser(this.responseText);
            } else {
                loadLoginForm();
            }
        }
    };
    
    request.open('GET', '/check-login', true);
    request.send(null);
}

function loadArticles () {
        // Check if the user is already logged in
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
            var articles = document.getElementById('articles');
            if (request.status === 200) {
                var content = '<ul>';
                var articleData = JSON.parse(this.responseText);
                for (var i=0; i< articleData.length; i++) {
                    content += `<li>
                    <a href="/articles/${articleData[i].title}">${articleData[i].heading}</a>
                    (${articleData[i].date.split('T')[0]})</li>`;
                }
                content += "</ul>";
                articles.innerHTML = content;
            } else {
                articles.innerHTML('Oops! Could not load all articles!');
            }
        }
    };
    
    request.open('GET', '/get-articles', true);
    request.send(null);
}


// The first thing to do is to check if the user is logged in!
loadLogin();

// Now this is something that we could have directly done on the server-side using templating too!
loadArticles();