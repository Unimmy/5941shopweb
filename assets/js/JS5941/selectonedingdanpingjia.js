 

function selectonedingdanpingjia(){
	
	var dingdanid = document.getElementById("dingdanid").value;
	var uname = localStorage.getItem("userName");
	var uid = localStorage.getItem("uid");

	$.ajax({
		url:address+"/evaluate/select",
		type:"POST",
		data:{"orderid":dingdanid,"uname":uname,"UID":uid},
		success:function(data){
			if(data.message=="登录超时"){
					location.href="login.html";
					return;
				}
			if(data.status == '200'){
				console.log(data.message);
          		var message = data.data;
          		$.each(message, function(index,item) {

          
         	
          	str+=""+"<tr>"+
 			
 		"<td>"+item.ID+"</td>"+
 		"<td>"+item.ORDERSID+"</td>"+
 		"<td>"+item.NUM+"</td>"+
 		"<td>"+item.CONTENT+"</td>"+
 		
 		
 	"</tr>";
 		
 	});
		
          		document.getElementById('allmessage').innerHTML=str;
          		
          	}else{
          		alert(data.message);
          	} 	
          },
          error:function(e){
          	alert("请求失败");    
          }
      });     

 }