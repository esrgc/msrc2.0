/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
 * Author: Carl Flint, ESRGC
 */


$(document).ready(function() {

    //hide execDiv untill  activated by button
    //$("#execDiv").hide();
    $("#execGroup").click(function(e) {
        e.preventDefault();
        e.stopPropagation();
        if ($("#advisDiv").is(":visible")) {
            $("#rightDiv").find('#advisDiv').toggle("slide");
        }
        $("#rightDiv").find('#execDiv').toggle("slide");
    });


    //hide expanding months layout in executive committee pop out
    var $months = $('.archive_months');

    $(".archive_months").hide();
    $(".years").click(function() {
        var $x = $(this).attr('id');
        console.log($x);
        if ($(this).siblings().find('.archive_months').is(':visible')) {
            //console.log('i can see you!');
            $(this).siblings().find('.archive_months').hide('slow');
        }
            $(this).find('ul').slideToggle(500);
    });

    //hide advisDiv untill  activated by button
    //$("#advisDiv").hide();
    $("#advisGroup").click(function(e) {
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
        $header.find(".toggle-close").toggleClass("toggle-open");
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
        if ($(this).siblings().find('.members').is(':visible')) {
            //console.log('i can see you');
            $(this).siblings().find('.members').hide('slow');
        }
        $content.find('ul').slideToggle(500);

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


        /* the foo*/
        if ($(this).siblings().find('span').hasClass('toggle-open')) {
            $(this).siblings().find('span').removeClass('toggle-open');
            return;
        }
        /* the bar*/
        return false;
    });

});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
