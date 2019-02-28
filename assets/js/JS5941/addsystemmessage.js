
function addsystemmessage(){

		var uid = localStorage.getItem("uid");
		var uname = localStorage.getItem("userName");
	 	document.getElementById("muname").value=uname;
		document.getElementById("muid").value=uid;
	var form =new FormData(document.getElementById("addcommodityform"));
	   $.ajax({
           url:address+"/SystemMessage/add",
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
           error:function(e){
           	alert("请求失败");
              
           }
       });        
}

