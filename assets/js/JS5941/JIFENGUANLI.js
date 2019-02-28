function ShowMRJFGZ(){
	var page = document.getElementById("thispage").value;
	pagess=page;
	var rows = document.getElementById("thisrows").value;
	var account = document.getElementById("account").value;
	var str="";

	 $.ajax({
         url:address+"/GoldcoinDefault/select",
         type:"POST",
         data:{"page":page,"rows":rows,"uname":uname,"UID":uid},
         success:function(data){
			 if(data.message=="登录超时"){
					location.href="login.html";
					return;
				}
				if(data.message==""){
					alert("暂无数据");
				}
         	if(data.status == '200'){
			
         		var message = data.data;
				if(message==""){alert("没有数据了")}else{pd=message;}
					
         		$.each(message, function(index, item) {
         			str+=""+
         				"<tr>";
							str+="<td>"+(index+1)+"</td>";
								if(item.id==null||item.id==""||item.id==undefined){str+="<td></td>";}else{str+="<td>"+item.id+"</td>";}
								if(item.percentage==null||item.percentage==""||item.percentage==undefined){str+="<td></td>";}else{str+="<td>"+item.percentage+"</td>";}
						"</tr>";
							pds=item.istabledata;
         		}
         		);
         		      var str2 = ""+
             		"<table class=\"gopageMune\">"+
    				"<tr>"+
    					"<td><input style=\"border:none;background:#ff9121;padding:5px 20px;margin:0px 5px;color:#fff\" type=\"button\" onclick=\"chagepagea();ShowMRJFGZ()\" value=\"首页\" /></td>"+
    					"<td><input style=\"border:none;background:#ff9121;padding:5px 20px;margin:0px 5px;color:#fff\" type=\"button\" onclick=\"chagepageb();ShowMRJFGZ()\" value=\"上一页\" /></td>"+
    					"<td style=\"border:none;background:#ff9121;padding:5px 20px;margin:0px 5px;display:block;color:#fff\">当前在第"+$("#thispage").val()+"页</td>";
						if(pds==true){str2+="<td><input  style=\"border:none;background:#ff9121;padding:5px 20px;margin:0px 5px;color:#fff\" type=\"button\" onclick=\"chagepagec();ShowMRJFGZ()\" value=\"下一页\" /></td>";}
						else{
							str2+="";
						}
						str2+=
    				"</tr>"+
    				"</table>";	
				var strTh ="";
					strTh+= 
					"<th>序号</th>"+
					"<th>规则编号</th>"+
					"<th>百分比</th>";
				document.getElementById('table_th').innerHTML=strTh;
				document.getElementById('allmessage').innerHTML=str;
         		document.getElementById('annuediv').innerHTML=str2;
         	}else{
         		alert(data.message);
         	}
         },
         error:function(e){
         	alert("请求失败"); 
         }
     });     
}

