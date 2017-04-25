/*browser compatibility solution for flowType.js and fixed position elements not rendering the same*/
/*mozilla renders the google font HUGE!!!!*/
/*This is to tone it down a thousand notches*/
if (navigator.userAgent.match(/Firefox/i)) {
    $("#logoBrand").css({"padding-top": "10px"});
    $("#imgcontainer, .textBox-body, .minWrapper").css({"padding-bottom": "140px"});
    $(".textBox").css({"padding-bottom": "30px"});

    $("#logo_lrg").css({"line-height": '35px', "font-size-adjust": "0.375"});
    $("#logo_sm").css({"line-height": '35px', "font-size-adjust": "0.375"});

    // console.log('this is firefox!');
} else if (navigator.userAgent.match(/Trident/i)) {
    $("#imgcontainer, .textBox-body, .minWrapper").css({"padding-bottom": "130px"});
    $(".textBox").css({"padding-bottom": "30px"});

    // console.log('this is internetExplorer');
} else {

}
