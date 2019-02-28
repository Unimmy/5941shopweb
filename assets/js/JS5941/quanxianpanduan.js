function quanxianpanduan(){
	var userName = localStorage.getItem("userName");
	if(userName==""||userName==null||userName==undefined){
		return;
	}else{
		var auths= localStorage.getItem('usermessage')+"";
		var autharray = auths.split(',');
		var issuperadmin = localStorage.getItem("issuperadmin");	
		if(issuperadmin==1){
				document.getElementById("issuperadmin").href="";
		}else{
			for(var i=0;i<autharray.length;i++){
				console.log(autharray[i]);
				
				 
			//商品与订单模块 ****************************************************************************
				//商品查询权限控制
				
				if(autharray[i]=="/commodity/selectBySelect"){
					$("#SPYDD").css("display","block");
						$("#SPYDD_SPLB").css("display","block");
				}
				
				//商品导入权限控制
				if(autharray[i]=="/commodityback/readCommodityExcel"){
					$("#SPYDD").css("display","block");
						$("#SPYDD_SPLB").css("display","block");
				}
				
				//订单列表权限控制
				if(autharray[i]=="/orders/selectbytype"){
					$("#SPYDD").css("display","block");
						$("#SPYDD_DDLB").css("display","block");
				}
				
				//订单查询权限控制
				if(autharray[i]=="/web/selectPurchase/newselect"){
					$("#SPYDD").css("display","block");
						$("#SPYDD_DDCX").css("display","block");
				}
				
				//退货列表权限控制
				if(autharray[i]=="/orders/ListReturn"){
					$("#SPYDD").css("display","block");
						$("#SPYDD_THLB").css("display","block");
				}
				
				//单品退货列表权限控制
				if(autharray[i]=="/Returngoods/shoplist"){
					$("#SPYDD").css("display","block");
						$("#SPYDD_DPTHLB").css("display","block");
				}
				
				//退款查询权限控制
				if(autharray[i]=="/Refundresponse/select"){
					$("#SPYDD").css("display","block");
						$("#SPYDD_TKCX").css("display","block");
				}
				
				
			//店铺管理模块 ****************************************************************************
			
				//添加代理商权限控制 
				if(autharray[i]=="/shop/addto"){
					$("#DPGL").css("display","block");
						$("#DPGL_TJDLS").css("display","block");
				}
				
				//添加店铺权限控制 
				if(autharray[i]=="/shop/add"){
					$("#DPGL").css("display","block");
						$("#DPGL_TJDP").css("display","block");
				}
				
				//店铺批量导入权限控制 
				if(autharray[i]=="/shopback/readShopExcel"){
					$("#DPGL").css("display","block");
						$("#DPGL_DPDR").css("display","block");
				}
				
				//店铺导入预览权限控制 
				if(autharray[i]=="/shopback/selectall"){
					$("#DPGL").css("display","block");
						$("#DPGL_DRYL").css("display","block");
				}
				
				//店铺列表查询权限控制 
				if(autharray[i]=="/shop/selectall"){
					$("#DPGL").css("display","block");
						$("#DPGL_DPLB").css("display","block");
				}
				
				//推荐人移交权限控制 
				if(autharray[i]=="/Friends/update"){
					$("#DPGL").css("display","block");
						$("#DPGL_TJRYJ").css("display","block");
				}
				
			
				//添加店员权限控制 
				if(autharray[i]=="/Clerk/add"){
					$("#DPGL").css("display","block");
						$("#DPGL_TJDY").css("display","block");
				}
				
				//层级关系查询权限控制 
				if(autharray[i]=="/web/clerk2"){
					$("#DPGL").css("display","block");
						$("#DPGL_DGGS").css("display","block");
				}
			
			
			//经销商/店主 ****************************************************************************
				//经销商列表权限控制 
				if(autharray[i]=="/Identity/select"){
					$("#JXSGL").css("display","block");
						$("#JXSGL_JXSLB").css("display","block");
				}
				
				//添加结算规则权限控制 
				if(autharray[i]=="/Programme/add"){
					$("#JXSGL").css("display","block");
						$("#JXSGL_TJJSGZ").css("display","block");
				}
				
					//结算规则查询权限控制 
				if(autharray[i]=="/Programme/select"){
					$("#JXSGL").css("display","block");
						$("#JXSGL_JSGZCX").css("display","block");
				}
				
			//用户管理模块 ****************************************************************************
				//用户列表权限控制
				if(autharray[i]=="/member/selectmember"){
					$("#YHGL").css("display","block");
						$("#YHGL_YHLB").css("display","block");
				}
				
			//促销活动模块 ****************************************************************************
				//促销活动管理权限控制
				if(autharray[i]=="/Promotion/add"){
					$("#CXHD").css("display","block");
						$("#CXHD_HDGL").css("display","block");
				}
				
				//促销活动查询权限控制
				if(autharray[i]=="/Promotion/select"){
					$("#CXHD").css("display","block");
						$("#CXHD_HDCX").css("display","block");
				}
				
				//优惠券查询权限控制
				if(autharray[i]=="/Coupon/select"){
					$("#CXHD").css("display","block");
						$("#CXHD_YHQ").css("display","block");
				}
				
				//优惠券查询权限控制
				if(autharray[i]=="/Coupon/select"){
					$("#CXHD").css("display","block");
						$("#CXHD_YHQ").css("display","block");
				}
				
				//优惠券查询权限控制
				if(autharray[i]=="/Coupon/select"){
					$("#CXHD").css("display","block");
						$("#CXHD_YHQ").css("display","block");
				}
				
				
				
				//秒杀查询权限控制
				if(autharray[i]=="/ms/select"){
					$("#CXHD").css("display","block");
						$("#CXHD_MS").css("display","block");
				}
				
				
				
				
				
				
				//预售查询权限控制
				if(autharray[i]=="/ys/select"){
					$("#CXHD").css("display","block");
						$("#CXHD_YS").css("display","block");
				}
				
				
				
				
				//拼团查询权限控制
				if(autharray[i]=="/pdd/select"){
					$("#CXHD").css("display","block");
						$("#CXHD_PT").css("display","block");
				}
				
				
			
			//报表管理模块 ****************************************************************************
				//销售报表查询权限控制
				if(autharray[i]=="/Orderrelevance/select"){
					$("#BBGL").css("display","block");
						$("#BBGL_XSBB").css("display","block");
				}
				
				//退货报表查询权限控制
				if(autharray[i]=="/web/Returngoods/select"){
					$("#BBGL").css("display","block");
						$("#BBGL_THBB").css("display","block");
				}
				
				//店铺统计报表查询权限控制
				if(autharray[i]=="/data/shopMember"){
					$("#BBGL").css("display","block");
						$("#BBGL_DPTJ").css("display","block");
				}
				
				//交易订单报表查询权限控制
				if(autharray[i]=="/Orderrelevance/selectByshopORmember"){
					$("#BBGL").css("display","block");
						$("#BBGL_JYDD").css("display","block");
				}
				
				//店员业绩报表查询权限控制
				if(autharray[i]=="/orders/selectbyclerk"){
					$("#BBGL").css("display","block");
						$("#BBGL_DYYJ").css("display","block");
				}
						
				//财务报表查询权限控制
				if(autharray[i]=="/data/AccountSelect"){
					$("#BBGL").css("display","block");
						$("#BBGL_CWBB").css("display","block");
				}
				
			
			//结算中心管理模块 ****************************************************************************
				//结算报表查询权限控制
				if(autharray[i]=="/web/Recommend2"){
					$("#JSZX").css("display","block");
						$("#JSZX_JSBB").css("display","block");
				}
				
				//结算规则设置权限控制
				if(autharray[i]=="/OrdersRule/add"){
					$("#JSZX").css("display","block");
						$("#JSZX_GZSZ").css("display","block");
				}
				
				//结算规则查询权限控制
				if(autharray[i]=="/OrdersRule/select"){
					$("#JSZX").css("display","block");
						$("#JSZX_GZCX").css("display","block");
				}
				
				//佣金合计查询权限控制
				if(autharray[i]=="/data/SumRecommend2"){
					$("#JSZX").css("display","block");
						$("#JSZX_YJHJ").css("display","block");
				}
				
				//佣金明细查询权限控制
				if(autharray[i]=="/Recommend2/list"){
					$("#JSZX").css("display","block");
						$("#JSZX_YJMX").css("display","block");
				}
				
				
			//权限管理模块 ****************************************************************************
				//权限设置权限控制
				if(autharray[i]=="/auths/select"){
					$("#QXGL").css("display","block");
						$("#QXGL_QXSZ").css("display","block");
				}
				
				//角色管理权限控制
				if(autharray[i]=="/groupby/selectall"){
					$("#QXGL").css("display","block");
						$("#QXGL_JSGL").css("display","block");
				}
				
					//角色权限查询权限控制
				if(autharray[i]=="/groupby/select"){
					$("#QXGL").css("display","block");
						$("#QXGL_JSCX").css("display","block");
				}
				
			
			//图片管理模块 ****************************************************************************
				//查询图片权限控制
				if(autharray[i]=="/Advertisement/select"){
					$("#TPGL").css("display","block");
						$("#TPGL_TPCX").css("display","block");
				}
				
				//添加图片权限控制
				if(autharray[i]=="/Advertisement/add"){
					$("#TPGL").css("display","block");
						$("#TPGL_TJTP").css("display","block");
				}
			
				//大类别图片导入权限控制
				if(autharray[i]=="/Advertisement/maxExcel"){
					$("#TPGL").css("display","block");
						$("#TPGL_TPDR").css("display","block");
				}
				
				//细类别图片导入权限控制
				if(autharray[i]=="/Advertisement/minExcel"){
					$("#TPGL").css("display","block");
						$("#TPGL_TPDR").css("display","block");
				}
			
			
			//评价反馈模块 ****************************************************************************
				//查询评价权限控制
				if(autharray[i]=="/evaluate/select"){
					$("#PJYFK").css("display","block");
						$("#PJYFK_PJCX").css("display","block");
				}
			
				//修改评价权限控制
				if(autharray[i]=="/evaluate/update"){
					$("#PJYFK").css("display","block");
						$("#PJYFK_PJXG").css("display","block");
				}
			
				//反馈信息权限控制
				if(autharray[i]=="/Feedback/select"){
					$("#PJYFK").css("display","block");
						$("#PJYFK_FKXX").css("display","block");
				}
				
			//库存管理模块 ****************************************************************************
				//库存查询权限控制
				if(autharray[i]=="/stock/selectall"){
					$("#KCGL").css("display","block");
						$("#KCGL_KCCX").css("display","block");
				}
				
				//库存导入权限控制
				if(autharray[i]=="/stock/readStockExcel"){
					$("#KCGL").css("display","block");
						$("#KCGL_KCDR").css("display","block");
				}
				
				//库存添加权限控制
				if(autharray[i]=="/stock/add"){
					$("#KCGL").css("display","block");
						$("#KCGL_TJKC").css("display","block");
				}
				
				//条件上下架权限控制
				if(autharray[i]=="/stock/updatebycommodity"){
					$("#KCGL").css("display","block");
						$("#KCGL_TJSXJ").css("display","block");
				}
				
				//一键上下架权限控制
				if(autharray[i]=="/stock/updatebyshopcode"){
					$("#KCGL").css("display","block");
						$("#KCGL_YJSXJ").css("display","block");
				}
				
				//库存修改权限控制
				if(autharray[i]=="/stock/update"){
					$("#KCGL").css("display","block");
						$("#KCGL_KCXG").css("display","block");
				}
				
				
					
			//佣金提现模块 ****************************************************************************
				//支付宝列表权限控制
				if(autharray[i]=="/zfb/list"){
					$("#YJTX").css("display","block");
						$("#YJTX_ZFBLB").css("display","block");
				}
				
				//提现列表权限控制
				if(autharray[i]=="/Putforward/list"){
					$("#YJTX").css("display","block");
						$("#YJTX_TXLB").css("display","block");
				}
				
			//系统管理模块 ****************************************************************************
				//修改密码权限控制
				if(autharray[i]=="/member/update"){
					$("#XTSS").css("display","block");
						$("#XTSS_XGMM").css("display","block");
				}
				
				//版本管理权限控制
				if(autharray[i]=="/version/select"){
					$("#XTSS").css("display","block");
						$("#XTSS_BBGL").css("display","block");
				}
				
				//版本管理权限控制
				if(autharray[i]=="/version/add"){
					$("#XTSS").css("display","block");
						$("#XTSS_BBGL").css("display","block");
				}
				
				//帮助中心权限控制
				if(autharray[i]=="/help/selectall"){
					$("#XTSS").css("display","block");
						$("#XTSS_BZZX").css("display","block");
				}
				
				
				
					
			}
		}
	}
}
