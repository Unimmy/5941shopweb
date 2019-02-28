var ces = 0;
var pds;
var statess;
var pfpd =1;
var uid =    localStorage.getItem("uid");
var uname  = localStorage.getItem("userName");


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
    return y+"-"+m+"-"+d+" "+h+":"+minute;    
}

function qrtuihuo(id){
	var buyermesege = $("#onrefuse").val();
	var yundanhaonum = $("#yundanhaonum").val();
	$.ajax({
		url:address+"/orders/Return",
		data:{"id":id,"buyermesege":buyermesege,"type":23,"uname":uname,"UID":uid,"postfeenumber":yundanhaonum},
		type:"POST",
		success:function(data){
			alert(data.message);
		},
		error:function(e){}
	})
}

function wctuihuo(id){
	var buyermesege = $("#onrefuse").val()
	$.ajax({
		url:address+"/orders/Return",
		data:{"id":id,"buyermesege":buyermesege,"type":24,"uname":uname,"UID":uid},
		type:"POST",
		success:function(data){
			alert(data.message);
		},
		error:function(e){}
	})
}

function tytuihuo(id){

	var buyermesege = $("#onrefuse").val()
	$.ajax({
		url:address+"/orders/Return",
		data:{"id":id,"buyermesege":buyermesege,"type":22,"uname":uname,"UID":uid},
		type:"POST",
		success:function(data){
			alert(data.message);
		},
		error:function(e){}
	})
}
function jjtuihuo(id){
	
	var buyermesege = $("#onrefuse").val()
	$.ajax({
		url:address+"/orders/Return",
		data:{"id":id,"buyermesege":buyermesege,"type":20,"uname":uname,"UID":uid},
		type:"POST",
		success:function(data){
			alert(data.message);
		},
		error:function(e){}
	})
}

