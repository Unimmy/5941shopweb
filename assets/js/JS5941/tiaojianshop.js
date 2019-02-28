var pd;
	var pds;
	var pagess;
	var uname = localStorage.getItem('userName');
	var uid = localStorage.getItem('uid');
function likeAll(){
	 var getsPage = $("#thispage").val();
	 var getsRows = $("#thisrows").val();
	 var contexts = $("#contexts").val();
	 
	 var str="";

	 $.ajax({
         url:address+"/shop/selectalladmin",
         type:"POST",
         data:{"page":getsPage,"rows":getsRows,"str":contexts,"uname":uname,"UID":uid},
         success:function(data){
			 if(data.message=="登录超时"||data.message=="账号不可为空"){
					location.href="login.html";
					return;
			}
			 
        	 if(data.status == '200'){
          		var message = data.data;
				if(message==""){alert("没有数据了")}
				console.log(data);
          		$.each(message, function(index, item) {
      
    
          	str+=""+
 				"<tr>";
				str+="<td>"+(index+1)+"</td>";
				if(item.ID==""||item.ID==null||item.ID==undefined){str+="<td></td>";}else{str+="<td>"+item.ID+"</td>";}
				if(item.PROVINCE==""||item.PROVINCE==null||item.PROVINCE==undefined){str+="<td></td>";}else{str+="<td>"+item.PROVINCE+"省";}
				if(item.SHOPNAME==""||item.SHOPNAME==null||item.SHOPNAME==undefined){str+="<td></td>";}else{str+="<td>"+item.SHOPNAME+"</td>";}
				if(item.CODE==""||item.CODE==null||item.CODE==undefined){str+="<td></td>";}else{str+="<td>"+item.CODE+"</td>";}
				if(item.superid==0){
						str+="<td>"+"分销商"+"</td>";
					}else{
						str+="<td>"+"店铺"+"</td>";
					}
				if(item.SHOPTYPE==""||item.SHOPTYPE==null||item.SHOPTYPE==undefined){str+="<td></td>";}else{str+="<td>"+item.SHOPTYPE+"</td>";}
				
					
					
					
					
				if(item.SHOPUNAME==""||item.SHOPUNAME==null||item.SHOPUNAME==undefined){str+="<td></td>";}else{str+="<td>"+item.SHOPUNAME+"</td>";}
				if(item.SHOPSTATE==""||item.SHOPSTATE==null||item.SHOPSTATE==undefined){str+="<td></td>";}else{
					if(item.SHOPSTATE==1){str+="<td>"+"正常"+"</td>";}
					else if(item.SHOPSTATE==2){
						str+="<td>"+"关闭"+"</td>";}
					else if(item.SHOPSTATE==-1){
						str+="<td>"+"未通过"+"</td>";}
					else if(item.SHOPSTATE==-2){
						str+="<td>"+"冻结"+"</td>";}
					else {str+="<td>"+"提交"+"</td>";}
					
				}
				
				
				if(item.DETAILED==""||item.DETAILED==null||item.DETAILED==undefined){str+="<td></td>";}else{str+="<td>"+item.DETAILED+"</td>";}
			 
				if(item.SHOPPHONE	==""||item.SHOPPHONE	==null||item.SHOPPHONE	==undefined){str+="<td></td>";}else{str+="<td>"+item.SHOPPHONE	+"</td>";}
 		str+=
 		"<td>"+
 			"<div class=\"visible-md visible-lg hidden-sm hidden-xs action-buttons\">";
			
 				
 					if(item.SHOPSTATE==1){
 						str+=""+
 	 					"<i onclick=\"closeShop("+item.ID+")\" title=\"关闭店铺\" class=\"orange icon-remove bigger-130\"></i>"+
 	 					
						"&nbsp&nbsp&nbsp&nbsp"+
						"<i onclick=\"dongjie("+item.ID+",-2)\" title=\"店铺冻结\" class=\"red icon-lock bigger-130\"></i>"+
						
						"&nbsp&nbsp&nbsp&nbsp"+
 	 					"<i onclick=\"openupdateShop("+item.ID+")\" title=\"修改店铺信息\" class=\"blue icon-pencil bigger-130\"></i>";						
 						
 					}else
 					if(item.SHOPSTATE==2){
 						str+=""+
 						"<i onclick=\"openShop("+item.ID+")\" title=\"打开店铺\" class=\"green icon-ok bigger-130\"></i>"+	 					
 	 					
						"&nbsp&nbsp&nbsp&nbsp"+
						"<i onclick=\"dongjie("+item.ID+",-2)\" title=\"店铺冻结\" class=\"red icon-lock bigger-130\"></i>"+

						"&nbsp&nbsp&nbsp&nbsp"+
 	 					"<i onclick=\"openupdateShop("+item.ID+")\" title=\"修改店铺信息\" class=\"blue icon-pencil bigger-130\"></i>";												

					}else
 					if(item.SHOPSTATE==0){
 						str+=""+
 					"<i onclick=\"dongjie("+item.ID+",1)\" title=\"审核通过\" class=\"green icon-thumbs-up bigger-130\"></i>"+
						"&nbsp&nbsp&nbsp&nbsp"+
					"<i onclick=\"dongjie("+item.ID+",-1)\" title=\"审核不通过\" class=\"red icon-thumbs-down bigger-130\"></i>"+
						"&nbsp&nbsp&nbsp&nbsp"+
 	 					"<i onclick=\"openupdateShop("+item.ID+")\" title=\"修改店铺信息\" class=\"blue icon-pencil bigger-130\"></i>";												

				

					}
					else
 					if(item.SHOPSTATE==-1){
 						str+=""+
 					
						"&nbsp&nbsp&nbsp&nbsp"+
 	 					"<i onclick=\"openupdateShop("+item.ID+")\" title=\"修改店铺信息\" class=\"blue icon-pencil bigger-130\"></i>";												


					}
					else
 					if(item.SHOPSTATE==-2){
 						str+=""+
						"<i onclick=\"dongjie("+item.ID+",1)\" title=\"店铺解冻\" class=\"green icon-unlock bigger-130\"></i>"+
						"&nbsp&nbsp&nbsp&nbsp"+
					
						"&nbsp&nbsp&nbsp&nbsp"+
 	 					"<i onclick=\"openupdateShop("+item.ID+")\" title=\"修改店铺信息\" class=\"blue icon-pencil bigger-130\"></i>";												


					}
				
						str+="&nbsp&nbsp&nbsp&nbsp"+
 	 					"<i onclick=\"selectxiangxi("+item.ID+")\" title=\"显示店铺详细信息\" class=\"green  icon-search bigger-130\"></i>"+
 			"</div>"+
 		"</td>"+
	
 	"</tr>";
 		pds=item.istabledata;
 	}
 	
 	);

         		var str2 = ""+
             		"<table class=\"gopageMune\">"+
    				"<tr>"+
    					"<td><input style=\"border:none;background:#ff9121;padding:5px 20px;margin:0px 5px;color:#fff\" type=\"button\" onclick=\"chagepagea();showshopAll()\" value=\"首页\" /></td>"+
    					"<td><input style=\"border:none;background:#ff9121;padding:5px 20px;margin:0px 5px;color:#fff\" type=\"button\" onclick=\"chagepageb();showshopAll()\" value=\"上一页\" /></td>"+
    					"<td style=\"border:none;background:#ff9121;padding:5px 20px;margin:0px 5px;display:block;color:#fff\">当前在第"+$("#thispage").val()+"页</td>";
						if(pds==true){str2+="<td><input  style=\"border:none;background:#ff9121;padding:5px 20px;margin:0px 5px;color:#fff\" type=\"button\" onclick=\"chagepagec();showshopAll()\" value=\"下一页\" /></td>";}
						else{
							str2+="";
						}
						str2+=
    				"</tr>"+
    				"</table>";	
         			
         		document.getElementById('allmessage').innerHTML=str;
         		document.getElementById('annuediv').innerHTML=str2;
          		
          		
          		
          		
          		
          		
          	}else{
          		alert(data.message);
          	}
          	
         	
         },
         error:function(e){
         	console.log(e)
            
         }
     });  
}
 
