webpackJsonp([1],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {//
// Author: Carl Flint
// ESRGC
//
/* hide the nav footer on page load */
$(".footer").addClass("hidden");
/* hide the drop down advisory groups on page load */
$(".comMenu").addClass("hidden");
/* footer slide toggle nav pane */
$("#footer_button").on('click', function (e) {
    e.preventDefault();
    $('.footer').toggleClass("hidden");
    return;
});

/* footer dropdown menu for advisory committees*/
$("#dropdownMenuButton").click(function (e) {
    e.preventDefault();

    $(this).find('.toggle-close').toggleClass('toggle-open');
    $(".comMenu").toggleClass('hidden');

    if ($(this).hasClass("toggle-open")) {
        $(this).removeClass("toggle-open").slideUp(500);
        return;
    }
    return false;
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {/*browser compatibility solution for flowType.js and fixed position elements not rendering the same*/
/*mozilla renders the google font HUGE!!!!*/
/*This is to tone it down a thousand notches*/
if (navigator.userAgent.match(/Firefox/i)) {
    $("#logoBrand").css({ "padding-top": "10px" });
    $("#imgcontainer, .textBox-body, .minWrapper").css({ "padding-bottom": "140px" });
    $(".textBox").css({ "padding-bottom": "30px" });

    $("#logo_lrg").css({ "line-height": '35px', "font-size-adjust": "0.375" });
    $("#logo_sm").css({ "line-height": '35px', "font-size-adjust": "0.375" });

    // console.log('this is firefox!');
} else if (navigator.userAgent.match(/Trident/i)) {
    $("#imgcontainer, .textBox-body, .minWrapper").css({ "padding-bottom": "130px" });
    $(".textBox").css({ "padding-bottom": "30px" });

    // console.log('this is internetExplorer');
} else {}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = mobileNav;
//
// Author: Carl Flint, ESRGC
//

/* responsive nav function */
function mobileNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "nav navbar-nav navbar-right text-vertical-center") {
        x.className += " responsive";
    } else {
        x.className = "nav navbar-nav navbar-right text-vertical-center";
    }
}

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($, Backbone) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Router; });
/*
Carl Flint
April 2017

router for MSRC 2.0.1
*/

/* dual stage click event for nested advisGroup on committees page*/
const advisGroup = () => {
  if ($('#advisDiv').is(':visible')) {
    $(location.hash).trigger('click');
  } else {
    $('#advisGroup').trigger('click');
    $(location.hash).trigger('click');
  }
};

let Router = Backbone.Router.extend({
  routes: {
    'comCEDS': 'comCEDS',
    'comEM': 'comEM',
    'comGIS': 'comGIS',
    'comIT': 'comIT',
    'comMUST': 'comMUST',
    '*other': 'event' /*catch all other hash change events and fire a click*/
  },
  initialize() {
    console.log('router is being initialized');
  },
  comCEDS() {
    // console.log('caught #comCEDS hashchange event!' + this.route);
    advisGroup();
  },
  comEM() {
    advisGroup();
  },
  comGIS() {
    advisGroup();
  },
  comIT() {
    advisGroup();
  },
  comMUST() {
    advisGroup();
  },
  event() {
    /*console.log('caught *event with backbone router');*/
    $(location.hash).trigger('click');
  }
});


/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0), __webpack_require__(5)))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {var $months = $('.archive_months');

$(".archive_months").hide();
$(".years").click(function () {
    var $x = $(this).attr('id');
    /*console.log($x);*/
    if ($(this).siblings().find('.archive_months').is(':visible')) {
        /*console.log('i can see you!');*/
        $(this).siblings().find('.archive_months').hide('slow');
    }
    $(this).find('ul').slideToggle(500);
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {var $membersUL = $(".members");

var $comOpen = $(".advisCommittees").click(function () {
    var $advisMins = $(".advisMins");
    var $header = $(this);
    $header.find(".toggle-close").toggleClass("toggle-open");
    /*get next element*/
    /*alert($header.attr('id'));*/
    var $content = $header.find('ul');
    /*open the content needed*/
    $content.stop(true, true).slideToggle(500, function () {
        /*execute this after toggle slide is done*/
        /*alert($content.attr('id'));*/
        $header.addClass(function () {
            return $content.is(":visible");
        });
    });

    $content.find('ul').slideToggle(500);

    var $sliceMin = $content.attr('id').substr(3);
    /*console.log($slideMin);*/
    var $openMin = '#advisMin-' + $sliceMin;
    /*console.log($openMin);*/
    /*console.log($openMin.slideToggle(500));*/

    $($openMin).stop(true, true).slideToggle(500, function () {
        $header.addClass(function () {
            return $($openMin).is(':visible');
        });
    });

    $advisMins.not($openMin).stop(true, true).slideUp();
    $membersUL.not($content).stop(true, true).slideUp();

    /* the foo*/
    if ($(this).siblings().find('span').hasClass('toggle-open')) {
        $(this).siblings().find('span').removeClass('toggle-open');
        return;
    }
    /* the bar*/
    return false;
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {/*open advis tab and if exec tab open close it*/
$("#advisGroup").click(function (e) {
    e.preventDefault();
    if ($("#execDiv").is(":visible")) {
        $("#rightDiv").find('#execDiv').toggle("slide");
    }

    $("#rightDiv").find('#advisDiv').toggle("slide");
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {/* Open exec tab and if advis tab open close it */
$("#execGroup").click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    if ($("#advisDiv").is(":visible")) {
        $("#rightDiv").find('#advisDiv').toggle("slide");
    }
    $("#rightDiv").find('#execDiv').toggle("slide");
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$("#execDiv").hide(); /*committees page*/
$("#advisDiv").hide(); /*committees page*/
$(".advisMins").hide(); /*committees page*/
$(".members").hide(); /*committees page*/
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($, Backbone) {Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scripts_footer_functions__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scripts_footer_functions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__scripts_footer_functions__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scripts_minutes_archive__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scripts_minutes_archive___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__scripts_minutes_archive__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scripts_ifBrowser__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scripts_ifBrowser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__scripts_ifBrowser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__scripts_mobileNav__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__scripts_hide_divs__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__scripts_hide_divs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__scripts_hide_divs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__scripts_executive_tab__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__scripts_executive_tab___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__scripts_executive_tab__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__scripts_advisory_tab__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__scripts_advisory_tab___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__scripts_advisory_tab__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__scripts_advis_committees_menu__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__scripts_advis_committees_menu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__scripts_advis_committees_menu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__css_style_less__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__css_style_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__css_style_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__router_main__ = __webpack_require__(7);
/*import global js functions*/




// for small screens
$('i#mobileNav').on('click', function () {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__scripts_mobileNav__["a" /* mobileNav */])();
});

/*js functions specific to committees page*/
/*hide executive and advisory tabs*/

/*add functionality to open popup from click of exec tab*/

/*add functionality to open popup from click of advis tab*/

/*add functionality to advisory subcommittees to expand and view members and meeting minutes*/


/*import css*/


// import '../../scripts/fsReadDir';

let appRouter = new __WEBPACK_IMPORTED_MODULE_9__router_main__["a" /* Router */]();

Backbone.history.start();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0), __webpack_require__(5)))

/***/ })
],[24]);
//# sourceMappingURL=committees-bundle.js.map