$(document).ready(function() {
    $('.sliderText').animate({'opacity':'1'},1000);
});



$(document).ready(function() {

    $(window).scroll(function(){
        $('.container1_1topText').each( function(){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $('#container1').animate({'opacity':'1','margin':'0 auto'},1000);
            }
            
        }); 
    });

    $(window).scroll(function(){
        $('.container3Animate').each( function(){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $('#container3').animate({'opacity':'1','margin':'0 auto'},1000);
            }
            
        }); 
    });
});

$(document).ready(function() {
    $(window).scroll(function(){
        $('.container2_topText').each( function(){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $('.container2_topText').animate({'opacity':'1','margin':'0 auto'},1000);
                $('#container2').animate({'opacity':'1','margin':'0 auto'},1000);
            }
            
        }); 
    });

    
});



