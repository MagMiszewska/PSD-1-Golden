$(document).ready(function () {
    
    /* Sticky navigation */
    $('.js__services').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('main-nav--sticky');
        } else {
            $('nav').removeClass('main-nav--sticky');
        }
    }, {
      offset: '60px;'
    });

    /* Scroll on buttons */
    $('.js__to-about-us--scroll').click(function () {
        $('html, body').animate({ scrollTop: $('.js__about-us').offset().top }, 1000);
    });

    /* Navigation scroll */
    $(function () {
        $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function (event) {
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) {
                            return false;
                        } else {
                            $target.attr('tabindex', '-1');
                            $target.focus();
                        };
                    });
                }
            }
        });
    });

     /* Animations on scroll */
     $('.js__wp').waypoint(function(direction) {
        $('.js__wp').addClass('animated fadeInUp')
    }, {
        offset: '50%'
    });

});
