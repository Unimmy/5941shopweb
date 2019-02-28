	var uname = localStorage.getItem('userName');
	var uid = localStorage.getItem("uid");

	var pd;
	var pds;
	var pagess;
	 
	function showsousuodiv(){
		$("#addhuodong2").css("display","block");
	}
	


function searchShopList(){
	
	 var contexts = $("#contexts").val();
	 
	 var str="";

	 $.ajax({
         url:address+"/shop/selectalladmin",
         type:"POST",
         data:{"page":1,"rows":15,"str":contexts,"uname":uname,"UID":uid},
         success:function(data){
			 if(data.message=="登录超时"){
					location.href="login.html";
					return;
			}
			 
        	 if(data.status == '200'){
          		var message = data.data;
				if(message==""){alert("没有数据了")}
				console.log(data);
			str+="<table style='width:100%;font-size:12px'>"+
					"<tr><td style='width:30%;padding-left:15px'>店铺账号</td><td style='width:22%'>店铺编号</td><td style='width:48%'>店铺名称</td></tr>";
				
          		$.each(message, function(index, item) {
      
    
          	str+="<tr>";
			
				if(item.SHOPNUAME==""||item.SHOPUNAME==null||item.SHOPUNAME==undefined){str+="<td></td>";}else{str+="<td style='width:30%;padding-left:15px' onclick=\"setUname('"+item.SHOPUNAME+"')\">"+item.SHOPUNAME+"</td>";}
				if(item.CODE==""||item.CODE==null||item.CODE==undefined){str+="<td></td>";}else{str+="<td onclick=\"setShopCode('"+item.CODE+"')\">"+item.CODE+"</td>";}
				if(item.SHOPNAME==""||item.SHOPNAME==null||item.SHOPNAME==undefined){str+="<td></td>";}else{str+="<td>"+item.SHOPNAME+"</td>";}
            str+="</tr>";
 		
 	});
			str+="</table>";   
         		
         		document.getElementById('getContext').innerHTML=str;
         		  
          	}else{
          		alert(data.message);
          	}
          	
         	
         },
         error:function(e){
         	console.log(e)
            
         }
     });  
}

function setShopCode(code){
	 
	$("#getshopcode").val(code);
}

function setUname(unames){
 
	$("#getupphone").val(unames);
}
function formatDateTime(timeStamp) { 
    var date = new Date();
    date.setTime(timeStamp);
    var y = date.getFullYear();    
    var m = date.getMonth() + 1;    
    m = m < 10 ? ('0' + m) : m;    
    var d = date.getDate();    
    d = d < 10 ? ('0' + d) : d;    
    var h = date.getHours();  
    h = h < 10 ? ('0' + h) : h;  
    var minute = date.getMinutes();  
    var second = date.getSeconds();  
    minute = minute < 10 ? ('0' + minute) : minute;    
    second = second < 10 ? ('0' + second) : second;   
    return y+"-"+m+"-"+d+" "+h+":"+minute;    
};  

function closeactivity(){
	$("#addhuodong").css("display","none");
}
function showdiv(){
	$("#addhuodong").css("display","block");
}
function closediv2(){
	$("#addhuodong2").css("display","none");
}

function addoneshuju(){
	
	var phoness = $("#getphone").val();
 
	var shopcode = $("#getshopcode").val();
	var upphone = $("#getupphone").val();
	var leixing = $("#getleixing").val();
	
	var typestr ;
	if(leixing == "线上店主"){
		typestr = 2;
	}else{
		typestr = 1;
	}
	
	var day = $("#getday").val();

	var con = window.confirm("是否继续");
	if(con==true){
	$.ajax({
		url:address+"/Identity/add",
		type:"POST",
		data:{"phone":phoness,"shopcode":shopcode,"suphone":upphone,"type":typestr,"date":day,"uname":uname,"UID":uid},
		success:function(data){
			alert(data.message);                  
		},
		error:function(e){}
	});
	}
}
	
