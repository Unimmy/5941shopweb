	var uid = localStorage.getItem("uid");
	var uname = localStorage.getItem("userName");
 var pds;
 var typesuzi =1;
 
 function setdcshuju(){
	$("#dctouname").val(uname);
	$("#dctoUID").val(uid);
	
	

 }
 
 function changetype(){
	 
	 var typenum = 1;
	 
	var typevalue = document.getElementById("selecttypexiala").value;
	
	if(typevalue=="门店"){typenum=1}
	if(typevalue=="导购"){typenum=2}
	if(typevalue=="供应商"){typenum=3}
	 document.getElementById("selecttype").value=typenum;
	typesuzi=typenum;
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
    return y+"-"+m+"-"+d+" "+h+":"+minute;    
};  
 var thannue="";
function showAll(){
	
    var contexts = $("#getmessage").val();
	var rows = $("#thisrows").val();
	var page = $("#thispage").val();
	var types;
	var typess = $("#zhuangtaiscelect").val();
	if(typess=="导购"){
		types=1;
	}else if(typess=="用户"){
		types=2;
	}
	var str="";
	
	 $.ajax({
         url:address+"/web/clerk2",
         type:"POST",
         data:{"uname":uname,"UID":uid,"type":types,"rows":rows,"page":page,"str":contexts},
         success:function(data){
			 if(data.message=="登录超时"){
					location.href="login.html";
					return;
			}
			 console.log(data);
         	if(data.status == '200'){
         		var message = data.data;
					
					
						
						thannue=
								"<th>序号</th>"+
								"<th>用户ID</th>"+
								"<th>用户账号</th>"+
								"<th>昵称</th>"+
								"<th>联系方式</th>"+
								"<th>性别</th>"+
								"<th>状态</th>"+
								"<th>来源</th>"+
								"<th>店铺名称</th>"+
								"<th>支付宝账号</th>"+
								"<th>真实姓名</th>";
								
								
					$.each(message, function(index, item) {
					str+=
					"<tr>";str+="<td>"+(index+1)+"</td>";
					if(item.ID ==""||item.ID==null||item.ID==undefined){str+="<td></td>";}else{str+="<td>"+item.ID+"</td>";}
					if(item.UNAME ==""||item.UNAME==null||item.UNAME==undefined){str+="<td></td>";}else{str+="<td>"+item.UNAME	+"</td>";}
					if(item.NICKNAME ==""||item.NICKNAME==null||item.NICKNAME==undefined){str+="<td></td>";}else{str+="<td>"+item.NICKNAME+"</td>";}
					if(item.PHONE ==""||item.PHONE==null||item.PHONE==undefined){str+="<td></td>";}else{str+="<td>"+item.PHONE	+"</td>";}
					if(item.SEX==""||item.SEX==null||item.SEX==undefined){str+="<td></td>";}else{
						
						if(item.SEX==1){
							str+="<td>男</td>";
						}else if(item.SEX==2){
							str+="<td>女</td>";
						}else{
							str+="<td>保密</td>";
						}
					}
					if(item.STATE==""||item.STATE==null||item.STATE==undefined){str+="<td></td>";}else{
						
						if(item.STATE==1){
							str+="<td>正常</td>";
						}else{
							str+="<td>禁用</td>";
						}
					}
					if(item.SOURCE ==""||item.SOURCE==null||item.SOURCE==undefined){str+="<td></td>";}else{
							
						if(item.SOURCE==1){
							str+="<td>平台注册</td>";
						}else{
							str+="<td>管理员添加</td>";
						}
					}	
					
					if(item.SHOPNAME==""||item.SHOPNAME==null||item.SHOPNAME==undefined){str+="<td></td>";}else{str+="<td>"+item.SHOPNAME+"</td>";}
					if(item.ZFB==""||item.ZFB==null||item.ZFB==undefined){str+="<td></td>";}else{str+="<td>"+item.ZFB+"</td>";}		
					if(item.MEMBERNAME==""||item.MEMBERNAME==null||item.MEMBERNAME==undefined){str+="<td></td>";}else{str+="<td>"+item.MEMBERNAME+"</td>";}
					str+=				
						"</tr>";
						pds=item.ISTABLEDATA;
						$("#tjrxx").css("display","block");
					});
					
         		
         		
	

	
         	
         			
         		    var str2 = ""+
             		"<table class=\"gopageMune\">"+
    				"<tr>"+
    					"<td><input style=\"border:none;background:#ff9121;padding:5px 20px;margin:0px 5px;color:#fff\" type=\"button\" onclick=\"chagepagea();showAll()\" value=\"首页\" /></td>"+
    					"<td><input style=\"border:none;background:#ff9121;padding:5px 20px;margin:0px 5px;color:#fff\" type=\"button\" onclick=\"chagepageb();showAll()\" value=\"上一页\" /></td>"+
    					"<td style=\"border:none;background:#ff9121;padding:5px 20px;margin:0px 5px;display:block;color:#fff\">当前在第"+$("#thispage").val()+"页</td>";
						if(pds==true){str2+="<td><input  style=\"border:none;background:#ff9121;padding:5px 20px;margin:0px 5px;color:#fff\" type=\"button\" onclick=\"chagepagec();showAll()\" value=\"下一页\" /></td>";}
						else{
							str2+="";
						}
							var str4="";
							str4+="<input type=\"button\" onclick=\"showAll()\" class=\"btn btn-success\" value=\"确定\"  />";
						str2+=
    				"</tr>"+
    				"</table>";	
         		document.getElementById('thxianshiquyu').innerHTML=thannue;
         		document.getElementById('allmessage').innerHTML=str;
         		document.getElementById('annuediv').innerHTML=str2;
         		
         		var issuper = localStorage.getItem("issuperadmin");
				var issupergys = localStorage.getItem("superid");
				if(issuper==1 || issupergys==0){
					$("#daochubbannues").css("display","block");
				}
         		if(data.data==""){
					alert("没有记录");
				}
         		
         		
         		
         		
         	}else{
         		alert(data.message);
         	}
         	
         },
         error:function(e){
         	alert("请求失败");
            
         }
     });     

}

