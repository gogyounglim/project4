$(function() {
    $('.next').click(function(){
        if($('.slides').css('left')=='0px' ){
            $('.slides').stop().animate({left:-300},200, function(){

                $('.slides li:first').appendTo('.slide');
    
            });
        }     
        
        else{

        }



    });
});

$(function() {
    $('.prev').click(function(){
        if($('.slides').css('left')=='-300px' ){
            $('.slides').stop().animate({left:0},200, function(){

                $('.slides li:first').appendTo('.slide');
    
            });
        }     
        
        else{

        }



    });
});