var uid = localStorage.getItem("uid");
var uname = localStorage.getItem("userName");
 

function shengqingshop(){

	document.getElementById("unames").value=uname;
	document.getElementById("uids").value=uid;
	var form = new FormData(document.getElementById("shengqingshop"));
	
	$.ajax({
		cache: false,  
        processData: false,  
        contentType: false,
		url:address+"/shop/addto",
		type:"POST",
		data:form,
		success:function(data){
			if(data.message=="登录超时"){
					location.href="login.html";
					return;
			}
			alert(data.message);
		},
		error:function(e){
			alert(e.message);
		}
		
	});
	
}

