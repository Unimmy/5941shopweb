var sz=1;
var pds;
var pd;
var pagess;
	var uid = localStorage.getItem("uid");
	var uname = localStorage.getItem("userName");
	
	var jilu1;
	var jilu2;
	
	
	
	function showImprotdiv(){
		$("#showImprotmanue").css("display","none");
		$("#okImprotmanue").css("display","block");
		$("#okImprotfile").css("display","block");
	}
	
	function closeImprotdiv(){
		$("#showImprotmanue").css("display","block");
		$("#okImprotmanue").css("display","none");
		$("#okImprotfile").css("display","none");
	}
	
	function importCode(){
		$("#importuname").val(uname);
		$("#importuid").val(uid);
		var GetForm = document.getElementById("improtForm");
		var importForm = new FormData(GetForm);
		$.ajax({
			url:address+"/orders/postfeenumberex",
			type:"POST",
			data:importForm,
			cache: false,
    		processData: false,
            contentType: false,
            async:false,
			success:function(data){
				closeImprotdiv();
				alert(data.message);
			},
			error:function(e){
				console.log(e);
			}
		});
		
	}
	
	function changesettypess(){
		var thistypesss = document.getElementById("thistypesss").value
 
		if(thistypesss=="店铺列表"){
			document.getElementById("typeipts").value=2;
		}else if(thistypesss=="用户列表"){
			document.getElementById("typeipts").value=1;
		}else{
			document.getElementById("typeipts").value=0;
		}
 
	}
	
function changepages(){
	
	var xuanzepage = document.getElementById("shezhiye").value
	document.getElementById("thispages").value = xuanzepage;
	
}

function changerows(){
	var thisrows = document.getElementById("thisrowsss").value
	document.getElementById("thisrows").value = thisrows;
	
}

 	var issuperadmin = localStorage.getItem("issuperadmin");
