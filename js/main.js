// 메인기본효과 



$(document).ready(function() {
    $('.sliderText').animate({'opacity':'1'},1000);
    


    $('#showRight').click(function(){
            $(".cbp-spmenu-right").css("right","0");
    });
    $('#Xbt').click(function(){
        $(".cbp-spmenu-right").css("right","-240px");
    });





});






$(document).ready(function() {



    $(window).scroll(function(){
        $('#container6').each( function() {
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $('#container7').animate({'opacity':'1','margin':'0 auto'},1000);  
            }
        
        }); 
    });

    $(window).scroll(function(){
        $('.container1_1topText').each( function() {
            
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



    $('#container5').each( function(){
        
        var bottom_of_element = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        
        if( bottom_of_window > bottom_of_element ){
            $('#container6').animate({'opacity':'1','margin':'0 auto'},1000);
            
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

// if(matchMedia("screen and (max-width: 1200px)").matches){
    
// }
// else{

// }


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

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-80px";
    }
  }



// 라디오 버튼
  $(function(){
    $('.radiobt button:nth-of-type(1)').click (() => {
        $('.container6_1review1').fadeIn();
        $('.container6_1review2').hide();
        $('.container6_1review3').hide();
        $('.container6_1review4').hide();

        $('.radiobt button:nth-of-type(1)').css('background-color','rgb(109, 109, 109)')
        $('.radiobt button:nth-of-type(2)').css('background-color','#999')
        $('.radiobt button:nth-of-type(3)').css('background-color','#999')
        $('.radiobt button:nth-of-type(4)').css('background-color','#999')
    });

    $('.radiobt button:nth-of-type(2)').click (() => {
        $('.container6_1review1').hide();
        $('.container6_1review2').fadeIn();
        $('.container6_1review3').hide();
        $('.container6_1review4').hide();

        $('.radiobt button:nth-of-type(2)').css('background-color','rgb(109, 109, 109)')
        $('.radiobt button:nth-of-type(1)').css('background-color','#999')
        $('.radiobt button:nth-of-type(3)').css('background-color','#999')
        $('.radiobt button:nth-of-type(4)').css('background-color','#999')
    });

    $('.radiobt button:nth-of-type(3)').click (() => {
        $('.container6_1review1').hide();
        $('.container6_1review2').hide();
        $('.container6_1review3').fadeIn();
        $('.container6_1review4').hide();

        $('.radiobt button:nth-of-type(3)').css('background-color','rgb(109, 109, 109)')
        $('.radiobt button:nth-of-type(2)').css('background-color','#999')
        $('.radiobt button:nth-of-type(1)').css('background-color','#999')
        $('.radiobt button:nth-of-type(4)').css('background-color','#999')
    });

    $('.radiobt button:nth-of-type(4)').click (() => {
        $('.container6_1review1').hide();
        $('.container6_1review2').hide();
        $('.container6_1review3').hide();
        $('.container6_1review4').fadeIn();

        $('.radiobt button:nth-of-type(4)').css('background-color','rgb(109, 109, 109)')
        $('.radiobt button:nth-of-type(2)').css('background-color','#999')
        $('.radiobt button:nth-of-type(3)').css('background-color','#999')
        $('.radiobt button:nth-of-type(1)').css('background-color','#999')
    });
});


var menuLeft = document.getElementById( 'cbp-spmenu-s1' ),
		menuRight = document.getElementById( 'cbp-spmenu-s2' ),
        menuRight2 = document.getElementsByClassName('cbp-spmenu-right'),
		menuTop = document.getElementById( 'cbp-spmenu-s3' ),
		menuBottom = document.getElementById( 'cbp-spmenu-s4' ),
		showLeft = document.getElementById( 'showLeft' ),
		showRight = document.getElementById( 'showRight' ),
		showTop = document.getElementById( 'showTop' ),
		showBottom = document.getElementById( 'showBottom' ),
		showLeftPush = document.getElementById( 'showLeftPush' ),
		showRightPush = document.getElementById( 'showRightPush' ),
		body = document.body;


// showRight.onclick = function() {
//     classie.toggle( this, 'active' );
//     classie.toggle( menuRight, 'cbp-spmenu-open' );
//     disableOther( 'showRight' );
// };

// function disableOther( button ) {

// 	if( button !== 'showRight' ) {
// 		classie.toggle( showRight, 'disabled' );
// 	};

// }




