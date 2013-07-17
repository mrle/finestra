$(document).ready(function() { 
    // render footer menu
    //renderFooterMenu();
    // Unislider initialization
    $(function() {
        $('.banner').unslider({
            speed: 500,               //  The speed to animate each slide (in milliseconds)
            delay: 3000,              //  The delay between slide animations (in milliseconds)
            complete: function() {},  //  A function that gets called after every slide animation
            keys: true,               //  Enable keyboard (left, right) arrow shortcuts
            dots: true,               //  Display dot navigation
            fluid: true              //  Support responsive design. May break non-responsive designs
        });
    });
});


var renderFooterMenu = function () {
    var maxMenuItemsPerCol = 10;

    //$("#header-main-nav > ul > li > div").clone().appendTo("#footer-menu");
    //$("#footer-menu div ul li ul").remove();
    //$("#footer-menu div ul").removeClass("sub-nav-ul");

    var mainNavs = $("#header-main-nav > ul > li > div").clone();
    //for (var i = 0; )
    var count = $("#footer-menu div").length + $("#footer-menu div > ul > li").length;
    var footerMenuWidth = $("#footer-menu");
    var footerDev = $("#footer-menu > div");
    alert(count + " - " + footerDev.height() + " - " + footerMenuWidth.width());
}