function WEBdingdanlist(){
	
	
	var str = "";



	document.getElementById("uidss").value=uid;
	document.getElementById("unamess").value=uname;
	pagess = document.getElementById("thispages").value; 
	var superman = localStorage.getItem("issuperadmin");
 
	if(superman!=1){
	 
		$("#typexuanzea").css("display","none");
		$("#phonexuanzea").css("display","none");
		$("#phoneipt").val(uname);
		$("#typeipts").val(2);
	}
	
	var formdata = new FormData(document.getElementById("webdingdanform"));
	$.ajax({
		cache: false,  
        processData: false,  
        contentType: false,
		url:address+"/orders/selectbytype",
		type:"POST",
		data:formdata,
		success:function(data){
			if(data.message=="登录超时"){
					location.href="login.html";
					return;
			}
			console.log(data)
			if(data.status == '200'){
				var message = data.data;
				if(message==""){
					alert("暂无数据");	
				}
				
				$.each(message, function(index, item) {
				console.log(item.ID)
				str+=""+
					"<tr>";
					
						str+= "<td>"+(index+1)+"</td>";
						if(item.ID==""||item.ID==null||item.ID==undefined){str+= "<td></td>";}else{str+= "<td>"+item.ID+"</td>";}
						if(item.CDATE==""||item.CDATE==null||item.CDATE==undefined){str+= "<td></td>";}else{str+= "<td>"+item.CDATE+"</td>";}
						if(item.ORDERNUMBER==""||item.ORDERNUMBER==null||item.ORDERNUMBER==undefined){str+= "<td></td>";}else{str+= "<td>"+item.ORDERNUMBER+"</td>";}
						if(item.PAYMENT==""||item.PAYMENT==null||item.PAYMENT==undefined){str+= "<td></td>";}else{str+= "<td>"+item.PAYMENT+"</td>";}
						if(item.STATUS==""||item.STATUS==null||item.STATUS==undefined){str+= "<td></td>";}else{
							str+= "<td>"+item.STATUS+"</td>";
						}
						if(item.SHOPNAME==""||item.SHOPNAME==null||item.SHOPNAME==undefined){str+= "<td></td>";}else{str+= "<td>"+item.SHOPNAME+"</td>";}
						if(item.PAYMENTTYPE==""||item.PAYMENTTYPE==null||item.PAYMENTTYPE==undefined){str+= "<td></td>";}else{
							if(item.PAYMENTTYPE==3){str+= "<td>"+"微信支付"+"</td>";}
							else if(item.PAYMENTTYPE==4){str+= "<td>"+"支付宝支付"+"</td>";}
							else if(item.PAYMENTTYPE==5){str+= "<td>"+"快乐币支付"+"</td>";}
							else{str+= "<td>"+"未支付"+"</td>";}
						}
						if(item.POSTFEENUMBER==""||item.POSTFEENUMBER==null||item.POSTFEENUMBER==undefined){str+= "<td></td>";}else{str+= "<td>"+item.POSTFEENUMBER+"</td>";}
						if(item.COUPONID==""||item.COUPONID==null||item.COUPONID==undefined){str+= "<td></td>";}else{str+= "<td>"+item.COUPONID+"</td>";}
						if(item.AUTOSYSTEM==""||item.AUTOSYSTEM==null||item.AUTOSYSTEM==undefined){str+= "<td></td>";}else{
							if(item.AUTOSYSTEM==1){str+= "<td>已退款</td>";}else{str+= "<td>未退款</td>";}}
						
						if(item.image==""||item.image==null||item.image==undefined){str+= "<td></td>";}else{
							str+= "<td>";
							for(var i=0;i<item.image.length;i++){
							
							str+= "&nbsp &nbsp &nbsp <img  class=\"dingdantupian\" width=60 height=60 src='"+address+item.image[i].PICPATH+"'/><br>"
							}
							str+="</td>";
						}
						
						
						pds=item.ISTABLEDATA;
				str+=""+
					"<td><input type=\"button\" class=\" btn btn-success\"onclick=\"showdingdanxiangqig("+item.ID+")\" value=\"查看详情\" /></td>"+
					"</tr>";
					
				});
				var str2 = ""+
             		"<table class=\"gopageMune\">"+
    				"<tr>"+
    					"<td><input style=\"border:none;background:#ff9121;padding:5px 20px;margin:0px 5px;color:#fff\" type=\"button\" onclick=\"chagepagea();WEBdingdanlist()\" value=\"首页\" /></td>"+
    					"<td><input style=\"border:none;background:#ff9121;padding:5px 20px;margin:0px 5px;color:#fff\" type=\"button\" onclick=\"chagepageb();WEBdingdanlist()\" value=\"上一页\" /></td>"+
    					"<td style=\"border:none;background:#ff9121;padding:5px 20px;margin:0px 5px;display:block;color:#fff\">当前在第"+$("#thispages").val()+"页</td>";
						if(pds==true){str2+="<td><input  style=\"border:none;background:#ff9121;padding:5px 20px;margin:0px 5px;color:#fff\" type=\"button\" onclick=\"chagepagec();WEBdingdanlist()\" value=\"下一页\" /></td>";}
						else{
							str2+="";
						}
						str2+=
    				"</tr>"+
    				"</table>";	
         			
         		document.getElementById('allmessage').innerHTML=str;
         		document.getElementById('annuediv').innerHTML=str2;
			}else{
				alert(data.message)
			}
		},
		error:function(e){
			alert("请求失败");
		}
		
	});
	
}


