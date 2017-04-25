webpackJsonp([3],{

/***/ 127:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

__webpack_require__(33);

__webpack_require__(34);

var _mobileNav = __webpack_require__(35);

__webpack_require__(141);

__webpack_require__(140);

__webpack_require__(45);

// for small screens
$('i#mobileNav').on('click', function () {
  (0, _mobileNav.mobileNav)();
});

/* home page specific functions */
/*import global js functions*/


/*import css*/
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

/*set home page carousel rotation speed*/
$('.carousel').carousel({
    interval: 5000 //set speed in ms
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

/*to top button appeasrs after scroll down*/
$(window).scroll(function () {
  if ($(this).scrollTop() > 250) {
    $('#to-top').stop(true, true).fadeIn();
  } else {
    $('#to-top').stop(true, true).fadeOut();
  }
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

//
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

/*browser compatibility solution for flowType.js and fixed position elements not rendering the same*/
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),

/***/ 342:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(32);
module.exports = __webpack_require__(127);


/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mobileNav = mobileNav;
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

/***/ 45:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[342]);
//# sourceMappingURL=home-bundle.js.map