 
	 var uid =   localStorage.getItem("uid");
	 var uname = localStorage.getItem("userName");
var updatepagediv_ggid ;
var updatepagediv_ggkey ;
var pds;



function setpage(){
	document.getElementById("thispage").value = document.getElementById("thispageset").value;
	
}

function setrows(){
	document.getElementById("thisrows").value = document.getElementById("thisrowsset").value;
	
}

 function tiaojianGuanggao(){
	
		var indexs ;
	var selectkey = document.getElementById("selectkey").value;
	if(selectkey=="首页广告"){
		indexs=0;
	}
	else if(selectkey=="首页轮播图"){
		indexs=1;
	}
	else if(selectkey=="首页弹出广告图"){
		indexs=2;
	}
	else if(selectkey=="大分类轮播图"){
		indexs=-1;
	}
	else if(selectkey=="细分类轮播图"){
		indexs=-2;
	}
	else if(selectkey=="细类小图"){
		indexs=-3;
	}else if(selectkey=="首页轮播图下面的图片"){
		indexs=4;
	}else if(selectkey=="经销商广告图"){
		indexs=11;
	}else if(selectkey=="线上店主广告图"){
		indexs=12;
	}else{
		indexs=null;
	}
	
	document.getElementById("inputkey").value=indexs;
	 document.getElementById("uidss").value=uid;
	 document.getElementById("unamess").value=uname;

	 var str ="";
	var formdata = new FormData(document.getElementById("tiaojianGuanggaoform")) ;
	$.ajax({
		
		url:address+"/Advertisement/select",
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
			
			if(data.data==""){
				console.log(data.message);
				alert("没有数据");
			}else{
				        	 if(data.status == '200'){
          		var message = data.data;
				console.log(data);
				var indexx = 0;
          		$.each(message, function(index, item) {
				pds=item.istabledata
    
          	str+=""+
 				"<tr>";
				if(item.describe==""||item.describe==undefined||item.describe==null){str+="<td></td>";}else{str+="<td>"+item.describe+"</td>";}
				if(item.url==""||item.url==undefined||item.url==null){str+="<td></td>";}else{str+="<td>"+item.url+"</td>";}
				if(item.pagekey==""||item.pagekey==undefined||item.pagekey==null){str+="<td></td>";}else{str+="<td>"+item.pagekey+"</td>";}
				if(item.path==""||item.path==undefined||item.path==null){str+="<td></td>";}else{str+="<td><img height=80 id=\"img"+indexx+"\" onmouseout=\"suoxiaotupian("+indexx+")\" onclick=\"fangdatupian("+indexx+")\" src='"+address+item.path+"'/></td>";}
				
				if(item.key==""||item.key==undefined||item.key==null){str+="<td></td>";}else{
					if(item.key==1){
						str+="<td>"+"首页轮播图"+"</td>";
						}
					else if(item.key==2){
						str+="<td>"+"首页弹出广告图"+"</td>";
					}
					else if(item.key==-1){
						str+="<td>"+"大分类轮播图"+"</td>";
					}
					else if(item.key==-2){
						str+="<td>"+"细分类轮播图"+"</td>";
					}
					else if(item.key==-3){
						str+="<td>"+"细类小图"+"</td>";
					}
					else if(item.key==4){
						str+="<td>"+"首页轮播图下面的图片"+"</td>";
					}
					else if(item.key==11){
						str+="<td>"+"经销商广告图"+"</td>";
					}
					else if(item.key==12){
						str+="<td>"+"线上店主广告图"+"</td>";
					}
					else if(item.key==null||item.key==""||item.key==undefined){
						str+="<td></td>";
					}
					else{
						str+="<td>"+"首页广告"+"</td>";
					}
					
				}
				if(item.pagekey==""||item.pagekey==undefined||item.pagekey==null){str+="<td></td>";}else{str+="<td>"+item.pagekey+"</td>";}
					str+=""+				
					"<td><a class=\"btn btn-warning\" onclick=\"openupdatepagediv("+item.id+","+item.key+")\">修改</a> <a class=\"btn btn-danger\" onclick=\"delGuanggao("+item.id+")\">删除</a></td>";
	
				"</tr>";
 		indexx++
		}
 	
 	);

          	   var str2 = ""+
             		"<table class=\"gopageMune\">"+
    				"<tr>"+
    					"<td><input style=\"border:none;background:#ff9121;padding:5px 20px;margin:0px 5px;color:#fff\" type=\"button\" onclick=\"chagepagea();tiaojianGuanggao()\" value=\"首页\" /></td>"+
    					"<td><input style=\"border:none;background:#ff9121;padding:5px 20px;margin:0px 5px;color:#fff\" type=\"button\" onclick=\"chagepageb();tiaojianGuanggao()\" value=\"上一页\" /></td>"+
    					"<td style=\"border:none;background:#ff9121;padding:5px 20px;margin:0px 5px;display:block;color:#fff\">当前在第"+$("#thispage").val()+"页</td>";
						if(pds==true){str2+="<td><input  style=\"border:none;background:#ff9121;padding:5px 20px;margin:0px 5px;color:#fff\" type=\"button\" onclick=\"chagepagec();tiaojianGuanggao()\" value=\"下一页\" /></td>";}
						else{
							str2+="";
						}
							var str4="";
							str4+="<input type=\"button\" onclick=\"tiaojianGuanggao()\" class=\"btn btn-success\" value=\"确定\"  />";
						str2+=
    				"</tr>"+
    				"</table>";	
         			
         		document.getElementById('allmessage').innerHTML=str;
         		document.getElementById('annuediv').innerHTML=str2;
				document.getElementById('okannue4').innerHTML=str4;

         		
	
          	}else{
          		alert(data.message);
          	}
			}			
		},
		errot:function(e){
			console.log(data)
		}
	});
}

 
 function closeupdatepagediv(){

	 document.getElementById("updatepagediv_gg").style.display="none";
 }
 
  function openupdatepagediv(id,key){
	 	 document.getElementById("updatepagediv_gg").style.display="block";
	 updatepagediv_ggid = id;
	 updatepagediv_ggkey = key;
 }
 
 function saveupdatemessage(){
	 var uid = localStorage.getItem("uid");
	 var uname = localStorage.getItem("userName");
	  document.getElementById("uidgg").value=uid;
	    document.getElementById("unamegg").value=uname;
		  document.getElementById("idgg").value=updatepagediv_ggid;
		    document.getElementById("keygg").value=updatepagediv_ggkey;
	var dayafoem = new FormData( document.getElementById("updateggForm"));
			
 $.ajax({
	 
	 url:address+"/Advertisement/update",
	 type:"POST",
	 data:dayafoem,
	 cache: false,  
     processData: false,  
     contentType: false,
	 success:function(data){
		 if(data.message=="登录超时"){
			location.href="login.html";
			return;
		 }
		 alert(data.message)
	 },
	 error:function(e){}
 });
}
 
	 
 function delGuanggao(id){


	 $.ajax({
		url:address+"/Advertisement/delete",
		type:"POST",
		data:{"uname":uname,"UID":uid,"id":id},
		success:function(data){
			if(data.message=="登录超时"){
					location.href="login.html";
					return;
			}
			console.log(data);
			alert(data.message);
			tiaojianGuanggao();
		},
		error:function(e){
			console.log(data);
			alert(data.message);
		}
	 });
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

function fangdatupian(src){
	var ids = "img"+src;
	document.getElementById(ids).style.height="400px"
	
}

function suoxiaotupian(src){
	var ids = "img"+src;
	document.getElementById(ids).style.height="80px"
	
}