var idsby ;
function showdingdanxiangqig(id){
	idsby = id;
	var superid = localStorage.getItem("superid")+"a";
	var shopid = localStorage.getItem("shopid");
	var str="";
	 str+="<button onclick=\"closepage()\" class=\"btn btn-danger\" style=\"position:relative;left:718px\">X</button>";


	$.ajax({
		url:address+"/orders/selectbyordersid",
		data:{"UID":uid,"uname":uname,"id":id},
		type:"POST",
		success:function (data){
			if(data.message=="登录超时"){
					location.href="login.html";
					return;
			}
			 if(data.status !='200'){ alert(data.message)}
         	if(data.status == '200'){
				
         		var message = data.data;
				
         		if(message==""){alert("没有数据")}
				if(message.trajectorys!=""||message.trajectorys!=null||message.trajectorys!=undefined){
					str+="<div>";
						str+="<ul>";
				$.each(message.trajectorys, function(index, item) {
							str+="<li>"+
									 "<div>"+
									 
										  "<div style=\"padding:15px 0px 3px 50px\">"+item.time+"</div>"+
										  "<div style=\"padding:3px 0px 15px 50px\">"+item.type+"</div>"+
										  
									 "</div>";
							str+="</li>";							
				});
						str+="</ul>";
					str+="</div>";
				}
				str+="<hr>";
					str+="<table class=\"table table-striped table-bordered table-hover\">";
					str+="<tr><td colspan=\"2\"><h2>地址</h2></td></tr>";
					if(message.address.province==""||message.address.province==null||message.address.province==undefined){str+="<tr><td>所属区域</td><td></td></tr>";}else{str+=  "<tr><td>所属区域</td><td>"+message.address.province+"</td></tr>";}
					
					if(message.address.detailed==""||message.address.detailed==null||message.address.detailed==undefined){str+="<tr><td>详细地址</td><td></td></tr>";}else{str+=  "<tr><td>详细地址</td><td>"+message.address.detailed+"</td></tr>";} 	
					if(message.address.name==""||message.address.name==null||message.address.name==undefined){str+="<tr><td>用户名称</td><td></td></tr>";}else{str+=  "<tr><td>用户名称</td><td>"+message.address.name+"</td></tr>";} 	
					if(message.address.phone==""||message.address.phone==null||message.address.phone==undefined){str+="<tr><td>用户手机号</td><td></td></tr>";}else{str+=  "<tr><td>联系电话</td><td>"+message.address.phone+"</td></tr>";} 	
					
					
				$.each(message.order, function(index, item) {
					str+="<tr><td colspan=\"2\"><h2>订单</h2></td></tr>";

				if(item.CDATE==""||item.CDATE==null||item.CDATE==undefined){str+="<tr><td>下单时间</td><td></td></tr>";}else{str+=  "<tr><td>下单时间</td><td>"+item.CDATE+"</td></tr>";}
		
				if(item.PAYMENT	==""||item.PAYMENT	==null||item.PAYMENT	==undefined){str+="<tr><td>金额</td><td></td></tr>";}else{str+=  "<tr><td>金额</td><td>"+item.PAYMENT	+"</td></tr>";}

				if(item.STATUS	==""||item.STATUS	==null||item.STATUS	==undefined){str+="<tr><td>状态</td><td></td></tr>";}else{str+=  "<tr><td>状态</td><td>"+item.STATUS	+"</td></tr>";}
				
				if(item.mphone==""||item.mphone==null||item.mphone==undefined){str+= "<tr><td>用户账号</td><td></td></tr>";}else{str+= "<tr><td>用户账号</td><td>"+item.mphone+"</td></tr>";}	
				
				if(item.ID==""||item.ID==null||item.ID==undefined){str+= "<tr><td>订单号</td><td></td></tr>";}else{str+= "<tr><td>订单号</td><td>"+item.ID+"</td></tr>";}
				
				if(item.SHIPPINGTYPE==""||item.SHIPPINGTYPE==null||item.SHIPPINGTYPE==undefined){str+= "<tr><td>送货方式</td><td></td></tr>";}else{
					
					if(item.SHIPPINGTYPE==1){
						str+= "<tr><td>送货方式</td><td>自提</td></tr>";
					}
					else if(item.SHIPPINGTYPE==2){
						str+= "<tr><td>送货方式</td><td>快递</td></tr>";
					}else{
						str+= "<tr><td>送货方式</td><td>门店直销</td></tr>";
					}
				}
				
				if(issuperadmin==1){
					if(item.STATUS1==2){
						str+= "<tr><td  id=\"qrfhannue2\"  class=\"btn btn-success\" onclick=\"OKdan("+item.ID+")\">接单</td>";		
						str+= "<td  id=\"qrfhannue\" class=\"btn btn-success\" onclick=\"NOdan("+item.ID+")\">拒单</td>";
					}else if(item.STATUS1==8){
						if(item.SHIPPINGTYPE==1){
							str+= "<tr><td  id=\"qrfhannue2\"  ><input type=\"text\" style=\"height:43px\" id=\"yundanhao\" placeholder=\"请输入运单号\"/><input type=\"button\" class=\"btn btn-success\" onclick=\"shopQRFH2("+item.ID+")\" value=\"确认发货(店铺)\"/></td>";
						}else{
						
						str+= "<td  id=\"qrfhannue\"><input  style=\"height:43px\" type=\"text\" id=\"yundanhao\" placeholder=\"请输入运单号\"/><input type=\"button\"  class=\"btn btn-success\" onclick=\"shopQRFH("+item.ID+")\" value=\"确认发货(用户)\" /></td></tr>";
						}
					}else if(item.STATUS1==6){
						str+= "<tr><td id=\"qrshannue\" class=\"btn btn-success\" onclick=\"shopQRSH("+item.ID+")\">确认收货</td></tr>";
					}else if(item.STATUS1==9){
						str+= "<tr><td id=\"qrshannue\" class=\"btn btn-success\" onclick=\"querentuikuan("+item.ID+")\">确认退款</td></tr>";
					}else if(item.STATUS1==10){
						str+= "<tr><td id=\"qrshannue\" class=\"btn btn-success\" onclick=\"querentuikuan("+item.ID+")\">确认退款</td></tr>";
					}
				}else{
					if(superid=="0a"){
						if(item.STATUS1==2){
							str+= "<tr><td  id=\"qrfhannue2\"  class=\"btn btn-success\" onclick=\"OKdan("+item.ID+")\">接单</td>";		
							str+= "<td  id=\"qrfhannue\" class=\"btn btn-success\" onclick=\"NOdan("+item.ID+")\">拒单</td>";
						}else if(item.STATUS1==8){
							if(item.SHIPPINGTYPE==1){
							str+= "<tr><td  id=\"qrfhannue2\"  ><input type=\"text\" style=\"height:43px\" id=\"yundanhao\" placeholder=\"请输入运单号\"/><input type=\"button\" class=\"btn btn-success\" onclick=\"shopQRFH2("+item.ID+")\" value=\"确认发货(店铺)\"/></td>";
						}else if(item.STATUS1==9){
						str+= "<tr><td id=\"qrshannue\" class=\"btn btn-success\" onclick=\"querentuikuan("+item.ID+")\">确认退款</td></tr>";
					}
						else{
						
						str+= "<td  id=\"qrfhannue\" ><input style=\"height:43px\" type=\"text\" id=\"yundanhao\" placeholder=\"请输入运单号\"/><input type=\"button\" class=\"btn btn-success\" onclick=\"shopQRFH("+item.ID+")\" value=\"确认发货(用户)\" /></td></tr>";
						}
						}
					}else{
						if(item.STATUS1==7){
						str+= "<tr><td id=\"qrshannue\" class=\"btn btn-success\" onclick=\"shopQRSH("+item.ID+")\">确认收货</td></tr>";
						}
						if(item.STATUS1==6){
							str+= "<td  id=\"qrfhannue\" class=\"btn btn-success\" onclick=\"shopQRFH("+item.ID+")\">确认发货(用户)</td></tr>";
						}
					}
				}
				
				
		
				str+="<tr><td colspan=\"2\"> </td></tr>";
				});
				
				$.each(message.Orderrelevance, function(index, item) {
					str+="<tr><td colspan=\"2\"><h2>商品</h2></td></tr>";
				
				
				if(item.TITLE==""||item.TITLE==null||item.TITLE==undefined){str+="<tr><td>商品名称</td><td></td></tr>";}else{str+=  "<tr><td>商品名称</td><td>"+item.TITLE			+"</td></tr>";}
		
				if(item.COLOUR==""||item.COLOUR==null||item.COLOUR==undefined){str+="<tr><td>颜色</td><td></td></tr>";}else{str+=  "<tr><td>颜色</td><td>"+item.COLOUR			+"</td></tr>";}
		
				if(item.MYSIZE==""||item.MYSIZE==null||item.MYSIZE==undefined){str+="<tr><td>规格/尺码</td><td></td></tr>";}else{str+=  "<tr><td>规格/尺码</td><td>"+item.MYSIZE			+"</td></tr>";}
		
				if(item.NUM==""||item.NUM==null||item.NUM==undefined){str+="<tr><td>数量</td><td></td></tr>";}else{str+=  "<tr><td>数量</td><td>"+item.NUM		+"</td></tr>";}

				if(item.YOUCODE	==""||item.YOUCODE	==null||item.YOUCODE	==undefined){str+= "<tr><td>商品编号</td><td></td></tr>";}else{str+= "<tr><td>商品编号</td><td>"+item.YOUCODE	+"</td></tr>";}

				if(item.COMPANY==""||item.COMPANY==null||item.COMPANY==undefined){str+= "<tr><td>计量单位</td><td></td></tr>";}else{str+= "<tr><td>计量单位</td><td>"+item.COMPANY+"</td></tr>";}	
				
				if(item.TYPE1==""||item.TYPE1==null||item.TYPE1==undefined){str+= "<tr><td>大类</td><td></td></tr>";}else{str+= "<tr><td>大类</td><td>"+item.TYPE1+"</td></tr>";}
				
				if(item.TYPE2==""||item.TYPE2==null||item.TYPE2==undefined){str+= "<tr><td>中类</td><td></td></tr>";}else{str+= "<tr><td>中类</td><td>"+item.TYPE2+"</td></tr>";}
				
				if(item.TYPE3==""||item.TYPE3==null||item.TYPE3==undefined){str+= "<tr><td>小类</td><td></td></tr>";}else{str+= "<tr><td>小类</td><td>"+item.TYPE3+"</td></tr>";}
				
				if(item.TYPE4==""||item.TYPE4==null||item.TYPE4==undefined){str+= "<tr><td>细类</td><td></td></tr>";}else{str+= "<tr><td>细类</td><td>"+item.TYPE4+"</td></tr>";}
				
				if(item.PRICE==""||item.PRICE==null||item.PRICE==undefined){str+="<tr><td>单价</td><td></td></tr>";}else{str+=  "<tr><td>单价</td><td>"+item.PRICE+"</td></tr>";}
				
				if(item.TOTALFEE==""||item.TOTALFEE==null||item.TOTALFEE==undefined){str+= "<tr><td>总价</td><td></td></tr>";}else{str+= "<tr><td>总价</td><td>"+item.TOTALFEE+"</td></tr>";}
				
				if(item.AAAPromotion!=null){
				if(item.AAAPromotion.type==1){str+= "<tr><td>打折</td><td>"+item.AAAPromotion.discount+"</td></tr>";}
				else
				if(item.AAAPromotion.type==2){str+= "<tr><td>降价</td><td>"+item.AAAPromotion.reduce+"</td></tr>";}
				}
				str+="<tr><td colspan=\"2\"> </td></tr>";
				});

         		
         		str+="</table>";
         		document.getElementById('selectDingdanXiangqin').innerHTML=str;
         		
         		document.getElementById('selectDingdanXiangqinborber').style.display="block";
         		
         		
         		
         	}else{
         		alert(data.message);
         	}
		},
		error:function(e){
			
		}
	});
}

