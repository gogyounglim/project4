// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//     if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
//       document.getElementById("navbar").style.top = "0";
//     } else {
//       document.getElementById("navbar").style.top = "-80px";
//     }
//   }

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

if($('.container2_1').css('width')=='320px'){
}else{

}


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
        

    });

    $('#radioBT3').click(function(){

        if($('.container2_1').css('width')=='320px'){
            $('.slides').stop().animate({left:-580},200, function(){
                $('.slides li:first').appendTo('.slide');
            });
        }else{
            $('.slides').stop().animate({left:-1500},200, function(){
                $('.slides li:first').appendTo('.slide');
            });
        }



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

    });

    $('#radioBT5').click(function(){
        if($('.container2_1').css('width')=='320px'){
            $('.slides').stop().animate({left:-1190},200, function(){
                $('.slides li:first').appendTo('.slide');
            });
        }else{
            
        }
        

    });

    $('#radioBT6').click(function(){

        if($('.container2_1').css('width')=='320px'){
            $('.slides').stop().animate({left:-1480},200, function(){
                $('.slides li:first').appendTo('.slide');
            });
        }else{
            
        }

    });

    $('#radioBT7').click(function(){

        if($('.container2_1').css('width')=='320px'){
            $('.slides').stop().animate({left:-1800},200, function(){
                $('.slides li:first').appendTo('.slide');
            });
        }else{
            
        }

    });

    
});