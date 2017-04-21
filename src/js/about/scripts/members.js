/* setup expanding divs for voting members*/
var $votingMem = $('#votingMem-button');
$votingMem.on('click', function(e) {
  e.preventDefault();

  /*var attrID = $(this).attr('id');*/
  /*alert(attrID);*/
  if ($("#nonVoting").is(":visible")) {
    $("#nonVoting, .membersDiv2_bg").toggle("slide");
  }

  if ($("#votingMem").is(":hidden")) {

    $("#membersDiv2").animate({"z-index": "1000", "opacity": "1"});

    $("#membersDiv2, #votingMem, .membersDiv2_bg").fadeIn(875);

  } else {

    $("#membersDiv2, #votingMem, .membersDiv2_bg").fadeOut(850);
    
    $("#membersDiv2").animate({"z-index": "0", "opacity": "0"});

  }
});

/* setup expanding divs for non-voting members*/
var $nonVoting = $('#nonVoting-button');
$nonVoting.on('click', function(e) {
  e.preventDefault();
  /*var attrID = $(this).attr('id');*/
  /*alert(attrID);*/
  if ($("#votingMem").is(":visible")) {
    $("#votingMem, .membersDiv2_bg").toggle("slide");
  }

  if ($("#nonVoting").is(":hidden")) {

    $("#membersDiv2").css({"z-index": "1000", "opacity": "1"});

    $("#membersDiv2, #nonVoting, .membersDiv2_bg").fadeIn(875);
  } else {
    $("#membersDiv2, #nonVoting, .membersDiv2_bg").fadeOut(850);

    $("#membersDiv2").css({"z-index": "0", "opacity": "0"});
  }

});
