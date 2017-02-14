/*
 * Custom jQuery functions 
 * for MSRC2.0
 * 
 * Author: Carl Flint, ESRGC
 */
//

// responsive nav function
function mobileNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "nav navbar-nav navbar-right text-vertical-center") {
        x.className += " responsive";
    } else {
        x.className = "nav navbar-nav navbar-right text-vertical-center";
    }
}


$(window).load(function() {
    // for my first trick now you see them...no you dont
    // hide alot of things that can open later
    $(".footer").hide();
    $("#execDiv").hide();
    $("#advisDiv").hide();
    $('#membersDiv').hide();
    $("#membersDiv2, #votingMem, #nonVoting").hide();
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


});

$(document).ready(function() {

    // carousel rotation speed
    $('.carousel').carousel({
        interval: 5000 //set speed in ms
    });

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
        $(this).toggleClass("ac_collapse");
        /*
        //hide about text when opening accordion div
        */
        $('#about-landing').toggle('fast');
        /*
        //reveal accordion divs hidden text
        //need to bundle this snippit into an if else function
        //$('#members-div > p').toggleClass('ac_collapse');

        //test to get jquery traverse tree
        */
        var attrID = $(this).attr('id');
        var $spotlight = $('#masonry-container-spotlight').masonry();
        var $records = $('#masonry-container-records').masonry();
        var $textBox = $('.textBox');

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
            var $spotlight = $('#masonry-container-spotlight').masonry({
                columnWidth: '.grid-box-spotlight',
                itemSelector: '.gridItem',
                gutter: 1,
                stagger: 45,
            });

            $spotlight.masonryImagesReveal($('#images').find('.gridItem'));

            //$("#masonry-container-spotlight").masonry('revealItemElements','.gridItem');
            $("#masonry-container-spotlight").toggle('slow');

            $spotlight.masonry('layout');
            if ($('.textBox').is(":visible")) {
                $('.textBox').hide("slow");
            }

        } else if (attrID == 'btn3') {
            $('.records-wrapper').css({ "z-index": "1000" });
            var $hideSpotlight = $('#masonry-container-spotlight').masonry();
            $hideSpotlight.hide();

            // init masonry container for records
            var $records = $('#masonry-container-records').masonry({
                columnWidth: '.grid-box-records',
                itemSelector: '.records-gridItem',
                gutter: 1,
                stagger: 45,
            });

            $records.masonryImagesReveal($('#recordsImages').find('.records-gridItem'));


            $("#masonry-container-records").toggle('slow');

            $records.masonry('layout');
            if ($('.textBox').is(":visible")) {
                $('.textBox').hide("slow");
            }
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


    // setup expanding divs for voting members 
    var $votingMem = $('#votingMem-button');
    $votingMem.on('click', function(e) {
        e.preventDefault();

        //var attrID = $(this).attr('id');
        //alert(attrID);
        if ($("#nonVoting").is(":visible")) {
            $("#nonVoting").toggle("slide");
        }

        if ($("#votingMem").is(":hidden")) {

            $("#membersDiv2").animate({
                "z-index": "1000",
                "opacity": "1"
            });

            $("#membersDiv2, #votingMem").fadeIn(875);


        } else {

            $("#membersDiv2, #votingMem").fadeOut(850);
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
            $("#votingMem").toggle("slide");
        }

        if ($("#nonVoting").is(":hidden")) {

            $("#membersDiv2").css({
                "z-index": "1000",
                "opacity": "1"
            });

            $("#membersDiv2, #nonVoting ").fadeIn(875);
        } else {
            $("#membersDiv2, #nonVoting ").fadeOut(850);

            $("#membersDiv2").css({
                "z-index": "0",
                "opacity": "0"

            });
        }

    });

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
    $(".members").hide();
    $(".advisCommittees").click(function() {
        $(this).find('ul').slideToggle();
    });

    // initial setup for flowtype
    $('body').flowtype({
        minFont: 6,
        maxFont: 16,
        fontRatio: 45
    });

    $('#membersSlide').flowtype({
        minFont: 8,
        maxFont: 14,
        fontRatio: 32
    });

/*
    $('.navbar-brand').flowtype({
        minFont: 7,
        maxFont: 40,
        fontRatio: 67
    });*/
    
    //.end doc ready function
});
