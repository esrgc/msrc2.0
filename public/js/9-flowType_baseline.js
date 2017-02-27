/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// browser compatibility solution for flowType.js
// mozilla has HUGE!!!! H1-H6 with flow type 
// This is to tone it down a thousand notches


$(document).ready(function() {
    if (navigator.userAgent.match(/Firefox\/51.0/i)) {
        $("body").css({ "font-size": "18px" });
        $("body").flowtype({
            minFont: 6,
            maxFont: 18,
            fontRatio: 65
        });
        $("#logo_lrg").css("font-size", '1.6em');

        $("#logo_med").css("font-size", '1.3em');

        //console.log('this is firefox!');
    } else {
        $("body").flowtype({
            minFont: 6,
            maxFont: 18,
            fontRatio: 65
        });
    }
});


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
