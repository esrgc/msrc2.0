/* setup textBox to close on click*/
$(".textBox .textBox-toggle, .records-textBox .textBox-toggle").click(function() {
    var $attrID = $(this).attr('id');
    if ($(this).is(':visible')) {
        $(this).parent().toggle('slide');
    }
});
