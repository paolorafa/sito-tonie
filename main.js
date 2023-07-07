window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrolled > 0) {
      navbar.classList.add('navbar-default-collapse');
    } else {
      navbar.classList.remove('navbar-default-collapse');
    }
  });

  
  