let uname = localStorage.getItem("userName");
let uid = localStorage.getItem("uid");
let page = 1;
let rows = 5;
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
// 过滤undefined
function fmtUn(str){
    if(str==undefined){
        return '暂无'
    }else{
        return str
    }
}
//时间戳转换
function fmtDate(obj){
    obj = parseInt(obj)
    var date =  new Date(obj);
    var y = 1900+date.getYear();
    var m = "0"+(date.getMonth()+1);
    var d = "0"+date.getDate();
    return y+"-"+m.substring(m.length-2,m.length)+"-"+d.substring(d.length-2,d.length);
}
// 加载图片
function loadpic(val){
    var local =val.indexOf('/upload/images/');
    console.log(local)
if(local!=-1){
    return address + val
}else{
    return val
}
}
function openDiv(){
	$("#addyunfeixianpage").css("display","block");
}
function closePage(){
    $("#addyunfeixianpage").css("display","none");
    }
function changestrattime(){
        var strnowDate =$("#strnowDate").val();
        var times = new Date(strnowDate).getTime();
        $("#strdate").val(times-1000*60*60*8);  
    }
function changeendtime(){
        var endnowDate =$("#endnowDate").val();
        var times = new Date(endnowDate).getTime();
        $("#enddate").val(((times-1000*60*60*8)+1000*60*60*24)-1);
    } 
