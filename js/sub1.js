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
            $('.slides').stop().animate({left:-240},200, function(){

                $('.slides li:first').appendTo('.slide');
    
            });
        }        
        else{

        }

    });
    $('.prev').click(function(){
        if($('.slides').css('left')=='-240px' ){
            $('.slides').stop().animate({left:-0},200, function(){
                $('.slides li:first').appendTo('.slide')
            });
        }        
        else{

        }

    });
});