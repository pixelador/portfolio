(function (window) {
    'use strict';
    var $ = window.jQuery;
    var $nav = $("nav");
    var $toggle = $(".toggle-menu");
    var $navLink = $("nav .nav li a");
    var $the_title = $("header .title");
    var resizeTimer;

    $(document).scroll( function() {
        $nav.slideUp(200);
    });

    $toggle.click(function() {
        $nav.slideToggle(500);
    });
    $navLink.click(function() {
        $nav.slideToggle(200);
    });
    // $(document).resize( function() {
    //     clearTimeout(resizeTimer);
    //     resizeTimer = setTimeout(function() {
    //         if($(window).width() > 720) {
    //             $nav.show();
    //         } else {
    //             $nav.hide();
    //         }
    //     }, 250);
    // });

    $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000);
        return false;
        }
    }
    });

    $the_title.hover( 
        function() {
            $(this).css('opacity', 0.0).html("Is it me you're looking for?").fadeTo('slow', 1.0);
        }, function() {
            $(this).css('opacity', 0.0).html("Hello.").fadeTo('slow', 1.0);
        }
    );

})(window);