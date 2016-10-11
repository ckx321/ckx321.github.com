<?php 

session_start();

if(!isset($_SESSION['user'])){
    header("Location:login.php");
    exit();
};
include('conn.php');

?>


<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>个人信息</title>
		<link rel="stylesheet" type="text/css" href="css/info.css"/>
	</head>
	<body>
	    
	    <div class="wrap">
	    	姓名： 程凯星
	    </div>
	    
	</body>
</html>
