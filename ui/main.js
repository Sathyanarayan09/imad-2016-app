var button = document.getElementById('counter');

button.onclick =function() {
    //creat a request object
    var request= new XMLHttpRequest();
    
    //capture the responce and store it in a variable
    
    request.onreadystatchange = function(){
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