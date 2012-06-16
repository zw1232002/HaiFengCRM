jQuery(function ($){
	//开始弹出层
	$("#import_account").click(function (){//导入账号
		var dialogBox1= new Dialog("<form class='select' action='' method='post'> <div class='set_bg'><ul class='clearfix'> <li  class='fl clearfix'> <span class=''>导入账号：</span><input type='file' class='text'/></li></ul><input type='submit' value='保存' class='btn select common_bg big_btn' style='margin-left:185px;'/></div> </form>",{
			'width':'500px',
			'title':'导入账号',
			'closeModal':false,
			modal: true,
			title: '导入账号/修改',
			closeDelay:'500000'
		});
	});
	//结束弹出层
});