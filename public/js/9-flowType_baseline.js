/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
 * Author: Carl Flint, ESRGC
 */

// browser compatibility solution for flowType.js
// mozilla renders the google font HUGE!!!!  
// This is to tone it down a thousand notches


$(document).ready(function() {
    if (navigator.userAgent.match(/Firefox/i)) {
        //$("body").css( "font-size", "18px" );
        $("#logo_lrg").css({
            "font-size": '1.625em'
        });
        $("#logo_med").css({
            "font-size": '1.375em'    
        });
        $("body").flowtype({
            minFont: 6,
            maxFont: 18,
            fontRatio: 65
        });
        console.log('this is firefox!');
    } else {
        $("body").flowtype({
            minFont: 6,
            maxFont: 18,
            fontRatio: 65
        });
    }
});


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
