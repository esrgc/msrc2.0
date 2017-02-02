/*
 * Custom jQuery functions
 * 
 */
//

$(window).load(function() {
    // hide footer but not the sicky footer or toggle button
    $(".footer").hide();

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

    // init masonry js with imagesLoaded
    var $container = $('#masonry-container').masonry({
        columnWidth: '.grid-box',
        itemSelector: '.gridItem',
        isFitWidth: true,
        percentPosition: true,
        isAnimated: true
    });

    $container.masonryImagesReveal($('#images').find('.gridItem'));

    var $gridItems = $('#masonry-container').masonry();
    $gridItems.hide();


});


// on window resize reshuffle masonry images
$(window).resize(function() {

    // init masonry js with imagesLoaded
    var $container = $('#masonry-container').masonry({
        columnWidth: '.grid-box',
        itemSelector: '.gridItem',
        isFitWidth: true,
        percentPosition: true,
        isAnimated: true
    });

    $container.masonry();

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
        var $gridItems = $('#masonry-container').masonry();
        //alert(attrID);

        if (attrID == 'btn1') {
            $('#members-div > p').toggleClass('ac_collapse');
        } else if (attrID == 'btn2') {
            $gridItems.slideToggle('slow');
            $gridItems.masonry();
        } else {
            $('#records-div').toggleClass('ac_collapse');
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


    var $container = $('#masonry-container').masonry();
    // change size of item on click with toggle class
    $container.on('click', '.gridItem', function(e) {
    	e.preventDefault();
    	$(this).toggleClass('grid-item--gigante');
    	// trigger layout after item size changes
    	$container.masonry();
    });



    //.end doc ready function
});

