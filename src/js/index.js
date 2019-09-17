
// <<<<<<<<<<<<<< SETS after load the document

const $tourLink = $('.tours-menu-link').eq(0);
$(document).ready(() => {
  // set active state to header-bottom slide dots
  $('.slick-dots button').eq(0).addClass('active');
  // set active state to tour-menu link
  $tourLink.addClass('picked');
  //hide drop menu of FOOTER-TOP
  $('.footer-top-form-dropdown-menu').addClass('scaledown');
});


// <<<<<<<<<<<<<<< HEADER_BOTTOM SLICK SLIDE >>>>>>>>>>>>>>>

const $slickDotsContainer = $('.slick-dots');
const $slickDotsButton = $('.slick-dots button');
// const $slickButton = $('.slick-dots button');
const $containerSliders = $('.slider-holder');

// acitvate slick slide
$containerSliders.slick({
  dots: true,
  arrows: false,
  infinite: true,
  mobileFirst: true,
  speed: 300,
});

// delete content of slick-slides li
$('.slick-dots button').text('');

// add event to slick dots
$('.slick-dots').click((e) => {
  e.preventDefault();
  if ($(e.target).prop("tagName") === 'BUTTON') {
    $('.slick-dots button').removeClass('active');
    $(e.target).addClass('active');
  }
});

// <<<<<<<<<<<<<<< TOUR_MENU  >>>>>>>>>>>>>>>

// add event to tour-menu links
$('.tours-menu').click((e) => {
  e.preventDefault();
  if ($(e.target).prop("tagName") === 'A') {
    $('.tours-menu a').removeClass('picked');
    $(e.target).addClass('picked');
  }
});

//tour-holder SLICK SLIDE

$('.tuors-holder').slick({
  centerMode: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  infinite: true,
  nextArrow: $('.triangle-right'),
  prevArrow: $('.triangle-left'),
  responsive: [
    {
      breakpoint: 980,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      }
    }
  ]
});

// <<<<<<<<<<<<<<< FOOTER_TOP DROP-MENU >>>>>>>>>>>>>>>
var isFooterDropMenuOpened = false;

$('.footer-top-form-item.dropdown').click((e) => {
  if (!isFooterDropMenuOpened && $(e.target).is($('.footer-top-form-item.dropdown'))) {
    $('.footer-top-form-dropdown-menu').removeClass('scaledown');
    $('.footer-top-form-dropdown-menu').addClass('scaleup');
    isFooterDropMenuOpened = true;
  }
  if (isFooterDropMenuOpened && $(e.target).is($('.footer-top-form-dropdown-item'))) {
    $('.footer-top-form-item.dropdown input').val($(e.target).text());
    $('.footer-top-form-dropdown-menu').removeClass('scaleup');
    $('.footer-top-form-dropdown-menu').addClass('scaledown');
    isFooterDropMenuOpened = false;
  }
});

