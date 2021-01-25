(function($){


    jQuery(document).ready(function(){

       
        $('#scrollTop').click(function(){
            $('html, body').animate({scrollTop : 0}, 100);

        });


    });

    jQuery(window).scroll(function(){
        if ( jQuery(window).scrollTop() >250 ) {

            $('#scrollTop').fadeIn();

        } else {
            $('#scrollTop').fadeOut();
        }
        return false;
    });  


}) (jQuery); 