function querentuikuan(id){
	if(window.confirm("是否继续")==true){
	$.ajax({
		url:address+"/orders2/"+id,
		type:"POST",
		data:{"uname":uname,"UID":uid},
		success:function(data){
			alert(data.message);
		}
	});
	}
}

function OKdan(id){
	if(window.confirm("是否继续")==true){
	$.ajax({
		url:address+"/orders/Delivergoods2",
		type:"POST",
		data:{"id":id,"uname":uname,"UID":uid},
		success:function (data){
			showdingdanxiangqig(idsby);
			WEBdingdanlist();
			alert(data.message);
		},
		error:function(e){}
	});
	}
}

function NOdan(id){
	if(window.confirm("是否继续")==true){
	$.ajax({
		url:address+"/orders/Delivergoods3",
		type:"POST",
		data:{"id":id,"uname":uname,"UID":uid},
		success:function (data){
			showdingdanxiangqig(idsby);
			WEBdingdanlist();
			alert(data.message);
		},
		error:function(e){}
	});
	}
}

function chagepagea(){
	var statrpage=document.getElementById("thispages").value;
	var nowpage = 1;
	document.getElementById("thispages").value=nowpage;
}
function chagepagec(){
	var nowpage;
	var statrpage=document.getElementById("thispages").value;
	if(pd==""){
	 nowpage = parseInt(statrpage)-1;
	}else{
	 nowpage = parseInt(statrpage)+1;
	}
	document.getElementById("thispages").value=nowpage;
}
function chagepageb(){
	var statrpage=document.getElementById("thispages").value;
	var nowpage = parseInt(statrpage)-1;
	if(nowpage<=0){nowpage=1;}
	document.getElementById("thispages").value=nowpage;
}

