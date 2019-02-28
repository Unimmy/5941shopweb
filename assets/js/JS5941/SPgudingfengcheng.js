 var uid = localStorage.getItem("uid");
 var uname = localStorage.getItem("userName");
 
  function showAll(){
 	 var str_td = "";
 	 var str_th = "";
 	 $.ajax({
 	 	url:address+"/Gd/Gd_Commodity_key_select",
 	 	data:{"uname":uname,"UID":uid},
 	 	type:"POST",
 	 	success:function(data){
 	 		if(data.message=="登录超时"){
 	 				location.href="login.html";
 	 				return;
 	 		}
 			var message = data.data;
 			$.each(message, function(index, item){
 				str_td+="<tr>";
 					if(item.youcode==""||item.youcode==null||item.youcode==undefined){str_td+="<td></td>";}else{str_td+="<td>"+item.youcode+"</td>";}
 					if(item.clerk==""||item.clerk==null||item.clerk==undefined){str_td+="<td></td>";}else{str_td+="<td>"+item.clerk+"</td>";}
 					if(item.shopone==""||item.shopone==null||item.shopone==undefined){str_td+="<td></td>";}else{str_td+="<td>"+item.shopone+"</td>";}
 					if(item.shopto==""||item.shopto==null||item.shopto==undefined){str_td+="<td></td>";}else{str_td+="<td>"+item.shopto+"</td>";}
 					if(item.shop==""||item.shop==null||item.shop==undefined){str_td+="<td></td>";}else{str_td+="<td>"+item.shop+"</td>";}
 					if(item.systemone==""||item.systemone==null||item.systemone==undefined){str_td+="<td></td>";}else{str_td+="<td>"+item.systemone+"</td>";}
 					if(item.jing_xiao_shang==""||item.jing_xiao_shang==null||item.jing_xiao_shang==undefined){str_td+="<td></td>";}else{str_td+="<td>"+item.jing_xiao_shang+"</td>";}
 					if(item.xian_shang_dian_zhu==""||item.xian_shang_dian_zhu==null||item.xian_shang_dian_zhu==undefined){str_td+="<td></td>";}else{str_td+="<td>"+item.xian_shang_dian_zhu+"</td>";}
 				str_td+="</tr>";
 				
 			});
 	 		str_th+="<th>商品条码</th>"+
 					"<th>导购分成</th>"+
 					"<th>供应商分成</th>"+
 					"<th>分公司分成</th>"+
 					"<th>店铺分成</th>"+
 					"<th>系统分成</th>"+
 					"<th>经销商</th>"+
 					"<th>线上店主</th>";
 			console.log(data.data);
 			$("#header_th").html(str_th);
 			$("#allmessage").html(str_td);
 
 	 	},
 	 	error:function(e){
 	 	}
 	 		
 	 });
  }
  
 
function addjiesuanguize(){
	$("#unamesss").val(uname);
	$("#uidsss").val(uid);
	if(window.confirm("是否继续？")==true){
		
	
	var form = new FormData(document.getElementById("jiesuanguizeform"));
	
	$.ajax({
		cache: false,  
        processData: false,  
        contentType: false,
		url:address+"/Gd/addGd_Commodity_key",
		data:form,
		type:"POST",
		success:function(data){
			if(data.message=="登录超时"){
					location.href="login.html";
					return;
			}
			alert(data.message);
			showAll();
		},
		error:function(e){
		}
			
	});
	}
	
}


function closeDiv(){
	$("#div_addpage").css("display","none");
}

function openDiv(){
	$("#div_addpage").css("display","block");
}