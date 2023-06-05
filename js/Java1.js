//Слайдер
$(document).ready(function() {
  var counter = 0;
  var sliderImages = $('.slider-images');
  var imageCount = sliderImages.children().length;

  $('.prev-arrow').click(function() {
      counter--;
      if (counter < 0) {
          counter = imageCount - 1;
      }
      sliderImages.css('transform', 'translateX(-' + counter * 25 + '%)');
  });

  $('.next-arrow').click(function() {
      counter++;
      if (counter > imageCount - 1) {
          counter = 0;
      }
      sliderImages.css('transform', 'translateX(-' + counter * 25 + '%)');
  });
});

//Кнопка возврата
$('.btn-scroll-top').on('click', function() {
  $('html, body').animate({ scrollTop: 0 }, 'slow');
  });

//выпадающее меню + якорные ссылки
$(document).ready(function() {
  var menuLink = $('.nav__menu');
  var dropdownMenu = $('.dropdown-menu');

  menuLink.click(function() {
      dropdownMenu.css('display', dropdownMenu.css('display') === 'block' ? 'none' : 'block');
  });

  var navLinks = $('.dropdown-menu a');

  navLinks.each(function() {
      $(this).click(function(e) {
          e.preventDefault();
          var targetId = $(this).attr('href');
          var targetElement = $(targetId);
          var navbarHeight = $('.navbar').height();
          var targetPosition = targetElement.offset().top - navbarHeight;

          $('html, body').animate({scrollTop: targetPosition}, 'slow');
      });
  });

  var button = $('.el4__button');
  var targetElement = $('#send__hr');

  button.click(function(e) {
      e.preventDefault();
      var targetPosition = targetElement.offset().top;

      $('html, body').animate({scrollTop: targetPosition}, 'slow');
  });
});