
var uname = localStorage.getItem("userName");
var uid = localStorage.getItem("userName");
var pd;
var pds;

function addYouHuiQuan(){
	$("#unamess").val(uname);
	$("#uidss").val(uid);
	var addYouHuiQuanForm = new FormData(document.getElementById("addYouHuiQuanForm"));
	var con = confirm("是否继续");
	if(con==true){
		$.ajax({
		url:address+"/Coupon/add",
		data:addYouHuiQuanForm,
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
	var account = $("#account").val();
	var account2 = $("#account2").val();

	var isShiyonsel = $("#isShiyonsel").val();
	var isShixiaosel = $("#isShixiaosel").val();
	var youhuiID = $("#youhuiID").val();

	var Shiyon = 0;
	var Shixiao = 0;
	if(isShiyonsel!="未使用"){
		Shiyon=1;
	}
	if(isShixiaosel!="未过期"){
		Shixiao=1;
	}
	var issuperadminsto = localStorage.getItem("issuperadmin");
 
	if(issuperadminsto!=1){
		$("#account").css("display","none");
		$("#account2").css("display","none");
		$("#youhuiID").css("display","none");
		
	}
	
	$.ajax({
		url:address+"/Coupon/select",
		type:"POST",
		data:{"rows":rows,"page":page,"uname":uname,"UID":uid,"phone":account,"mphone":account2,"state":Shiyon,"carddate":Shixiao,"web":1,"id":youhuiID},
		success:function(data){
			console.log(data);
			var message = data.data;
			if(data.status!=200){alert(data.message)}
			else{
				
				$.each(message, function(index, item) {
					str+="<tr>";
					str+="<td>"+(index+1)+"</td>";
						if(item.ID==""||item.ID==null||item.ID==undefined){str+="<td></td>";}else{str+="<td>"+item.ID+"</td>";}
						
						if(item.TITLE==""||item.TITLE==null||item.TITLE==undefined){str+="<td></td>";}else{str+="<td>"+item.TITLE+"</td>";}
						if(item.UNAME==""||item.UNAME==null||item.UNAME==undefined){str+="<td></td>";}else{str+="<td>"+item.UNAME+"</td>";}
						if(item.ONEPHONE==""||item.ONEPHONE==null||item.ONEPHONE==undefined){str+="<td></td>";}else{str+="<td>"+item.ONEPHONE+"</td>";}
						if(item.STATE==""||item.STATE==null||item.STATE==undefined){str+="<td></td>";}else{
							if(item.END<=data.timestamp){
								str+="<td>已过期</td>";
							}else{
								if(item.STATE==1){
								str+="<td>已使用</td>";
								}else{
								str+="<td>未使用</td>";
								}
							}
						}
						if(item.STAR==""||item.STAR==null||item.STAR==undefined){str+="<td></td>";}else{str+="<td>"+formatDateTime(item.STAR)+"</td>";}
						if(item.END==""||item.END==null||item.END==undefined){str+="<td></td>";}else{str+="<td>"+formatDateTime(item.END)+"</td>";}
						if(item.ID==""||item.ID==null||item.ID==undefined){str+="<td></td>";}else{str+="<td>"+formatDateTime(item.ID)+"</td>";}
						if(item.DATA==""||item.DATA==null||item.DATA==undefined){str+="<td></td>";}else{str+="<td>"+item.DATA+"</td>";}
						if(item.NUMBERA==""||item.NUMBERA==null||item.NUMBERA==undefined){str+="<td></td>";}else{str+="<td>"+item.NUMBERA+"</td>";}
						if(item.NUMBERMIN==""||item.NUMBERMIN==null||item.NUMBERMIN==undefined){str+="<td></td>";}else{str+="<td>满"+item.NUMBERMIN+"可用</td>";}
						if(item.CARDTYPE==""||item.CARDTYPE==null||item.CARDTYPE==undefined){str+="<td></td>";}else{
							
							if(item.CARDTYPE==1){
								str+="<td>单品</td>";
							}
							if(item.CARDTYPE==2){
								str+="<td>大类</td>";
							}
							if(item.CARDTYPE==3){
								str+="<td>中类</td>";
							}
							if(item.CARDTYPE==4){
								str+="<td>小类</td>";
							}
							if(item.CARDTYPE==5){
								str+="<td>细类</td>";
							}
							if(item.CARDTYPE==6){
								str+="<td>通用</td>";
							}
						}
						if(item.TYPE==""||item.TYPE==null||item.TYPE==undefined){str+="<td></td>";}else{
							if(item.TYPE==1){
								str+="<td>通用券</td>";
							}else{
								str+="<td>互斥券</td>";
							}
							
						}
						if(item.KEY==""||item.KEY==null||item.KEY==undefined){str+="<td></td>";}else{
							if(item.KEY==1){
								str+="<td>一个商品</td>";
							}else{
								str+="<td>一款商品</td>";
							}
						}
						if(item.MPHONE==""||item.MPHONE==null||item.MPHONE==undefined){str+="<td></td>";}else{str+="<td>"+item.MPHONE+"</td>";}
						str+="<td>"+"<span style='display:block;margin:auto' onclick='deleteOne("+item.ID+")' class='btn btn-danger'>删除</span>"+"</td>";
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

function deleteOne(id){
	var con;
	con = window.confirm("是否继续？")
	if(con==true){
	$.ajax({
		url:address+"/Coupon/delete",
		data:{"UID":uid,"uname":uname,"id":id},
		type:"POST",
		success:function(data){
			
			ShowAll();
			alert(data.message);
		},
		error:function(e){}
	})}
}

function changeyhqtype(){
	var yhqtype = $("#yhqselecta").val();

	if(yhqtype=="通用卷"){
		$("#yhqtype").val(1);
	}else{
		$("#yhqtype").val(2);
	}
}

function changeyhqsyfw(){
	var yhqcardtype = $("#yhqselectb").val();

	if(yhqcardtype=="单品"){
		$("#yhqcardtype").val(1);
	}else if(yhqcardtype=="细类"){
		$("#yhqcardtype").val(2);
	}else if(yhqcardtype=="小类"){
		$("#yhqcardtype").val(3);
	}else if(yhqcardtype=="中类"){
		$("#yhqcardtype").val(4);
	}else if(yhqcardtype=="大类"){
		$("#yhqcardtype").val(5);
	}else{
		$("#yhqcardtype").val(6);
	}
}

function changedplx(){
	var yhqtype = $("#yhqkeyselect").val();

	if(yhqtype=="单个商品"){
		$("#yhqkey").val(1);
	}else{
		$("#yhqkey").val(2);
	}
}


function changestrattime(){
	var strnowDate = $("#strnowDate").val();
	var times = new Date(strnowDate).getTime();
	$("#strdate").val(times-1000*60*60*8);
		if(isNaN($("#strdate").val())==true){
			$("#strdate").val(null)}
}
function changeendtime(){
		var endnowDate = $("#endnowDate").val();
	var times = new Date(endnowDate).getTime();
	$("#enddate").val(((times-1000*60*60*8)+1000*60*60*24)-1);
		if(isNaN($("#enddate").val())==true){
			$("#enddate").val(null)}
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

function openpageyhq(){
	$("#addyunfeixianpage").css("display","block")
}


function ceshifunction(){
	var time  = document.getElementById("endnowDate").value;
	
	alert(formatDateTime2(new Date(time).getTime()-1000*60*60*8));
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
    return y+"-"+m+"-"+d+" "+h+":"+minute+":"+second;    
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