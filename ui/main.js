var button= document.getElementById("counter");


button.onClick = function(){
    
    c=c+1;
    var span= document.getElementById("count");
  span.setInnerHTML = c.toString();
    
};