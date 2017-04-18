/*open advis tab and if exec tab open close it*/
$("#advisGroup").click(function(e) {
    e.preventDefault();
    if ($("#execDiv").is(":visible")) {
        $("#rightDiv").find('#execDiv').toggle("slide");
    }

    $("#rightDiv").find('#advisDiv').toggle("slide");
});
