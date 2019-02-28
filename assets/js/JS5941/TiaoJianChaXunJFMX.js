	var uname = localStorage.getItem('userName');
	var uid = localStorage.getItem("uid");

	var pd;
	var pds;
	var pagess;
	 
	
	

	
function showAll(){

	var page = document.getElementById("thispage").value;
	pagess=page;
	var rows = document.getElementById("thisrows").value;
	var account = document.getElementById("account").value;
	var str="";

	 $.ajax({
         url:address+"/GoldcoinV/select",
         type:"POST",
         data:{"page":page,"rows":rows,"uname":uname,"UID":uid,"phone":account},
         success:function(data){
			 if(data.message=="登录超时"){
					location.href="login.html";
					return;
				}
				if(data.message==""){
					alert("暂无数据");
				}
         	if(data.status == '200'){
			
         		var message = data.data;
				if(message==""){alert("没有数据了")}else{pd=message;}
					
         		$.each(message, function(index, item) {
					
		 
         			str+=""+
         					"<tr>";
										str+="<td>"+(index+1)+"</td>";
										if(item.num==null||item.num==""||item.num==undefined){str+="<td></td>";}else{str+="<td>"+item.num+"</td>";}
										if(item.memberid==null||item.memberid==""||item.memberid==undefined){str+="<td></td>";}else{str+="<td>"+item.memberid+"</td>";}
										if(item.title==null||item.title==""||item.title==undefined){str+="<td></td>";}else{str+="<td>"+item.title+"</td>";}
										if(item.istrue==null||item.istrue==""||item.istrue==undefined){str+="<td></td>";}else{
											if(item.istrue==1){str+="<td>是</td>";}else{str+="<td>否</td>";}
										}
									"</tr>";
							pds=item.istabledata;
         			
         		}
         		
         		);
         	
         			
         		      var str2 = ""+
             		"<table class=\"gopageMune\">"+
    				"<tr>"+
    					"<td><input style=\"border:none;background:#ff9121;padding:5px 20px;margin:0px 5px;color:#fff\" type=\"button\" onclick=\"chagepagea();showAll()\" value=\"首页\" /></td>"+
    					"<td><input style=\"border:none;background:#ff9121;padding:5px 20px;margin:0px 5px;color:#fff\" type=\"button\" onclick=\"chagepageb();showAll()\" value=\"上一页\" /></td>"+
    					"<td style=\"border:none;background:#ff9121;padding:5px 20px;margin:0px 5px;display:block;color:#fff\">当前在第"+$("#thispage").val()+"页</td>";
						if(pds==true){str2+="<td><input  style=\"border:none;background:#ff9121;padding:5px 20px;margin:0px 5px;color:#fff\" type=\"button\" onclick=\"chagepagec();showAll()\" value=\"下一页\" /></td>";}
						else{
							str2+="";
						}
							
						str2+=
    				"</tr>"+
    				"</table>";	
         			var strTh ="";
								strTh+= 
								"<th>序号</th>"+
								"<th>积分</th>"+
								"<th>所属用户</th>"+
								"<th>说明</th>"+
								"<th>是否生效</th>";
							
							
         		document.getElementById('allmessage').innerHTML=str;
         		document.getElementById('annuediv').innerHTML=str2;
			
         		document.getElementById('table_th').innerHTML=strTh;

         		
         		
         		
         		
         		
         		
         	}else{
         		alert(data.message);
         	}
         	
         },
         error:function(e){
         	alert("请求失败");
            
         }
     });     
	



}

var upduserid;
function updateforuser(id){
	upduserid = id;
	$("#updcommoditydiv").css("display","block");
}

function closepagediv(){
	upduserid= null;
	$("#updcommoditydiv").css("display","none");
}

function closepagediv2(){
	upduserid= null;
	$("#updcommoditydiv2").css("display","none");
}


function closepagediv3(){
	upduserid= null;
	$("#updcommoditydiv3").css("display","none");
}

function closepagediv4(){
	upduserid= null;
	$("#updcommoditydiv4").css("display","none");
}

