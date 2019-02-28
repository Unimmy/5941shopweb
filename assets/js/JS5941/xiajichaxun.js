var uname = localStorage.getItem("userName");
var uid = localStorage.getItem("uid");
var pds;
var pd;
var pagess;
function shangjiachaxun(){
	var acc = $("#sJcxaccount").val();
	$.ajax({
		url:address+"/member/Hierarchy",
		type:"POST",
		data:{"uname":uname,"UID":uid,"phone":acc},
		success:function (data){
			if(data.status!=200){
				alert(data.message)
			}
			if(data.data==""||data.data==null||data.data==undefined){
				alert("暂无数据");
				
			}
			
			var message = data.data;
				var strmsg=message;
				
				 
				document.getElementById('shangjispan').innerHTML=strmsg;
			
		},
		error:function(e){}
	})
}

function dianyuanyonhu(){
	var str="";
	var page = $("#thispage").val();
	var rows = $("#thisrowsss").val();
	var phone = $("#dycxaccount").val();
	 
	$.ajax({
		url:address+"/Friends",
		type:"POST",
		data:{"uname":uname,"UID":uid,"page":page,"rows":rows,"iPhone":phone},
		success:function(data){
		 
			if(data.message=="登录超时"){
					location.href="login.html";
					return;
				}
		 
			if(data.status!=200){
				alert(data.message);
				return;
			}
			var message = data.data;
	
				str+="<table class=\"table table-striped table-bordered table-hover\">";
				
					str+="<tr><td>添加时间</td><td>推荐人</td><td>用户名称</td><td>用户联系方式</td></tr>";
					$.each(message, function(index, item) {
						str+="<tr>";
						if(item.CDATE==""||item.CDATE==null||item.CDATE==undefined){str+="<td></td>";}else{str+="<td>"+item.CDATE+"</td>";}
						if(item.UNAME1==""||item.UNAME1==null||item.UNAME1==undefined){str+="<td></td>";}else{str+="<td>"+item.UNAME1+"</td>";}
						if(item.UNAME2==""||item.UNAME2==null||item.UNAME2==undefined){str+="<td></td>";}else{str+="<td>"+item.UNAME2+"</td>";}
						if(item.PHONE	==""||item.PHONE	==null||item.PHONE	==undefined){str+="<td></td>";}else{str+="<td>"+item.PHONE	+"</td>";}
						pds=item.ISTABLEDATA;
						str+="</tr>";
					});
					
				
				str+="</table>";
				
				var str2 = ""+
             		"<table class=\"gopageMune\">"+
    				"<tr>"+
    					"<td><input style=\"border:none;background:#ff9121;padding:5px 20px;margin:0px 5px;color:#fff\" type=\"button\" onclick=\"chagepagea();dianyuanyonhu()\" value=\"首页\" /></td>"+
    					"<td><input style=\"border:none;background:#ff9121;padding:5px 20px;margin:0px 5px;color:#fff\" type=\"button\" onclick=\"chagepageb();dianyuanyonhu()\" value=\"上一页\" /></td>"+
    					"<td style=\"border:none;background:#ff9121;padding:5px 20px;margin:0px 5px;display:block;color:#fff\">当前在第"+$("#thispage").val()+"页</td>"
						;
						
						if(pds==true){str2+="<td><input  style=\"border:none;background:#ff9121;padding:5px 20px;margin:0px 5px;color:#fff\" type=\"button\" onclick=\"chagepagec();dianyuanyonhu()\" value=\"下一页\" /></td>";}
						else{
							str2+="";
						}
						str2+=
    				"</tr>"+
    				"</table>";	
         			
					var quedinganuess = "<input type=\"button\" onclick=\"dianyuanyonhu()\" class=\"btn btn-success\" value=\"确定\"  />";
					document.getElementById('quedingannues').innerHTML=quedinganuess;
         		document.getElementById('data_content').innerHTML=str;
         		document.getElementById('annuediv').innerHTML=str2;
			
		},
		error:function(e){
			
		}
	})
	
	
}