//添加奖品
function addJiangPing(){
    if(!confirm("是否继续添加？")){return}
    let bh = $('#add_bh').val();
    let num= $('#add_num').val();
    let title= $('#add_title').val();
    let m_num = $('#add_m_num').val();
    let imagepath = $('#add_imagepath').val();
    let a = $("#add_a").val();
    if(!bh){
        alert("奖池编号为必填项!");
        return
    }
    if(!num){
        alert("中奖几率为必填项!");
        return
    }
    if(!title){
        alert("奖品说明必填!");
        return
    }
    if(!num){
        alert("中奖几率为必填项!");
        return
    }
    if(!a &&!imagepath){
        alert("网络图片或者本地图片必须选择其一上传")
        return
    }
    $("#unamess").val(uname);
    $("#uid").val(uid);
    $
    var formdata = new FormData(document.getElementById("addGuaJiangForm"));
    $.ajax({
        url:address+'/jc/add',
        type:'post',
        data:formdata,
		cache: false,  
        processData: false,  
        contentType: false,
        success:function(res){
           if(res.status==200){
               alert(res.message);
           }else{
            alert(res.message);
           }
        },
        error:function(){
            alert("服务器繁忙...");
        }
    })
}
// 抽奖记录
 function openChouJiangJilv(){
    $('#tablehead').html(''); 
    $('#tableresponsive').html('');
     var html =`
        <div class="right">
            <input type="email" id="openChouJiangJilv" placeholder="输入用户手机号进行查询">
            <button class="btn btn-info" onclick="selectcj()">查询</button>
        </div>
     `
     $('#tablehead').html(html)
     selectcj()
 }
 function selectcj(){
    var phone = $("#openChouJiangJilv").val()
         $.ajax({
             url:address+'/cj/select',
             data:{phone:phone,UID:uid,uname:uname,rows:rows,page:page},
             type:'post',
             async:false,
             success:function(res){
                //  console.log(res)
                if(res.data.length<1){alert('暂无数据');return}
               if(res.status==200){
                var html1 = `
                <table id="sample-table-2" class="table table-striped table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>奖品名称</th>
                            <th>中奖时间</th>
                            <th>用户编号</th>
                            <th>状态</th>
                            <th>抽奖方式</th>
                            <th>当前剩余抽奖次数</th>
                            <th>中奖编号</th>
                            <th>实物奖品发放</th>
                        </tr>
                    </thead> 
                    <tbody id="allmessage">  `
                var html2 = ''
                    for({jc_name,t,id,type,istabledata,member_id,num} of res.data){
                        if(type==1){
                            type = "积分抽奖"
                        }else if(type==2){
                           type =  "活动抽奖"
                        }else{
                            type="资格获取"
                        }
                         html2 += `
                            <tr id="hiddenjc">
                                <td>${jc_name}</td>
                                <td>${fmtDate(id)}</td>
                                <td>${member_id}</td>
                                <td>${t}</td>
                                <td>${type}</td>
                                <td>${num}</td>
                                <td>${id}</td>
                                <td><button class="btn btn-warning jpfafang" onclick="updatejp(${id},'${t}','${jc_name}')">奖品发放</button></td> 
                            </tr>                                     
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
               }else{
                   alert(res.message)
               }
             },
             error:function(){
                 alert("服务器繁忙...")
             }
         })
     } 
 function ShowAll(){
     rows = $('#thisrows').val();
     page = $('#thispage').val();
    selectcj()
    $('#thisrows').val(rows)
    $('#thispage').val(page);
    $("#onPage").html("第"+page+"页")
 }
 //下一页
 function nextPage(){
    if(!istabledata){return}
    page++;
    selectcj()
    $("#thispage").val(page)
    $("#onPage").html("第"+page+"页")
    $('#thisrows').val(rows)
 }
//  上一页
function prePage(){
    if(page==1){return}
    page--;
    selectcj()
    $("#thispage").val(page)
    $("#onPage").html("第"+page+"页")
    $('#thisrows').val(rows)
 }
function pages(){
     page=1;
     selectcj()
     $("#thispage").val(page)
     $("#onPage").html("第"+page+"页")
     $('#thisrows').val(rows)
 }

 //奖品查询

 function selectJp(){
    $('#tablehead').html(''); 
    $('#tableresponsive').html('');
    page = 1;
    rows = 5
    $.ajax({
        url:address+"/jc/select",
        type:'post',
        data:{uname:uname,UID:uid},
        success:function(res){
            console.log(res)
            var html1 = `
            <table id="sample-table-2" class="table table-striped table-bordered table-hover">
                <thead>
                    <tr>
                        <th>奖池编号</th>
                        <th>奖品名称</th>
                        <th>中奖几率</th>
                        <th>奖池描述</th>
                        <th>虚拟奖品编号</th>
                        <th>开始时间</th>
                        <th>结束时间</th>
                        <th>抽奖所需积分</th>
                        <th>奖池中奖几率</th>
                        <th>奖品添加时间</th>
                        <th>奖品图片</th>
                    </tr>
                </thead> 
                <tbody id="allmessage">  `
                if(res.status==200){
                    var html2 = '';
                    for({bh,dqyz,end,imagepath,m_num,num,star,title,title_su,xn_id,id} of res.data){
                        html2 +=`
                        <tr>
                            <td>${bh}</td>
                            <td>${title}</td>
                            <td>${num}</td>
                            <td>${title_su}</td>
                            <td>${xnid(xn_id)}</td>
                            <td>${fmtDate(star)}</td>
                            <td>${fmtDate(end)}</td>
                            <td>${m_num}</td>
                            <td>${dqyz}</td>
                            <td>${fmtDate(id)}</td>
                            <td><img src="${loadpic(imagepath)}" width="60px" height="60px"></td>
                        </tr>  
                        </tbody>   
                       ` 
                    }
                    var html = html1+html2;
                    $('#tableresponsive').html(html)
                 
                }
        }
    })
 }
 function xnid(str){
     if(str==""||str==undefined||str==null){
         return '暂无';
     }else{
         return str
     }
 }
//实物奖品发放
function updatejp(id,status,title){
    if(status=='已处理'){
        if(!confirm('该物品状态为已处理，是否继续更改？')){
            return
        }
    }
    if(title == '谢谢参与'){alert('该奖品不可发放!');return}
    var zip_code =  prompt('请输入快递单号');
    if(zip_code==null){return}
    if(!confirm("确定发放?")){return}
    $.ajax({
        url:address+'/Cj_address/update_jp',
        type:'post',
        data:{
            id:id,
            zip_code:zip_code,
            uname:uname,
            UID:uid
        },
        success:function(res){
            console.log(res)
           if(res.status==200){
               alert(res.data)
           }else{
               alert(res.message)
           }
        }
    })
}

//查询状态
function openselectjp(){
    $('#tablehead').html(''); 
    $('#tableresponsive').html('');
    page = 1;
    rows = 5;
     var html =`
        <div class="right">
            <input type="email" id="openChouJiangJilv" placeholder="输入用户手机号进行查询">
            <button class="btn btn-info" onclick="selectjp()">查询</button>
        </div>
     `
     $('#tablehead').html(html)
     selectjp()
 }
function selectjp(){
    var phone = $("#openChouJiangJilv").val()
         $.ajax({
             url:address+'/Cj_address/select_jp',
             data:{phone:phone,UID:uid,uname:uname,rows:1000,page:page},
             type:'post',
             async:false,
             success:function(res){
                //  console.log(res)
                if(res.data.length<1){alert('暂无数据');return}
               if(res.status==200){
                var html1 = `
                <table id="sample-table-2" class="table table-striped table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>用户编号</th>
                            <th>收货人姓名</th>
                            <th>收货电话</th>
                            <th>收货人地址</th>
                            <th>快递单号</th>
                            <th>奖品名称</th>
                            <th>奖品编号</th>
                        </tr>
                    </thead> 
                    <tbody id="allmessage">  `
                var html2 = ''
                    for({MEMBER_NAME,JC_ID,ZIP_CODE,JC_TITLE,MEMBER_ID,MEMBER_ADDRESS,MEMBER_PHONE} of res.data){
                         html2 += `
                            <tr>
                                <td>${MEMBER_ID}</td>
                                <td>${MEMBER_NAME}</td>
                                <td>${MEMBER_PHONE}</td>
                                <td>${MEMBER_ADDRESS}</td>
                                <td>${ZIP_CODE}</td>
                                <td>${fmtUn(JC_TITLE)}</td> 
                                <td>${JC_ID}</td>
                            </tr>                                        
                        `
                        istabledata=istabledata
                    } 
                var html = html1+html2
              $('#tableresponsive').html(html);
               }else{
                   alert(res.message)
               }
             },
             error:function(){
                 alert("服务器繁忙...")
             }
         })
 }
//查询收货地址
function openCjaddress(){
    $('#tablehead').html(''); 
    $('#tableresponsive').html('');
    page = 1;
    rows = 5
     var html =`
        <div class="right">
            <input type="email" id="openChouJiangJilv" placeholder="输入用户手机号进行查询">
            <button class="btn btn-info" onclick="Cjaddress()">查询</button>
        </div>
     `
     $('#tablehead').html(html)
     Cjaddress()
}
function Cjaddress(){
    var phone = $("#openChouJiangJilv").val()
         $.ajax({
             url:address+'/Cj_address/select',
             data:{phone:phone,UID:uid,uname:uname,rows:1000,page:page},
             type:'post',
             async:false,
             success:function(res){
                 console.log(res)
                if(res.data.length<1){alert('暂无数据');return}
               if(res.status==200){
                var html1 = `
                <table id="sample-table-2" class="table table-striped table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>用户编号</th>
                            <th>收货人姓名</th>
                            <th>收货电话</th>
                            <th>收货人地址</th>
                            <th>创建时间</th>
                        </tr>
                    </thead> 
                    <tbody id="allmessage">  `
                var html2 = ''
                    for({MEMBER_NAME,MEMBER_ID,MEMBER_ADDRESS,MEMBER_PHONE,ID} of res.data){
                         html2 += `
                            <tr>
                                <td>${MEMBER_ID}</td>
                                <td>${MEMBER_NAME}</td>
                                <td>${MEMBER_PHONE}</td>
                                <td>${MEMBER_ADDRESS}</td>
                                <td>${fmtDate(ID)}</td>
                            </tr>                                        
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
               }else{
                   alert(res.message)
               }
             },
             error:function(){
                 alert("服务器繁忙...")
             }
         })
 }
//查询地址分页

function selectShowAll(){
    rows = $('#thisrows').val();
    page = $('#thispage').val();
    Cjaddress()
   $('#thisrows').val(rows)
   $('#thispage').val(page);
   $("#onPage").html("第"+page+"页")
}
//下一页
function selectnextPage(){
   if(istabledata){return}
   page++;
   Cjaddress()
   $("#thispage").val(page)
   $("#onPage").html("第"+page+"页")
   $('#thisrows').val(rows)
}
//  上一页
function selectprePage(){
   if(page==1){return}
   page--;
   Cjaddress()
   $("#thispage").val(page)
   $("#onPage").html("第"+page+"页")
   $('#thisrows').val(rows)
}
function selectpages(){
    page=1;
    Cjaddress()
    $("#thispage").val(page)
    $("#onPage").html("第"+page+"页")
    $('#thisrows').val(rows)
}



//指定免费抽奖次数
function openDiv2(){
   $("#addfreenum").css('display','block');
}
function closePage2(){
    $("#addfreenum").css('display','none');
    }
function addfreenum(){
    if(!confirm("是否继续?")){return }
    $('#username').val(uname)
    $('#uide').val(uid)
    var forms = $("#addfree")[0]
let formdata = new FormData(forms)
    $.ajax({
        url:address+'/cj/add',
        type:'post',
        data:formdata,
		cache: false,  
        processData: false,  
        contentType: false,
        success:function(res){
            alert(res.message)
        }
    })
}
//查询指定时间段内可用的奖池
function toSecond(val){
    if(val=='star'){
        var star =  $('#starttime').val()
        star = new Date(star).getTime()
        $("#begin").val(star-1000*60*60*8)
    }
  if(val == 'end'){
    var end =  $('#endtime').val()
    end = new Date(end).getTime()
    $('#ending').val(end-1000*60*60*8 )
  }
   
}
function openkeyAll(){
    $('#tablehead').html(''); 
    $('#tableresponsive').html('');
    page = 1;
    rows = 5
     var html =`
        <div class="d-flex">
            <div class="col-sm-2">
                开始时间:<input type="date" onchange="toSecond('star')"  id="starttime"/> 
                <input type="hidden" id="begin"> 
            </div>
            <div class="col-sm-2">
               结束时间: <input type="date" onchange="toSecond('end')"  id="endtime"/>
               <input type="hidden" id='ending'>    
            </div>
            <button class="btn btn-info" onclick="keyAll()">查询</button>
        </div>
     `
     $('#tablehead').html(html)
     keyAll()
}
function keyAll(){
    var phone = $("#openChouJiangJilv").val()
    var star =  $("#begin").val()
    var end = $("#ending").val()
         $.ajax({
             url:address+'/jc/getkeyAll',
             data:{phone:phone,UID:uid,uname:uname,star:star,end:end},
             type:'post',
             async:false,
             success:function(res){
                //  console.log(res)
                if(res.data.length<1){alert('暂无数据');return}
               if(res.status==200){
                var html1 = `
                <table id="sample-table-2" class="table table-striped table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>奖池编号</th>
                            <th>奖池说明</th>
                            <th>所需积分</th>
                            <th>奖池的中奖几率</th>
                        </tr>
                    </thead> 
                    <tbody id="allmessage">  `
                var html2 = ''
                    for({BH,TITLE_SU,M_NUM,DQYZ} of res.data){
                         html2 += `
                            <tr>
                                <td>${BH}</td>
                                <td>${TITLE_SU}</td>
                                <td>${M_NUM}</td>
                                <td>${DQYZ}</td>
                            </tr>  
                            </tbody>                                      
                        `
                    } 
                var html = html1+html2
              $('#tableresponsive').html(html);
               }else{
                   alert(res.message)
               }
             },
             error:function(){
                 alert("服务器繁忙...")
             }
         })
 }
//  查询系统当前可用奖池
function openkeySystem(){
    $('#tablehead').html(''); 
    $('#tableresponsive').html('');
    page = 1;
    rows = 5
    keySystem()
}
function keySystem(){
         $.ajax({
             url:address+'/jc/getkey_system',
             data:{UID:uid,uname:uname},
             type:'post',
             async:false,
             success:function(res){
                //  console.log(res)
                if(res.data.length<1){alert('暂无数据');return}
               if(res.status==200){
                var html1 = `
                <table id="sample-table-2" class="table table-striped table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>奖池编号</th>
                            <th>奖池说明</th>
                            <th>所需积分</th>
                            <th>奖池的中奖几率</th>
                        </tr>
                    </thead> 
                    <tbody id="allmessage">  `
                var html2 = ''
                    for({BH,TITLE_SU,M_NUM,DQYZ} of res.data){
                         html2 += `
                            <tr>
                                <td>${BH}</td>
                                <td>${TITLE_SU}</td>
                                <td>${M_NUM}</td>
                                <td>${DQYZ}</td>
                            </tr>  
                            </tbody>                                      
                        `
                    } 
                var html = html1+html2
              $('#tableresponsive').html(html);
               }else{
                   alert(res.message)
               }
             },
             error:function(){
                 alert("服务器繁忙...")
             }
         })
 }
