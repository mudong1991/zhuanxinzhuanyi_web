$(function(){
	/*
	 *index.html的js脚本
	 * ******************************************************************/
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
	
	/*
	 *product.html的js脚本
	 * ******************************************************************/
	//产品筛选
	$(".product-filter-option span").on("click", function(){
		$(this).parent().children("span").removeClass('filter-active');
		$(this).addClass("filter-active");
	})
	//	产品排序
	$(".product-sort p").on("click", function(){
		$(".product-sort p").removeClass('red');
		$(this).addClass('red');
	})
	
	
	/*
	 *case.html的js脚本
	 * ******************************************************************/
	//案例筛选
	$(".case-filter-option span").on("click", function(){
		$(this).parent().children("span").removeClass('filter-active');
		$(this).addClass("filter-active");
	})
	//案例排序
	$(".case-sort p").on("click", function(){
		$(".case-sort p").removeClass('red');
		$(this).addClass('red');
	})
	
	/*
	 *goods.html的js脚本
	 * ******************************************************************/
	//商品型号选择
	$(".goods-model li:first-child").addClass("active");
	$(".goods-model li").on("click", function (){
		$(".goods-model li").removeClass("active");
		$(this).addClass("active");
		
		var xh_img_src = $(this).children("img").attr("src");
		$("#spec-n1 img").attr("src", xh_img_src);
		$("#spec-n1 img").attr("jqimg", xh_img_src);
	})
	
	//	商品数量加减
	$("#goods-count").val(1);
	var goods_count_total = $(".goods-counts-total").text();
	goods_count_total = parseInt(goods_count_total);
	$("#add-goods").on("click", function (){
		var i = $("#goods-count").val();
		i = parseInt(i)+1;
		if(i > goods_count_total){
			i = goods_count_total;
		}
		$("#goods-count").val(i);
	})
	$("#reduce-goods").on("click", function (){
		var i = $("#goods-count").val();
		i = parseInt(i) - 1;
		if(i < 1){
			i = 1;
		}
		$("#goods-count").val(i);
	})
	$("#goods-count").on("keyup", function (){
		var i = $("#goods-count").val();
		i = parseInt(i);
		if(i > goods_count_total){
			$("#goods-count").val(goods_count_total);
		}
		if(i < 1){
			$("#goods-count").val(1);
		}
	})
})
