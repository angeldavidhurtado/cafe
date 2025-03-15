$(document).ready(function(){
    var ventana = $(window);
    var textos = $('#textos');
    var articulo = $('.main .acerca-de .contenedor article');

    ventana.scroll(function(){
        var scroll = ventana.scrollTop();

        textos.css({
            transform: 'translateY(' + scroll/2 + 'px)'
        });

        if ( ventana.width() > 800 ) {
            articulo.css({
                transform: 'translateY(-' + scroll/2 + 'px)'
            });
        }
    });

    ventana.resize(function(){
        if ( ventana.width() < 800 ) {
            articulo.css({
                transform: 'translateY(0px)'
            });
        }
    });
});
