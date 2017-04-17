webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
 * Author: Carl Flint, ESRGC
 */

// populate a button to return to top of page when scrolling down
$(document).ready(function () {

    //#to-top button appears after scrolling
    var fixed = false;
    $(document).scroll(function () {
        if ($(this).scrollTop() > 250) {
            if (!fixed) {
                fixed = true;
                $('#to-top').show("slow", function () {
                    $('#to-top').css({ position: 'fixed', display: 'block' });
                });
            }
        } else {
            if (fixed) {
                fixed = false;
                $('#to-top').hide("slow", function () {
                    $('#to-top').css({ display: 'none' });
                });
            }
        }
    });
    /**
     *
     */
    // carousel rotation speed
    $('.carousel').carousel({
        interval: 5000 //set speed in ms
    });

    /*
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

    var $clickSpotlight = $('#spotlight-container');
    // make images clickable
    $clickSpotlight.on('click', '.gridItem', function (e) {
        e.preventDefault();
        // on click pull up div
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

    var $clickRecords = $('.imgHeader2');
    // change size of item on click with toggle class

    $clickRecords.on('click', function (e) {

        e.preventDefault();

        var $attrID = $(this).attr('id');
        var sliceID = $attrID.substr(10);
        // console.log($attrID);
        // console.log(sliceID);
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

    // setup textBox to close on click
    $(".textBox .textBox-toggle, .records-textBox .textBox-toggle").click(function () {
        var $attrID = $(this).attr('id');
        if ($(this).is(':visible')) {
            $(this).parent().toggle('slide');
        }
    });

    /**
      *
      */

    // footer slide toggle nav pane
    $("#footer_button").on('click', function (e) {
        e.preventDefault();
        $('.footer').slideToggle();
        return;
    });
    // footer dropdown menu for advisory committees
    $("#dropdownMenuButton").click(function (e) {
        e.preventDefault();
        $(this).find('.toggle-close').toggleClass('toggle-open');
        $(".comMenu").toggle("slide");

        if ($(this).hasClass("toggle-open")) {
            $(this).removeClass("toggle-open").slideUp(500);
            return;
        }
        return false;
    });
    /**
       *
       */
    // setup expanding divs for voting members
    var $votingMem = $('#votingMem-button');
    $votingMem.on('click', function (e) {
        e.preventDefault();

        //var attrID = $(this).attr('id');
        //alert(attrID);
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

    // setup expanding divs for non-voting members
    var $nonVoting = $('#nonVoting-button');
    $nonVoting.on('click', function (e) {
        e.preventDefault();
        //var attrID = $(this).attr('id');
        //alert(attrID);
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
    /**
        *
        */
    //hide execDiv untill  activated by button
    //$("#execDiv").hide();
    $("#execGroup").click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        if ($("#advisDiv").is(":visible")) {
            $("#rightDiv").find('#advisDiv').toggle("slide");
        }
        $("#rightDiv").find('#execDiv').toggle("slide");
    });

    //hide expanding months layout in executive committee pop out
    var $months = $('.archive_months');

    $(".archive_months").hide();
    $(".years").click(function () {
        var $x = $(this).attr('id');
        //console.log($x);
        if ($(this).siblings().find('.archive_months').is(':visible')) {
            //console.log('i can see you!');
            $(this).siblings().find('.archive_months').hide('slow');
        }
        $(this).find('ul').slideToggle(500);
    });

    //hide advisDiv untill  activated by button
    //$("#advisDiv").hide();
    $("#advisGroup").click(function (e) {
        e.preventDefault();
        if ($("#execDiv").is(":visible")) {
            $("#rightDiv").find('#execDiv').toggle("slide");
        }

        $("#rightDiv").find('#advisDiv').toggle("slide");
    });
    //hide expanding advisCommittees descriptions

    /*move to top when done*/

    var $membersUL = $(".members");

    var $comOpen = $(".advisCommittees").click(function () {
        var $advisMins = $(".advisMins");
        var $header = $(this);
        $header.find(".toggle-close").toggleClass("toggle-open");
        //get next element
        //alert($header.attr('id'));
        var $content = $header.find('ul');
        // open the content needed
        $content.stop(true, true).slideToggle(500, function () {
            //execute this after toggle slide is done
            //alert($content.attr('id'));
            $header.addClass(function () {
                return $content.is(":visible");
            });
        });

        $content.find('ul').slideToggle(500);

        var $sliceMin = $content.attr('id').substr(3);
        //console.log($slideMin);
        var $openMin = '#advisMin-' + $sliceMin;
        //console.log($openMin);
        //console.log($openMin.slideToggle(500));

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

    /**
     * testing workaround for download links on records tab
     * not working after webpack integration...
     */

    /////////////////////////////////////////////////////////////////
    // download document function for linking to a div
    // downloadable pdf will open in new windows
    // word.doc and .docx will download without window change
    function downloadLink(url) {
        window.open(url, '_blank');
    }

    $('div#workPlanLink').on('click', function () {
        downloadLink('./documents/msrc/MSRC_FY17_Work_Plan.pdf');
    });

    $('div#byLawsLink').on('click', function () {
        downloadLink('./documents/msrc/MSRC_Bylaws.doc');
    });

    // browser compatibility solution for flowType.js and fixed position elements not rendering the same
    // mozilla renders the google font HUGE!!!!
    // This is to tone it down a thousand notches
    if (navigator.userAgent.match(/Firefox/i)) {
        $("#logoBrand").css({ "padding-top": "10px" });
        $("#imgcontainer, .textBox-body, .minWrapper").css({ "padding-bottom": "140px" });
        $(".textBox").css({ "padding-bottom": "30px" });

        $("#logo_lrg").css({ "line-height": '35px', "font-size-adjust": "0.375" });
        $("#logo_med").css({ "line-height": '35px', "font-size-adjust": "0.375" });
        //$("body").flowtype({minFont: 10, maxFont: 20, fontRatio: 65});
        // console.log('this is firefox!');
    } else if (navigator.userAgent.match(/Trident/i)) {
        $("#imgcontainer, .textBox-body, .minWrapper").css({ "padding-bottom": "130px" });
        $(".textBox").css({ "padding-bottom": "30px" });
        //$("body").flowtype({minFont: 10, maxFont: 20, fontRatio: 65});
        // console.log('this is internetExplorer');
    } else {
            //$("body").flowtype({minimum: 500, maximum: 1200, minFont: 10, maxFont: 20, fontRatio: 65});
        }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// functional hash location change function

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

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
 * Author: Carl Flint, ESRGC
 */

// responsive nav function
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
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Author: Carl Flint
 *
 */
$(window).on('load', function () {
    // for my first trick now you see them...no you dont
    // hide alot of things that can open later
    $(".footer").hide();
    $('.comMenu').hide();
    $("#execDiv").hide();
    $("#advisDiv").hide();
    $('#membersDiv').hide();
    $("#membersDiv2, #votingMem, #nonVoting, .membersDiv2_bg").hide();
    $("#masonry-container-spotlight").hide();
    $("#masonry-container-records").hide();
    $('#images, #recordsImages').hide();
    $("#broadband").hide();
    $("#tech").hide();
    $("#health").hide();
    $("#gis").hide();
    $("#data").hide();
    $("#ceds").hide();
    $("#f1").hide();
    $("#f2").hide();
    $("#f3").hide();
    $("#workPlan").hide();
    $("#meetMinutes").hide();
    $("#byLaws").hide();
    $("#theMSRC").hide();
    $(".advisMins").hide();
    $(".members").hide();
    $("#recordsWrapper, #recordsWrapper2, .records-textBox, .textBox").hide();
    $('#spotlight-container').hide();
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 5 */,
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scritps_onLoad_Hide__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scritps_onLoad_Hide___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__scritps_onLoad_Hide__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scritps_mobileNav__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scritps_mobileNav___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__scritps_mobileNav__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scritps_DocReady__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scritps_DocReady___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__scritps_DocReady__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__scritps_footer_hash_Router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__scritps_footer_hash_Router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__scritps_footer_hash_Router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__css_style_less__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__css_style_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__css_style_less__);
// bringing on the scripts for webpack




//test to have webpack compile my less


/***/ })
],[7]);
//# sourceMappingURL=dashboard-bundle.js.map