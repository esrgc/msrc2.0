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
    //
    if ($('#recordsWrapper').is(':visible')) {
      $("#recordsWrapper, #recordsWrapper2, .records-textBox").hide();
      $("#workPlan, #meetMinutes, #byLaws").hide();
      $('.toggle3, #documents').toggleClass('ac_collapse');
      $('#documents').find('.slide-toggle-close').toggleClass("slide-toggle-open");
    }
    //
    if ($('#spotlight-container').is(':visible')) {
      $('#spotlight-container, .textBox').hide();
      $("#broadband, #tech, #health, #gis, #data, #ceds, #f1, #f2, #f3").hide();
      $('.toggle2, #projects').toggleClass('ac_collapse');
      $('#projects').find('.slide-toggle-close').toggleClass("slide-toggle-open");
    }

    $("#membersDiv").toggle('slide');
    $("#membersDiv2").toggle('slide');

  } else if ($attrID == 'projects') {
    //
    if ($('#membersDiv').is(':visible')) {
      $("#membersDiv, #membersDiv2, #votingMem, #nonVoting, .membersDiv2_bg").hide();
      $('.toggle1, #members').toggleClass('ac_collapse');
      $('#members').find('.slide-toggle-close').toggleClass("slide-toggle-open");
    }
    //
    if ($('#recordsWrapper').is(':visible')) {
      $("#recordsWrapper, #recordsWrapper2, .records-textBox").hide();
      $("#workPlan, #meetMinutes, #byLaws").hide();
      $('.toggle3, #documents').toggleClass('ac_collapse');
      $('#documents').find('.slide-toggle-close').toggleClass("slide-toggle-open");
    }

    $('.spotlight-wrapper').css({"z-index": "1000"});
    $('#spotlight-container').toggle('slide');

    if ($('.textBox').is(":visible")) {
      $('.textBox').hide("slow");
    }

  } else if ($attrID == 'documents') {
    if ($('#spotlight-container').is(':visible')) {
      $('#spotlight-container, .textBox').hide();
      $("#broadband, #tech, #health, #gis, #data, #ceds, #f1, #f2, #f3").hide();
      $('.toggle2, #projects').toggleClass('ac_collapse');
      $('#projects').find('.slide-toggle-close').toggleClass("slide-toggle-open");
    }
    if ($('#membersDiv').is(':visible')) {
      $("#membersDiv, #membersDiv2, #votingMem, #nonVoting, .membersDiv2_bg").hide();
      $('.toggle1, #members').toggleClass('ac_collapse');
      $('#members').find('.slide-toggle-close').toggleClass("slide-toggle-open");
    }

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
