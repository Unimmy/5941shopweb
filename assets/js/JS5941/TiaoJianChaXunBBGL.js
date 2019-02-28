 var uid = localStorage.getItem("uid");
	var uname = localStorage.getItem("userName");
 var pds;
 var updid;
 function showAll(){
	
	var pages = document.getElementById("thispageget").value;
	var rowss = document.getElementById("thisrowsget").value;
var str="";
$.ajax({
		url:address+"/version/select",
		type:"POST",
		data:{"rows":rowss,"page":pages,"uname":uname,"UID":uid},
		success:function(data){
			console.log(data);
			var message = data.data;
			if(data.status!=200){alert(data.message)}
			else{
				
				$.each(message, function(index, item) {
					str+="<tr>";
					str+="<td>"+(index+1)+"</td>";
						if(item.ID==""||item.ID==null||item.ID==undefined){str+="<td></td>";}else{str+="<td>"+formatDateTime(item.ID)+"</td>";}
						if(item.CODE==""||item.CODE==null||item.CODE==undefined){str+="<td></td>";}else{str+="<td>"+item.CODE+"</td>";}
						if(item.DATA==""||item.DATA==null||item.DATA==undefined){str+="<td></td>";}else{str+="<td>"+item.DATA+"</td>";}
						if(item.URL==""||item.URL==null||item.URL==undefined){str+="<td></td>";}else{str+="<td>"+item.URL+"</td>";}
						str+="<td>"+"<span onclick='showyincangpage2("+item.ID+")' class='btn btn-warning'>修改</span> &nbsp <span onclick='delbanben("+item.ID+")' class='btn btn-danger'>删除</span>"+"</td>";
					str+="</tr>";    
					pds=item.ISTABLEDATA;					
				});
				var str2 = ""+
             		"<table class=\"gopageMune\">"+
    				"<tr>"+
    					"<td><input style=\"border:none;background:#ff9121;padding:5px 20px;margin:0px 5px;color:#fff\" type=\"button\" onclick=\"chagepagea();findjiesuanguize()\" value=\"首页\" /></td>"+
    					"<td><input style=\"border:none;background:#ff9121;padding:5px 20px;margin:0px 5px;color:#fff\" type=\"button\" onclick=\"chagepageb();findjiesuanguize()\" value=\"上一页\" /></td>"+
    					"<td style=\"border:none;background:#ff9121;padding:5px 20px;margin:0px 5px;display:block;color:#fff\">当前在第"+$("#thispageget").val()+"页</td>";
						if(pds==true){str2+="<td><input  style=\"border:none;background:#ff9121;padding:5px 20px;margin:0px 5px;color:#fff\" type=\"button\" onclick=\"chagepagec();findjiesuanguize()\" value=\"下一页\" /></td>";}
						else{
							str2+="";
						}
						str2+=
    				"</tr>"+
    				"</table>";	
         			
         		document.getElementById('allmessage').innerHTML=str;
         		document.getElementById('annuediv').innerHTML=str2;
			}
		},
		error:function(){}
	});
	
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
    return y+"-"+m+"-"+d+" "+h+":"+minute;    
}


function chagepagea(){
	var statrpage=document.getElementById("thispageget").value;
	var nowpage = 1;
	document.getElementById("thispageget").value=nowpage;
}
function chagepagec(){
	var statrpage=document.getElementById("thispageget").value;
	var nowpage = parseInt(statrpage)+1;
	document.getElementById("thispageget").value=nowpage;
}
function chagepageb(){
	var statrpage=document.getElementById("thispageget").value;
	var nowpage = parseInt(statrpage)-1;
	if(nowpage<=0){nowpage=1;}
	document.getElementById("thispageget").value=nowpage;
}

function showyincangpage(){
	$("#addpages").css("display","block");
}
function hiddenyincangpage(){
	$("#addpages").css("display","none");
}
  
function showyincangpage2(id){
	updid=id;
	 
	$("#updpages").css("display","block");
}
function hiddenyincangpage2(){
	$("#updpages").css("display","none");
}
function addnewbanben(){
	var getcode = $("#getcodes").val();
	var getdata = $("#getdatas").val();
	var geturl = $("#geturls").val();
	var con = window.confirm("是否继续？");
	if(con==true){
	$.ajax({
		url:address+"/version/add",
		data:{"uname":uname,"UID":uid,"code":getcode,"data":getdata,"url":geturl},
		type:"POST",
		success:function(data){
			showAll();
			alert(data.message);
		},
		error:function(e){
			alert("请求失败");
		}
	});
	}
}

function updbanben(){
	var getcodeupd = $("#getcodesupd").val();
	var getdataupd = $("#getdatasupd").val();
	var geturlupd = $("#geturlsupd").val();
	var con = window.confirm("是否继续？");
	if(con==true){
	$.ajax({
		url:address+"/version/update",
		type:"POST",
		data:{"uname":uname,"UID":uid,"id":updid,"code":getcodeupd,"data":getdataupd,"url":geturlupd},
		success:function(data){
			showAll();
			alert(data.message);
		},
		error:function(e){}
	});
	}
}


function delbanben(delid){
	
	var con = window.confirm("是否继续？");
	if(con==true){
	$.ajax({
		url:address+"/version/delete",
		type:"POST",
		data:{"uname":uname,"UID":uid,"id":delid},
		success:function(data){
			showAll();
			alert(data.message);
		},
		error:function(e){}
	});
	}
}