function showshopAll(){
var superidss;
	var page = document.getElementById("thispage").value;
	if(page==""||page==null){page=1}
	var rows = document.getElementById("thisrows").value;
	pagess=page;
	var shopname = document.getElementById("shopname").value;
	var adminphone = document.getElementById("adminphone").value;
	var shoptype = document.getElementById("shoptype").value;
	var superid = document.getElementById("superid").value;
	if(superid=="供应商"){
		superidss=0
	}
	else{
		superidss=null;
	}
	var shopstate = document.getElementById("shopstate").value;
	var province = document.getElementById("province").value;
	
	
	var state;
	if(shopstate=="正常"){
		state=1;
	}else if(shopstate=="关闭"){
		state=2;
	}else if(shopstate=="提交"){
		state=0;
	}else if(shopstate=="未通过"){
		state=-1;
	}else if(shopstate=="冻结"){
		state=-2;
	}else{
		state=null;
	}
	
	

	
	var str="";

	 $.ajax({
         url:address+"/shop/selectall",
         type:"POST",
         data:{"adminname":adminphone,"page":page,"rows":rows ,"shopname":shopname,"shoptype":shoptype,"superid":superidss,"shopstate":state,"province":province,"uname":uname,"UID":uid},
         success:function(data){
			 if(data.message=="登录超时"||data.message=="账号不可为空"){
					location.href="login.html";
					return;
			}
			 
        	 if(data.status == '200'){
          		var message = data.data;
				if(message==""){alert("没有数据了")}
				console.log(data);
          		$.each(message, function(index, item) {
      
    
          	str+=""+
 				"<tr>";
				str+="<td>"+(index+1)+"</td>";
				if(item.id==""||item.id==null||item.id==undefined){str+="<td></td>";}else{str+="<td>"+item.id+"</td>";}
				if(item.province==""||item.province==null||item.province==undefined){str+="<td></td>";}else{str+="<td>"+item.province+"</td>";}
				if(item.shopname==""||item.shopname==null||item.shopname==undefined){str+="<td></td>";}else{str+="<td>"+item.shopname+"</td>";}
				if(item.code==""||item.code==null||item.code==undefined){str+="<td></td>";}else{str+="<td>"+item.code+"</td>";}
				if(item.superid==0){
						str+="<td>"+"分销商"+"</td>";
					}else{
						str+="<td>"+"店铺"+"</td>";
					}
				if(item.shoptype==""||item.shoptype==null||item.shoptype==undefined){str+="<td></td>";}else{str+="<td>"+item.shoptype+"</td>";}
				
					
					
					
					
				if(item.shopuname==""||item.shopuname==null||item.shopuname==undefined){str+="<td></td>";}else{str+="<td>"+item.shopuname+"</td>";}
				if(item.shopstate==""||item.shopstate==null||item.shopstate==undefined){str+="<td></td>";}else{
					if(item.shopstate==1){str+="<td>"+"正常"+"</td>";}
					else if(item.shopstate==2){
						str+="<td>"+"关闭"+"</td>";}
					else if(item.shopstate==-1){
						str+="<td>"+"未通过"+"</td>";}
					else if(item.shopstate==-2){
						str+="<td>"+"冻结"+"</td>";}
					else {str+="<td>"+"提交"+"</td>";}
					
				}
				
				
				if(item.detailed==""||item.detailed==null||item.detailed==undefined){str+="<td></td>";}else{str+="<td>"+item.detailed+"</td>";}
				if(item.shopphone	==""||item.shopphone	==null||item.shopphone	==undefined){str+="<td></td>";}else{str+="<td>"+item.shopphone	+"</td>";}
 		str+=
 		"<td>"+
 			"<div class=\"visible-md visible-lg hidden-sm hidden-xs action-buttons\">";
			
 				
 					if(item.shopstate==1){
 						str+=""+
 	 					"<i onclick=\"closeShop("+item.id+")\" title=\"关闭店铺\" class=\"orange icon-remove bigger-130\"></i>"+
 	 					
						"&nbsp&nbsp&nbsp&nbsp"+
						"<i onclick=\"dongjie("+item.id+",-2)\" title=\"店铺冻结\" class=\"red icon-lock bigger-130\"></i>"+
						
						"&nbsp&nbsp&nbsp&nbsp"+
 	 					"<i onclick=\"openupdateShop("+item.id+")\" title=\"修改店铺信息\" class=\"blue icon-pencil bigger-130\"></i>";						
 						
 					}else
 					if(item.shopstate==2){
 						str+=""+
 						"<i onclick=\"openShop("+item.id+")\" title=\"打开店铺\" class=\"green icon-ok bigger-130\"></i>"+	 					
 	 					
						"&nbsp&nbsp&nbsp&nbsp"+
						"<i onclick=\"dongjie("+item.id+",-2)\" title=\"店铺冻结\" class=\"red icon-lock bigger-130\"></i>"+

						"&nbsp&nbsp&nbsp&nbsp"+
 	 					"<i onclick=\"openupdateShop("+item.id+")\" title=\"修改店铺信息\" class=\"blue icon-pencil bigger-130\"></i>";												

					}else
 					if(item.shopstate==0){
 						str+=""+
 					"<i onclick=\"dongjie("+item.id+",1)\" title=\"审核通过\" class=\"green icon-thumbs-up bigger-130\"></i>"+
						"&nbsp&nbsp&nbsp&nbsp"+
					"<i onclick=\"dongjie("+item.id+",-1)\" title=\"审核不通过\" class=\"red icon-thumbs-down bigger-130\"></i>"+
						"&nbsp&nbsp&nbsp&nbsp"+
 	 					"<i onclick=\"openupdateShop("+item.id+")\" title=\"修改店铺信息\" class=\"blue icon-pencil bigger-130\"></i>";												

				

					}
					else
 					if(item.shopstate==-1){
 						str+=""+
 					
						"&nbsp&nbsp&nbsp&nbsp"+
 	 					"<i onclick=\"openupdateShop("+item.id+")\" title=\"修改店铺信息\" class=\"blue icon-pencil bigger-130\"></i>";												


					}
					else
 					if(item.shopstate==-2){
 						str+=""+
						"<i onclick=\"dongjie("+item.id+",1)\" title=\"店铺解冻\" class=\"green icon-unlock bigger-130\"></i>"+
						"&nbsp&nbsp&nbsp&nbsp"+
					
						"&nbsp&nbsp&nbsp&nbsp"+
 	 					"<i onclick=\"openupdateShop("+item.id+")\" title=\"修改店铺信息\" class=\"blue icon-pencil bigger-130\"></i>";												


					}
				
						str+="&nbsp&nbsp&nbsp&nbsp"+
 	 					"<i onclick=\"selectxiangxi("+item.id+")\" title=\"显示店铺详细信息\" class=\"green  icon-search bigger-130\"></i>"+
 			"</div>"+
 		"</td>"+
	
 	"</tr>";
 		pds=item.istabledata;
 	}
 	
 	);

         		var str2 = ""+
             		"<table class=\"gopageMune\">"+
    				"<tr>"+
    					"<td><input style=\"border:none;background:#ff9121;padding:5px 20px;margin:0px 5px;color:#fff\" type=\"button\" onclick=\"chagepagea();showshopAll()\" value=\"首页\" /></td>"+
    					"<td><input style=\"border:none;background:#ff9121;padding:5px 20px;margin:0px 5px;color:#fff\" type=\"button\" onclick=\"chagepageb();showshopAll()\" value=\"上一页\" /></td>"+
    					"<td style=\"border:none;background:#ff9121;padding:5px 20px;margin:0px 5px;display:block;color:#fff\">当前在第"+$("#thispage").val()+"页</td>";
						if(pds==true){str2+="<td><input  style=\"border:none;background:#ff9121;padding:5px 20px;margin:0px 5px;color:#fff\" type=\"button\" onclick=\"chagepagec();showshopAll()\" value=\"下一页\" /></td>";}
						else{
							str2+="";
						}
						str2+=
    				"</tr>"+
    				"</table>";	
         			
         		document.getElementById('allmessage').innerHTML=str;
         		document.getElementById('annuediv').innerHTML=str2;
          		
          		
          		
          		
          		
          		
          	}else{
          		alert(data.message);
          	}
          	
         	
         },
         error:function(e){
         	alert("请求失败");
            
         }
     });     

}
var kfidss;
function openupdateShop(id){
		
		kfidss=id;
		document.getElementById("xiugaikfDIV").style.display="block";
	
}

