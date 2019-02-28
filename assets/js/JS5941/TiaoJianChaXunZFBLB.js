	var uid = localStorage.getItem("uid");
	var uname = localStorage.getItem("userName");
 var pds;
function showAll(){
	var thispage = $("#thispage").val();
	var thisrows = $("#thisrows").val();
	var str="";
	
	 $.ajax({
         url:address+"/zfb/list",
         type:"POST",
         data:{"uname":uname,"UID":uid,"page":thispage,"rows":thisrows},
         success:function(data){
			 if(data.message=="登录超时"){
					location.href="login.html";
					return;
			}
			 console.log(data);
         	if(data.status == '200'){
         		var message = data.data;
         		$.each(message, function(index, item) {
         
         
         	str+=
				"<tr>";
				str+="<td>"+(index+1)+"</td>";
					if(item.id	==""||item.id	==null||item.id	==undefined){str+="<td></td>";}else{str+="<td>"+item.id+"</td>";}
					if(item.id	==""||item.id	==null||item.id	==undefined){str+="<td></td>";}else{str+="<td>"+formatDateTime(item.id)+"</td>";}
					if(item.name==""||item.name==null||item.name==undefined){str+="<td></td>";}else{str+="<td>"+item.name+"</td>";}
					if(item.zfb	==""||item.zfb	==null||item.zfb	==undefined){str+="<td></td>";}else{str+="<td>"+item.zfb+"</td>";}
					if(item.istrue==""||item.istrue==null||item.istrue==undefined){str+="<td>未审核</td>";}else{
						if(item.istrue==1){
							str+="<td>通过</td>";
						}else if(item.istrue==-1){
							str+="<td>不通过</td>";
						}else{
							str+="<td>未审核</td>";
						}
					}
					if(item.phone==""||item.phone==null||item.phone==undefined){str+="<td></td>";}else{str+="<td>"+item.phone+"</td>";}
					if(item.memberid==""||item.memberid==null||item.memberid==undefined){str+="<td></td>";}else{str+="<td>"+item.memberid+"</td>";}
					if(item.istrue!=1&&item.istrue!=-1){
				
					/*
					str+="<td>"+
					"<i style=\"margin:0px 10px\" onclick=\"ok("+item.id+")\" title=\"通过\" class=\"green icon-ok bigger-130\"></i>     "+
					"<i style=\"margin:0px 10px\" onclick=\"no("+item.id+")\" title=\"不通过\" class=\"red icon-remove bigger-130\"></i>"+
					"</td>"	;
					*/
					}
									
			str+=				
				"</tr>";
				pds=item.ISTABLEDATA;
				
		
	}
	
	);
	

	  
         			
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
         			
         		document.getElementById('allmessage').innerHTML=str;
         		document.getElementById('annuediv').innerHTML=str2;
				document.getElementById('okannue4').innerHTML=str4;
         		 
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


function ok(getid){
	 
	var con = window.confirm("是否继续？");
	if(con==true){
		$.ajax({
			url:address+"/zfb/auto",
			data:{"uname":uname,"UID":uid,"id":getid,"istrue":1},
			type:"POST",
			success:function(data){
				alert(data.message);
			}
			
		});
		
	}
	showAll();
}
function no(getid){
		 
	var con = window.confirm("是否继续？");
	if(con==true){
		$.ajax({
			url:address+"/zfb/auto",
			data:{"uname":uname,"UID":uid,"id":getid,"istrue":-1},
			type:"POST",
			success:function(data){
				alert(data.message);
			}
			
		});
		
	}
	showAll();
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


function changestartimess(){
	var changetimess = document.getElementById("changetimess").value;
	var stardatatime = new Date(changetimess).getTime()-(8*1000*60*60);
	document.getElementById("starttimess").value=stardatatime;
	if(isNaN(document.getElementById("starttimess").value)){
		document.getElementById("starttimess").value=null;
	}
}

function changeendtimess(){
	var changeendtimess = document.getElementById("changeendtotimess").value;
	var A = new Date(changeendtimess).getTime()-(8*1000*60*60);
	var B = 1000*60*60*24;
	var endsatatime = A+B;
	document.getElementById("endtimess").value=endsatatime;
	if(isNaN(document.getElementById("endtimess").value)){
		document.getElementById("endtimess").value=null;
	}
}





function formatDateTime(timeStamp) { 
    var date = new Date();
    date.setTime(timeStamp);
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
    return y+"-"+m+"-"+d+" "+h+":"+minute+":"+second;    
};  








