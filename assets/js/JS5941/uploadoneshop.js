

function uploadoneshop(){

document.getElementById("daoruggimgs").style.display="block";
	
		var uid = localStorage.getItem("uid");
	  var uname = localStorage.getItem("userName");
	  document.getElementById("unamess").value=uname;
	   document.getElementById("uidss").value=uid;
		var form =new FormData(document.getElementById("fileFoem"));
	 
	   $.ajax({
           url:address+"/shopback/readShopExcel",
           type:"POST",
           data:form,
           cache: false,  
           processData: false,  
           contentType: false,
           success:function(data){
        	  if(data.message=="登录超时"){
					location.href="login.html";
					document.getElementById("daoruggimgs").style.display="none";
					return;
					
			}
        	alert(data.message) 
          
           	document.getElementById("daoruggimgs").style.display="none";
           },
           error:function(e){
           document.getElementById("daoruggimgs").style.display="none";
              
           }
       });        
 
}