function closeupdateShop(){

	document.getElementById("xiugaikfDIV").style.display="none";
	
	
}

function changeKfphone(){

	var uname = localStorage.getItem('userName');
	var uid = localStorage.getItem('uid');
 
	var phone =  document.getElementById("kfphone").value;
	var sheng = document.getElementById("shengupd").value;

	var xxdz = document.getElementById("xxdzupd").value;
	var dpjj = document.getElementById("dpjjupd").value;
	var con ;
	con = window.confirm("是否继续？");
	if(con=true){
	$.ajax({
		
		url:address+"/shop/update",
		type:"POST",
		data:{"UID":uid,"uname":uname,"id":kfidss,"shopphone":phone,"province":sheng,"detailed":xxdz,"shopresume":dpjj},
		success:function(data){
			alert(data.message);
		},
		error:function(){
			alert("shibai ")
		}
		
	});
	}
		 
	showshopAll();	
}


function openShop(id){
	
	var con;
	con=confirm("你确定要打开吗?"); //在页面上弹出对话框
	if(con==true){
		
		var uname = localStorage.getItem('userName');
		var uid = localStorage.getItem('uid');

		$.ajax({
			url:address+"/shop/open",
			data:{"id":id,"uname":uname,"UID":uid},
			type:"POST",
			success:function (data){
					 if(data.message=="登录超时"||data.message=="账号不可为空"){
					location.href="login.html";
					return;
			}
				alert(data.message);
				window.location.reload();
			},
			error:function(e){
				alert(data.message);
				
			}
		});
	}
	else{
		
	}
	
	
}