function ShowSPJFGZ(){
	var page = document.getElementById("thispage").value;
	pagess=page;
	var rows = document.getElementById("thisrows").value;
	var account = document.getElementById("account").value;
	var str="";

	 $.ajax({
         url:address+"/GoldcoinKey/select",
         type:"POST",
         data:{"page":page,"rows":rows,"uname":uname,"UID":uid,"youcode":account},
         success:function(data){
			 if(data.message=="登录超时"){
					location.href="login.html";
					return;
				}
				if(data.message==""){
					alert("暂无数据");
				}
         	if(data.status == '200'){
			
         		var message = data.data;
				if(message==""){alert("没有数据了")}else{pd=message;}
					
         		$.each(message, function(index, item) {
         			str+=""+
         				"<tr>";
							str+="<td>"+(index+1)+"</td>";
								if(item.id==null||item.id==""||item.id==undefined){str+="<td></td>";}else{str+="<td>"+item.id+"</td>";}
								if(item.num==null||item.num==""||item.num==undefined){str+="<td></td>";}else{str+="<td>"+item.num+"</td>";}
								if(item.youcode==null||item.youcode==""||item.youcode==undefined){str+="<td></td>";}else{str+="<td>"+item.youcode+"</td>";}
						"</tr>";
							pds=item.istabledata;
         		}
         		);
         		      var str2 = ""+
             		"<table class=\"gopageMune\">"+
    				"<tr>"+
    					"<td><input style=\"border:none;background:#ff9121;padding:5px 20px;margin:0px 5px;color:#fff\" type=\"button\" onclick=\"chagepagea();ShowSPJFGZ()\" value=\"首页\" /></td>"+
    					"<td><input style=\"border:none;background:#ff9121;padding:5px 20px;margin:0px 5px;color:#fff\" type=\"button\" onclick=\"chagepageb();ShowSPJFGZ()\" value=\"上一页\" /></td>"+
    					"<td style=\"border:none;background:#ff9121;padding:5px 20px;margin:0px 5px;display:block;color:#fff\">当前在第"+$("#thispage").val()+"页</td>";
						if(pds==true){str2+="<td><input  style=\"border:none;background:#ff9121;padding:5px 20px;margin:0px 5px;color:#fff\" type=\"button\" onclick=\"chagepagec();ShowSPJFGZ()\" value=\"下一页\" /></td>";}
						else{
							str2+="";
						}
						str2+=
    				"</tr>"+
    				"</table>";	
				var strTh ="";
					strTh+= 
					"<th>序号</th>"+
					"<th>规则编号</th>"+
					"<th>积分</th>"+
					"<th>商品条码</th>";
				document.getElementById('table_th').innerHTML=strTh;
				document.getElementById('allmessage').innerHTML=str;
         		document.getElementById('annuediv').innerHTML=str2;
         	}else{
         		alert(data.message);
         	}
         },
         error:function(e){
         	alert("请求失败"); 
         }
     });     
}

