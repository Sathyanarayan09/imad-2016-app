function loadArticles () {
       var acticle = `
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
    document.getElementById('acticle').innerHTML = article;
    
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
                    <a href="/articles/${title[i].title}">${content[i].heading}</a>
                    (${author[i].author.split('T')[0]})</li>`;
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

// Now this is something that we could have directly done on the server-side using templating too!
loadArticles();