function closeShop(id){
	
	var con;
	con=confirm("你确定要关闭吗?"); //在页面上弹出对话框
	if(con==true){
		var uname = localStorage.getItem('userName');
		var uid = localStorage.getItem('uid');
		$.ajax({
			url:address+"/shop/close",
			data:{"id":id,"uname":uname,"UID":uid},
			type:"POST",
			success:function (data){
					 if(data.message=="登录超时"||data.message=="账号不可为空"){
					location.href="login.html";
					return;
			}
				alert(data.message);
				window.location.reload();
			},
			error:function(e){
				alert("访问出错了");
				
			}
		});
	}
	else{
		
	}
	
	
}

function dongjie(id,state){
	var uname = localStorage.getItem("userName");
	var uid = localStorage.getItem("uid");
	var con;

	con=confirm("你确定要执行操作?"); //在页面上弹出对话框
	if(con==true){
		
		$.ajax({
			url:address+"/shop/examine",
			data:{"id":id,"shopstate":state,"UID":uid,"uname":uname},
			type:"POST",
			success:function (data){
					 if(data.message=="登录超时"||data.message=="账号不可为空"){
					location.href="login.html";
					return;
			}
				alert(data.message);
				window.location.reload();
			},
			error:function(e){
				alert(data.message);
			}
		});
	}
	else{
		
	}
}

