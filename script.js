$(function(){
    $(".sidebar-collapse").sideNav();
    $(".sidebar-collapse").on('click', function(){
      $(this).toggleClass('active');
    });
  });
  
  
  // Show sideNav
  $('.button-collapse').sideNav({
      menuWidth: 300,
      edge: 'right', 
      closeOnClick: true,
      draggable: true, 
  
    }
  );
  
  
  
  // slider
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.slider');
    var instances = M.Slider.init(elems, options);
  });
  
  // Or with jQuery
  
  $(document).ready(function(){
    $('.slider').slider({
      height:700 ,
      duration: 300,
      indicators: false
    });
  });

  //parallax
  $(document).ready(function(){
    $('.parallax').parallax();
  });
  

  