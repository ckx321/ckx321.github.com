/**
 * Created by Administrator on 2015/11/18.
 */

//高度满屏幕
function height_screen(name){
    $('.'+name).height($(window).height()).css("overflow","hidden");
}

$(document).ready(function(){

    //高度满屏幕
    height_screen("height_screen");

})