/* GLOBAL SITE PARAMETERS */
var g_NavigationFolders = ["alu-drvo", "aluminijum", "pvc", "galerija", "ostalo", "usluge", "kontakt"];
var g_MobFhoneNumber = "+ 381 63 1782824";
var g_StreetAddress = {
    streetName: "Petra Drapšina BB",
    streetNo: "", 
    city: "Mladenovac",
    zipCode: "",
    country: "Srbija",
    streetLatitude: "44.448165",
    streetLongitude: "20.68884"
};
var g_EmailAddress = "finestra.rs@gmail.com";
var g_FacebookUrl = "https://www.facebook.com/pages/Finestra/205209232986302";
var g_TwitterUrl = "http://www.twitter.com";

/* EVENTS */
/* Page load event -  initialization functions executed on Document ready event*/
$(document).ready(function () {
    // Set contact dat on the page
    setGlopalSiteParameters();

    // Temporary highlights currently selected navigation item
    highlightCurrentNavigationItem();

    // render footer menu
    renderFooter();

    if ($('.homepage').length > 0) {
        // Unislider initialization
        activateHomepageSlider();
    }
    if ($('.content-page').length > 0 || $('.gallery-page').length > 0) {
        // Magnific popup initialization
        activateMagnificPopup();
    }
    if ($('.contact-page').length > 0) {
        // Google map initialization
        initializeGoogleMap();
    }
});

/* Main navigation menu hover event - adding delay for drop down menu */

$('#header-main-nav > ul > li').hover(
    // mouse in
    function () {
        jQuery('ul', this).addClass('hover');
        //jQuery('ul', this).doTimeout('hover', 250, 'addClass', 'hover');
    },
    // mouse out
    function () {
        jQuery('ul', this).removeClass('hover');
        //jQuery('ul', this).doTimeout('hover', 250, 'removeClass', 'hover');
    }
);

/* Main navigation menu hover event - adding delay for drop down menu */
/*
var i = function () {
    jQuery('ul', this).addClass('hover');
};
var o = function () {
    jQuery('ul', this).removeClass('hover');
};
$('#header-main-nav > ul > li').hoverIntent({
    // mouse in
    over: i,
    // mouse out
    out: o
});
*/


/* HELPER FUNCTIONS */
/* Home Page Slider initialization function */
var activateHomepageSlider = function () {
    $('.banner').unslider({
        speed: 500,                 //  The speed to animate each slide (in milliseconds)
        delay: 5000,                //  The delay between slide animations (in milliseconds)
        complete: function () { },  //  A function that gets called after every slide animation
        keys: true,                 //  Enable keyboard (left, right) arrow shortcuts
        dots: true,                 //  Display dot navigation
        fluid: true                 //  Support responsive design. May break non-responsive designs
    });
};

/* Magnific popup initialization function */
var activateMagnificPopup = function () {
    $('.popup-image').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        closeBtnInside: false
    });

    $('.img-gallery').each(function() {
        $(this).magnificPopup({
            delegate: 'a', 
            closeBtnInside: false,
            type: 'image',
            gallery: { enabled: true }
        })
    });
};

/* Function which initializes google map on contac us page */
function initializeGoogleMap() {
    var map_canvas = document.getElementById('map_canvas');
    var map_options = {
        center: new google.maps.LatLng(44.624686, 20.36293),
        zoom: 9,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        scrollwheel: false
    }
    var map = new google.maps.Map(map_canvas, map_options)
    var markLatLng = new google.maps.LatLng(g_StreetAddress.streetLatitude, g_StreetAddress.streetLongitude);
    var marker = new google.maps.Marker({
        position: markLatLng,
        map: map,
        title: "Finestra"
    });
}

/* Fnction which generates footer menies based on main navigation meny items - this one is not doen yet, it is hardcoded and it requires improvement*/
var renderFooter = function () {
    var contentWidth = $('#content').width();
    var footerContent = $('#footer-content');
    var footerNav = $('#footer-nav');
    var footerNavColWidth = $('.footer-nav-col').width();
    var footerContact = $('#footer-contact');
    var footerContactPaddings = footerContact.padding().left + footerContact.padding().right;
    
    // set widths
    //footerNav.width(((footerNavColWidth * 3) <= contentWidth) ? (footerNavColWidth * 3) : (contentWidth - 30));
    //footerContact.width(footerContent.width() - footerNav.width() - footerContactPaddings - 40);
    //$('#google-map').width(footerContact.width());
    //$('#google-map').height(($('#google-map').width()/3) * 2);

    // set navigation
    var navColumns = $('.footer-nav-col');
    for (var i = 0; i < navColumns.length; i++) {
        if (i == 0) {
            $('#nav-alu-drvo > div').clone().appendTo(navColumns[i]);
            $('#nav-pvc > div').clone().appendTo(navColumns[i]);
        }
        else if (i == 1) {
            $('#nav-aluminijum > div').clone().appendTo(navColumns[i]);
            $('#nav-usluge > div').clone().appendTo(navColumns[i]);
        }
        else if (i == 2)
            $('#nav-ostalo > div').clone().appendTo(navColumns[i]);
    }

    // remove unnecessery elements
    $('.footer-nav-col div ul li ul').remove();
    $('.footer-nav-col div ul').removeClass('sub-nav-ul');

    // set height
    footerContent.height($('#footer-content > ul').height() + $('#footer-terms').height());

}

/* Sets global site parameters onto the current page */
var setGlopalSiteParameters = function () {
    var mobFhoneNumberFields = $('.mobile-phone-value');
    var streetAddressFields = $('.street-address-value');
    var emailAddressFields = $('.email-address-value');
    var facebookFields = $('.facebook-url-value');
    var twitterFields = $('.twitter-url-value');

    for (var i = 0; i < mobFhoneNumberFields.length; i++)
        mobFhoneNumberFields[i].innerHTML += g_MobFhoneNumber;

    for (var i = 0; i < streetAddressFields.length; i++)
        streetAddressFields[i].innerHTML += g_StreetAddress.streetName + (g_StreetAddress.streetNo == "" ? "" : g_StreetAddress.streetNo) + ", " + g_StreetAddress.city.toUpperCase();

    for (var i = 0; i < emailAddressFields.length; i++) {
        emailAddressFields[i].innerHTML += g_EmailAddress;
        emailAddressFields[i].href = "mailto:" + g_EmailAddress;
    }

    for (var i = 0; i < facebookFields.length; i++) {
        facebookFields[i].href = g_FacebookUrl;
        facebookFields[i].title = "Posetite nas na Facebook-u";
    }

    for (var i = 0; i < twitterFields.length; i++) {
        twitterFields[i].href = g_TwitterUrl;
        twitterFields[i].title = "Posetite nas na Twitter-u";
    }
}

/* Function that highlight currently selected content page */
var highlightCurrentNavigationItem = function () {
    var urlPathElements = window.location.pathname.split('/');

    if (urlPathElements.length <= 1) return;

    var currentFolder = urlPathElements[urlPathElements.length - 2];

    for (var i = 0; i < g_NavigationFolders.length; i++) {
        if (g_NavigationFolders[i] == currentFolder)
            $('#nav-' + currentFolder.replace('_', '-')).css('color', '#EF4135');
    }
}
