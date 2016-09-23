/*canvas go*/



$(function(){
 
//---------------------------------------- 旋转八卦-----------------------------------------------------
//获取画布对象
   var cvs = document.getElementById("cvs_bagua");
   //画布获取语境对象
   var cxt = cvs.getContext("2d");

//黑色左半圆
cxt.beginPath();
cxt.arc(50,50,50,0.5*Math.PI,Math.PI*1.5,false);
cxt.fillStyle="black";
cxt.closePath();
cxt.fill();

//白色右半圆
cxt.beginPath();
cxt.arc(50,50,50,0.5*Math.PI,Math.PI*1.5,true);
cxt.fillStyle="white";
cxt.closePath();
cxt.fill();

//上方白色大圆
cxt.beginPath();
cxt.arc(50,25,25,0,Math.PI*2,true);
cxt.fillStyle="white";
cxt.closePath();
cxt.fill();

//下方黑色大圆
cxt.beginPath();
cxt.arc(50,75,25,0,Math.PI*2,true);
cxt.fillStyle="black";
cxt.closePath();
cxt.fill();

//上方黑色小圆
cxt.beginPath();
cxt.arc(50,25,5,0,Math.PI*2,true);
cxt.fillStyle="black";
cxt.closePath();
cxt.fill();

//下方白色小圆
cxt.beginPath();
cxt.arc(50,75,5,0,Math.PI*2,true);
cxt.fillStyle="white";
cxt.closePath();
cxt.fill();
 
//画布旋转
cvs = $(cvs);
cvs.addClass('rotate_true');

//---------------------------------------- 旋转八卦-----------------------------------------------------



//----------------------------小鸟---------------------------------------------------------------------
var cvs_bird = document.getElementById("cvs_bird");

/////////////////获取坐标测试
$('#cvs_bird').mousemove(function(e){
    var x = e.clientX;
    var y = e.clientY;
    
    var thisx = $(this).offset().left;
    var thisy = $(this).offset().top;
    
    var scry = $('body').scrollTop();
    
    var zx = x-thisx;
    var zy = y-(thisy-scry);

    $('#ckxtest').html('X坐标：'+zx+'<br>Y坐标：'+zy);
    
});
$('#cvs_bird').mouseout(function(){
   $('#ckxtest').empty(); 
});
////获取坐标测试



var ctx_bird = cvs_bird.getContext("2d");
ctx_bird.strokeStyle="red";

//鸟嘴
ctx_bird.moveTo(100,20);
ctx_bird.lineTo(50,60);
ctx_bird.lineTo(100,100);
ctx_bird.moveTo(50,60);
ctx_bird.lineTo(80,65);
ctx_bird.stroke();

//鸟头
ctx_bird.beginPath();
ctx_bird.arc(130,60,50,0,2*Math.PI,true);
ctx_bird.closePath();
ctx_bird.stroke();

//鸟眼睛
ctx_bird.fillStyle="black";
ctx_bird.beginPath();
ctx_bird.arc(135,50,10,0,2*Math.PI,true);
ctx_bird.closePath();
ctx_bird.fill();

//鸟身体
ctx_bird.beginPath();
ctx_bird.moveTo(415,130);
ctx_bird.lineTo(205,50);
ctx_bird.arcTo(160,70,165,125,50);
ctx_bird.lineTo(370,210);
ctx_bird.arcTo(410,185,415,130,80);
ctx_bird.closePath();
ctx_bird.stroke();

//鸟尾巴
ctx_bird.fillStyle="red";
ctx_bird.beginPath();
ctx_bird.moveTo(380,160);
ctx_bird.lineTo(490,150);
ctx_bird.arcTo(492,180,460,200,50);
ctx_bird.lineTo(370,180);
ctx_bird.lineTo(380,160);
ctx_bird.closePath();
ctx_bird.fill();

//鸟腿
ctx_bird.moveTo(280,160);
ctx_bird.lineTo(265,235);
ctx_bird.lineTo(255,245);
ctx_bird.moveTo(265,235);
ctx_bird.lineTo(255,235);
ctx_bird.moveTo(265,235);
ctx_bird.lineTo(265,245);
ctx_bird.moveTo(310,180);
ctx_bird.lineTo(295,255);
ctx_bird.lineTo(285,265);
ctx_bird.moveTo(295,255);
ctx_bird.lineTo(285,255);
ctx_bird.moveTo(295,255);
ctx_bird.lineTo(295,265);
ctx_bird.stroke();

//文字
ctx_bird.save(); 
ctx_bird.fillStyle="black";
ctx_bird.textBaseline="middle";
ctx_bird.globalAlpha="0.4"; 
ctx_bird.textAlign="center"; 
ctx_bird.font="32px Arial"; 
ctx_bird.shadowColor="rgba(0,0,0,0.2)"; 
ctx_bird.shadowOffsetX=10; 
ctx_bird.shadowOffsetY=-10; 
ctx_bird.shadowBlur=2; 
ctx_bird.fillText('小鸟',300,30);//IE不支持   
ctx_bird.restore();


//----------------------------小鸟---------------------------------------------------------------------




//---------------------------------刮刮卡---------------------------------------------------------
var cvs_rubber = document.getElementById("cvs_rubber");
var ctx_rubber = cvs_rubber.getContext("2d");

//绘制卡片蒙版层
ctx_rubber.fillStyle="#999999";
ctx_rubber.fillRect(0,0,320,400);
ctx_rubber.fill();

//鼠标移动刮卡
//鼠标按下开始可以刮卡
$(cvs_rubber).mousedown(function(){
    
    //取消鼠标按住后，不再能刮卡
    $(document).mouseup(function(){
        $(cvs_rubber).off('mousemove');
        });
        
        
    //在鼠标按下的同时移动，开始刮卡
    $(cvs_rubber).mousemove(function(e){
        
        
        //相对屏幕，鼠标位置
        var e_screen_x = e.clientX;
        var e_screen_y = e.clientY;
        
        //canvas画布在文档中的位置
        var cvs_x = $(cvs_rubber).offset().left;
        var cvs_y = $(cvs_rubber).offset().top;
        
        //文档滚动距离
        var doc_scroll_x = $(document).scrollLeft();
        var doc_scroll_y = $(document).scrollTop();
        
        //鼠标在canvas画布中的位置
        var e_cvs_x = (doc_scroll_x+e_screen_x)-cvs_x;
        var e_cvs_y = (doc_scroll_y+e_screen_y)-cvs_y;
       
          console.log(e_cvs_x+":"+e_cvs_y);
        
        //以鼠标位置为中心画圆,圆圈内的部分透明。
        ctx_rubber.beginPath();
        ctx_rubber.arc(e_cvs_x,e_cvs_y,20,0,2*Math.PI,true);
        ctx_rubber.fill();
        ctx_rubber.globalCompositeOperation = "destination-out";
        ctx_rubber.closePath();
        
        
        //计算透明部分所占图片比例
        var datas = ctx_rubber.getImageData(0,0,320,400);
        console.log(datas);
        var num = 0;
        
        for(i=0;i<datas.data.length;i++){
            if(datas.data[i]==0){
                num++;
            }
        }
        
        //当透明区域大于设定后，将蒙版清除，完全显示下方图片
        if(num>datas.data.length*0.8){
            ctx_rubber.fillRect(0,0,320,400);
        }
        
    });
   
    
    
});


//---------------------------------刮刮卡---------------------------------------------------------





//---------------------时钟------------------------------------------------------------------

draw();
function draw() {
var canvas=document.getElementById('cvs_clock');
var context=canvas.getContext('2d');
context.save(); ///////////////////////////////////保存
context.translate(200,200); //重新映射0 0 位置
var deg=2*Math.PI/12;    
//////////////////////////////////////////////////表盘
context.save();    
//context.beginPath();  
//
////多边形表盘
////for(var i=0;i<13;i++){
////var x=Math.sin(i*deg);
////var y=-Math.cos(i*deg);
////context.lineTo(x*150,y*150);    
////}
//
////圆形表盘
//context.arc(0,0,150,0,2*Math.PI,true);
//
//var c=context.createRadialGradient(0,0,0,0,0,130); //圆形渐变色
//c.addColorStop(0,"#eeeeee");
//c.addColorStop(1,"#999999")
//context.fillStyle=c;
//context.fill();
//context.closePath();    
context.restore();    
//////////////////////////////////////////////////数字
context.save();
context.beginPath();
for(var i=1;i<13;i++){
var x1=Math.sin(i*deg);
var y1=-Math.cos(i*deg);
context.fillStyle="#fff";
context.font="bold 20px Calibri";
context.textAlign='center';
context.textBaseline='middle';
context.fillText(i,x1*120,y1*120);    
}
context.closePath();    
context.restore();    
//////////////////////////////////////////////////大刻度
context.save();
context.beginPath();    
for(var i=0;i<12;i++){
var x2=Math.sin(i*deg);
var y2=-Math.cos(i*deg);
context.moveTo(x2*148,y2*148);
context.lineTo(x2*135,y2*135);    
}    
context.strokeStyle='#fff';
context.lineWidth=4;
context.stroke();
context.closePath();
context.restore();    
//////////////////////////////////////////////////小刻度
context.save();
var deg1=2*Math.PI/60;
context.beginPath();    
for(var i=0;i<60;i++){
var x2=Math.sin(i*deg1);
var y2=-Math.cos(i*deg1);
context.moveTo(x2*146,y2*146);
context.lineTo(x2*140,y2*140);    
}    
context.strokeStyle='#fff';
context.lineWidth=2;
context.stroke();
context.closePath();    
context.restore();    
///////////////////////////////////////////////////文字
context.save();
context.strokeStyle="#fff";
context.font=' 34px sans-serif';
context.textAlign='center';
context.textBaseline='middle';
context.strokeText('几点啦？',0,65);    
context.restore();    
/////////////////////////////////////////////////new Date
var time=new Date();
var h=(time.getHours()%12)*2*Math.PI/12;
var m=time.getMinutes()*2*Math.PI/60;
var s=time.getSeconds()*2*Math.PI/60;

////////////////////////////////////////////////时针
context.save();
context.rotate( h + m/12 + s/720) ;
context.beginPath();
context.moveTo(0,6);
context.lineTo(0,-85);
context.strokeStyle="#fff";
context.lineWidth=6;
context.stroke();
context.closePath();
context.restore();
//////////////////////////////////////////////分针
context.save();
context.rotate( m+s/60 ) ;
context.beginPath();
context.moveTo(0,8);
context.lineTo(0,-105);
context.strokeStyle="#fff";
context.lineWidth=4;
context.stroke();
context.closePath();
context.restore();
/////////////////////////////////////////////秒针
context.save();
context.rotate( s ) ;
context.beginPath();
context.moveTo(0,10);
context.lineTo(0,-120);
context.strokeStyle="#fff";
context.lineWidth=2;
context.stroke();
context.closePath();
context.restore();    
context.restore();/////////////////////////////栈出
setTimeout(draw, 1000);/////////////////////////////计时器

}


//---------------------时钟------------------------------------------------------------------

 
})
