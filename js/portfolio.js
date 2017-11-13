/* Smooth scroll
---------------------------------------------------*/
function smoothScroll() {
  $('a[href*="#"]').on('click', function(event) {
      event.preventDefault();
      $('html,body').animate({
          scrollTop: $(this.hash).offset().top
      }, 400);
  });
}



$( document ).ready(function() {

  smoothScroll();

  /* On Scroll
  ---------------------------------------------------*/
  $(window).scroll(function() {
    var currenPosition = $(this).scrollTop();
    var topButton = $('.top-button');
    var triggerPosition = 280;

    if(currenPosition > triggerPosition) {
      topButton.fadeIn('fast')
    } else {
      topButton.fadeOut('fast');
    }
  });



});
