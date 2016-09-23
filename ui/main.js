


var counter = 0;



window.onload = function () {
    document.getElementById('counter').onclick=counter;
      counter = counter + 1;
    var span= document.getElementById('count');
  span.innerHTML = counter.toString();
    
};