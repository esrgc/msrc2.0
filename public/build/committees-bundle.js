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

/* WEBPACK VAR INJECTION */(function($) {

/* functional hash location change function */

$(window).on('hashchange', function (e) {
    e.preventDefault();

    if (location.hash == "#comCEDS" || location.hash == "#comEM" || location.hash == "#comGIS" || location.hash == "#comIT" || location.hash == "#comMUST") {
        $('#advisGroup').trigger('click');
        $(location.hash).trigger('click');
    } else if (location.hash == "#members" || location.hash == "#spotlight" || location.hash == "#records") {
        $(location.hash).trigger('click');
    } else {
        $(location.hash).trigger('click');
    }
});

$(window).on('load', function () {
    if (window.location.hash) {
        $(window).trigger('hashchange');
    }
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 3 */
/***/ (function(module, exports) {

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
/* 5 */
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
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
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
/* 13 */
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
/* 14 */
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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$("#execDiv").hide(); /*committees page*/
$("#advisDiv").hide(); /*committees page*/
$(".advisMins").hide(); /*committees page*/
$(".members").hide(); /*committees page*/
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scripts_footer_functions__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scripts_footer_functions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__scripts_footer_functions__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scripts_footer_hash_Router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scripts_footer_hash_Router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__scripts_footer_hash_Router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scripts_mobileNav__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scripts_mobileNav___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__scripts_mobileNav__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__scripts_minutes_archive__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__scripts_minutes_archive___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__scripts_minutes_archive__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__hide_divs__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__hide_divs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__hide_divs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__executive_tab__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__executive_tab___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__executive_tab__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__advisory_tab__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__advisory_tab___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__advisory_tab__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__advis_committees_menu__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__advis_committees_menu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__advis_committees_menu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__css_style_less__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__css_style_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__css_style_less__);
/*import global js functions*/





/*js functions specific to committees page*/
/*hide executive and advisory tabs*/

/*add functionality to open popup from click of exec tab*/

/*add functionality to open popup from click of advis tab*/

/*add functionality to advisory subcommittees to expand and view members and meeting minutes*/


/*import css*/


/***/ })
],[21]);
//# sourceMappingURL=committees-bundle.js.map