 $(function(){
	 
	 //滚动条内可视区域---------------------------------------------------------------------------------------
	 $.belowthefold = function(element, settings) {
		var fold = $(window).height() + $(window).scrollTop();
		return fold <= $(element).offset().top - settings.threshold;
	};
	$.abovethetop = function(element, settings) {
		var top = $(window).scrollTop();
		return top >= $(element).offset().top + $(element).height() - settings.threshold;
	};
	$.rightofscreen = function(element, settings) {
		var fold = $(window).width() + $(window).scrollLeft();
		return fold <= $(element).offset().left - settings.threshold;
	};
	$.leftofscreen = function(element, settings) {
		var left = $(window).scrollLeft();
		return left >= $(element).offset().left + $(element).width() - settings.threshold;
	};
	$.inviewport = function(element, settings) {
		return !$.rightofscreen(element, settings) && !$.leftofscreen(element, settings) && !$.belowthefold(element, settings) && !$.abovethetop(element, settings);
	};

	$.extend($.expr[':'], {
		"below-the-fold": function(a, i, m) {
			return $.belowthefold(a, {threshold : 0});
		},
		"above-the-top": function(a, i, m) {
			return $.abovethetop(a, {threshold : 0});
		},
		"left-of-screen": function(a, i, m) {
			return $.leftofscreen(a, {threshold : 0});
		},
		"right-of-screen": function(a, i, m) {
			return $.rightofscreen(a, {threshold : 0});
		},
		"in-viewport": function(a, i, m) {
			return $.inviewport(a, {threshold : -30});
		}
	});
	//---------------------------------------------------------------------------------------------------------
	function doAnimation() {
		
		var j = -1;
		//$(".animate-element:not(.start-animation):in-viewport").each(function () {
		$(".animate-element:not(.start-animation):in-viewport").each(function () {
			var $this = $(this);

			if (!$this.hasClass("start-animation") && !$this.hasClass("animation-triggered")) {
				$this.addClass("animation-triggered");
				j++;
				setTimeout(function () {
					$this.addClass("start-animation");
					/*if($this.hasClass("skills")){
						$this.animateSkills();
					};*/
				}, 200 * j);
			};
			
		});

	};

	// !- Fire animation
	doAnimation();
	
	$(window).bind("scroll", function () {
		doAnimation();
	});
	 

	// 测飘
	
	$(function() {
		$(window).resize(function() { goTop(); });
		$(window).scroll(function() { goTop(); });
	});
	function goTop() {
		
		$(".floatfile").stop().animate({ "top": ($(window).height() + $(window).scrollTop() - ($(window).height() + $(".floatfile").height()) / 2) < 218 ? 218 :
		  $(window).height() + $(window).scrollTop() - ($(window).height() + $(".floatfile").height()) / 2
		}, 600);
	}
	
	$(".topGo").click(function(){
		$('html, body').animate({scrollTop:0},800);
	});
	
	//------------------------------------------------------------------------------------------------------------
    
});