function ShowJFDHYHQ(){
	var page = document.getElementById("thispage").value;
	pagess=page;
	var rows = document.getElementById("thisrows").value;
	var account = document.getElementById("account").value;
	var str="";

	 $.ajax({
         url:address+"/Goldcoincoupon/select",
         type:"POST",
         data:{"page":page,"rows":rows,"uname":uname,"UID":uid},
         success:function(data){
			 if(data.message=="登录超时"){
					location.href="login.html";
					return;
				}
				if(data.message==""){
					alert("暂无数据");
				}
         	if(data.status == '200'){
			
         		var message = data.data;
				if(message==""){alert("没有数据了")}else{pd=message;}
					
         		$.each(message, function(index, item) {
         			str+=""+
         				"<tr>";
							str+="<td>"+(index+1)+"</td>";
								if(item.ID==null||item.ID==""||item.ID==undefined){str+="<td></td>";}else{str+="<td>"+item.ID+"</td>";}
								if(item.TITLE==null||item.TITLE==""||item.TITLE==undefined){str+="<td></td>";}else{str+="<td>"+item.TITLE+"</td>";}
								if(item.NUMBERA==null||item.NUMBERA==""||item.NUMBERA==undefined){str+="<td></td>";}else{str+="<td>"+item.NUMBERA+"</td>";}
								if(item.NUMBERMIN==null||item.NUMBERMIN==""||item.NUMBERMIN==undefined){str+="<td></td>";}else{str+="<td>"+item.NUMBERMIN+"</td>";}
								if(item.TYPE==null||item.TYPE==""||item.TYPE==undefined){str+="<td></td>";}else{
									if(item.TYPE==1){
										str+="<td>通用券</td>";
									}else if(item.TYPE==2){
										str+="<td>互斥券</td>";
									}else{
										str+="<td></td>";
									}
								}
								if(item.STATE==null||item.STATE==""||item.STATE==undefined){str+="<td></td>";}else{
									if(item.STATE==1){
										str+="<td>已使用</td>";
									}else{
										str+="<td>未使用</td>";
									}
								}
								if(item.CARDTYPE==null||item.CARDTYPE==""||item.CARDTYPE==undefined){str+="<td></td>";}else{
									if(item.CARDTYPE==1){
										str+="<td>单品</td>";
									}else if(item.CARDTYPE==2){
										str+="<td>细类</td>";
									}else if(item.CARDTYPE==3){
										str+="<td>小类</td>";
									}else if(item.CARDTYPE==4){
										str+="<td>中类</td>";
									}else if(item.CARDTYPE==5){
										str+="<td>大类</td>";
									}else{
										str+="<td>通用</td>";
									}
									
								}
								if(item.KEY==null||item.KEY==""||item.KEY==undefined){str+="<td></td>";}else{
									if(item.KEY==1){
										str+="<td>一个商品</td>";
									}else{
										str+="<td>一款商品</td>";
									}
								}
								if(item.DATA==null||item.DATA==""||item.DATA==undefined){str+="<td></td>";}else{str+="<td>"+item.DATA+"</td>";}
								if(item.MEMBERID==null||item.MEMBERID==""||item.MEMBERID==undefined){str+="<td></td>";}else{str+="<td>"+item.MEMBERID+"</td>";}
								if(item.MPHONE==null||item.MPHONE==""||item.MPHONE==undefined){str+="<td></td>";}else{str+="<td>"+item.MPHONE+"</td>";}
								if(item.ONEPHONE==null||item.ONEPHONE==""||item.ONEPHONE==undefined){str+="<td></td>";}else{str+="<td>"+item.ONEPHONE+"</td>";}
								if(item.ISTRUE==null||item.ISTRUE==""||item.ISTRUE==undefined){str+="<td></td>";}else{
									if(item.ISTRUE==1){
										str+="<td>上架</td>";
									}else{
										str+="<td>下架</td>";
									}
								}
								if(item.GOLDCOINNUM==null||item.GOLDCOINNUM==""||item.GOLDCOINNUM==undefined){str+="<td></td>";}else{str+="<td>"+item.GOLDCOINNUM+"</td>";}
								if(item.ISTRUE==null||item.ISTRUE==""||item.ISTRUE==undefined){str+="<td></td>";}else{
									if(item.ISTRUE==1){
										str+="<td><span class='btn btn-danger' onclick='state_dw("+item.ID+");ShowJFDHYHQ()' >下架</span></td>";
									}else{
										str+="<td><span class='btn btn-danger' onclick='state_up("+item.ID+");ShowJFDHYHQ()' >上架</span></td>";
									}
								}
						"</tr>";
							pds=item.ISTABLEDATA;
         		}
         		);
         		      var str2 = ""+
             		"<table class=\"gopageMune\">"+
    				"<tr>"+
    					"<td><input style=\"border:none;background:#ff9121;padding:5px 20px;margin:0px 5px;color:#fff\" type=\"button\" onclick=\"chagepagea();ShowJFDHYHQ()\" value=\"首页\" /></td>"+
    					"<td><input style=\"border:none;background:#ff9121;padding:5px 20px;margin:0px 5px;color:#fff\" type=\"button\" onclick=\"chagepageb();ShowJFDHYHQ()\" value=\"上一页\" /></td>"+
    					"<td style=\"border:none;background:#ff9121;padding:5px 20px;margin:0px 5px;display:block;color:#fff\">当前在第"+$("#thispage").val()+"页</td>";
						if(pds==true){str2+="<td><input  style=\"border:none;background:#ff9121;padding:5px 20px;margin:0px 5px;color:#fff\" type=\"button\" onclick=\"chagepagec();ShowJFDHYHQ()\" value=\"下一页\" /></td>";}
						else{
							str2+="";
						}
						str2+=
    				"</tr>"+
    				"</table>";	
				var strTh ="";
					strTh+= 
					"<th>序号</th>"+
					"<th>兑换编号</th>"+
					"<th>说明</th>"+
					"<th>面值</th>"+
					"<th>使用条件</th>"+
					"<th>类型</th>"+
					"<th>状态</th>"+
					"<th>卷类型</th>"+
					"<th>单品类型</th>"+
					"<th>条码或类名</th>"+
					"<th>所属人</th>"+
					"<th>发放人</th>"+
					"<th>所属供应商</th>"+
					"<th>上下架</th>"+
					"<th>所需积分</th>"+
					"<th>操作</th>";
				document.getElementById('table_th').innerHTML=strTh;
				document.getElementById('allmessage').innerHTML=str;
         		document.getElementById('annuediv').innerHTML=str2;
         	}else{
         		alert(data.message);
         	}
         },
         error:function(e){
         	alert("请求失败"); 
         }
     });     
}

