	var uid = localStorage.getItem("uid");
	var uname = localStorage.getItem("userName");
 var pds;
 function changetype(){
	 
	 var typenum = 1;
	 
	var typevalue = document.getElementById("selecttypexiala").value;
	if(typevalue=="用户订单"){typenum=1}
	if(typevalue=="店铺订单"){typenum=2}
	 document.getElementById("selecttype").value=typenum;
	
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
 
function showAll(){
	
	document.getElementById("unamess").value=uname;
	document.getElementById("uidss").value=uid;
	var formdata = new FormData(document.getElementById("tiaojianselecttableform"));
	

	
	 $.ajax({
         url:address+"/Orderrelevance/selectByshopORmember",
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
			 if(data.message=="查询无数据"){
				 alert(data.message);
				
			 }
         	if(data.status == '200'){
         		var message = data.data;
					var str="";
         		$.each(message, function(index, item) {
				
         
         	str+=
				"<tr>";str+="<td>"+(index+1)+"</td>";
					if(item.ID	==""||item.ID	==null||item.ID	==undefined){str+="<td></td>";}else{str+="<td>"+item.ID	+"</td>";}
					if(item.PAYMENT==""||item.PAYMENT==null||item.PAYMENT==undefined){str+="<td></td>";}else{str+="<td>"+item.PAYMENT+"</td>";}
					if(item.PAYMENTTYPE==""||item.PAYMENTTYPE==null||item.PAYMENTTYPE==undefined){str+="<td></td>";}else{str+="<td>"+item.PAYMENTTYPE+"</td>";}
					if(item.POSTFEE==""||item.POSTFEE==null||item.POSTFEE==undefined){str+="<td></td>";}else{str+="<td>"+item.POSTFEE+"</td>";}
					if(item.STATUS==""||item.STATUS==null||item.STATUS==undefined){str+="<td></td>";}else{
					
						if(item.STATUS==1){str+= "<td>未付款</td>";}
						else if(item.STATUS==2){str+= "<td>已付款</td>";}
						else if(item.STATUS==3){str+= "<td>已发货</td>";}
						else if(item.STATUS==4){str+= "<td>已完成</td>";}
						else if(item.STATUS==5){str+= "<td>已关闭</td>";}
						else if(item.STATUS==6){str+= "<td>已到货</td>";}
						else if(item.STATUS==7){str+= "<td>已出货</td>";}
						else if(item.STATUS==8){str+= "<td>已接单</td>";}
						else if(item.STATUS==9){str+= "<td>已拒单</td>";}
						else if(item.STATUS==10){str+= "<td>已退单</td>";}
						else if(item.STATUS==11){str+= "<td>已退款</td>";}
						
					 
						else {str+= "<td> </td>";}
					}
					if(item.ADDTIME==""||item.ADDTIME==null||item.ADDTIME==undefined){str+="<td></td>";}else{str+="<td>"+formatDateTime(item.ADDTIME/1000)+"</td>";}
					if(item.SHIPPINGTYPE==""||item.SHIPPINGTYPE==null||item.SHIPPINGTYPE==undefined){str+="<td></td>";}else{
						if(item.SHIPPINGTYPE==1){str+="<td>自提</td>";}
						else if(item.SHIPPINGTYPE==2){str+="<td>送货</td>";}
						else{str+="<td>无需物流</td>";}
					}
					if(item.MEMBERID==""||item.MEMBERID==null||item.MEMBERID==undefined){str+="<td></td>";}else{str+="<td>"+item.MEMBERID+"</td>";}
					if(item.MYADDRESSID==""||item.MYADDRESSID==null||item.MYADDRESSID==undefined){str+="<td></td>";}else{str+="<td>"+item.MYADDRESSID+"</td>";}
					if(item.BUYERMESEAGE==""||item.BUYERMESEAGE==null||item.BUYERMESEAGE==undefined){str+="<td></td>";}else{str+="<td>"+item.BUYERMESEAGE+"</td>";}
					if(item.BUYERNICK	==""||item.BUYERNICK	==null||item.BUYERNICK	==undefined){str+="<td></td>";}else{str+="<td>"+item.BUYERNICK+"</td>";}
					if(item.B==""||item.B==null||item.B==undefined){str+="<td></td>";}else{str+="<td>"+item.B+"</td>";}
					if(item.B1==""||item.B1==null||item.B1==undefined){str+="<td></td>";}else{str+="<td>"+item.B1+"</td>";}					
					str+=				
				"</tr>";
				pds=item.ISTABLEDATA;
		
	}
	
	);
	

	
         	
         			
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
	if(isNaN(document.getElementById("starttimess").value)){
		document.getElementById("starttimess").value=null;
	}
}

function changeendtimess(){
	var changeendtimess = document.getElementById("changeendtotimess").value;
	
	var A = new Date(changeendtimess).getTime()-(8*1000*60*60);
	var B = 1000*60*60*24;
	var endsatatime=A+B;
	document.getElementById("endtimess").value=endsatatime;
	if(isNaN(document.getElementById("endtimess").value)){
		document.getElementById("endtimess").value=null;
	}
}