function shopQRFH(id){
	if(window.confirm("是否继续")==true){
	var yundanhao = $("#yundanhao").val();
	$.ajax({
	url:address+"/orders/Delivergoods",
	type:"POST",
	data:{"uname":uname,"UID":uid,"id":id,"postfeenumber":yundanhao},
	success:function(data){
		if(data.message=="登录超时"){
					location.href="login.html";
					return;
			}
		alert(data.message);
		var superid = localStorage.getItem("superid");
		if(superid==0){
			document.getElementById("qrfhannue").style.display="none";
		
		}
		else{
			document.getElementById("qrfhannue").style.display="none";
		}
		showdingdanxiangqig(idsby);
		WEBdingdanlist();
	},
	error:function(e){
		
		alert("访问出错了")
	}
	
		
	});
	}
}


function shopQRFH2(id){
	if(window.confirm("是否继续")==true){
	var yundanhao = $("#yundanhao").val();
	$.ajax({
	url:address+"/orders/Delivergoods1",
	type:"POST",
	data:{"uname":uname,"UID":uid,"id":id,"postfeenumber":yundanhao},
	success:function(data){
		if(data.message=="登录超时"){
					location.href="login.html";
					return;
			}
		alert(data.message)
			var superid = localStorage.getItem("superid");
		if(superid==0){
			document.getElementById("qrfhannue").style.display="none";
			document.getElementById("qrfhannue2").style.display="none";
		}
		else{
			document.getElementById("qrfhannue").style.display="none";
		}
		showdingdanxiangqig(idsby);
		WEBdingdanlist();
	},
	error:function(e){
		
		alert("访问出错了")
	}
	
		
	});
	}
}