function showAll(){
	var dingdanhao = $("#dingdanhao").val();
	var zhanghaoss = $("#zhanghaoss").val();
	var issuperadmins  = localStorage.getItem("issuperadmin");
	var superid = localStorage.getItem("superid");
	var str="";
	var rows = $("#thisrows").val();
	var page = $("#thispages").val();
	var TKstate = $("#tuikuanstates").val();
	var DDstate = $("#tiaojiantype").val();
	var TKst;
	var DDst;
	if(TKstate=="未退款"){
		TKst=0;
	}else if(TKstate=="已退款"){
		TKst=1;
	}else{
		TKst=null;
	}
	
	if(DDstate=="未处理"){
		DDst=21;
	}else if(DDstate=="已通过"){
		DDst=22;
	}else if(DDstate=="已拒绝"){
		DDst=20;
	}else{
		DDst=null;
	}
	
	$.ajax({
		type:"POST",
		data:{"autosystem":TKst,"status":DDst,"uname":uname,"UID":uid,"rows":rows,"page":page,"phone":zhanghaoss,"id":dingdanhao},
		url:address+"/orders/ListReturn",
		success(data){
		if(data.status!=200){
			alert(data.message);
		}
			if(data.message=="登录超时"){
					location.href="login.html";
					return;
			}
			
			if(data.data==""){
				alert("没有数据");
			}else{
				        	 if(data.status == '200'){
          		var message = data.data;
			
				
		
          		$.each(message, function(index, item) {
				
    
          	str+=""+
 				"<tr>";
				str+="<td>"+(index+1)+"</td>";
				
					if(item.ORDERNUMBER==""||item.ORDERNUMBER==null||item.ORDERNUMBER==undefined){	str+="<td></td>";}else{str+="<td>"+item.ORDERNUMBER+"</td>";}
					if(item.PAYMENT==""||item.PAYMENT==null||item.PAYMENT==undefined){	str+="<td></td>";}else{str+="<td>"+item.PAYMENT+"</td>";}
					if(item.PAYMENTTYPE==""||item.PAYMENTTYPE==null||item.PAYMENTTYPE==undefined){	str+="<td></td>";}else{
						if(item.PAYMENTTYPE==1){
						str+="<td>"+"在线支付"+"</td>";
						}else if(item.PAYMENTTYPE==2){
						str+="<td>"+"货到付款"+"</td>";
						}else if(item.PAYMENTTYPE==3){
						str+="<td>"+"微信支付"+"</td>";
						}else if(item.PAYMENTTYPE==4){
						str+="<td>"+"支付宝支付"+"</td>";
						}
					}
					if(item.POSTFEE==""||item.POSTFEE==null||item.POSTFEE==undefined){	str+="<td>0</td>";}else{str+="<td>"+item.POSTFEE+"</td>";}
					if(item.STATUS==""||item.STATUS==null||item.STATUS==undefined){	str+="<td></td>";}else{
						if(item.STATUS==20){
						str+="<td>"+"不同意"+"</td>";
						}else if(item.STATUS==21){
						str+="<td>"+"未审核"+"</td>";
						}else if(item.STATUS==22){
						str+="<td>"+"已同意"+"</td>";
						}else if(item.STATUS==23){
						str+="<td>"+"已退仓"+"</td>";
						}else if(item.STATUS==24){
						str+="<td>"+"已完成"+"</td>";
						}else if(item.STATUS==11){
						str+="<td>"+"已退款"+"</td>";
						}
					}
					if(item.ADDTIME==""||item.ADDTIME==null||item.ADDTIME==undefined){	str+="<td></td>";}else{str+="<td>"+formatDateTime(item.ADDTIME)+"</td>";}
					if(item.SHIPPINGTYPE==""||item.SHIPPINGTYPE==null||item.SHIPPINGTYPE==undefined){	str+="<td></td>";}else{
						
						if(item.SHIPPINGTYPE==1){str+="<td>"+"自提"+"</td>";}
						else if(item.SHIPPINGTYPE==2){str+="<td>"+"快递"+"</td>";}
						else{str+="<td>"+"无需物流"+"</td>";}
					}
					if(item.MEMBERID==""||item.MEMBERID==null||item.MEMBERID==undefined){	str+="<td></td>";}else{str+="<td>"+item.MEMBERID+"</td>";}
					 	
					if(item.BUYERMESEGE==""||item.BUYERMESEGE==null||item.BUYERMESEGE==undefined){	str+="<td></td>";}else{str+="<td>"+item.BUYERMESEGE+"</td>";}	
					if(item.BUYERNICK==""||item.BUYERNICK==null||item.BUYERNICK==undefined){	str+="<td></td>";}else{str+="<td>"+item.BUYERNICK+"</td>";}
					if(item.SHOPNAME==""||item.SHOPNAME==null||item.SHOPNAME==undefined){	str+="<td></td>";}else{str+="<td>"+item.SHOPNAME+"</td>";}
					if(item.ONEPHONE==""||item.ONEPHONE==null||item.ONEPHONE==undefined){	str+="<td></td>";}else{str+="<td>"+item.ONEPHONE+"</td>";}
					if(item.B==""||item.B==null||item.B==undefined){	str+="<td></td>";}else{str+="<td>"+item.B+"</td>";}
					if(item.B1==""||item.B1==null||item.B1==undefined){	str+="<td></td>";}else{str+="<td>"+item.B1+"</td>";}
					if(item.AUTOSYSTEM==""||item.AUTOSYSTEM==null||item.AUTOSYSTEM==undefined){	str+="<td></td>";}else{
						if(item.AUTOSYSTEM==1){
							str+="<td>已退款</td>";
						}else{
							str+="<td>未退款</td>";
						}
						
					}
					
					if(item.POSTFEENUMBER==""||item.POSTFEENUMBER==null||item.POSTFEENUMBER==undefined){	str+="<td></td>";}else{str+="<td>"+item.POSTFEENUMBER+"</td>";}
					
				
					
						if(issuperadmins==1){
							if(item.STATUS==21){
								str+=
								"<td><input type=\"text\" placeholder=\"退货说明\" id=\"onrefuse\"name=\"refuse\" />"+
								"<button onclick=\"tytuihuo("+item.ID+")\" class=\"btn btn-success\">同意</button>"+
								"<button onclick=\"jjtuihuo("+item.ID+")\" class=\"btn btn-danger\">拒绝</button></td>";
							}
							else
							if(item.STATUS==22){
								str+=
								"<td><input type='text' style='height:42px;' placeholder='请输入运单号' id='yundanhaonum'/><input type='button' onclick=\"qrtuihuo("+item.ID+")\" class=\"btn btn-danger\" value='退仓' /></td>";
							}
							else
							if(item.STATUS==23){
								
								str+=
								"<td><button onclick=\"wctuihuo("+item.ID+")\" class=\"btn btn-danger\">完成</button></td>";
							}else{
								str+=
								"<td></td>";
							}
						} else if(superid==0){
						
							
							if(item.STATUS==23){
								
								str+=
								"<td><button onclick=\"wctuihuo("+item.ID+")\" class=\"btn btn-danger\">完成</button></td>";
							}
							else{
								str+=
								"<td></td>";
							}
						} else{
							
							if(item.STATUS==21){
								str+=
								"<td><input type=\"text\" placeholder=\"退货说明\" id=\"onrefuse\"name=\"refuse\" />"+
								"<button onclick=\"tytuihuo("+item.ID+")\" class=\"btn btn-success\">同意</button>"+
								"<button onclick=\"jjtuihuo("+item.ID+")\" class=\"btn btn-danger\">拒绝</button></td>";
							}else
							
							if(item.STATUS==22){
								str+=
								"<td><input type='text' style='height:42px; placeholder='请输入运单号' id='yundanhaonum'/><input type='button' onclick=\"qrtuihuo("+item.ID+")\" class=\"btn btn-danger\" value='退仓' /></td>";
							}else{
								str+=
								"<td></td>";
							}
						}
					
					/*if(item.ISTRUE==1){
						ces=1;
						if(superid!=0){
							str+=""+
						"<td><input type=\"text\" placeholder=\"物流单号\" id=\"wuliudanhao\"/></td>"+
						"<td>仓库地址："+ getAddress(item.ITEMID) +" </td>"+
						"<td><button onclick=\"tuicang("+item.ID+")\" class=\"btn btn-warning\">确认退仓</button></td>";
						}
					}
					if(item.ISTRUE==2){
						if(superid==0){
								str+="<td><button onclick=\"querentuicang("+item.ID+")\" class=\"btn btn-success\">退仓确认收货</button></td>";
								
						} 
						
					}
					if(item.SYSTEMEXPRESS==1){
						str+="<td>已赔付</td>";
					}else{
						if(isadmin == 1){
							str+="<td><span id=\"pfpdannue"+pfpd+"\" onclick=\"openpeifu("+pfpd+")\" class=\"btn btn-danger\">运费险赔付</span>"+
					"<span style=\"display:none\" id=\"pfipt"+pfpd+"\">"+
					"<input type=\"text\" class=\"btn btn-warning\" style=\"height:42px;border:none；color:#fff\" placeholder=\"请输入赔付金额\" id='balance"+pfpd+"'/>"+
					"<input class=\"btn btn-warning\" type=\"button\" value=\"确定\" onclick=\"peifu("+item.ID+","+pfpd+")\" /> </span></td>";
						}
					
					}
					*/
					if(item.AUTOSYSTEM==1){
						str+="<td></td>";
					}else{
						str+="<td><span class='btn btn-warning' onclick='tuikuanfunc("+item.ID+")'>退款</span></td>";
					}
					
					str+=""+
				"</tr>";
			pfpd++;
	
			pds = item.ISTABLEDATA;
 		
		});

				var str2 = ""+
             		"<table class=\"gopageMune\">"+
    				"<tr>"+
    					"<td><input style=\"border:none;background:#ff9121;padding:5px 20px;margin:0px 5px;color:#fff\" type=\"button\" onclick=\"chagepagea();showAll()\" value=\"首页\" /></td>"+
    					"<td><input style=\"border:none;background:#ff9121;padding:5px 20px;margin:0px 5px;color:#fff\" type=\"button\" onclick=\"chagepageb();showAll()\" value=\"上一页\" /></td>"+
    					"<td style=\"border:none;background:#ff9121;padding:5px 20px;margin:0px 5px;display:block;color:#fff\">当前在第"+$("#thispages").val()+"页</td>";
						if(pds==true){str2+="<td><input  style=\"border:none;background:#ff9121;padding:5px 20px;margin:0px 5px;color:#fff\" type=\"button\" onclick=\"chagepagec();showAll()\" value=\"下一页\" /></td>";}
						else{
							str2+="";
						}
						
    				"</tr>"+
    				"</table>";	
         			
         		document.getElementById('allmessage').innerHTML=str;
         		document.getElementById('annuediv').innerHTML=str2;

          	}else{
          		
          	}
			}			
		},
		error:function(e){
		
		}
	});
			
		
}
	
	function querentuikuan(id){
	$.ajax({
		url:address+"/orders2/"+id,
		type:"POST",
		data:{"uname":uname,"UID":uid},
		success:function(data){
			 
			alert(data.message);
		}
	})
	
}
	
