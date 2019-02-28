	var uid = localStorage.getItem("uid");
	var uname = localStorage.getItem("userName");
	var pds;
function showAll(){
	
	document.getElementById("unamess").value=uname;
	document.getElementById("uidss").value=uid;
	var formdata = new FormData(document.getElementById("thbbforms"));
	
	var str="";
	
	 $.ajax({
         url:address+"/web/Returngoods/select",
         type:"POST",
         data:formdata,
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
         
         
         	str+=""+
				"<tr>";str+="<td>"+(index+1)+"</td>";
				if(item.TITLE==undefined||item.TITLE==""||item.TITLE==null){str+="<td></td>";}else{str+="<td>"+item.TITLE+"</td>";}
				if(item.CDATE==undefined||item.CDATE==""||item.CDATE==null){str+="<td></td>";}else{str+="<td>"+item.CDATE+"</td>";}
				if(item.ISTRUE==undefined||item.ISTRUE==""||item.ISTRUE==null){str+="<td></td>";}else{str+="<td>"+item.ISTRUE+"</td>";}
				if(item.ITEMID==undefined||item.ITEMID==""||item.ITEMID==null){str+="<td></td>";}else{str+="<td>"+item.ITEMID+"</td>";}
				if(item.MEMBERID==undefined||item.MEMBERID==""||item.MEMBERID==null){str+="<td></td>";}else{str+="<td>"+item.MEMBERID+"</td>";}
				if(item.NUM==undefined||item.NUM==""||item.NUM==null){str+="<td></td>";}else{str+="<td>"+item.NUM+"</td>";}
				if(item.PRICE==undefined||item.PRICE==""||item.PRICE==null){str+="<td></td>";}else{str+="<td>"+item.PRICE+"</td>";}
				if(item.PRICEALL==undefined||item.PRICEALL==""||item.PRICEALL==null){str+="<td></td>";}else{str+="<td>"+item.PRICEALL+"</td>";}
				if(item.REASON==undefined||item.REASON==""||item.REASON==null){str+="<td></td>";}else{str+="<td>"+item.REASON+"</td>";}
				if(item.REFUND==undefined||item.REFUND==""||item.REFUND==null){str+="<td></td>";}else{str+="<td>"+item.REFUND+"</td>";}
				if(item.REFUNDALL==undefined||item.REFUNDALL==""||item.REFUNDALL==null){str+="<td></td>";}else{str+="<td>"+item.REFUNDALL+"</td>";}
				if(item.REFUSE==undefined||item.REFUSE==""||item.REFUSE==null){str+="<td></td>";}else{str+="<td>"+item.REFUSE+"</td>";}
				if(item.SHOPCODE==undefined||item.SHOPCODE==""||item.SHOPCODE==null){str+="<td></td>";}else{str+="<td>"+item.SHOPCODE+"</td>";}
				if(item.SHOPNAME==undefined||item.SHOPNAME==""||item.SHOPNAME==null){str+="<td></td>";}else{str+="<td>"+item.SHOPNAME+"</td>";}

		
str+=
		
		
	"</tr>";
		pds=item.ISTABLEDATA;
	}
	
	);
	
	
				
	
	 var str44="<a class='btn btn-primary' id='daochubbannues'  style='display:block;float:right;margin-right:15px' onclick=\"showdaochudiv()\" >导出报表</a><a class='btn btn-primary' style='display:block;float:right;margin-right:15px' onclick=\"showAll()\" >查询</a>";
         	
         			
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

function changestartimess(){
	
	var nowstarDate = document.getElementById("changetimess").value;
	var stardatatime = new Date(nowstarDate).getTime()-(8*1000*60*60);
	document.getElementById("starttimess").value=stardatatime;
	if(isNaN(document.getElementById("starttimess").value)){
		document.getElementById("starttimess").value=null;
	}
}

function changeendtimess(){
	var nowstarDate = document.getElementById("changeendtotimess").value;
	var A = new Date(nowstarDate).getTime()-(8*1000*60*60);
	var B = 1000*60*60*24;
	var enddatatime = A+B;
	
	document.getElementById("endtimess").value=enddatatime;
	if(isNaN(document.getElementById("endtimess").value)){
		document.getElementById("endtimess").value=null;
	}
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

function tijiaostarttime(){
	var nowstarDate = document.getElementById("kaistime").value;
	var stardatatime = new Date(nowstarDate).getTime();
	document.getElementById("okkaistime").value=stardatatime;
	
}

function tijiaoendtime(){
	var nowstarDate = document.getElementById("jiestime").value;
	var stardatatime = new Date(nowstarDate).getTime();
	document.getElementById("okkaistime").value=stardatatime;
	
}