
// <<<<<<<<<<<<<< SETS after load the document

$(document).ready(() => {
  // set active state to header-bottom slide dots
  $('.slick-dots button').eq(0).addClass('active');

});

// <<<<<<<<<<<<<<< GLOBAL CLICK >>>>>>>>>>>>>>>

var isBurgerOpend = false;

$(document).click((e) => {
  //burger menu
  if (isBurgerOpend && !$(e.target).closest($('.header-contacts-navbar-wrap .nav-menu')).length > 0 && !$(e.target).is($('.burger'))) {
    $('.header-contacts-navbar-wrap').hide(300);
    $('.burger').show(300);
    isBurgerOpend = false;
  }
  else if (isHeadTopDropMenuOpened && !$(e.target).closest($('.drop-holder-tours')).length > 0 && $('.drop-holder-tours .header-top-dropmenu').hasClass('scaleup')) {
    $('.drop-holder-tours .header-top-dropmenu').removeClass('scaleup').addClass('scaledown');
    isHeadTopDropMenuOpened = false;
  }
  else if (isHeadTopDropMenuOpened && !$(e.target).closest($('.drop-holder-servises')).length > 0 && $('.drop-holder-servises .header-top-dropmenu').hasClass('scaleup')) {
    $('.drop-holder-servises .header-top-dropmenu').removeClass('scaleup').addClass('scaledown');
    isHeadTopDropMenuOpened = false;
  }

  else if ($(e.target).closest($('.tour-describes-link')).length > 0) {
    let targetTour = $(e.target).closest(".slick-track > div").attr('class').slice(0, 7).trim();
    let item = window.localStorage.getItem(targetTour);
    window.localStorage.setItem(targetTour, ++item);
  }
});

// <<<<<<<<<<<<<<< BURGER MENU >>>>>>>>>>>>>>>

$('.burger').click(() => {
  $('.burger').hide(300);
  $('.header-contacts-navbar-wrap').show(300);
  //because twice click opens and quick closes the burger menu
  setTimeout(() => isBurgerOpend = true, 1000);
});

// <<<<<<<<<<<<<<< HEADER_TOP DROP MENU >>>>>>>>>>>>>>>

var isHeadTopDropMenuOpened = false;

$('.nav-menu').click((e) => {
  if (!isHeadTopDropMenuOpened && $(e.target).closest($('.drop-holder-tours')).length > 0) {
    $('.drop-holder-tours .header-top-dropmenu').removeClass('scaledown').addClass('scaleup');
    isHeadTopDropMenuOpened = true;
  }
  else if (!isHeadTopDropMenuOpened && $(e.target).closest($('.drop-holder-servises')).length > 0) {
    $('.drop-holder-servises .header-top-dropmenu').removeClass('scaledown').addClass('scaleup');
    isHeadTopDropMenuOpened = true;
  }
});

// <<<<<<<<<<<<<<< HEADER_BOTTOM SLICK SLIDE >>>>>>>>>>>>>>>

// acitvate slick slide
$('.slider-holder').slick({
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



