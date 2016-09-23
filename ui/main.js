var button= document.getElementById('counter');
var c=0;

button.onClick = function(){
    
    c=c+1;
    var span= document.getElementById('count');
  span.innerHTML = c.toString();
    
};