function setpage(){
	document.getElementById("thispage").value = document.getElementById("thispageset").value;
	
}

function setrows(){
	document.getElementById("thisrows").value = document.getElementById("thisrowsset").value;
	
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

function daochu(){

	var getstartdate = document.getElementById("nowstarDate").value;
	var getendstdate = document.getElementById("nowendsDate").value;
	var startdate = new Date(getstartdate).getTime();
	var enddate = new Date(getendstdate).getTime();
	var rows = document.getElementById("thisdatarows").value;

	$.ajax({
	
		url:address+"/Orderrelevance/exportOrderrelevance",
		type:"GET",
		data:{"uname":uname,"UID":uid,"star":startdate,"end":enddate,"rows":rows},
		success:function(data){
			if(data.message=="登录超时"){
					location.href="login.html";
					return;
			}
			
		},
		error:function(e){}
		
		
	});
	
}

function changeshujustar(){
	
	var nowstarDate = document.getElementById("nowstarDate").value;
	var stardatatime = new Date(nowstarDate).getTime();
	document.getElementById("thisstartdata").value=stardatatime;

}

function changeshujuend(){
	var nowstarDate = document.getElementById("nowendsDate").value;
	var enddatatime = new Date(nowstarDate).getTime();
	document.getElementById("thisenddata").value=enddatatime;
	
}

function getunameuid(){
		document.getElementById("dcunamesss").value=localStorage.getItem("userName");
	document.getElementById("dcuidsss").value=localStorage.getItem("uid");
	
}

function showdaochudiv(){
		document.getElementById("hiddendaochu").style.display="block";
}

function hiddendiv(){
			document.getElementById("hiddendaochu").style.display="none";
}

function changestartimess(){
	var changetimess = document.getElementById("changetimess").value;
	
	var stardatatime = new Date(changetimess).getTime()-(8*1000*60*60);
	
	document.getElementById("dctostar").value=stardatatime;
	if(isNaN($("#dctostar").val())==true){
		$("#dctostar").val(null);
	}
}

function changeendtimess(){
	var changeendtimess = document.getElementById("changeendtotimess").value;
	
	var A = new Date(changeendtimess).getTime()-(8*1000*60*60);
	var B = 1000*60*60*24;
	var endsatatime=A+B;
	document.getElementById("dctoend").value=endsatatime;
	if(isNaN($("#dctoend").val())==true){
		$("#dctoend").val(null);
	}
}













