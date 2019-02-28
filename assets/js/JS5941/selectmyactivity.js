

function showmyactivity(){
	var uname = localStorage.getItem("userName");
	var uid = localStorage.getItem("uid");

	var str ="";
	$.ajax({
		url:address+"/Promotion/select",
		data:{"uname":uname,"UID":uid},
		type:"POST",
		 success:function(data){
			 var servicetime = data.timestamp;
			 if(data.message=="登录超时"){
					location.href="login.html";
					return;
				}
             	if(data.status == '200'){
             		var message = data.data;
				if(message==""||message==null||message==undefined){
					alert("没有数据了")
				}
             		$.each(message, function(index,item) {
             
            	
             	str+=""+"<tr>";
				str+="<td>"+(index+1)+"</td>";
				if(item.COMMODITYNAME==""||item.COMMODITYNAME==null||item.COMMODITYNAME==undefined){str+="<td>"+""+"</td>";}else{str+="<td>"+item.COMMODITYNAME+"</td>";}
    			if(item.STAR==""||item.STAR==null||item.STAR==undefined){str+="<td>"+""+"</td>";}else{str+="<td>"+formatDateTime(item.STAR)+"</td>";}
				if(item.END==""||item.END==null||item.END==undefined){str+="<td>"+""+"</td>";}else{str+="<td>"+formatDateTime(item.END)+"</td>";}
				if(item.TITLE==""||item.TITLE==null||item.TITLE==undefined){str+="<td>"+""+"</td>";}else{str+="<td>"+item.TITLE+"</td>";}
				if(item.TYPE==""||item.TYPE==null||item.TYPE==undefined){str+="<td>"+""+"</td>";}else{
					if(item.TYPE==1){str+="<td>"+"打折"+"</td>";}
					else if(item.TYPE==2){str+="<td>"+"降价"+"</td>";}
				}
				if(item.TYPE==1){
					if(item.DISCOUNT==""||item.DISCOUNT==null||item.DISCOUNT==undefined){str+="<td>"+""+"</td>";}else{str+="<td>"+item.DISCOUNT+"</td>";}
				}else{
					if(item.REDUCE==""||item.REDUCE==null||item.REDUCE==undefined){str+="<td>"+""+"</td>";}else{str+="<td>"+item.REDUCE+"</td>";}
				}
				if(item.INTRODUCE==""||item.INTRODUCE==null||item.INTRODUCE==undefined){str+="<td>"+""+"</td>";}else{str+="<td>"+item.INTRODUCE+"</td>";}
				if(item.MEMBERID==""||item.MEMBERID==null||item.MEMBERID==undefined){str+="<td>"+""+"</td>";}else{str+="<td>"+item.MEMBERID+"</td>";}
				if(item.SHOPCODE==""||item.SHOPCODE==null||item.SHOPCODE==undefined){str+="<td>"+""+"</td>";}else{str+="<td>"+item.SHOPCODE+"</td>";}
				if(item.END<=servicetime){
					str+="<td>"+"活动已结束"+"</td>";
				}else{
					str+="<td>"+"<a onclick=\"endhuodong("+item.ID+");showmyactivity()\" class=\"btn btn-warning\">结束活动</a>"+"</td>";
				}
				
    		
    		str+=
    	
    	"</tr>";
    		
    	});

    		
             		/*var str2 = ""+
             		"<table class=\"gopageMune\">"+
    				"<tr>"+
    					"<td><span onclick=\"chagepagea();search()\">首页 &nbsp &nbsp &nbsp &nbsp </span></td><td onclick=\"chagepageb();search()\">上一页 &nbsp &nbsp &nbsp &nbsp </td><td onclick=\"chagepagec();search()\">下一页</td>"+
    				"</tr>"+
    				"</table>";	*/
             			
             		document.getElementById('allmessage').innerHTML=str;
             		/*document.getElementById('annuediv').innerHTML=str2;*/
             		
             		
             		
             		
             		
             		
             		
             	}else{
             		alert(data.message);
             	}
             	
             },
             error:function(e){
             	alert("请求失败");
                
             }
         });     

    }
	
	function endhuodong(id){
		var uname = localStorage.getItem("userName");
		var uid = localStorage.getItem("uid");

		$.ajax({
			url:address+"/Promotion/DiscardedByid",
			data:{"uname":uname,"UID":uid,"id":id},
			type:"POST",
			success:function (data){
				if(data.message=="登录超时"){
					location.href="login.html";
					return;
				}
				                showmyactivity();
				alert(data.message)
			},
			error: function (e){
				
			}
		});
	}
	
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
    return y + '-' + m + '-' + d;    
	}
	
	

function addhuodong(){
 
	var uname = localStorage.getItem("userName");
	var uid = localStorage.getItem("uid");
	document.getElementById("addactivityuid").value=uid;
	document.getElementById("addactivityuname").value=uname;
	var startnowDate = document.getElementById("startnowDate").value;
	var endtnowDate = document.getElementById("endnowDate").value;

	var strtime = new Date(startnowDate).getTime();
	var endtime = new Date(endtnowDate).getTime();
	document.getElementById("startdate").value=strtime;
	document.getElementById("enddate").value=endtime;
	var cuxiaovalue = document.getElementById("cuxiao").value;
	if(cuxiaovalue=="打折"){
		document.getElementById("cuxiaoss").value=1;
	}else{
		document.getElementById("cuxiaoss").value=2;
	}
	var form = new FormData(document.getElementById("addactivityform"));
	 $.ajax({
		 url:address+"/Promotion/add",
		 data:form,
		 type:"POST",
		 processData: false,
		 contentType: false,
		 success:function(data){
			 if(data.message=="登录超时"){
				 location.href="login.html"
			 }else{
				alert(data.message);
                showmyactivity();
			 }
		 },
		 error:function(e){
			 alert(data.message);
		 }
	 });
	
	
}


	function cuxiaotype(){
		
	
		var getcuxiao = document.getElementById("cuxiao").value

		if(getcuxiao=="打折"){
			document.getElementById("jiangjiadiv").style.display='none';
			document.getElementById("zhekoudiv").style.display='block';
        }else if(getcuxiao=="降价"){
			document.getElementById("zhekoudiv").style.display='none';
			document.getElementById("jiangjiadiv").style.display='block';
		}
	}
	
	
	function addactivity(){
	$("#addhuodong").css("display","block")
	}
	
	function closeactivity(){
	$("#addhuodong").css("display","none")
	}

	
	function showaddannue(){
		var auths= localStorage.getItem('usermessage')+"";
		var autharray = auths.split(',');
		var issuperadmin = localStorage.getItem("issuperadmin");
		if(issuperadmin==1){
			document.getElementById("addhuodongannue").style.display="block";
		}
		for(var i=0;i<autharray.length;i++){
			if(autharray[i]=="PROMOTION_ADD"){
				document.getElementById("addhuodongannue").style.display="block";
			}
		}
	}