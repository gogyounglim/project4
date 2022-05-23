// 메인기본효과 

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

    $(window).scroll(function(){
        $('.container4Animate').each( function(){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $('#container4').animate({'opacity':'1','margin':'0 auto'},1000);
            }
            
        }); 
    });


});

$(document).ready(function() {
    $(window).scroll(function(){
        $('.container2Animate').each( function(){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $('.container2_topText').animate({'opacity':'1','margin':'0 auto'},1000);
                $('#container2').animate({'opacity':'1','margin':'0 auto'},1000);
            }
            
        }); 
    });
 
});



// 메인페이지 슬라이드


$(function() {
    $('.next').click(function(){
        if($('.slides').css('left')=='-390px' ){
            $('.slides').stop().animate({left:-775},800, function(){

                $('.slides li:first').appendTo('.slide');
    
            });
        }     
        else{
            $('.slides').stop().animate({left:-390},400, function(){

                $('.slides li:first').appendTo('.slide');
    
            });

        }



    });
});

$(function() {
    $('.prev').click(function(){
        if($('.slides').css('left')=='-775px' ){
            $('.slides').stop().animate({left:-390},800, function(){

                $('.slides li:first').appendTo('.slide');
    
            });
        }     
        else{
            $('.slides').stop().animate({left:0},800, function(){

                $('.slides li:first').appendTo('.slide');
    
            });

        }



    });
});





