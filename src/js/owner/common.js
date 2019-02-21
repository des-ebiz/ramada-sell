$(function(){
    //console.log('common');
    menuFn();
    //tabFn();
    downSelFn();
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

//tab function
/*function tabFn(){
    var tab = $('.tab-menu li');
    tab.on('click', function(){
        if( $(this).hasClass('on') ){
            //console.log('true')
        }else{
            var liIndex = tab.index(this)+1;
            
            tab.removeClass('on');
            $(this).addClass('on');
            $('section[id^="tabSec"]').css({'display' : 'none'});
            $('#tabSec-'+liIndex).css({'display' : 'block'});
        }
    });
}*/

//like sel function
function downSelFn(){
    var btnSel = $(".btn-sel");
    var likeSelBox = $(".like-sel-box");
    
    btnSel.on("click", function() {
        $(this).next().slideToggle("fast");
    });
  
    likeSelBox.each(function(idx, item) {
        $(item).find(".sel-menu li a").on("click", function() {
            var thTxt = $(this).text();
            $(item).find(".sel-menu li a").removeClass('on');
            $(this).addClass('on').closest(likeSelBox).find(btnSel).html(thTxt);
            $(this).closest(likeSelBox).find(".sel-menu").slideToggle("fast");
            event.preventDefault();
        });
    });
}



