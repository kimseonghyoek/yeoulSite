$(document).ready(function() {
    $("#headers").load("navbar.html");
    $("#footer").load("footer.html");
})


$(document).ready(function() {
    $('.single-item').slick({
        autoplay: true,
        autoplaySpeed: 1500,
        prevArrow: false,
        nextArrow: false,
        
    });
}) 