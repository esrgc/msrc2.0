//////////////////////////////////////////////////////////////////////////////////////////////
// footer show/hide toggle
$(document).ready(function() {
    // footer slide toggle nav pane
    $("#footer_button").on('click', function(e) {
        e.preventDefault();
        $('.footer').slideToggle();
        return;
    });

});

//////////////////////////////////////////////////////////////////////////////////////////////
// footer dropdown menu for advisory committees
$(document).ready(function() {
    $("#dropdownMenuButton").click(function(e) {
        e.preventDefault();
        $(this).find('.toggle-close').toggleClass('toggle-open');
        $(".comMenu").toggle("slide");

        if ($(this).hasClass("toggle-open")) {
            $(this).removeClass("toggle-open").slideUp(500);
            return;
        }
        return false;
    });
});


/////////////////////////////////////////////////////////////////////////////////////////////


// experimental code for triggering click event based on point of entry with hash detection. 
///// on footer link activation make click events happen after new page loads

// if ("onhashchange" in window) {  
//   //alert("The browser supports the hashchange event!");  
// }  

// function locationHashChanged() {  
//   if (location.hash === "#somecoolfeature") {  
//     location.hash.trigger('click');
//   }  else {
//     document.getElementById(location.hash).click();
//   }
// }  

// window.onhashchange = locationHashChanged;


$(window).on('hashchange', function(e) {
    //alert(location.hash);
    e.preventDefault();
    //e.stopPropagation();

    if (location.hash == "#comCEDS" || location.hash == "#comEM" || location.hash == "#comGIS" || location.hash == "#comIT" || location.hash == "#comMUST") {
        //$('#footer_button').trigger('click');
        $('#advisGroup').trigger('click');
        $(location.hash).delay(300).trigger('click');

    } else if (location.hash == "#members" || location.hash == "#spotlight" || location.hash == "#records") {
        //$('#footer_button').trigger('click');

        /// cross browser functionality issues with firefox and msie
        // relative position elements become thrown to the left when open and closed

        var x = location.hash;
        //alert($x);
        $(x).delay(300).trigger('click');

        // $(document).ready(function() {

        //     var x = location.hash;
        //     //alert($x);
        //     $(x).delay(300).trigger('click');

        // });

    } else {

        $(location.hash).delay(300).trigger('click');
        //$('#footer_button').trigger('click');
    }

});

$(window).load(function() {
    if (window.location.hash) {
        //$("#footer_button").trigger('click');
        $(window).delay(300).trigger('hashchange');
    }
});
