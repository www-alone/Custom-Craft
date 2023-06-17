//Слайдер
$(document).ready(function () {
  var counter = 0;
  var sliderImages = $(".gallery-slider__images");
  var imageCount = sliderImages.children().length;
  $(".prev-arrow").click(function () {
    counter--;
    if (counter < 0) {
      counter = imageCount - 1;
    }
    sliderImages.css(
      "transform",
      "translateX(-" + counter * (window.innerWidth < 768 ? 80 : 25) + "%)"
    );
  });

  $(".next-arrow").click(function () {
    counter++;
    if (counter > imageCount - 1) {
      counter = 0;
    }
    sliderImages.css(
      "transform",
      "translateX(-" + counter * (window.innerWidth < 768 ? 80 : 25) + "%)"
    );
  });
});

//Кнопка возврата
$(".btn-scroll-top").on("click", function () {
  $("html, body").animate({ scrollTop: 0 }, "slow");
});

//выпадающее меню + якорные ссылки
$(document).ready(function () {
  var menuLink = $(".header-navbar__button");
  var dropdownMenu = $(".header-navbar__menu");

  menuLink.click(function () {
    dropdownMenu.css(
      "display",
      dropdownMenu.css("display") === "flex" ? "none" : "flex"
    );
  });

  var navLinks = $(".header-navbar__menu a");
  navLinks.each(function () {
    $(this).click(function (e) {
      e.preventDefault();
      var targetId = $(this).attr("href");
      var targetElement = $(targetId.replace("#", "."));
      var navbarHeight = $(".header-navbar__menu").height();
      var targetPosition = targetElement.offset().top - navbarHeight;

      $("html, body").animate({ scrollTop: targetPosition }, "slow");
    });
  });

  var button = $(".title-block__button");
  var targetElement = $(".order");

  button.click(function (e) {
    e.preventDefault();
    var targetPosition = targetElement.offset().top;

    $("html, body").animate({ scrollTop: targetPosition }, "slow");
  });
});
