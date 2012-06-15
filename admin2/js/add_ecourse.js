jQuery(function ($){
	//开始弹出层
	$("#add_ecourse").click(function (){//认可并修改
		var dialogBox1= new Dialog("<form class='select' action='' method='post'> <div class='set_bg'><ul class='clearfix'> <li  class='fl clearfix'> <span class=''>电子课程名称：</span><input type='text' class='text'/></li></ul><input type='submit' value='保存' class='btn select common_bg big_btn' style='margin-left:185px;'/></div> </form>",{
			'width':'500px',
			'title':'fuck world!',
			'closeModal':false,
			modal: true,
			title: '新增电子课程/修改',
			closeDelay:'500000'
		});
	});
	//结束弹出层
});
