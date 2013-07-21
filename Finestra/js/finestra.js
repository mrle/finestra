$(document).ready(function() { 
    // render footer menu
    renderFooter();

    // Unislider initialization
    activateHomepageSlider();
});

var activateHomepageSlider = function() {
    $(function() {
        $('.banner').unslider({
            speed: 500,               //  The speed to animate each slide (in milliseconds)
            delay: 5000,              //  The delay between slide animations (in milliseconds)
            complete: function() {},  //  A function that gets called after every slide animation
            keys: true,               //  Enable keyboard (left, right) arrow shortcuts
            dots: true,               //  Display dot navigation
            fluid: true               //  Support responsive design. May break non-responsive designs
        });
    });
}

var renderFooter = function () {
    var footerContent = $('#footer-content');
    var footerNav = $('#footer-nav');
    var footerContact = $('#footer-contact');

    // set widths
    footerNav.width($('.footer-nav-col') * 3);
    footerContact.width(footerContent.width()  - footerNav.width());
    $('#google-map').width(footerContact.width() - 10);
    $('#google-map').height((footerContact.width()/3) * 2);

    // set navigation
    var navColumns = $('.footer-nav-col');
    for (var i = 0; i < navColumns.length; i++) {
        if (i == 0) {
            $('#nav-drvo-alu').clone().appendTo(navColumns[i]);
            $('#nav-pvc').clone().appendTo(navColumns[i]);
        }
        else if (i == 1) {
            $('#nav-alu').clone().appendTo(navColumns[i]);
            $('#nav-uslge').clone().appendTo(navColumns[i]);
        }
        else if (i == 2)
            $('#nav-ostalo').clone().appendTo(navColumns[i]);
    }
    $('.footer-nav-col div ul li ul').remove();
    $(".footer-nav-col div ul").removeClass("sub-nav-ul");

    // set height
    (footerNav.height() > footerContact.height()) ? footerContent.height(footerNav.height()) : footerContent.height(footerContact.height());

}

var setStreetAddress = function() {

}