 

function setuname(){

	  var uname = localStorage.getItem("userName");
	  var uid = localStorage.getItem("uid");
	  document.getElementById("unamess").value=uname;
	  document.getElementById("uidssss").value=uid;
	  document.getElementById("unamegg").value=uname;
	  document.getElementById("uidgg").value=uid;
}


function uploadone(){
	document.getElementById("daoruggimgs").style.display="block";
	var form =new FormData(document.getElementById("commdityform"));

	 
	 
	   $.ajax({
           url:address+"/commodityback/readCommodityExcel",
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
        	  document.getElementById("daoruggimgs").style.display="none";
        	alert(data.message);
           	
           },
           error:function(e){
		   	  document.getElementById("daoruggimgs").style.display="none";
            	alert("请求失败");
              
           }
       });  
	   
}

function uploadoneguige(){
	document.getElementById("daoruggimg").style.display="block";
	var form =new FormData(document.getElementById("fileFormguige"));

	 
	 
	   $.ajax({
           url:address+"/commodity/readCommodityExcel",
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
        	  document.getElementById("daoruggimg").style.display="none";
        	alert(data.message);
           	
           },
           error:function(e){
		   	  document.getElementById("daoruggimg").style.display="none";
            	alert("请求失败");
              
           }
       });  
	   
}