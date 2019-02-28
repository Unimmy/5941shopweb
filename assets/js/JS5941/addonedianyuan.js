
	var uname = localStorage.getItem("userName");
	var uid = localStorage.getItem("uid");

	
function showmokuai(){
	var issuperadmin = localStorage.getItem("issuperadmin");
	if(issuperadmin!=1){
		$("#pldaospggsS").css("display","none");
	}
}
	

function addonedianyuan(){
	
	var phone = document.getElementById("dianyuanphone").value;
	
	
	$.ajax({
		url:address+"/Clerk/add",
		type:"POST",
		data:{"UID":uid,"uname":uname,"phone":phone},
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

function tijiaodianyuan(){
	

	 document.getElementById("uidss").value=uid;
	document.getElementById("unamess").value=uname;
	var formdata = new FormData(document.getElementById("daorudyform"));
	$.ajax({
		 url:address+"/shopback/readClerk ",
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
         erroe:function(e){
        	 alert("请求失败");
         }
	});
}

function addzhidingdianyuan(){
	
	var zdcode = $("#zhidingcode").val();
	var zdphone = $("#zhidingphone").val();
 
	$.ajax({
		url:address+"/web/shopAddClerk",
		data:{"uname":uname,"UID":uid,"code":zdcode,"phone":zdphone},
		type:"POST",
		success:function(data){
			if(data.status==200){
				alert(data.data);
			}else{
				alert(data.message);
			}
			
		},
		error:function(e){}
	})
	
}