
var uname = localStorage.getItem("userName");
var uid = localStorage.getItem("uid");

var pds;

function addyunfeixian(){
	document.getElementById("uidss").value=uid;
	document.getElementById("unamess").value=uname;
	var strtimedata = document.getElementById("strnowDate").value;
	var endtimedata = document.getElementById("endnowDate").value;
	document.getElementById("strdate").value=new Date(strtimedata).getTime();
	document.getElementById("enddate").value=new Date(endtimedata).getTime()
	var thisform = new FormData(document.getElementById("addyunfeixian"));
	var con=confirm("是否继续");
	if(con==true){
	$.ajax({
		url:address+"/Freeshipping/add",
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
	});}else{}
}

function overyunfeixian(id){
	var con = confirm("是否继续");
	if(con==true){
	$.ajax({
		url:address+"/Freeshipping/delete",
		data:{"id":id,"uname":uname,"UID":uid},
		type:"POST",
		success:function(data){
			
			ShowAll();
			alert(data.message);
		},
		error(e){}
	});
	}else{}
}


function ShowAll(){
	var str="";
	var page = $("#thispage").val();
	var rows = $("#thisrows").val();
	var oneid = $("#account").val();
	var issuperadmin = localStorage.getItem("issuperadmin");
	$.ajax({
		url:address+"/Freeshipping/select",
		type:"POST",
		data:{"rows":rows,"page":page,"uname":uname,"UID":uid,"oneid":oneid},
		success:function(data){
			console.log(data);
			var message = data.data;
			if(data.status!=200){alert(data.message)}
			else{
				
				$.each(message, function(index, item) {
					str+="<tr>";
						if(item.PHONE==""||item.PHONE==null||item.PHONE==undefined){str+="<td></td>";}else{str+="<td>"+item.PHONE+"</td>";}
						if(item.STR==""||item.STR==null||item.STR==undefined){str+="<td></td>";}else{str+="<td>"+formatDateTime(item.STR)+"</td>";}
						if(item.END==""||item.END==null||item.END==undefined){str+="<td></td>";}else{str+="<td>"+formatDateTime(item.END)+"</td>";}
						if(item.FREESHIPPINGSIZE==""||item.FREESHIPPINGSIZE==null||item.FREESHIPPINGSIZE==undefined){str+="<td></td>";}else{str+="<td>"+item.FREESHIPPINGSIZE+"</td>";}
						if(item.FREESHIPPINGNUMBER	==""||item.FREESHIPPINGNUMBER	==null||item.FREESHIPPINGNUMBER	==undefined){str+="<td></td>";}else{str+="<td>"+item.FREESHIPPINGNUMBER	+"</td>";}
						if(item.ORDERS==""||item.ORDERS==null||item.ORDERS==undefined){str+="<td></td>";}else{str+="<td>"+item.ORDERS+"</td>";}
					
						if(item.END<data.timestamp){
							str+="<td>已失效</td>"
						}else{
							if(issuperadmin==1){
							str+="<td><button type=\"button\" onclick=\"overyunfeixian("+item.ID+")\" class='btn btn-danger'>废弃</a></td>";
							}else{
								str+="<td>正常</td>"
							}
						}
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