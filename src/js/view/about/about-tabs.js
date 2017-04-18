/*
 // zAccordion About pop out
 // add click toggle to all but last child merely for decoration
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
    var $textBox = $('.textBox');
    /*console.log($attrID);*/

    if ($attrID == 'members') {

        $("#membersDiv").toggle('slide');
        $("#membersDiv2").toggle('slide');

    } else if ($attrID == 'spotlight') {

        $('.spotlight-wrapper').css({"z-index": "1000"});
        $('#spotlight-container').toggle('slide');


        if ($('.textBox').is(":visible")) {
            $('.textBox').hide("slow");
        }

    } else if ($attrID == 'records') {

        $('#recordsWrapper, #recordsWrapper2').toggle('slide');
        $('.records-wrapper').css({"z-index": "1000"});

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
