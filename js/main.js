var actData = {
	operate: 1,  //1表示第一次加载
	//openId: 'bauhaus',          //$.cookie("changhong_1104_skyman"),
	userinfo: null,
	elements: null,
	gamelocked: true,  //游戏锁
	eleImgs: [
		'images/ele-tv1.png',
		'images/ele-fri1.png',
		'images/ele-air1.png',
		'images/ele-tv2.png',
		'images/ele-tv3.png',
		'images/ele-tv4.png',
		'images/ele-tv5.png',
		'images/ele-fri2.png',
		'images/ele-fri3.png',
		'images/ele-fri4.png',
		'images/ele-fri5.png',
		'images/ele-air2.png',
		'images/ele-air3.png',
		'images/ele-air4.png',
		'images/ele-air5.png'
	],
	eleDetail:[
		{pro: "电视模块", img:"images/tv1_03.png", des: "4核64位 A53处理器、2核高端T860图像引擎、19核协处理器，享受快速运行、解码速度。", src: "http://wq.jd.com/item/view?sku=3612060"},
		{pro: "冰箱模块", img:"images/fridge1_03.png", des: "减恒温保鲜更新鲜；节能静音更享受日耗仅0.89度/天", src: "http://m.jd.com/product/2771002.html?resourceType=jdapp_share&resourceValue=Wxfriends&utm_source=iosapp&utm_medium=appshare&utm_campaign=t_335139774&utm_term=Wxfriends"},
		{pro: "空调模块",img:"images/aircon1_03.png", des: "流线型一体，高光塑脂机身, 顶级喷漆，触摸液晶屏，奢华大气，高贵象征。", src: "http://sale.jd.com/m/act/BusHfhQ7j1g4a3CG.html?"},

		{pro: "电视模块", img:"images/tv2_03.png", des: "想看什么说出来，人工智能语音，一台懂你的电视打造便捷生活。", src: "http://wq.jd.com/item/view?sku=2528203"},
		{pro: "电视模块", img:"images/tv3_03.png", des: "搭载画质新宠HDR高动态范围显示，让画面细节更清晰，颜色更艳丽，层次更分明", src: "http://wq.jd.com/item/view?sku=2587724"},
		{pro: "电视模块", img:"images/tv4_03.png", des: "搭载蓝牙4.0技术，可以无线连接蓝牙耳机、音响手机、PAD等移动设备", src: "http://wq.jd.com/item/view?sku=2538927"},
		{pro: "电视模块", img:"images/tv5_03.png", des: "与腾讯视频携手打造精致的视频内容，包含4K专区、UMAX专区、独播资源等高清晰度的影视内容", src: "http://wq.jd.com/item/view?sku=1927536"},
		
		{pro: "冰箱模块", img:"images/fridge2_03.png", des: "颜值高，551升豪容不容小觑；347L大冷藏+220L大冷冻+4L二星级冷冻室；", src: "http://m.jd.com/product/2771002.html?resourceType=jdapp_share&resourceValue=Wxfriends&utm_source=iosapp&utm_medium=appshare&utm_campaign=t_335139774&utm_term=Wxfriends"},
		{pro: "冰箱模块",img:"images/fridge3_03.png", des: "爱上无霜，免除霜烦恼；双循环不串味，环保风制冷均匀保鲜；", src: "http://m.jd.com/product/2771002.html?resourceType=jdapp_share&resourceValue=Wxfriends&utm_source=iosapp&utm_medium=appshare&utm_campaign=t_335139774&utm_term=Wxfriends"},
		{pro: "冰箱模块",img:"images/fridge4_03.png", des: "智能模式：智能调控，省力省心；速冻模式：急速冷冻，锁住新鲜；童锁模式：防止误触摸", src: "http://m.jd.com/product/2771002.html?resourceType=jdapp_share&resourceValue=Wxfriends&utm_source=iosapp&utm_medium=appshare&utm_campaign=t_335139774&utm_term=Wxfriends"},
		{pro: "冰箱模块",img:"images/fridge5_03.png", des: "压缩机免费10年包换；LECO净味保鲜系统；14KG强悍实力冷冻力", src: "http://m.jd.com/product/2771002.html?resourceType=jdapp_share&resourceValue=Wxfriends&utm_source=iosapp&utm_medium=appshare&utm_campaign=t_335139774&utm_term=Wxfriends"},
		
		{pro: "空调模块",img:"images/aircon2_03.png", des: "手机APP远程控制，轻轻一点，理想空气随时随地提前预约。", src: "http://sale.jd.com/m/act/BusHfhQ7j1g4a3CG.html?"},
		{pro: "空调模块",img:"images/aircon3_03.png", des: "一级能效变频节能，省电省钱新标杆。", src: "http://sale.jd.com/m/act/BusHfhQ7j1g4a3CG.html?"},
		{pro: "空调模块",img:"images/aircon4_03.png", des: "采用吸附力超强的“天然晶炭”，去除率高达99%全家畅享新鲜好空气。", src: "http://sale.jd.com/m/act/BusHfhQ7j1g4a3CG.html?"},
		{pro: "空调模块",img:"images/aircon5_03.png", des: "国家专利，0.1度精准控温，舒适恒温更节能。", src: "http://sale.jd.com/m/act/BusHfhQ7j1g4a3CG.html?"}
	],
	curExchange: null
};

