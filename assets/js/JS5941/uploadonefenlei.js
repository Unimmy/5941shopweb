 
function inputbig(){
	
	 document.getElementById("tishi").style="block";
	var form =new FormData(document.getElementById("inputbig"));

	   $.ajax({
           url:address+"/Advertisement/maxExcel",
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
        	 document.getElementById("tishi").style.display="none";
        	 
           alert(data.message)
           	
           },
           error:function(e){
			   document.getElementById("tishi").style.display="none";
           	alert("请求失败");
               
           }
       });  
		document.getElementById("tishi").style.display="none";
}

function setuname(){

	  var uname = localStorage.getItem("userName");
	  var uid = localStorage.getItem("uid");
	  document.getElementById("unamess").value=uname;
	  document.getElementById("uidssss").value=uid;
	  document.getElementById("unamegg").value=uname;
	  document.getElementById("uidgg").value=uid;
}

function inputxi(){
	document.getElementById("tishi2").style.display="block";
	var form =new FormData(document.getElementById("inputxi"));

	   $.ajax({
           url:address+"/Advertisement/minExcel",
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
        	  document.getElementById("tishi2").style.display="none";
        	alert(data.message);
           	
           },
           error:function(e){
		   	  document.getElementById("tishi2").style.display="none";
            	alert("请求失败");
              
           }
       });        
}