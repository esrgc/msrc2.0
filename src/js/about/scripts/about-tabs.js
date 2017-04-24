import {curHash} from '../../scripts/curHash';
/*
 // zAccordion About pop out
 // add click toggle to all but last child merely for decoration
 */
$(".angle_wrapper > div:not(:last-child) h1").on("click", function() {
  let $attrID = $(this).attr('id');
  // if ($(this).hasClass('ac_collapse')) {
  //   curHash('#' + $attrID);
  // } else {
  //   window.location.hash = '';
  // }
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

  var $textBox = $('.textBox');
  /*console.log($attrID);*/

  if ($attrID == 'members') {

    $("#membersDiv").toggle('slide');
    $("#membersDiv2").toggle('slide');

  } else if ($attrID == 'projects') {

    $('.spotlight-wrapper').css({"z-index": "1000"});
    $('#spotlight-container').toggle('slide');

    if ($('.textBox').is(":visible")) {
      $('.textBox').hide("slow");
    }

  } else if ($attrID == 'documents') {

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

$('h1#members, h1#spotlight, h1#records').on('click', function() {});
