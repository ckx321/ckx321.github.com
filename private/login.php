<?php  
session_start();
?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>登录</title>
		<!--<script src="/hgdemo/js/jquery-1.11.0.min.js"></script>-->
		<!--<script src="/hgdemo/js/login.js"></script>-->
		<link rel="stylesheet" href="../css/global.css">
		<link rel="stylesheet" href="../css/normalize.css">
		<link rel="stylesheet" href="css/header_footer.css" />
		<link rel="stylesheet" href="css/common.css"> 
		
		
	</head>
	<body>
		
		
		
		<div class="wrap" id="open_wrap">
			<img class="posb_img" src="images/logo_white.png" width="158">
			<div class="main">
				<div class="login_main">
					<form id="loginform" name="loginform" method="post" action="#">
						<div class="logincont">
							<p>
								<label for="account">账号</label>
								<input id="account" name="account" type="text" >
							</p>
							<p>
								<label for="password">密码</label>
								<input id="password" name="password" type="password">
							</p>
							<p>
								<input id="loginBtn" name="loginBtn" type="submit" value="登录">
							</p>
						</div>
					</form>
				</div>
				
			</div>
		</div>
		
		


<?php
//设置header

//登录提交
if(isset($_POST["loginBtn"])&&$_POST["loginBtn"]=="登录"){
	$account = $_POST["account"];
	$password = $_POST["password"];
	
	//非空验证
	if($account==""||$password==""){
	echo "<script>alert('信息不完整'); history.go(-1);</script>";
	}else{
    
		include("conn.php"); 

		$sql="select * from user where user = '$account' and password='$password' limit 1";

		$check_query=mysql_query($sql);
		$rows = mysql_num_rows($check_query);

		if($rows>0){
				
				$_SESSION["user"] = $account;

			echo "<script> window.location.href='info.php';</script>";
		}else{
			echo "<script>alert('账号或密码错误'); history.go(-1);</script>";
		}
	}
	
}else{
	//echo "<script>alert('非法登陆'); history.go(-1);</script>";
}


?>

		
</body>
</html>
