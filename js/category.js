$(document).ready(function() {
	
	categoryUnfold();
	
	function categoryUnfold() {
		$(".category-list-link").filter(function() {
			if($(this).siblings(".category-list-child").length > 0)
				//$(this).parent().css("list-style", "circle");
				$(this).parent().css("list-style-image","url('/assets/img/category-unfold-16x16.png')");
				//console.log($(this).text());
		});
		
		//点击含有子标签category-list-child的category-list-link标签时，不进行跳转
		$(".category-list-link").filter(function() {
			return $(this).siblings(".category-list-child").length > 0
		}).attr("href", "javascript:void(0)");
		
		//含有子标签category-list-child的category-list-link标签将自动隐藏子标签
		$(".category-list-link").filter(function() {
			if($(this).siblings(".category-list-child").length > 0)
				$(this).siblings(".category-list-child").hide();
		});	
		
		//点击含有子标签category-list-child的category-list-link标签时，将隐藏子标签展开
		$(".category-list-link").click(function() {
			$(this).siblings(".category-list-child").slideToggle();
		});
	}

	function category_js () {
		$("<div class='display' style='float: left'> &nbsp>&nbsp </div>").prependTo(".category-list-item");
		$(".category-list-child").css("display","none");
	  // .posts-expand .post-body ul li
	   
		// $(".posts-expand .post-body ul  li .category-list-link ").first().css("font-weight","bold");
		$(".posts-expand .post-body ul .category-list-item ").first().children(".category-list-link").css("font-weight","bold");
		$(".posts-expand .post-body ul .category-list-item ").first().siblings("li").children(".category-list-link").css("font-weight","bold");
		// $(".category-list-child").css("list-style-type","none");
		// $(".category-list-item").css("list-style-type","none");
		$(".posts-expand .post-body ul li ").css("list-style-type", "none");
		$(".category-list-link ").css("border-bottom", "none");
	   
		$(".display").click(function () {
		  // $(this).siblings(".category-list-child").css("display")=="none"?
		  // $(this).siblings(".category-list-child").css("display","block"):$(this).siblings(".category-list-child").css("display","none");
		  $(this).siblings(".category-list-child").slideToggle();
		  // $(this).siblings(".category-list-child").fadeToggle();
	   
		});
	  }
	   
});