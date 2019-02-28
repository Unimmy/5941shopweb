	var pd;
	var pds;
	var pagess;
 

function showAll(){
	var uname = localStorage.getItem("userName");
	var uid = localStorage.getItem("uid");
	var str="";

	 $.ajax({
         url:address+"/Refundresponse/select",
         type:"POST",
         data:{"uname":uname,"UID":uid},
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
				
			if(item.id==""||item.id==null||item.id==undefined){str+="<td></td>";}else{str+="<td>"+item.id+"</td>";}
			if(item.ordercode==""||item.ordercode==null||item.ordercode==undefined){str+="<td></td>";}else{str+="<td>"+item.ordercode+"</td>";}
			if(item.responsecode==""||item.responsecode==null||item.responsecode==undefined){str+="<td></td>";}else{str+="<td>"+item.responsecode+"</td>";}
			if(item.type==""||item.type==null||item.type==undefined){str+="<td></td>";}else{str+="<td>"+item.type+"</td>";}
			if(item.price==""||item.price==null||item.price==undefined){str+="<td></td>";}else{str+="<td>"+item.price+"</td>";}
			if(item.ordernum==""||item.ordernum==null||item.ordernum==undefined){str+="<td></td>";}else{str+="<td>"+item.ordernum+"</td>";}
			if(item.istrue==""||item.istrue==null||item.istrue==undefined){str+="<td>否</td>";}else{
				if(item.istrue==1){
					str+="<td>是</td>";
				}else{
					str+="<td>否</td>";
				}
				
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



