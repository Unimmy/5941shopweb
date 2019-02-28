	var pd;
	var pds;
	var pagess;
 

function showAll(){
	var pdnum;
var spzts = document.getElementById("spzts").value;
if(spzts=="正常"){
	pdnum=1;
}else
if(spzts=="已下架"){
	pdnum=-1;
}else
if(spzts=="已冻结"){
	pdnum=-2;
}else{
	pdnum=null;
}
	document.getElementById("spzttype").value = pdnum;
	var uname = localStorage.getItem("userName");
	var uid = localStorage.getItem("uid");
	document.getElementById("Stockuname").value=uname;
	document.getElementById("Stockuid").value=uid;
	pagess = document.getElementById("thispage").value;
	var form = new FormData(document.getElementById("Stockform"));
	
	var str="";

	 $.ajax({
         url:address+"/stock/selectall",
         type:"POST",
         data:form,
		  cache: false,  
           processData: false,  
           contentType: false,
         success:function(data){
			 
			 if(data.message=="登录超时"){
					location.href="login.html";
					return;
			}
			 console.log(data);
         	if(data.status == '200'){
         		var message = data.data;
				if(message==""){
					alert("没有数据了");
				}
         		$.each(message, function(index, item) {
         	
         	str+=""+
				"<tr>";
				
			if(item.SHOPCODE==""||item.SHOPCODE==null||item.SHOPCODE==undefined){str+="<td></td>";}else{str+="<td>"+item.SHOPCODE+"</td>";}
			if(item.CODE==""||item.CODE==null||item.CODE==undefined){str+="<td></td>";}else{str+="<td>"+item.CODE+"</td>";}
			if(item.TYPE==""||item.TYPE==null||item.TYPE==undefined){str+="<td></td>";}else{
				if(item.TYPE==1){str+="<td>"+"正常"+"</td>";}
				else if(item.TYPE==-1){str+="<td>"+"已下架"+"</td>";}
				else if(item.TYPE==-2){str+="<td>"+"已冻结"+"</td>";}
				
			}
			if(item.NUM==""||item.NUM==null||item.NUM==undefined){str+="<td></td>";}else{str+="<td>"+item.NUM+"</td>";}
		
	
		
		
		if(item.TYPE==1){
		str+=
		"<td>"+
			"<div class=\"visible-md visible-lg hidden-sm hidden-xs action-buttons\">"+
				
				"<span class=\"btn btn-danger\" onclick=\"Lowerframe("+item.CODE+")\">"+
					"下 架"+
				"</span>&nbsp &nbsp &nbsp"+
				
				
			"</div>"+
		"</td>";
		}
		else if(item.TYPE==-1){
			str+=
		"<td>"+
			"<div class=\"visible-md visible-lg hidden-sm hidden-xs action-buttons\">"+
				"<span class=\"btn btn-success\" onclick=\"normal("+item.CODE+")\">"+
					 "上 架"+
				"</span>&nbsp &nbsp &nbsp"+
				
				
				
			"</div>"+
		"</td>";
		}
	
		
		str+=
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


function normal(id){
	
    var uid = localStorage.getItem("uid");
	var con;
	con=confirm("您确定要更改吗?"); //在页面上弹出对话框
	if(con==true){
		var uname = localStorage.getItem("userName");

		$.ajax({
			url:address+"/stock/normal",
			type:"POST",
			data:{"uname":uname,"UID":uid,"youcode":id},
			success:function(data){
				if(data.message=="登录超时"){
					location.href="login.html";
					return;
				}
				alert(data.message);
				window.location.reload();
			},
			error:function(e){
				alert("请求失败");
			}
		});
	}
	else{	
	}	
}


function Lowerframe(id){

	var con;
	con=confirm("您确定要更改吗?"); //在页面上弹出对话框
	if(con==true){
		var uname = localStorage.getItem("userName");
		var uid = localStorage.getItem("uid");

		$.ajax({
			url:address+"/stock/Lowerframe",
			type:"POST",
			data:{"uname":uname,"UID":uid,"youcode":id},
			success:function(data){
				if(data.message=="登录超时"){
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

function Frozen(id){
	var uid = localStorage.getItem("uid");
	var con;
	con=confirm("您确定要更改吗?"); //在页面上弹出对话框
	if(con==true){
		var uname = localStorage.getItem("userName");

		$.ajax({
			url:address+"/stock/Frozen",
			type:"POST",
			data:{"uname":uname,"UID":uid,"youcode":id},
			success:function(data){
				if(data.message=="登录超时"){
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



