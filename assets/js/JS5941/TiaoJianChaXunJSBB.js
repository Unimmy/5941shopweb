	var uid = localStorage.getItem("uid");
	var uname = localStorage.getItem("userName");
 
	var pds;
	var pagess;
	
	function setcanshu(){
		
		var uids = localStorage.getItem("uid");
		var unames = localStorage.getItem("userName");
		var start = $("#starttimess").val();
		var end = $("#endtimess").val();
		var state = $("#zttype").val();
		var type = $("#leixingtype").val();
		
		var setphone = $("#accounts").val();
		var setpage = $("#thispage").val();
		var setrows = $("#thisrows").val();
		var setstate;
		var setstart;
		var setend;
		var settype;
	
		if(start==""||start==null||start==undefined){
			setstart=null;
		}else{
			setstart=new Date(start).getTime()-(1000*60*60*8);
		}
		
		if(end==""||end==null||end==undefined){
			setend=null;
		}else{
			setend=new Date(end).getTime()+(1000*60*60*16);
		}
		
		if(state=="未结算"){
			setstate=0;
		}else if(state=="已结算"){
			setstate=1;
		}else{
			setstate=null;
		}
		
		if(type=="导购"){
			settype=1;
		}else if(type=="店铺"){
			settype=2;
		}else if(type=="供应商"){
			settype=3;
		}
 
		$("#start_out").val(setstart);
		$("#end_out").val(setend);
		$("#type_out").val(settype);
		$("#phone_out").val(setphone);
		$("#page_out").val(setpage);
		$("#rows_out").val(setrows);
		$("#state_out").val(setstate);
		$("#uname_out").val(unames);
		$("#uid_out").val(uids);
		
	}
	
	
	
	
	
	