function xiajiachaxun(){
	var typess;
	var phone = $("#account").val();
	var leixing = $("#leixing").val();
	if(leixing=="店铺"){
		typess=2;
	}else {
		typess=1;
	}
	var rows = $("#thisrowsss").val();
	var page = $("#thispage").val();
	var str = "";
	$.ajax({
		url:address+"/web/selectShop",
		type:"POST",
		data:{"UID":uid,"uname":uname,"rows":rows,"page":page,"phone":phone,"type":typess},
		success:function(data){
			if(data.message=="登录超时"){
					location.href="login.html";
					return;
				}
			console.log(data.data);
			if(data.status!=200){
				alert(data.message);
			}
			var message = data.data;
	
				str+="<table class=\"table table-striped table-bordered table-hover\">";
					
				if(typess==2){
						str+="<tr><td>店铺编号</td><td>店铺名称</td><td>店铺状态</td><td>客服电话</td></tr>";
							
					$.each(message, function(index, item) {
						str+= "<tr>";
						if(item.CODE==""||item.CODE==null||item.CODE==undefined){str+="<td></td>";}else{str+="<td>"+item.CODE+"</td>";}
						if(item.SHOPNAME==""||item.SHOPNAME==null||item.SHOPNAME==undefined){str+="<td></td>";}else{str+="<td>"+item.SHOPNAME+"</td>";}
						if(item.DECODE==""||item.DECODE==null||item.DECODE==undefined){str+="<td></td>";}else{str+="<td>"+item.DECODE+"</td>";}
						if(item.SHOPPHONE==""||item.SHOPPHONE==null||item.SHOPPHONE==undefined){str+="<td></td>";}else{str+="<td>"+item.SHOPPHONE+"</td> ";}
						
						pds=item.ISTABLEDATA;
						str+="</tr>";
					});
					
				}else{
					str+="<tr><td>用户账号</td><td>用户昵称</td><td>联系方式</td></tr>";
					$.each(message, function(index, item) {
						str+="<tr>";
						if(item.UNAME==""||item.UNAME==null||item.UNAME==undefined){str+="<td></td>";}else{str+="<td>"+item.UNAME+"</td>";}
						if(item.NICKNAME==""||item.NICKNAME==null||item.NICKNAME==undefined){str+="<td></td>";}else{str+="<td>"+item.NICKNAME+"</td>";}
						if(item.PHONE==""||item.PHONE==null||item.PHONE==undefined){str+="<td></td>";}else{str+="<td>"+item.PHONE+"</td>";}
						pds=item.ISTABLEDATA;
						str+="</tr>";
					});
					
				}
				str+="</table>";
				
				var str2 = ""+
             		"<table class=\"gopageMune\">"+
    				"<tr>"+
    					"<td><input style=\"border:none;background:#ff9121;padding:5px 20px;margin:0px 5px;color:#fff\" type=\"button\" onclick=\"chagepagea();xiajiachaxun()\" value=\"首页\" /></td>"+
    					"<td><input style=\"border:none;background:#ff9121;padding:5px 20px;margin:0px 5px;color:#fff\" type=\"button\" onclick=\"chagepageb();xiajiachaxun()\" value=\"上一页\" /></td>"+
    					"<td style=\"border:none;background:#ff9121;padding:5px 20px;margin:0px 5px;display:block;color:#fff\">当前在第"+$("#thispage").val()+"页</td>";
						
						if(pds==true){str2+="<td><input  style=\"border:none;background:#ff9121;padding:5px 20px;margin:0px 5px;color:#fff\" type=\"button\" onclick=\"chagepagec();xiajiachaxun()\" value=\"下一页\" /></td>";}
						else{
							str2+="";
						}
						str2+=
    				"</tr>"+
    				"</table>";	
         			
				var quedinganuess = "<input type=\"button\" onclick=\"xiajiachaxun()\" class=\"btn btn-success\" value=\"确定\"  />";
					document.getElementById('quedingannues').innerHTML=quedinganuess;
         		document.getElementById('data_content').innerHTML=str;
         		document.getElementById('annuediv').innerHTML=str2;
			
		},
		error:function(e){
			alert("访问出错")
		}
	});
		

}

function chagepagea(){
	var statrpage=document.getElementById("thispage").value;
	var nowpage = 1;
	document.getElementById("thispage").value=nowpage;
}

function chagepagec(){
	var nowpage;
	var statrpage=document.getElementById("thispage").value;
	if(pd==""){
	 nowpage = parseInt(statrpage)-1;
	}else{
	 nowpage = parseInt(statrpage)+1;
	}
	document.getElementById("thispage").value=nowpage;
}

function chagepageb(){
	var statrpage=document.getElementById("thispage").value;
	var nowpage = parseInt(statrpage)-1;
	if(nowpage<=0){nowpage=1;}
	document.getElementById("thispage").value=nowpage;
}