// switching the navbar style
function notAtTop(){
  $("nav").addClass('bg-dark');
  $("nav").removeClass('navAtTop');
  $("#header-top").removeClass('headerAtTop');
}
function atTop(){
  $("nav").removeClass('bg-dark');
  $("nav").addClass('navAtTop');
  $("#header-top").addClass('headerAtTop');
}

// Solving the nav-bar collapse problem when window is at the top
function collapseAtTop(){
  $(".navbar-toggler").click(function(event) {
    if ($( window ).width() < 974 && window.scrollY === 0){
      $(".header").toggleClass('shiftUp');
    }
  });
}

// This function is to switchinig the about section layout
function about_windowResize(){
  if ($(window).width() < 990){
    $(".timeline").html(timelineHtml_sm);
    $(".picture img").css('margin-left', '0');
  }else{
    $(".timeline").html(timelineHtml_lg);
    $(".picture img").css('margin-left', '20%');
  }
}
// This function is to change the navbar as scrolling the window
// Identify section by scrollY value
function handleNavbar(y){
  var tab = ["tab-1","tab-2","tab-3","tab-4","tab-5"];
  $(".bgc-yellow").removeClass('bgc-yellow');
  if (y>=780 && y<1233){
    $("."+tab[0]).addClass('bgc-yellow');
  }
  else if (y>=1233 && y<2200) {
    $("."+tab[1]).addClass('bgc-yellow');
  }
  else if (y>=2200 && y<3880) {
    $("."+tab[2]).addClass('bgc-yellow');
  }
  else if (y>=3880 && y<4300) {
    $("."+tab[3]).addClass('bgc-yellow');
  }
  else if(y>=4300){
    $("."+tab[4]).addClass('bgc-yellow');
  }
}
// Implement all the function
function init(){
  about_windowResize();
  $(window).scroll(function(event) {
    if(window.scrollY != 0) {
      notAtTop();
    }
    else{
      atTop();
      collapseAtTop();
    }
    handleNavbar(window.scrollY);
  });
  collapseAtTop();
  $( window ).resize(function() {
    about_windowResize();
  });
}

init();