function tuikuanfunc(id){
	var con ;
	con = window.confirm("是否继续？");
	if(con==true){
	$.ajax({
		url:address+"/orders2/"+id,
		type:"POST",
		data:{"uname":uname,"UID":uid},
		success:function(data){
			alert(data.message)
		},
		error:function(e){}
	});
	}
}
	
function getalltuihuo(state){
	var yundanhaoid = document.getElementById("yundanhaoid").value;
	document.getElementById("thislogistics").value=yundanhaoid;
	statess=state;
var superid = localStorage.getItem("superid");
	if(state == undefined){
		document.getElementById("thisistrue").value=null;
	}else if(state == 0){
		document.getElementById("thisistrue").value="0";
	}else if(state == 1){
		document.getElementById("thisistrue").value="1";
	}else if(state == -1){
		document.getElementById("thisistrue").value="-1";
	}

	
	
	var shopid = localStorage.getItem("shopid");
	
	var isadmin =    localStorage.getItem("issuperadmin");
	document.getElementById("thisuname").value=uname;
	document.getElementById("thisuid").value=uid;
	if(isadmin==1){
		document.getElementById("thisshopid").value=null;
	}else{
		document.getElementById("thisshopid").value=shopid;
	}

	var str ="";
	var  str12 ="";
	var formdata = new FormData(document.getElementById("shoptuihuoform"));
	$.ajax({
		url:address+"/Returngoods/selectallbyshopid",
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
			
			if(data.data==""){
				
				alert("没有数据");
			}else{
				        	 if(data.status == '200'){
          		var message = data.data;
				
				
		
          		$.each(message, function(index, item) {
				
    
          	str+=""+
 				"<tr>";
				str+="<td>"+(index+1)+"</td>";
					if(item.ID==""||item.ID==null||item.ID==undefined){	str+="<td></td>";}else{str+="<td>"+item.ID+"</td>";}
					if(item.ORDERRELEVANCEID==""||item.ORDERRELEVANCEID==null||item.ORDERRELEVANCEID==undefined){	str+="<td></td>";}else{str+="<td>"+item.ORDERRELEVANCEID+"</td>";}

					
					if(item.ISTRUE==0){	str+="<td>"+"未处理"+"</td>";}
					else if(item.ISTRUE==1){str+="<td>"+"同意退货"+"</td>";}
					else if(item.ISTRUE==-1){str+="<td>"+"拒绝退货"+"</td>";}
					else if(item.ISTRUE==2){str+="<td>"+"已退仓"+"</td>";}
					else if(item.ISTRUE==3){str+="<td>"+"已完成"+"</td>";}
					else{str+="<td> </td>";}
				
					if(item.REASON==""||item.REASON==null||item.REASON==undefined){	str+="<td></td>";}else{str+="<td>"+item.REASON+"</td>";}
					if(item.PRICE==""||item.PRICE==null||item.PRICE==undefined){	str+="<td></td>";}else{str+="<td>"+item.PRICE+"</td>";}
					if(item.REFUND==""||item.REFUND==null||item.REFUND==undefined){	str+="<td></td>";}else{str+="<td>"+item.REFUND+"</td>";}
					if(item.REFUSE==""||item.REFUSE==null||item.REFUSE==undefined){	str+="<td></td>";}else{str+="<td>"+item.REFUSE+"</td>";}
					if(item.SHOPID==""||item.SHOPID==null||item.SHOPID==undefined){	str+="<td></td>";}else{str+="<td>"+item.SHOPID+"</td>";}	
					if(item.LOGISTICS==""||item.LOGISTICS==null||item.LOGISTICS==undefined){	str+="<td></td>";}else{str+="<td>"+item.LOGISTICS+"</td>";}	
					

				
					if(item.ISTRUE==0){
						str+=""+
						"<td><input style=\"display:none\" type=\"text\" placeholder=\"退还价格\" id=\"okrefund\" name=\"refund\" /></td>"+
						"<td><input type=\"text\" placeholder=\"退货说明\" id=\"onrefuse\"name=\"refuse\" />"+
				
						"<td><button onclick=\"oktuihuo("+item.ID+")\" class=\"btn btn-success\">同意退货</button></td>"+
						"<td><button onclick=\"notuihuo("+item.ID+")\" class=\"btn btn-danger\">拒绝退货</button></td>";
						
					} 
					if(item.ISTRUE==1){
						ces=1;
						if(superid!=0){
							str+=""+
						"<td><input type=\"text\" placeholder=\"物流单号\" id=\"wuliudanhao\"/></td>"+
						"<td>仓库地址："+ getAddress(item.ITEMID) +" </td>"+
						"<td><button onclick=\"tuicang("+item.ID+")\" class=\"btn btn-warning\">确认退仓</button></td>";
						}
					}
					if(item.ISTRUE==2){
						if(superid==0){
								str+="<td><button onclick=\"querentuicang("+item.ID+")\" class=\"btn btn-success\">退仓确认收货</button></td>";
								
						} 
						
					}
					if(item.SYSTEMEXPRESS==1){
						str+="<td>已赔付</td>";
					}else{
						if(isadmin == 1){
							str+="<td><span id=\"pfpdannue"+pfpd+"\" onclick=\"openpeifu("+pfpd+")\" class=\"btn btn-danger\">运费险赔付</span>"+
					"<span style=\"display:none\" id=\"pfipt"+pfpd+"\">"+
					"<input type=\"text\" class=\"btn btn-warning\" style=\"height:42px;border:none；color:#fff\" placeholder=\"请输入赔付金额\" id='balance"+pfpd+"'/>"+
					"<input class=\"btn btn-warning\" type=\"button\" value=\"确定\" onclick=\"peifu("+item.ID+","+pfpd+")\" /> </span></td>";
						}
					
					}
					str+=""+
				"</tr>";
			pfpd++;
 		
		});

				var str2 = ""+
             		"<table class=\"gopageMune\">"+
    				"<tr>"+
    					"<td><input style=\"border:none;background:#ff9121;padding:5px 20px;margin:0px 5px;color:#fff\" type=\"button\" onclick=\"chagepagea();getalltuihuo("+statess+")\" value=\"首页\" /></td>"+
    					"<td><input style=\"border:none;background:#ff9121;padding:5px 20px;margin:0px 5px;color:#fff\" type=\"button\" onclick=\"chagepageb();getalltuihuo("+statess+")\" value=\"上一页\" /></td>"+
    					"<td style=\"border:none;background:#ff9121;padding:5px 20px;margin:0px 5px;display:block;color:#fff\">当前在第"+$("#thispages").val()+"页</td>";
						if(pds==true){str2+="<td><input  style=\"border:none;background:#ff9121;padding:5px 20px;margin:0px 5px;color:#fff\" type=\"button\" onclick=\"chagepagec();getalltuihuo("+statess+")\" value=\"下一页\" /></td>";}
						else{
							str2+="";
						}
						
    				"</tr>"+
    				"</table>";	
         			
         		document.getElementById('allmessage').innerHTML=str;
         		document.getElementById('annuediv').innerHTML=str2;

          	}else{
          		alert("发生了一点小意外！");
          	}
			}			
		},
		error:function(e){
			
		}
	});
}

