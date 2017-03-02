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
        stagger: 45,

        initLayout: false
    });

});

$(window).resize(function() {
    var $spotlightMasonry = $('#masonry-container-spotlight').masonry();
    $spotlightMasonry.masonry('layout');
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
        // var $records = $('#masonry-container-records').masonry();
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

            $('#recordsWrapper, #recordsWrapper2').toggle('slide');
            $('.records-wrapper').css({ "z-index": "1000" });


            if ($('.records-textBox').is(":visible")) {
                $('.records-textBox').hide("slow");
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
        } else if (sliceID == 'must') {
            if ($("#must").is(":hidden")) {
                $('.textBox').hide("slow");
                $('#must').toggle('slide');
            } else {

            }
        } else if (sliceID == 'funding') {
            if ($("#funding").is(":hidden")) {
                $('.textBox').hide("slow");
                $('#funding').toggle('slide');
            } else {

            }
        } else if (sliceID == 'bizDev') {
            if ($("#bizDev").is(":hidden")) {
                $('.textBox').hide("slow");
                $('#bizDev').toggle('slide');
            } else {

            }
        } else {
            //$sliceID.toggle('slide');
        }
    });


    var $clickRecords = $('.imgHeader2');
    // change size of item on click with toggle class

    $clickRecords.on('click', function(e) {

        e.preventDefault();

        var $attrID = $(this).attr('id');
        var sliceID = $attrID.substr(10);
        // console.log($attrID);
        // console.log(sliceID);
        if (sliceID == 'theMSRC') {
            if ($("#theMSRC").is(":hidden")) {
                $('.records-textBox').hide("slow");
                $('#theMSRC').toggle('slide');
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
    $(".textBox .textBox-toggle, .records-textBox .textBox-toggle").click(function() {
        var $attrID = $(this).attr('id');
        if ($(this).is(':visible')) {
            $(this).parent().toggle('slide');
        }
    });


    //.end doc ready function
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
