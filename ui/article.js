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
    document.getElementById('dw').innerHTML = loginHtml;
    
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
        request.open('POST', '/login', true);
        request.setRequestHeader('Content-Type', 'application/json');
        request.send(JSON.stringify({username: username, password: password}));  
        submit.value = 'Logging in...';
        
    };
    



}




// The first thing to do is to check if the user is logged in!
loadLogin();


// Now this is something that we could have directly done on the server-side using templating too!
