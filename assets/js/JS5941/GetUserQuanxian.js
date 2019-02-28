var message ="";
var key=[];
var newkey=[];
var ids = 0; 
 

function getsystemallquanxian(){
	var uname = localStorage.getItem("userName");
	
	var uid = localStorage.getItem("uid");
	document.getElementById("thisuname").value = uname;
	document.getElementById("thisuid").value=uid;
	var formdata = new FormData(document.getElementById("quanxianform"));

	var str="";
	$.ajax({
		url:address+"/auths/select",
		type:"POST",
		data:formdata,
		 cache: false,  
           processData: false,  
           contentType: false,
         success:function(data){
			message = data.data;
			if(data.message=="登录超时"){
					location.href="login.html";
					return;
				}
        	 if(data.status == '200'){
          		
          		$.each(message, function(index, item) {
				console.log(item);
    
          	str+=""+
 				
				"<div style=\"float:left;width:305px;height:60px;margin:15px;border:1px solid #eee;text-align:center;line-height:60px\">"+
				item.notes+
				"&nbsp &nbsp" +
				"<input type=\"checkbox\" name=\"quanxian\" id=boxid"+ids+" onchange=\"chagearray('"+item.key+"') \" />"+
				"</div>";
	
				ids++;
 		
 		
				});
          		
				
          		document.getElementById('allmessage').innerHTML=str;
          			
          	}else{
          		alert(data.message);
          	}       	
         },
         error:function(e){
         	alert("请求失败");    
         }
     });     

}

function chagearray(message){
	
	newkey=[];
	var a =0;
	var newkeyindex=0;
	var size = key.length;
	for(var i=0;i<size;i++){
		if(key[i]==message){
			a=1;
			
		}else{
			newkey[newkeyindex]=key[i];
			newkeyindex ++;
		}
			
	}
	if(a==0){
		newkey[newkey.length]=message;
	}
	key=newkey;

	console.log(newkey)
	
	
}

function addquanxian(){
	 var zuzhiming = document.getElementById("zuzhiming").value;
	 var uid = localStorage.getItem("uid");
	 var uname = localStorage.getItem("userName");

	 
	 $.ajax({
		 url:address+"/groupby/add",
		 type:"POST",
		 data:{"organization":zuzhiming,"UID":uid,"uname":uname,"JsonArray":JSON.stringify(newkey)},
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
function delquanxian(){
	 var zuzhiming = document.getElementById("zuzhiming").value;
	 var uid = localStorage.getItem("uid");
	 var uname = localStorage.getItem("userName");

	 
	 $.ajax({
		 url:address+"/groupby/delete",
		 type:"POST",
		 data:{"organization":zuzhiming,"UID":uid,"uname":uname},
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
function updquanxian(){
	 var zuzhiming = document.getElementById("zuzhiming").value;
	 var uid = localStorage.getItem("uid");
	 var uname = localStorage.getItem("userName");

	 
	 $.ajax({
		 url:address+"/groupby/update",
		 type:"POST",
		 data:{"organization":zuzhiming,"UID":uid,"uname":uname,"JsonArray":JSON.stringify(newkey)},
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

function MHsearchQX(){
	var str ="" ;
	var saerchquanxian = document.getElementById("saerchquanxian").value;
	 var uid = localStorage.getItem("uid");
	 var uname = localStorage.getItem("userName");

	 $.ajax({
		 url:address+"/auths/selectlike",
		 type:"POST",
		 data:{"uname":uname,"UID":uid,"name":saerchquanxian},
		 success:function(data){
			 console.log(data.data)
			 message = data.data;
			 if(data.message=="登录超时"){
					location.href="login.html";
					return;
				}
        	 if(data.status == '200'){
          		
          		$.each(message, function(index, item) {
				console.log(item);
    
          	str+=""+
 				
				"<div style=\"float:left;width:305px;height:60px;margin:15px;border:1px solid #eee;text-align:center;line-height:60px\">"+
				item.notes+
				"&nbsp &nbsp" +
				"<input type=\"checkbox\" name=\"quanxian\" id=boxid"+ids+" onchange=\"chagearray('"+item.key+"') \" />"+
				"</div>";

				ids++;
 		
 		
				});
          		
				
          		document.getElementById('allmessage').innerHTML=str;
          			
          	}else{
          		alert(data.message);
          	} 
		 },
		 error:function(e){}
	 });
	
}


function MHsearchQX2(saerchquanxian){
	var str ="" ;

	 var uid = localStorage.getItem("uid");
	 var uname = localStorage.getItem("userName");

	 $.ajax({
		 url:address+"/auths/selectlike",
		 type:"POST",
		 data:{"uname":uname,"UID":uid,"name":saerchquanxian},
		 success:function(data){
			 console.log(data.data)
			 message = data.data;
			 if(data.message=="登录超时"){
					location.href="login.html";
					return;
				}
			 if(data.data==""||data.data==null){
				 alert("暂无数据");

				
			 }
        	 if(data.status == '200'){
          		
          		$.each(message, function(index, item) {
				console.log(item);
    
          	str+=""+
 				
				"<div style=\"float:left;width:305px;height:60px;margin:15px;border:1px solid #eee;text-align:center;line-height:60px\">"+
				item.notes+
				"&nbsp &nbsp" +
				"<input type=\"checkbox\" name=\"quanxian\" id=boxid"+ids+" onchange=\"chagearray('"+item.key+"') \" />"+
				"</div>";

				ids++;
 		
 		
				});
          		
				
          		document.getElementById('allmessage').innerHTML=str;
          			
          	}else{
          		alert(data.message);
          	} 
		 },
		 error:function(e){}
	 });
	
}