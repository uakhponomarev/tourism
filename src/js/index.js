// <<<<<<<<<<<<<< SETS after load the document

const $tourLink = $('.tours-menu-link').eq(0);
$(document).ready(() => {
  // set active state to header-bottom slide dots
  $('.slick-dots button').eq(0).addClass('active');
  // set active state to tour-menu link
  $tourLink.addClass('picked');
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
  if ($(e.target).prop("tagName") === 'BUTTON') {
    $('.slick-dots button').removeClass('active');
    $(e.target).addClass('active');
  }
});

// <<<<<<<<<<<<<<< TOUR_MENU  >>>>>>>>>>>>>>>

// add event to tour-menu links
$('.tours-menu').click((e) => {
  if ($(e.target).prop("tagName") === 'A') {
    $('.tours-menu a').removeClass('picked');
    $(e.target).addClass('picked');
  }
});