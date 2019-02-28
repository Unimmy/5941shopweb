	var uid = localStorage.getItem("uid");
	var uname = localStorage.getItem("userName");
 var pds;
function addOne(){
	$("#add_div").css("display","block");
}

function updateone(id){
	$("#upd_div").css("display","block");
	var str = "<span onclick='updonemessage("+id+")' class='btn btn-success'>确定</span>";
	$("#okdiv_s").html(str);
}
 
 function closeupddivs(){
	$("#upd_div").css("display","none");
}
function closedivs(){
	$("#add_div").css("display","none");
} 

function updonemessage(key){
	$("#unamepplupd").val(uname);
	$("#uidpplupd").val(uid);
	$("#keyIDupd").val(key);
 
	var typess = $("#typessupd").val();
		var type;
	if(typess=="普通用户"){type=0}else{type=1}
	
	var getformDatePream = document.getElementById("updforms");
	var formDateObj = new FormData(getformDatePream);
	$("#sstypesaupd").val(type);
	$.ajax({
		url:address+"/help/update",
		data:formDateObj,
		type:"POST",
		cache: false,  
        processData: false,  
        contentType: false,
        success:function(data){
        	alert(data.message);
        },
        error:function(e){}
	});
}

function addonemessage(){
	$("#unameppl").val(uname);
	$("#uidppl").val(uid);
	var typess = $("#typess").val();
		
	if(typess=="普通用户"){
		$("#typesa").val(0);
	}else{
		$("#typesa").val(1);
	}
	 
	var getformDatePream = document.getElementById("addforms");
	var formDateObj = new FormData(getformDatePream);
 
	$.ajax({
		url:address+"/help/add",
		data:formDateObj,
		type:"POST",
		cache: false,  
        processData: false,  
        contentType: false,
        success:function(data){
        	alert(data.message);
        },
        error:function(e){}
	});
}
var pdnumss =2;
function fangdapc(id){
	if(pdnumss%2==0){
		$("#idpcss"+id).css("width","480px");
	}else{
		$("#idpcss"+id).css("width","80px");
	}
	pdnumss++;
}



function deleteone(key){
	if(window.confirm("是否继续？")==true){
	$.ajax({
		url:address+"/help/delete",
		type:"POST",
		data:{"uname":uname,"UID":uid,"key":key},
		success:function(data){
			alert(data.message);
			showAll();
		},
		error:function(e){}
	});
	}
	
}

function showAll(){
	var thispage = $("#thispage").val();
	var thisrows = $("#thisrows").val();
	var str="";

	
	 $.ajax({
         url:address+"/help/selectall",
         type:"POST",
         data:{"uname":uname,"UID":uid},
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
					if(item.ID==""||item.ID	==null||item.ID	==undefined){str+="<td></td>";}else{str+="<td>"+item.ID+"</td>";}
					if(item.TYPE==""||item.TYPE	==null||item.TYPE	==undefined){str+="<td></td>";}else{
						if(item.TYPE==1){
						str+="<td>导购/线上店主/经销商</td>";
						}else{
						str+="<td>普通用户</td>";
						}
					}
					if(item.TITLE2	==""||item.TITLE2	==null||item.TITLE2	==undefined){str+="<td></td>";}else{str+="<td>"+item.TITLE2+"</td>";}
					if(item.TITLE1	==""||item.TITLE1==null||item.TITLE1==undefined){str+="<td></td>";}else{str+="<td>"+item.TITLE1+"</td>";}
					if(item.CONTENT==""||item.CONTENT==null||item.CONTENT==undefined){str+="<td></td>";}else{
						str+="<td><img id='idpcss"+item.ID+"' style='width:80px' onclick='fangdapc("+item.ID+")' src='"+address+"/"+item.CONTENT+"' /></td>";
					}
					str+="<td><span onclick=\"updateone("+item.ID+")\" class=\"btn btn-warning\">修改</span> &nbsp <span onclick=\"deleteone("+item.ID+")\" class=\"btn btn-danger\">删除</span></td>";
									
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








