function addGuanggao(){
	
	var uid = localStorage.getItem("uid");
	var uname = localStorage.getItem("userName");
	document.getElementById("unamess").value=uname;
	document.getElementById("uidss").value=uid;
	var indexs ;
	var selectkey = document.getElementById("addselectkey").value;

	 if(selectkey=="首页轮播图"){
		indexs=1;
	}
	else if(selectkey=="首页弹出广告图"){
		indexs=2;
	}
	else if(selectkey=="大分类轮播图"){
		indexs=-1;
	}
	else if(selectkey=="细分类轮播图"){
		indexs=-2;
	}
	else if(selectkey=="细类小图"){
		indexs=-3;
	}
	else if(selectkey=="商品列表广告图"){
		indexs=3;
	}
	else if(selectkey=="首页轮播图下面的图片"){
		indexs=4;
	}
	else if(selectkey=="经销商广告图"){
		indexs=11;
	}
	else if(selectkey=="线上店主广告图"){
		indexs=12;
	}
	else{
		indexs=0;
	}
	document.getElementById("addinputkey").value=indexs;
	var formdata = new FormData(document.getElementById("addGuanggaoform"));
	
	$.ajax({
		url:address+"/Advertisement/add",
		type:"POST",
		data:formdata,
		cache: false,  
        processData: false,  
        contentType: false,
		success:function(data){
			if(data.message=="登陆超时"){
				location.href="login.html"
			}else{
				alert(data.message);
			}
		},
		errot:function(e){
			alert("请求失败");
		}
	});
}

function updGuanggao(){
	var indexs ;
	var selectkey = document.getElementById("selectkey").value;

	 if(selectkey=="首页轮播图"){
		indexs=1;
	}
	else if(selectkey=="精选商品轮播图"){
		indexs=2;
	}
	else if(selectkey=="大分类轮播图"){
		indexs=-1;
	}
	else if(selectkey=="细分类轮播图"){
		indexs=-2;
	}
	else if(selectkey=="细类小图"){
		indexs=-3;
	}else{
		indexs=0;
	}
	
	document.getElementById("inputkey").value=indexs;
	var uid = localStorage.getItem("uid");
	var uname = localStorage.getItem("userName");
	document.getElementById("unamess").value=uname;
	document.getElementById("uidss").value=uid;
	
	var formdata = new FormData(document.getElementById("addGuanggaoform"));
	$.ajax({
		url:address+"/Advertisement/update",
		type:"POST",
		data:formdata,
		cache: false,  
        processData: false,  
        contentType: false,
		success:function(data){
			if(data.message=="登陆超时"){
				location.href="login.html"
			}else{
				alert(data.message);
			}
		},
		errot:function(e){
			alert("请求失败");
		}
	});
}