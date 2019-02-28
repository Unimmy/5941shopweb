// var address = "http://123.207.147.134:8091"; //正式服务器地址
var address = "http://ZSACK6GQJP55CWX:8091"; //本地服务器地址
//var address = "http://114.116.88.94:8092";   //测试服务器地址

function setbody(id){
	if(id==1){
		$("body").css("background","#fff");
	}else{
		$("body").css("background","#1d2024");
	}
}
setbody(1);