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
    
    var $comOpen = $(".advisCommittees").click(function() {
        var $advisMins = $(".advisMins");
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

        $content.find('ul').slideToggle(500);

        var $sliceMin = $content.attr('id').substr(3);
        //console.log($slideMin);
        var $openMin = '#advisMin-' + $sliceMin;
        //console.log($openMin);
        //console.log($openMin.slideToggle(500));

        $($openMin).stop(true, true).slideToggle(500, function(){
            $header.addClass(function() {
                return $($openMin).is(':visible');
            });
        });

        // if ($(this).find('.members').is(':visible')) {
        //     var attrID = $(this).find('.members').attr('id');
        //     // $advisMins.hide();
        //     console.log('i am supposed to be visible  ' + attrID);
        // } 

        $advisMins.not($openMin).stop(true, true).slideUp();
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
