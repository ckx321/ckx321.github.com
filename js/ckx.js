/**
 * Created by Administrator on 2015/10/26.
 */

$(document).ready(function(){

    //������������
    $('body').scrollspy({ target: '.ckx1' });

    //������ת����
    $('a.page_scroll').bind('click',function(event){
        var $author = $(this).attr('href');

        if($author=="#page-top"){
            $('html,body').stop().animate({
                scrollTop: $('html,body').offset().top
            }, 1000, 'linear');
        }else {
            $('html,body').stop().animate({
                scrollTop: $($author).offset().top
            }, 1000, 'linear');
        }
        event.preventDefault(); //ȡ��a��ǩ��Ĭ�϶���
    })


    //�̶������߶ȱ����л�
    $(window).bind("scroll",function(){
        var c_top = $(this).scrollTop();
        if(c_top>200){
            $('.navbar-fixed-top').addClass('change_bg_block');
        }else{
            $('.navbar-fixed-top').removeClass('change_bg_block');
        }
    });


//������Ϣ�л�
    $('#myinfo_select li').mouseover(function(){
        $(this).addClass('selected').siblings().removeClass('selected');
        $('#myinfo .info_for_qh').eq($(this).index()).show().siblings('.info_for_qh').hide();

    });

});
