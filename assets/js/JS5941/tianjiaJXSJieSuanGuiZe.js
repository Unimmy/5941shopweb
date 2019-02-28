 var uid = localStorage.getItem("uid");
var uname = localStorage.getItem("userName");
function addjiesuanguize(){

 var shoponeid = $("#shoponeid").val();
  var shopone = $("#shopone").val();
   var shopto = $("#shopto").val();
    var shop = $("#shop").val();
     var systemone = $("#systemone").val();
	  var clerk = $("#clerk").val();
	
	$.ajax({
		
		url:address+"/Programme/add",
		data:{"onlineshopkeeper":shoponeid,"shopone":shopone,"shopto":shopto,"shop":shop,"systemone":systemone,"sales":clerk,"uname":uname,"UID":uid},
		type:"POST",
		success:function(data){
			if(data.message=="登录超时"){
					location.href="login.html";
					return;
			}
			alert(data.message);
		},
		error:function(e){
		}
			
	});
	
}

function chagetypes(){
	var types = document.getElementById("selectContent").value;
	if(types=="门店直销"){
		document.getElementById("typexz").value=2;
	}else{
		document.getElementById("typexz").value=1;
	}
}