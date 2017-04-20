/* Open exec tab and if advis tab open close it */
$("#execGroup").click(function(e) {
    e.preventDefault();
    e.stopPropagation();
    if ($("#advisDiv").is(":visible")) {
        $("#rightDiv").find('#advisDiv').toggle("slide");
    }
    $("#rightDiv").find('#execDiv').toggle("slide");
});
