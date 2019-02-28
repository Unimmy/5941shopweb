var uid = localStorage.getItem("uid");
var uname = localStorage.getItem("userName");

    var pds;
function findjiesuanguize(){

var str="";
	
	 
	  $.ajax({
		url:address+"/Programme/select",
		data:{"uname":uname,"UID":uid},
		type:"POST",
		success:function(data){
			console.log(data);
				var message = data.data;
				
				
				
				if(data.message=="登录超时"){
					location.href="login.html";
					return;
				}
				
				
				if(message==""){alert("没有更多数据")}
         		$.each(message, function(index, item) {
         		pds = item.ISTABLEDATA;
         
         	str+=""+
				"<tr>";
					if(item.id==""||item.id==null||item.id==undefined){str+="<td></td>";}else{str+="<td>"+item.id+"</td>";}
					
					if(item.onlineshopkeeper==""||item.onlineshopkeeper==null||item.onlineshopkeeper==undefined){str+="<td></td>";}else{str+="<td>"+item.onlineshopkeeper+"%</td>";}
					if(item.shopone==""||item.shopone==null||item.shopone==undefined){str+="<td></td>";}else{str+="<td>"+item.shopone+"%</td>";}
					if(item.shopto==""||item.shopto==null||item.shopto==undefined){str+="<td></td>";}else{str+="<td>"+item.shopto+"%</td>";}
				    if(item.shop==""||item.shop==null||item.shop==undefined){str+="<td></td>";}else{str+="<td>"+item.shop+"%</td>";}
					if(item.systemone==""||item.systemone==null||item.systemone==undefined){str+="<td></td>";}else{str+="<td>"+item.systemone+"%</td>";}
					if(item.sales==""||item.sales==null||item.sales==undefined){str+="<td></td>";}else{str+="<td>"+item.sales+"%</td>";}
					
					
					 
					
		str+=
				"</tr>";
		
	}
	
	);

         		
var str2 = ""+
             		"<table class=\"gopageMune\">"+
    				"<tr>"+
    					"<td><input style=\"border:none;background:#ff9121;padding:5px 20px;margin:0px 5px;color:#fff\" type=\"button\" onclick=\"chagepagea();findjiesuanguize()\" value=\"首页\" /></td>"+
    					"<td><input style=\"border:none;background:#ff9121;padding:5px 20px;margin:0px 5px;color:#fff\" type=\"button\" onclick=\"chagepageb();findjiesuanguize()\" value=\"上一页\" /></td>"+
    					"<td style=\"border:none;background:#ff9121;padding:5px 20px;margin:0px 5px;display:block;color:#fff\">当前在第"+$("#thispage").val()+"页</td>";
						if(pds==true){str2+="<td><input  style=\"border:none;background:#ff9121;padding:5px 20px;margin:0px 5px;color:#fff\" type=\"button\" onclick=\"chagepagec();findjiesuanguize()\" value=\"下一页\" /></td>";}
						else{
							str2+="";
						}
						str2+=
    				"</tr>"+
    				"</table>";	
         			
         		document.getElementById('allmessage').innerHTML=str;
         		document.getElementById('annuediv').innerHTML=str2;
         		
         		
         	
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