	var pd;
	var pds;
	var pagess;
	var commid;
 	var uname = localStorage.getItem("userName");
	var uid = localStorage.getItem("uid");

var ukey=[];
var unewkey=[];
var ukey2=[];
var unewkey2=[];

function chagearrayuser2(message){
	
	unewkey2=[];
	var ua =0;
	var unewkeyindex=0;
	var size = ukey2.length;
	for(var i=0;i<size;i++){
		if(ukey2[i]==message){
			ua=1;
			
		}else{
			unewkey2[unewkeyindex]=ukey2[i];
			unewkeyindex ++;
		}
			
	}
	if(ua==0){
		unewkey2[unewkey2.length]=message;
	}
	ukey2=unewkey2;
 console.log(unewkey2);
}

function chagearrayuser(message){
	
	unewkey=[];
	var ua =0;
	var unewkeyindex=0;
	var size = ukey.length;
	for(var i=0;i<size;i++){
		if(ukey[i]==message){
			ua=1;
			
		}else{
			unewkey[unewkeyindex]=ukey[i];
			unewkeyindex ++;
		}
			
	}
	if(ua==0){
		unewkey[unewkey.length]=message;
	}
	ukey=unewkey;
 console.log(unewkey);
}


function refash(){
	window.location.reload();
}


function quanxianbox(){
		ukey=[];
		unewkey=[];
	var checkboxs = document.getElementById("quanxuanbox");
	if(checkboxs.checked){
		    var val = document.getElementsByName("commodityCheckbox");
		for(var i=0;i<val.length;i++){
			val[i].checked=true;
			chagearrayuser(val[i].value);
			
			
		}	
	}else{
		    var val = document.getElementsByName("commodityCheckbox");
		for(var i=0;i<val.length;i++){
			val[i].checked=false;
		}		
	}	
	
}

function quxiaoquanxuanbox(){

	 var  pd; 
	 var val = document.getElementsByName("commodityCheckbox");
		for(var i=0;i<val.length;i++){
			if(val[i].checked){
				pd=0;
			}else{
				pd=1;
				break;
			}
		 
		}

		if(pd==1){
			var checkboxs = document.getElementById("quanxuanbox").checked=false;
		}
		if(pd==0){
			var checkboxs = document.getElementById("quanxuanbox").checked=true;
		}
	
}


function findGYS(){
	
	var issuperadmin = localStorage.getItem("issuperadmin");
	if(issuperadmin==1){
			var string="";

		$.ajax({
		url:address+"/shop/selectall",
		type:"POST",
		data:{"uname":uname,"UID":uid,"superid":0},
		success:function(data){
			var messages= data.data;
				string+="<option value='--请选择供应商--'>--请选择供应商--</option>";
				$.each(messages, function(index, item) {
					string+=
					"<option value='"+item.shopname+"'>"+item.shopname+"</option>";
				});
		console.log(string);
		document.getElementById('suppliername').innerHTML=string;
		},
		error:function(e){}
		});
	}else{
		
		document.getElementById("suppliername").style.display="none";
	}

}


function findDL(){
	var string="";

	$.ajax({
		url:address+"/commoditytype",
		type:"POST",
		data:{"uname":uname,"UID":uid},
		success:function(data){
			var messages= data.data;
		
				string+="<option value='--请选择大类--'>--请选择大类--</option>";
				$.each(messages, function(index, item) {
					string+=
					"<option value='"+item.LARGECLASS+"'>"+item.LARGECLASS+"</option>";
				});
		
		document.getElementById('largeclasss').innerHTML=string;
		},
		error:function(e){}
	});
}

