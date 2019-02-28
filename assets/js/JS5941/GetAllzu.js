var quanxianlist;

var key=[];
var newkey=[];
var ukey=[];
var unewkey=[];
	 var uid = localStorage.getItem("uid");
	 var uname = localStorage.getItem("userName");
			var ids = 0; 
 var listarray;
var userjuesename;
var quanxianapes ="";
var userquanxianapes =""; 
var addquanxianarray = new Array();
var addquanxianarraykey = new Array();
var jueSeAuthArray = new Array();

function getAllAuths(){
	
}

function getZuHave(usernamess){
	jueSeAuthArray=[];
	$.ajax({
		url:address+"/groupby/select",
		type:"POST",
		data:{"uname":uname,"UID":uid,"organization":usernamess},
		success:function(data){
			
			var messagess = data.data;
			console.log(messagess);
			$.each(messagess, function(index, item) {
				var strings = item.AUTHSKEY;
				var strings2= "boxid"+strings.replace(/\//g, '_');
			    $("#"+strings2+"").attr("checked","checked");
				console.log(strings+"********");
				console.log(strings2);
				jueSeAuthArray.push(item.AUTHSKEY);
			
			});
			console.log("************************************************");
			console.log(jueSeAuthArray);
			console.log("************************************************");
		},
		error:function(error){
			
		}
	});
}

function addquanxiantolist(quanxian,key,id){
 
	addquanxianarray = arraylistALLqx;
	addquanxianarraykey = arraylistALLqxKEY;
	var checktype = document.getElementById("boxid"+id).checked;
	 
	if(checktype==true){
		if(addquanxianarray.length<1){
			addquanxianarray.push(quanxian);
			addquanxianarraykey.push(key);
		}else{
			for(var sa=0;sa<addquanxianarray.length;sa++){
				if(addquanxianarray[sa]!=quanxian){
					addquanxianarray.push(quanxian);
					addquanxianarraykey.push(key);
					break;
				}
			}	
		}
	}
	else{
		for(var sx=0;sx<addquanxianarray.length;sx++){
			if(addquanxianarraykey[sx]==key){
				addquanxianarray.splice(sx,1);
				addquanxianarraykey.splice(sx,1);
				break;
			}
		}
	}
	console.log(addquanxianarray);
	console.log(addquanxianarraykey);
	
	
}

function addjuese(src){
	
	    window.parent.changesrc(src);
}

		
function savequanxian(){
	var con;
	con=confirm("是否继续？");
	if(con==true){
	$.ajax({
		url:address+"/groupby/update",
		data:{"uname":uname,"UID":uid,"organization":userjuesename,"JsonArray":JSON.stringify(addquanxianarraykey)},
		type:"POST",
		success:function(data){
			alert(data.message);
		},
		error(e){}
	});
	}
	
}


function getsystemallquanxian(){
	 
	var quanxianape ="";

	document.getElementById("thisuname").value = uname;
	document.getElementById("thisuid").value=uid;
	var formdata = new FormData(document.getElementById("quanxianform"));

	var str="";
	$.ajax({
		async: false,
		url:address+"/auths/select",
		type:"POST",
		data:formdata,
		 cache: false,  
           processData: false,  
           contentType: false,
         success:function(data){
			message = data.data;
			if(data.message=="登录超时"){
					location.href="login.html";
					return;
				}
        	 if(data.status == '200'){
          		
          		$.each(message, function(index, item) {
				quanxianape+=item.notes+",";
				});
				    quanxianapes = quanxianape;
					GetZuzhiquanxian();      
				
				console.log(arraylistALLqx);
				console.log(arraylistALLqxKEY);
			
					
				$.each(message, function(index, item) {
			
          	str+=""+
 				
				"<div style=\"padding-left:60px;float:left;width:399px;height:30px;border:1px solid #eee;line-height:30px\">";
				 var pdshuzi = false;
				
				for(var se=0;se<arraylistALLqx.length;se++){
				 
					if(arraylistALLqx[se]==item.notes){
						pdshuzi=true;
						break;
					}
				}
				
				if(pdshuzi==true){
					str+="<input type=\"checkbox\" name=\"quanxian\" checked=\"checked\" id=boxid"+ids+" onchange=\"addquanxiantolist('"+item.notes+"','"+item.key+"','"+ids+"') \" />";
					
				}	
				else{
					str+="<input type=\"checkbox\" name=\"quanxian\" id=boxid"+ids+" onchange=\"addquanxiantolist('"+item.notes+"','"+item.key+"','"+ids+"') \" />";
				}
				
				str+=
					"&nbsp &nbsp" +
		
				item.notes+
				
				"</div>";
				pdshuzi++;
				
				ids++;
 		
 		
				});
				
					str+="<div><span style=\"padding:5px 45px\"></span></div>";
          		str+="<div><span onclick=\"savequanxian()\"style=\"padding:5px 45px\"class=\"btn btn-success\">确 定</span></div>";
				
          		
          			
          	}else{
          		alert(data.message);
          	} 
		
         },
         error:function(e){
         	alert("请求失败");    
         }
     });
	
}

var arraylistALLqxKEY;
var arraylistALLqx;
function GetZuzhiquanxian(){
	var userquanxianape ="";
	var arraylistss = new Array();
	var arraylistsskey = new Array();
	var message ="";
	var str="";
	$.ajax({
		url:address+"/groupby/select",
		type:"POST",
		 async: false,
		data:{"uname":uname,"UID":uid,"organization":userjuesename},
		success:function (data){
			var message = data.data;
			
			$.each(message, function(index, item) {
		
				arraylistss.push(item.NOTES);
				arraylistsskey.push(item.AUTHSKEY);
				arraylistALLqx=arraylistss;
				arraylistALLqxKEY = arraylistsskey;
			});
		
		},
		error:function (e){
			return null;
		}
	});


	
}


 
function getquanxianzu (){

	document.getElementById("thisuname").value = uname;
	document.getElementById("thisuid").value=uid;
	var formdata = new FormData(document.getElementById("quanxianform"));
	getalluser();
	var str="";
	$.ajax({
		url:address+"/groupby/selectall",
		type:"POST",
		data:formdata,
		async: false,
		 cache: false,  
           processData: false,  
           contentType: false,
         success:function(data){
			var messages = data.data;
				if(data.message=="登录超时"){
					location.href="login.html";
					return;
				}
				
        	 if(data.status == '200'){
          
		  var juese = localStorage.getItem("jueseid");
	if(juese==""||juese==null||juese==undefined){
	
		$.each(messages, function(index, item) {
				
    
          	str+=""+
 				
				"<div style=\"float:left;width:305px;height:60px;margin:15px;background:#eee;text-align:center;line-height:60px\">"+
				item.ORGANIZATION+
				"&nbsp &nbsp";
				str+=
				"<button onclick=\"delquanxian('"+item.ORGANIZATION+"')\" type=\"button\" style=\"float:right;height:60px\" class=\"btn btn-danger\">删除</button>";
				str+=
							"<input type=\"checkbox\"   name=\"quanxian\" id=boxid"+ids+" onchange=\"setarray('"+item.ORGANIZATION+"',"+ids+") \" />";
						str+=
				"<button type=\"button\" onclick=\"openquanxianPage('"+item.ORGANIZATION+"');getsystemallquanxian()\" style=\"float:right;height:60px\" class=\"btn btn-warning\">修改</button>"+
				
				"</div>";
		
 		ids++; 
	});
	 }else{
			
			   var jueseList = juese.split(",");
		 jueseList.pop();
		  
		 
		 
		 listarray = jueseList;
          		$.each(messages, function(index, item) {
				
    
          	str+=""+
 				
				"<div style=\"float:left;width:305px;height:60px;margin:15px;background:#eee;text-align:center;line-height:60px\">"+
				item.ORGANIZATION+
				"&nbsp &nbsp";
				var spd;
				for(var i=0;i<jueseList.length;i++){
					if(item.ORGANIZATION == jueseList[i]){
						spd=1;
						break;
					}else{
						spd=2
					}
					
				}
				str+=
				"<button onclick=\"delquanxian('"+item.ORGANIZATION+"')\" type=\"button\" style=\"float:right;height:60px\" class=\"btn btn-danger\">删除</button>";
				if(spd==1){
						str+=
							"<input type=\"checkbox\"  checked=\"checked\"  name=\"quanxian\" id=boxid"+ids+" onchange=\"setarray('"+item.ORGANIZATION+"',"+ids+") \" />";
					}else{
						str+=
							"<input type=\"checkbox\"   name=\"quanxian\" id=boxid"+ids+" onchange=\"setarray('"+item.ORGANIZATION+"',"+ids+") \" />";
					}
					
				str+=
				"<button type=\"button\" onclick=\"openquanxianPage('"+item.ORGANIZATION+"');getsystemallquanxian()\" style=\"float:right;height:60px\" class=\"btn btn-warning\">修改</button>"+
				
				"</div>";
		
 		ids++; 
	
		
 		
 		
 	});
	 }
		getalluser();	
          		
							
				
          		document.getElementById('allmessage').innerHTML=str;
          			
          	}else{
          		alert(data.message);
          	}       	
         },
         error:function(e){
         	alert("请求失败");    
         }
     });     

}


function closequanxianPage(){
	document.getElementById("quanxianlist").style.display="none";
}


function openquanxianPage(juesename){

	userjuesename=juesename;
	$("#quanxianlist").css("display","block");
	getZuHave(userjuesename);
}

function changepages(src){
	
	    window.parent.changesrc(src);
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


	
	
}


function chagearray(message){
	


	var a =0;
	var newkeyindex=0;
	var size = key.length;
	for(var i=0;i<size;i++){
		if(key[i]==message){
			a=1;
			
		}else{
			newkey[newkeyindex]=key[i];
			newkeyindex ++;
		}
			
	}
	if(a==0){
		newkey[newkey.length]=message;
	}
	key=newkey;


	
	
}

	
	var arrs = new Array();
	var PDnum = 1;
	
function setarray(message,pdid){
	var arrayindex = 0;
	var newlist;
	var newlist2;
	var jueselist = localStorage.getItem("jueseid");
	if(jueselist==""||jueselist==undefined||jueselist==null){
		
		newlist="";
		
	}else{
		newlist = jueselist.split(",");
		newlist.pop(); 
	}
	
	if(PDnum==1){
		for(var k=0;k<newlist.length;k++){
			arrs.push(newlist[k]);
		}
	}

	var check = document.getElementById("boxid"+pdid).checked;
	if(check==true){
		if(arrs.length==0){
			arrs.push(message);
		}
		else{
			for(var i=0;i<arrs.length;i++){
				if(arrs[i] != message){
					arrs.push(message);
					break;
				}
			}
		}
	}
	else{
		if(arrs.length==0){
			
		}
		else{
			for(var index=0;index<arrs.length;index++){
				if(arrs[index] != message){
					arrayindex++;
				}else{
					break;
				}
			}
		}
		for(var i=0;i<arrs.length;i++){
			if(arrs[i] == message){
				arrs.splice(arrayindex,1);
				break;
			}
		}
		
	}
	
	console.log(arrs);
	PDnum++;
}

function delquanxian(zuname){

	var con;
	con=confirm("您确定要删除吗?"); //在页面上弹出对话框
	if(con==true){
		 $.ajax({
		 url:address+"/groupby/delete",
		 type:"POST",
		 data:{"organization":zuname,"UID":uid,"uname":uname},
		 success:function(data){
			 	if(data.message=="登录超时"){
					location.href="login.html";
					return;
				}
			 alert(data.message);
		 },
		 error:function(e){
			 alert("请求失败了");
		 }
	 });
	}
	else{
		
	}
	
	 
	
}


function shouquanyh(){

	$.ajax({
		 url:address+"/organization/authorization",
		 type:"POST",
		 data:{"mphone":JSON.stringify(unewkey),"UID":uid,"uname":uname,"JsonArray":JSON.stringify(arrs)},
		 success:function(data){
			 	if(data.message=="登录超时"){
					location.href="login.html";
					return;
				}
				console.log(JSON.stringify(arrs));
			 alert(data.message);
		 },
		 error:function(e){
			 alert(data.message);
		 }
	 });
	 
}



function MHsearchQXZU(){
	var str="";
	var saerchquanxianzu = document.getElementById("saerchquanxianzu").value;

	
	$.ajax({
		
		url:address+"/Groupby/selectlike",
		type:"POST",
		data:{"UID":uid,"uname":uname,"name":saerchquanxianzu},
		success:function(data){
				if(data.message=="登录超时"){
					location.href="login.html";
					return;
				}
			var message = data.data;
			if(data.data!=""){
				$.each(message, function(index, item) {
					str+=""+
 				
				"<div style=\"float:left;width:305px;height:60px;margin:15px;background:#eee;text-align:center;line-height:60px\">"+
				item.ORGANIZATION+
				"&nbsp &nbsp" +
				"<input type=\"checkbox\" name=\"quanxian\" id=boxid"+ids+" onchange=\"chagearray('"+item.UNAME+"') \" />"+
				"</div>";
					ids++;
				});
				
			}
 			document.getElementById('allmessage').innerHTML=str;
 		
 	},
		error:function(){}
		
		
	});
}


function chexiaoquanxian(){
		newkey={};
		var myphone = document.getElementById("myphone").value;
	$.ajax({
		 url:address+"/organization/authorization",
		 type:"POST",
		 data:{"mphone":myphone,"UID":uid,"uname":uname,"JsonArray":JSON.stringify(newkey)},
		 success:function(data){
			 	if(data.message=="登录超时"){
					location.href="login.html";
					return;
				}
			 alert(data.message);
		 },
		 error:function(e){
			 alert("请求失败");
		 }
	 });
}

function openlistpage(){
	 document.getElementById("userphone").style.display="block";
}
function closelistpage(){
	 document.getElementById("userphone").style.display="none";
}

function getalluser(){
	var str3="";

	$.ajax({
		url:address+"/member/selectmember",
		data:{"UID":uid,"uname":uname},
		type:"POST",
		success:function(data){
				if(data.message=="登录超时"){
					location.href="login.html";
					return;
				}
			
		var message = data.data;
			if(data.data!=""){
				
				str3+="<button style=\"float:right\" onclick=\"closelistpage()\" class=\"btn\">X</button>";
				str3+="<span><input id=\"likephone\" type=\"text\" style=\"font-size:16px;padding:left:15px;width:265px;height:45px;\" placeholder=\"输入手机号搜索\"/><a>"+
				"<button class=\"btn\" onclick=\"likeSearch()\" style=\"background:#ccc;padding:8px 15px 5px 15px;font-size:16px;margin-top:-4px\">搜索</button><a></span>";
				str3+="<table id=\"sample-table-2\" class=\"table table-striped table-bordered table-hover\">"
				str3+="<hr>";
				$.each(message, function(index, item) {
					str3+=
						"<tr>"+
							"<td>"+"<input onchange=\"chagearrayuser('"+item.UNAME+"')\" type=\"checkbox\"/>"+"</td><td>"+item.UNAME+"</td><td>"+item.PHONE+"</td>"+
						"</tr>";
				});
				str3+="</table>";
				str3+="<button onclick=\"shouquanyh()\" class=\"btn\">确定</button>";
			}
 			document.getElementById('userphone').innerHTML=str3;
 		
			
		},
		error:function(e){}

	});
	
}



function likeSearch(){
	ukey=[];
		unewkey=[];
	var str4="";
	var likephone = document.getElementById("likephone").value;
	$.ajax({
		url:address+"/member/selectmember",
		type:"POST",
		data:{"UID":uid,"uname":uname,"phone":likephone},
		success:function(data){
			if(data.message=="登录超时"){
					location.href="login.html";
					return;
				}
			if(data.data==""){
				alert("暂无数据");
				return;
			}
			
				var message = data.data;
			if(data.data!=""){
				
				str4+="<button style=\"float:right\" onclick=\"closelistpage()\" class=\"btn\">X</button>";
				str4+="<span><input id=\"likephone\" type=\"text\" style=\"font-size:16px;padding:left:15px;width:265px;height:45px;\" placeholder=\"输入手机号搜索\"/><a>"+
				"<button class=\"btn\" onclick=\"likeSearch()\" style=\"background:#ccc;padding:8px 15px 5px 15px;font-size:16px;margin-top:-4px\">搜索</button><a></span>";
				str4+="<table id=\"sample-table-2\" class=\"table table-striped table-bordered table-hover\">"
				str4+="<hr>";
				str4+="<input id=\"quanxuanbox\" onchange=\"quanxian()\" type=\"checkbox\"/> &nbsp &nbsp 全选";
				str4+="<tr><td></td><td>账号</td><td>手机号</td></tr>";
				$.each(message, function(index, item) {
					str4+=
					
							"<td>"+"<input name=\"xuanzecheckbox\" value='"+item.UNAME+"' onchange=\"chagearrayuser('"+item.UNAME+"'),quxiaoquanxuan()\"  type=\"checkbox\"/>"+"</td><td>"+item.UNAME+"</td><td>"+item.PHONE+"</td>"+
						"</tr>";
				});
				str4+="</table>";
				str4+="<button onclick=\"shouquanyh()\" class=\"btn\">确定</button>&nbsp &nbsp";
				str4+="<button onclick=\"getalluser()\" class=\"btn\">返回</button>";
			}
 			document.getElementById('userphone').innerHTML=str4;
 		
			
		},
		error:function(e){}
	});
}


function quanxian(){
		ukey=[];
		unewkey=[];
	var checkboxs = document.getElementById("quanxuanbox");
	if(checkboxs.checked){

		    var val = document.getElementsByName("xuanzecheckbox");
		for(var i=0;i<val.length;i++){
			val[i].checked=true;
			chagearrayuser(val[i].value)
		}	
	}else{
	
		    var val = document.getElementsByName("xuanzecheckbox");
		for(var i=0;i<val.length;i++){
			val[i].checked=false;
			
			
		}	
		
	}
	
	
}

function quxiaoquanxuan(){

	 var  pd; 
	 var val = document.getElementsByName("xuanzecheckbox");
		for(var i=0;i<val.length;i++){
			if(val[i].checked){
				pd=0;
			}else{
				pd=1;
			}
			if(pd==1){break;}
		}

		if(pd==1){
			var checkboxs = document.getElementById("quanxuanbox").checked=false;
		}
		if(pd==0){
			var checkboxs = document.getElementById("quanxuanbox").checked=true;
		}
}





