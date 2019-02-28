


function addactivity(){
	//uid uname 为登录账号和随机识别码
	var uname = localStorage.getItem("userName");
	var uid = localStorage.getItem("uid");
	document.getElementById("addactivityuid").value=uid;
	document.getElementById("addactivityuname").value=uname;
	var startnowDate = document.getElementById("startnowDate").value;
	var endtnowDate = document.getElementById("endnowDate").value;
	var strtime = new Date(startnowDate).getTime()-(1000*60*60*8);
	var endtime = new Date(endtnowDate).getTime()-(1000*60*60*8)+(1000*60*60*24);
	document.getElementById("startdate").value=strtime;
	document.getElementById("enddate").value=endtime;
	if(isNaN(document.getElementById("startdate").value)==true){
		document.getElementById("startdate").value=null;
	}
	if(isNaN(document.getElementById("enddate").value)==true){
		document.getElementById("enddate").value=null;
	}
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
				 location.href="login.html";
				 return ;
			 }
			 if(data.status!=200){
				alert(data.message);
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
