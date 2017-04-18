var $clickRecords = $('.imgHeader2');
/*change size of item on click with toggle class*/

$clickRecords.on('click', function(e) {

    e.preventDefault();

    var $attrID = $(this).attr('id');
    var sliceID = $attrID.substr(10);
    /*console.log($attrID);*/
    /*console.log(sliceID);*/
    if (sliceID == 'theMSRC') {
        if ($("#theMSRC").is(":hidden")) {
            $('.records-textBox').hide("slow");
            $('#theMSRC').toggle('slide');
        } else {}
    } else if (sliceID == 'meetMinutes') {
        if ($("#meetMinutes").is(":hidden")) {
            $('.records-textBox').hide("slow");
            $('#meetMinutes').toggle('slide');
        } else {}
    } else {}

});

/*download document function for linking to a div*/
/*downloadable pdf will open in new windows*/
/*word.doc and .docx will download without window change*/
function downloadLink(url) {
 window.open(url, '_blank');
}

$('div#workPlanLink').on('click', function() {
 downloadLink('./documents/msrc/MSRC_FY17_Work_Plan.pdf');
});

$('div#byLawsLink').on('click', function() {
 downloadLink('./documents/msrc/MSRC_Bylaws.doc');
});
