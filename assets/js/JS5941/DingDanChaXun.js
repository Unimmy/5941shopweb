	var uid = localStorage.getItem("uid");
	var uname = localStorage.getItem("userName");
 var pds;
 var typesuzi =1;
 
 function setdcshuju(){
	$("#dctouname").val(uname);
	$("#dctoUID").val(uid);
	
	

 }
 
 function changetype(){
	 
	 var typenum = 1;
	 
	var typevalue = document.getElementById("selecttypexiala").value;
	
	if(typevalue=="门店"){typenum=1}
	if(typevalue=="导购"){typenum=2}
	if(typevalue=="供应商"){typenum=3}
	 document.getElementById("selecttype").value=typenum;
	typesuzi=typenum;
 }
 
 
function formatDateTime(timeStamp) { 
    var date = new Date();
    date.setTime(timeStamp * 1000);
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
 var thannue="";
function showAll(){
	
	var strsssss = $("#dctostar").val();
	var endsssss = $("#dctoend").val();
	var rows = $("#thisrows").val();
	var page = $("#thispage").val();
	var types;
	var typess = $("#zhuangtaiscelect").val();
	if(typess=="已付款"){
		types=2;
	}else if(typess=="已接单"){
		types=8;
	}else{
		types=null;
	}
	var str="";
	
	 $.ajax({
         url:address+"/web/selectPurchase/newselect",
         type:"POST",
         data:{"uname":uname,"UID":uid,"star":strsssss,"end":endsssss,"type":types,"rows":rows,"page":page},
         success:function(data){
			 if(data.message=="登录超时"){
					location.href="login.html";
					return;
			}
			 console.log(data);
         	if(data.status == '200'){
         		var message = data.data;
					
					
						
						thannue=
								"<th>序号</th>"+
								"<th>订单号</th>"+
								"<th>下单时间</th>"+
								"<th>商品名称</th>"+
								
								"<th>状态</th>"+
								"<th>助记码</th>"+
								"<th>颜色</th>"+
								"<th>尺码</th>"+
								"<th>数量</th>"+
								"<th>品牌</th>"+
								"<th>厂商</th>"+
								"<th>价格</th>"+
								"<th>配送方式</th>"+
								"<th>商品编码</th>"+
								"<th>邮费</th>"+
								"<th>联系人名称</th>"+
								"<th>联系人电话</th>"+
								"<th>联系人地址</th>";
								
					$.each(message, function(index, item) {
					str+=
					"<tr>";str+="<td>"+(index+1)+"</td>";
		 
					if(item.ID ==""||item.ID==null||item.ID==undefined){str+="<td></td>";}else{str+="<td>"+item.ID	+"</td>";}
					if(item.CDATE ==""||item.CDATE==null||item.CDATE==undefined){str+="<td></td>";}else{str+="<td>"+item.CDATE+"</td>";}
					if(item.TITLE==""||item.TITLE==null||item.TITLE==undefined){str+="<td></td>";}else{str+="<td>"+item.TITLE+"</td>";}
					if(item.STATUS==""||item.STATUS==null||item.STATUS==undefined){str+="<td></td>";}else{str+="<td>"+item.STATUS+"</td>";}
					if(item.CODE ==""||item.CODE==null||item.CODE==undefined){str+="<td></td>";}else{str+="<td>"+item.CODE+"</td>";}
					if(item.COLOUR ==""||item.COLOUR==null||item.COLOUR==undefined){str+="<td></td>";}else{str+="<td>"+item.COLOUR+"</td>";}	
					if(item.MYSIZE ==""||item.MYSIZE==null||item.MYSIZE==undefined){str+="<td></td>";}else{str+="<td>"+item.MYSIZE+"</td>";}
					if(item.NUM==""||item.NUM==null||item.NUM==undefined){str+="<td></td>";}else{str+="<td>"+item.NUM+"</td>";}
					if(item.BRAND ==""||item.BRAND==null||item.BRAND==undefined){str+="<td></td>";}else{str+="<td>"+item.BRAND+"</td>";}	
					if(item.MANUFACTOR ==""||item.MANUFACTOR==null||item.MANUFACTOR==undefined){str+="<td></td>";}else{str+="<td>"+item.MANUFACTOR+"</td>";}	
					if(item.PRICE ==""||item.PRICE==null||item.PRICE==undefined){str+="<td></td>";}else{str+="<td>"+item.PRICE	+"</td>";}
					if(item.SHIPPINGTYPE	 ==""||item.SHIPPINGTYPE	==null||item.SHIPPINGTYPE	==undefined){str+="<td></td>";}else{str+="<td>"+item.SHIPPINGTYPE		+"</td>";}
					if(item.YOUCODE ==""||item.YOUCODE==null||item.YOUCODE==undefined){str+="<td></td>";}else{str+="<td>"+item.YOUCODE	+"</td>";}
					if(item.POSTFEE ==""||item.POSTFEE==null||item.POSTFEE==undefined){str+="<td></td>";}else{str+="<td>"+item.POSTFEE	+"</td>";}
					
					if(item.NAME ==""||item.NAME==null||item.NAME==undefined){str+="<td></td>";}else{str+="<td>"+item.NAME+"</td>";}	
					if(item.PHONE ==""||item.PHONE==null||item.PHONE==undefined){str+="<td></td>";}else{str+="<td>"+item.PHONE+"</td>";}
					if(item.DETAILED ==""||item.DETAILED==null||item.DETAILED==undefined){str+="<td></td>";}else{str+="<td>"+item.DETAILED+"</td>";}					
					str+=				
						"</tr>";
						pds=item.ISTABLEDATA;
						$("#tjrxx").css("display","block");
					});
					
         		
         		
	

	
         	
         			
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
         		document.getElementById('thxianshiquyu').innerHTML=thannue;
         		document.getElementById('allmessage').innerHTML=str;
         		document.getElementById('annuediv').innerHTML=str2;
         		
         		var issuper = localStorage.getItem("issuperadmin");
				var issupergys = localStorage.getItem("superid");
				if(issuper==1 || issupergys==0){
					$("#daochubbannues").css("display","block");
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
	var H = $("#Starttimeshi").val();
	var M = $("#Starttimefen").val();
	document.getElementById("dctostar").value=stardatatime+(H*60*60*1000)+(M*60*1000);
	if(isNaN($("#dctostar").val())==true){
		$("#dctostar").val(null);
	}
}

function changeendtimess(){
	var changeendtimess = document.getElementById("changeendtotimess").value;
	var H = $("#Endtimeshi").val();
	var M = $("#Endtimefen").val();
	var A = new Date(changeendtimess).getTime()-(8*1000*60*60);
	var B = (H*60*60*1000)+(M*60*1000);
	var endsatatime=A+B;
	document.getElementById("dctoend").value=endsatatime;
	if(isNaN($("#dctoend").val())==true){
		$("#dctoend").val(null);
	}
}













