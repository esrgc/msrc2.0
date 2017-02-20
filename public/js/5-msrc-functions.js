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
    $(".angle_wrapper > div:not(:last-child) h1").on("click", function() {
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





        if (attrID == 'members') {

            $("#membersDiv").toggle('slide');
            $("#membersDiv2").toggle('slide');

        } else if (attrID == 'spotlight') {


            // $('.spotlight-wrapper').show();
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
            $spotlightMasonry.masonry('layout');

            if ($('.textBox').is(":visible")) {
                $('.textBox').hide("slow");
            }

            $spotlightMasonry.on('layoutComplete', function() {
                console.log('complete');
            });

        } else if (attrID == 'records') {

            // $('.records-wrapper').toggle('slide');
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
