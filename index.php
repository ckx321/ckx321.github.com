<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>首页</title>
<link href="css/global.css" rel="stylesheet" />
<link href="css/normalize.css" rel="stylesheet" />
<link href="css/iconfont.css" rel="stylesheet" />
<link href="css/common.css" rel="stylesheet" />
	</head>
	<body>
		<h1 class="cenh1">个人主页</h1>
		
		<form id="form1" name="form1" method="get" action="#" onsubmit="return toVaild()" >
			<input id="read_contip" name="read_contip"  type="text"  />
			<input id="read_btn" name="read_btn" type="submit" value="朗读">
		</form>
		
		
		
		<?php
		
		if(isset($_GET["read_contip"])){
			
			//设置header
			header("Content-Type:audio/mp3");
			//获取要朗读的文字
			$read_text = $_GET["read_contip"];

			//转化url
			$get_url = 'http://tsn.baidu.com/text2audio?tex='.$read_text.'&lan=zh&tok=24.2db1d93877c0ddd009ba95e365265f90.2592000.1473497417.282335-8491128&ctp=1&cuid=F4-8E-38-7C-5D-C5&spd=5&pit=5&vol=5&per=0';

		    //初始化
		    $curl = curl_init();
		    //设置抓取的url
		    curl_setopt($curl, CURLOPT_URL, $get_url);
		    //设置头文件的信息作为数据流输出
		    curl_setopt($curl, CURLOPT_HEADER, 1);
		    //设置获取的信息以文件流的形式返回，而不是直接输出。
		    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
		    //执行命令
		    $data = curl_exec($curl);
		    //关闭URL请求
		    curl_close($curl);
		    //显示获得的数据
		    print_r($data);
		}
		
		
		?>
		
		
		
		<!--引用jquery-->
		<footer>
			<script src="js/jquery-1.11.0.min.js"></script>
			<script>
			 function toVaild(){
                 //获取要朗读的信息
                 var info = $.trim($("#read_contip").val());
                 if(info == ""||info==null){
                 	alert("没有要朗读的内容");
                 	return false;
                 }else{
                 	return true;
                 }
                 
             }
			</script>
		</footer>
		
	</body>
</html>
