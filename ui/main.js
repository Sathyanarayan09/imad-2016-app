

var button = document.getElementById('counter');
var counter = 0;

button.onclick =function() {
    //creat a request object
    var request= new XMLHTTPRequest();
    
    //capture the responce and store it in a variable
    
    reques.onreadystatchange = function(){
      if ( request.readyState === XMLHTTPRequest.Done)
      {
          
          if(request.State === 200)
          {
              var counter = request.responseText;
              var span = document.getElementById('count');
              span.innerHTML = counter.toString();
              
          }
      }
        
    };
    
    counter = counter + 1;
    var span= document.getElementById('count');
  span.innerHTML = counter.toString();
    

    
};