function showAll(){
	var superid = localStorage.getItem("superid");
	var issuper = localStorage.getItem("issuperadmin");
	pagess = document.getElementById("thispage").value
	document.getElementById("unamess").value=uname;
	document.getElementById("uidss").value=uid;
	var formdata = new FormData(document.getElementById("jsbbforms"));
	
	var str="";
	var strs222="";
	
	 $.ajax({
         url:address+"/web/Sharingdetails/select",
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
					pds = item.ISTABLEDATA;
				
         	str+=""+
				"<tr>";str+="<td>"+(index+1)+"</td>";
	 
			if(issuper==1){
				
				if(item.ID==undefined||item.ID==""||item.ID==null){str+="<td></td>";}else{str+="<td>"+item.ID+"</td>";}
				if(item.CDATE==undefined||item.CDATE==""||item.CDATE==null){str+="<td></td>";}else{str+="<td>"+item.CDATE+"</td>";}
				if(item.ORDERSID==undefined||item.ORDERSID==""||item.ORDERSID==null){str+="<td></td>";}else{str+="<td>"+item.ORDERSID+"</td>";}
				if(item.ALLNUMBER==undefined||item.ALLNUMBER==""||item.ALLNUMBER==null){str+="<td></td>";}else{
					
					if(isNaN(item.ALLNUMBER/100)==true){
						str+="<td>"+item.ALLNUMBER+"</td>";
					}else{
						str+="<td>"+item.ALLNUMBER/100+"</td>";
					}
					
				}
				if(item.SUPPLIERNAME==undefined||item.SUPPLIERNAME==""||item.SUPPLIERNAME==null){str+="<td></td>";}else{str+="<td>"+item.SUPPLIERNAME+"</td>";}
				
				if(item.SHOPONE==undefined||item.SHOPONE==""||item.SHOPONE==null){str+="<td id=\"cn01\"></td>";}else{str+="<td  id=\"cn01\">"+item.SHOPONE/100+"</td>";}
				if(item.SHOPTO==undefined||item.SHOPTO==""||item.SHOPTO==null){str+="<td  id=\"cn02\"></td>";}else{str+="<td  id=\"cn02\" >"+item.SHOPTO/100+"</td>";}
				if(item.SHOP==undefined||item.SHOP==""||item.SHOP==null){str+="<td></td>";}else{str+="<td>"+item.SHOP/100+"</td>";}
				if(item.SYSTEMONE==undefined||item.SYSTEMONE==""||item.SYSTEMONE==null){str+="<td id=\"cn03\"></td>";}else{str+="<td  id=\"cn03\">"+item.SYSTEMONE/100+"</td>";}
				if(item.CLERK==undefined||item.CLERK==""||item.CLERK==null){str+="<td></td>";}else{str+="<td>"+item.CLERK/100+"</td>";}
				
				if(item.PHONE==undefined||item.PHONE==""||item.PHONE==null){str+="<td></td>";}else{str+="<td>"+item.PHONE+"</td>";}
				if(item.PHONE1==undefined||item.PHONE1==""||item.PHONE1==null){str+="<td></td>";}else{str+="<td>"+item.PHONE1+"</td>";}
				
				if(item.STATE==undefined||item.STATE==""||item.STATE==null){str+="<td></td>";}else{str+="<td>"+item.STATE+"</td>";}
			}else if(superid==0){
				if(item.ID==undefined||item.ID==""||item.ID==null){str+="<td></td>";}else{str+="<td>"+item.ID+"</td>";}
				if(item.CDATE==undefined||item.CDATE==""||item.CDATE==null){str+="<td></td>";}else{str+="<td>"+item.CDATE+"</td>";}
				if(item.ORDERSID==undefined||item.ORDERSID==""||item.ORDERSID==null){str+="<td></td>";}else{str+="<td>"+item.ORDERSID+"</td>";}
				if(item.ALLNUMBER==undefined||item.ALLNUMBER==""||item.ALLNUMBER==null){str+="<td></td>";}else{
					
					
					if(isNaN(item.ALLNUMBER/100)==true){
						str+="<td>"+item.ALLNUMBER+"</td>";
					}else{
						str+="<td>"+item.ALLNUMBER/100+"</td>";
					}
					
				}
				if(item.SUPPLIERNAME==undefined||item.SUPPLIERNAME==""||item.SUPPLIERNAME==null){str+="<td></td>";}else{str+="<td>"+item.SUPPLIERNAME+"</td>";}
				if(item.SHOPONE==undefined||item.SHOPONE==""||item.SHOPONE==null){str+="<td id=\"cn01\"></td>";}else{str+="<td  id=\"cn01\">"+item.SHOPONE/100+"</td>";}

				
				if(item.PHONE==undefined||item.PHONE==""||item.PHONE==null){str+="<td></td>";}else{str+="<td>"+item.PHONE+"</td>";}
				if(item.PHONE1==undefined||item.PHONE1==""||item.PHONE1==null){str+="<td></td>";}else{str+="<td>"+item.PHONE1+"</td>";}
				
				if(item.STATE==undefined||item.STATE==""||item.STATE==null){str+="<td></td>";}else{str+="<td>"+item.STATE+"</td>";}
					$("#systemfencheng").css("display","none");
					$("#dianpfengcheng").css("display","none");
					$("#fengsfengcheng").css("display","none");
					$("#tjianrfencheng").css("display","none"); 
					
			}else{
				if(item.ID==undefined||item.ID==""||item.ID==null){str+="<td></td>";}else{str+="<td>"+item.ID+"</td>";}
				if(item.CDATE==undefined||item.CDATE==""||item.CDATE==null){str+="<td></td>";}else{str+="<td>"+item.CDATE+"</td>";}
				if(item.ORDERSID==undefined||item.ORDERSID==""||item.ORDERSID==null){str+="<td></td>";}else{str+="<td>"+item.ORDERSID+"</td>";}
				if(item.ALLNUMBER==undefined||item.ALLNUMBER==""||item.ALLNUMBER==null){str+="<td></td>";}else{
					
					if(isNaN(item.ALLNUMBER/100)==true){
						str+="<td>"+item.ALLNUMBER+"</td>";
					}else{
						str+="<td>"+item.ALLNUMBER/100+"</td>";
					}
				}
				if(item.SUPPLIERNAME==undefined||item.SUPPLIERNAME==""||item.SUPPLIERNAME==null){str+="<td></td>";}else{str+="<td>"+item.SUPPLIERNAME+"</td>";}
				 
				if(item.SHOP==undefined||item.SHOP==""||item.SHOP==null){str+="<td></td>";}else{str+="<td>"+item.SHOP/100+"</td>";}
				if(item.CLERK==undefined||item.CLERK==""||item.CLERK==null){str+="<td></td>";}else{str+="<td>"+item.CLERK/100+"</td>";}
				if(item.PHONE==undefined||item.PHONE==""||item.PHONE==null){str+="<td></td>";}else{str+="<td>"+item.PHONE+"</td>";}
				if(item.PHONE1==undefined||item.PHONE1==""||item.PHONE1==null){str+="<td></td>";}else{str+="<td>"+item.PHONE1+"</td>";}
				
				if(item.STATE==undefined||item.STATE==""||item.STATE==null){str+="<td></td>";}else{str+="<td>"+item.STATE+"</td>";}
					$("#gyshangfencheg").css("display","none");
					$("#fengsfengcheng").css("display","none");
					$("#systemfencheng").css("display","none");
				 
			}
			
str+=
		
		
	"</tr>";
		
	});
	
	   $.each(message, function(index, item) {
					
				if(index==0){
         	strs222+=""+
				"<tr>";strs222+="<td>"+(index+1)+"</td>";
	 
			if(issuper==1){
				
				if(item.ID==undefined||item.ID==""||item.ID==null){strs222+="<td></td>";}else{strs222+="<td>"+item.ID+"</td>";}
				if(item.CDATE==undefined||item.CDATE==""||item.CDATE==null){strs222+="<td></td>";}else{strs222+="<td>"+item.CDATE+"</td>";}
				if(item.ORDERSID==undefined||item.ORDERSID==""||item.ORDERSID==null){strs222+="<td></td>";}else{strs222+="<td>"+item.ORDERSID+"</td>";}
				if(item.ALLNUMBER==undefined||item.ALLNUMBER==""||item.ALLNUMBER==null){strs222+="<td></td>";}else{
					
					
					if(isNaN(item.ALLNUMBER/100)==true){
					strs222+="<td>"+item.ALLNUMBER+"</td>";
					}else{
					strs222+="<td>"+item.ALLNUMBER/100+"</td>";
					}
					
				}
				if(item.SUPPLIERNAME==undefined||item.SUPPLIERNAME==""||item.SUPPLIERNAME==null){strs222+="<td></td>";}else{strs222+="<td>"+item.SUPPLIERNAME+"</td>";}
				
				if(item.SHOPONE==undefined||item.SHOPONE==""||item.SHOPONE==null){strs222+="<td id=\"cn01\"></td>";}else{strs222+="<td  id=\"cn01\">"+item.SHOPONE/100+"</td>";}
				if(item.SHOPTO==undefined||item.SHOPTO==""||item.SHOPTO==null){strs222+="<td  id=\"cn02\"></td>";}else{strs222+="<td  id=\"cn02\" >"+item.SHOPTO/100+"</td>";}
				if(item.SHOP==undefined||item.SHOP==""||item.SHOP==null){strs222+="<td></td>";}else{strs222+="<td>"+item.SHOP/100+"</td>";}
				if(item.SYSTEMONE==undefined||item.SYSTEMONE==""||item.SYSTEMONE==null){strs222+="<td id=\"cn03\"></td>";}else{strs222+="<td  id=\"cn03\">"+item.SYSTEMONE/100+"</td>";}
				if(item.CLERK==undefined||item.CLERK==""||item.CLERK==null){strs222+="<td></td>";}else{strs222+="<td>"+item.CLERK/100+"</td>";}
				
				if(item.PHONE==undefined||item.PHONE==""||item.PHONE==null){strs222+="<td></td>";}else{strs222+="<td>"+item.PHONE+"</td>";}
				if(item.PHONE1==undefined||item.PHONE1==""||item.PHONE1==null){strs222+="<td></td>";}else{strs222+="<td>"+item.PHONE1+"</td>";}
				
				if(item.STATE==undefined||item.STATE==""||item.STATE==null){strs222+="<td></td>";}else{strs222+="<td>"+item.STATE+"</td>";}
			}else if(superid==0){
				if(item.ID==undefined||item.ID==""||item.ID==null){strs222+="<td></td>";}else{strs222+="<td>"+item.ID+"</td>";}
				if(item.CDATE==undefined||item.CDATE==""||item.CDATE==null){strs222+="<td></td>";}else{strs222+="<td>"+item.CDATE+"</td>";}
				if(item.ORDERSID==undefined||item.ORDERSID==""||item.ORDERSID==null){strs222+="<td></td>";}else{strs222+="<td>"+item.ORDERSID+"</td>";}
				if(item.ALLNUMBER==undefined||item.ALLNUMBER==""||item.ALLNUMBER==null){strs222+="<td></td>";}else{
					
					if(isNaN(item.ALLNUMBER/100)==true){
					strs222+="<td>"+item.ALLNUMBER+"</td>";
					}else{
					strs222+="<td>"+item.ALLNUMBER/100+"</td>";
					}
				}
				if(item.SUPPLIERNAME==undefined||item.SUPPLIERNAME==""||item.SUPPLIERNAME==null){strs222+="<td></td>";}else{strs222+="<td>"+item.SUPPLIERNAME+"</td>";}
				if(item.SHOPONE==undefined||item.SHOPONE==""||item.SHOPONE==null){strs222+="<td id=\"cn01\"></td>";}else{strs222+="<td  id=\"cn01\">"+item.SHOPONE/100+"</td>";}

				
				if(item.PHONE==undefined||item.PHONE==""||item.PHONE==null){strs222+="<td></td>";}else{strs222+="<td>"+item.PHONE+"</td>";}
				if(item.PHONE1==undefined||item.PHONE1==""||item.PHONE1==null){strs222+="<td></td>";}else{strs222+="<td>"+item.PHONE1+"</td>";}
				
				if(item.STATE==undefined||item.STATE==""||item.STATE==null){strs222+="<td></td>";}else{strs222+="<td>"+item.STATE+"</td>";}
					$("#systemfencheng3").css("display","none");
					$("#dianpfengcheng3").css("display","none");
					$("#fengsfengcheng3").css("display","none");
					$("#tjianrfencheng3").css("display","none"); 
					
			}else{
				if(item.ID==undefined||item.ID==""||item.ID==null){strs222+="<td></td>";}else{strs222+="<td>"+item.ID+"</td>";}
				if(item.CDATE==undefined||item.CDATE==""||item.CDATE==null){strs222+="<td></td>";}else{strs222+="<td>"+item.CDATE+"</td>";}
				if(item.ORDERSID==undefined||item.ORDERSID==""||item.ORDERSID==null){strs222+="<td></td>";}else{strs222+="<td>"+item.ORDERSID+"</td>";}
				if(item.ALLNUMBER==undefined||item.ALLNUMBER==""||item.ALLNUMBER==null){strs222+="<td></td>";}else{
					if(isNaN(item.ALLNUMBER/100)==true){
					strs222+="<td>"+item.ALLNUMBER+"</td>";
					}else{
					strs222+="<td>"+item.ALLNUMBER/100+"</td>";
					}
				}
				if(item.SUPPLIERNAME==undefined||item.SUPPLIERNAME==""||item.SUPPLIERNAME==null){strs222+="<td></td>";}else{strs222+="<td>"+item.SUPPLIERNAME+"</td>";}
				 
				if(item.SHOP==undefined||item.SHOP==""||item.SHOP==null){strs222+="<td></td>";}else{strs222+="<td>"+item.SHOP/100+"</td>";}
				if(item.CLERK==undefined||item.CLERK==""||item.CLERK==null){strs222+="<td></td>";}else{strs222+="<td>"+item.CLERK/100+"</td>";}
				if(item.PHONE==undefined||item.PHONE==""||item.PHONE==null){strs222+="<td></td>";}else{strs222+="<td>"+item.PHONE+"</td>";}
				if(item.PHONE1==undefined||item.PHONE1==""||item.PHONE1==null){strs222+="<td></td>";}else{strs222+="<td>"+item.PHONE1+"</td>";}
				
				if(item.STATE==undefined||item.STATE==""||item.STATE==null){strs222+="<td></td>";}else{strs222+="<td>"+item.STATE+"</td>";}
					$("#gyshangfencheg3").css("display","none");
					$("#fengsfengcheng3").css("display","none");
					$("#systemfencheng3").css("display","none");
				 
			}
			
strs222+=
		
		
	"</tr>";
				}
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
						str2+=
    				"</tr>"+
    				"</table>";	
         			
         		document.getElementById('allmessage').innerHTML=str;
         		document.getElementById('annuediv').innerHTML=str2;
         		document.getElementById('allmessage22').innerHTML=strs222;
         		
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

function formatDateTime(timeStamp) { 
    var date = new Date();
    date.setTime(timeStamp);
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
    return y+"/"+m+"/"+d+"/"+" "+h+":"+minute;    
}

function showAll2(){
	var issuperadmin = localStorage.getItem("issuperadmin");
	var zttype = $("#zttype").val();
	var zttypes;
	var getindex;
	if(zttype=="已结算"){
		zttypes = 1;
	}else if(zttype=="未结算"){
		zttypes = 0;
	}else{
		zttypes = null;
	}

	var str = "";
	var strs222 = "";
	
	var types = $("#leixingtype").val();
 
	var typess ;
	if(types=="导购"){
		typess=1;	
	}else if(types=="店铺"){
		typess=2;
	}else if(types=="供应商"){
		typess=3;
	}
	var accounts =  $("#accounts").val();
 
	var rows =  $("#thisrows").val();
	var page =  $("#thispage").val();
 
	var numbers = 0 ;
	var getstarttime = $("#starttimess").val();
	var getendtime = $("#endtimess").val();
	var starttime;
	var endtime;
	if(getstarttime!=null){
		starttime = new Date(getstarttime).getTime() - (1000*60*60*8);
		 
	}
	
	if(getendtime!=null){
		endtime = new Date(getendtime).getTime() + (1000*60*60*16);
		 
	}
	if(isNaN(starttime)==true){starttime=null}
	if(isNaN(endtime)==true){endtime=null}
	 var superidget=localStorage.getItem("superid");
 if(issuperadmin==1){
	
	 $("#typediv").css("display","block");
	 $("#leixingdiv").css("display","block");
	 $("#acountdiv").css("display","block");
 }
 else if(superidget==0){
	 typess=2;
	 accounts = uname;
	 $("#typediv").css("display","block");
 }
	
	$.ajax({
		url:address+"/web/Commission/select2",
		type:"POST",
		async:false,
		data:{"uname":uname,"phone":accounts,"UID":uid,"page":page,"rows":rows,"star":starttime,"end":endtime},
		 success:function(data){
			
			 if(data.message=="登录超时"){
					location.href="login.html";
					return;
			}
			 console.log(data);
         	if(data.status == '200'){
         		var message = data.data;
			
        $.each(message, function(index, item) {
			
			numbers++;
					pds = item.istabledata;
			
         	str+="<tr>";
			str+="<td>"+numbers+"</td>";
			getindex = index;
				if(item.ordersid==undefined||item.ordersid==""||item.ordersid==null){str+="<td></td>";}else{str+="<td>"+item.ordersid+"</td>";}
				if(item.memberid==undefined||item.memberid==""||item.memberid==null){str+="<td></td>";}else{str+="<td>"+item.memberid+"</td>";}
				
				if(item.num1==undefined||item.num1==""||item.num1==null){str+="<td></td>";}else{str+="<td>"+item.num1+"</td>";}
				if(item.num2==undefined||item.num2==""||item.num2==null){str+="<td></td>";}else{str+="<td>"+item.num2+"</td>";}
				if(item.num3==undefined||item.num3==""||item.num3==null){str+="<td></td>";}else{str+="<td>"+item.num3+"</td>";}
				if(item.num4==undefined||item.num4==""||item.num4==null){str+="<td></td>";}else{str+="<td>"+item.num4+"</td>";}
				if(item.type==undefined||item.type==""||item.type==null){str+="<td></td>";}else{
					if(item.type==1){
						str+="<td>普通导购</td>";
					}else if(item.type==2){
						str+="<td>线上店主</td>";
					}else if(item.type==3){
						str+="<td>分销商</td>";
					}else if(item.type==4){
						str+="<td>实体店主</td>";
					}else {
						str+="<td>普通用户</td>";
					}
				}
				
				if(item.typenum	==undefined||item.typenum	==""||item.typenum	==null){str+="<td></td>";}else{
					if(item.typenum==1){
						str+="<td>正常</td>";
					}else {
						str+="<td>冻结</td>";
					}
				}
				if(item.jtype	==undefined||item.jtype	==""||item.jtype	==null){str+="<td>不冻结</td>";}else{
					if(item.jtype==1){
						str+="<td>线上店主</td>";
					}else if (item.jtype==2){
						str+="<td>分销商</td>";
					}else{
						str+="<td>不冻结</td>";
					}
					 
				}
				if(item.ordersnum	==undefined||item.ordersnum	==""||item.ordersnum	==null){str+="<td></td>";}else{str+="<td>"+item.ordersnum+"</td>";}
				if(item.onenum	==undefined||item.onenum	==""||item.onenum	==null){str+="<td></td>";}else{str+="<td>"+item.onenum+"</td>";}
				if(item.memberone	==undefined||item.memberone	==""||item.memberone	==null){str+="<td></td>";}else{str+="<td>"+item.memberone+"</td>";}
				if(item.memberid1	==undefined||item.memberid1	==""||item.memberid1	==null){str+="<td></td>";}else{str+="<td>"+item.memberid1+"</td>";}
				if(item.memberid2	==undefined||item.memberid2	==""||item.memberid2	==null){str+="<td></td>";}else{str+="<td>"+item.memberid2+"</td>";}
				if(item.memberid3	==undefined||item.memberid3	==""||item.memberid3	==null){str+="<td></td>";}else{str+="<td>"+item.memberid3+"</td>";}
				if(item.memberid4	==undefined||item.memberid4	==""||item.memberid4	==null){str+="<td></td>";}else{str+="<td>"+item.memberid4+"</td>";}
				if(item.state	==undefined||item.state	==""||item.state	==null){str+="<td></td>";}else{
					if(item.state==1){
						str+="<td>未入账</td>";
					}else if(item.state==2){
						str+="<td>已入账</td>";
					}else{
						str+="<td>已结算</td>";
					}
				}
				
				if(item.time1	==undefined||item.time1	==""||item.time1	==null){str+="<td></td>";}else{str+="<td>"+formatDateTime(item.time1)+"</td>";}
				if(item.time2	==undefined||item.time2	==""||item.time2	==null){str+="<td></td>";}else{str+="<td>"+formatDateTime(item.time2)+"</td>";}
				if(item.time3	==undefined||item.time3	==""||item.time3	==null){str+="<td></td>";}else{str+="<td>"+formatDateTime(item.time3)+"</td>";}
				if(item.commoditynum	==undefined||item.commoditynum	==""||item.commoditynum	==null){str+="<td></td>";}else{str+="<td>"+item.commoditynum+"</td>";}
			
str+=
	"</tr>";
		
	});
	
	var str12 = "<th>序号</th>"+
				"<th>订单编号</th>"+
				"<th>购买人账号</th>"+
				
				"<th>导购所得金额</th>"+
				"<th>线上店主所得金额</th>"+
				"<th>分销商所得金额</th>"+
				"<th>实体店主所得金额</th>"+
				"<th>购买人身份</th>"+
				
				"<th>金额状态</th>"+
				"<th>冻结节点</th>"+
				"<th>订单金额</th>"+
				"<th>供应商所得金额</th>"+
				"<th>对应供应商账号</th>"+
				"<th>对应导购账号</th>"+
				"<th>对应线上店主账号</th>"+
				"<th>对应分销商账号</th>"+
				"<th>对应实体店主账号</th>"+
				"<th>金额状态</th>"+
				"<th>订单完成时间</th>"+
				"<th>打款时间</th>"+
				"<th>打款处理时间</th>"+
				"<th>商品数量</th>";
	
					
var str2 = ""+
             		"<table class=\"gopageMune\">"+
    				"<tr>"+
    					"<td><input style=\"border:none;background:#ff9121;padding:5px 20px;margin:0px 5px;color:#fff\" type=\"button\" onclick=\"chagepagea();showAll2()\" value=\"首页\" /></td>"+
    					"<td><input style=\"border:none;background:#ff9121;padding:5px 20px;margin:0px 5px;color:#fff\" type=\"button\" onclick=\"chagepageb();showAll2()\" value=\"上一页\" /></td>"+
    					"<td style=\"border:none;background:#ff9121;padding:5px 20px;margin:0px 5px;display:block;color:#fff\">当前在第"+$("#thispage").val()+"页</td>";
						if(getindex+1==rows){str2+="<td><input  style=\"border:none;background:#ff9121;padding:5px 20px;margin:0px 5px;color:#fff\" type=\"button\" onclick=\"chagepagec();showAll2()\" value=\"下一页\" /></td>";}
						else{
							str2+="";
						}
						str2+=
    				"</tr>"+
    				"</table>";	
         			
         		document.getElementById('allmessage').innerHTML=str;
         		document.getElementById('annuediv').innerHTML=str2;
         		document.getElementById('header_th').innerHTML=str12;
         	var psdss = $("#accounts").val();
				if(psdss==null||psdss==undefined||psdss==""){
					$("#hejide").css("display","none");
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

function setROWS(){

	var rows = document.getElementById("thisrowsget").value;

	 document.getElementById("thisrows").value=rows;
}

function changepages (){
	
	var thispageget = document.getElementById("thispageget").value;

	 document.getElementById("thispage").value=thispageget;
}

function jiusuanok(){
	var con = window.confirm("是否继续？");
	if(con==true){
	var starttime=document.getElementById("starttimess").value;
	var endtime=document.getElementById("endtimess").value;
	var startshijian = new Date(starttime).getTime();
	var endshijian = new Date(endtime).getTime();
	var sttim; 
	var jstim;
	if(isNaN(startshijian)==true){
		sttim = null;
	}else{
		sttim = startshijian-(1000*60*60*8);
	}
	if(isNaN(endshijian)==true){
		jstim = null;
	}else{
		jstim = endshijian+(1000*60*60*16);
	}
	
 
	$.ajax({
		url:address+"/web/Sharingdetails/update",
		type:"POST",
		data:{"UID":uid,"uname":uname,"star":sttim,"end":jstim},
		success:function(data){
			alert(data.message)
		},
		error:function(){}
	});
	}
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


function changestartimess(){
	
	var nowstarDate = document.getElementById("changetimess").value;
	var stardatatime = new Date(nowstarDate).getTime()- (1000*60*60*8);
 
	document.getElementById("starttimess").value=stardatatime;
	if(isNaN(document.getElementById("starttimess").value)){
		document.getElementById("starttimess").value=null;
	}

}

function changeendtimess(){
	var nowstarDate = document.getElementById("changeendtotimess").value;
	var A = new Date(nowstarDate).getTime();
	var B = (1000*60*60*24)-(1000*60*60*8);
	var enddatatime = A+B;
	document.getElementById("endtimess").value=enddatatime;
	if(isNaN(document.getElementById("endtimess").value)){
		document.getElementById("endtimess").value=null;
	}
	
}

function getunameuid(){
 
		document.getElementById("dcunamesss").value=localStorage.getItem("userName");
		document.getElementById("dcuidsss").value=localStorage.getItem("uid");
		document.getElementById("thistotpage").value=document.getElementById("thispage").value;
		document.getElementById("thistotrows").value=document.getElementById("thisrows").value;
		var getS = $("#starttimess").val();
		var getE = $("#endtimess").val();
		var setS; 
		var setE;
		if(getS==""||getS==null||getS==undefined){
			setS = null;
		}else{
			setS = new Date(getS).getTime() - (1000*60*60*8);
		}
		
		if(getE==""||getE==null||getE==undefined){
			setE = null;
		}else{
			setE = new Date(getE).getTime() + (1000*60*60*16);
		}
		$("#okkaistimesytr").val(setS);
		$("#okkaistimeend").val(setE);
		
		
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

function actions1(iphonenumber,username,uid,usernmae,nickname){
	 
}