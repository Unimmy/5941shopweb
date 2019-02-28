
 
function updatepingjia(){
	var dingdanid = document.getElementById("dingdanid").value;
	var content = document.getElementById("remarks").value;
	var uname =localStorage.getItem('userName');
	var uid =localStorage.getItem('uid');
	
	$.ajax({
		url:address+"/evaluate/update",
		type:"POST",
		data:{"id":dingdanid,"content":content,"uname":uname,"UID":uid},
		success:function (data){
			if(data.message=="登录超时"){
					location.href="login.html";
					return;
			}
			alert(data.message);
		},
		error:function (e){
			 
		}
		
	});
}