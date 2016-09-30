var button = document.getElementById('counter');

button.onclick =function() {
    //creat a request object
    var request= new XMLHttpRequest();
    
    //capture the responce and store it in a variable
    
    request.onreadystatechange = function(){
      if ( request.readyState === XMLHttpRequest.DONE)
      {
          
          if(request.status === 200)
          {
              var counter = request.responseText;
              var span = document.getElementById('count');
              span.innerHTML = counter.toString();
              
          }
      }
        
    };
    //make the request
   request.open('GET','http://sathyanarayan09.imad.hasura-app.io/counter', true);
   request.send(null);

    
};

//submit comments
var nameInput = documeny.getElementById('comment');
var name =  nameInput.value;
var submit = document.getElementById('sub_id');
submit.onclick = function (){
    //make a req to server and get the comments
    //capture the list of names and display it
    
    
    
};
