jQuery(function ($){
	//开具发票
	$(".page .colum .colum_content .content_inner .content_right ul.nav_list li.invoice a").click(function (e){//开具发票
		e.preventDefault();
		var dialogBox1= new Dialog("<form method='post' action='' class='select invoice_form'> <ul class='clearfix invoice'><li class=' clearfix'><strong class='title'>发票寄送需要付款，江浙沪范围内约为10元。</strong></li><li class=' clearfix'>  											<span class='text'>可开票金额：</span><span class='content'>200.00元</span>	 									</li><li class='clearfix'>  											<span class='text'>　发票抬头：</span> <span class='content'>某某某</span></li><li class=' clearfix'><strong class='title'>确认快递信息：</strong></li><li class=' clearfix'>  											<span class='text'>　　收件人：</span><span class='content'>某某某</span></li><li class=' clearfix'>  											<span class='text'>　联系方式：</span><span class='content'>13945789625</span></li><li class=' clearfix'>  											<span class='text'>可收件时间：</span><span class='content'>2012-07-21</span></li><li class=' clearfix'>  											<span class='text'>　收件地址：</span><span class='content'>上海市杨浦区某某镇某某小区</span></li><li class=' clearfix'> 											 											<input type='submit' name='' class='btns left236 fl common_bg sub_btn' value='' style=''/><input type='button' name='' class='btns right20 common_bg fl close-dialog' value='' /> 											 										</li> 									</ul> 									 								</form>",{
			'width':'500px',
			'title':'fuck world!',
			'closeModal':true,
			modal: true,
			title: '开具发票',
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