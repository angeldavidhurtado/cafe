$(document).ready(function(){

    // Efecto Menú

    $('header .contenedor .menu a').each( function(index, elemento) {
        $(this).css({top: '-200px'});
        $(this).animate({top: '0'}, 2000 + (index * 500));
    });

    // Efecto Header

    if ( $(window).width() > 800 ) {
        $('header .contenedor .textos').css({
            opacity: 0,
            marginTop: '243px'
        });

        $('header .contenedor .textos').animate({
            opacity: 1,
            marginTop: '191px'
        }, 1500);

    } else {
        $('header .contenedor .textos').css({
            opacity: 0,
            marginTop: '127px'
        });

        $('header .contenedor .textos').animate({
            opacity: 1,
            marginTop: '75px'
        }, 1500);
    }

    // Scroll elementos Menú

    $('#btn-acerca-de').on('click', function(e) {
        e.preventDefault();

        var acerca_de = $('#acerca-de article').offset().top;

        $('html, body').animate({
            scrollTop: acerca_de - 40
        }, 500);
    });

    $('#btn-menu').on('click', function(e) {
        e.preventDefault();

        var menu = $('.contenedor-menu').offset().top;

        $('html, body').animate({
            scrollTop: menu - 25
        }, 500);
    });

    $('#btn-galeria').on('click', function(e) {
        e.preventDefault();

        var galeria = $('#galeria').offset().top;

        $('html, body').animate({
            scrollTop: galeria - 45
        }, 500);
    });

    $('#btn-ubicacion').on('click', function(e) {
        e.preventDefault();

        var ubicacion = $('.ubicacion').offset().top;

        $('html, body').animate({
            scrollTop: ubicacion - 45
        }, 500);
    });
});
