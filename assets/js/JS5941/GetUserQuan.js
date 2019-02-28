var message ="";
var key=[];
var newkey
var uname = localStorage.getItem("userName");
var uid = localStorage.getItem("uid");
 

function getquanxianzu(){
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
			 if(data.message=="登录超时"){
					location.href="login.html";
					return;
				}
			message = data.data;
        	 if(data.status == '200'){
          		var ids = 0; 
          		$.each(message, function(index, item) {
				console.log(item);
    
          	str+=""+
 				
				"<div style=\"float:left;width:305px;height:60px;margin:15px;background:#eee;text-align:center;line-height:60px\">"+
				item.notes+
				"&nbsp &nbsp" +
				"<input type=\"checkbox\" name=\"quanxian\" id=boxid"+ids+" onchange=\"chagearray('"+item.key+"') \" />"+
				"</div>";
				
				for(var a =0;a<newkey.length;a++){
					item.key == newkey[a]
				}
				if(item.key == newkey[ids]){
				
					
					var val = document.getElementById("boxid0");
					val.attr("checked",true);
					console.log(val);
				}
				
					
							
						
					
				
 				
 		ids++;
 		
 		
 	}
 	
 	);
          		
				
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
	 alert(zuzhiming);
	 var uid = localStorage.getItem("uid");
	 var uname = localStorage.getItem("userName");

	 
	 $.ajax({
		 url:address+"/organization/authorization",
		 type:"POST",
		 data:{"mphone":zuzhiming,"UID":uid,"uname":uname,"JsonArray":JSON.stringify(newkey)},
		 success:function(data){
			 if(data.message=="登录超时"){
					location.href="login.html";
					return;
				}
			 alert(data.message);
		 },
		 error:function(e){
			 alert(data.message);
		 }
	 });
	 
	
}
