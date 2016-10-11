<?php 

/************************************
 * 数据库连接
 *************************************/
 
//header("Content-type: text/html; charset=utf-8");

$conn = @mysql_connect("112.126.87.76","cheng","sunyun1029");

if(!$conn){
	die("数据库连接失败:" . mysql_error());
}

//连接
mysql_select_db("myweb",$conn);

//字符转换，读库
mysql_query("set character set 'utf-8'");

//写库
mysql_query("set names 'utf8'");



?>