function selectalltotype(){
	var typemsg = document.getElementById("tiaojiantype").value;
	
	if(typemsg=="未处理"){
		getalltuihuo(0);
		
	}else if(typemsg=="已通过"){
		getalltuihuo(1);
	}else if(typemsg=="已拒绝"){
		getalltuihuo(-1);
	}else{
		getalltuihuo();
	}
	
	
}
function peifu(id,pdpf){
	
	var balance = document.getElementById("balance"+pdpf).value;
	var con;
	con=confirm("您确定要赔付吗？"); //在页面上弹出对话框
	if(con==true){
		$.ajax({
			url:address+"/Returngoods/SystemExpress",
			type:"POST",
			data:{"id":id,"uname":uname,"UID":uid,"number":balance},
			success:function(data){
				alert(data.message);
			},
			error:function(e){}
		});
	}
	else{
		
	}
	
}

function openpeifu(pfpd){

	document.getElementById("pfipt"+pfpd).style.display="block";
	document.getElementById("pfpdannue"+pfpd).style.display="none";
	
	
}

function querentuicang(id){

	$.ajax({
		url:address+"/Returngoods/retreat1",
		type:"POST",
		data:{"id":id,"UID":uid,"uname":uname},
		success:function(data){
			alert(data.message);
			getalltuihuo();
		},
		error:function(){}
		
	})
}

