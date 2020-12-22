$(function(){
    //메뉴탭 누르면 바뀌는
    $('header ul li').click(function(){
        //$('.box ul li a').removeClass('on');
        $(this).siblings().find('a').removeClass('on');
        $(this).find('a').addClass('on'); // .children자식만, .find자손까지
        
        var i = $(this).index();
        //console.log(i);
        $('section > div').hide();
        $('section > div').eq(i).show();
        
        return false;
    });
});