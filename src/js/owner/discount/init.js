$(function() {
    //함수실행
    groupFn();
});
   
//list 정렬 (ie8을 위해 그냥 다같이)
function groupFn(){
    var groupLen = $('.group-list').length; 
    
    for( var i = 0 ; i < groupLen ; i++ ){
        if (i % 3 == 0) {
            //console.log(i)
            $('.group-list:eq('+i+')').css({'margin-left': 0+'px'});
        }
    }
}