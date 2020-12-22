$(function(){
    function eachCalc(a){
        var c = a.parents('div').find('.amount').val();
        var p = a.parents('div').find('.sum').text();
        var es = parseInt(c) *parseInt(p);
        a.parents('div').find('.sum').text(es+'원');
     }
    //수량 증감 //
    $('.down').click(function(){
        var m = $(this).siblings().children('.amount').val();
        if(m<=1){m=1;}else{m--;}
        $(this).siblings().children('.amount').val(m); 
        cal();
    });    
    
    $('.up').click(function(){
        var p = $(this).siblings().children('.amount').val();
        if(p>=10){p=10;}else{p++;}
        $(this).siblings().children('.amount').val(p);
        cal();
    });
    
    function cal(){
        
        var orip = $('.sum').attr('data-v');
        var amount = $('.amount').val();
        
        var total = orip * amount;
        
        $('.sum').text(total+'원');    
        
    }
    
    
});