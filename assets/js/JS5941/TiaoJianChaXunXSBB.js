	var uid = localStorage.getItem("uid");
	var uname = localStorage.getItem("userName");
 var pds;
function showAll(){
	
	document.getElementById("unamess").value=uname;
	document.getElementById("uidss").value=uid;
	var formdata = new FormData(document.getElementById("tiaojianselecttableform"));
	
	var str="";
	
	 $.ajax({
         url:address+"/Orderrelevance/select",
         type:"POST",
         data:formdata,
		 async:false,
		 cache: false,  
         processData: false,  
         contentType: false,
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
				"<tr>";str+="<td>"+(index+1)+"</td>";
					if(item.TIME==""||item.TIME==null||item.TIME==undefined){str+="<td></td>";}else{str+="<td>"+item.TIME+"</td>";}
					if(item.ID==""||item.ID==null||item.ID==undefined){str+="<td></td>";}else{str+="<td>"+item.ID+"</td>";}
					if(item.ORDERTYPE==""||item.ORDERTYPE==null||item.ORDERTYPE==undefined){str+="<td></td>";}else{str+="<td>"+item.ORDERTYPE+"</td>";}
					if(item.YOUCODE==""||item.YOUCODE==null||item.YOUCODE==undefined){str+="<td></td>";}else{str+="<td>"+item.YOUCODE+"</td>";}
					if(item.NUM==""||item.NUM==null||item.NUM==undefined){str+="<td></td>";}else{str+="<td>"+item.NUM+"</td>";}
					if(item.PRICE==""||item.PRICE==null||item.PRICE==undefined){str+="<td></td>";}else{str+="<td>"+item.PRICE+"</td>";}
					if(item.TOTALFEE	==""||item.TOTALFEE	==null||item.TOTALFEE	==undefined){str+="<td></td>";}else{str+="<td>"+item.TOTALFEE+"</td>";}
					if(item.DETAILED==""||item.DETAILED==null||item.DETAILED==undefined){str+="<td></td>";}else{str+="<td>"+item.DETAILED+"</td>";}
					if(item.PHONE==""||item.PHONE==null||item.PHONE==undefined){str+="<td></td>";}else{str+="<td>"+item.PHONE+"</td>";}		

					if(item.NAME==""||item.NAME==null||item.NAME==undefined){str+="<td></td>";}else{str+="<td>"+item.NAME+"</td>";}
					
										
					
			str+=				
				"</tr>";
				pds=item.ISTABLEDATA;
		
	}
	
	);
	

	 var str44="<form action=\"http://123.207.147.134:8091/Orderrelevance/exportOrderrelevance\" method=\"GET\">"+
				"<input type='hidden' id='starkstime' name='star'/>"+
				"<input type='hidden' id='endjstime' name='end'/>"+
				"<input type='hidden' id='rowststime' name='rows'/>"+
				"<input type='hidden' id='tijiaouid' name='UID'/>"+
				"<input type='hidden' id='tijiaouname' name='uname'/>"+
				"<input type=\"submit\" class='btn btn-primary' id='daochubbannues' onmouseover=\"setshujus()\" style='display:block;float:right;margin-right:15px' value='导出报表' />"+
				"</form>"+
				"<a class='btn btn-primary' style='display:block;float:right;margin-right:15px' onclick=\"showAll()\" >查询</a>";
         	
         			
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
         		document.getElementById('daochuannue').innerHTML=str44;
         		var issuper = localStorage.getItem("issuperadmin");
				if(issuper!=1){
					$("#daochubbannues").css("display","none");
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

function setshujus(){
	
	var str = $("#starttimess").val();
	var end = $("#endtimess").val();
	var row = $("#thisrows").val();
	$("#starkstime").val(str);
	$("#endjstime").val(end);
	$("#rowststime").val(row);
	$("#tijiaouid").val(uid);
	$("#tijiaouname").val(uname);
	
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













