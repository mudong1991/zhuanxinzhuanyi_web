$(function(){
	//小指向图标变换
	function icon_down(icon_class){
		$(icon_class).removeClass("fa fa-caret-up");
		$(icon_class).addClass("fa fa-caret-down");
	}
	function icon_up(icon_class){
		$(icon_class).removeClass("fa fa-caret-down");
		$(icon_class).addClass("fa fa-caret-up");
	}
	$(".help-center").on("mouseover", function(){
		icon_up(".help-icon-down");
	})
	$(".help-center").on("mouseout", function(){
		icon_down(".help-icon-down");
	})
	$(".shop-car").on("mouseover", function(){
		icon_up(".shop-car-icon-down");
	})
	$(".shop-car").on("mouseout", function(){
		icon_down(".shop-car-icon-down");
	})
	
	//轮播广告
	var bannerSlider = new Slider($('#banner_tabs'), {
		time: 5000,
		delay: 400,
		event: 'hover',
		auto: true,
		mode: 'fade',
		controller: $('#bannerCtrl'),
		activeControllerCls: 'active'
	});
	$('#banner_tabs .flex-prev').click(function() {
		bannerSlider.prev()
	});
	$('#banner_tabs .flex-next').click(function() {
		bannerSlider.next()
	});
	
	//网站公告
	function notice_over(num){
		var notice_body=[];
		notice_body[0]=$("#notice-body-0");
		notice_body[1]=$("#notice-body-1");
		var notice_head=[];
		notice_head[0]=$("#notice-head-0");
		notice_head[1]=$("#notice-head-1");
		for(var i=0;i<2;i++) 
		{
			if(i!=num)
			{
				notice_body[i].addClass("off");
				notice_head[i].removeClass("notice-head-active");
			}
			else{
				notice_body[i].removeClass("off");
				notice_head[i].addClass("notice-head-active");
			}
		}
	};
	$(".notice-list-0").on("mouseover", function(){
		notice_over(0);
	})
	$(".notice-list-1").on("mouseover", function(){
		notice_over(1);
	})
	
	
})
