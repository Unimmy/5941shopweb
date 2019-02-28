let uname = localStorage.getItem("userName");
let uid = localStorage.getItem("uid");
let page = 1;
let rows = 5;
let phone = '';
let istabledata=true;
let html3= `
</table>  
    <div style="float:left;padding-left:30%;padding-right:2%">
        每页显示
    <select id="thisrows">
    <option>5</option>
        <option>10</option>
        <option>15</option>
        <option>20</option>
        <option>50</option>
        <option>100</option>
        <option>200</option>
        <option>500</option>
    </select>
    条数据
</div>
<div style="width:390px;height:50px;margin:auto;float:left;"  id="annuediv">   
<button class="btn btn-primary" id="homepage">首页</button>
<button class="btn btn-primary" id="uppage">上一页</button>
<button class="btn btn-default" disabled id="onPage">第1页</button>
<button class="btn btn-primary"  id="nextpage">下一页</button>
</div>
<div style="float:left;margin-left:20px;">
    到第
    <input type="text" style="width:45px;height:30px;text-align: center;" value="1" id="thispage"/>
    页 
<input type="button"  class="btn btn-success" value="确定" id="surebtn" />
</div>
</div>
`
function openDiv(){
	$("#addyunfeixianpage").css("display","block");
}
function openDiv2(){
	$("#addrules").css("display","block");
}
function closePage(){
	$("#addyunfeixianpage").css("display","none");
	$("#addrules").css("display","none");
}
// 时间
function changestrattime(){
	let strnowDate =$("#strnowDate").val();
	// console.log(strnowDate)
	let times = new Date(strnowDate).getTime();
	$("#stardate").val(times-1000*60*60*8);  
}
function changeendtime(){
	let endnowDate =$("#endnowDate").val();
	let  times = new Date(endnowDate).getTime();
	$("#enddate").val(((times-1000*60*60*8)+1000*60*60*24)-1);
} 
//时间戳转换
function fmtDate(obj){
    obj = parseInt(obj)
    let date =  new Date(obj);
    let y = 1900+date.getYear();
    let m = "0"+(date.getMonth()+1);
    let d = "0"+date.getDate();
    return y+"-"+m.substring(m.length-2,m.length)+"-"+d.substring(d.length-2,d.length);
}
//添加实物卡
function addYouHuiQuan(){
	if(!confirm('是否继续？')){return}
	$('#setuid').val(uid)
	$('#setuname').val(uname)
	let formdate = new FormData($('#addshitkapForm')[0])
	$.ajax({
		url:address+'/OrdersCard/add',
		type:'post',
		async:false,
		data:formdate,
		processData: false,  
		contentType: false,
		cache: false,  
		success:function(res){
			alert(res.message) 
		}
	})
}
//查询全部实物卡
function selectSTKP(){
	 phone = $("#openChouJiangJilv").val()
	$.ajax({
		url:address+'/OrdersCard/list',
		type:'post',
		async:false,
		data:{UID:uid,uname:uname,phone:phone,page:page,rows:rows},
		success:function(res){
			// console.log(res)
			let html1 = `
			<table id="sample-table-2" class="table table-striped table-bordered table-hover">
			<thead>
				<tr>
					<th>实物卡名称</th>
					<th>卡片编号</th>
					<th>卡片密码</th>
					<th>初始金额</th>
					<th>剩余金额</th>
					<th>生效时间</th>
					<th>失效时间</th>
					<th>绑定用户</th>
					<th>批量编号</th>
				</tr>
			</thead> 
			<tbody id="allmessage"> 
			`
			let html2 = ''
			for({code,pwd,star,end,memberid,num,title,nummax,bcode,istabledata} of res.data){
				 html2 += `
					<tr>
						<td>${title}</td>
						<td>${code}</td>
						<td>${pwd}</td>
						<td>&yen;${nummax}</td>
						<td>&yen;${num}</td>
						<td>${fmtDate(star)}</td>
						<td>${fmtDate(end)}</td>
						<td>${fmtUn(memberid)}</td>
						<td>${bcode}</td>
					</tr> 
					</tbody>                                    
				`
				istabledata=istabledata
			} 
		var html = html1+html2
		$('#tableresponsive').html(html);
		$(html3).appendTo('#tableresponsive')
		$('#homepage').attr('onclick','selectpages()')
		$('#uppage').attr('onclick','selectprePage()')
		$('#nextpage').attr('onclick','selectnextPage()')
		$('#surebtn').attr('onclick','selectShowAll()')
		}
	})
}
//打开查询页面
function openSWKP(){
    $('#tablehead').html(''); 
	$('#tableresponsive').html('');
	page=1;
	rows=5;
     let html =`
        <div class="right">
            <input type="email" id="openChouJiangJilv" placeholder="输入用户手机号进行查询">
			<button class="btn btn-info" onclick="selectSTKP()">查询</button>
			<!--button class="btn btn-danger" onclick="showpwd()">查看卡片密码</button-->
        </div>
     `
     $('#tablehead').html(html)
	 selectSTKP()
 }
 //查询实体卡片分页
 function selectShowAll(){
    rows = $('#thisrows').val();
    page = $('#thispage').val();
	selectSTKP()
   $('#thisrows').val(rows)
   $('#thispage').val(page);
   $("#onPage").html("第"+page+"页")
}
//下一页
function selectnextPage(){
   if(!istabledata){return}
   page++;
   selectSTKP()
//    console.log(page)
	$("#thispage").val(page) 
   $("#onPage").html("第"+page+"页")
   $('#thisrows').val(rows)
}
//  上一页
function selectprePage(){
   if(page==1){return}
   page--;
   selectSTKP()
   $("#thispage").val(page)
   $("#onPage").html("第"+page+"页")
   $('#thisrows').val(rows)
}
function selectpages(){
    page=1;
	selectSTKP()
    $("#thispage").val(page)
    $("#onPage").html("第"+page+"页")
    $('#thisrows').val(rows)
}


