

var button = document.getElementById('counter');
var counter = 0;

button.onClick =function() {
    
    ccounter = counter + 1;
    var span= document.getElementById('co');
  span.innerHTML = counter.toString();
    

    
};