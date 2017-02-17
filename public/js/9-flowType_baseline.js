/////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// browser compatibility solution for flowType.js
// mozilla has HUGE!!!! H1-H6 with flow type 
// This is to tone it down a thousand notches
$(document).ready(function() {
    if (!navigator.userAgent.match(/mozilla/i)) {
        $("body").css({ "font-size": "12" });
        $("body").flowtype({
            minFont: 6,
            maxFont: 16,
            fontRatio: 65
        });

        $("#logoBrand").flowtype({
            minFont: 6,
            maxFont: 14,
            fontRatio: 22
        });

        console.log('this is firefox!');
    } else if (navigator.userAgent.indexOf('MSIE') !== -1 
        || navigator.userAgent.indexOf('Trident/') > 0) {
        $('#membersDiv, #membersDiv2, .spotlight-wrapper, .records-wrapper').css({ "top": '160px' });


    } else {
        $("body").flowtype({
            minFont: 6,
            maxFont: 18,
            fontRatio: 65
        });
    }
});


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
