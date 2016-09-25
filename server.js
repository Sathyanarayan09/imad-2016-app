<!DOCTYPE html>
<html lang="en">
<head>
 <link href="/ui/style.css" rel="stylesheet" />

  <title>Sathyanarayan </title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
   <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
  <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  
<body id="myPage" data-spy="scroll" data-target=".navbar" data-offset="60">

<nav class="navbar navbar-default navbar-fixed-top">
  <div class="container">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#about">ABOUT</a></li>
        <li><a href="#hobbies">HOBBIES</a></li>
    <li><a href="#contact">CONTACT</a></li>
      </ul>
    </div>
  </div>
</nav>



<!-- Container (About Section) -->
<div id="about" class="container-fluid">
  <div class="row">
    <div class="col-sm-8">
      <h2>About Me</h2><br>
  
    <p>Hey Folks! This is Sathyanarayan and I'm pursuing Computer Science & Engineering at GKMCET. I transform myself to a Picasso when it comes to my art, Passion for computer stuffs is sky high.. Cheers !!    </p>
      <br>
    </div>
<div>
     <img src="ui/j.jpg" class="responsive" align="right"></div>


  
  </div>
</div>



<!-- Container (Services Section) -->
<div id="hobbies" class="container-fluid text-center">
  <h2>Hobbies</h2>

  <br>
  <div class="row slideanim">
    <div class="col-sm-4">
      <span class="glyphicon glyphicon-headphones logo-small"></span>
      <h4>MUSIC</h4>
      <p>Plugged forever</p>
    </div>
    <div class="col-sm-4">
      <span class="glyphicon glyphicon-heart logo-small"></span>
      <h4>LOVE</h4>
      <p>Photoshop Editing </p>
    </div>
    <div class="col-sm-4">
      <span class="glyphicon glyphicon-asterisk logo-small"></span>
      <h4>PASSION</h4>
      <p>Programming </p>
    </div>
  </div>

</div>





<!-- Container (Contact Section) -->
<div id="contact" class="container-fluid bg-grey">
  <h2 class="text-center">CONTACT</h2>
  <div class="row">
    <div class="col-sm-5">

      <p><span class="glyphicon glyphicon-map-marker"></span> Chennai, TamilNadu</p>

      <p><span class="glyphicon glyphicon-envelope"></span> sathyanarayan065@gmail.com</p>
    </div>

  </div>
  
  
 
  <textarea class="form-control" rows="5" id="comt" placeholder="Comment" required></textarea>
  <br>
  <input type="submit" id="sub" value="submit" class="btn btn-primary"/> 

</div>



    <script type="text/javascript" src="/ui/main.js"> </script>

<script>
$(document).ready(function(){
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
  
  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide");
        }
    });
  });
})
</script>

</body>
</html>

