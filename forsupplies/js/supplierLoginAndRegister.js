
//非空验证函数
function isNullOrEmpty(str){
	alert(str);
	if(str==null||str==""){
		return true;
	}else if($.trim(str)==""){
		return true;
	}else{
		return false;
	}
}

//为空时提醒错误
function noEmpty(obj){
	var thisval = obj.val();
	if(thisval==null||thisval==""||$.trim(thisval)==""){
		obj.siblings("[data-error='true']").remove();
		obj.after("<span data-error='true' style='color:red;position:absolute;margin-top:14px;margin-left:5px;' >*</span>");
		return false;
	}else{
		obj.siblings("[data-error='true']").remove();
		return true;
	}
}

//最小长度设定
function minLength(obj){
	var thisval = obj.val().length;
	var thislimit= obj.attr("minlength");
	if(thisval<thislimit){
		obj.siblings("[data-error='true']").remove();
		obj.after("<span data-error='true' style='color:red;position:absolute;margin-top:14px;margin-left:5px;' >*不能小于"+thislimit+"位</span>");
		return false;
	}else{
		obj.siblings("[data-error='true']").remove();
		return true;
	}
}


//上传图片展示
function showPreview(source,showid) {
	$(source).attr("data-uploadcode","1");
//  var file = source.files[0];  
    if(window.FileReader) {  
    	var file = source.files[0];
        var fr = new FileReader();  
        fr.onloadend = function(e) {  
        	var imgobj = new Image();
        	imgobj.src = e.target.result; 
        	
		    if($(source).attr("data-uploadimages")=="true"){
			   
			   if($(source).val().indexOf("png") > 0|| $(source).val().indexOf("jpg") > 0) {
			   		$("#"+showid+"_show").empty().append(imgobj);
			   		
			   		if($(source).attr("data-hasupload")!="1"){
				   		var cindex = $(source).parents(".single_upload_out").children().length+1;
				   	
					   	var sin_up = '<div class="single_upload"><div class="uploadimg_div uploadimg_div2">\
													<span>上传</span>\
													<input class="uploadimg_btn"  id="'+showid+cindex+'" type="file" value="上传" data-uploadimages="true" onchange="showPreview(this,\''+showid+cindex+'\')"  >\
												</div>\
												<div class="uploadimgshow_out" id="'+showid+cindex+'_show"></div></div>';
					   	
					   	$(source).parents(".single_upload_out").append(sin_up);
					   	$(source).attr("data-hasupload","1");
				   		
			   		}
			   	
			   }else{
			   		$("#"+showid+"_show").empty().append('<img src="images/yasuo_code.jpg">');
			   		
			   		if($(source).attr("data-hasupload")!="1"){
				   		var cindex = $(source).parents(".single_upload_out").children().length+1;
				   	
					   	var sin_up = '<div class="single_upload"><div class="uploadimg_div uploadimg_div2">\
													<span>上传</span>\
													<input class="uploadimg_btn"  id="upload_environment_whole"'+cindex+' type="file" value="上传" data-uploadimages="true" onchange="showPreview(this,\'upload_environment_whole'+cindex+'\')"  >\
												</div>\
												<div class="uploadimgshow_out" id="upload_environment_whole'+cindex+'_show"></div></div>';
					   	
					   	$(source).parents(".single_upload_out").append(sin_up);
					   	$(source).attr("data-hasupload","1");
				   		
			   		}
			   	
			   }
			   
		    }else{
		   	
		   		if($(source).val().indexOf("png") > 0|| $(source).val().indexOf("jpg") > 0) {
		   			$("#"+showid+"_show").empty().append(imgobj);
		   		}else{
		   			$("#"+showid+"_show").empty().append('<img src="images/yasuo_code.jpg">'); 
		   		}

			}
        	
        }; 

        fr.readAsDataURL(file);  
    }else{
    	$(".uploadimg_div span").remove();
    	$(".uploadimg_div input").css({"margin-left":"0","opacity":"1","filter":"alpha(opacity=100)","margin-top":"0","width":"180px"});
    }

}

