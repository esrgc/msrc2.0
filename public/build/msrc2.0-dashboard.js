/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
$(window).load(function() {
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
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
 * Author: Carl Flint, ESRGC
 */

// populate a button to return to top of page when scrolling down
$(document).ready(function() {
    //#to-top button appears after scrolling
    var fixed = false;
    $(document).scroll(function() {
        if ($(this).scrollTop() > 250) {
            if (!fixed) {
                fixed = true;
                $('#to-top').show("slow", function() {
                    $('#to-top').css({
                        position: 'fixed',
                        display: 'block'
                    });
                });
            }
        } else {
            if (fixed) {
                fixed = false;
                $('#to-top').hide("slow", function() {
                    $('#to-top').css({
                        display: 'none'
                    });
                });
            }
        }
    });
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
 * Custom jQuery functions 
 * for MSRC2.0
 * 
 * Author: Carl Flint, ESRGC
 */
////////////////////////////////////////////////////////////////////////////////////////////////

$(window).load(function() {

    // helper function for masonry and imagesLoaded
    $.fn.masonryImagesReveal = function($items) {
        var msnry = this.data('masonry');
        var itemSelector = msnry.options.itemSelector;
        // hide by default
        $items.hide();
        // append to container
        this.append($items);
        $items.imagesLoaded().progress(function(imgLoad, image) {
            // get item
            // image is imagesLoaded class, not <img>, <img> is image.img
            var $item = $(image.img).parents(itemSelector);
            // un-hide item
            $item.show();
            // masonry does its thing
            msnry.appended($item);
        });

        return this;
    };

    var $msrySpotlight = $('#masonry-container-spotlight').masonry({
        columnWidth: '.grid-box-spotlight',
        itemSelector: '.gridItem',
        percentPosition: true,
        gutter: 1,
        //stagger: 45,
        //containerStyle: null,
        initLayout: false
    });

    var $msryRecords = $('#masonry-container-records').masonry({
        columnWidth: '.grid-box-records',
        itemSelector: '.records-gridItem',
        percentPosition: true,
        gutter: 1,
        //stagger: 45,
        //containerStyle: null,
        initLayout: false
    });
});

$(document).ready(function() {

    // carousel rotation speed ... such a small bit of code i didnt break into its own module
    $('.carousel').carousel({
        interval: 5000 //set speed in ms
    });

    /*
    // zAccordion About pop out
    // add click toggle to all but last child merely for decoration
    // setup function to toggle on click
    */
    $(".angle_wrapper > div:not(:last-child) h1").on("click", function() {
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
        var $spotlight = $('#masonry-container-spotlight').masonry();
        var $records = $('#masonry-container-records').masonry();
        var $textBox = $('.textBox');

        /*console.log($attrID);*/

        // helper function for masonry and imagesLoaded
        $.fn.masonryImagesReveal = function($items) {
            var msnry = this.data('masonry');
            var itemSelector = msnry.options.itemSelector;
            // hide by default
            $items.hide();
            // append to container
            this.append($items);
            $items.imagesLoaded().progress(function(imgLoad, image) {
                // get item
                // image is imagesLoaded class, not <img>, <img> is image.img
                var $item = $(image.img).parents(itemSelector);
                // un-hide item
                $item.show();
                // masonry does its thing
                msnry.appended($item);
            });

            return this;
        };

        if ($attrID == 'members') {

            $("#membersDiv").toggle('slide');
            $("#membersDiv2").toggle('slide');

        } else if ($attrID == 'spotlight') {

            $('.spotlight-wrapper').css({ "z-index": "1000" });
            // init masonry js with imagesLoaded for spotlight
            var $spotlightMasonry = $('#masonry-container-spotlight').masonry({
                // columnWidth: '.grid-box-spotlight',
                // itemSelector: '.gridItem',
                // percentPosition: true,
                // gutter: 1,
                //stagger: 45,
                containerStyle: null,
                initLayout: false
            });

            $spotlightMasonry.masonryImagesReveal($('#images').find('.gridItem'));
            $("#masonry-container-spotlight").toggle('slow');
            $spotlightMasonry.masonry('layout');

            if ($('.textBox').is(":visible")) {
                $('.textBox').hide("slow");
            }

        } else if ($attrID == 'records') {

            // $('.records-wrapper').toggle('slide');
            $('.records-wrapper').css({ "z-index": "1000" });
            // init masonry container for records
            var $recordsMasonry = $('#masonry-container-records').masonry({
                // columnWidth: '.grid-box-records',
                // itemSelector: '.records-gridItem',
                // percentPosition: true,
                // gutter: 1,
                //stagger: 45,
                containerStyle: null,
                initLayout: false
            });

            $recordsMasonry.masonryImagesReveal($('#recordsImages').find('.records-gridItem'));
            $("#masonry-container-records").toggle('slow');

            if ($('.textBox').is(":visible")) {
                $('.textBox').hide("slow");
            }
            
            $recordsMasonry.masonry('layout');
        } else {

        }

        /* the foo*/
        if ($(this).hasClass("slide-toggle-open")) {
            $(this).removeClass("slide-toggle-open").nextAll(".angle_wrapper > div:not(:last-child) h1").slideUp(500).removeClass("slide-toggle-open");
            return;
        }
        /* the bar*/
        return false;
    });

    var $clickSpotlight = $('#masonry-container-spotlight').masonry();
    // make masonry images clickable 
    $clickSpotlight.on('click', '.gridItem', function(e) {
        e.preventDefault();
        // on click pull up div
        var $attrID = $(this).attr('id');
        var sliceID = $attrID.substr(10);

        if (sliceID == 'broadband') {
            if ($("#broadband").is(":hidden")) {
                $('.textBox').hide("slow");
                $('#broadband').toggle('slide');
            } else {

            }
        } else if (sliceID == 'tech') {
            if ($("#tech").is(":hidden")) {
                $('.textBox').hide("slow");
                $('#tech').toggle('slide');
            } else {

            }
        } else if (sliceID == 'health') {
            if ($("#health").is(":hidden")) {
                $('.textBox').hide("slow");
                $('#health').toggle('slide');
            } else {

            }
        } else if (sliceID == 'gis') {
            if ($("#gis").is(":hidden")) {
                $('.textBox').hide("slow");
                $('#gis').toggle('slide');
            } else {

            }
        } else if (sliceID == 'data') {
            if ($("#data").is(":hidden")) {
                $('.textBox').hide("slow");
                $('#data').toggle('slide');
            } else {

            }
        } else if (sliceID == 'ceds') {
            if ($("#ceds").is(":hidden")) {
                $('.textBox').hide("slow");
                $('#ceds').toggle('slide');
            } else {

            }
        } else if (sliceID == 'f1') {
            if ($("#f1").is(":hidden")) {
                $('.textBox').hide("slow");
                $('#f1').toggle('slide');
            } else {

            }
        } else if (sliceID == 'f2') {
            if ($("#f2").is(":hidden")) {
                $('.textBox').hide("slow");
                $('#f2').toggle('slide');
            } else {

            }
        } else if (sliceID == 'f3') {
            if ($("#f3").is(":hidden")) {
                $('.textBox').hide("slow");
                $('#f3').toggle('slide');
            } else {

            }
        } else {
            //$sliceID.toggle('slide');
        }
    });

    var $clickRecords = $('#masonry-container-records').masonry();
    // change size of item on click with toggle class
    $clickRecords.on('click', '.records-gridItem', function(e) {

        //e.stopPropagation();
        e.preventDefault();

        var $attrID = $(this).attr('id');
        var sliceID = $attrID.substr(10);
        /*($attrID);*/
        /*(sliceID);*/
        if (sliceID == 'workPlan') {
            if ($("#workPlan").is(":hidden")) {
                $('.records-textBox').hide("slow");
                $('#workPlan').toggle('slide');
            } else {

            }
        } else if (sliceID == 'theMSRC') {
            if ($("#theMSRC").is(":hidden")) {
                $('.records-textBox').hide("slow");
                $('#theMSRC').toggle('slide');
            } else {

            }
        } else if (sliceID == 'byLaws') {
            if ($("#byLaws").is(":hidden")) {
                $('.records-textBox').hide("slow");
                $('#byLaws').toggle('slide');
            } else {

            }
        } else if (sliceID == 'meetMinutes') {
            if ($("#meetMinutes").is(":hidden")) {
                $('.records-textBox').hide("slow");
                $('#meetMinutes').toggle('slide');
            } else {

            }
        } else {

        }

    });

    // setup textBox to close on click
    $(".textBox, .records-textBox").click(function() {
        var $attrID = $(this).attr('id');
        if ($(this).is(':visible')) {
            $(this).toggle('slide');
        }
    });

    //.end doc ready function
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////
// footer show/hide toggle
$(document).ready(function() {
    // footer slide toggle nav pane
    $("#footer_button").on('click', function(e) {
        e.preventDefault();
        $('.footer').slideToggle();
        return;
    });

});
//////////////////////////////////////////////////////////////////////////////////////////////
// footer dropdown menu for advisory committees
$(document).ready(function() {
    $("#dropdownMenuButton").click(function(e) {
        e.preventDefault();
        $(this).find('.toggle-close').toggleClass('toggle-open');
        $(".comMenu").toggle("slide");

        if ($(this).hasClass("toggle-open")) {
            $(this).removeClass("toggle-open").slideUp(500);
            return;
        }
        return false;
    });
});
/////////////////////////////////////////////////////////////////////////////////////////////
// experimental code for triggering click event based on point of entry with hash detection. 
///// on footer link activation make click events happen after new page loads

// if ("onhashchange" in window) {  
//   //alert("The browser supports the hashchange event!");  
// }  

// function locationHashChanged() {  
//   if (location.hash === "#somecoolfeature") {  
//     location.hash.trigger('click');
//   }  else {
//     document.getElementById(location.hash).click();
//   }
// }  
// window.onhashchange = locationHashChanged;

////////////////////////////////////////////////////////////////////////////////////////////

// functional hash location change function

$(window).on('hashchange', function(e) {
    e.preventDefault();
    //e.stopPropagation();

    if (location.hash == "#comCEDS" || location.hash == "#comEM" || location.hash == "#comGIS" || location.hash == "#comIT" || location.hash == "#comMUST") {
        $('#advisGroup').trigger('click');
        $(location.hash).trigger('click');

    } else if (location.hash == "#members" || location.hash == "#spotlight" || location.hash == "#records") {
        $(location.hash).trigger('click');
    } else {
        $(location.hash).trigger('click');
    }

});

$(window).load(function() {
    if (window.location.hash) {
        $(window).trigger('hashchange');
    }
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
* Author: Carl Flint
*/

$(document).ready(function() {
    // setup expanding divs for voting members 
    var $votingMem = $('#votingMem-button');
    $votingMem.on('click', function(e) {
        e.preventDefault();

        //var attrID = $(this).attr('id');
        //alert(attrID);
        if ($("#nonVoting").is(":visible")) {
            $("#nonVoting, .membersDiv2_bg").toggle("slide");
        }

        if ($("#votingMem").is(":hidden")) {

            $("#membersDiv2").animate({
                "z-index": "1000",
                "opacity": "1"
            });

            $("#membersDiv2, #votingMem, .membersDiv2_bg").fadeIn(875);


        } else {

            $("#membersDiv2, #votingMem, .membersDiv2_bg").fadeOut(850);
            $("#membersDiv2").animate({
                "z-index": "0",
                "opacity": "0"

            });


        }
    });

    // setup expanding divs for non-voting members 
    var $nonVoting = $('#nonVoting-button');
    $nonVoting.on('click', function(e) {
        e.preventDefault();
        //var attrID = $(this).attr('id');
        //alert(attrID);
        if ($("#votingMem").is(":visible")) {
            $("#votingMem, .membersDiv2_bg").toggle("slide");
        }

        if ($("#nonVoting").is(":hidden")) {

            $("#membersDiv2").css({
                "z-index": "1000",
                "opacity": "1"
            });

            $("#membersDiv2, #nonVoting, .membersDiv2_bg").fadeIn(875);
        } else {
            $("#membersDiv2, #nonVoting, .membersDiv2_bg").fadeOut(850);

            $("#membersDiv2").css({
                "z-index": "0",
                "opacity": "0"

            });
        }

    });


});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
 * Author: Carl Flint, ESRGC
 */


$(document).ready(function() {

    //hide execDiv untill  activated by button
    //$("#execDiv").hide();
    $("#execGroup").click(function(e) {
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
    $(".years").click(function() {
        var $x = $(this).attr('id');
        console.log($x);
        if ($(this).siblings().find('.archive_months').is(':visible')) {
            //console.log('i can see you!');
            $(this).siblings().find('.archive_months').hide('slow');
        }
            $(this).find('ul').slideToggle(500);
    });

    //hide advisDiv untill  activated by button
    //$("#advisDiv").hide();
    $("#advisGroup").click(function(e) {
        e.preventDefault();
        if ($("#execDiv").is(":visible")) {
            $("#rightDiv").find('#execDiv').toggle("slide");
        }

        $("#rightDiv").find('#advisDiv').toggle("slide");
    });
    //hide expanding advisCommittees descriptions

    /*move to top when done*/

    var $membersUL = $(".members");
    
    var $comOpen = $(".advisCommittees").click(function() {
        var $advisMins = $(".advisMins");
        var $header = $(this);
        $header.find(".toggle-close").toggleClass("toggle-open");
        //get next element
        //alert($header.attr('id'));
        var $content = $header.find('ul');
        // open the content needed
        $content.stop(true, true).slideToggle(500, function() {
            //execute this after toggle slide is done
            //alert($content.attr('id'));
            $header.addClass(function() {
                return $content.is(":visible");
            });
        });

        $content.find('ul').slideToggle(500);

        var $sliceMin = $content.attr('id').substr(3);
        //console.log($slideMin);
        var $openMin = '#advisMin-' + $sliceMin;
        //console.log($openMin);
        //console.log($openMin.slideToggle(500));

        $($openMin).stop(true, true).slideToggle(500, function(){
            $header.addClass(function() {
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

});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
 * Author: Carl Flint, ESRGC
 */

// browser compatibility solution for flowType.js
// mozilla has HUGE!!!! H1-H6 with flow type 
// This is to tone it down a thousand notches


$(window).load(function() {
    if (navigator.userAgent.match(/Firefox\/51.0/i)) {
        //$("body").css( "font-size", "18px" );
        $("#logo_lrg").css("font-size", '1.625em');
        $("#logo_med").css("font-size", '1.375em');
        $("body").flowtype({
            minFont: 6,
            maxFont: 18,
            fontRatio: 65
        });
        //console.log('this is firefox!');
    } else {
        $("body").flowtype({
            minFont: 6,
            maxFont: 18,
            fontRatio: 65
        });
    }
});


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
