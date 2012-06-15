jQuery(function ($){
	//tab切换js
	$(".page .tab_btn_ul").each(function (){
		var contents=$(this).parent().find(".tab_content_wrap ").eq(0);
		$(this).find("li a").each(function (i){
				$(this).click(function (e){
				//e.preventDefault();
				$(this).addClass("select").parents("li").siblings().children("a").removeClass("select");
				contents.find(">.tab_content").removeClass("show");
				contents.find(">.tab_content").eq(i).addClass("show");
			});
		});
	});
});