webpackJsonp([0],{

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

var _curHash = __webpack_require__(143);

/*
 // zAccordion About pop out
 // add click toggle to all but last child merely for decoration
 */
$(".angle_wrapper > div:not(:last-child) h1").on("click", function () {
  var $attrID = $(this).attr('id');
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
    // if documents tab is visible close it correctly
    if ($('#recordsWrapper').is(':visible')) {
      $("#recordsWrapper, #recordsWrapper2, .records-textBox").hide();
      $("#workPlan, #meetMinutes, #byLaws").hide();
      $('.toggle3, #documents').toggleClass('ac_collapse');
      $('#documents').find('.slide-toggle-close').toggleClass("slide-toggle-open");
    }
    // if projects tab is visible close it correctly
    if ($('#spotlight-container').is(':visible')) {
      $('#spotlight-container, .textBox').hide();
      $("#broadband, #tech, #health, #gis, #data, #ceds, #f1, #f2, #f3").hide();
      $('.toggle2, #projects').toggleClass('ac_collapse');
      $('#projects').find('.slide-toggle-close').toggleClass("slide-toggle-open");
    }

    $("#membersDiv").toggle('slide');
    $("#membersDiv2").toggle('slide');
  } else if ($attrID == 'projects') {
    // if members tab is visible close it correctly
    if ($('#membersDiv').is(':visible')) {
      $("#membersDiv, #membersDiv2, #votingMem, #nonVoting, .membersDiv2_bg").hide();
      $('.toggle1, #members').toggleClass('ac_collapse');
      $('#members').find('.slide-toggle-close').toggleClass("slide-toggle-open");
    }
    // if records tab is visible close it correctly
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
    // if projects tab is visible close it correctly
    if ($('#spotlight-container').is(':visible')) {
      $('#spotlight-container, .textBox').hide();
      $("#broadband, #tech, #health, #gis, #data, #ceds, #f1, #f2, #f3").hide();
      $('.toggle2, #projects').toggleClass('ac_collapse');
      $('#projects').find('.slide-toggle-close').toggleClass("slide-toggle-open");
    }
    // if members tab is visible close it correctly
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

// $('h1#members, h1#spotlight, h1#records').on('click', function() {});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

/* About page angle tabs */

/* Members tab*/
$("#membersDiv, #membersDiv2, #votingMem, #nonVoting, .membersDiv2_bg").hide();
/* Spotlight tab*/
$('#spotlight-container, .textBox').hide();
$("#broadband, #tech, #health, #gis, #data, #ceds, #f1, #f2, #f3").hide();
/* Records tab */
$("#recordsWrapper, #recordsWrapper2, .records-textBox").hide();
$("#workPlan, #meetMinutes, #byLaws").hide();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),

/***/ 127:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

/* setup expanding divs for voting members*/
var $votingMem = $('#votingMem-button');
$votingMem.on('click', function (e) {
  e.preventDefault();

  /*var attrID = $(this).attr('id');*/
  /*alert(attrID);*/
  if ($("#nonVoting").is(":visible")) {
    $("#nonVoting, .membersDiv2_bg").hide();
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
    $("#votingMem, .membersDiv2_bg").hide();
  }

  if ($("#nonVoting").is(":hidden")) {

    $("#membersDiv2").css({ "z-index": "1000", "opacity": "1" });

    $("#membersDiv2, #nonVoting, .membersDiv2_bg").fadeIn(875);
  } else {
    $("#membersDiv2, #nonVoting, .membersDiv2_bg").fadeOut(850);

    $("#membersDiv2").css({ "z-index": "0", "opacity": "0" });
  }
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),

/***/ 128:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

/* setup textBox to close on click*/
$(".textBox .textBox-toggle, .records-textBox .textBox-toggle").click(function () {
    var $attrID = $(this).attr('id');
    if ($(this).is(':visible')) {
        $(this).parent().toggle('slide');
    }
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),

/***/ 129:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

// popout for documents tab when clicking on Quarterly or Executive Minutes buttons
var $quarterly = $('a#btn-Quarterly');
// make button open hidden minutes div
$quarterly.on('click', function (e) {
  e.preventDefault();
  $('#QuarterlyMin').toggle('slide');
});

var $executive = $('a#btn-Executive');
// make button open hidden minutes div
$executive.on('click', function (e) {
  e.preventDefault();
  $('#ExecutiveMin').toggle('slide');
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

var $clickSpotlight = $('#spotlight-container');
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($, Backbone) {

__webpack_require__(23);

__webpack_require__(22);

__webpack_require__(56);

__webpack_require__(46);

var _mobileNav = __webpack_require__(24);

__webpack_require__(126);

__webpack_require__(125);

__webpack_require__(130);

__webpack_require__(129);

__webpack_require__(127);

__webpack_require__(128);

__webpack_require__(25);

var _main = __webpack_require__(55);

// for small screens
$('i#mobileNav').on('click', function () {
  (0, _mobileNav.mobileNav)();
});

/*js functions specific to about page*/
/*hide the sliding tabs on about page*/
/*import global js functions*/

/*add the functionality to open the tabs by clicking the toggle*/

/*add functionality to spotlight tab based on the clicked image open the corresponding popup*/

/*add functionality to records tab based on clicked div*/

/*add functionality to members tab based on clicked div*/

/*based on the clicked div/image from members/spotlight/records reveal all children of the popup*/


/*import css*/

var appRouter = new _main.Router();
Backbone.history.start();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(36)))

/***/ }),

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.curHash = curHash;
function curHash(hash) {
  window.open(hash, '_parent');
}

/***/ }),

/***/ 22:
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

/***/ 23:
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

    $("#logo_lrg").css({ "line-height": '35px', "font-size-adjust": "0.275" });
    $("#logo_sm").css({ "line-height": '20px', "font-size-adjust": "0.375" });

    // console.log('this is firefox!');
} else if (navigator.userAgent.match(/Trident/i)) {
    __webpack_require__(57);
    $("#imgcontainer, .textBox-body, .minWrapper").css({ "padding-bottom": "130px" });
    $(".textBox").css({ "padding-bottom": "30px" });

    // console.log('this is internetExplorer');
} else {}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),

