webpackJsonp([0],{

/***/ 1:
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

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {/*
 // zAccordion About pop out
 // add click toggle to all but last child merely for decoration
 */
$(".angle_wrapper > div:not(:last-child) h1").on("click", function () {
    /* the magic */
    $(this).find(".slide-toggle-close").toggleClass("slide-toggle-open");
    $(this).parent('div').toggleClass("ac_collapse");
    $(this).toggleClass("ac_collapse");
    /*
     //hide about text when opening accordion div
     */
    $('#about-landing').toggle('fast');
    /*
     //reveal accordion divs hidden text
     //test to get jquery traverse tree
     */
    var $attrID = $(this).attr('id');
    var $textBox = $('.textBox');
    /*console.log($attrID);*/

    if ($attrID == 'members') {

        $("#membersDiv").toggle('slide');
        $("#membersDiv2").toggle('slide');
    } else if ($attrID == 'spotlight') {

        $('.spotlight-wrapper').css({ "z-index": "1000" });
        $('#spotlight-container').toggle('slide');

        if ($('.textBox').is(":visible")) {
            $('.textBox').hide("slow");
        }
    } else if ($attrID == 'records') {

        $('#recordsWrapper, #recordsWrapper2').toggle('slide');
        $('.records-wrapper').css({ "z-index": "1000" });

        if ($('.records-textBox').is(":visible")) {
            $('.records-textBox').hide("slow");
        }
    } else {}

    /* the foo*/
    if ($(this).hasClass("slide-toggle-open")) {
        $(this).removeClass("slide-toggle-open").nextAll(".angle_wrapper > div:not(:last-child) h1").slideUp(500).removeClass("slide-toggle-open");
        return;
    }
    /* the bar*/
    return false;
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 2:
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

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$('#membersDiv').hide(); /*about page*/
$("#membersDiv2, #votingMem, #nonVoting, .membersDiv2_bg").hide(); /*about page*/
$('#images, #recordsImages').hide(); /*about page*/
$("#broadband").hide(); /*about page*/
$("#tech").hide(); /*about page*/
$("#health").hide(); /*about page*/
$("#gis").hide(); /*about page*/
$("#data").hide(); /*about page*/
$("#ceds").hide(); /*about page*/
$("#f1").hide(); /*about page*/
$("#f2").hide(); /*about page*/
$("#f3").hide(); /*about page*/
$("#workPlan").hide(); /*about page*/
$("#meetMinutes").hide(); /*about page*/
$("#byLaws").hide(); /*about page*/
$("#theMSRC").hide(); /*about page*/
$("#recordsWrapper, #recordsWrapper2, .records-textBox, .textBox").hide(); /*about page*/
$('#spotlight-container').hide(); /*about page*/
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {/* setup expanding divs for voting members*/
var $votingMem = $('#votingMem-button');
$votingMem.on('click', function (e) {
    e.preventDefault();

    /*var attrID = $(this).attr('id');*/
    /*alert(attrID);*/
    if ($("#nonVoting").is(":visible")) {
        $("#nonVoting, .membersDiv2_bg").toggle("slide");
    }

    if ($("#votingMem").is(":hidden")) {

        $("#membersDiv2").animate({ "z-index": "1000", "opacity": "1" });

        $("#membersDiv2, #votingMem, .membersDiv2_bg").fadeIn(875);
    } else {

        $("#membersDiv2, #votingMem, .membersDiv2_bg").fadeOut(850);
        $("#membersDiv2").animate({ "z-index": "0", "opacity": "0" });
    }
});

/* setup expanding divs for non-voting members*/
var $nonVoting = $('#nonVoting-button');
$nonVoting.on('click', function (e) {
    e.preventDefault();
    /*var attrID = $(this).attr('id');*/
    /*alert(attrID);*/
    if ($("#votingMem").is(":visible")) {
        $("#votingMem, .membersDiv2_bg").toggle("slide");
    }

    if ($("#nonVoting").is(":hidden")) {

        $("#membersDiv2").css({ "z-index": "1000", "opacity": "1" });

        $("#membersDiv2, #nonVoting, .membersDiv2_bg").fadeIn(875);
    } else {
        $("#membersDiv2, #nonVoting, .membersDiv2_bg").fadeOut(850);

        $("#membersDiv2").css({ "z-index": "0", "opacity": "0" });
    }
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {/* setup textBox to close on click*/
$(".textBox .textBox-toggle, .records-textBox .textBox-toggle").click(function () {
    var $attrID = $(this).attr('id');
    if ($(this).is(':visible')) {
        $(this).parent().toggle('slide');
    }
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scripts_downloadLink__ = __webpack_require__(61);


var $clickRecords = $('.imgHeader2');
/*change size of item on click with toggle class*/

$clickRecords.on('click', function (e) {

    e.preventDefault();

    var $attrID = $(this).attr('id');
    var sliceID = $attrID.substr(10);
    /*console.log($attrID);*/
    /*console.log(sliceID);*/
    if (sliceID == 'theMSRC') {
        if ($("#theMSRC").is(":hidden")) {
            $('.records-textBox').hide("slow");
            $('#theMSRC').toggle('slide');
        } else {}
    } else if (sliceID == 'meetMinutes') {
        if ($("#meetMinutes").is(":hidden")) {
            $('.records-textBox').hide("slow");
            $('#meetMinutes').toggle('slide');
        } else {}
    } else {}
});

$('div#workPlanLink').on('click', function () {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__scripts_downloadLink__["a" /* downloadLink */])('./documents/msrc/MSRC_FY17_Work_Plan.pdf');
});

$('div#byLawsLink').on('click', function () {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__scripts_downloadLink__["a" /* downloadLink */])('./documents/msrc/MSRC_Bylaws.doc');
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {var $clickSpotlight = $('#spotlight-container');
/*make images clickable*/
$clickSpotlight.on('click', '.gridItem', function (e) {
    e.preventDefault();
    /*on click pull up div*/
    var $attrID = $(this).attr('id');
    var sliceID = $attrID.substr(10);

    if (sliceID == 'broadband') {
        if ($("#broadband").is(":hidden")) {
            $('.textBox').hide("slow");
            $('#broadband').toggle('slide');
        } else {}
    } else if (sliceID == 'tech') {
        if ($("#tech").is(":hidden")) {
            $('.textBox').hide("slow");
            $('#tech').toggle('slide');
        } else {}
    } else if (sliceID == 'health') {
        if ($("#health").is(":hidden")) {
            $('.textBox').hide("slow");
            $('#health').toggle('slide');
        } else {}
    } else if (sliceID == 'gis') {
        if ($("#gis").is(":hidden")) {
            $('.textBox').hide("slow");
            $('#gis').toggle('slide');
        } else {}
    } else if (sliceID == 'data') {
        if ($("#data").is(":hidden")) {
            $('.textBox').hide("slow");
            $('#data').toggle('slide');
        } else {}
    } else if (sliceID == 'ceds') {
        if ($("#ceds").is(":hidden")) {
            $('.textBox').hide("slow");
            $('#ceds').toggle('slide');
        } else {}
    } else if (sliceID == 'must') {
        if ($("#must").is(":hidden")) {
            $('.textBox').hide("slow");
            $('#must').toggle('slide');
        } else {}
    } else if (sliceID == 'funding') {
        if ($("#funding").is(":hidden")) {
            $('.textBox').hide("slow");
            $('#funding').toggle('slide');
        } else {}
    } else if (sliceID == 'bizDev') {
        if ($("#bizDev").is(":hidden")) {
            $('.textBox').hide("slow");
            $('#bizDev').toggle('slide');
        } else {}
    } else {
        //$sliceID.toggle('slide');
    }
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 3:
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

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scripts_footer_functions__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scripts_footer_functions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__scripts_footer_functions__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scripts_footer_hash_Router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scripts_footer_hash_Router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__scripts_footer_hash_Router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scripts_mobileNav__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scripts_mobileNav___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__scripts_mobileNav__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__scripts_minutes_archive__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__scripts_minutes_archive___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__scripts_minutes_archive__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__scripts_downloadLink__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__hide_divs__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__hide_divs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__hide_divs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__about_tabs__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__about_tabs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__about_tabs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__spotlight__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__spotlight___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__spotlight__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__records__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__members__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__members___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__members__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__popup_tabs__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__popup_tabs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__popup_tabs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__css_style_less__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__css_style_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__css_style_less__);
/*import global js functions*/






/*js functions specific to about page*/
/*hide the sliding tabs on about page*/

/*add the functionality to open the tabs by clicking the toggle*/

/*add functionality to spotlight tab based on the clicked image open the corresponding popup*/

/*add functionality to records tab based on clicked div*/

/*add functionality to members tab based on clicked div*/

/*based on the clicked div/image from members/spotlight/records reveal all children of the popup*/


/*import css*/


/***/ }),

/***/ 4:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = downloadLink;
/*download document function for linking to a div*/
/*downloadable pdf will open in new windows*/
/*word.doc and .docx will download without window change*/
function downloadLink(url) {
  window.open(url, '_blank');
}

/***/ }),

/***/ 7:
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

/***/ })

},[33]);
//# sourceMappingURL=about-bundle.js.map