jQuery(function ($){
	//开始弹出层
	$(".student_note").click(function (){//导入账号
		alert('note');
		var dialogBox1= new Dialog("<form class='select' action='' method='post'> <div class='set_bg'><ul class='clearfix'> <li  class='fl clearfix'> <span class=''>导入账号：</span><textarea class='text'/></li></ul><input type='submit' value='保存' class='btn select common_bg big_btn' style='margin-left:185px;'/></div> </form>",{
			'width':'500px',
			'title':'student note',
			'closeModal':false,
			modal: true,
			title: 'student_note',
			closeDelay:'500000'
		});
	});
	//结束弹出层
});