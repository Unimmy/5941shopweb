var address = "http://123.207.147.134:8091";
var pds;
	var pagess;
function selectMineimport(){
	var username = localStorage.getItem("userName");
	var uid =      localStorage.getItem("uid");
	var page = document.getElementById("thispage").value;
	var rows = document.getElementById("thisrows").value;
	var str = "";
	pagess=page;
 
	$.ajax({
		url:address+"/commodityback/selectall",
		type:"POST",
		data:{"uname":username,"page":page,"rows":rows,"UID":uid},
	     success:function(data){
				if(data.message=="登录超时"){
					location.href="login.html";
					return;
				}
          	if(data.status == '200'){
							
          		var message = data.data;
				 if(message==""){alert("暂无数据")}
          		$.each(message, function(index,item) {

          	var a =item.mainimage.split(";");
         	var b =item.detailsimage.split(";");
         	
          	str+=""+"<tr>"+
 			"<td class=\"center\">"+
 			"<label>"+
 				"<input type=\"checkbox\" class=\"ace\" />"+
 				"<span class=\"lbl\"></span>"+
 			"</label>"+
 		"</td>"+
 		"<td>"+item.mycode+"</td>"+
 		"<td>"+item.largeclass+">>"+item.inclass+">>"+item.smallclass+">>"+item.fineclass+"</td>"+
 		"<td>"+item.name+"</td>"+
 		"<td>"+item.supplier+"</td>"+
 		"<td>"+item.brand+"</td>"+
 		"<td>"+item.introduction+"</td>"+
 		"<td>"+item.detailed+"</td>"+
 		"<td>"+item.packingmethod+"</td>"+
 		"<td>"+item.originalprice+"</td>"+
 		"<td>"+item.price+"</td>"+
 		"<td>"+item.colour+"</td>"+
 		"<td>"+item.mysize+"</td>"+
 		"<td><img style=\"width:60px;height:60px \" src="+address+a[0]+"/></td>"+
 		"<td><img style=\"width:60px;height:60px \" src="+address+b[0]+"/></td>"+
 		"<td>"+
 			"<div class=\"visible-md visible-lg hidden-sm hidden-xs action-buttons\">"+
 				"<a class=\"blue\" href=\"#\">"+
 					
 					"<i class=\"icon-zoom-in bigger-130\"></i>"+
 				"</a>"+
 				"<a class=\"green\" href=\"#\">"+
 					"<i class=\"icon-pencil bigger-130\"></i>"+
 				"</a>"+
 				"<a class=\"red\" href=\"#\">"+
 					"<i class=\"icon-trash bigger-130\"></i>"+
 				"</a>"+
 			"</div>"+
 		"</td>"+
 	"</tr>";
 		pds=item.ISTABLEDATA;
 	});

 		   		var str2 = ""+
             		"<table class=\"gopageMune\">"+
    				"<tr>"+
    					"<td><span onclick=\"chagepagea();selectMineimport()\"><a>首页</a></span></td><td>  &nbsp &nbsp &nbsp  </td><td>  当前"+pagess+"页  </td><td>  &nbsp &nbsp &nbsp  </td><td onclick=\"chagepageb();selectMineimport()\"><a>上一页</a></td><td>  &nbsp &nbsp &nbsp  </td>";
						
						if(pds==true){str2+="<td onclick=\"chagepagec();selectMineimport()\"><a>下一页</a></td>";}
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