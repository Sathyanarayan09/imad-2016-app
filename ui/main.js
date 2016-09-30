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


var submit = document.getElementById('bb');
submit.onclick = function (){
    //make a req to server and get the comments
    var request= new XMLHttpRequest();
    
    
    //capture the list of names and display it
        request.onreadystatechange = function(){
      if ( request.readyState === XMLHttpRequest.DONE)
      {
          
          if(request.status === 200)
          {
              
               var names = request.responseText;
               
               names = JSON.parse(names);
               var list= '';
               for(var i=0;i<names.length;i++)
               {
                   list += '<li>' +names[i]+ '</li>';
                   
                   
               }
               
               var ul = doeuments.getElementById('namelist');
               ul.innerHTML = list;
          }
      }
        
    };
    //make the request
    var nameInput = documeny.getElementById('name');
    var name =  nameInput.value;
   request.open('GET','http://sathyanarayan09.imad.hasura-app.io/submit-name?name='+name,true);
   request.send(null);

    
    
};
