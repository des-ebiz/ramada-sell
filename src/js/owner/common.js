$(function(){
    //console.log('common');
    menuFn();
});
 

//menu function
function menuFn(){
    var gnb = $('.gnb .menu');
    
    gnb.find('li[class*="item-"] > a').on('mouseover', function(){
        gnb.find('.sub-menu').stop().slideUp();
        $(this).siblings('.sub-menu').stop().slideDown();
    });
    
     gnb.on('mouseleave', function(){
        $(this).find('.sub-menu').stop().slideUp();
    });
}