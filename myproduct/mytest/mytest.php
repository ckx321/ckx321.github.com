<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>测试</title>
		<link rel="stylesheet" type="text/css" href="../../css/global.css"/>
		<link rel="stylesheet" type="text/css" href="../../css/normalize.css"/>
		<link rel="stylesheet" type="text/css" href="../css/mytest.css"/>
		<script src="../../js/jquery-1.11.0.min.js" type="text/javascript" charset="utf-8"></script>
	<style type="text/css">
		.test1 li{float: left;width:calc(33.333% - (20px + 5px) * 2 - 30px);background-color: #CCCCCC;padding:20px;border:5px solid #666666;margin-right: 30px;}
	   .test3{
	       width:200px;
	       height: 200px;
	       border:1px solid #cccccc;
	       overflow: hidden;
	       
	   }
	   .test4{
	       width:200px;height: 200px;
	       background-color:#dedede;
	       transition: all 0.5s;
	       overflow: hidden;
	   }
	   .test5{
	       width:200px;
	       height: 100px;
	       position: relative;
	       background-color:#ffffff;
	       transition: all 0.5s;
	   }
	   .test3:hover .test4,
	   .test3:hover .test5{
	       margin-top:-50px;
	   }
	</style>
	
	
	</head>
	<body>
	    
	    <div class="wrap">
	    	
	    	<!--header-->
	    	<div class="header clearb">
	    		<div class="logo_out">
	    			<img class="logo" src="../../images/001.jpg" alt="logo"/>
	    		</div>
	    		<div class="info">
	    			<a href="#">登录</a>&nbsp;/&nbsp;
	    			<a href="#">注册</a>
	    		</div>
	    	</div>
	    	
	    	<!--main-->
	    	<div class="main clearb">
	    	    
	    	    <div class="c_navbar">
	    	    	<ul class="clearb">
	    	    		<li>
	    	    		    <a href="#" >首页</a>
	    	    		</li>
	    	    		<li>
                            <a href="#">第二页</a>
                        </li>
                        <li>
                            <a href="#">第三页</a>
                        </li>
                        <li>
                            <a href="#">第四页</a>
                        </li>
                        <li>
                            <a href="#">第五页</a>
                        </li>
	    	    	</ul>
	    	    </div>
	    	    
	    	    <div class="cont">
	    	    	<div class="test1">
	    	    		<ul style="overflow: hidden;">
	    	    			<li>
	    	    			    <div class="test3">
                                    <div class="test4">
                                        <img src="../../images/001.jpg"/>
                                    </div>
                                    <div class="test5">
                                        按钮
                                    </div>
                                </div>
	    	    			</li>
	    	    			<li>
                                <div class="test3">
                                    <div class="test4">
                                        <img src="../../images/001.jpg"/>
                                    </div>
                                    <div class="test5">
                                        按钮
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="test3">
                                    <div class="test4">
                                        <img src="../../images/001.jpg"/>
                                    </div>
                                    <div class="test5">
                                        按钮
                                    </div>
                                </div>
                            </li>
	    	    			
	    	    		</ul>
	    	    	</div>
	    	    	
	    	    	<div class="test6" style="overflow: hidden;">
	    	    		<div class="test7" style="float: left;background-color:#cccccc;padding:10px;border:1px solid #999999;margin:20px;overflow: hidden;">
	    	    			<div class="test8" style="width:100px; margin: 20px;padding:30px;border:5px solid #333333; float: left;">
	    	    				
	    	    			</div>
	    	    			<div class="test8" style="width:100px; margin: 20px;padding:30px;border:5px solid #333333; float: left;">
                                <input type="text" placeholder="输入 回车搜索" autofocus x-webkit-speech>
                            </div>
	    	    		</div>
	    	    	</div>
	    	    	
	    	    	<div class="" style="width:300px;height: 300px;border:5px solid #00BFFF;">
	    	    		<?php
$x = array("a" => "red", "b" => "green"); 
$y = array("c" => "blue", "a" => "red"); 
$z = $x + $y; // union of $x and $y
var_dump($z);
echo "<br>";
var_dump($x == $y);
echo "<br>";
var_dump($x === $y);
echo "<br>";
var_dump($x != $y);
echo "<br>";
var_dump($x <> $y);
echo "<br>";
var_dump($x !== $y);
?> 
	    	    	</div>
	    	    	
	    	    	
	    	    	
	    	    	
	    	    	
	    	    	
	    	    	
	    	    	
	    	    </div>
	    	    
	    		
	    	</div>
	    	
	    	
	    	<!--footer-->
	    	<div class="footer">
	    		
	    	</div>
	    	
	    </div>

	</body>
</html>