function shopQRSH(id){
if(window.confirm("是否继续")==true){
	$.ajax({
	url:address+"/orders/Collectgoods1",
	type:"POST",
	data:{"uname":uname,"UID":uid,"id":id},
	success:function(data){
		if(data.message=="登录超时"){
					location.href="login.html";
					return;
			}
		alert(data.message)
		document.getElementById("qrshannue").style.display="none";
		showdingdanxiangqig(idsby);
		WEBdingdanlist();
	},
	error:function(e){
		
		alert("请求失败")
	}
	
		
	});
}
}


function closepage(id){
	
	document.getElementById("selectDingdanXiangqinborber").style.display="none";
}

function closeimg(id){
	
	document.getElementById("xiangxitupian"+id).style.display="none";
}

function openimg(id){
	document.getElementById("xiangxitupian"+id).style.display="block";
}

function changestate(){
	var state = document.getElementById("thisstate").value;
	var statenum ;
	if(state=="全部"){
		statenum=0;
	}
	if(state=="未付款"){
		statenum=1;
	}
	if(state=="已付款"){
		statenum=2;
	}
	if(state=="已发货"){
		statenum=3;
	}
	if(state=="交易完成"){
		statenum=4;
	}
	if(state=="已退单"){
		statenum=10;
	}
	if(state=="已退款"){
		statenum=11;
	}
	document.getElementById("stateipt").value=statenum;
	var issuperadmin = localStorage.getItem("");

	
}

