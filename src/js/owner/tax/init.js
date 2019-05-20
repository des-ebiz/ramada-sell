$(function(){
    tabFn();
});
 

//tab function
function tabFn(){
    var tab = $('.tab-menu li');
    tab.on('click', function(){
        var target = $(this).find('a').attr('href');
        var offsetTop = $(target).offset().top;

        $('html, body').stop().animate({
            scrollTop : (offsetTop)
        }, 800);
    });
}