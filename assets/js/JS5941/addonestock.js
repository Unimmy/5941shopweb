
	
function addonestocks(){

	var uname = localStorage.getItem("userName");
	document.getElementById("unames").value=uname;
	document.getElementById("uids").value="1";
	var formdata = new FormData(document.getElementById("addonestockform"));
	
	$.ajax({
		url:address+"/stock/add",
		type:"POST",
		data:formdata,
		cache: false,  
        processData: false,  
        contentType: false,
		success:function(data){
			if(data.message=="登陆超时"){
				location.href="login.html"
			}else{
				alert(data.message);
			}
		},
		error:function(e){
			alert("请求失败");
		}
		
	});
	
}

