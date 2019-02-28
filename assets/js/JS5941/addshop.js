

function addshop(){
	
	var uname = localStorage.getItem('userName');
	var uid = localStorage.getItem("uid");
	document.getElementById("unameadddp").value=uname;
	document.getElementById("uidadddp").value=uid;
	
	var form = new FormData(document.getElementById("addshopform"));

	 $.ajax({
		
         url:address+"/shop/add",
         type:"POST",
         data:form,
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
         erroe:function(e){
        	 alert("请求失败");
         }
		
		
	})
}


