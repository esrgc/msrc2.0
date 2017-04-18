var $membersUL = $(".members");

var $comOpen = $(".advisCommittees").click(function() {
    var $advisMins = $(".advisMins");
    var $header = $(this);
    $header.find(".toggle-close").toggleClass("toggle-open");
    /*get next element*/
    /*alert($header.attr('id'));*/
    var $content = $header.find('ul');
    /*open the content needed*/
    $content.stop(true, true).slideToggle(500, function() {
        /*execute this after toggle slide is done*/
        /*alert($content.attr('id'));*/
        $header.addClass(function() {
            return $content.is(":visible");
        });
    });

    $content.find('ul').slideToggle(500);

    var $sliceMin = $content.attr('id').substr(3);
    /*console.log($slideMin);*/
    var $openMin = '#advisMin-' + $sliceMin;
    /*console.log($openMin);*/
    /*console.log($openMin.slideToggle(500));*/

    $($openMin).stop(true, true).slideToggle(500, function() {
        $header.addClass(function() {
            return $($openMin).is(':visible');
        });
    });

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
