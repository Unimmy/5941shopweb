 
function addjiesuanguize(){
var uid = localStorage.getItem("uid");
var uname = localStorage.getItem("userName");
 
document.getElementById("unamesss").value=uname;
	document.getElementById("uidsss").value=uid;
	var form = new FormData(document.getElementById("jiesuanguizeform"));
	
	
	$.ajax({
		cache: false,  
        processData: false,  
        contentType: false,
		url:address+"/OrdersRule/add",
		data:form,
		type:"POST",
		success:function(data){
			if(data.message=="登录超时"){
					location.href="login.html";
					return;
			}
			alert(data.message);
		},
		error:function(e){
		}
			
	});
	
}

function chagetypes(){
	var types = document.getElementById("selectContent").value;
	if(types=="门店直销"){
		document.getElementById("typexz").value=2;
	}else{
		document.getElementById("typexz").value=1;
	}
}