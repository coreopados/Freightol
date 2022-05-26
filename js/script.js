$(document).ready(function () {


    $('.tabs__links__link').each(function (i, elem) {
        if ($(elem).hasClass('active')) {
            var dest = $(elem).attr('href');
            $('' + dest + '').addClass('active')
        }
    })

    $('.tabs__links__link').on('click', function () {
        event.preventDefault();
        $('.tabs__links__link, .tabs__content__block').removeClass('active')

        var el = $(this);
        var dest = el.attr('href');

        if (dest !== undefined && dest !== '') {
            $(this).addClass('active');
            $('' + dest + '').addClass('active')
        }
        return false;
    });



    //mobile-button
    $('.mobile-menu-button').on('click', function () {
        $(this).toggleClass('active')
        $('#main-menu').toggleClass('active')

    })


    //scroll tabs
    var swiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        slidesPerView: 'auto',
        freeMode: true,
        scrollbar: {
            el: '.swiper-scrollbar',
        },
        // mousewheel: true,
    });





    //contacts

    if (innerWidth < 576) {
        $('.contacto-page form').appendTo('.contacto-page .first-section')
        $('.registro-page form').appendTo('.registro-page .first-section')
    }


    //more reviews
    var num


    if (innerWidth > 768) {
        num = 3;
    } else {
        num = 2
    }


    $('.wrap-all-posts .post:lt(' + num + ')').addClass('active ')

    $('.more-posts.button').on('click', function () {
        event.preventDefault()
        if (innerWidth > 768) {
            num = num + 3
        } else {
            num = num + 2
        }


        $('.wrap-all-posts .post:lt(' + num + ')').addClass('active ')
        if ($('.wrap-all-posts .post:last').hasClass('active')) {

            $('.more-posts.button').css('visibility', 'hidden')
            $('.more-posts.button').css('display', 'none')
        }
    })


});

$(window).on('resize', function () {
    if (innerWidth < 576) {
        $('.contacto-page form').appendTo('.contacto-page .first-section')
        $('.registro-page form').appendTo('.registro-page .first-section')

    } else {
        $('.contacto-page form').insertBefore('.contacts-adress')
        $('.registro-page form').appendTo('.registro-page .first-section .title-block .text-block')
    }
})