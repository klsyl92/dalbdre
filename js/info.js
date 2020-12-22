$(function(){
    //메뉴
    /*$('.more').click(function(){
       $('nav').show();
    });
    $('.closeBtn1').click(function(){
       $('nav').hide(); 
    });*/
    
    $('nav').css({'left':'-375px'});
    $('.more').click(function(){
       $('nav').animate({'left':'0'}, 500);
    });
    $('.closeBtn1').click(function(){
       $('nav').animate({'left':'-375px'}, 500); 
    });
});