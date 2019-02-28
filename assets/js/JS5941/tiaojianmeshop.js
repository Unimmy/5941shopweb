var message;
var pds;
 var uid = localStorage.getItem('uid');
var uname = localStorage.getItem('userName');
	
var key=[];
var newkey=[];
function showmeshopAll(){

document.getElementById("unames").value=uname;
document.getElementById("uids").value=uid;
var form = new FormData(document.getElementById("findmeshopform"));


	
	

	
	var str="";

	 $.ajax({
         url:address+"/shopback/selectall",
         type:"POST",
         data:form,
		 cache: false,  
           processData: false,  
           contentType: false,
         success:function(data){
			if(data.message=="登录超时"){
					location.href="login.html";
					return;
			}
        	 if(data.status == '200'){
          		message = data.data;
				if(message==""){alert("暂无数据")}
				
          		$.each(message, function(index, item) {
				console.log(message);
			 	str+=""+
 				"<tr>";
			str+="<td><input type=\"checkbox\" value="+item.id+" onclick=\"chagearray('"+item.id+"'),quxiaoquanxuan()\" name=\"xuanzecheckbox\"/></td>";
 			if(item.shopname==null||item.shopname==undefined||item.shopname==""){str+="<td></td>";}else{str+="<td>"+item.shopname+"</td>";}
 			if(item.shoptype==null||item.shoptype==undefined||item.shoptype==""){str+="<td></td>";}else{str+="<td>"+item.shoptype+"</td>";}
 			if(item.memberid==null||item.memberid==undefined||item.memberid==""){str+="<td></td>";}else{str+="<td>"+item.memberid+"</td>";}
 			if(item.superid==null||item.superid==undefined||item.superid==""){str+="<td></td>";}else{str+="<td>"+item.superid+"</td>";}
 			if(item.addtime==null||item.addtime==undefined||item.addtime==""){
 				str+="<td></td>";
 				
 			}else{str+="<td>"+timetrans(item.addtime/1000)+"</td>";}
 			if(item.province==null||item.province==undefined||item.province==""){str+="<td>";}else{str+="<td>"+item.province;}
 			if(item.city==null||item.city==undefined||item.city==""){str+="";}else{str+=item.city;}
 			if(item.area==null||item.area==undefined||item.area==""){str+="";}else{str+=item.area;}
 			if(item.street==null||item.street==undefined||item.street==""){str+="</td>";}else{str+=item.street+"</td>";}
 			if(item.detailed==null||item.detailed==undefined||item.detailed==""){str+="<td></td>";}else{str+="<td>"+item.detailed+"</td>";}
 			if(item.shopresume==null||item.shopresume==undefined||item.shopresume==""){str+="<td></td>";}else{str+="<td>"+item.shopresume+"</td>";}
 			if(item.oneid==null||item.oneid==undefined||item.oneid==""){str+="<td></td>";}else{str+="<td>"+item.oneid+"</td>";}
 			if(item.adminphone==null||item.adminphone==undefined||item.adminphone==""){str+="<td></td>";}else{str+="<td>"+item.adminphone+"</td>";}
 			if(item.code==null||item.code==undefined||item.code==""){str+="<td></td>";}else{str+="<td>"+item.code+"</td>";}
 			
 	
 		
 		
						pds=item.istabledata;
		
 	}
 	
 	);

          			var str2 = ""+
             		"<table class=\"gopageMune\">"+
    				"<tr>"+
    					"<td><input class=\"btn btn-warning\" style=\"border:none;background:#ff9121;padding:5px 20px;margin:0px 5px;color:#fff\" type=\"button\" onclick=\"chagepagea();showmeshopAll()\" value=\"首页\" /></td>"+
    					"<td><input class=\"btn btn-warning\"  style=\"border:none;background:#ff9121;padding:5px 20px;margin:0px 5px;color:#fff\" type=\"button\" onclick=\"chagepageb();showmeshopAll()\" value=\"上一页\" /></td>"+
    					"<td style=\"border:none;background:#ffb752;padding:5px 20px;margin:0px 5px;display:block;color:#fff\">当前在第"+$("#thispage").val()+"页</td>";
						if(pds==true){str2+="<td><input class=\"btn btn-warning\"  style=\"border:none;background:#ff9121;padding:5px 20px;margin:0px 5px;color:#fff\" type=\"button\" onclick=\"chagepagec();showmeshopAll()\" value=\"下一页\" /></td>";}
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


function timetrans(date){
    var date = new Date(date*1000);//如果date为10位不需要乘1000
    var Y = date.getFullYear() + '-';
    var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
    var D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + ' ';
    var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
    var m = (date.getMinutes() <10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
    var s = (date.getSeconds() <10 ? '0' + date.getSeconds() : date.getSeconds());
    return Y+M+D+h+m+s;
}


function shopsave(){

	var page = document.getElementById("thispage").value;
	if(page==""||page==null){page=1}
	var rows = document.getElementById("thisrows").value;
	var uid = localStorage.getItem('uid');
	var uname = localStorage.getItem('userName');
	var dataarray;
	
        	$.ajax({
                url:address+"/shopback/save",
                type:"POST",
                data:{"JsonArray":JSON.stringify(message) ,"uname":uname,"UID":uid},
                success:function(data){
					if(data.message=="登录超时"){
					location.href="login.html";
					return;
					}
					showmeshopAll();
                	alert(data.message)
					
                },
				error:function(e){
                	alert("请求失败")
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
	



function chagearray(message){
	
	newkey=[];
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

	console.log(newkey)
	
	
}

function deleteallshuju(){

	console.log(JSON.stringify(newkey));
	$.ajax({
		url:address+"/shopback/delete",
		type:"POST",
		data:{"UID":uid,"uname":uname,"JsonArray":JSON.stringify(newkey)},
		success:function(data){
			showmeshopAll();
			alert(data.message);
		},
		error:function(e){}
		
	})
	
}

function remevelist(){
	key=[];
	newkey=[];
}


function quanxuan(){
	
		key=[];
		newkey=[];
		
	var checkboxs = document.getElementById("quanxuanbox");

	if(checkboxs.checked){

		    var val = document.getElementsByName("xuanzecheckbox");
		for(var i=0;i<val.length;i++){
			val[i].checked=true;
			chagearray(val[i].value)
		}	
	}else{

		    var val = document.getElementsByName("xuanzecheckbox");
		for(var i=0;i<val.length;i++){
			val[i].checked=false;
			
			
		}	

		console.log(newkey)
	}
	
	
}



function quxiaoquanxuan(){

	var pd; 
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