// 过滤undefined,null,''
function fmtUn(str){
    if(str==undefined||str==null||str==''){
        return '暂无'
    }else{
        return str
    }
}
//密码安全
// function pwdhide(str){
// 	let logininfo = sessionStorage.getItem('logininfo');
// 	if(logininfo == '已登录'){return str}
// 	let pwdlength = str.length;
// 	let newpwd = '';
// 	for(let i=0;i<pwdlength;i++){
// 		newpwd+='*'
// 	} 
// 	return newpwd
// }

// function showpwd(){
// 	let pwd = prompt("请输入再次输入管理员密码");
// 	$.ajax({
// 		url:address+'/member/login',
// 		type:'post',
// 		data:{UID:1,type:1,uname:13333333333,password:pwd},
// 		success:function(res){
// 			if(res.status==200){
// 				sessionStorage.setItem('logininfo','已登录')
// 				window.location.reload()
// 			}else{
// 				alert(res.message)
// 			}
// 		}
// 	})
// }
// 添加实物卡使用规则
function addRules(){
	if(!confirm('是否继续？')){return}
	$('#suid').val(uid)
	$('#suname').val(uname)
	let formdate = new FormData($('#addshitikapianrules')[0])
	$.ajax({
		url:address+'/OrdersCardRule/add',
		type:'post',
		data:formdate,
		processData: false,  
		contentType: false,
		cache: false,  
		success:function(res){
			alert(res.message) 
		}
	})
}
 //导出报表
 function exportEx(){
	let code = prompt("请输入批量编号:");
	if(code){
		location.href=address+"/OrdersCard/Excel?code="+code+"&uname="+uname+"&UID="+uid;	
	}
}
//实物卡规则查询
function openRules(){
    $('#tablehead').html(''); 
	$('#tableresponsive').html('');
	page=1;
	rows=5;
     let html =`
        <div class="right">
            <input type="email" id="openChouJiangJilv" placeholder="输入规则编号进行查询">
			<button class="btn btn-info" onclick="selectRules()">查询</button>
        </div>
     `
    $('#tablehead').html(html)
	selectRules()
 }
 //查询全部规则
function selectRules(){
	let code = $("#openChouJiangJilv").val()
   $.ajax({
	   url:address+'/OrdersCardRule/list',
	   type:'post',
	   async:false,
	   data:{UID:uid,uname:uname,code:code,page:page,rows:rows},
	   success:function(res){
		    // console.log(res)
		   let html1 = `
		   <table id="sample-table-2" class="table table-striped table-bordered table-hover">
		   <thead>
			   <tr>
				   <th>规则编号</th>
				   <th>使用该券的最小金额</th>
				   <th>使用该券的最大金额</th>
				   <th>金额</th>
				   <th>添加时间</th>
			   </tr>
		   </thead> 
		   <tbody id="allmessage"> 
		   `
		   let html2 = ''
		   for({code,num,id,min,max,istabledata} of res.data){
				html2 += `
				   <tr>
					   <td>${code}</td>
					   <td>&yen;${min}</td>
					   <td>&yen;${max}</td>
					   <td>&yen;${num}</td>
					   <td>${fmtDate(id)}</td>
				   </tr> 
				   </tbody>                                    
			   `
			   istabledata=istabledata
		   } 
	   var html = html1+html2
	   $('#tableresponsive').html(html);
	   $(html3).appendTo('#tableresponsive')
	   $('#homepage').attr('onclick','pages()')
	   $('#uppage').attr('onclick','prePage()')
	   $('#nextpage').attr('onclick','nextPage()')
	   $('#surebtn').attr('onclick','ShowAll()')
	   }
   })
}
//查询实体卡片使用规则分页
function ShowAll(){
    rows = $('#thisrows').val();
    page = $('#thispage').val();
	selectRules()
   $('#thisrows').val(rows)
   $('#thispage').val(page);
   $("#onPage").html("第"+page+"页")
}
//下一页
function nextPage(){
   if(!istabledata){return}
   page++;
   selectRules()
//    console.log(page)
	$("#thispage").val(page) 
   $("#onPage").html("第"+page+"页")
   $('#thisrows').val(rows)
}
//  上一页
function prePage(){
   if(page==1){return}
   page--;
   selectRules()
   $("#thispage").val(page)
   $("#onPage").html("第"+page+"页")
   $('#thisrows').val(rows)
}
function pages(){
    page=1;
	selectRules()
    $("#thispage").val(page)
    $("#onPage").html("第"+page+"页")
    $('#thisrows').val(rows)
}