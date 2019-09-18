/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

// <<<<<<<<<<<<<< SETS after load the document
var $tourLink = $('.tours-menu-link').eq(0);
$(document).ready(function () {
  // set active state to header-bottom slide dots
  $('.slick-dots button').eq(0).addClass('active'); // set active state to tour-menu link

  $tourLink.addClass('picked'); //hide drop menu of FOOTER-TOP

  $('.footer-top-form-dropdown-menu').addClass('scaledown');
}); // <<<<<<<<<<<<<<< GLOBAL CLICK >>>>>>>>>>>>>>>

var isBurgerOpend = false;
$(document).click(function (e) {
  //burger menu
  if (isBurgerOpend && !$(e.target).closest($('.header-contacts-navbar-wrap .nav-menu')).length > 0 && !$(e.target).is($('.burger'))) {
    $('.header-contacts-navbar-wrap').hide(300);
    $('.burger').show(300);
    isBurgerOpend = false;
  }
}); // <<<<<<<<<<<<<<< BURGER MENU >>>>>>>>>>>>>>>

$('.burger').click(function () {
  $('.burger').hide();
  $('.header-contacts-navbar-wrap').show(300);
  isBurgerOpend = true;
}); // <<<<<<<<<<<<<<< HEADER_BOTTOM SLICK SLIDE >>>>>>>>>>>>>>>

var $slickDotsContainer = $('.slick-dots');
var $slickDotsButton = $('.slick-dots button'); // const $slickButton = $('.slick-dots button');

var $containerSliders = $('.slider-holder'); // acitvate slick slide

$containerSliders.slick({
  dots: true,
  arrows: false,
  infinite: true,
  mobileFirst: true,
  speed: 300
}); // delete content of slick-slides li

$('.slick-dots button').text(''); // add event to slick dots

$('.slick-dots').click(function (e) {
  e.preventDefault();

  if ($(e.target).prop("tagName") === 'BUTTON') {
    $('.slick-dots button').removeClass('active');
    $(e.target).addClass('active');
  }
}); // <<<<<<<<<<<<<<< TOUR_MENU  >>>>>>>>>>>>>>>
// add event to tour-menu links

$('.tours-menu').click(function (e) {
  e.preventDefault();

  if ($(e.target).prop("tagName") === 'A') {
    $('.tours-menu a').removeClass('picked');
    $(e.target).addClass('picked');
  }
}); //tour-holder SLICK SLIDE

$('.tuors-holder').slick({
  centerMode: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  infinite: true,
  nextArrow: $('.triangle-right'),
  prevArrow: $('.triangle-left'),
  responsive: [{
    breakpoint: 980,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
      infinite: true
    }
  }, {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true
    }
  }]
}); // <<<<<<<<<<<<<<< FOOTER_TOP DROP-MENU >>>>>>>>>>>>>>>

var isFooterDropMenuOpened = false;
$('.footer-top-form-item.dropdown').click(function (e) {
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

/***/ })

/******/ });
//# sourceMappingURL=index.js.map