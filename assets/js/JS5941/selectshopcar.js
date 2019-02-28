var message;
 
function showshopcar(){


	var page = document.getElementById("thispage").value;
	if(page==""||page==null){page=1}
	var rows = document.getElementById("thisrows").value;
	
	var uname =  localStorage.getItem("userName");
	var uid =  localStorage.getItem("uid");
	

	
	

	
	var str="";

	 $.ajax({
         url:address+"/card/select",
         type:"POST",
         data:{"page":page,"rows":rows ,"uname":uname,"UID":uid},
         success:function(data){
        	 console.log(data);
			 if(data.message=="登录超时"){
					location.href="login.html";
					return;
				}
        	 if(data.status == '200'){
          		message = data.data;
				if(message==""){alert("没有数据")}
          		$.each(message, function(index, item) {
      
    
          	str+=""+
 				"<tr>";
 			if(item.ITEMID==""||item.ITEMID==null||item.ITEMID==undefined){str+=	"<td></td>";}else{str+=  	"<td>"+item.ITEMID+"</td>";}
			if(item.NUM==""||item.NUM==null||item.NUM==undefined){str+=	"<td></td>";}else{str+=  	"<td>"+item.NUM+"</td>";}
			if(item.MEMBERID==""||item.MEMBERID==null||item.MEMBERID==undefined){str+=	"<td></td>";}else{str+=  	"<td>"+item.MEMBERID+"</td>";}
			if(item.TITLE==""||item.TITLE==null||item.TITLE==undefined){str+=	"<td></td>";}else{str+=  	"<td>"+item.TITLE+"</td>";}
			if(item.PRICE==""||item.PRICE==null||item.PRICE==undefined){str+=	"<td></td>";}else{str+=  	"<td>"+item.PRICE+"</td>";}
			if(item.TOTALFEE==""||item.TOTALFEE==null||item.TOTALFEE==undefined){str+=	"<td></td>";}else{str+=  	"<td>"+item.TOTALFEE+"</td>";}


 				
 					
 					
 					
 					
 			str+=""+	
 			"</div>"+
 		"</td>"+
 	"</tr>";
 		
 	}
 	
 	);

          		var str2 = ""+
          		"<table class=\"gopageMune\">"+
 				"<tr>"+
 					"<td><span onclick=\"chagepagea();showshopcar()\">首页</span></td><td onclick=\"chagepageb();showshopcar()\">上一页</td><td onclick=\"chagepagec();showshopcar()\">下一页</td>"+
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


function shopsave(){

	var page = document.getElementById("thispage").value;
	if(page==""||page==null){page=1}
	var rows = document.getElementById("thisrows").value;
	
	var uname = localStorage.getItem('userName');
	var dataarray;
	
        	$.ajax({
                url:address+"/shopback/save",
                type:"POST",
                data:{"JsonArray":message ,"uname":uname,"uid":"1"},
                success:function(datas){
					if(data.message=="登录超时"){
					location.href="login.html";
					return;
				}
                	console.log(datas.message);
                },   
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
	
	