function Showmrgzdiv1(){
	$("#updcommoditydiv").css("display","block");
}

function Showmrgzdiv2(){
	$("#updcommoditydiv2").css("display","block");
}

function Showmrgzdiv3(){
	$("#updcommoditydiv3").css("display","block");
}

function Showmrgzdiv4(){
	$("#updcommoditydiv4").css("display","block");
}

function addmorenguize(){
	var baifenbi = $("#bfb").val();
	if(window.confirm("是否继续？")==true){
	$.ajax({
		url:address+"/GoldcoinDefault/add",
		type:"POST",
		data:{"uname":uname,"UID":uid,"Percentage":baifenbi},
		success:function(data){
			alert(data.message);
		},
		error:function(e){
			
		}
	});
	}
}

function addspingguize(){
	var CANSU1 = $("#youcodes").val();
	var CANSU2 = $("#jifens").val();
	if(window.confirm("是否继续？")==true){
	$.ajax({
		url:address+"/GoldcoinKey/add",
		type:"POST",
		data:{"uname":uname,"UID":uid,"num":CANSU2,"youcode":CANSU1},
		success:function(data){
			alert(data.message);
		},
		error:function(e){
			
		}
	});
	}
}

function addYHQDHfunc(){
	
	if(window.confirm("是否继续？")==true){
		    var title_s = $("#title_s").val();
			var numbera_s = $("#numbera_s").val();
			var numbermin_s = $("#numbermin_s").val();
			
			var type_s = $("#type_s").val();
			 if(type_s=="通用券"){type_s=1;}else{type_s=2}
			
			var cardtype_s = $("#cardtype_s").val();
			 if(cardtype_s=="单品"){cardtype_s=1}
			 else if(cardtype_s=="细类"){cardtype_s=2}
			 else if(cardtype_s=="小类"){cardtype_s=3}
			 else if(cardtype_s=="中类"){cardtype_s=4}
			 else if(cardtype_s=="大类"){cardtype_s=5}
			 else{cardtype_s=6}
		
			var key_s = $("#key_s").val();
			if(key_s=="一个商品"){key_s=1}
			else{key_s=2}
			
			var data_s = $("#data_s").val();
			var onephone_s = $("#onephone_s").val();
			var Goldcoinnum_s = $("#Goldcoinnum_s").val();
			
	$.ajax({
		url:address+"/Goldcoincoupon/add",
		type:"POST",
		data:{
			  "uname":uname,
			  "UID":uid,
			  "title":title_s,
			  "numbera":numbera_s,
			  "numbermin":numbermin_s,
			  "type":type_s,
			  "cardtype":cardtype_s,
			  "key":key_s,
			  "data":data_s,
			  "onephone":onephone_s,
			  "Goldcoinnum":Goldcoinnum_s
			  },
		success:function(data){
			alert(data.message);
		},
		error:function(e){
			
		}
	});
	}
}

function importJf(){
	 
	if(window.confirm("是否继续？")==true){
		$("#img_jz").css("display","block");
	$("#UNAMEUPDS").val(uname);
	$("#UIDUPDS").val(uid);
	var formss = new FormData(document.getElementById("upd_fileform"));	
		
	$.ajax({
		url:address+"/GoldcoinV/Excel",
		type:"POST",
		cache: false,  
		processData: false,  
		contentType: false,
		data:formss,
		success:function(data){
			$("#img_jz").css("display","none");
			alert(data.message);
			
		},
		error:function(e){
			
		}
	});
	}
	
}

function state_up(id){
	if(window.confirm("是否继续？")==true){
	$.ajax({
		url:address+"/Goldcoincoupon/ut",
		type:"POST",
		data:{"uname":uname,"UID":uid,"id":id,"istrue":1},
		success:function(data){
			alert(data.message);
		},
		error:function(e){
			
		}
	});
	}
}

function state_dw(id){
	if(window.confirm("是否继续？")==true){
	$.ajax({
		url:address+"/Goldcoincoupon/ut",
		type:"POST",
		data:{"uname":uname,"UID":uid,"id":id,"istrue":0},
		success:function(data){
			alert(data.message);
		},
		error:function(e){
			
		}
	});
	}
}