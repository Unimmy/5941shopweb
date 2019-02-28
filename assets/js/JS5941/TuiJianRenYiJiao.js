 
function TuiJianRenYiJiao(){

	var uid = localStorage.getItem("uid");
	var uname = localStorage.getItem("userName");
	document.getElementById("uidss").value=uid;
	document.getElementById("unamess").value=uname;
	var formdata = new FormData(document.getElementById("tuijianrenform"));

	$.ajax({
		
		url:address+"/Friends/update",
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
			alert(data.message);
		},
		error:function(e){
			alert("请求失败");
		}
		
	});
	
}