$(document).ready(function() {
  "use strict";

  // add background class for fixed navbar
  var nav = $("header");
  var rocket = $(".rocket-img");
  $(window).scroll(function() {
    if ($(this).scrollTop() > 90) {
      nav.addClass("background-nav");
      rocket.addClass("goto-top");
    } else {
      nav.removeClass("background-nav");
      rocket.removeClass("goto-top");
    }
  });

  //////////////////////////////////////////////////////
  console.log($("#mobile-nav, #mobile-nav-toggle").length);
  $(document).on("click", "#mobile-nav-toggle", function(e) {
    $("body").toggleClass("mobile-nav-active");
    $("#mobile-nav-toggle i").toggleClass("lnr-cross lnr-menu");
    $("#mobile-body-overly").toggle();
  });

  $(document).on("click", ".has-dropdown i", function(e) {
    $(this).toggleClass("lnr-chevron-up lnr-chevron-down");
    $(this)
      .next()
      .toggleClass("menu-item-active");
    $(this)
      .nextAll("ul")
      .slideToggle();
  });

  // Wow Js
  new WOW().init();

  // if (document.getElementById("default-select")) {
  //   $("select").niceSelect();
  // }

  // $(".img-pop-up").magnificPopup({
  //   type: "image",
  //   gallery: {
  //     enabled: true
  //   }
  // });

  // $(".play-btn").magnificPopup({
  //   type: "iframe",
  //   mainClass: "mfp-fade",
  //   removalDelay: 160,
  //   preloader: false,
  //   fixedContentPos: false
  // });

  // Owl Carousel
  if ($(".testi-slider").length) {
    $(".testi-slider").owlCarousel({
      loop: true,
      margin: 30,
      items: 1,
      nav: false,
      autoplay: 2500,
      smartSpeed: 1500,
      dots: true,
      responsiveClass: true,
      thumbs: true,
      thumbsPrerendered: true,
      navText: [
        "<i class='lnr lnr-arrow-left'></i>",
        "<i class='lnr lnr-arrow-right'></i>"
      ]
    });
  }
});
