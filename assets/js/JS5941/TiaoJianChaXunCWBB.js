	var uid = localStorage.getItem("uid");
	var uname = localStorage.getItem("userName");
 
	var pds;
	var pagess;
	
	function setcanshu(){
		
		var uids = localStorage.getItem("uid");
		var unames = localStorage.getItem("userName");
		var getstarttime = $("#changetimess").val();
	var getendtime = $("#changeendtotimess").val();

	var starttime;
	var endtime;
	if(getstarttime!=null && getstarttime!="" && getstarttime!=undefined){
		starttime = new Date(getstarttime).getTime() - (1000*60*60*8);
		 
	}
	
	if(getendtime!=null  && getendtime!="" && getendtime!=undefined){
		endtime = new Date(getendtime).getTime() - (1000*60*60*8);
		 
	}
	
	var strH = $("#Starttimeshi").val();
	var strM = $("#Starttimefen").val();
	var endH = $("#Endtimeshi").val();
	var endM = $("#Endtimefen").val();
	
	var starting = starttime+(strH*60*60*1000)+(strM*60*1000);
	var ending = endtime+(endH*60*60*1000)+(endM*60*1000);
	
	if(starttime==null||starttime==""||starttime==undefined){
		starting = null;
	}
	
	if(endtime==null||endtime==""||endtime==undefined){
		ending = null;
	}

		
 
		$("#start_out").val(starting);
		$("#end_out").val(ending);
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

function showAll2(){
	

	var str = "";
	
	
	var numbers = 0 ;
	var getstarttime = $("#changetimess").val();
	var getendtime = $("#changeendtotimess").val();

	var starttime;
	var endtime;
	if(getstarttime!=null && getstarttime!="" && getstarttime!=undefined){
		starttime = new Date(getstarttime).getTime() - (1000*60*60*8);
		 
	}
	
	if(getendtime!=null  && getendtime!="" && getendtime!=undefined){
		endtime = new Date(getendtime).getTime() - (1000*60*60*8);
		 
	}
	
	var strH = $("#Starttimeshi").val();
	var strM = $("#Starttimefen").val();
	var endH = $("#Endtimeshi").val();
	var endM = $("#Endtimefen").val();
	
	var starting = starttime+(strH*60*60*1000)+(strM*60*1000);
	var ending = endtime+(endH*60*60*1000)+(endM*60*1000);
	
	if(starttime==null||starttime==""||starttime==undefined){
		starting = null;
	}
	
	if(endtime==null||endtime==""||endtime==undefined){
		ending = null;
	}

	$.ajax({
		url:address+"/data/AccountSelect",
		type:"POST",
	
		data:{"uname":uname,"UID":uid,"star":starting,"end":ending},
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
					pds = item.ISTABLEDATA;
				
         	str+="<tr>";
			str+="<td>"+numbers+"</td>";
		 
		
				if(item.时间==undefined||item.时间==""||item.时间==null){str+="<td></td>";}else{str+="<td>"+item.时间+"</td>";}
				if(item.订单编号==undefined||item.订单编号==""||item.订单编号==null){str+="<td></td>";}else{str+="<td>"+item.订单编号+"</td>";}
				if(item.订单状态==undefined||item.订单状态==""||item.订单状态==null){str+="<td></td>";}else{str+="<td>"+item.订单状态+"</td>";}
				if(item.商品名字==undefined||item.商品名字==""||item.商品名字==null){str+="<td></td>";}else{str+="<td>"+item.商品名字+"</td>";}
				if(item.条码==undefined||item.条码==""||item.条码==null){str+="<td></td>";}else{str+="<td>"+item.条码+"</td>";}
				if(item.数量==undefined||item.数量==""||item.数量==null){str+="<td></td>";}else{str+="<td>"+item.数量+"</td>";}
				if(item.单价==undefined||item.单价==""||item.单价==null){str+="<td></td>";}else{str+="<td>"+item.单价+"</td>";}
				if(item.总价==undefined||item.总价==""||item.总价==null){str+="<td></td>";}else{str+="<td>"+item.总价+"</td>";}
				if(item.邮费==undefined||item.邮费==""||item.邮费==null){str+="<td></td>";}else{str+="<td>"+item.邮费+"</td>";}
				if(item.送货方式==undefined||item.送货方式==""||item.送货方式==null){str+="<td></td>";}else{str+="<td>"+item.送货方式+"</td>";}
				if(item.门店名字==undefined||item.门店名字==""||item.门店名字==null){str+="<td></td>";}else{str+="<td>"+item.门店名字+"</td>";}
				if(item.地址==undefined||item.地址==""||item.地址==null){str+="<td></td>";}else{str+="<td>"+item.地址+"</td>";}
				if(item.导购账户==undefined||item.导购账户==""||item.导购账户==null){str+="<td></td>";}else{str+="<td>"+item.导购账户+"</td>";}
				if(item.联系电话==undefined||item.联系电话==""||item.联系电话==null){str+="<td></td>";}else{str+="<td>"+item.联系电话+"</td>";}
str+=
	"</tr>";
		
	});
	
	var str32 = "";
	
	str32+=
	"<th>序号</th>"+
	"<th>时间</th>"+
	"<th>订单编号</th>"+
	"<th>订单状态</th>"+
	"<th>商品名字</th>"+
	"<th>条码</th>"+
	"<th>数量</th>"+
	"<th>单价</th>"+
	"<th>总价</th>"+
	"<th>邮费</th>"+
	"<th>送货方式</th>"+
	"<th>门店名字</th>"+
	"<th>地址</th>"+
	"<th>导购账户</th>"+
	"<th>联系电话</th>";
var str2 = ""+
             		"<table class=\"gopageMune\">"+
    				"<tr>"+
    					"<td><input style=\"border:none;background:#ff9121;padding:5px 20px;margin:0px 5px;color:#fff\" type=\"button\" onclick=\"chagepagea();showAll2()\" value=\"首页\" /></td>"+
    					"<td><input style=\"border:none;background:#ff9121;padding:5px 20px;margin:0px 5px;color:#fff\" type=\"button\" onclick=\"chagepageb();showAll2()\" value=\"上一页\" /></td>"+
    					"<td style=\"border:none;background:#ff9121;padding:5px 20px;margin:0px 5px;display:block;color:#fff\">当前在第"+$("#thispage").val()+"页</td>";
						if(pds==true){str2+="<td><input  style=\"border:none;background:#ff9121;padding:5px 20px;margin:0px 5px;color:#fff\" type=\"button\" onclick=\"chagepagec();showAll2()\" value=\"下一页\" /></td>";}
						else{
							str2+="";
						}
						str2+=
    				"</tr>"+
    				"</table>";	
         			
         		document.getElementById('allmessage').innerHTML=str;
         		document.getElementById('annuediv').innerHTML=str2;
				document.getElementById('LBTH').innerHTML=str32;
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