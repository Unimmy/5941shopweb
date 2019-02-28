	var uid = localStorage.getItem("uid");
	var uname = localStorage.getItem("userName");
 var pds;
function showAll(){
	var kaishitimes = $("#changetimess").val();
	var jieshutimes = $("#changeendtotimess").val();
	if(kaishitimes==""||kaishitimes==null||kaishitimes==undefined){ $("#starttimess").val(null);}
	if(jieshutimes==""||jieshutimes==null||jieshutimes==undefined){ $("#endtimess").val(null);}
 
	document.getElementById("unamess").value=uname;
	document.getElementById("uidss").value=uid;
	var formdata = new FormData(document.getElementById("tiaojianselecttableform"));
	
	var str="";
	var strGD="";
	var strGD2="";
	 $.ajax({
         url:address+"/data/shopMember",
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
						if(index==0){
					
						strGD+="<tr>";
							strGD+="<td>"+(index+1)+"</td>";
							if(item.code==""||item.code==null||item.code==undefined){strGD+="<td></td>";}else{strGD+="<td>"+item.code+"</td>";}
							if(item.province==""||item.province==null||item.province==undefined){strGD+="<td></td>";}else{strGD+="<td>"+item.province+"</td>";}
							if(item.name==""||item.name==null||item.name==undefined){strGD+="<td></td>";}else{strGD+="<td>"+item.name+"</td>";}
							if(item.summember==""||item.summember==null||item.summember==undefined){strGD+="<td></td>";}else{strGD+="<td>"+item.summember+"</td>";}
							if(item.active==""||item.active==null||item.active==undefined){strGD+="<td></td>";}else{strGD+="<td>"+item.active+"</td>";}
							if(item.money==""||item.money==null||item.money==undefined){strGD+="<td></td>";}else{strGD+="<td>"+item.money+"</td>";}
							if(item.newsummember==""||item.newsummember==null||item.newsummember==undefined){strGD+="<td></td>";}else{strGD+="<td>"+item.newsummember+"</td>";}
							if(item.newsumclerk==""||item.newsumclerk==null||item.newsumclerk==undefined){strGD+="<td></td>";}else{strGD+="<td>"+item.newsumclerk+"</td>";}
							
						strGD+="</tr>";
						}
					});
					console.log(strGD);
					document.getElementById('AIIS').innerHTML=strGD;
				
				
         		$.each(message, function(index, item) {
         
         
         	str+=
				"<tr>";
					str+="<td>"+(index+1)+"</td>";
					if(item.code==""||item.code==null||item.code==undefined){str+="<td></td>";}else{str+="<td>"+item.code+"</td>";}
					if(item.province==""||item.province==null||item.province==undefined){str+="<td></td>";}else{str+="<td>"+item.province+"</td>";}
					if(item.name==""||item.name==null||item.name==undefined){str+="<td></td>";}else{str+="<td>"+item.name+"</td>";}
					if(item.summember==""||item.summember==null||item.summember==undefined){str+="<td></td>";}else{str+="<td>"+item.summember+"</td>";}
					if(item.active==""||item.active==null||item.active==undefined){str+="<td></td>";}else{str+="<td>"+item.active+"</td>";}
					if(item.money==""||item.money==null||item.money==undefined){str+="<td></td>";}else{str+="<td>"+item.money+"</td>";}
					if(item.newsummember==""||item.newsummember==null||item.newsummember==undefined){str+="<td></td>";}else{str+="<td>"+item.newsummember+"</td>";}
					if(item.newsumclerk==""||item.newsumclerk==null||item.newsumclerk==undefined){str+="<td></td>";}else{str+="<td>"+item.newsumclerk+"</td>";}
					
					
				str+="</tr>";
				pds=item.ISTABLEDATA;
				
		
	}
	
	);
	

	 var str44= "<form action=' http://123.207.147.134:8091/data/exportShopMember' method='GET'>"+
					"<input type='hidden' name='star' id='startimeipts'>"+
					"<input type='hidden' name='end' id='endtimeipts'>"+
					"<input type='hidden' name='uname' id='unameipts'>"+
					"<input type='hidden' name='UID' id='UIDipts'>"+
					"<input type='hidden' name='code' id='shopcodeipts'>"+
					"<input type='hidden' name='rows' id='rowsiptsss'>"+
					"<input class='btn btn-primary' style='display:block;float:right;margin-right:15px' onmouseover='setcansu()' type='submit' value='导出报表' />"+
				"</form>"+
				
				"<a class='btn btn-primary' style='display:block;float:right;margin-right:15px' onclick=\"showAll()\" >查询</a>";
         	
         			
         		    var str2 = ""+
             		"<table class=\"gopageMune\">"+
    				"<tr>"+
    					"<td><input style=\"border:none;background:#ff9121;padding:5px 20px;margin:0px 5px;color:#fff\" type=\"button\" onclick=\"chagepagea();showAll()\" value=\"首页\" /></td>"+
    					"<td><input style=\"border:none;background:#ff9121;padding:5px 20px;margin:0px 5px;color:#fff\" type=\"button\" onclick=\"chagepageb();showAll()\" value=\"上一页\" /></td>"+
    					"<td style=\"border:none;background:#ff9121;padding:5px 20px;margin:0px 5px;display:block;color:#fff\">当前在第"+$("#thispage").val()+"页</td>";
						var rows = $("#thisrowsset").val();
			 
						if(message.length==(parseInt(rows)+1)){str2+="<td><input  style=\"border:none;background:#ff9121;padding:5px 20px;margin:0px 5px;color:#fff\" type=\"button\" onclick=\"chagepagec();showAll()\" value=\"下一页\" /></td>";}
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
getdivwidth();
}

function setcansu(){
	
	$("#startimeipts").val($("#starttimess").val());
	$("#endtimeipts").val($("#endtimess").val());
	$("#unameipts").val(uname);
	$("#UIDipts").val(uid);
	$("#shopcodeipts").val($("#dianpuid").val());
	$("#rowsiptsss").val($("#thisrowsset").val());
}

function setpage(){
	document.getElementById("thispage").value = document.getElementById("thispageset").value;
	
}

function setrows(){
	document.getElementById("thisrows").value = document.getElementById("thisrowsset").value;
	
}

function changetimes(){
	var starttime = document.getElementById("starttimess").value;
	var endtime = document.getElementById("endtimess").value;
	
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
	var stardatatime;
	var changetimess = document.getElementById("changetimess").value;
	if(changetimess==""||changetimess==null||changetimess==undefined){
		stardatatime=null;
	}else{
	 stardatatime= new Date(changetimess).getTime()-(8*1000*60*60);
	}
	document.getElementById("starttimess").value=stardatatime;
	if(isNaN(document.getElementById("starttimess").value)){
		document.getElementById("starttimess").value=null;
	}
}

function changeendtimess(){
	var  endsatatime;
	var changeendtimess = document.getElementById("changeendtotimess").value;

	if(changeendtimess==""||changeendtimess==null||changeendtimess==undefined){
		endsatatime=null;
	}else{
		var A = new Date(changeendtimess).getTime()-(8*1000*60*60);
		var B = 1000*60*60*24;
		endsatatime = A+B;
	}
	
	document.getElementById("endtimess").value=endsatatime;
	if(isNaN(document.getElementById("endtimess").value)){
		document.getElementById("endtimess").value=null;
	}
}













