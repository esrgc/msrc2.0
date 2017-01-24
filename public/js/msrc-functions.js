// custom page functions 
$(document).ready(function () {

// carousel rotation speed
//https://github.com/BlackrockDigital/startbootstrap-full-slider.git
    $('.carousel').carousel({
        interval: 5000 //set speed in ms
    });


// zAccordion for About page
    $("#featured").zAccordion({ 
        easing: 'easeOutBounce',
        slideWidth: 460,
        width: 700,
        height: 235
    });


});



