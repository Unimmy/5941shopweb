 
function updateallstockbyshop(type){
	var uname = localStorage.getItem("userName");
	var uid = localStorage.getItem("uid");
	document.getElementById("types").value=type;
	document.getElementById("unames").value=uname;
	document.getElementById("uids").value=uid;
 
	var form= new FormData(document.getElementById("updateallstockbyshopform"));
	
	$.ajax({
		url:address+"/stock/updatebyshopcode",
		type:"POST",
		data:form,
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
			alert(data.message);
		}
		
	});
	
	
	
}