function removeShop(id){
	
	var con;
	con=confirm("你确定要删除吗?"); //在页面上弹出对话框
	if(con==true){
		var uname = localStorage.getItem('userName');
	    var uid = localStorage.getItem('uid');
		$.ajax({
			url:address+"/shop/delete",
			data:{"id":id,"uname":uname,"UID":uid},
			type:"POST",
			success:function (data){
					 if(data.message=="登录超时"||data.message=="账号不可为空"){
					location.href="login.html";
					return;
			}
				alert(data.message);
				window.location.reload();
			},
			error:function(e){
				alert(data.message);
			}
		});
	}
	else{
		
	}
	
	
}


function findall(id){
	var uname = localStorage.getItem("userName");
	var uid = localStorage.getItem("uid");

	$.ajax({
			url:address+"/shop/select",
			data:{"id":id,"uname":uname,"UID":uid},
			type:"POST",
			success:function (data){
				 if(data.message=="登录超时"||data.message=="账号不可为空"){
					location.href="login.html";
					return;
			}
				console.log(data.message);
				window.location.reload();
				
			},
			error:function(e){
				console.log("访问出错");
			}
		});
	
	
}


function chagepagea(){
	var statrpage=document.getElementById("thispage").value;
	var nowpage = 1;
	document.getElementById("thispage").value=nowpage;
}
function chagepagec(){
	var statrpage=document.getElementById("thispage").value;
	var nowpage = parseInt(statrpage)+1;
	document.getElementById("thispage").value=nowpage;
}
function chagepageb(){
	var statrpage=document.getElementById("thispage").value;
	var nowpage = parseInt(statrpage)-1;
	if(nowpage<=0){nowpage=1;}
	document.getElementById("thispage").value=nowpage;
}


function formatDateTime(timeStamp) { 
    var date = new Date();
    date.setTime(timeStamp * 1000);
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
	var datass= y+"-"+m+"-"+d+"   "+h+":"+minute;
    return datass;    
};  