function showAll(){
	var shengfenleixing = $("#shengfenleixings").val();
	var shenfen;
	if(shengfenleixing=="经销商"){
		shenfen = 1;
	}else if(shengfenleixing=="线上店主"){
		shenfen = 2;
	}else if(shengfenleixing=="普通导购"){
		shenfen = 3;
	}else if(shengfenleixing=="普通用户"){
		shenfen = 4;
	}else{
		shenfen=null;
	}
	var page = document.getElementById("thispage").value;
	pagess=page;
	var rows = document.getElementById("thisrows").value;
	var str="";
    var phone = $("#saerchuserphone").val();
	 $.ajax({
         url:address+"/Identity/select",
         type:"POST",
         data:{"page":page,"rows":rows,"phone":phone,"uname":uname,"UID":uid,"type":shenfen},
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
					
			str+=
				"<tr>";str+="<td>"+(index+1)+"</td>";
					if(item.star==""||item.star==null||item.star==undefined){str+="<td></td>";}else{str+="<td>"+formatDateTime(item.star)+"</td>";}
					if(item.end==""||item.end==null||item.end==undefined){str+="<td></td>";}else{str+="<td>"+formatDateTime(item.end)+"</td>";}
					if(item.memberid==""||item.memberid==null||item.memberid==undefined){str+="<td></td>";}else{str+="<td>"+item.memberid+"</td>";}
					if(item.oneshopid==""||item.oneshopid==null||item.oneshopid==undefined){str+="<td></td>";}else{str+="<td>"+item.oneshopid+"</td>";}
					if(item.shopname==""||item.shopname==null||item.shopname==undefined){str+="<td></td>";}else{str+="<td>"+item.shopname+"</td>";}
					if(item.onetype==""||item.onetype==null||item.onetype==undefined){str+="<td></td>";}else{
						if(item.onetype==1){
							str+="<td>用户</td>";
						}else if(item.onetype==2){
							str+="<td>导购</td>";
						}else if(item.onetype==3){
							str+="<td>经销商</td>";
						}else if(item.onetype==4){
							str+="<td>线上店主</td>";
						}
					}
					if(item.type	==""||item.type	==null||item.type	==undefined){str+="<td></td>";}else{
						if(item.type==1){
							str+="<td>经销商</td>";
						}else if(item.type==2){
							str+="<td>线上店主</td>";
						}
					}
					 
					if(item.system==""||item.system==null||item.system==undefined){str+="<td>未审核</td>";}else{
						if(item.system==-1){
							str+="<td>审核不通过</td>";
						}else if(item.system==1){
							str+="<td>正常</td>";
						}else if(item.system==2){
							str+="<td>停用</td>";
						}else {
							str+="<td>审核中</td>";
						}
					}
					if(item.system==-1){str+="<td>";}
					else if(item.system==1){str+="<td>       <span class='btn btn-warning'  onclick=\"save(2,"+item.id+")\">停用    </span> <span class='btn btn-danger' id='system"+item.id+"' onclick=\"stop("+item.id+")\">  结束  </span> <span class='btn btn-danger' id='system"+item.id+"' onclick=\"closes("+item.id+")\">  取消  </span>";}
					else if(item.system==2){str+="<td>       <span class='btn btn-success' onclick=\"save(1,"+item.id+")\">启用    </span> <span class='btn btn-danger' id='system"+item.id+"' onclick=\"stop("+item.id+")\">  结束  </span> <span class='btn btn-danger' id='system"+item.id+"' onclick=\"closes("+item.id+")\">  取消  </span>";}
					else{str+="<td>                          <span class='btn btn-success' onclick=\"save(1,"+item.id+")\">审核通过</span> <span class='btn btn-warning' onclick=\"save(-1,"+item.id+")\">审核不通过</span></td>" ;}
						 
			str+=				
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
							var str4="";
							str4+="<input type=\"button\" onclick=\"showAll()\" class=\"btn btn-success\" value=\"确定\"  />";
						str2+=
    				"</tr>"+
    				"</table>";	
         			
					var str52 ="";
												str52+=
													"<tr>"+
														"<th>序号</th>"+
														"<th>开始时间</th>"+
														"<th>结束时间</th>"+
														"<th>用户账号</th>"+
														"<th>上一次店铺识别码</th>"+
														"<th>店铺名称</th>"+
														"<th>上一次身份类型</th>"+
														"<th>身份类型</th>"+ 
														"<th>审核状态</th>"+
														"<th>操作</th>"+
													"</tr>";
				document.getElementById('biaotouth').innerHTML=str52;
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


function xiajichaxun(){

	var page = document.getElementById("thispage").value;
	pagess=page;
	var rows = document.getElementById("thisrows").value;
	var str="";
    var phone = $("#saerchuserphone").val();
	 $.ajax({
         url:address+"/Identity/Friends",
         type:"POST",
         data:{"page":page,"rows":rows,"phone":phone,"uname":uname,"UID":uid},
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
					
			str+=
				"<tr>";str+="<td>"+(index+1)+"</td>";
					if(item.ID==""||item.ID==null||item.ID==undefined){str+="<td></td>";}else{str+="<td>"+item.ID+"</td>";}
					if(item.CDATE==""||item.CDATE==null||item.CDATE==undefined){str+="<td></td>";}else{str+="<td>"+item.CDATE+"</td>";}
					if(item.BZ==""||item.BZ==null||item.BZ==undefined){str+="<td></td>";}else{str+="<td>"+item.BZ+"</td>";}
					if(item.UNAME==""||item.UNAME==null||item.UNAME==undefined){str+="<td></td>";}else{str+="<td>"+item.UNAME+"</td>";}
				
			str+=				
				"</tr>";
		 
         		
							pds=item.ISTABLEDATA;
							 
         		}
         		
         		);
         	
         			
         		      var str2 = ""+
             		"<table class=\"gopageMune\">"+
    				"<tr>"+
    					"<td><input style=\"border:none;background:#ff9121;padding:5px 20px;margin:0px 5px;color:#fff\" type=\"button\" onclick=\"chagepagea();xiajichaxun()\" value=\"首页\" /></td>"+
    					"<td><input style=\"border:none;background:#ff9121;padding:5px 20px;margin:0px 5px;color:#fff\" type=\"button\" onclick=\"chagepageb();xiajichaxun()\" value=\"上一页\" /></td>"+
    					"<td style=\"border:none;background:#ff9121;padding:5px 20px;margin:0px 5px;display:block;color:#fff\">当前在第"+$("#thispage").val()+"页</td>";
						if(pds==true){str2+="<td><input  style=\"border:none;background:#ff9121;padding:5px 20px;margin:0px 5px;color:#fff\" type=\"button\" onclick=\"chagepagec();xiajichaxun()\" value=\"下一页\" /></td>";}
						else{
							str2+="";
						}
							var str4="";
							str4+="<input type=\"button\" onclick=\"xiajichaxun()\" class=\"btn btn-success\" value=\"确定\"  />";
						str2+=
    				"</tr>"+
    				"</table>";	
					
					var str52 ="";
												str52+=
													"<tr>"+
														"<th>序号</th>"+
														"<th>编号</th>"+
														"<th>添加时间</th>"+
														"<th>备注</th>"+
														"<th>账号</th>"+
														 
													"</tr>";
				document.getElementById('biaotouth').innerHTML=str52;
         			
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


function guishuchaxun(){

	var page = document.getElementById("thispage").value;
	pagess=page;
	var rows = document.getElementById("thisrows").value;
	var str="";
    var phone = $("#saerchuserphone").val();
	 $.ajax({
         url:address+"/Identity/selectsu",
         type:"POST",
         data:{"page":page,"rows":rows,"phone":phone,"uname":uname,"UID":uid},
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
					
			str+=
				"<tr>";str+="<td>"+(index+1)+"</td>";
					if(item.CDATE==""||item.CDATE==null||item.CDATE==undefined){str+="<td></td>";}else{str+="<td>"+item.CDATE+"</td>";}
					 
					if(item.SHOPNAME==""||item.SHOPNAME==null||item.SHOPNAME==undefined){str+="<td></td>";}else{str+="<td>"+item.SHOPNAME+"</td>";}
					
			str+=				
				"</tr>";
		 
         		
							pds=item.istabledata;
							 
         		}
         		
         		);
         	
         			
         		      var str2 = ""+
             		"<table class=\"gopageMune\">"+
    				"<tr>"+
    					"<td><input style=\"border:none;background:#ff9121;padding:5px 20px;margin:0px 5px;color:#fff\" type=\"button\" onclick=\"chagepagea();guishuchaxun()\" value=\"首页\" /></td>"+
    					"<td><input style=\"border:none;background:#ff9121;padding:5px 20px;margin:0px 5px;color:#fff\" type=\"button\" onclick=\"chagepageb();guishuchaxun()\" value=\"上一页\" /></td>"+
    					"<td style=\"border:none;background:#ff9121;padding:5px 20px;margin:0px 5px;display:block;color:#fff\">当前在第"+$("#thispage").val()+"页</td>";
						if(pds==true){str2+="<td><input  style=\"border:none;background:#ff9121;padding:5px 20px;margin:0px 5px;color:#fff\" type=\"button\" onclick=\"chagepagec();guishuchaxun()\" value=\"下一页\" /></td>";}
						else{
							str2+="";
						}
							var str4="";
							str4+="<input type=\"button\" onclick=\"guishuchaxun()\" class=\"btn btn-success\" value=\"确定\"  />";
						str2+=
    				"</tr>"+
    				"</table>";	
						var str52 ="";
												str52+=
													"<tr>"+
														"<th>序号</th>"+
														
														"<th>添加时间</th>"+
													
														"<th>店铺名称</th>"+
														 
													"</tr>";
				document.getElementById('biaotouth').innerHTML=str52;
         			
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
	
	$("#rowsdiv").css("display","none");
$("#annuediv").css("display","none");
$("#pagediv").css("display","none");
}

function save(pream,id){
	var con = window.confirm("是否继续");
	if(con==true){
	$.ajax({
		url:address+"/Identity/Stop",
		type:"POST",
		data:{"id":id,"type":pream,"uname":uname,"UID":uid},
		success:function(data){
			alert(data.message);
		}
	});
	}
	showAll();
}

function stop(id){
	
	var con = window.confirm("是否继续");
	if(con==true){
	$.ajax({
		url:address+"/Identity/end",
		type:"POST",
		data:{"id":id,"uname":uname,"UID":uid},
		success:function(data){
			alert(data.message);
		}
	});
	}

	showAll();
}


function closes(id){
	
	var con = window.confirm("是否继续");
	if(con==true){
	$.ajax({
		url:address+"/Identity/Close",
		type:"POST",
		data:{"id":id,"uname":uname,"UID":uid},
		success:function(data){
			alert(data.message);
		}
	});
	}

	showAll();
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
