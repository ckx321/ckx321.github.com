/**
 * Created by Administrator on 2015/11/18.
 */

$(document).ready(function(){

    $('#qh_left li').click(function(){
        $('#qh_right li').stop(true);
        var index1 = $(this).index();
       $(this).addClass('left_select').siblings().removeClass('left_select');
        $('#qh_right li').eq($(this).index()).siblings().animate({opacity:0},300,function(){
            $(this).css('display','none');
        });
        setTimeout(function(){
            $('#qh_right li').eq(index1).css('display','block').animate({opacity:1},500);
        },300);
    })

})
