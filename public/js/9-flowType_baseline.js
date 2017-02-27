/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// browser compatibility solution for flowType.js
// mozilla has HUGE!!!! H1-H6 with flow type 
// This is to tone it down a thousand notches


$(document).ready(function() {
    if (navigator.userAgent.match(/Firefox\/51.0/i)) {
        $("body").css({ "font-size": "18px" });
        $("#logo_lrg").css("font-size", '1.65em');
        $("#logo_med").css("font-size", '1.32em');

        $("body").flowtype({
            minFont: 6,
            maxFont: 18,
            fontRatio: 65
        });


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