//判断是否已经上传图片
function hadUpload(source){
	var upcode = source.attr("data-uploadcode");
	if(upcode==1){
		source.siblings("[data-error='true']").remove();
		return true;
	}else{
		source.siblings("[data-error='true']").remove();
		source.after("<em data-error='true' style='color:red;position:absolute;margin-top:14px;margin-left:5px;font-style:normal;' >*</em>");
		return false;
	}
}


//获得浏览器高度和宽度
function getBrowserSize(htorwd){
	var yScroll = $(window).height();
	var xScroll = $(window).width();
	if(htorwd=="width"){
		return xScroll;
	}else if(htorwd=="height"){
		return yScroll;
	}
}

//获得页面内容高度和宽度
function getPagecontSize(htorwd){
	var xScrollCont = $(document.body).width();
	var yScrollCont = $(document.body).height(); 
	if(htorwd=="width"){
		return xScrollCont;
	}else if(htorwd=="height"){
		return yScrollCont;
	}
}

//邮箱格式验证
function isemail(obj){
    //alert($(obj).val());
    var email_val = $.trim($(obj).val());
    var emailreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
    if(!emailreg.test(email_val)&&email_val!="")
      {
          //alert('邮箱格式错误');
          $(obj).after("<span data-nolike='true' style='color:red;position:absolute;margin-top:10px;margin-left:5px;' >*邮箱格式错误</span>");
          return false;
    }else{
    	return true;
    }
}


