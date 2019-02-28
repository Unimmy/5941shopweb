 
function tiaojianstockcaozuo(type){
	var uname = localStorage.getItem("userName");
	var uid = localStorage.getItem("uid");
	document.getElementById("types").value=type;
	document.getElementById("unames").value=uname;
	document.getElementById("uids").value=uid;

	var formtable = document.getElementById("stockdongjieform");
	var formdata= new FormData(formtable);
	
	$.ajax({
		url:address+"/stock/updatebycommodity",
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
		
		}
		
	});
	
	
	
}