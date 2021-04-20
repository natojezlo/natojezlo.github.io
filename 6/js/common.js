

  
  $('#slideshow').slick({
    dots: true,
    infinite: true,
    arrows: false,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
  });

  $('.hot').slick({
    dots: false,
    infinite: true,
    arrows: true,
    speed: 300,
    adaptiveHeight: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });


  

  $(function() {
    var overlay = $('.overlay');
    var menuLink = $('.hamburger');
    var menu = $('.topmenu');
    var close = $('.close');
  
    menuLink.click(function() {
      menu.toggleClass('active-menu');
    });
    close.click(function() {
      menu.toggleClass('active-menu');
      overlay.hide();
    });
    menuLink.on('click', function () {
      overlay.show();
    });
    overlay.click(function() {
    overlay.hide();
    menu.toggleClass('active-menu');
    });

  });






var $Slider = $('.slider-win').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  infinite: false,
  focusOnSelect: true,
  fade: true,
  cssEase: 'linear',
  });
  $('.slider-item').on('click', function(e) {
  var slideIndex = $(this).data('item');
  $(this).addClass('on').siblings().removeClass('on');
  $Slider.slick( 'slickGoTo', parseInt( slideIndex ) - 1 );
  e.preventDefault();
});