(function (window) {
    'use strict';
    var $ = window.jQuery;
    var $nav = $("nav");
    var $toggle = $(".toggle-menu");
    var $navLink = $("nav .nav li a");
    // var offset = $nav.offset().top;
    // var y_height = $nav.outerHeight(true);
    var resizeTimer;

    $(document).scroll( function() {
        $nav.slideUp(200);
        // if ($(this).scrollTop() > offset) {
        //     $nav.addClass("fixed_nav");
        //     $("#about").css('margin-top', y_height);
        // } else {
        //     $nav.removeClass("fixed_nav");
        //     $("#about").removeAttr('style');
        // }
    });

    $toggle.click(function() {
        $nav.slideToggle(500);
    });
    $navLink.click(function() {
        $nav.slideToggle(200);
    });
    $(document).resize( function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function(e) {
            if($(window).width() > 720) {
                $nav.show();
            } else {
                $nav.hide();
            }
        }, 250);
    });

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

})(window);