function tuicang(thid){
	var wuliudanhao = "";
 if(ces==1){
  wuliudanhao =  document.getElementById("wuliudanhao").value;}

	var uid = localStorage.getItem('uid');
	var uname = localStorage.getItem('userName');
	$.ajax({
		url:address+"/Returngoods/retreat",
		type:"POST",
		data:{"id":thid,"UID":uid,"uname":uname,"logistics":wuliudanhao},
		success:function(data){
			alert(data.message)
		getalltuihuo();
		},
		error:function(){}
	});
	
}

function getAddress(itemid){
	let addressss;
	var uid = localStorage.getItem('uid');
	var uname = localStorage.getItem('userName');
	$.ajax({
		url:address+"/Returngoods/selectbyitemid",
		type:"POST",
		async:false,
		data:{"itemid":itemid,"UID":uid,"uname":uname},
		success:function(data){
		
			addressss = data.data.DETAILED;
			
		},
		error:function(){}
	});
	return addressss;
}

function oktuihuo(id){

	var uid = localStorage.getItem('uid');
	var uname = localStorage.getItem('userName');
	var okrefund = document.getElementById("okrefund").value;

	$.ajax({
		url:address+"/Returngoods/Agree",
		type:"POST",
		data:{"UID":uid,"uname":uname,"refund":okrefund,"id":id},
		success:function(data){
			if(data.message=="登录超时"){
					location.href="login.html";
					return;
			}
			alert(data.message);
			getalltuihuo();
		},
		error:function(e){
		 
		}
	});
	
}


function notuihuo(id){

	var uid = localStorage.getItem('uid');
	var uname = localStorage.getItem('userName');
	var onrefuse = document.getElementById("onrefuse").value;
	$.ajax({
		url:address+"/Returngoods/refuse",
		type:"POST",
		data:{"UID":uid,"uname":uname,"refuse":onrefuse,"id":id},
		success:function(data){
			if(data.message=="登录超时"){
					location.href="login.html";
					return;
			}
			alert(data.message);
			getalltuihuo();
		},
		error:function(e){
			alert(data.message);
		}
	});
	
}

function chagepagea(){
	var statrpage=document.getElementById("thispages").value;
	var nowpage = 1;
	document.getElementById("thispages").value=nowpage;
}
function chagepagec(){
	var statrpage=document.getElementById("thispages").value;
	var nowpage = parseInt(statrpage)+1;
	document.getElementById("thispages").value=nowpage;
}
function chagepageb(){
	var statrpage=document.getElementById("thispages").value;
	var nowpage = parseInt(statrpage)-1;
	if(nowpage<=0){nowpage=1;}
	document.getElementById("thispages").value=nowpage;
}