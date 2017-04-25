webpackJsonp([0],[
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
    $("#logo_med").css({ "line-height": '35px', "font-size-adjust": "0.375" });

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
/* 6 */
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
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scripts_curHash__ = __webpack_require__(27);

/*
 // zAccordion About pop out
 // add click toggle to all but last child merely for decoration
 */
$(".angle_wrapper > div:not(:last-child) h1").on("click", function () {
  let $attrID = $(this).attr('id');
  // if ($(this).hasClass('ac_collapse')) {
  //   curHash('#' + $attrID);
  // } else {
  //   window.location.hash = '';
  // }
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

  var $textBox = $('.textBox');
  /*console.log($attrID);*/

  if ($attrID == 'members') {
    //
    if ($('#recordsWrapper').is(':visible')) {
      $("#recordsWrapper, #recordsWrapper2, .records-textBox").hide();
      $("#workPlan, #meetMinutes, #byLaws").hide();
      $('.toggle3, #documents').toggleClass('ac_collapse');
      $('#documents').find('.slide-toggle-close').toggleClass("slide-toggle-open");
    }
    //
    if ($('#spotlight-container').is(':visible')) {
      $('#spotlight-container, .textBox').hide();
      $("#broadband, #tech, #health, #gis, #data, #ceds, #f1, #f2, #f3").hide();
      $('.toggle2, #projects').toggleClass('ac_collapse');
      $('#projects').find('.slide-toggle-close').toggleClass("slide-toggle-open");
    }

    $("#membersDiv").toggle('slide');
    $("#membersDiv2").toggle('slide');
  } else if ($attrID == 'projects') {
    //
    if ($('#membersDiv').is(':visible')) {
      $("#membersDiv, #membersDiv2, #votingMem, #nonVoting, .membersDiv2_bg").hide();
      $('.toggle1, #members').toggleClass('ac_collapse');
      $('#members').find('.slide-toggle-close').toggleClass("slide-toggle-open");
    }
    //
    if ($('#recordsWrapper').is(':visible')) {
      $("#recordsWrapper, #recordsWrapper2, .records-textBox").hide();
      $("#workPlan, #meetMinutes, #byLaws").hide();
      $('.toggle3, #documents').toggleClass('ac_collapse');
      $('#documents').find('.slide-toggle-close').toggleClass("slide-toggle-open");
    }

    $('.spotlight-wrapper').css({ "z-index": "1000" });
    $('#spotlight-container').toggle('slide');

    if ($('.textBox').is(":visible")) {
      $('.textBox').hide("slow");
    }
  } else if ($attrID == 'documents') {
    //
    if ($('#spotlight-container').is(':visible')) {
      $('#spotlight-container, .textBox').hide();
      $("#broadband, #tech, #health, #gis, #data, #ceds, #f1, #f2, #f3").hide();
      $('.toggle2, #projects').toggleClass('ac_collapse');
      $('#projects').find('.slide-toggle-close').toggleClass("slide-toggle-open");
    }
    //
    if ($('#membersDiv').is(':visible')) {
      $("#membersDiv, #membersDiv2, #votingMem, #nonVoting, .membersDiv2_bg").hide();
      $('.toggle1, #members').toggleClass('ac_collapse');
      $('#members').find('.slide-toggle-close').toggleClass("slide-toggle-open");
    }

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

$('h1#members, h1#spotlight, h1#records').on('click', function () {});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {/* About page angle tabs */

/* Members tab*/
$("#membersDiv, #membersDiv2, #votingMem, #nonVoting, .membersDiv2_bg").hide();
/* Spotlight tab*/
$('#spotlight-container, .textBox').hide();
$("#broadband, #tech, #health, #gis, #data, #ceds, #f1, #f2, #f3").hide();
/* Records tab */
$("#recordsWrapper, #recordsWrapper2, .records-textBox").hide();
$("#workPlan, #meetMinutes, #byLaws").hide();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 11 */
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
/* 12 */
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
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scripts_downloadLink__ = __webpack_require__(6);


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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__scripts_downloadLink__["a" /* downloadLink */])('./documents/msrc/MSRC_Bylaws.pdf');
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 14 */
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
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($, Backbone) {Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scripts_footer_functions__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scripts_footer_functions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__scripts_footer_functions__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scripts_minutes_archive__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scripts_minutes_archive___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__scripts_minutes_archive__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scripts_downloadLink__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__scripts_ifBrowser__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__scripts_ifBrowser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__scripts_ifBrowser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__scripts_mobileNav__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__scripts_hide_divs__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__scripts_hide_divs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__scripts_hide_divs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__scripts_about_tabs__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__scripts_spotlight__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__scripts_spotlight___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__scripts_spotlight__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__scripts_records__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__scripts_members__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__scripts_members___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__scripts_members__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__scripts_popup_tabs__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__scripts_popup_tabs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__scripts_popup_tabs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__css_style_less__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__css_style_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__css_style_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__router_main__ = __webpack_require__(7);
/*import global js functions*/





// for small screens
$('i#mobileNav').on('click', function () {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__scripts_mobileNav__["a" /* mobileNav */])();
});

/*js functions specific to about page*/
/*hide the sliding tabs on about page*/

/*add the functionality to open the tabs by clicking the toggle*/

/*add functionality to spotlight tab based on the clicked image open the corresponding popup*/

/*add functionality to records tab based on clicked div*/

/*add functionality to members tab based on clicked div*/

/*based on the clicked div/image from members/spotlight/records reveal all children of the popup*/


/*import css*/



let appRouter = new __WEBPACK_IMPORTED_MODULE_12__router_main__["a" /* Router */]();
Backbone.history.start();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0), __webpack_require__(5)))

/***/ }),
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export curHash */

function curHash(hash) {
  window.open(hash, '_parent');
}

/***/ })
],[23]);
//# sourceMappingURL=about-bundle.js.map