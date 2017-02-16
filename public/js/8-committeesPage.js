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