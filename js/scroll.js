

    jQuery(function($) {
        var navMenu = $('.header__menu');
        var navMenuTop = navMenu.offset().top; //получение знaчения св-ва top
        var toTop   = $('.to-top');
        var body     = $('html, body');
        
        $(window).scroll(function(){
            var winScrollTopValue = $(window).scrollTop();

            if (winScrollTopValue>navMenuTop||navMenuTop>50){
                navMenu.addClass('fixed');
            }
            else if (winScrollTopValue<navMenuTop){
                navMenu.removeClass('fixed');
            }
            
            if(winScrollTopValue>1000){
                toTop.fadeIn(800);
            }
            else if (winScrollTopValue<1000){
                toTop.hide();
            }
        });

        toTop.on('click', function(event) {
            event.preventDefault();
            body.animate({scrollTop:0}, 1200);
        });
    });
