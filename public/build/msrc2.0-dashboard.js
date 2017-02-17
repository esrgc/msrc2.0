/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
$(window).load(function() {
    // for my first trick now you see them...no you dont
    // hide alot of things that can open later
    $(".footer").hide();
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
 * Author: Carl Flint
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

    var $msrySpotlight = $('#masonry-container-spotlight').masonry();
    //$msrySpotlight.masonryImagesReveal($('#images').find('.gridItem'));
    $msrySpotlight.masonry('layout');

    var $msryRecords = $('#masonry-container-records').masonry();
    //$msryRecords.masonryImagesReveal($('#recordsImages').find('.records-gridItem'));
    $msryRecords.masonry('layout');
});

$(document).ready(function() {

    // carousel rotation speed
    $('.carousel').carousel({
        interval: 5000 //set speed in ms
    });

    /*
    // zAccordion About pop out
    // add click toggle to all but last child merely for decoration
    // setup function to toggle on click
    */
    $(".angle_wrapper > div:not(:last-child) h1").click(function() {
        /*e.preventDefault();*/
        /*
        // the magic
        */
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
        var attrID = $(this).attr('id');
        var $spotlight = $('#masonry-container-spotlight').masonry();
        var $records = $('#masonry-container-records').masonry();
        var $textBox = $('.textBox');

        //alert(attrID);
        //console.log(attrID);

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

        if (attrID == 'btn1') {
            
            $("#membersDiv").toggle('slide');
            $("#membersDiv2").toggle('slide');

        } else if (attrID == 'btn2') {
            
            $('.spotlight-wrapper').css({ "z-index": "1000" });
            // init masonry js with imagesLoaded for spotlight
            var $spotlightMasonry = $('#masonry-container-spotlight').masonry({
                columnWidth: '.grid-box-spotlight',
                itemSelector: '.gridItem',
                percentPosition: true,
                gutter: 1,
                //stagger: 45,
                //containerStyle: null,
                initLayout: false
            });

            $spotlightMasonry.masonryImagesReveal($('#images').find('.gridItem'));
            $("#masonry-container-spotlight").toggle('slow');
            $spotlightMasonry.masonry();

            if ($('.textBox').is(":visible")) {
                $('.textBox').hide("slow");
            }

            $spotlightMasonry.on('layoutComplete', function() {
                console.log('complete');
            });

        } else if (attrID == 'btn3') {
           
            $('.records-wrapper').css({ "z-index": "1000" });
            // init masonry container for records
            var $recordsMasonry = $('#masonry-container-records').masonry({
                columnWidth: '.grid-box-records',
                itemSelector: '.records-gridItem',
                percentPosition: true,
                gutter: 1,
                //stagger: 45,
                //containerStyle: null,
                initLayout: false
            });

            $recordsMasonry.masonryImagesReveal($('#recordsImages').find('.records-gridItem'));

            $("#masonry-container-records").toggle('slow');

            if ($('.textBox').is(":visible")) {
                $('.textBox').hide("slow");
            }
            //$recordsMasonry.masonry("layoutItems", '.records-gridItem', true );
            $recordsMasonry.masonry();
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




    // footer slide toggle nav pane
    $("#footer_button").click(function(e) {
        e.preventDefault();
        $('.footer').slideToggle();
        return;
    });


    var $clickSpotlight = $('#masonry-container-spotlight').masonry();
    // make masonry images clickable 
    $clickSpotlight.on('click', '.gridItem', function(e) {
        e.preventDefault();
        // on click pull up div
        var attrID = $(this).attr('id');
        var sliceID = attrID.substr(10);
        //alert(attrID);
        //alert(sliceID);
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

        var attrID = $(this).attr('id');
        var sliceID = attrID.substr(10);
        //alert(attrID);
        //alert(sliceID);
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
        var attrID = $(this).attr('id');
        if ($(this).is(':visible')) {
            $(this).toggle('slide');
        }
    });



    //.end doc ready function
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
    $("#execButton").click(function(e) {
        e.preventDefault();
        e.stopPropagation();
        if ($("#advisDiv").is(":visible")) {
            $("#rightDiv").find('#advisDiv').toggle("slide");
        }
        $("#rightDiv").find('#execDiv').toggle("slide");
    });
    //hide expanding months layout in executive committee pop out
    $(".archive_months").hide();
    $(".years").click(function() {
        $(this).find('ul').slideToggle();
    });

    //hide advisDiv untill  activated by button
    //$("#advisDiv").hide();
    $("#advisButton").click(function(e) {
        e.preventDefault();
        if ($("#execDiv").is(":visible")) {
            $("#rightDiv").find('#execDiv').toggle("slide");
        }

        $("#rightDiv").find('#advisDiv').toggle("slide");
    });
    //hide expanding advisCommittees descriptions

    /*move to top when done*/

    var $membersUL = $(".members");
    var $advisMins = $(".advisMins");
    var $comOpen = $(".advisCommittees").click(function() {

        var $header = $(this);
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
        // toggle minutes based on open members
        if ($content.attr('id') == 'comGIS') {
            $('#advisMin-GIS').slideToggle(500);
            $('#advisMin-CEDS').hide();
            $('#advisMin-EM').hide();
            $('#advisMin-IT').hide();
            $('#advisMin-MUST').hide();
        } else if ($content.attr('id') == 'comCEDS') {
            $('#advisMin-CEDS').slideToggle(500);
            $('#advisMin-GIS').hide();
            $('#advisMin-EM').hide();
            $('#advisMin-IT').hide();
            $('#advisMin-MUST').hide();
        } else if ($content.attr('id') == 'comEM') {
            $('#advisMin-EM').slideToggle(500);
            $('#advisMin-GIS').hide();
            $('#advisMin-CEDS').hide();
            $('#advisMin-IT').hide();
            $('#advisMin-MUST').hide();
        } else if ($content.attr('id') == 'comIT') {
            $('#advisMin-IT').slideToggle(500);
            $('#advisMin-GIS').hide();
            $('#advisMin-CEDS').hide();
            $('#advisMin-EM').hide();
            $('#advisMin-MUST').hide();
        } else if ($content.attr('id') == 'comMUST') {
            $('#advisMin-MUST').slideToggle(500);
            $('#advisMin-GIS').hide();
            $('#advisMin-CEDS').hide();
            $('#advisMin-EM').hide();
            $('#advisMin-IT').hide();
        } else {
            $('#advisMin-GIS').hide();
            $('#advisMin-CEDS').hide();
            $('#advisMin-EM').hide();
            $('#advisMin-IT').hide();
            $('#advisMin-MUST').hide();
        }
        //$comOpen.not($header);
        $membersUL.not($content).stop(true, true).slideUp();


    });

});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// browser compatibility solution for flowType.js
// mozilla has HUGE!!!! H1-H6 with flow type 
// This is to tone it down a thousand notches
$(document).ready(function() {
    if (!navigator.userAgent.match(/mozilla/i)) {
        $("body").css({ "font-size": "12" });
        $("body").flowtype({
            minFont: 6,
            maxFont: 16,
            fontRatio: 65
        });

        $("#logoBrand").flowtype({
            minFont: 6,
            maxFont: 14,
            fontRatio: 22
        });

        console.log('this is firefox!');
    } else if (navigator.userAgent.indexOf('MSIE') !== -1 
        || navigator.userAgent.indexOf('Trident/') > 0) {
        $('#membersDiv, #membersDiv2, .spotlight-wrapper, .records-wrapper').css({ "top": '160px' });


    } else {
        $("body").flowtype({
            minFont: 6,
            maxFont: 18,
            fontRatio: 65
        });
    }
});


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
