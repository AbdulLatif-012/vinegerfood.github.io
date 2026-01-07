
var b = document.getElementById("top-bar")

b.innerHTML = `
 
  <div class="container-fluid top-bar fixed-top">
    <div class="row text-center text-md-start align-items-center">

      <div class="col-6 col-md-6 mb-2 mb-md-3 text-light">
        <h5 >Star Gate Cross Rd Near The Metro</h5>
        <h6 class="ps-2">+92 3098765432 | info@vr.com</h6>
        <h6 class="text-bar ps-3">Tue - Fri: 5PM - 5AM</h6>
      </div>

     
      <div class="col-6 col-md-6 d-flex flex-column flex-md-row align-items-center justify-content-md-end ld">
        <h3 class="me-md-0 mb-md-0">The Vinegar Food</h3>
        <img src="IMAGES/logo.png" alt="Logo" />
      </div>

    </div>
  </div>

`;


var a = document.getElementById("navbar")

a.innerHTML = `
    
    <nav class="navbar navbar-expand-lg navbar-light fixed-top">
<div class="container-fluid">
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav m-auto mb-2 mb-lg-0">
      <li class="nav-item">
        <a class="nav-link text-light" aria-current="page" href="Index.html">Home</a>
      </li>
      <li class="nav-item ">
        <a class="nav-link text-light" href="Gallery.html">Gallery</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle text-light" href="Menu.html" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Awards
        </a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
        <ol>
          <li><a class="dropdown-item" href="Best Award.html">Best Of The Year 2018</a></li>
          <li><a class="dropdown-item" href="Best chef.html">Best Chef Award 2020</a></li>
          <li><a class="dropdown-item" href="best service.html">Best Service Award (2023)</a></li>
          <li><a class="dropdown-item" href="best choice.html">Consumer's Choice Award 2025</a></li>
      </ol>
          <li><hr class="dropdown-divider"></li>
          <li><a class="dropdown-item" href="Awards.html">See All Awards </a></li>
      </li>
    </ul> </li>   <li class="nav-item">
        <a class="nav-link text-light" href="Catering.html">Catering</a>
      </li>   <li class="nav-item">
        <a class="nav-link text-light" href="RecipeOfTheMonth.html">Recipe of the month</a>
      </li>   <li class="nav-item">
        <a class="nav-link text-light" href="About.html">About us </a>
      </li>   <li class="nav-item">
        <a class="nav-link text-light" href="Contact.html">Contact us</a>
      </li>   <li class="nav-item">
        <a class="nav-link text-light" href="Feedback.html">Feedback</a>
          </li>  
           <li class="nav-item">
        <a class="nav-link text-light" href="Order.html">Book Table</a>
         <li class="nav-item">
        <a class="nav-link text-light" href="Menu.html">Menu</a>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle text-light" href="Menu.html" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Meals
        </a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
        <ol>
          <li><a class="dropdown-item" href="Menu.html#Regular">Regular</a></li>
          <li><a class="dropdown-item" href="Menu.html#Lunch">Lunch</a></li>
          <li><a class="dropdown-item" href="Menu.html#Snacks">Snacks</a></li>
          <li><a class="dropdown-item" href="Menu.html#Deserts">Deserts</a></li>
          <li><a class="dropdown-item" href="Menu.html#Beverages">Beverages</a></li>
      </ol>
          <li><hr class="dropdown-divider"></li>
          <li><a class="dropdown-item" href="Menu.html">See Menu </a></li>
      </li>
    </ul>
     <li class="nav-item">
        <a class="nav-link text-light" href="Sitemap.html">Site Map</a> 
  </div>
</div>
</nav>
`;


var c = document.getElementById("footer")

c.innerHTML = `
  <div class="container-fluid last-sec py-5">
    <div class="row text-center text-md-start mt-3">  

    
        <div class="col-12 col-sm-6 col-lg-3 mt-4">
        <h2>The Vinegar Food</h2>


        <img src="IMAGES/logo.png" alt="" class="img-fluid mt-4 ms-4" style="max-width:120px;">
            
        </div>

  
        <div class="col-12 col-sm-6 col-lg-3 mb-4">
            <h4>Links</h4>
            <hr>
            <p><a href="Index.html">Home</a></p>
            <p><a href="About.html">About us</a></p>
            <p><a href="Contact.html">Contact us</a></p>
            <p><a href="Feedback.html">Feedback</a></p>
            <p><a href="Order.html">Book Now</a></p>
            <p><a href="Menu.html">Menu</a></p>
        </div>

       
        <div class="col-12 col-sm-6 col-lg-3 mb-4">
            <h4>Timing</h4>
            <hr>
            <p>Tuesday: <span>5PM - 5AM</span></p>
            <p>Wednesday: <span>5PM  - 5AM</span></p>
            <p>Friday: <span>5PM - 5AM</span></p>
            <p>Saturday: <span>11AM  - 5AM</span></p>
            <p>Sunday: <span>11AM  - 5AM</span></p>
            <p>Monday: <span>Closed</span></p>
        </div>

        <div class="col-12 col-sm-6 col-lg-3 mb-4">
            <h4>Contacts</h4>
            <hr>
            <p>Star Gate Cross Rd Near The Metro</p>
            <p>+92 309 12345678</p>
            <p>info@vr.com</p>
            
  <div id="socail">
          
<a href="https://www.facebook.com/">
<i class="fa-brands fa-facebook icon"></i>
</a>

<a href="https://www.instagram.com/">
<i class="fa-brands fa-square-instagram icon"></i>
</a>

<a href="https://pk.linkedin.com/">
<i class="fa-brands fa-square-linkedin icon"></i>
</a>

<a href="https://x.com/">
<i class="fa-brands fa-square-x-twitter icon"></i>
</a>
</div>
        </div>
    </div>

    <hr>

   
    <div class="row">
        <div class="col text-center">
            <h6>© 2025 Vinegar Restaurant. All Rights Reserved.</h6>
        </div>
    </div>
</div>


`;

