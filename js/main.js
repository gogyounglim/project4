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
                $('.container4_1').animate({'opacity':'1'},1000);
            }
            
        }); 
    });

    $(window).scroll(function(){
        $('#container4').each( function(){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $('.container5_Text').animate({'opacity':'1','margin':'0 auto'},1000);
                $('.container5_1_Box1 div:nth-child(1)').animate({'opacity':'1','margin':'0 auto'},1500);
                $('.container5_1_Box1 div:nth-child(2)').animate({'opacity':'1','margin':'0 auto'},1000);
                $('.container5_1_Box1 div:nth-child(3)').animate({'opacity':'1','margin':'0 auto'},1800);
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

// next
$(function() {
    $('.next').click(function(){
        if($('.slides').css('left')=='-390px' ){
            $('.slides').stop().animate({left:-775},200, function(){

                $('.slides li:first').appendTo('.slide');
    
            });
        }     
        else if($('.slides').css('left')=='0px' ) {
            $('.slides').stop().animate({left:-390},200, function(){

                $('.slides li:first').appendTo('.slide');
    
            });
        }
        else if($('.slides').css('left')=='-775px' ) {
            $('.slides').stop().animate({left:-1170},200, function(){

                $('.slides li:first').appendTo('.slide');
    
            });
        }
        else if($('.slides').css('left')=='-1170px' ) {
            $('.slides').stop().animate({left:-1560},200, function(){

                $('.slides li:first').appendTo('.slide');
    
            });
        }
        
        else{

        }



    });
});

// prev
$(function() {
    $('.prev').click(function(){
        if($('.slides').css('left')=='-775px' ){
            $('.slides').stop().animate({left:-390},200, function(){

                $('.slides li:first').appendTo('.slide');
    
            });
        }     
        else if($('.slides').css('left')=='-390px' ){
            $('.slides').stop().animate({left:0},200, function(){

                $('.slides li:first').appendTo('.slide');
    
            });

        }
        else if($('.slides').css('left')=='-1170px' ){
            $('.slides').stop().animate({left:-775},200, function(){

                $('.slides li:first').appendTo('.slide');
    
            });

        }
        else if($('.slides').css('left')=='-1560px' ){
            $('.slides').stop().animate({left:-1170},200, function(){

                $('.slides li:first').appendTo('.slide');
    
            });

        }
        else{

        }



    });
});