/***/ 24:
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

/***/ 25:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.downloadLink = downloadLink;
/*download document function based on jquery selector*/
/*downloadable pdf will open in new windows*/
/*word.doc and .docx will download without window change*/
function downloadLink(url) {
  window.open(url, '_blank');
}

/* setup downloadable links for pdf documents for use on multiple pages */
// link downloadable document to anchor with id workPlanLink
$('a#workPlanLink').on('click', function () {
  downloadLink('./documents/msrc/MSRC_FY17_Work_Plan.pdf');
});
// link downloadable document to anchor with id byLawsLink
$('a#byLawsLink').on('click', function () {
  downloadLink('./documents/msrc/MSRC_Bylaws.pdf');
});
// link downloadable document to anchor with id CEDSLink
$('a#CEDSLink').on('click', function () {
  downloadLink('./documents/reports/CEDS Full Document revised 3-8-18.pdf');
});
// link downloadable document to anchor with id broadbandLink
$('a#broadbandLink').on('click', function () {
  downloadLink('./documents/reports/Upper_Eastern_Shore_Region_2012.pdf');
});
//
//
/* setup external links for advisory committee page*/
$('a#MUSTBUS').on('click', function () {
  downloadLink('http://www.mustbus.org/');
});
$('a#ESRGC').on('click', function () {
  downloadLink('http://www.esrgc.org/');
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Backbone, $) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Router = undefined;

var _routine = __webpack_require__(69);

var Router = Backbone.Router.extend({
  routes: {
    'comCEDS': 'comCEDS',
    'comEM': 'comEM',
    'comGIS': 'comGIS',
    'comIT': 'comIT',
    'comMUST': 'comMUST',
    '*other': 'event' /*catch all other hash change events and fire a click*/
  },
  initialize: function initialize() {
    console.log('router is being initialized');
  },
  comCEDS: function comCEDS() {
    // console.log('caught #comCEDS hashchange event!' + this.route);
    (0, _routine.advisGroup)();
  },
  comEM: function comEM() {
    (0, _routine.advisGroup)();
  },
  comGIS: function comGIS() {
    (0, _routine.advisGroup)();
  },
  comIT: function comIT() {
    (0, _routine.advisGroup)();
  },
  comMUST: function comMUST() {
    (0, _routine.advisGroup)();
  },
  event: function event() {
    /*console.log('caught *event with backbone router');*/
    $(location.hash).trigger('click');
  }
}); /*
    Carl Flint
    April 2017
    
    router for MSRC 2.0.1
    */
exports.Router = Router;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(36), __webpack_require__(1)))

/***/ }),

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

var $months = $('.archive_months');

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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* dual stage click event for nested advisGroup on committees page*/
var advisGroup = function advisGroup() {
  if ($('#advisDiv').is(':visible')) {
    $(location.hash).trigger('click');
  } else {
    $('#advisGroup').trigger('click');
    $(location.hash).trigger('click');
  }
};

exports.advisGroup = advisGroup;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ })

},[139]);
//# sourceMappingURL=about-bundle.js.map