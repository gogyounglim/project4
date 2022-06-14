// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//     if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
//       document.getElementById("navbar").style.top = "0";
//     } else {
//       document.getElementById("navbar").style.top = "-80px";
//     }
//   }
$(window).resize(function(){
    if(window.innerWidth<1024){
        $('.slides').stop().animate({left:-0},200, function(){
            $('.slides li:first').appendTo('.slide')
        });
    }else if(window.innerWidth>1024){
        $('.slides').stop().animate({left:-0},200, function(){
            $('.slides li:first').appendTo('.slide')
        });
    }else if(window.innerWidth<768){
        $('.slides').stop().animate({left:-0},200, function(){
            $('.slides li:first').appendTo('.slide')
        });
    }
    $('.radiobt button:nth-of-type(1)').css('background-color','rgb(109, 109, 109)')
    $('.radiobt button:nth-of-type(2)').css('background-color','#999')
    $('.radiobt button:nth-of-type(3)').css('background-color','#999')
    $('.radiobt button:nth-of-type(4)').css('background-color','#999')
    $('.radiobt button:nth-of-type(5)').css('background-color','#999')
    $('.radiobt button:nth-of-type(6)').css('background-color','#999')
    $('.radiobt button:nth-of-type(7)').css('background-color','#999')


});


$(function() {
    $('.next').click(function(){
        if($('.slides').css('left')=='0px' ){
            $('.slides').stop().animate({left:-280},200, function(){

                $('.slides li:first').appendTo('.slide');
    
            });
        }        
        else{

        }

    });
    $('.prev').click(function(){
        if($('.slides').css('left')=='-280px' ){
            $('.slides').stop().animate({left:-0},200, function(){
                $('.slides li:first').appendTo('.slide')
            });
        }        
        else{

        }

    });
});



$(function() {


    

    $('#radioBT1').click(function(){
        if($('.container2_1').css('width')=='320px'){
            $('.slides').stop().animate({left:-0},200, function(){
                $('.slides li:first').appendTo('.slide');
            });
        }else{
            $('.slides').stop().animate({left:-0},200, function(){
                $('.slides li:first').appendTo('.slide');
            });
        }
        $('.radiobt button:nth-of-type(1)').css('background-color','rgb(109, 109, 109)')
        $('.radiobt button:nth-of-type(2)').css('background-color','#999')
        $('.radiobt button:nth-of-type(3)').css('background-color','#999')
        $('.radiobt button:nth-of-type(4)').css('background-color','#999') 

    });
    $('#radioBT2').click(function(){
        if($('.container2_1').css('width')=='320px'){
            $('.slides').stop().animate({left:-280},200, function(){
                $('.slides li:first').appendTo('.slide');
            });
        }else{
            $('.slides').stop().animate({left:-780},200, function(){
                $('.slides li:first').appendTo('.slide');
            });

        }
        $('.radiobt button:nth-of-type(1)').css('background-color','#999')
        $('.radiobt button:nth-of-type(2)').css('background-color','rgb(109, 109, 109)')
        $('.radiobt button:nth-of-type(3)').css('background-color','#999')
        $('.radiobt button:nth-of-type(4)').css('background-color','#999')
        

    });

    $('#radioBT3').click(function(){

        if($('.container2_1').css('width')=='320px'){
            $('.slides').stop().animate({left:-580},200, function(){
                $('.slides li:first').appendTo('.slide');
            });
        }else{
            $('.slides').stop().animate({left:-1520},200, function(){
                $('.slides li:first').appendTo('.slide');
            });
        }
        $('.radiobt button:nth-of-type(1)').css('background-color','#999')
        $('.radiobt button:nth-of-type(2)').css('background-color','#999')
        $('.radiobt button:nth-of-type(3)').css('background-color','rgb(109, 109, 109)')
        $('.radiobt button:nth-of-type(4)').css('background-color','#999')



    });

    $('#radioBT4').click(function(){

        if($('.container2_1').css('width')=='320px'){

            $('.slides').stop().animate({left:-880},200, function(){
                $('.slides li:first').appendTo('.slide');
            });
        }else{
            $('.slides').stop().animate({left:-2300},200, function(){
                $('.slides li:first').appendTo('.slide');
            });
            
        }
        $('.radiobt button:nth-of-type(1)').css('background-color','#999')
        $('.radiobt button:nth-of-type(2)').css('background-color','#999')
        $('.radiobt button:nth-of-type(3)').css('background-color','#999')
        $('.radiobt button:nth-of-type(4)').css('background-color','rgb(109, 109, 109)')

    });

    $('#radioBT5').click(function(){
        if($('.container2_1').css('width')=='320px'){
            $('.slides').stop().animate({left:-1190},200, function(){
                $('.slides li:first').appendTo('.slide');
            });
        }else{
            
        }
        $('.radiobt button:nth-of-type(1)').css('background-color','#999')
        $('.radiobt button:nth-of-type(2)').css('background-color','#999')
        $('.radiobt button:nth-of-type(3)').css('background-color','#999')
        $('.radiobt button:nth-of-type(4)').css('background-color','#999')
        $('.radiobt button:nth-of-type(5)').css('background-color','rgb(109, 109, 109)')

    });

    $('#radioBT6').click(function(){

        if($('.container2_1').css('width')=='320px'){
            $('.slides').stop().animate({left:-1480},200, function(){
                $('.slides li:first').appendTo('.slide');
            });
        }else{
            
        }
        $('.radiobt button:nth-of-type(1)').css('background-color','#999')
        $('.radiobt button:nth-of-type(2)').css('background-color','#999')
        $('.radiobt button:nth-of-type(3)').css('background-color','#999')
        $('.radiobt button:nth-of-type(4)').css('background-color','#999')
        $('.radiobt button:nth-of-type(5)').css('background-color','#999')
        $('.radiobt button:nth-of-type(6)').css('background-color','rgb(109, 109, 109)')

    });

    $('#radioBT7').click(function(){

        if($('.container2_1').css('width')=='320px'){
            $('.slides').stop().animate({left:-1800},200, function(){
                $('.slides li:first').appendTo('.slide');
            });
        }else{
            
        }
        $('.radiobt button:nth-of-type(1)').css('background-color','#999')
        $('.radiobt button:nth-of-type(2)').css('background-color','#999')
        $('.radiobt button:nth-of-type(3)').css('background-color','#999')
        $('.radiobt button:nth-of-type(4)').css('background-color','#999')
        $('.radiobt button:nth-of-type(5)').css('background-color','#999')
        $('.radiobt button:nth-of-type(6)').css('background-color','#999')
        $('.radiobt button:nth-of-type(7)').css('background-color','rgb(109, 109, 109)')


    });

    
});