function selectxiangxi(id){
	document.getElementById("dianpuxinxi_div").style.display="block";
	var str="";
		var uname = localStorage.getItem('userName');
		var uid = localStorage.getItem('uid');
		
		$.ajax({
			url:address+"/shop/select",
			type:"POST",
			data:{"id":id,"UID":uid,"uname":uname},
			success:function(data){
				var item = data.data;
				console.log(data.data);
				str+="<table class=\"table table-striped table-bordered table-hover\">";
				str+="<a id='closepageannues' onclick=\"closepageannues()\" class='btn'>X</a><hr>";
				
				if(item.SHOPNAME==""||item.SHOPNAME==null||item.SHOPNAME==undefined){str+=	"<tr><td>店铺名称：</td><td></td></tr>";}else{str+=	"<tr><td>店铺名称：</td><td>"+item.SHOPNAME+"</td></tr>";}
				if(item.ADDTIME==""||item.ADDTIME==null||item.ADDTIME==undefined){str+=	"<tr><td>注册时间：</td><td></td></tr>";}else{str+=	"<tr><td>注册时间：</td><td>"+formatDateTime(item.ADDTIME/1000)+"</td></tr>";}
				if(item.CODE==""||item.CODE==null||item.CODE==undefined){str+=	"<tr><td>店铺编号：</td><td></td></tr>";}else{str+=	"<tr><td>店铺编号：</td><td>"+item.CODE+"</td></tr>";}
				if(item.PROVINCE==""||item.PROVINCE==null||item.PROVINCE==undefined){str+=	"<tr><td>省：</td><td></td></tr>";}else{str+=	"<tr><td>省：</td><td>"+item.PROVINCE+"</td></tr>";}
				if(item.CITY==""||item.CITY==null||item.CITY==undefined){str+=	"<tr><td>市：</td><td></td></tr>";}else{str+=	"<tr><td>市：</td><td>"+item.CITY+"</td></tr>";}
				if(item.AREA==""||item.AREA==null||item.AREA==undefined){str+=	"<tr><td>区/县：</td><td></td></tr>";}else{str+=	"<tr><td>区/县：</td><td>"+item.AREA+"</td></tr>";}
				if(item.STREET==""||item.STREET==null||item.STREET==undefined){str+=	"<tr><td>街道：</td><td></td></tr>";}else{str+=	"<tr><td>街道：</td><td>"+item.STREET+"</td></tr>";}
				if(item.DETAILED==""||item.DETAILED==null||item.DETAILED==undefined){str+=	"<tr><td>详细地址：</td><td></td></tr>";}else{str+=	"<tr><td>详细地址：</td><td>"+item.DETAILED+"</td></tr>";}
				if(item.SHOPLOGO==""||item.SHOPLOGO==null||item.SHOPLOGO==undefined){str+=	"<tr><td>店铺LOGO：</td><td></td></tr>";}else{str+=	"<tr><td>店铺LOGO：</td><td><img height=80 src=\""+address+item.SHOPLOGO+"\"/></td></tr>";}
				
				if(item.SHOPSTATE==""||item.SHOPSTATE==null||item.SHOPSTATE==undefined){str+=	"<tr><td>店铺状态：</td><td></td></tr>";}else{str+=	"<tr><td>店铺状态：</td><td>";
					if(item.SHOPSTATE==1){str+="正常";}
					if(item.SHOPSTATE==-1){str+="关闭";}
					if(item.SHOPSTATE==-2){str+="冻结";}
				str+=
				"</td></tr>";}
 
				if(item.SHOPRESUME==""||item.SHOPRESUME==null||item.SHOPRESUME==undefined){str+=	"<tr><td>店铺简介：</td><td></td></tr>";}else{str+=	"<tr><td>店铺简介：</td><td>"+item.SHOPRESUME+"</td></tr>";}
				if(item.SHOPTYPE==""||item.SHOPTYPE==null||item.SHOPTYPE==undefined){str+=	"<tr><td>店铺类型：</td><td></td></tr>";}else{str+=	"<tr><td>店铺类型：</td><td>"+item.SHOPTYPE+"</td></tr>";}
				if(item.MEMBERID==""||item.MEMBERID==null||item.MEMBERID==undefined){str+=	"<tr><td>店铺所属人ID：</td><td></td></tr>";}else{str+=	"<tr><td>店铺所属人ID：</td><td>"+item.MEMBERID+"</td></tr>";}
				if(item.LATITUDE==""||item.LATITUDE==null||item.LATITUDE==undefined){str+=	"<tr><td>经度：</td><td></td></tr>";}else{str+=	"<tr><td>经度：</td><td>"+item.LATITUDE+"</td></tr>";}
				if(item.LONGITUDE==""||item.LONGITUDE==null||item.LONGITUDE==undefined){str+=	"<tr><td>纬度：</td><td></td></tr>";}else{str+=	"<tr><td>纬度：</td><td>"+item.LONGITUDE+"</td></tr>";}
			 
				str+="</table>";
				document.getElementById('dianpuxinxi_div').innerHTML=str;
				
			},
			error:function(e){}
		});
}



function closepageannues(){document.getElementById("dianpuxinxi_div").style.display="none";}