function updateusermessage(){
	var getsex = $("#getsex").val();
	if(getsex=="男"){
		 $("#setsex").val(1);
	}
	else if(getsex=="女"){
		$("#setsex").val(2);
	}
	else{
		$("#setsex").val(0);
	}
	$("#subuid").val(uid);
	$("#subuname").val(uname);
	$("#subid").val(upduserid);
	var getForm = document.getElementById("upduserdivform");
	var getUserMessageForm = new FormData(getForm);
	
	$.ajax({
		url:address+"/member/adminUpdate",
		type:"POST",
		date:getUserMessageForm,
		cache: false,                      // 不缓存
		processData: false,               // jQuery不要去处理发送的数据
		contentType: false,   			 // jQuery不要去设置Content-Type请求头
		success:function(data){
			alert(data.message);
		},
		error:function(){}
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

function usertoyes(phone,state){


	$.ajax({
		url:address+"/member/updatestate",
		type:"POST",
		data:{"UID":uid,"uname":uname,"phone":phone,"state":state},
		success:function(data){
				if(data.message=="登录超时"){
					location.href="login.html";
					return;
				}
			showAll();
					alert(data.message);
		},
		error:function(e){
			alert(data.message);
		}
		
		
	});
	
}



function timetrans(date){
    var date = new Date(date*1000);//如果date为10位不需要乘1000
    var Y = date.getFullYear() + '-';
    var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
    var D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + ' ';
    var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
    var m = (date.getMinutes() <10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
    var s = (date.getSeconds() <10 ? '0' + date.getSeconds() : date.getSeconds());
    return Y+M+D+h+m+s;
}


function getquanxian(phone){
	var jueseid = "";
	var uid = localStorage.getItem("uid");
	var uname = localStorage.getItem("userName");
	var str = "";
	 $.ajax({
		url:address+"/auths/selectbymember",
		type:"POST",
		data:{"uname":uname,"UID":uid,"phone":phone},
		success:function(data){
			
			console.log(data.data)
			if(data.data==""||data.data==null){
			alert("暂无数据");
			return;
		}
			if(data.message=="登录超时"){
					location.href="login.html";
					return;
				}
		
			var message = data.data;
			if(data.status==200){
				str+="<div id=\"hiddenmessages\" style=\"width:460px;margin:auto;position:fixed;top:120px;left:50%;margin-left:-130px;border:1px solid #ccc;padding:55px 70px;background:#fff;\">"+
				"<button onclick=\"closequanxianpage()\" style=\"margin-left:346px;margin-top:-95px\" class=\"btn\">X</button>";
			$.each(message,function(index,item){
			
				str+=
						
								
					"<span>角色名称：</span><span>"+item.groupbyname+"</span>"+
								
					"<hr>";
						jueseid+=item.groupbyname+",";
						
			});
			
			str+="<span onclick=\"changepages('GetAllzu')\" class=\"btn btn-warning\">修改权限</span>"+
			
			"</div>";
			
			localStorage.setItem("jueseid",jueseid);
			
			document.getElementById('hiddenmessage').innerHTML=str;
			document.getElementById("hiddenmessage").style="block";
			}else{
				alert(data.message);
			}
		},
		error:function(e){
		
		}
	 });
} 

function changepages(src){
	
	    window.parent.changesrc(src);
}

function closequanxianpage(){

	document.getElementById("hiddenmessage").style.display="none";
}



function searchuser(likephone){
	var page = document.getElementById("thispage").value;
	
	var rows = document.getElementById("thisrows").value;
 
	if(likephone==""|| likephone==undefined||likephone==null){
		likephone = document.getElementById("saerchuserphone").value;
	}
	
	var str="";
	
	$.ajax({
		url:address+"/member/selectmember",
		type:"POST",
		data:{"UID":uid,"uname":uname,"phone":likephone,"page":page,"rows":rows},
		 success:function(data){
			 if(data.message=="登录超时"){
					location.href="login.html";
					return;
				}
				if(data.message==""){
					alert("暂无数据");
				}
         	if(data.status == '200'){
			
         		var message = data.data;
				if(message==""){alert("没有数据了")}else{pd=message;}
					
         		$.each(message, function(index, item) {
					
		 
         			str+=""+
         					"<tr>";
							str+="<td>"+(index+1)+"</td>";
        					if(item.UNAME!=null){str+="<td>"+item.UNAME+"</td>";}
								else{str+="<td>"+""+"</td>";}
							if(item.SOURCE!=null){
								if(item.SOURCE==1){
									str+="<td>"+"平台注册"+"</td>";
								}else if(item.SOURCE==2){
									str+="<td>"+"管理员添加"+"</td>";
								}
							}
								else{str+="<td>"+""+"</td>";}
							if(item.STATE!=null){
								if(item.STATE==1){
									str+="<td>"+"正常"+"</td>";
								}else if(item.STATE==2){
									str+="<td>"+"冻结"+"</td>";
								}
								
							}
								else{str+="<td>"+""+"</td>";}
							if(item.SUPERADMIN!=null){
								if(item.SUPERADMIN==1){
									str+="<td>"+"是"+"</td>";
								}else if(item.SUPERADMIN==0){
									str+="<td>"+"不是"+"</td>";
								}else{
									str+="<td>"+"不是"+"</td>";
								}
							}
								else{str+="<td>"+""+"</td>";}
							if(item.PHONE!=null){str+="<td>"+item.PHONE+"</td>";}
								else{str+="<td>"+""+"</td>";}
						
							if(item.ADDTIME!=null){str+="<td>"+
							
							
							timetrans(item.ADDTIME/1000);
							
							+"</td>";}
								else{str+="<td>"+""+"</td>";}
							if(item.SEX!=null){
								if(item.SEX==1){
									str+="<td>"+"男"+"</td>";
								}else{
									str+="<td>"+"女"+"</td>";
								}
								
							}
								else{str+="<td>"+""+"</td>";}
							if(item.AGE!=null){str+="<td>"+item.AGE+"</td>";}
								else{str+="<td>"+""+"</td>";}
							if(item.GOLDCOIN!=null){str+="<td>"+item.GOLDCOIN+"</td>";}
								else{str+="<td>"+""+"</td>";}
							if(item.PLATFORMCURRENCY!=null){str+="<td>"+item.PLATFORMCURRENCY+"</td>";}
								else{str+="<td>"+""+"</td>";}
							if(item.TYPE!=null){str+="<td>"+item.TYPE+"</td>";}
								else{str+="<td>"+""+"</td>";}
							if(item.NICKNAME!=null){str+="<td>"+item.NICKNAME+"</td>";}
								else{str+="<td>"+""+"</td>";}
							if(item.MEMBERSIZE!=null){str+="<td>"+item.MEMBERSIZE+"</td>";}
								else{str+="<td>"+""+"</td>";}
								
								var issuperadminss = localStorage.getItem("issuperadmin");
								if(issuperadminss==1){
								
								str+=
								"<td>"+
									"<div class=\"visible-md visible-lg hidden-sm hidden-xs action-buttons\">";
									str+=
										"<a onclick=\"getquanxian("+item.PHONE+",1)\"  class=\"btn btn-primary\">"+
											
											"查询角色"+
										"</a>";
										
									if(item.SUPERADMIN!=1){
									if(item.STATE==1){
										str+=
										"<a onclick=\"usertoyes("+item.PHONE+",2)\" class=\"btn btn-danger\">"+
											"禁用"+
										"</a>";
									}else{
										str+=
										"<a onclick=\"usertoyes("+item.PHONE+",1)\"  class=\"btn btn-success\">"+
											"恢复"+
										"</a>";
									}
									}
									}	
									str+=	
									"</div>"+
								"</td>"+
							"</tr>";
							pds=item.ISTABLEDATA;
         			
         		}
         		
         		);
         	
         			
         		      var str2 = ""+
             		"<table class=\"gopageMune\">"+
    				"<tr>"+
    					"<td><input style=\"border:none;background:#ff9121;padding:5px 20px;margin:0px 5px;color:#fff\" type=\"button\" onclick=\"chagepagea();showAll()\" value=\"首页\" /></td>"+
    					"<td><input style=\"border:none;background:#ff9121;padding:5px 20px;margin:0px 5px;color:#fff\" type=\"button\" onclick=\"chagepageb();showAll()\" value=\"上一页\" /></td>"+
    					"<td style=\"border:none;background:#ff9121;padding:5px 20px;margin:0px 5px;display:block;color:#fff\">当前在第"+$("#thispage").val()+"页</td>";
						if(pds==true){str2+="<td><input  style=\"border:none;background:#ff9121;padding:5px 20px;margin:0px 5px;color:#fff\" type=\"button\" onclick=\"chagepagec();showAll()\" value=\"下一页\" /></td>";}
						else{
							str2+="";
						}
							var str4="";
							str4+="<input type=\"button\" onclick=\"showAll()\" class=\"btn btn-success\" value=\"确定\"  />";
						str2+=
    				"</tr>"+
    				"</table>";	
         			
         		document.getElementById('allmessage').innerHTML=str;
         		document.getElementById('annuediv').innerHTML=str2;
				document.getElementById('okannue4').innerHTML=str4;
         		
         		
         		
         		
         		
         		
         		
         	}else{
         		alert(data.message);
         	}
         	
         },
         error:function(e){
         	alert("请求失败");
            
         }
     });     
	



}
