
												function sendlogin(){
													
													 var uid=new Date().getTime();
													var unames = $("#unames").val();
													var passwords = $("#passwords").val();
													var uids = new Date().getTime();
													   $.ajax({
											                url:address+"/member/login",
											                type:"POST",
											                data:{"uname":unames,"password":passwords,"UID":uids,"type":1,nohuancun:Math.random()},
											                success:function(data){

											                	if(data.status == '200'){
																	if(data.data.mShop!=null){
																		localStorage.setItem('shopid',(data.data.mShop.id));
																		localStorage.setItem('superid',(data.data.mShop.superid))
																	}else{
																		localStorage.setItem('shopid',"-99999");
																	
																	}
																
																	localStorage.setItem("uid",uid);
											                		localStorage.setItem('userName',$('.userName').val());
																	localStorage.setItem('usermessage',data.data.auths);
																	localStorage.setItem('issuperadmin',data.data.superadmin);
																	location.href="indexs.html";
																
											                	}else{
																	
											                		alert(data.message);
											                	}
											                	
											                },
											                error:function(e){
											                	alert("登录失败");
											                   
											                }
											            });        
												}


        document.body.addEventListener('keyup', function (e) {
            console.log(e)
            if (e.keyCode == '13') {
               sendlogin();
            }
        });

											
												
											
										
