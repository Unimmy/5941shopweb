 
function showAllfile(){

	var uname = localStorage.getItem('userName');
	var uid = localStorage.getItem('uid');
	document.getElementById("fileuname").value=uname;
	document.getElementById("fileuid").value=uid;
	var time = document.getElementById("nowDate").value;
	if(time==null||time==""||time==undefined){
		document.getElementById("thisdata").value=null;
	}else{
		var date = new Date(time);
		var time1 = date.getTime();
		var dates = formatDateTime(time1/1000);
			document.getElementById("thisdata").value=dates;
	}
	var form = new FormData( document.getElementById("getfileform"));
	

	
	var str="";

	 $.ajax({
         url:address+"/feile/selectbydate",
         type:"POST",
		   cache: false,  
           processData: false,  
           contentType: false,
         data:form,
         success:function(data){
         	if(data.message=="登录超时"){
					location.href="login.html";
					return;
			}
         		
         	 if(data.status == '200'){
           		message = data.data;
           		$.each(message, function(index, item) {
       
     
           	str+=""+
  				"<tr>";
				if(item.suffix=="png"||item.suffix=="PNG"||item.suffix=="jpg"||item.suffix=="JPG"||item.suffix=="jpeg"||item.suffix=="JPEG"||item.suffix=="bmp"||item.suffix=="BMP"||item.suffix=="gif"||item.suffix=="GIF"){
				
					
					if(item.path==""||item.path==null||item.path==undefined){str+="<td></td>";}else{str+="<td><img onclick=\"bigtupians('"+address+item.path+"')\" width=60 height=60 src=\""+address+item.path+"\"/></td>";}

					if(item.filedate==""||item.filedate==null||item.filedate==undefined){str+="<td></td>";}else{str+="<td>"+item.filedate+"</td>";}
					str+="<td>"+"<span onclick=\"deletefile("+item.id+")\" class=\"red\">删除</span>"+"</td>";
					
				}else{
					
								
					
				}
  			
  		str+=
  	"</tr>";
  		
  	}
  	
  	);   

           		var str2 = ""+
           		"<table class=\"gopageMune\">"+
  				"<tr>"+
  					"<td><span onclick=\"chagepagea();showAllfile()\">首页</span></td><td onclick=\"chagepageb();showAllfile()\">上一页</td><td onclick=\"chagepagec();showAllfile()\">下一页</td>"+
  				"</tr>"+
  				"</table>";	
           			
           		document.getElementById('allmessage').innerHTML=str;
           		document.getElementById('annuediv').innerHTML=str2;
           		
           		
           		
           		
           		
           		
           	}else{
           		alert(data.message);
           	}
           	
          	
          },
          error:function(e){
          	alert("请求失败");
             
          }
      });     

 }

function formatDateTime(timeStamp) { 
    var date = new Date();
    date.setTime(timeStamp * 1000);
    var y = date.getFullYear();    
    var m = date.getMonth() + 1;    
    m = m < 10 ? ('0' + m) : m;    
    var d = date.getDate();    
    d = d < 10 ? ('0' + d) : d;    
    var h = date.getHours();  
    h = h < 10 ? ('0' + h) : h;  
    var minute = date.getMinutes();  
    var second = date.getSeconds();  
    minute = minute < 10 ? ('0' + minute) : minute;    
    second = second < 10 ? ('0' + second) : second;   
    return y+m+d;    
}


function chagepagea(){
	var statrpage=document.getElementById("thispage").value;
	var nowpage = 1;
	document.getElementById("thispage").value=nowpage;
}
function chagepagec(){
	var statrpage=document.getElementById("thispage").value;
	var nowpage = parseInt(statrpage)+1;
	document.getElementById("thispage").value=nowpage;
}
function chagepageb(){
	var statrpage=document.getElementById("thispage").value;
	var nowpage = parseInt(statrpage)-1;
	if(nowpage<=0){nowpage=1;}
	document.getElementById("thispage").value=nowpage;
}


function deletefile(id){
		var uname = localStorage.getItem('userName');
	var uid = localStorage.getItem('uid');
	$.ajax({
		url:address+"/feile/delete",
		data:{"UID":uid,"uname":uname,"id":id},
		type:"POST",
		success:function(data){
			if(data.message=="登录超时"){
					location.href="login.html";
					return;
			}
			alert(data.message);
		},
		error:function(e){
			alert("请求失败");
		}
	});
}	


function bigtupians(src){
	document.getElementById("bigtupian").src=src+"";
	document.getElementById("imgdivs").style.display="block";
	document.getElementById("guanbiannue").style.display="block";
}

function closeimgdiv(){
	document.getElementById("imgdivs").style.display="none";
	document.getElementById("guanbiannue").style.display="none";
}