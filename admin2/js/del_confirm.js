jQuery(function ($){
$(".delete_btn").click(function (e){
	e.preventDefault();
	if(window.confirm("确认要删除吗？")){
		location.reload();
	}else{
		
	}
})
});