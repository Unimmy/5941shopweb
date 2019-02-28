

function updatepassword(){
	
	var uid = localStorage.getItem("uid");
	var uname = localStorage.getItem("userName");
	var oldpassword = document.getElementById("oldpassword").value;
	var newpassword = document.getElementById("newpassword").value;
	var con;
	con=confirm("您确定要修改吗?"); //在页面上弹出对话框
	if(con==true){
		$.ajax({
		 url:address+"/member/update",
		 data:{"UID":uid,"uname":uname,"password":oldpassword,"newpassword":newpassword},
		 type:"POST",
		 success:function(data){
			if(data.status==200){
				alert("修改成功");
			}else{
				alert(data.message)
			}
		 },
		 error(e){}
	 });
	}
	else{}
	 
	
}