var ajax = {
	getUserinfo: function(suc){
		$.ajax({
			type: "POST",
			url:"./server/core.php?type=getUserinfo",
			data: { 'openId': openId },
			dataType: 'json',
			success: suc
		})
	},
	setScore: function(data, suc) {
		$.ajax({
			type: "POST",
			url:"./server/core.php?type=setScore",
			data: data, 
			dataType: 'json',
			success: suc
		})
	},
	getElements: function(suc) {
		$.ajax({
			type: "POST",
			url:"./server/core.php?type=getElements",
			data: {},
			dataType: 'json',
			success: suc
		})
	},
	login: function(data, suc){
		$.ajax({
			type: "POST",
			url:"./server/core.php?type=login",
			data: data,
			dataType: 'json',
			success: suc
		})
	},
	numberOfPrize: function(pri, suc) {
		$.ajax({
			type: "POST",
			url:"./server/core.php?type=numberOfPrize",
			data: {'prize': pri},
			dataType: 'json',
			success: suc
		})
	},
	game: function(suc) {
		$.ajax({
			type: "POST",
			url:"./server/core.php?type=game",
			data: { 'openId': openId },
			dataType: 'json',
			success: suc
		})
	},
	gametimes: function(suc) {
		$.ajax({
			type: "POST",
			url:"./server/core.php?type=gametimes",
			data: { 'openId': openId },
			dataType: 'json',
			success: suc
		})
	},
	haveGotPrize: function(suc) {
		$.ajax({
			type: "POST",
			url:"./server/core.php?type=haveGotPrize",
			data: { 'openId': openId },
			dataType: 'json',
			success: suc
		})
	},
	appoint: function(suc){
		$.ajax({
			type: "POST",
			url:"./server/core.php?type=appoint",
			data: { 'openId': openId },
			dataType: 'json',
			success: suc
		})
	}
};

