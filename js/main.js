/**
 * Created by Administrator on 2015/11/18.
 */

//�߶�����Ļ
function height_screen(name){
    $('.'+name).height($(window).height()).css("overflow","hidden");
}

$(document).ready(function(){

    //�߶�����Ļ
    height_screen("height_screen");

})