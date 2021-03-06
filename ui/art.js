
var currentArticleTitle = window.location.pathname.split('/')[2];

function loadCommentForm () {
    var commentFormHtml = `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8">
  <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
  <meta name="viewport" content="width=device-width, initial-scale=1">
   <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
   <meta name="viewport" content="width=device-width, initial-scale=1">
 <script type="text/javascript" src="/ui/main.js"> </script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
  <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <link rel="icon" type="/ui/img/ico.png" href="/ui/img/ico.png"/>
  </head> <head>    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link rel="icon" type="/ui/img/ico.png" href="/ui/img/ico.png"/>
    </head>
    <body> <textarea id="comment_text" rows="5"  class="form-control" rows="5" cols="100" placeholder="Enter your comment here..."></textarea>
        <br/>
        <input type="submit" id="submit" class="btn btn-default" value="Submit" />
        <br/>
        </body></html>
        `;
    document.getElementById('comment_form').innerHTML = commentFormHtml;
    
    // Submit username/password to login
    var submit = document.getElementById('submit');
    submit.onclick = function () {
    
        var request = new XMLHttpRequest();
        
     
        request.onreadystatechange = function () {
          if (request.readyState === XMLHttpRequest.DONE) {
                // Take some action
                if (request.status === 200) {
            
                    document.getElementById('comment_text').value = '';
                    loadComments();    
                } else {
                    alert('Error! Could not submit comment');
                }
                submit.value = 'Submit';
          }
        };
        
       
        var comment = document.getElementById('comment_text').value;
        
              if (comment == '') {
        // Inform the user on the screen through some message or give him a alert message
         alert('Enter some Comment..');
         return false;
       
    }
        
        request.open('POST', '/submit-comment/' + currentArticleTitle, true);
        request.setRequestHeader('Content-Type', 'application/json');
        request.send(JSON.stringify({comment: comment}));  
        submit.value = 'Submitting...';
        
    };
}

function loadLogin () {
  
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                loadCommentForm(this.responseText);
            }
        }
    };
    
    request.open('GET', '/check-login', true);
    request.send(null);
}

function escapeHTML (text)
{
    var $text = document.createTextNode(text);
    var $div = document.createElement('div');
    $div.appendChild($text);
    return $div.innerHTML;
}

function loadComments () {
       
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
            var comments = document.getElementById('comments');
            if (request.status === 200) {
                var content = '';
                var commentsData = JSON.parse(this.responseText);
                for (var i=0; i< commentsData.length; i++) {
                    var time = new Date(commentsData[i].timestamp);
                    content += `<div class="comment">
                        <p>${escapeHTML(commentsData[i].comment)}</p>
                        <div class="commenter">
                            ${commentsData[i].username} - ${time.toLocaleTimeString()} on ${time.toLocaleDateString()} 
                        </div>
                    </div>`;
                }
                comments.innerHTML = content;
            } else {
                comments.innerHTML('Oops! Could not load comments!');
            }
        }
    };
    
    request.open('GET', '/get-comments/' + currentArticleTitle, true);
    request.send(null);
}



loadLogin();
loadComments();
