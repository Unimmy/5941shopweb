
var uname = localStorage.getItem("userName");
var uid = localStorage.getItem("uid");
var pd;
var pds;
function openDiv(){
	$("#addyunfeixianpage").css("display","block");
}
function addYouHuiQuan(){
	
    var add_card_type = $("#add_card_type").val();
	var add_gong_ying_shang =  $("#add_gong_ying_shang").val();
	var add_memberid = $("#add_memberid").val();
	var add_shuoming =  $("#add_shuoming").val();	
	
	var add_type_num;
	if(add_card_type=="礼品卡"){add_type_num=1;}
	else{add_type_num=2;}
	
	var con = confirm("是否继续");
	if(con==true){
		$.ajax({
		url:address+"/Kb/add",
		data:{"uname":uname,"UID":uid,"lei_xing":add_type_num,"gong_ying_shang":add_gong_ying_shang,"memberid":add_memberid,"shuo_ming":add_shuoming},
		type:"POST",
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
	var card_type = $("#card_type").val();
	var G_account = $("#G_account").val();
	var U_account = $("#U_account").val();
	var type_num;
	if(card_type=="礼品卡"){type_num=1;}
	else if(card_type=="套餐卡"){type_num=2;}
	else{type_num=null;}
	
	 
	$.ajax({
		url:address+"/Kb/select",
		type:"POST",
		data:{"uname":uname,"UID":uid,"lei_xing":type_num,"gong_ying_shang":G_account,"memberid":U_account},
		success:function(data){
			console.log(data);
			var message = data.data;
			if(data.status!=200){alert(data.message)}
			else{
				
				$.each(message, function(index, item) {
					str+="<tr>";
					str+="<td>"+(index+1)+"</td>";
 
						if(item.lei_xing==""||item.lei_xing==null||item.lei_xing==undefined){str+="<td></td>";}else{
							if(item.lei_xing==1){str+="<td>礼品卡</td>";}else if(item.lei_xing==2){str+="<td>套餐卡</td>";}else{str+="<td></td>";}
						}
						if(item.gong_ying_shang==""||item.gong_ying_shang==null||item.gong_ying_shang==undefined){str+="<td></td>";}else{str+="<td>"+item.gong_ying_shang+"</td>";}
						if(item.memberid==""||item.memberid==null||item.memberid==undefined){str+="<td></td>";}else{str+="<td>"+item.memberid+"</td>";}
						if(item.shuo_ming==""||item.shuo_ming==null||item.shuo_ming==undefined){str+="<td></td>";}else{str+="<td>"+item.shuo_ming+"</td>";}
						if(item.zhuang_tai	==""||item.zhuang_tai	==null||item.zhuang_tai	==undefined){str+="<td></td>";}else{str+="<td>"+item.zhuang_tai	+"</td>";}
						if(item.lai_yuan==""||item.lai_yuan==null||item.lai_yuan==undefined){str+="<td></td>";}else{str+="<td>"+item.lai_yuan+"</td>";}
						str+="<td><span> <input type='text' style='height:42px' id='ipt"+item.id+"' placeholder='请输入赠送人账号' /></span><a id='aip_"+item.id+"' class='btn btn-danger' onclick=\"opendiv_zs("+item.id+")\">赠送</a> <span class='btn btn-warning' onclick=\"chaifen("+item.id+")\">拆分</span></td>"; 
							str+="</tr>";    
					pds=item.istabledata;					
				});
			
         			var str2s = "";
					str2s +=
					"<th>序号</th>"+
					"<th>类型</th>"+
					"<th>供应商</th>"+
					"<th>用户</th>"+
					"<th>说明</th>"+
					"<th>状态</th>"+
					"<th>来源</th>"+
					"<th>操作</th>";
					
         		document.getElementById('allmessage').innerHTML=str;
				document.getElementById('table_th').innerHTML=str2s;
         		
			}
		},
		error:function(){}
	});
	
	
}

function chaifen(id){
	
	var con;
	con = window.confirm("是否继续？")
	if(con==true){
	$.ajax({
		url:address+"/Kb/split",
		data:{"UID":uid,"uname":uname,"id":id},
		type:"POST",
		success:function(data){
		
			alert(data.message);
		},
		error:function(e){}
	});
	}
	
}

function opendiv_zs(id){
	
	$("#ipt"+id).css("display","block");
	$("#aip_"+id).css("display","none");
	$("#aiok_"+id).css("display","none");
	$("#ipt"+id).css("float","left");
	
}

function closediv_zs(id){
	
}

function zengson(id){
	
	
	var con;
	con = window.confirm("是否继续？")
	if(con==true){
		var username = $("#").val();
	$.ajax({
		url:address+"/Kb/Give",
		data:{"UID":uid,"uname":uname,"id":id},
		type:"POST",
		success:function(data){
		
			alert(data.message);
		},
		error:function(e){}
	});
	}
	
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