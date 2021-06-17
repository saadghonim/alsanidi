$(document).ready(function () {

    $('.slider .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        rtl: true,
        autoplay: false,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        navText: ["<i class='fas fa-angle-right'></i>", "<i class='fas fa-angle-left'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    $('.Sections .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        items: 1,
        navText: ["<i class='fas fa-angle-right'></i>", "<i class='fas fa-angle-left'></i>"],
        rtl: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            },
            1500: {
                items: 5
            }
        }
    });

    // counter...

    $(".coun-positive").click(function () {
        var $input = $(this).parent().parent().find('.counter');
        $input.val(parseInt($input.val()) + 1);
    })


    $(".coun-negative").click(function () {
        var $input = $(this).parent().parent().find('.counter');
        $input.val(parseInt($input.val()) - 1);
        if ($input.val() <= 1) {

            $(".counter").val("1");
        };
    })

    /* xs nav */
    $(".button-mob").click(function () {
        $('.navbar').addClass('open');
        $('.moboverlay').fadeIn('fast');
        $('body').addClass('ovh');
    });

    $(".navbar .fa-times").click(function () {
        $('.navbar').removeClass('open');
        $('body').removeClass('ovh');
        $('.moboverlay').fadeOut('fast');
    });
    $('.moboverlay').click(function () {
        $(".navbar .fa-times").trigger('click');
    });

    // scroll button
    var myButton = document.getElementById('goup');
    window.onscroll = function () {
        "use strict";
        if (window.pageYOffset >= 800) {
            myButton.style.opacity = "1";

        } else {
            myButton.style.opacity = "0"
        }
    };

    myButton.onclick = function () {
        "use strict";
        window.scroll({
            top: 0,
            left: 100,
            behavior: 'smooth'
        });
    };



    $(".dropb_").on("click", function () {
        var $Indoor = $(this).parent().find('.Indoor-content');
        $(this).toggleClass('open');

        $Indoor.toggle();
    });


    if ($(window).width() < 991) {
        $(".drop_hid").removeClass("dropdown")
        $(".drop_hid").removeClass("show")
    }

    $('.bt_drop').on('click', function (event) {
        $(this).parent().toggleClass('open');
    });


});


    
// scroll button
