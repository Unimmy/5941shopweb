	var uid = localStorage.getItem("uid");
	var uname = localStorage.getItem("userName");
 var pds;
 var typesuzi =1;
 
 function setdcshuju(){
	$("#dctouname").val(uname);
	$("#dctoUID").val(uid);
	$("#dctopage").val($("#thispageset").val());
	$("#dctorows").val($("#thisrowsset").val());
	$("#dctostar").val($("#starttimess").val());
	$("#dctoend"). val($("#endtimess").val());
	$("#dctotype").val(typesuzi);
	$("#dctocode").val($("#dccodes").val());
	if(isNaN($("#starttimess").val())==true){
		document.getElementById("dctostar").value=null;
	}
	if(isNaN($("#endtimess").val())==true){
		document.getElementById("dctoend").value=null;
	}

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
    return y+"-"+m+"-"+d+" "+h+":"+minute;    
};  
 var thannue="";
function showAll(){
	
	document.getElementById("unamess").value=uname;
	document.getElementById("uidss").value=uid;
	var formdata = new FormData(document.getElementById("tiaojianselecttableform"));
	
	var str="";
	
	 $.ajax({
         url:address+"/web/ShopPostfee",
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
					if(typesuzi==1){
						
						thannue="<th>序号</th>"+
								"<th>订单ID</th>"+
								"<th>下单时间</th>"+
								"<th>店铺编号</th>"+
								"<th>邮费</th>"+
								"<th>店铺名称</th>";
						
						
					$.each(message, function(index, item) {
					str+=
					"<tr>";str+="<td>"+(index+1)+"</td>";
					if(item.ORDERSID ==""||item.ORDERSID	==null||item.ORDERSID	==undefined){str+="<td></td>";}else{str+="<td>"+item.ORDERSID	+"</td>";}
					if(item.TIME==""||item.TIME==null||item.TIME==undefined){str+="<td></td>";}else{str+="<td>"+item.TIME+"</td>";}
					
					if(item.SHOPCODE ==""||item.SHOPCODE==null||item.SHOPCODE==undefined){str+="<td></td>";}else{str+="<td>"+item.SHOPCODE+"</td>";}
					if(item.POSTFEE==""||item.POSTFEE==null||item.POSTFEE==undefined){str+="<td>0</td>";}else{str+="<td>"+item.POSTFEE+"</td>";}
					 		if(item.SHOPNAME ==""||item.SHOPNAME==null||item.SHOPNAME==undefined){str+="<td></td>";}else{str+="<td>"+item.SHOPNAME+"</td>";}		
					str+=				
						"</tr>";
						pds=item.ISTABLEDATA;
						$("#tjrxx").css("display","none");
					});
					}else
					if(typesuzi==2){
						
						thannue="<th>序号</th>"+
								"<th>订单ID</th>"+
								"<th>下单时间</th>"+
								"<th>店铺编号</th>"+
								"<th>邮费</th>"+
								"<th>店铺名称</th>"+
								"<th>推荐人</th>";
								
					$.each(message, function(index, item) {
					str+=
					"<tr>";str+="<td>"+(index+1)+"</td>";
					if(item.ORDERSID ==""||item.ORDERSID	==null||item.ORDERSID	==undefined){str+="<td></td>";}else{str+="<td>"+item.ORDERSID	+"</td>";}
					if(item.TIME==""||item.TIME==null||item.TIME==undefined){str+="<td></td>";}else{str+="<td>"+item.TIME+"</td>";}
					
					if(item.SHOPCODE ==""||item.SHOPCODE==null||item.SHOPCODE==undefined){str+="<td></td>";}else{str+="<td>"+item.SHOPCODE+"</td>";}
					if(item.POSTFEE==""||item.POSTFEE==null||item.POSTFEE==undefined){str+="<td>0</td>";}else{str+="<td>"+item.POSTFEE+"</td>";}
					if(item.SHOPNAME ==""||item.SHOPNAME==null||item.SHOPNAME==undefined){str+="<td></td>";}else{str+="<td>"+item.SHOPNAME+"</td>";}	
					if(item.CLERK ==""||item.CLERK==null||item.CLERK==undefined){str+="<td></td>";}else{str+="<td>"+item.CLERK+"</td>";}							
					str+=				
						"</tr>";
						pds=item.ISTABLEDATA;
						$("#tjrxx").css("display","block");
					});
					}else
					if(typesuzi==3){
						
						thannue="<th>序号</th>"+
								"<th>订单ID</th>"+
								"<th>退货/销售编号</th>"+
								"<th>下单时间</th>"+
								"<th>订单状态</th>"+
								"<th>店铺名称</th>"+
								"<th>店铺编号</th>"+
								"<th>运费</th>"+
								"<th>订单金额</th>"
								;
								
					$.each(message, function(index, item) {
					str+=
					"<tr>";str+="<td>"+(index+1)+"</td>";
					if(item.ORDERSID ==""||item.ORDERSID	==null||item.ORDERSID	==undefined){str+="<td></td>";}else{str+="<td>"+item.ORDERSID	+"</td>";}
					if(item.ID ==""||item.ID	==null||item.ID	==undefined){str+="<td></td>";}else{str+="<td>"+item.ID	+"</td>";}
					if(item.TIME==""||item.TIME==null||item.TIME==undefined){str+="<td></td>";}else{str+="<td>"+item.TIME+"</td>";}
					if(item.TYPE ==""||item.TYPE==null||item.TYPE==undefined){str+="<td></td>";}else{str+="<td>"+item.TYPE+"</td>";}
					if(item.SHOPNAME ==""||item.SHOPNAME==null||item.SHOPNAME==undefined){str+="<td></td>";}else{str+="<td>"+item.SHOPNAME+"</td>";}	
					if(item.SHOPCODE ==""||item.SHOPCODE==null||item.SHOPCODE==undefined){str+="<td></td>";}else{str+="<td>"+item.SHOPCODE+"</td>";}
					if(item.POSTFEE==""||item.POSTFEE==null||item.POSTFEE==undefined){str+="<td>0</td>";}else{str+="<td>"+item.POSTFEE+"</td>";}
					if(item.PAYMENT ==""||item.PAYMENT==null||item.PAYMENT==undefined){str+="<td></td>";}else{str+="<td>"+item.PAYMENT+"</td>";}	
					
										
					str+=				
						"</tr>";
						pds=item.ISTABLEDATA;
						$("#tjrxx").css("display","block");
					});
					}
         		
         		
	

	
         	
         			
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
				document.getElementById('okannue4').innerHTML=str4;
         		
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
	if(isNaN($("#starttimess").val())==true){
		$("#starttimess").val(null);
	}
}

function changeendtimess(){
	var changeendtimess = document.getElementById("changeendtotimess").value;
	
	var A = new Date(changeendtimess).getTime()-(8*1000*60*60);
	var B = 1000*60*60*24;
	var endsatatime=A+B;
	document.getElementById("endtimess").value=endsatatime;
	if(isNaN($("#endtimess").val())==true){
		$("#endtimess").val(null);
	}
}













