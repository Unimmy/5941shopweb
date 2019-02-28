  
function deletemessage(){
	
	var messageid = document.getElementById("messageid").value;
	var uname = localStorage.getItem("userName");
	alert("123");
	$.ajax({
		
		url:address+"/SystemMessage/delete",
		type:"POST",
		data:{"id":messageid,"uname":uname,"uid":"1"},
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