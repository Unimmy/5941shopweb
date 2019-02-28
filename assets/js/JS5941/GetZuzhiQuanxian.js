 

function GetZuzhiquanxian(){

	var uname = localStorage.getItem("userName");
	var uid = localStorage.getItem("uid");
	document.getElementById("thisuname").value=uname;
	document.getElementById("thisuid").value=uid;
	var formdata = new FormData(document.getElementById("ZUZHIquanxianform"));
	var str="";
	$.ajax({
		url:address+"/groupby/select",
		type:"POST",
		data:formdata,
		cache: false,  
        processData: false,  
        contentType: false,
		success:function (data){
			if(data.message=="登录超时"){
					location.href="login.html";
					return;
				}
			console.log(data)
				if(data.status == '200'){
             		var message = data.data;
					if(message=="" || message==null || message==undefined){alert("没有数据")}
             		$.each(message, function(index,item) {
             	
             	str+=""+
 				
				"<div style=\"float:left;width:305px;height:60px;margin:15px;background:#eee;text-align:center;line-height:60px\">"+
				item.AUTHSKEY+
				
				"</div>";
    		
    	});

          
             		document.getElementById('allmessage').innerHTML=str;
             	
             		
             		
             		
             		
             		
             		
             	}else{
             		alert(data.message);
             	}
             	
			
		},
		error:function (e){alert(data.message)}
	});
	
	
	
}
