 
function uploadone(){
document.getElementById("daoruggimg").style.display="block";
	var uname = localStorage.getItem("userName");
	var uid = localStorage.getItem("uid");
	   
	  document.getElementById("uidss").value=uid;
	  document.getElementById("unamess").value=uname;
	
	var form =new FormData(document.getElementById("fileStockForm"));
	  
	

	 
	   $.ajax({
           url:address+"/stock/readStockExcel",
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
        	 
           	if(data.status == '200'){
           		
           		alert(data.message);
				document.getElementById("daoruggimg").style.display="none";
           	}else{
           	
           		alert(data.message);
				document.getElementById("daoruggimg").style.display="none";
           	}
           	
           },
           error:function(e){
           	alert("登录失败");
              
           }
       });        
	
}
