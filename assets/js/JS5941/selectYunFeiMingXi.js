
var uname = localStorage.getItem("userName");
var uid = localStorage.getItem("uid");
var pd;
var pds;

function addyunfeixian(){
	document.getElementById("uidss").value=uid;
	document.getElementById("unamess").value=uname;
	var strtimedata = document.getElementById("strnowDate").value;
	var endtimedata = document.getElementById("endnowDate").value;
	document.getElementById("strdate").value=new Date(strtimedata).getTime();
	document.getElementById("enddate").value=new Date(endtimedata).getTime()
	var thisform = new FormData(document.getElementById("addyunfeixian"));
	var con = confirm("是否继续");
	if(con==true){
		$.ajax({
		url:address+"/Express/add",
		data:thisform,
		type:"POST",
		cache: false,  
        processData: false,  
        contentType: false,
		success:function(data){
			alert(data.message)
		},
		error:function(e){
			
		}
	});
	}else{}
	
}

function overyunfeixian(id){
	

	var con=confirm("是否继续？"); //在页面上弹出对话框
	if(con==true){
		$.ajax({
		url:address+"/Express/delete",
		data:{"id":id,"uname":uname,"UID":uid},
		type:"POST",
		success:function(data){
			
			ShowAll();
			alert(data.message);
		},
		error(e){}
		});
	}
	else{}
	
	
}

function daochu(){
	var juese ;
	var page = $("#thispage").val();
	var rows = $("#thisrows").val();
	var oneid = $("#account").val();
	var strtime = $("#kstime").val();
	var endtime = $("#jstime").val();
	var jueses = $("#juese").val();
	if(jueses=="店员"){
		juese=0;
	}else{
		juese=1;
	}
	
	$("#starjstime").val(strtime);
	$("#endjstime").val(endtime);
	$("#pagejstime").val(page);
	$("#rowsjstime").val(rows);
	$("#unamejstime").val(uname);
	$("#UIDjstime").val(uid);
	$("#onephonejstime").val(oneid);
	$("#itime").val(juese);
}

function ShowAll(){
	var str="";
	var page = $("#thispage").val();
	var rows = $("#thisrows").val();
	var oneid = $("#account").val();
	var strtime = $("#kstime").val();
	var endtime = $("#jstime").val();
	var juese = $("#juesesss").val();
	var issuperadmin = localStorage.getItem("issuperadmin");
	$.ajax({
		url:address+"/SystemExpress/selectorders",
		type:"POST",
		data:{"rows":rows,"page":page,"uname":uname,"UID":uid,"onephone":oneid,"star":strtime,"end":endtime,"i":juese},
		success:function(data){
			console.log(data);
			var message = data.data;
			if(data.status!=200){alert(data.message)}
			else{
				
				$.each(message, function(index, item) {
					str+="<tr>";
						if(item.ID==""||item.ID==null||item.ID==undefined){str+="<td></td>";}else{str+="<td>"+item.ID+"</td>";}
						if(item.TIME==""||item.TIME==null||item.TIME==undefined){str+="<td></td>";}else{str+="<td>"+item.TIME+"</td>";}
						if(item.PAYMENT==""||item.PAYMENT==null||item.PAYMENT==undefined){str+="<td></td>";}else{str+="<td>"+item.PAYMENT+"</td>";}
						if(item.UNAME==""||item.UNAME==null||item.UNAME==undefined){str+="<td></td>";}else{str+="<td>"+item.UNAME+"</td>";}
						
						if(item.SHOPNAME==""||item.SHOPNAME==null||item.SHOPNAME==undefined){str+="<td></td>";}else{str+="<td>"+item.SHOPNAME+"</td>";}
						
					str+="</tr>";    
					pds=item.ISTABLEDATA;					
				});
				var str2 = ""+
             		"<table class=\"gopageMune\">"+
    				"<tr>"+
    					"<td><input style=\"border:none;background:#ff9121;padding:5px 20px;margin:0px 5px;color:#fff\" type=\"button\" onclick=\"chagepagea();ShowAll()\" value=\"首页\" /></td>"+
    					"<td><input style=\"border:none;background:#ff9121;padding:5px 20px;margin:0px 5px;color:#fff\" type=\"button\" onclick=\"chagepageb();ShowAll()\" value=\"上一页\" /></td>"+
    					"<td style=\"border:none;background:#ff9121;padding:5px 20px;margin:0px 5px;display:block;color:#fff\">当前在第"+$("#thispage").val()+"页</td>";
						if(pds==true){str2+="<td><input  style=\"border:none;background:#ff9121;padding:5px 20px;margin:0px 5px;color:#fff\" type=\"button\" onclick=\"chagepagec();ShowAll()\" value=\"下一页\" /></td>";}
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


function setstarttime(){
	$("#kstime").val(new Date($("#strtime").val()).getTime());

		if(isNaN($("#kstime").val())==true){
			$("#kstime").val(null)}
		
}

function setendtime(){
	$("#jstime").val(new Date($("#endtime").val()).getTime());
		if(isNaN($("#jstime").val())==true){
			$("#jstime").val(null)}
}

function formatDateTime(timeStamp) { 
    var date = new Date();
    date.setTime(timeStamp );
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
    return y+"-"+m+"-"+d;    
};  

function openPage(){
document.getElementById("addyunfeixianpage").style.display="block";
}
function closePage(){
document.getElementById("addyunfeixianpage").style.display="none";
}


function chagepagea(){
	var statrpage=document.getElementById("thispage").value;
	var nowpage = 1;
	document.getElementById("thispage").value=nowpage;
}
function chagepagec(){
	var nowpage;
	var statrpage=document.getElementById("thispage").value;
	if(pd==""){
	 nowpage = parseInt(statrpage)-1;
	}else{
	 nowpage = parseInt(statrpage)+1;
	}
	document.getElementById("thispage").value=nowpage;
}
function chagepageb(){
	var statrpage=document.getElementById("thispage").value;
	var nowpage = parseInt(statrpage)-1;
	if(nowpage<=0){nowpage=1;}
	document.getElementById("thispage").value=nowpage;
}

function REFASH(){
	location.reload()
}