function addtoMK(){
	var mkName = $("#mokuaideselect").val();
	var mknames;
	if(mkName=="--请选择模块--"){
		mknames = null;
	}else{
		mknames = mkName;
	}
	 
	var ids = new Array();
	var idss = commid;
	ids.push(idss);
	
	$.ajax({
		url:address+"/commodity/updateindex",
		type:"POST",
		data:{"indexs":mknames,"keyids":JSON.stringify(ids),"uname":uname,"UID":uid},
		success:function(data){
			alert(data.message);
		},
		error:function(e){}
	});
	 
 
}
function findMK(){
	var string="";
	$.ajax({
		url:address+"/web/mk",
		type:"POST",
		data:{"UID":uid,"uname":uname},
		success:function(data){
			console.log(data);
			var messages = data.data;
			string+="<option value='--请选择模块--'>--请选择模块--</option>";
				$.each(messages, function(index, item) {
					string+=
					"<option value='"+item.INDEXS+"'>"+item.INDEXS+"</option>";
				});
		
		document.getElementById('indexs').innerHTML=string;
		document.getElementById('tuijianmokuai').innerHTML=string;
		document.getElementById('mokuaideselect').innerHTML=string;
		 
		},
		error:function(e){}
	});
}


function findXL(){
	var string="";
	var xilei = document.getElementById("fineclasssinput").value;
	$.ajax({
		url:address+"/commoditytype1",
		type:"POST",
		data:{"a":xilei,"UID":uid,"uname":uname},
		success:function(data){
		console.log(data);
			var messages = data.data;
			string+="<option value='--请选择细类--'>--请选择细类--</option>";
				$.each(messages, function(index, item) {
					string+=
					"<option value='"+item.FINECLASS+"'>"+item.FINECLASS+"</option>";
				});
		console.log(string);
	
		document.getElementById('fineclass').innerHTML=string;
		document.getElementById("xileispan").style.display="none";
		document.getElementById("fineclasssinput").style.display="none";
		document.getElementById('fineclass').style.display="block";
		
		},
		error:function(e){	}
	});
	
}
	
function changepages(){
	var inputpage = $("#xuanzepage").val();

	$("#thispage").val(inputpage);
}
	
	
	var gysmes;
	var dalmes;
	var xilmes;
	var mokmes;
	

	function morenxzgys(){
		var selects = document.getElementById("suppliername");
		console.log(selects);
		
			for(var i=0;i<selects.options.length;i++){
				
				console.log(selects.options[i].value);
				if(selects.options[i].value==gysmes)
				{      
				selects.options[i].selected=true;   
					break;
				}
			}
	}

	function morenxzdal(){
		var selects = document.getElementById("largeclasss");
		console.log(selects);
		
			for(var i=0;i<selects.options.length;i++){
				
				console.log(selects.options[i].value);
				if(selects.options[i].value==dalmes)
				{      
				selects.options[i].selected=true;   
					break;
				}
			}
	}
	
	function morenxzxil(){
		
		var selects = document.getElementById("fineclass");
	
			for(var i=0;i<selects.options.length;i++){
				
				console.log(selects.options[i].value);
		 
				if(selects.options[i].value==xilmes)
				{      
				selects.options[i].selected=true;   
					break;
				}
			}
	}
	
	function morenxzmok(){
		var selects = document.getElementById("indexs");
		console.log(selects);
		
			for(var i=0;i<selects.options.length;i++){
				
				console.log(selects.options[i].value);
				if(selects.options[i].value==mokmes)
				{      
				selects.options[i].selected=true;   
					break;
				}
			}
	}
	
	function removetiaojian(){
		gysmes = null;
		dalmes = null;
		xilmes = null;
		mokmes = null;
		showAll();
		  window.location.reload();
	}
	
	function changegysmesA(){
		
		if($("#suppliername").val()=="--请选择供应商--"){
			gysmes = null;
		}else{
			gysmes = $("#suppliername").val();
		}
		 
	}
	function changegysmesB(){
		
		if($("#largeclasss").val()=="--请选择大类--"){
			dalmes = null;
		}else{
			dalmes = $("#largeclasss").val();
		}
 
	}
	function changegysmesC(){
		
		if($("#fineclass").val()=="--请选择细类--"){
			xilmes = null;
		}else{
			xilmes = $("#fineclass").val();
		}
 
	}
	function changegysmesD(){
		
		if($("#indexs").val()=="--请选择模块--"){
			mokmes = null;
		}else{
			mokmes = $("#indexs").val();
		}
 
	}
	
	
