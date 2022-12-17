$(function() {
  $(window).scroll(function() {
    if ($(window).scrollTop() >= 50) {
      $('.header__inner').addClass('sticky')
    } else {
      $('.header__inner').removeClass('sticky')
    }
  });

  let headerHeight = $('.header__inner').outerHeight();

  $('.menu__link').on('click', function(event) {

    event.preventDefault();

    let id = $(this).attr('href'),

      top = $(id).offset().top - headerHeight;

    $('body,html').animate({
      scrollTop: top
    }, 1000);
  });



  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000
  });

  $(".star").rateYo({
    
    starWidth: "17px",
    normalFill: "#ccccce",
    ratedFill: "#ffc35b",
    readOnly: true
  });
});