var util = {
	//b --- a+b-1
	rand: function(a, b){
		if (!b) {b = 0};
		return Math.floor(Math.random()*a) + b;
	},
	gameover: function(){
		var score = datas.player.score;
		var reward = datas.player.curRewards.map(function(value){
			return ++value;
		});
		var prereward = actData.elements;
		var html = "";
		$("#page-game .score span").text(score);
		var ele = actData.userinfo.elements;
		var elearr = ele.split(",", 15);
		var elements = "";
		var keyele = "";
		console.log(elearr);
		for(var i=0;i<reward.length;i++){
			var j = reward[i] -1;
			html += "<img src='"+ actData.eleImgs[j] +"'>";
			elearr[j]++;
		}
		$("#page-game .ele-con").html(html);
		for(var i=0;i<elearr.length;i++){
			elements = elements + elearr[i] + ",";
		}
		if (prereward.indexOf(1) > -1 && reward.indexOf(1) == -1) {
			keyele = "tv";
		} else if(prereward.indexOf(2) > -1 && reward.indexOf(2) == -1){
			keyele = "fridge";
		} else if (prereward.indexOf(3) > -1 && reward.indexOf(3) == -1) {
			keyele = "air";
		}

		var dat = {};
		dat.openId = openId;
		dat.score = score;
		dat.elements = elements;
		dat.keyele = keyele;
		JSON.stringify(dat);

		layer.open({type: 2});
		ajax.setScore(dat, function(){
			actData.userinfo.elements = elements;
			for(var i=0;i<elearr.length;i++){
				var j = i + 1;
				var cla = "#page-personal " + ".e" + j;
				$(cla).text(elearr[i]);
			}
			//更新用户信息
			ajax.getUserinfo(function(data){
				layer.closeAll();
				console.log(data);
				actData.userinfo = data;
				//actData.openId = $.cookie("changhong_1104_skyman");
				$('#page-personal .user-score span').text(data.score);
			});
		})

	}
}
$(function() {
	//var openId = getCookie('changhong_1104_openId');

	layer.open({type: 2});
	ajax.appoint(function(data){
		if (data == 1) {
			window.location.href = "http://wq.jd.com/bases/yuyue/partner?sku=2538927,3612060,3391141,2360724,2587724,2528382,2528203,1927536,2892813,2744509,2744433,2323051,3100150,2898119&returl=http://hylinkcd-ad.com/active/M2016/changhong_1104_jd/index.html";
		}
	});
	ajax.gametimes(function(data){
		layer.closeAll();
		switch(data.coupon){
			case "1":
				$("#page-personal .coupon1").show();
				break;
			case "2":
				$("#page-personal .coupon1").show();
				break;
			case "3":
				$("#page-personal .coupon1").show();
				break;
			case 1:
				$("#page-personal .coupon1").show();
				break;
			case 2:
				$("#page-personal .coupon1").show();
				break;
			case 3:
				$("#page-personal .coupon1").show();
				break;
			default:
				break;
		}
		if (data.show) {
			$("#page-coupon").show();
		}
	});

	//更新个人中心信息
	ajax.getUserinfo(function(data){
		actData.userinfo = data;
		//actData.openId = $.cookie("changhong_1104_skyman");
		$('#page-personal .user-name').text(data.nickname);
		$('#page-personal .user-header').attr('src', data.headurl);
		$('#page-personal .user-score span').text(data.score);
		var elearr = data.elements.split(',', 15);
		console.log(elearr);
		for(var i=0;i<elearr.length;i++){
			var j = i + 1;
			var cla = "#page-personal " + ".e" + j;
			$(cla).text(elearr[i]);
		}
	});

	/***************首页****************/
	//游戏操作说明
	$("#page-home .startgame").on('click', function(){
		if (actData.operate == 1) {
			actData.operate = 2;
			$("#page-operate").show();
		}else if (actData.operate == 2) {
			if (actData.gamelocked) {
				actData.gamelocked = false;
				//开始游戏
				layer.open({type: 2});
				ajax.game(function(data){
					if (data == 1) {
						ajax.getElements(function(data){
							layer.closeAll();
							var ele = [];
							if (data.thr == 0) {
								var a = util.rand(4);
								for(var i=0;i<a;i++){
									var num = util.rand(12,4);
									ele.push(num);
								}
							}else{
								ele.push(data.thr);
								var a = util.rand(3);
								for(var i=0;i<a;i++){
									var num = util.rand(12,4);
									ele.push(num);
								}
							}
							actData.elements = ele;
							$("#page-game").show();
							main.startGame();
						});
					}else{
						layer.closeAll();
						layer.open({
						    content: '今日游戏次数已用完,明天再来吧'
						    ,skin: 'msg'
						    ,time: 2 //2秒后自动关闭
						});
					}
				})
			}
			
		}
	});
	$("#page-home .personal").on('click', function(){
		$("#page-personal").show();
	});
	$("#page-home .brand").on('click', function(){
		$("#page-brand").show();
	});
	$("#page-home .rule").on('click', function(){
		$("#page-rule").show();
	});
	$("#page-rule .close").on('click', function(){
		$("#page-rule").hide();
	});
	$("#page-brand .close").on('click', function(){
		$("#page-brand").hide();
	});


	//开始游戏
	$("#page-operate .close").on('click', function(){
		//开始游戏
		if (actData.gamelocked) {
			actData.gamelocked = false;
			layer.open({type: 2});
			ajax.game(function(data){
				if (data == 1) {
					ajax.getElements(function(data){
						layer.closeAll();
						var ele = [];
						if (data.thr == 0) {
							var a = util.rand(4);
							for(var i=0;i<a;i++){
								var num = util.rand(12,4);
								ele.push(num);
							}
						}else{
							ele.push(data.thr);
							var a = util.rand(3);
							for(var i=0;i<a;i++){
								var num = util.rand(12,4);
								ele.push(num);
							}
						}
						actData.elements = ele;
						//actData.elements = [0,1];
						$("#page-operate").hide();
						$("#page-game").show();
						main.init();
					})
				}else{
					layer.closeAll();
					layer.open({
					    content: '今日游戏次数已用完,明天再来吧'
					    ,skin: 'msg'
					    ,time: 2 //2秒后自动关闭
					});
				}
			});
		}
		
	});

	/***************游戏结束页面****************/
	//返回首页
	$("#page-game .back").on('click', function() {
		$("#page-game .gameover").hide();
		$("#page-game").hide();
	});
	//分享浮层
	$("#page-game .invite").on('click', function() {
		$("#page-share").show();
	});
	//隐藏分享浮层
	$("#page-share").on('click', function() {
		$(this).hide();
	});
	//显示个人中心
	$("#page-game .prize").on('click', function() {
		$("#page-personal").show();
	});
	
	/***************个人中心页面****************/
	$("#page-personal .block1 .close").on('click', function(){
		$("#page-personal").hide();
	});

	for(var i=1;i<16;i++){
		console.log(i);
		var cla = '#page-personal .el' + i;
		$(cla).on('click', function(){
			$("#page-personal .ele-detail").show();
			var num = Number($(this).attr("class").slice(2));
			num--;
			var det = actData.eleDetail[num];
			$("#page-personal .ele-detail .tit").text(det.pro);
			$("#page-personal .ele-detail .ele-img").attr('src', det.img);
			$("#page-personal .ele-detail .ele-desc").text(det.des);
			$("#page-personal .ele-detail .buy").attr('href', det.src);
		})
	}

	$("#page-personal .ele-detail .close").on('click', function(){
		$("#page-personal .ele-detail").hide();
	});

	$("#page-personal .tv .exchange").on('click', function(){
		layer.open({
		    content: '抱歉，活动已结束'
		    ,skin: 'msg'
		    ,time: 2 //2秒后自动关闭
		});
		/*var elearr = actData.userinfo.elements.split(',', 15);
		if(elearr[0]>0 && elearr[3]>0 && elearr[4]>0 && elearr[5]>0 && elearr[6]>0){
			$('#page-personal .login').show();
			actData.curExchange = "tv";
		}else{
			layer.open({
			    content: '模块尚未集齐'
			    ,skin: 'msg'
			    ,time: 2 //2秒后自动关闭
			});
		}*/
	});

	$("#page-personal .fridge .exchange").on('click', function(){
		layer.open({
		    content: '抱歉，活动已结束'
		    ,skin: 'msg'
		    ,time: 2 //2秒后自动关闭
		});
		/*var elearr = actData.userinfo.elements.split(',', 15);
		if(elearr[1]>0 && elearr[7]>0 && elearr[8]>0 && elearr[9]>0 && elearr[10]>0){
			$('#page-personal .login').show();
			actData.curExchange = "fridge";
		}else{
			layer.open({
			    content: '模块尚未集齐'
			    ,skin: 'msg'
			    ,time: 2 //2秒后自动关闭
			});
		}*/
	});
	$("#page-personal .air .exchange").on('click', function(){
		layer.open({
		    content: '抱歉，活动已结束'
		    ,skin: 'msg'
		    ,time: 2 //2秒后自动关闭
		});
/*		var elearr = actData.userinfo.elements.split(',', 15);
		if(elearr[2]>0 && elearr[11]>0 && elearr[12]>0 && elearr[13]>0 && elearr[14]>0){
			$('#page-personal .login').show();
			actData.curExchange = "air";
		}else{
			layer.open({
			    content: '模块尚未集齐'
			    ,skin: 'msg'
			    ,time: 2 //2秒后自动关闭
			});
		}*/
	});

	$('#page-personal .login .close').on('click', function(){
		$('#page-personal .login').hide();
	});

	$('#page-personal .sprize1 .exchange').on('click', function(){
		layer.open({
		    content: '抱歉，活动已结束'
		    ,skin: 'msg'
		    ,time: 2 //2秒后自动关闭
		});
		/*if (actData.userinfo.score>5000000) {
			layer.open({type: 2});
			ajax.haveGotPrize(function(dat){
				if (dat == 0) {
					layer.closeAll();
					layer.open({
					    content: '抱歉，你已经领过奖了'
					    ,skin: 'msg'
					    ,time: 2 //2秒后自动关闭
					});
				}else{
					ajax.numberOfPrize('pri1', function(data){
						layer.closeAll();
						if (data==1) {
							actData.curExchange = 'pri1';
							$('#page-personal .login').show();
						}else{
							$("#page-personal .prize-out").show();
						}
					})
				}
			})
		}else{
			layer.open({
			    content: '积分不足！'
			    ,skin: 'msg'
			    ,time: 2 //2秒后自动关闭
			});
		}*/
	});
	$('#page-personal .sprize2 .exchange').on('click', function(){
		layer.open({
		    content: '抱歉，活动已结束'
		    ,skin: 'msg'
		    ,time: 2 //2秒后自动关闭
		});
		/*if (actData.userinfo.score>5000000) {
			layer.open({type: 2});
			ajax.haveGotPrize(function(dat){
				if (dat == 0) {
					layer.closeAll();
					layer.open({
					    content: '抱歉，你已经领过奖了'
					    ,skin: 'msg'
					    ,time: 2 //2秒后自动关闭
					});
				}else{
					ajax.numberOfPrize('pri2', function(data){
						layer.closeAll();
						if (data==1) {
							actData.curExchange = 'pri2';
							$('#page-personal .login').show();
						}else{
							$("#page-personal .prize-out").show();
						}
					})
				}
			})
		}else{
			layer.open({
			    content: '积分不足！'
			    ,skin: 'msg'
			    ,time: 2 //2秒后自动关闭
			});
		}*/
	});
	$('#page-personal .sprize3 .exchange').on('click', function(){
		layer.open({
		    content: '抱歉，活动已结束'
		    ,skin: 'msg'
		    ,time: 2 //2秒后自动关闭
		});
		/*if (actData.userinfo.score>5000000) {
			layer.open({type: 2});
			ajax.haveGotPrize(function(dat){
				if (dat == 0) {
					layer.closeAll();
					layer.open({
					    content: '抱歉，你已经领过奖了'
					    ,skin: 'msg'
					    ,time: 2 //2秒后自动关闭
					});
				}else{
					ajax.numberOfPrize('pri3', function(data){
						layer.closeAll();
						if (data==1) {
							actData.curExchange = 'pri3';
							$('#page-personal .login').show();
						}else{
							$("#page-personal .prize-out").show();
						}
					})
				}
			})
		}else{
			layer.open({
			    content: '积分不足！'
			    ,skin: 'msg'
			    ,time: 2 //2秒后自动关闭
			});
		}*/
	});

	$("#page-personal .login-sub").on('click', function(){
		var name = $("#lname").val();
		var phone = $("#lphone").val();
		var address = $("#laddress").val();
		if (/^1[34578]\d{9}$/.test(phone)) {
			if (phone && address) {
				var elearr = actData.userinfo.elements.split(",", 15);
				var elements = actData.userinfo.elements;
				var eles = "";
				//var data = {};
				switch(actData.curExchange){
					case 'tv':
						elearr[0]--;
						elearr[3]--;
						elearr[4]--;
						elearr[5]--;
						elearr[6]--;
						break;
					case 'fridge':
						elearr[1]--;
						elearr[7]--;
						elearr[8]--;
						elearr[9]--;
						elearr[10]--;
						break;
					case 'air':
						elearr[2]--;
						elearr[11]--;
						elearr[12]--;
						elearr[13]--;
						elearr[14]--;
						break;
					default:
						break;
				}
				for(var i=0;i<elearr.length;i++){
					eles = eles + elearr[i] + ',';
				}
				var data = {"openId": openId, "name": name, "phone": phone, "address": address, "prize": actData.curExchange, "elements": eles};
				layer.open({type: 2});
				ajax.login(data, function(dat){
					layer.closeAll();
					if (dat == 0) {
						layer.open({
						    content: '抱歉，你已经领过奖了'
						    ,skin: 'msg'
						    ,time: 2 //2秒后自动关闭
						});
					}else if(dat == 1){
						$("#page-personal .login").hide();
						$("#page-personal .login-suc").show();
					}else if(dat == 3){
						layer.open({
						    content: '抱歉，该奖品已被领完'
						    ,skin: 'msg'
						    ,time: 2 //2秒后自动关闭
						});
					}
				})
			}else{
				layer.open({
				    content: '信息填写不完整'
				    ,skin: 'msg'
				    ,time: 2 //2秒后自动关闭
				});
			}
		}else{
			layer.open({
			    content: '手机号码有误'
			    ,skin: 'msg'
			    ,time: 2 //2秒后自动关闭
			});
		}		
	});

	$("#page-personal .login-suc .close").on('click', function(){
		$("#page-personal .login-suc").hide();
	});
	$("#page-personal .login-suc .share").on('click', function(){
		$("#page-personal .login-suc").hide();
		$("#page-share").show();
	});
	$("#page-personal .prize-out .close").on('click', function(){
		$("#page-personal .prize-out").hide();
	});
	/***************个人中心页面END****************/

	$("#page-coupon .btn1").on("click", function() {
		$("#page-coupon").hide();
		$("#page-personal").show();
		var block6 = document.querySelector("#page-personal .block6");
		block6.scrollIntoView();
	});

	$("#page-coupon .close").on("click", function() {
		$("#page-coupon").hide();
	});


})