function showAll(){
	
	
	findMK();
	findDL();
	findGYS();

	ukey=[];
    unewkey=[];
    ukey2=[];
    unewkey2=[];
	var getorderbystate = $("#orderbystate").val();
	var commoditystate;
	if(getorderbystate=="正常"){
		commoditystate=2;
	}else if(getorderbystate=="下架"){
		commoditystate=-1;
	}else if(getorderbystate=="全部"){
		commoditystate=null;
	}
	
	var getorderbykey = document.getElementById("orderbykey").value;
	var getorderbytype = document.getElementById("orderbytype").value;
	var page = document.getElementById("thispage").value;
	if(page==""||page==null){page=1}
	var rows = document.getElementById("thisrows").value;
	
	var name = document.getElementById("cnames").value;
	var youcode = document.getElementById("youcode").value;
	var commoditykeyid = document.getElementById("commoditykeyid").value; 
	pagess=page;

	
	
	
	var orderbykey;
	var orderbytype;
	
	if(getorderbykey=="商品编号"){
		orderbykey="commoditykeyid";
	}else if(getorderbykey=="商品售价"){
		orderbykey="price";
	}else if(getorderbykey=="商品尺码"){
		orderbykey="mysize";
	}else if(getorderbykey=="商品库存"){
		orderbykey=="num";
	}else{
		orderbykey==null;
	}
	
	
	if(getorderbytype=="升序"){
		orderbytype=0;
	}else{
		orderbytype=1;
	}
	
	var str="";
	var issuperadmin = localStorage.getItem("issuperadmin");
	var auths= localStorage.getItem('usermessage');
	var autharray = auths.split(',');
	var isHaveAuthUpdate = false;
	var isHaveAuthupdown = false;
	var isHaveAuthudaoru = false;
	for(var i=0;i<autharray.length;i++){
		if(autharray[i]=="/commodity/updatecommodity"){
			isHaveAuthUpdate=true;
			break;
		}
	}
	
	for(var i=0;i<autharray.length;i++){
		if(autharray[i]=="/stock/normal"){
			isHaveAuthupdown=true;
			break;
		}
	}
	
	for(var i=0;i<autharray.length;i++){
		if(autharray[i]=="/stock/Lowerframe"){
			isHaveAuthupdown=true;
			break;
		}
	}
	
	for(var i=0;i<autharray.length;i++){
		if(autharray[i]=="/commodityback/readCommodityExcel"){
			isHaveAuthudaoru=true;
			break;
		}
	}
	
	for(var i=0;i<autharray.length;i++){
		if(autharray[i]=="/commodity/readCommodityExcel"){
			isHaveAuthudaoru=true;
			break;
		}
	}
	

	
	if(isHaveAuthudaoru==true){
		$("#daorudediv").css("display","block");
	}else if(issuperadmin == 1){
		$("#daorudediv").css("display","block");
	}else{
		$("#daorudediv").css("display","none");
	}
	
	if(issuperadmin==1){
		$("#shezhibankuai").css("display","block");
		
	}else if(isHaveAuthupdown==true){
		$("#shezhibankuai").css("display","block");
	}else{
		$("#gaodudiv").css("marginTop","-100px");
	}
	
	var zhujima = $("#zhujima").val();
	
	 $.ajax({
         url:address+"/commodity/selectBySelect2",
         type:"POST",
         data:{"uname":uname,"UID":uid,"code":zhujima,"suppliername":gysmes,"indexs":mokmes,"orderbykey":orderbykey,"orderbytype":orderbytype,"page":page,"rows":rows,"name":name,"youcode":youcode,"commoditykeyid":commoditykeyid,"largeclass":dalmes,"fineclass":xilmes,"type":commoditystate},
         success:function(data){
			 
         	if(data.status == '200'){
				
         		var message = data.data;
				console.log(message);
				if(message==""){alert("暂无数据")}
				var numa = 1;
				var numb = 1;
				var namessa = "bigtupianshowa";
				var namessb = "bigtupianshowb";
         		$.each(message, function(index, item) {
					var a = "";
					var b = "";
					if(item.MAINIMAGE==null||item.MAINIMAGE==""||item.MAINIMAGE==undefined){}else{ a =item.MAINIMAGE.split(";");}
					if(item.DETAILSIMAGE==null||item.DETAILSIMAGE==""||item.DETAILSIMAGE==undefined){}else{ b =item.DETAILSIMAGE.split(";");}
        	
        
         	str+=""+
				"<tr>";
				str+= 
					"<td><input  onchange=\"chagearrayuser('"+item.YOUCODE+"');quxiaoquanxuanbox();\" type=\"checkbox\" value=\""+item.YOUCODE+"\" name=\"commodityCheckbox\"/> </td>"+"<td>"+(index+1)+"</td>";
				if(item.COMMODITYKEYID==""||item.COMMODITYKEYID==null||item.COMMODITYKEYID==undefined){str+= "<td></td>";}else{str+= "<td>"+item.COMMODITYKEYID+"</td>";}
				if(item.YOUCODE==""||item.YOUCODE==null||item.YOUCODE==undefined){str+= "<td></td>";}else{str+= "<td>"+item.YOUCODE+"</td>";}
				if(item.CODE==""||item.CODE==null||item.CODE==undefined){str+= "<td></td>";}else{str+= "<td>"+item.CODE+"</td>";}
					if(item.LARGECLASS==""||item.LARGECLASS==null||item.LARGECLASS==undefined){str+= "<td></td>";}else{str+= "<td>"+item.LARGECLASS+"</td>";}
						if(item.INCLASS==""||item.INCLASS==null||item.INCLASS==undefined){str+= "<td></td>";}else{str+= "<td>"+item.INCLASS+"</td>";}
							if(item.SMALLCLASS==""||item.SMALLCLASS==null||item.SMALLCLASS==undefined){str+= "<td></td>";}else{str+= "<td>"+item.SMALLCLASS+"</td>";}
								if(item.FINECLASS==""||item.FINECLASS==null||item.FINECLASS==undefined){str+= "<td></td>";}else{str+= "<td>"+item.FINECLASS+"</td>";}
			
				
				if(item.NAME==""||item.NAME==null||item.NAME==undefined){str+= "<td></td>";}else{str+= "<td>"+item.NAME+"</td>";}	
				
				if(item.TYPE==""||item.TYPE==null||item.TYPE==undefined){str+= "<td></td>";}else{
					
					if(item.TYPE==1){str+="<td>"+"正常"+"</td>";}
					if(item.TYPE==-1){str+="<td>"+"下架"+"</td>";}
					if(item.TYPE==-2){str+="<td>"+"冻结"+"</td>";}
					
				}

			

				if(item.BRAND==""||item.BRAND==null||item.BRAND==undefined){str+= "<td></td>";}else{str+= "<td>"+item.BRAND+"</td>";}	

				if(item.INTRODUCTION==""||item.INTRODUCTION==null||item.INTRODUCTION==undefined){str+= "<td></td>";}else{str+= "<td>"+item.INTRODUCTION+"</td>";}
				
				if(item.DETAILED==""||item.DETAILED==null||item.DETAILED==undefined){str+= "<td></td>";}else{str+= "<td>"+item.DETAILED+"</td>";}
				
				if(item.PACKINGMETHOD==""||item.PACKINGMETHOD==null||item.PACKINGMETHOD==undefined){str+= "<td></td>";}else{str+= "<td>"+item.PACKINGMETHOD+"</td>";}
				
				if(item.COMPANY==""||item.COMPANY==null||item.COMPANY==undefined){str+= "<td></td>";}else{str+= "<td>"+item.COMPANY+"</td>";}
				
				
				if(item.ORIGINALPRICE==""||item.ORIGINALPRICE==null||item.ORIGINALPRICE==undefined){str+= "<td></td>";}else{str+= "<td>"+item.ORIGINALPRICE+"</td>";}
				
				if(item.PRICE==""||item.PRICE==null||item.PRICE==undefined){str+= "<td></td>";}else{str+= "<td>"+item.PRICE+"</td>";}
				
				if(item.COLOUR==""||item.COLOUR==null||item.COLOUR==undefined){str+= "<td></td>";}else{str+= "<td>"+item.COLOUR+"</td>";}
				
				if(item.MYSIZE==""||item.MYSIZE==null||item.MYSIZE==undefined){str+= "<td></td>";}else{str+= "<td>"+item.MYSIZE+"</td>";}
					
				if(a.length>0){
					str+= "<td><img onclick =\"selectBigTuoian('"+namessa+"',"+numa+")\" style=\"width:60px;height:60px \" src=\""+address+a[0]+"\"/></td>";
					str+=
					"<div style=\" display:none;position:absolute;left:1100px\" id=\"bigtupianshowa"+numa+"\">"+
						"<img onmouseleave=\"backTuoian('"+namessa+"',"+numa+")\" width=500 height=500 src=\""+address+a[0]+"\"/>"+
					"</div>";
				
				}else{"<td></td>";}
					
				if(b.length>0){str+= "<td><img onclick =\"selectBigTuoian('"+namessb+"',"+numb+")\" style=\"width:60px;height:60px \" src=\""+address+b[0]+"\"/></td>";
				str+=
					"<div style=\" display:none;position:absolute;left:1200px\" id=\"bigtupianshowb"+numb+"\">"+
						"<img onmouseleave=\"backTuoian('"+namessb+"',"+numb+")\" width=500 height=500 src=\""+address+b[0]+"\"/>"+
					"</div>";
				
				}else{"<td></td>";}
					
				if(item.KC==""||item.KC==null||item.KC==undefined){str+= "<td></td>";}else{str+= "<td>"+item.KC+"</td>";}

				
				if(item.INDEXSBY==""||item.INDEXSBY==null||item.INDEXSBY==undefined){str+= "<td></td>";}else{str+= "<td>"+item.INDEXSBY+"</td>";}
				if(item.VIP==""||item.VIP==null||item.VIP==undefined){str+= "<td></td>";}else{str+= "<td>"+item.VIP+"</td>";}
				if(item.INDEXS==""||item.INDEXS==null||item.INDEXS==undefined){str+= "<td></td>";}else{str+= "<td>"+item.INDEXS+"</td>";}
				
				if(item.ASIZE==""||item.ASIZE==null||item.ASIZE==undefined){str+= "<td>不限</td>";}else{str+= "<td>"+item.ASIZE+"</td>";}
				
				if(issuperadmin==1 || isHaveAuthUpdate==true){
					str+="<td ><input name=\"xiugaiannues\" class=\"xiugaiannue btn btn-warning\" type=\"button\" onclick=\"openpagediv("+item.COMMODITYKEYID+",'"+item.COMPANY+"');setheights()\"  value=\"修改\" /></td>";
				}
				if(issuperadmin!=1){
					$("#importDivs").css("display","none");
					
				}
				 
				pds=item.ISTABLEDATA;
		numa++;
		numb++;
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
						str2+=
    				"</tr>"+
    				"</table>";	
         			
         		document.getElementById('allmessage').innerHTML=str;
         		document.getElementById('annuediv').innerHTML=str2;
         		
         		morenxzgys();
				morenxzdal();
				morenxzxil();
				morenxzmok();
         	
         	}else{
         		alert(data.message);
         	}
         	
         },
         error:function(e){
         	alert("服务器繁忙，请重试……");
            
         }
     });     

}


function selectBigTuoian(name,id){

	document.getElementById(name+""+id).style.display="block";
}

function backTuoian(name,id){

	document.getElementById(name+""+id).style.display="none";
}

function searchss(){
 
	var getorderbykey = document.getElementById("orderbykey").value;
	var getorderbytype = document.getElementById("orderbytype").value;
	var page = document.getElementById("thispage").value;
	var rows = document.getElementById("thisrows").value;
	var orderbykey;
	var orderbytype;
	
	if(getorderbykey=="商品ID"){
		orderbykey="id";
	}else if(getorderbykey=="商品编号"){
		orderbykey="mycode";
	}else if(getorderbykey=="商品售价"){
		orderbykey="price";
	}else if(getorderbykey=="商品尺码"){
		orderbykey="mysize";
	}else if(getorderbykey=="商品库存"){
		orderbykey=="num";
	}else{
		orderbykey=="id";
	}
	
	
	if(getorderbytype=="升序"){
		orderbytype=0;
	}else{
		orderbytype=1;
	}
	
	var name = document.getElementById("searchipunt").value;
	var str="";
	   $.ajax({
            url:address+"/commodity/selectByName",
            type:"POST",
            data:{"page":page,"rows":rows,"name":name},

            success:function(data){
             	if(data.status == '200'){
             		var message = data.data;
             		$.each(message, function(index,item) {
           
        	
            	
            str+=""+
				"<tr>";
				if(item.COMMODITYKEYID==""||item.COMMODITYKEYID==null||item.COMMODITYKEYID==undefined){str+= "<td></td>";}else{str+= "<td>"+item.COMMODITYKEYID+"</td>";}
				if(item.YOUCODE==""||item.YOUCODE==null||item.YOUCODE==undefined){str+= "<td></td>";}else{str+= "<td>"+item.YOUCODE+"</td>";}
					
				if(item.LARGECLASS==""||item.LARGECLASS==null||item.LARGECLASS==undefined){str+= "<td></td>";}else{str+= "<td>"+item.LARGECLASS+"</td>";}
						if(item.INCLASS==""||item.INCLASS==null||item.INCLASS==undefined){str+= "<td></td>";}else{str+= "<td>"+item.INCLASS+"</td>";}
							if(item.SMALLCLASS==""||item.SMALLCLASS==null||item.SMALLCLASS==undefined){str+= "<td></td>";}else{str+= "<td>"+item.SMALLCLASS+"</td>";}
								if(item.FINECLASS==""||item.FINECLASS==null||item.FINECLASS==undefined){str+= "<td></td>";}else{str+= "<td>"+item.FINECLASS+"</td>";}
				
				if(item.NAME==""||item.NAME==null||item.NAME==undefined){str+= "<td></td>";}else{str+= "<td>"+item.NAME+"</td>";}		

				if(item.TYPE==""||item.TYPE==null||item.TYPE==undefined){str+= "<td></td>";}else{str+= "<td>"+item.TYPE+"</td>";}

				if(item.BRAND==""||item.BRAND==null||item.BRAND==undefined){str+= "<td></td>";}else{str+= "<td>"+item.BRAND+"</td>";}	

				if(item.INTRODUCTION==""||item.INTRODUCTION==null||item.INTRODUCTION==undefined){str+= "<td></td>";}else{str+= "<td>"+item.INTRODUCTION+"</td>";}
				
				if(item.DETAILED==""||item.DETAILED==null||item.DETAILED==undefined){str+= "<td></td>";}else{str+= "<td>"+item.DETAILED+"</td>";}
				
				if(item.XIANGXI==""||item.XIANGXI==null||item.XIANGXI==undefined){str+= "<td></td>";}else{str+= "<td>"+item.XIANGXI+"</td>";}
				
				if(item.PACKINGMETHOD==""||item.PACKINGMETHOD==null||item.PACKINGMETHOD==undefined){str+= "<td></td>";}else{str+= "<td>"+item.PACKINGMETHOD+"</td>";}
				
				if(item.COMPANY==""||item.COMPANY==null||item.COMPANY==undefined){str+= "<td></td>";}else{str+= "<td>"+item.COMPANY+"</td>";}
				
				if(item.ORIGINALPRICE==""||item.ORIGINALPRICE==null||item.ORIGINALPRICE==undefined){str+= "<td></td>";}else{str+= "<td>"+item.ORIGINALPRICE+"</td>";}
				
				if(item.PRICE==""||item.PRICE==null||item.PRICE==undefined){str+= "<td></td>";}else{str+= "<td>"+item.PRICE+"</td>";}
					
				str+= "<td></td>";
				
				str+= "<td></td>";
				
				if(item.MAINIMAGE==""||item.MAINIMAGE==null||item.MAINIMAGE==undefined){str+= "<td></td>";}else{str+= "<td><img width=60 height=60 src=\""+address+item.MAINIMAGE+"\" /></td>";}
					
				str+=
				"</tr>";
				pds=item.ISTABLEDATA;
    		
    	});

    		
             		var str2 = ""+
             		"<table class=\"gopageMune\">"+
    				"<tr>"+
    					"<td><span onclick=\"chagepagea();search()\"><a>首页</a></span></td><td>  &nbsp &nbsp &nbsp  </td><td>  当前"+pagess+"页  </td><td>  &nbsp &nbsp &nbsp  </td><td onclick=\"chagepageb();search()\"><a>上一页</a></td><td>  &nbsp &nbsp &nbsp  </td>";
						
						if(pds==true){str2+="<td onclick=\"chagepagec();search()\"><a>下一页</a></td>";}
						else{
							str2+="";
						}
						str2+=
    				"</tr>"+
    				"</table>";	
             			
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


function deleteone(id){

	$.ajax({
		url:address+"/commodity/delete",
		type:"POST",
		data:{"UID":uid,"uname":uname,"id":id},
		success:function(data){
			if(data.message=="登录超时"){
					location.href="login.html";
					return;
				}
			alert(data.message);
			showAll();
		},
		error:function(e){
			alert("访问出错")
		}
	});
}

function upcommodity(){
	
	var con;
		con=confirm("您确定要上架吗？"); //在页面上弹出对话框
		if(con==true){
			$.ajax({
				url:address+"/stock/normal",
				type:"POST",
				data:{"UID":uid,"uname":uname,"youcode":JSON.stringify(unewkey)},
				success:function(data){
					if(data.message=="登录超时"){
						location.href="login.html";
						return;
					}
					showAll();
					alert(data.message);
				},
				error:function(e){
					alert("请求失败")
				}
			});
		}
		else{}
	
}



function downcommodity(){
var con;
	con=confirm("您确定要下 架吗？"); //在页面上弹出对话框
	if(con==true){
	$.ajax({
		url:address+"/stock/Lowerframe",
		type:"POST",
		data:{"UID":uid,"uname":uname,"youcode":JSON.stringify(unewkey)},
		success:function(data){
			if(data.message=="登录超时"){
					location.href="login.html";
					return;
				}
			showAll();
			alert(data.message);
		
		},
		error:function(e){
			alert("请求失败")
		}
	});
}else{}
}

function subshuju(){

	document.getElementById("subid").value=commid;
	document.getElementById("subuid").value=uid;
	document.getElementById("subuname").value=uname;
	var subformdata = new FormData(document.getElementById("updcommoditydivform"));
	$.ajax({
		url:address+"/commodity/updatecommodity",
		type:"POST",
		data:subformdata,
		cache: false,  
        processData: false,  
        contentType: false,
		success:function(data){
			if(data.message=="登录超时"){
					location.href="login.html";
					return;
				}
				showAll();
		alert(data.message);
		},
		error:function(e){
			alert("请求失败")
		}
	});
}


function subshuju2(){
	var indexss = document.getElementById("tuijianmokuai").value;
	$.ajax({
		url:address+"/commodity/updateindex",
		type:"POST",
		data:{"UID":uid,"uname":uname,"keyids":JSON.stringify(unewkey),"indexs":indexss},
		success:function(data){
			if(data.message=="登录超时"){
					location.href="login.html";
					return;
				}
				showAll();
		alert(data.message);
		},
		error:function(e){
			alert("请求失败")
		}
	});
}

function openpagediv(id,jiliangdanwei){
 
	document.getElementById("updcommoditydiv").style.display="block";
	document.getElementById("jiliangdanwei").value=jiliangdanwei;
	commid = id;
}

function closepagediv(){
	
	document.getElementById("updcommoditydiv").style.display="none";
}


function updateimgs(){

	document.getElementById("keyuid").value=uid;
	document.getElementById("keyuname").value=uname;
	document.getElementById("keyidipt").value=commid;
	var imgdataform = new FormData(document.getElementById("updateimgform"));
	
	$.ajax({
		url:address+"/commodity/updateimage",
		type:"POST",
		data:imgdataform,
		cache: false,  
        processData: false,  
        contentType: false,
		success:function(data){
			if(data.message=="登录超时"){
					location.href="login.html";
					return;
				}
				alert(data.message)
			
		},
		error:function(e){}
	});
	
}

function openimgdiv(keyid){

	document.getElementById("updataimgsdiv").style.display="block";
	commid = keyid;
}

function closeimgdiv(){
	document.getElementById("updataimgsdiv").style.display="none";
}


function daochuspbm(){
	var kaishitimes ;
	var jieshutimes ;
	$("#daochuuid").val(uid);
	$("#daochuuname").val(uname);
	var strD = $("#StrDatetimess").val();
	var strH = $("#StrDatetimeshi").val();
	var strM = $("#StrDatetimefen").val();
	if(strD==""||strD==undefined||strD==null){
		kaishitimes=null;
	}else{
		kaishitimes = Number(strD)+Number(strH)+Number(strM);
		
	}
	$("#kaishiTimes").val(kaishitimes);
	
	var endD = $("#EndDatetimess").val();
	var endH = $("#EndDatetimeshi").val();
	var endM = $("#EndDatetimefen").val();
	if(endD==""||endD==undefined||endD==null){
		jieshutimes=null;
	}else{
		jieshutimes = Number(endD)+Number(endH)+Number(endM);
		
	}
	$("#jieshuTimes").val(jieshutimes);
	
}

function changestrtime(){
	var times = document.getElementById("StrDate").value;
	document.getElementById("StrDatetimess").value=new Date(times).getTime()-(8*60*60*1000);
	if(isNaN(document.getElementById("StrDatetimess").value)==true){
		document.getElementById("StrDatetimess").value=null;
	}
}
function changestrtimeshi(){
	var starttimeshi = document.getElementById("Starttimeshi").value;
	document.getElementById("StrDatetimeshi").value=starttimeshi*60*60*1000;
}
function changestrtimefen(){

	var starttimeshi = document.getElementById("Starttimefen").value;

	document.getElementById("StrDatetimefen").value=starttimeshi*60*1000;
}


function changeendtime(){
	var times = document.getElementById("EndDate").value;
	document.getElementById("EndDatetimess").value=new Date(times).getTime()-(8*60*60*1000)+(24*60*60*1000);
	if(isNaN(document.getElementById("EndDatetimess").value)==true){
		document.getElementById("EndDatetimess").value=null;
	}
}
function changeendtimeshi(){
	var starttimeshi = document.getElementById("Endtimeshi").value;
	document.getElementById("EndDatetimeshi").value=starttimeshi*60*60*1000;
}
function changeendtimefen(){

	var starttimeshi = document.getElementById("Endtimefen").value;

	document.getElementById("EndDatetimefen").value=starttimeshi*60*1000;
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
    return y+m+d;    
}