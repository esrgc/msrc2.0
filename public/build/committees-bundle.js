webpackJsonp([1],{

/***/ 131:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

var $membersUL = $(".members");

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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

/*open advis tab and if exec tab open close it*/
$("#advisGroup").click(function (e) {
    e.preventDefault();
    if ($("#execDiv").is(":visible")) {
        $("#rightDiv").find('#execDiv').toggle("slide");
    }

    $("#rightDiv").find('#advisDiv').toggle("slide");
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

/* Open exec tab and if advis tab open close it */
$("#execGroup").click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    if ($("#advisDiv").is(":visible")) {
        $("#rightDiv").find('#advisDiv').toggle("slide");
    }
    $("#rightDiv").find('#execDiv').toggle("slide");
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

$("#execDiv").hide(); /*committees page*/
$("#advisDiv").hide(); /*committees page*/
$(".advisMins").hide(); /*committees page*/
$(".members").hide(); /*committees page*/
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($, Backbone) {

__webpack_require__(23);

__webpack_require__(22);

__webpack_require__(56);

__webpack_require__(46);

var _mobileNav = __webpack_require__(24);

__webpack_require__(134);

__webpack_require__(133);

__webpack_require__(132);

__webpack_require__(131);

__webpack_require__(25);

var _main = __webpack_require__(55);

// for small screens
$('i#mobileNav').on('click', function () {
  (0, _mobileNav.mobileNav)();
});

/*js functions specific to committees page*/
/*hide executive and advisory tabs*/
/*import global js functions*/

/*add functionality to open popup from click of exec tab*/

/*add functionality to open popup from click of advis tab*/

/*add functionality to advisory subcommittees to expand and view members and meeting minutes*/


/*import css*/


// import '../../scripts/fsReadDir';

var appRouter = new _main.Router();

Backbone.history.start();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(36)))

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

},[140]);
//# sourceMappingURL=committees-bundle.js.map