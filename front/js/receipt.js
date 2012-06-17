jQuery(function ($){
	//开具发票
	$(".page .colum .colum_content .content_inner .content_right ul.nav_list li.invoice a").click(function (e){//开具发票
		e.preventDefault();
		var dialogBox1= new Dialog("<form method='post' action='' class='select'> <ul class='clearfix'><li class='fl clearfix'><strong class='title'>发票寄送需要付款，江浙沪范围内约为10元。</strong></li><li class='fl clearfix'>  											<span class='text'>可开票金额：</span> 											<input type='text' name='' class='text'/> 										</li><li class='fl clearfix'>  											<span class='text'>　发票抬头：</span> 											<input type='text' name='' class='text'/> 										</li><li class='fl clearfix'><strong class='title'>确认快递信息：</strong></li><li class='fl clearfix'>  											<span class='text'>　　收件人：</span> 											<input type='text' name='' class='text'/> 										</li><li class='fl clearfix'>  											<span class='text'>　联系方式：</span> 											<input type='text' name='' class='text'/> 										</li><li class='fl clearfix'>  											<span class='text'>可收件时间：</span> 											<input type='text' name='' class='text'/> 										</li><li class='fl clearfix'>  											<span class='text'>　收件地址：</span> 											<input type='text' name='' class='text'/> 										</li><li class='fl clearfix'> 											 											<input type='submit' name='' class='btns left236 fl common_bg sub_btn' value='' style=''/><input type='button' name='' class='btns right20 common_bg fl close-dialog' value='' /> 											 										</li> 									</ul> 									 								</form>",{
			'width':'500px',
			'title':'fuck world!',
			'closeModal':true,
			modal: true,
			title: '开具发票',
			closeDelay:'500000'
		});
	});
	
	//结束弹出层
});