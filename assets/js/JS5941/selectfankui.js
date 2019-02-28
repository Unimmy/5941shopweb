
var address = "http://123.207.147.134:8091";
function selectfankui(){
	var uname = localStorage.getItem("userName");
	var uid = localStorage.getItem("uid");

	var str ="";
	$.ajax({
		url:address+"/Feedback/select",
		data:{"uname":uname,"UID":uid},
		type:"POST",
		 success:function(data){
			 if(data.message=="登录超时"){
					location.href="login.html";
					return;
				}
             	if(data.status == '200'){
             		var message = data.data;
				if(message==""||message==null||message==undefined){
					alert("没有数据了")
				}
             		$.each(message, function(index,item) {
             
            	
             	str+=""+"<tr>";
    			if(item.text==""||item.text==null||item.text==undefined){str+="<td>"+""+"</td>";}else{str+="<td>"+item.text+"</td>";}
				if(item.phone==""||item.phone==null||item.phone==undefined){str+="<td>"+""+"</td>";}else{str+="<td>"+item.phone+"</td>";}
				
    		
    		str+=
    	
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
	
	