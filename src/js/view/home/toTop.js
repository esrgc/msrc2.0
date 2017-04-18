/*to top button appeasrs after scroll down*/
$(window).scroll(function() {
  if ($(this).scrollTop() > 250) {
    $('#to-top').stop(true, true).fadeIn();
  } else {
    $('#to-top').stop(true, true).fadeOut();
  }
});
