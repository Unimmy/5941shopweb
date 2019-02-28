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
	var logistics = $("#logistics").val();
	var issuperadmins  = localStorage.getItem("issuperadmin");
	var superid = localStorage.getItem("superid");
	var tiaojiantype = $("#dptiaojiantype").val();
	var istrue ; 
	if(tiaojiantype=="不同意"){
		istrue=-1;
	}else if(tiaojiantype=="已同意"){
		istrue= 1;
	}else if(tiaojiantype=="已退仓"){
		istrue= 2;
	}else if(tiaojiantype=="已收仓"){
		istrue= 3;
	}else if(tiaojiantype=="全部"){
		istrue=null;
	}else{
		istrue=0;
	}
	
	var str="";
	var rows = $("#thisrows").val();
	var page = $("#thispages").val();
	$.ajax({
		type:"POST",
		data:{"uname":uname,"UID":uid,"rows":rows,"page":page,"phone":zhanghaoss,"id":dingdanhao,"logistics":logistics,"istrue":istrue},
		url:address+"/Returngoods/shoplist",
		success(data){
		if(data.status!=200){
			alert(data.message);
		}
			if(data.message=="登录超时"){
					location.href="login.html";
					return;
			}
			console.log(data);
			if(data.data==""){
				console.log(data.message);
				alert("没有数据");
			}else{
				        	 if(data.status == '200'){
          		var message = data.data;
				console.log(data);
				
		
          		$.each(message, function(index, item) {
				
    
          	str+=""+
 				"<tr>";
				str+="<td>"+(index+1)+"</td>";
					if(item.CDATE==""||item.CDATE==null||item.CDATE==undefined){str+="<td></td>";}else{str+="<td>"+item.CDATE+"</td>";}
					if(item.ORDERSID==""||item.ORDERSID==null||item.ORDERSID==undefined){str+="<td></td>";}else{str+="<td>"+item.ORDERSID+"</td>";}
					if(item.LOGISTICS==""||item.LOGISTICS==null||item.LOGISTICS==undefined){str+="<td></td>";}else{str+="<td>"+item.LOGISTICS+"</td>";}
					if(item.A==""||item.A==null||item.A==undefined){str+="<td></td>";}else{str+="<td>"+item.A+"</td>";}						 
					if(item.REFUND==""||item.REFUND==null||item.REFUND==undefined){str+="<td></td>";}else{str+="<td>"+item.REFUND+"</td>";}
					if(item.PRICE==""||item.PRICE==null||item.PRICE==undefined){str+="<td></td>";}else{str+="<td>"+item.PRICE+"</td>";}
					if(item.MEMBERPHONE==""||item.MEMBERPHONE==null||item.MEMBERPHONE==undefined){str+="<td></td>";}else{str+="<td>"+item.MEMBERPHONE+"</td>";}
					if(item.NUM==""||item.NUM==null||item.NUM==undefined){str+="<td></td>";}else{str+="<td>"+item.NUM+"</td>";}
					if(item.YOUCODE==""||item.YOUCODE==null||item.YOUCODE==undefined){str+="<td></td>";}else{str+="<td>"+item.YOUCODE+"</td>";}
					if(item.ISTRUE==""||item.ISTRUE==null||item.ISTRUE==undefined){str+="<td></td>";}else{
						if(item.ISTRUE==1){
							str+="<td>已同意</td>";
						}else if(item.ISTRUE==-1){
							str+="<td>不同意</td>";
						}else if(item.ISTRUE==2){
							str+="<td>已退仓</td>";
						}else if(item.ISTRUE==3){
							str+="<td>已收仓</td>";
						}else{
							str+="<td>未处理</td>";
						}
						
					}
					if(item.TITLE==""||item.TITLE==null||item.TITLE==undefined){str+="<td></td>";}else{str+="<td>"+item.TITLE+"</td>";}
					if(item.REASON==""||item.REASON==null||item.REASON==undefined){str+="<td></td>";}else{str+="<td>"+item.REASON+"</td>";}
					if(item.ITEMID==""||item.ITEMID==null||item.ITEMID==undefined){str+="<td></td>";}else{str+="<td>"+item.ITEMID+"</td>";}
					if(item.TOTALFEE==""||item.TOTALFEE==null||item.TOTALFEE==undefined){str+="<td></td>";}else{str+="<td>"+item.TOTALFEE+"</td>";}
					
					if(item.RETURNNUM==""||item.RETURNNUM==null||item.RETURNNUM==undefined){	str+="<td>历史数据</td>";}else{
						if(item.RETURNNUM==1){
							str+="<td>已退款</td>";
						}else{
							str+="<td>未退款</td>";
						}
						
					}
					
					if(item.PICPATH==""||item.PICPATH==null||item.PICPATH==undefined){str+="<td></td>";}else{
						str+="<td><img style=\"width:80px;\" src='"+address+item.PICPATH+"'/></td>";
					}
					
					if(item.ISTRUE==1){
						str+="<td><input type='text'  id=\"logisticss\" placeholder='运单号'/><input type='button' class='btn btn-warning' value='退仓'  onclick=\"out("+item.ID+")\" /></td>";
						
					}else if(item.ISTRUE==2){
						str+="<td><input type='button' class='btn btn-primary' value='收仓'  onclick=\"ok("+item.ID+")\" /></td>";
						
					}else if(item.ISTRUE==-1){
						
						str+="<td></td>";
					}else if(item.ISTRUE==3){
						
						str+="<td></td>";
					}else{
						str+="<td><input type='text'  id=\"refuse\" placeholder='拒绝原因'/><input type='button' class='btn btn-danger' value='拒绝'  onclick=\"no("+item.ID+")\" />"+
						"<input type='button' class='btn btn-success' value='同意' onclick=\"yes("+item.ID+")\" /></td>";
						
					}
					
					if(item.RETURNNUM==1){
						
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
			console.log(data);
		}
	});
	
}
	function tuikuanfunc(id){
 
		if(window.confirm("是否继续？")==true){
			$.ajax({
			url:address+"/Returngoods/returnnum",
			type:"POST",
			data:{"id":id,"uname":uname,"UID":uid},
			success:function(data){
				alert(data.message);
			},
			errot:function(e){
				
			}
		});
		}
	}
	
	function yes(id){
		 
		var con;
		con=window.confirm("是否继续？");
		if(con==true){
		$.ajax({
			url:address+"/Returngoods/Agree",
			type:"POST",
			data:{"id":id,"uname":uname,"UID":uid},
			success:function(data){
				alert(data.message);
			},
			errot:function(e){
				
			}
		});
		}
	}
	
	function no(id){
		var refuse = $("#refuse").val();
		var con;
		con=window.confirm("是否继续？");
		if(con==true){
		$.ajax({
			url:address+"/Returngoods/refuse",
			type:"POST",
			data:{"id":id,"uname":uname,"UID":uid,"refuse":refuse},
			success:function(data){
				alert(data.message);
			},
			errot:function(e){
				
			}
		});
		}
	}
	
	function out(id){
		var logistics = $("#logisticss").val();
		var con;
		con=window.confirm("是否继续？");
		if(con==true){
		$.ajax({
			url:address+"/Returngoods/retreat",
			type:"POST",
			data:{"id":id,"uname":uname,"UID":uid,"logistics":logistics},
			success:function(data){
				alert(data.message);
			},
			errot:function(e){
				
			}
		});
		}
	}
	
	function ok(id){
		var con;
		con=window.confirm("是否继续？");
		if(con==true){
		$.ajax({
			url:address+"/Returngoods/retreat1",
			type:"POST",
			data:{"id":id,"uname":uname,"UID":uid},
			success:function(data){
				alert(data.message);
			},
			errot:function(e){
				
			}
		});
		}
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
			console.log(data);
			if(data.data==""){
				console.log(data.message);
				alert("没有数据");
			}else{
				        	 if(data.status == '200'){
          		var message = data.data;
				console.log(data);
				
		
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
			console.log(data);
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