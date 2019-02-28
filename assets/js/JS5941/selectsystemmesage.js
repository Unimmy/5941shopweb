	var pds;
	var pagess;
 
function selectsystemmessage(){
	var page = document.getElementById("thispage").value;
	pagess = page;
	if(page==""||page==null){page=1}
	var rows = document.getElementById("thisrows").value;
	var uname = localStorage.getItem("userName");
	var uid = localStorage.getItem("uid");
	var str="";

	 $.ajax({
         url:address+"/SystemMessage/selectallByadmin",
         type:"POST",
         data:{"page":page,"rows":rows,"uname":uname,"UID":uid},
         success:function(data){
			if(data.message=="登录超时"){
					location.href="login.html";
					return;
				}
			 if(data.status == '200'){
         		var message = data.data;
         		$.each(message, function(index, item) {
         
         	
         	str+=""+
				"<tr>";
				
				
			if(item.title==null||item.title==""||item.title==undefined){str+="<td></td>";}else{str+="<td>"+item.title+"</td>";}
			if(item.type==null||item.type==""||item.type==undefined){str+="<td></td>";}else{str+="<td>"+item.type+"</td>";}
			if(item.content==null||item.content==""||item.content==undefined){str+="<td></td>";}else{str+="<td>"+item.content+"</td>";}
			if(item.summary==null||item.summary==""||item.summary==undefined){str+="<td></td>";}else{str+="<td>"+item.summary+"</td>";}
			if(item.image==null||item.image==""||item.title==undefined){str+="<td></td>";}else{str+="<td><img src=\""+address+item.image+"\"/></td>";}
			if(item.memberid==null||item.memberid==""||item.memberid==undefined){str+="<td></td>";}else{str+="<td>"+item.memberid+"</td>";}
			if(item.mymemberid==null||item.mymemberid==""||item.mymemberid==undefined){str+="<td></td>";}else{str+="<td>"+item.mymemberid+"</td>";}
			pds=item.idtabledata;
			str+=
		
		"<td>"+
			"<div class=\"visible-md visible-lg hidden-sm hidden-xs action-buttons\">"+
				"<input type=\"hidden\" id =\"messagesid\" value=\""+item.id+"\" />"+
				"<a class=\"red\" href=\"#\">"+
					"<i onclick=\"deletemessage()\" class=\"icon-trash bigger-130\"></i>"+
				"</a>"+
			"</div>"+
		"</td>"+
	"</tr>";
		
	}
	
	);

         			var str2 = ""+
             		"<table class=\"gopageMune\">"+
    				"<tr>"+
    					"<td><span onclick=\"chagepagea();selectsystemmessage()\"><a>首页</a></span></td><td>  &nbsp &nbsp &nbsp  </td><td>  当前"+pagess+"页  </td><td>  &nbsp &nbsp &nbsp  </td><td onclick=\"chagepageb();selectsystemmessage()\"><a>上一页</a></td><td>  &nbsp &nbsp &nbsp  </td>";
						
						if(pds==true){str2+="<td onclick=\"chagepagec();selectsystemmessage()\"><a>下一页</a></td>";}
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

function selectmessageBytype(){
	var type = document.getElementById("types").value;
	var page = document.getElementById("thispage").value;
	if(page==""||page==null){page=1}
	var rows = document.getElementById("thisrows").value;
		var uname = localStorage.getItem("userName");
		var uid = localStorage.getItem("uid");
	var str="";

$.ajax({
         url:address+"/SystemMessage/selectallBytype",
         type:"POST",
         data:{"page":page,"rows":rows,"uname":uname,"UID":uid,"type":type},
         success:function(data){
			 if(data.message=="登录超时"){
					location.href="login.html";
					return;
				}
			if(data.data==""){alert("没有数据了")}
			 if(data.status == '200'){
         		var message = data.data;
         		$.each(message, function(index, item) {
         
         	
         	str+=""+
				"<tr>";
				
				if(item.title==""||item.title==null||item.title==undefined){str+="<td></td>";}else{str+="<td>"+item.title+"</td>";}
				if(item.type==""||item.type==null||item.type==undefined){str+="<td></td>";}else{str+="<td>"+item.type+"</td>";}
				if(item.content==""||item.content==null||item.content==undefined){str+="<td></td>";}else{str+="<td>"+item.content+"</td>";}
				if(item.summary==""||item.summary==null||item.summary==undefined){str+="<td></td>";}else{str+="<td>"+item.summary+"</td>";}
				if(item.image==""||item.image==null||item.image==undefined){str+="<td></td>";}else{str+="<td>"+item.image+"</td>";}
				if(item.memberid==""||item.memberid==null||item.memberid==undefined){str+="<td></td>";}else{str+="<td>"+item.memberid+"</td>";}
				if(item.mymemberid==""||item.mymemberid==null||item.mymemberid==undefined){str+="<td></td>";}else{str+="<td>"+item.mymemberid+"</td>";}
			
		
		"<td>"+
			"<div class=\"visible-md visible-lg hidden-sm hidden-xs action-buttons\">"+
				"<input type=\"hidden\" id =\"messagesid\" value=\""+item.id+"\" />"+
				"<a class=\"red\" href=\"#\">"+
					"<i onclick=\"deletemessage()\" class=\"icon-trash bigger-130\"></i>"+
				"</a>"+
			"</div>"+
		"</td>"+
	"</tr>";
		
	}
	
	);

         		var str2 = ""+
         		"<table class=\"gopageMune\">"+
				"<tr>"+
					"<td><span onclick=\"chagepagea();selectsystemmessage()\">首页</span></td><td onclick=\"chagepageb();selectsystemmessage()\">上一页</td><td onclick=\"chagepagec();selectsystemmessage()\">下一页</td>"+
				"</tr>"+
				"</table>";	
         			
         		document.getElementById('allmessage').innerHTML=str;
         		document.getElementById('annuediv').innerHTML=str2;

         	}else{
         		alert("发生了一点小意外！");
         	}
         	
         },
         error:function(e){
         	alert("请求失败");
            
         }
     });     

}



function deletemessage(){
		var uname = localStorage.getItem("userName");
			var uid = localStorage.getItem("uid");
	var id=document.getElementById("messagesid").value;

	$.ajax({
		url:address+"/SystemMessage/delete",
		type:"POST",
		data:{"id":id,"uname":uname,"UID":uid},
		success:function(data){
			if(data.message=="登录超时"){
					location.href="login.html";
					return;
				}
			alert(data.message);
		},
		error:function(e){
				
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
