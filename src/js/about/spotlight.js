var $clickSpotlight = $('#spotlight-container');
/*make images clickable*/
$clickSpotlight.on('click', '.gridItem', function(e) {
    e.preventDefault();
    /*on click pull up div*/
    var $attrID = $(this).attr('id');
    var sliceID = $attrID.substr(10);

    if (sliceID == 'broadband') {
        if ($("#broadband").is(":hidden")) {
            $('.textBox').hide("slow");
            $('#broadband').toggle('slide');
        } else {}
    } else if (sliceID == 'tech') {
        if ($("#tech").is(":hidden")) {
            $('.textBox').hide("slow");
            $('#tech').toggle('slide');
        } else {}
    } else if (sliceID == 'health') {
        if ($("#health").is(":hidden")) {
            $('.textBox').hide("slow");
            $('#health').toggle('slide');
        } else {}
    } else if (sliceID == 'gis') {
        if ($("#gis").is(":hidden")) {
            $('.textBox').hide("slow");
            $('#gis').toggle('slide');
        } else {}
    } else if (sliceID == 'data') {
        if ($("#data").is(":hidden")) {
            $('.textBox').hide("slow");
            $('#data').toggle('slide');
        } else {}
    } else if (sliceID == 'ceds') {
        if ($("#ceds").is(":hidden")) {
            $('.textBox').hide("slow");
            $('#ceds').toggle('slide');
        } else {}
    } else if (sliceID == 'must') {
        if ($("#must").is(":hidden")) {
            $('.textBox').hide("slow");
            $('#must').toggle('slide');
        } else {}
    } else if (sliceID == 'funding') {
        if ($("#funding").is(":hidden")) {
            $('.textBox').hide("slow");
            $('#funding').toggle('slide');
        } else {}
    } else if (sliceID == 'bizDev') {
        if ($("#bizDev").is(":hidden")) {
            $('.textBox').hide("slow");
            $('#bizDev').toggle('slide');
        } else {}
    } else {
        //$sliceID.toggle('slide');
    }
});
