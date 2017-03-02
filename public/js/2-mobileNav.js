/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* 
 * Author: Carl Flint, ESRGC
 */

// responsive nav function
function mobileNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "nav navbar-nav navbar-right text-vertical-center") {
        x.className += " responsive";
    } else {
        x.className = "nav navbar-nav navbar-right text-vertical-center";
    }
}

/////////////////////////////////////////////////////////////////
// download document function for linking to a div
// downloadable pdf will open in new windows
// word.doc and .docx will download without window change
function downloadLink(url) {
    var i = window.open(url, '_blank');
    i.focus();
}
// tiny routing function
function divRouter(url) {
    window.location.href = url;
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////