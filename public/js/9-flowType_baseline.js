/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
 * Author: Carl Flint, ESRGC
 */

// browser compatibility solution for flowType.js
// mozilla renders the google font HUGE!!!!  
// This is to tone it down a thousand notches


$(document).ready(function() {
    if (navigator.userAgent.match(/Firefox/i)) {
        $("#logoBrand").css({"padding-top": "10px" });
        $("#logo_lrg").css({
            "font-size": '1.425em'
        });
        $("#logo_med").css({
            "font-size": '1.175em'
        });
        $("body").flowtype({
            minFont: 10,
            maxFont: 20,
            fontRatio: 65
        });
        console.log('this is firefox!');
    } else {
        $("body").flowtype({
            minFont: 10,
            maxFont: 20,
            fontRatio: 65
        });
    }
});


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