$(function(){
	

	
	//控制页面底部的属性
	if(getBrowserSize("height")>getPagecontSize("height")){
		$("#page_footer").css({"position":"fixed","bottom":"0px","width":"100%"});
	}
	
	
	//添加更多合同
	var uploadcont = 2;
	$("#upload_more_btn1").on("click",function(){
	
	if(uploadcont>10){
		return false;
	}
	
	var appendstr = '<tr class="ui_upload_after_append"><td class="bg_white"><input id="overseas_contract'+uploadcont+'" type="text" placeholder="请输入合同名称"></td><td><input id="overseas_contract'+uploadcont+'_info" type="text"></td><td class="bg_white ta_l"><div class="uploadimg_div uploadimg_div2"><span>上传</span><input class="uploadimg_btn"  id="upload_overseas_contract'+uploadcont+'" type="file" value="上传扫描件" onchange="showPreview(this,\'upload_overseas_contract'+uploadcont+'\')"  ></div><div class="uploadimgshow_out" id="upload_overseas_contract'+uploadcont+'_show"></div></td></tr>';
	
	$(".ui_upload_after_append").removeClass("ui_upload_after_append").after(appendstr);
	
	uploadcont +=1; //记录添加个数
		
	});
	
	
	//添加更多发货地址
	var addresscont = 6;
	$("#address_more_btn1").on("click",function(){
	
	if(addresscont>10){
		return false;
	}
	
	
	$(".address_"+addresscont).removeClass("c_hidden");
	
	addresscont +=1; //记录添加个数
		
	});
	
	
	
	//相关认证勾选
	$('input[name="supplier_certification"]').click(function(){
		if($(this).prop("checked")){
			$(this).parents(".ui_checkbox_out1").siblings(".ui_upload_or_no").removeClass("no_upload_css").find(".ui_uploadimg_btn").attr("disabled",false);
		}else{
			$(this).parents(".ui_checkbox_out1").siblings(".ui_upload_or_no").addClass("no_upload_css").find(".ui_uploadimg_btn").attr("disabled",true);
			$(this).parents(".ui_checkbox_out1").siblings(".ui_upload_or_no").children(".single_upload_out").children(".single_upload").each(function(){
				//alert($(this).index());
				if($(this).index()==0){
					$(this).find(".ui_uploadimgshow_out").empty();
					$(this).find(".ui_uploadimg_btn").removeAttr("data-hasupload");
				}else{
					$(this).remove();
				}
			});
		}
		
	});
	
	
	//选择产品分类点击显示隐藏
	$("#ui_select_products").on("click",".ui_selectpc_h3",function(){
		$(this).siblings(".ui_selectpc_showdown").slideToggle();
		$(this).find(".point_r").toggleClass("point_d");
	});
	
	//选择产品分类选中状态改变
	$("#ui_select_products").on("change","input[type='checkbox']",function(){
		if($(this).prop("checked")){
			$(this).parent().css("color","red");
		}else{
			$(this).parent().css("color","#000000");
		}
	});
	
	//生产能力调查增加
	$("#throughput_morebtn").click(function(){
		var rowindex = $(this).parents("tbody").siblings(".throughput_addout").children().length;
		rowindex = rowindex+1;
		var addstr = '\
						<tr>\
							<td class="bg_white">'+rowindex+'</td>\
							<td><input type="text"></td>\
							<td class="bg_white"><input type="text"></td>\
							<td><input type="text"></td>\
							<td class="bg_white"><input type="text"></td>\
							<td><input type="text"></td>\
							<td class="bg_white"><input type="text"></td>\
							<td><input type="text"></td>\
							<td class="bg_white"><input type="text"></td>\
							<td><input type="text"></td>\
							<td class="bg_white"><input type="text"></td>\
						</tr>\
					';
		$(this).parents("tbody").siblings(".throughput_addout").append(addstr);
	});
	
	//产品欧标检测报告增加
	$("#eur_standard_morebtn").click(function(){
		var rowindex = $(this).parents("tbody").siblings(".eur_standard_out").children().length;
		alert(rowindex);
		rowindex=rowindex+1;
		var addstr = '\
					<tr>\
						<td class="bg_white"><input type="text"></td>\
						<td><input type="text"></td>\
						<td colspan="2" class="bg_white ta_l">\
							<div class="single_upload_out">\
								<div class="single_upload">\
									<div class="uploadimg_div uploadimg_div2">\
										<span>上传</span>\
										<input class="uploadimg_btn"  id="upload_eur_row'+rowindex+'_standard" type="file" value="上传" data-uploadimages="true" onchange="showPreview(this,\'upload_eur_row'+rowindex+'_standard\')"  >\
									</div>\
									<div class="uploadimgshow_out" id="upload_eur_row'+rowindex+'_standard_show"></div>\
								</div>\
							</div>\
						</td>\
					</tr>\
					';
		$(this).parents("tbody").siblings(".eur_standard_out").append(addstr);
	});
	
	//为空和最小长度验证
	$('input[data-noempty="true"]').blur(function(){
		if(noEmpty($(this))){
			if($(this).attr("minlength")!=null||$(this).attr("minlength")!=undefined){
				minLength($(this));
			}
		};
	});	
	
	//验证码获得焦点，清除错误提示
	$("#idcode").on("focus","#ehong-code-input",function(){
		
		$(this).parents("#idcode").siblings("span[data-nolike='true']").remove();
	});
	
	
	//邮箱格式验证	
	$("#reg_email").on("blur",function(){
		isemail(this);
	});
	
	$("#reg_email").on("focus",function(){
		$(this).siblings("[data-nolike='true']").remove();
	});
	
	//登录
	$("#login_btn").on("click",function(){
		
		var iserror = false; 
		
		$('input[data-noempty="true"]').each(function(){
			if(!noEmpty($(this))){
				iserror=true;
			}else if(!minLength($(this))){
				iserror=true;
			}
		});
		
		if(iserror){
			return false;
		};
		
		var username=$.trim($("#login_username").val());
		var password=$.trim($("#login_password").val());
		var imgcode=$.trim($("#login_imgcode").val());
		alert("账号："+username+"。密码："+password+"。验证码："+imgcode);

		$.ajax({
			 type: "POST",
             url: "/////////",
             data: {
             	username:username,
             	password:password,
             	imgcode:imgcode
             },
             dataType: "json",
             success: function(data){
             	alert("登陆成功");
             },
             error:	function(data){
             	alert("登陆失败，密码错误");
             }
		});
		
		
	});
	
	


$("#reg_password2,#reg_password").focus(function(){
	$(this).siblings("[data-nolike='true']").remove();
});
	
	
	
	//注册第一步
	$("#register_first_btn").on("click",function(){
		
		var iserror = false; 
		
		$('input[data-noempty="true"]').each(function(){
			if(!noEmpty($(this))){
				iserror=true;
			}else if(!minLength($(this))){
				iserror=true;
			}
		});
		
		if(iserror){
			return false;
		};
		
		var password1 = $.trim($("#reg_password").val());
		var password2 = $.trim($("#reg_password2").val());
		if(password1!=password2){
			//alert("两次密码输入不一致");
			$("#reg_password2,#reg_password").after("<span data-nolike='true' style='color:red;position:absolute;margin-top:14px;margin-left:5px;' >*密码不一致</span>");
			return false;
		};
		
		
		if(!isemail(document.getElementById("reg_email"))){
			return false;
		};
		
		var imgcode_in = $.trim($("#idcode_out_reg #ehong-code-input").val()).toLowerCase();
		var imgcode_true = $.trim($("#idcode_out_reg #ehong-code font:nth-child(1)").html()).toLowerCase()+$.trim($("#idcode_out_reg #ehong-code font:nth-child(2)").html()).toLowerCase()+$.trim($("#idcode_out_reg #ehong-code font:nth-child(3)").html()).toLowerCase()+$.trim($("#idcode_out_reg #ehong-code font:nth-child(4)").html()).toLowerCase();
		//alert(imgcode_in);
		//alert(imgcode_true);
		if(imgcode_in!=imgcode_true){ 
			//alert("验证码错误");
			$("#idcode").after("<span data-nolike='true' style='color:red;position:absolute;margin-top:8px;margin-left:5px;' >*验证码错误</span>");
			return false; 
		};
		
		
		
		var username=$.trim($("#reg_username").val());
		var password=$.trim($("#reg_password").val());
		var imgcode=$.trim($("#reg_imgcode").val());
		var email=$.trim($("#reg_email").val());
		//alert("账号："+username+"。密码："+password+"。验证码："+imgcode+"。邮箱："+email);

		$.ajax({
			 type: "POST",
             url: "/////////",
             data: {
             	username:username,
             	password:password,
             	imgcode:imgcode
             },
             dataType: "json",
             success: function(data){
             	alert("（真）注册成功");
             },
             error:	function(data){
             	//alert("（伪）注册成功");
             	window.location.href="supplierRegisterStepsecond.html";
             }
		});
		
		
	});
	
	
	
	//注册第二步
	$("#register_second_btn").on("click",function(){
		
		var iserror = false; 
		
		$('input[data-noempty="true"]').each(function(){
			if(!noEmpty($(this))){
				iserror=true;
			}
		});
		
		$('input[data-upload="true"]').each(function(){
			if(!hadUpload($(this))){
				iserror=true;
			}
		});
		
		
		if(iserror){
			return false;
		};
		
		var username=$.trim($("#reg_username").val());
		
		

		$.ajax({
			 type: "POST",
             url: "/////////",
             data: {
//           	username:username,
//           	password:password,
//           	imgcode:imgcode,
//           	email:email
             },
             dataType: "json",
             success: function(data){
             	alert("（真）注册成功");
             },
             error:	function(data){
             	alert("（伪）注册成功");
             	window.location.href="supplierRegisterStepsecondResult.html";
             }
		});
		
		
	});
	
	
});







































