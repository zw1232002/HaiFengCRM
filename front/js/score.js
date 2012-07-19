jQuery(function ($){
	//成绩查询
	$("#score a").click(function (e){//成绩查询
		e.preventDefault();
		var dialogBox1= new Dialog("<form method='post' action='' class='select invoice_form'> <ul class='clearfix invoice'><li class=' clearfix'><strong class='title'>您参加的课程如下,请点击查询相应成绩的结果。</strong></li><li class=' clearfix'>  <span class='text'><a href='score_detail.html' style='color:black'>XXXXXXXXXXX课程</a></span></li><li class='clearfix'><span class='text'>YYYYYYYYYYYYY课程</span></li><li class=' clearfix'><input type='button' name='' class='btns right20 common_bg fl close-dialog' value='' /> </li> </ul> </form>",{
			'width':'500px',
			'title':'fuck world!',
			'closeModal':true,
			modal: true,
			title: '成绩查询',
			closeDelay:'500000'
		});
		
		$('form.invoice_form ul.invoice .sub_btn').click(function (e){
			e.preventDefault();
			var content3 = "提交成功！",_this=this;
			TINY.box.show(content3,0,0,0,0,2,0);
			setTimeout(function (){
				$(_this).parents("form.invoice_form").submit();
			},700);
		});
	});
	
	
	
	//结束弹出层
});
