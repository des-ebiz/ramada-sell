$(function() {
	// Pager
	$("#pagenation a").on("click", function () {
		var idx = $(this).index();
		var lastIdx = $(this).closest("div").find("a").length;
		lastIdx--;
		//console.log(lastIdx);
		if (idx != 0 && idx != lastIdx) {
			$(this).addClass("on").siblings().removeClass("on");
		}
		event.preventDefault();
	});
    
    //FAQ answer
    $('.faq-sec .table-col td > a').on('click', function(){
        var asBox = $(this).parents('tr').next('.answer');
        if( asBox.css('display') == 'none' ){
            //console.log('click');
            //$('.faq-sec .table-col .answer').not(asBox).stop().hide();
            $('.faq-sec .table-col .answer').stop().hide();
            asBox.stop().show();
        }else{
            asBox.stop().hide();
        }
    })
});
                                            