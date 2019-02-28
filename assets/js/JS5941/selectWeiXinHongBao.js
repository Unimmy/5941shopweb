
var uname = localStorage.getItem("userName");
var uid = localStorage.getItem("uid");
var pd;
var pds;
function openDiv(){
	$("#addyunfeixianpage").css("display","block");
}
function addYouHuiQuan(){
	
  var add_min = $("#add_min").val();
	var add_max =  $("#add_max").val();
	var add_price = $("#add_price").val();
	var add_numsize=  $("#add_numsize").val();	
	var add_index=  $("#add_index").val();
	
	var con = confirm("是否继续");
	if(con==true){
		$.ajax({
		url:address+"/Envelopeskey/add",
		data:{"uname":uname,"UID":uid,"maxnum":add_max,"minnum":add_min,"num_price":add_price,"maxsize":add_numsize,"maxt":add_index},
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
 $("#ddivs2").css("display","none");
 $("#annuediv2").css("display","none");
 $("#ddivs1").css("display","block");
 $("#annuediv").css("display","block");
 
	var str="";
	var maxnum = $("#G_account").val();
	var minnum = $("#U_account").val();
	var page = $("#thispage").val();
	var rows = $("#thisrows").val();

	$.ajax({
		url:address+"/Envelopeskey/all",
		type:"POST",
		data:{"uname":uname,"UID":uid,"maxnum":maxnum,"minnum":minnum,"page":page,"rows":rows},
		success:function(data){
			console.log(data);
			var message = data.data;
			if(data.status!=200){alert(data.message)}
			else{
				
				$.each(message, function(index, item) {
					str+="<tr>";
					str+="<td>"+(index+1)+"</td>";
						if(item.id==""||item.id==null||item.id==undefined){str+="<td></td>";}else{str+="<td>"+item.id+"</td>";}
						if(item.maxnum==""||item.maxnum==null||item.maxnum==undefined){str+="<td></td>";}else{str+="<td>"+item.maxnum+"</td>";}
						if(item.minnum==""||item.minnum==null||item.minnum==undefined){str+="<td></td>";}else{str+="<td>"+item.minnum+"</td>";}
						if(item.num_price==""||item.num_price==null||item.num_price==undefined){str+="<td></td>";}else{str+="<td>"+item.num_price+"</td>";}
						if(item.maxsize==""||item.maxsize==null||item.maxsize==undefined){str+="<td></td>";}else{str+="<td>"+item.maxsize+"</td>";}
						if(item.maxt	==""||item.maxt	==null||item.maxt	==undefined){str+="<td></td>";}else{str+="<td>"+item.maxt	+"</td>";}
			str+="</tr>"; 
				 if(item.istabledata==null||item.istabledata==""||item.istabledata==undefined){}else{
					pds=item.istabledata;	}				
				});
			
         			var str2s = "";
					str2s +=
					"<th>序号</th>"+
					"<th>规则编号</th>"+
					"<th>最高金额</th>"+
					"<th>最低金额</th>"+
					"<th>红包合计</th>"+
					"<th>红包数量</th>"+
					"<th>最高金额红包位置</th>";
					
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
					
					         		document.getElementById('annuediv').innerHTML=str2;
					  
					         		
					
         		document.getElementById('allmessage').innerHTML=str;
				document.getElementById('table_th').innerHTML=str2s;
         		
			}
		},
		error:function(){}
	});
	
	
}

function ShowAllxx(){
	
	$("#ddivs1").css("display","none");
	$("#annuediv").css("display","none");
	$("#ddivs2").css("display","block");
	$("#annuediv2").css("display","block");
	
	var str="";
	var maxnum = $("#G_account").val();
	var minnum = $("#U_account").val();
	var page = $("#thispage").val();
	var rows = $("#thisrows").val();

	$.ajax({
		url:address+"/Envelopes/all",
		type:"POST",
		data:{"uname":uname,"UID":uid,"page":page,"rows":rows},
		success:function(data){
			console.log(data);
			var message = data.data;
			if(data.status!=200){alert(data.message)}
			else{
				
				$.each(message, function(index, item) {
					str+="<tr>";
					str+="<td>"+(index+1)+"</td>";
					
						if(item.addtime==""||item.addtime==null||item.addtime==undefined){str+="<td></td>";}else{str+="<td>"+formatDateTime(item.addtime)+"</td>";}
						if(item.id==""||item.id==null||item.id==undefined){str+="<td></td>";}else{str+="<td>"+item.id+"</td>";}

						if(item.num==""||item.num==null||item.num==undefined){str+="<td></td>";}else{str+="<td>"+item.num+"</td>";}
						if(item.istrue==""||item.istrue==null||item.istrue==undefined){str+="<td></td>";}else{
						
							if(item.istrue==1){
								str+="<td>已使用</td>";
							}else{
								str+="<td>未使用</td>";
							}
						}
						if(item.shopname==""||item.shopname==null||item.shopname==undefined){str+="<td></td>";}else{str+="<td>"+item.shopname+"</td>";}
						if(item.phone	==""||item.phone	==null||item.phone	==undefined){str+="<td></td>";}else{str+="<td>"+item.phone	+"</td>";}
			str+="</tr>";    
				if(item.istabledata==null||item.istabledata==""||item.istabledata==undefined){}else{
				pds=item.istabledata;	}					
				});
			
         			var str2s = "";
					str2s +=
					"<th>序号</th>"+
					"<th>领取时间</th>"+
					"<th>红包编号</th>"+
					"<th>红包金额</th>"+
					"<th>是否使用</th>"+
					"<th>店铺名称</th>"+
					"<th>用户账号</th>";
					
					var str2 = ""+
					             		"<table class=\"gopageMune\">"+
					    				"<tr>"+
					    					"<td><input style=\"border:none;background:#ff9121;padding:5px 20px;margin:0px 5px;color:#fff\" type=\"button\" onclick=\"chagepagea();ShowAllxx()\" value=\"首页\" /></td>"+
					    					"<td><input style=\"border:none;background:#ff9121;padding:5px 20px;margin:0px 5px;color:#fff\" type=\"button\" onclick=\"chagepageb();ShowAllxx()\" value=\"上一页\" /></td>"+
					    					"<td style=\"border:none;background:#ff9121;padding:5px 20px;margin:0px 5px;display:block;color:#fff\">当前在第"+$("#thispage").val()+"页</td>";
											if(pds==true){str2+="<td><input  style=\"border:none;background:#ff9121;padding:5px 20px;margin:0px 5px;color:#fff\" type=\"button\" onclick=\"chagepagec();ShowAllxx()\" value=\"下一页\" /></td>";}
											else{
												str2+="";
											}
											str2+=
					    				"</tr>"+
					    				"</table>";	
					
					         	$("#annuediv2").html(str2);
										$("#allmessage2").html(str);
										$("#table_th2").html(str2s);

									
					         		
					
         	
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