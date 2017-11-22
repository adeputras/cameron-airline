(function ($) {
  "use strict";
  $(document).ready(function () {

    // Main Padding
    function mainTop() {
      var headerHeight = $('.section-header').outerHeight();
      $('#main').css({
        paddingTop: headerHeight
      });
    }
    mainTop();

    //Slick Slider Main Slider
    $('.main-slider').slick({
      arrows: false,
      pauseOnHover: false,
      // autoplay: true,
      speed: 1000,
      fade: true,
      cssEase: 'linear',
      responsive: [{
        breakpoint: 768,
        settings: {
          fade: false,
          speed: 300,
          cssEase: 'ease',
        }
      }]
    });

    //Slick Slider Testimonial Slider
    $('.testimonial-slider').slick({
      pauseOnHover: false,
      // autoplay: true,
      speed: 1000,
      fade: true,
      cssEase: 'linear',
      prevArrow: "<button type='button' class='slick-prev arrow-left'><i class='fa fa-angle-left'></i></button>",
      nextArrow: "<button type='button' class='slick-next arrow-right'><i class='fa fa-angle-right'></i></button>",
      responsive: [{
        breakpoint: 768,
        settings: {
          fade: false,
          speed: 300,
          cssEase: 'ease',
        }
      }]
    });

    //Main Slider height
    function sliderHeight() {
      var winHeight = $(window).height();
      var headerHeight = $('.section-header').outerHeight();
      var contactInfo = $('.contact-info').outerHeight();
      var contactMobile = $('.contact-info').outerHeight() / 3;
      var sliderHeight = winHeight - contactInfo - headerHeight;
      var mobileHeight = winHeight - contactMobile - headerHeight;
      if ($(window).width() > 767) {

        $('.main-slider').css({
          height: sliderHeight
        });
      } else {
        $('.main-slider').css({
          height: mobileHeight
        });
      }
    }
    sliderHeight();

    function testiHeight() {
      var winHeight = $(window).height();
      var headerHeight = $('.section-header').outerHeight();
      var contactInfo = $('.contact-info').outerHeight();
      var contactMobile = $('.contact-info').outerHeight() / 3;
      var sliderHeight = winHeight - contactInfo - headerHeight;
      var mobileHeight = winHeight - contactMobile - headerHeight;
      var textHeight = $('.testimonial-text').outerHeight();
      if ($(window).width() > 767) {
        $('.testimonial-slider').css({
          height: sliderHeight
        });
        $('.testimonial-text').removeClass('full');
      } else if (textHeight > sliderHeight) {
        $('.testimonial-slider').css({
          height: "auto",
        });
        $('.testimonial-text').addClass('full');
      } else {
        $('.testimonial-slider').css({
          height: mobileHeight
        });
        $('.testimonial-text').removeClass('full');
      }
    }
    testiHeight();

    //Blog Caption Height
    /*function captionHeight(){
      var maxHeight = 0;
      $('.blog-caption').each(function () {
        // if ($('a',this).outerHeight() > maxHeight) {
        //   maxHeight = $('a', this).outerHeight();
        // }
      });
      // $('.blog-caption a').css({
      //   height: maxHeight,
      // });
      // console.log(maxHeight);
    }
    captionHeight();*/

    //Blog Team Reveal
    function teamReveal() {
      $('.team-list a').each(function () {
        var root = $(this).parents('.team-list');
        $(this).on('click', function (e) {
          e.preventDefault();
          $(this).toggleClass('reveal');
          $('.detail-desc', root).fadeToggle();

        });
      });
    }
    teamReveal();

    //Window Resize
    $(window).resize(function () {
      mainTop();
      sliderHeight();
      testiHeight();
      //captionHeight();
    });

    //Menu Mobile
    if ('ontouchstart' in window) {
      var click = 'touchstart';
    } else {
      var click = 'click';
    }

    $('.burger').on(click, function () {
      if (!$(this).hasClass('open')) {
        openMenu();
      } else {
        closeMenu();
      }

    });

    function openMenu() {

      $('.menu-bg').addClass('animate');
      $('.burger').addClass('open');
      $('.x, .z').addClass('collapse-icon');
      $('.main-menu').addClass('animate');
      $('body').css({
        'overflow': 'hidden',
        'height': '100vh'
      });

      setTimeout(function () {
        $('.y').hide();
        $('.x').addClass('rotate30');
        $('.z').addClass('rotate150');
      }, 70);
      setTimeout(function () {
        $('.x').addClass('rotate45');
        $('.z').addClass('rotate135');
      }, 120);
    }

    function closeMenu() {

      $('.main-menu').removeClass('animate');
      $('body').css({
        'overflow': '',
        'height': 'auto'
      });

      setTimeout(function () {
        $('.burger').removeClass('open');
        $('.x').removeClass('rotate45').addClass('rotate30');
        $('.z').removeClass('rotate135').addClass('rotate150');
        $('.menu-bg').removeClass('animate');

        setTimeout(function () {
          $('.x').removeClass('rotate30');
          $('.z').removeClass('rotate150');
        }, 50);
        setTimeout(function () {
          $('.y').show();
          $('.x, .z').removeClass('collapse-icon');
        }, 70);
      }, 100);

    }

    if ($('.home').length > 0) {
      //Polyfill to support video popup in internet explore
      if (typeof Object.assign != 'function') {
        Object.assign = function (target) {
          'use strict';
          if (target == null) {
            throw new TypeError('Cannot convert undefined or null to object');
          }

          target = Object(target);
          for (var index = 1; index < arguments.length; index++) {
            var source = arguments[index];
            if (source != null) {
              for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                  target[key] = source[key];
                }
              }
            }
          }
          return target;
        };
      }

      //Profile Video
      $("#video-profile").videoPopup({
        autoplay: 1,
        controlsColor: 'white',
        showVideoInformations: 0,
        width: '100%',
      });

    }

    if ($('.home,.team,.community').length > 0) {
      //Section Parallax Image
      function parallax() {
        var offset = $('.section-parallax').offset();
        var imgPlx = $('.parallax-image').height() / 2 * 3;
        var scrollPosition = $(window).scrollTop() - offset.top + imgPlx;

        $('.parallax-image').css('top', (0 - (scrollPosition * .22)) + 'px')
      }
      $(window).bind('scroll', function (e) {
        parallax();
      });
    }


    //Slick Slider Community Slider
    $('.community-slider').slick({
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      prevArrow: "<button type='button' class='slick-prev arrow-left'><i class='fa fa-angle-left'></i></button>",
      nextArrow: "<button type='button' class='slick-next arrow-right'><i class='fa fa-angle-right'></i></button>",
      pauseOnHover: false,
      autoplay: true,
      responsive: [{
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 481,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    });


  });

})(jQuery);