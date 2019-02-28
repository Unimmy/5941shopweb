
var uname = localStorage.getItem("userName");
var uid = localStorage.getItem("uid");
var pd;
var pds;
function openDiv(){
	$("#addyunfeixianpage").css("display","block");
}
function addYouHuiQuan(){
	
	var S_S = $("#S_S").val();
	var S_F = $("#S_F").val();
	var S_M = $("#S_M").val();
	var E_S = $("#E_S").val();
	var E_F = $("#E_F").val();
	var E_M = $("#E_M").val();
	var STime = (S_S*60*60*1000)+(S_F*60*1000)+(S_M*1000);
	var ETime = (E_S*60*60*1000)+(E_F*60*1000)+(E_M*1000);
	
	
	var setStarttimes = $("#MSstartTimes").val();
	var setEndtimes = $("#MSendTimes").val();
	var startTimes = new Date(setStarttimes).getTime()-28800000+STime;
	var endTimes = new Date(setEndtimes).getTime()-28800000+ETime+999;
	if(isNaN(startTimes)==true){startTimes=null;}
	if(isNaN(endTimes)==true){endTimes=null;}
 
	$("#setuid").val(uid);
	$("#setuname").val(uname);
	$("#StartTime").val(startTimes);
	$("#EndTime").val(endTimes);
	var addMSForm = new FormData(document.getElementById("addMiaoShaForm"));
	
	var con = confirm("是否继续");
	if(con==true){
		$.ajax({
		url:address+"/ys/add",
		data:addMSForm,
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
var indexsss = 2;
function bigimg(id){
	 var str= "#tupians"+id;
	if(indexsss%2==0){
		$(str).css("width","480px");
		//document.getElementById("tupians"+id).style.width="480px";
	}else{
		$(str).css("width","80px");
		//document.getElementById("tupians"+id).style.width="80px";
	}
	indexsss++;
}

function ShowAll(){
 
	var str="";
	var page = $("#thispage").val();
	var rows = $("#thisrows").val();
	var GetName = $("#namess").val();
	var GetCkeyid = $("#bianhaos").val();
	var Getycode = $("#tiaomass").val();
	var GetStartDate = $("#starDate").val();
	var GetEndDate = $("#endDate").val();
	var SetStartDateTimes = new Date(GetStartDate).getTime()-28800000;
	var SetEndDateTimes = new Date(GetEndDate).getTime()+57599999;
	if(isNaN(SetStartDateTimes)==true){SetStartDateTimes=null;}
	if(isNaN(SetEndDateTimes)==true){SetEndDateTimes=null;}
	 
	$.ajax({
		url:address+"/ys/select",
		type:"POST",
		data:{"rows":rows,"page":page,"uname":uname,"UID":uid,"title":GetName,"commoditykeyid":GetCkeyid,"code":Getycode,"star":SetStartDateTimes,"end":SetEndDateTimes},
		success:function(data){
			console.log(data);
			var message = data.data;
			if(data.status!=200){alert(data.message)}
			else{
				
				$.each(message, function(index, item) {
					str+="<tr>";
					str+="<td>"+(index+1)+"</td>";
						if(item.title==""||item.title==null||item.title==undefined){str+="<td></td>";}else{str+="<td>"+item.title+"</td>";}
						if(item.star==""||item.star==null||item.star==undefined){str+="<td></td>";}else{str+="<td>"+formatDateTime(item.star)+"</td>";}
						if(item.end==""||item.end==null||item.end==undefined){str+="<td></td>";}else{str+="<td>"+formatDateTime(item.end)+"</td>";}
						if(item.num==""||item.num==null||item.num==undefined){str+="<td></td>";}else{str+="<td>"+item.num+"</td>";}
						if(item.commoditykeyid==""||item.commoditykeyid==null||item.commoditykeyid==undefined){str+="<td></td>";}else{str+="<td>"+item.commoditykeyid+"</td>";}
						if(item.code==""||item.code==null||item.code==undefined){str+="<td></td>";}else{str+="<td>"+item.code+"</td>";}
						if(item.price==""||item.price==null||item.price==undefined){str+="<td></td>";}else{str+="<td>"+item.price+"</td>";}
						if(item.imagepath==""||item.imagepath==null||item.imagepath==undefined){str+="<td></td>";}else{str+="<td><img id='tupians"+item.id+"' onclick='bigimg("+item.id+")' src='"+address+item.imagepath+"' style='width:80px;' /></td>";}
						
						 
						str+="<td>"+"<span onclick='overs("+item.id+")' class='btn btn-danger'>结束</span>"+"</td>";
					str+="</tr>";    
					pds=item.istabledata;					
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

function overs(id){
	var con;
	con = window.confirm("是否继续？")
	if(con==true){
	$.ajax({
		url:address+"/ys/end",
		data:{"UID":uid,"uname":uname,"id":id},
		type:"POST",
		success:function(data){
		 
			alert(data.message);
		},
		error:function(e){}
	});
	}
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