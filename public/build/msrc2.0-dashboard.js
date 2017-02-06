/*
 * Custom jQuery functions
 * 
 */
//

$(window).load(function() {
    // for my first trick now you see them...no you dont
    // hide footer but not the sicky footer or toggle button
    $(".footer").hide();
    //hide execDiv untill  activated by button
    $("#execDiv").hide();
    //hide advisDiv untill  activated by button
    $("#advisDiv").hide();
    //hide membersDiv
    $('#membersDiv').hide();

    $("#membersDiv2").hide();
    //hide votingMem div until activated
    $("#votingMem").hide();
    //hide nonVoting div until activated
    $("#nonVoting").hide();



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

    // init masonry js with imagesLoaded for spotlight
    var $spotlight = $('#masonry-container-spotlight').masonry({
        columnWidth: '.grid-box-spotlight',
        itemSelector: '.gridItem',
        isFitWidth: true,
        percentPosition: true,
        isAnimated: true
    });

    $spotlight.masonryImagesReveal($('#images').find('.gridItem'));

    var $hideSpotlight = $('#masonry-container-spotlight').masonry();
    $hideSpotlight.hide();

    // init masonry container for records
    var $records = $('#masonry-container-records').masonry({
        columnWidth: '.grid-box-records',
        itemSelector: '.records-gridItem',
        isFitWidth: true,
        percentPosition: true,
        isAnimated: true
    });

    $records.masonryImagesReveal($('#recordsImages').find('.records-gridItem'));



    var $hideRecords = $('#masonry-container-records').masonry();
    $hideRecords.hide();


});


// on window resize reshuffle masonry images
$(window).resize(function() {

    // init masonry js with imagesLoaded
    var $resizeSpotlight = $('#masonry-container-spotlight').masonry({
        columnWidth: '.grid-box-spotlight',
        itemSelector: '.gridItem',
        isFitWidth: true,
        percentPosition: true,
        isAnimated: true
    });

    $resizeSpotlight.masonry();

    // init masonry js with imagesLoaded
    var $resizeRecords = $('#masonry-container-records').masonry({
        columnWidth: '.grid-box-records',
        itemSelector: '.records-gridItem',
        isFitWidth: true,
        percentPosition: true,
        isAnimated: true
    });

    $resizeRecords.masonry();

});



$(document).ready(function() {

    // carousel rotation speed
    $('.carousel').carousel({
        interval: 5000 //set speed in ms
    });

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
    $(".angle_wrapper > div:not(:last-child) p").click(function() {
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
        //alert(attrID);

        if (attrID == 'btn1') {
            $("#membersDiv").toggle('slide');
            $("#membersDiv2").toggle('slide');

        } else if (attrID == 'btn2') {
            $('.spotlight-wrapper').css({ "z-index": "1000" });
            $spotlight.slideToggle('slow');
            $spotlight.masonry();
        } else if (attrID == 'btn3') {
            $('.records-wrapper').css({ "z-index": "1000" });
            $records.slideToggle('slow');
            $records.masonry();
        } else {

        }

        /* the foo*/
        if ($(this).hasClass("slide-toggle-open")) {
            $(this).removeClass("slide-toggle-open").nextAll(".angle_wrapper > div:not(:last-child p").slideUp(500).removeClass("slide-toggle-open");
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
    // change size of item on click with toggle class
    $clickSpotlight.on('click', '.gridItem', function(e) {
        e.preventDefault();
        $(this).toggleClass('grid-item--gigante');
        $(this).children("#textBox").toggleClass("hidden");
        // trigger layout after item size changes
        $clickSpotlight.masonry();
    });

    var $clickRecords = $('#masonry-container-records').masonry();
    // change size of item on click with toggle class
    $clickRecords.on('click', '.records-gridItem', function(e) {
        e.preventDefault();
        $(this).toggleClass('record-item--gigante');
        $(this).children("#textBox").toggleClass("hidden");
        // trigger layout after item size changes
        $clickRecords.masonry();
    });



    // setup expanding divs for voting members 
    var $votingMem = $('#votingMem-button');
    $votingMem.on('click', function(e) {
        e.preventDefault();
        //var attrID = $(this).attr('id');
        //alert(attrID);
        $("#votingMem").toggle("slide");
        $("#membersDiv2").css({ "z-index": "2000" });
    });

    // setup expanding divs for non-voting members 
    var $nonVoting = $('#nonVoting-button');
    $nonVoting.on('click', function(e) {
        e.preventDefault();
        //var attrID = $(this).attr('id');
        //alert(attrID);
        $("#nonVoting").toggle("slide");
        $("#membersDiv2").css({ "z-index": "2000" });

    });





    //hide execDiv untill  activated by button
    //$("#execDiv").hide();
    $("#execButton").click(function(e) {
        e.preventDefault();
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
        $("#rightDiv").find('#advisDiv').toggle("slide");
    });
    //hide expanding advisCommittees descriptions
    $(".members").hide();
    $(".advisCommittees").click(function() {
        $(this).find('ul').slideToggle();
    });



    //.end doc ready function
});
