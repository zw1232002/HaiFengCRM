/*
	*SlideImg  轮播类
	*args{
	*	@param(object) btnPre               向左按钮
	*	@param(object) btnNext              向右按钮
	*	@param(object) imgContainer   图片的ul
	*	@param(object) iconBtn              轮播的按钮
	*	@param(string) hoverClass        轮播的按钮选中时的class,默认hover
	*	@param(number) t                        自动轮播的时间间隔，默认3000毫秒
	*}
*/
function SlideImg(args){
	var _this=this;
	for(var i in args){
		this[i]=args[i];
	}
	this.t=this.t || 3000;
	this.imgs=$(this.imgContainer).find("li img");//所有的图片
	this.hoverClass=this.hoverClass || "hover";
	this.imgWid=this.imgs.eq(0).width();//获取图片的尺寸
	this.imgHeight=this.imgs.eq(0).height();
	this.btns=$(this.imgContainer).find("li");
	this.icons=$(this.iconBtn).find("li");//所有的轮播按钮li
	this.icons.each(function (i){//轮播按钮的hover事件
		this.eq=i;
		$(this).hover(
		function (){
			_this.stop();
			_this.go(this.eq);
		},
		function (){
			_this.stop();
			_this.start();
		}
		);
	});
	for(var i=0,l=this.btns.length;i<l;i++){
		this.btns[i].index=i;
	};
	this.btnPre.bind("click",function (){
		_this.stop();
		_this.prev();
	});
	this.btnNext.bind("click",function (){
		_this.stop();
		_this.next();
	});
	this.go(0);
};
SlideImg.prototype={
	start:function (){
		var _this=this;
		this.stop();
		this.inv=setInterval(function (){
			_this.next();
		},this.t);
	},
	stop:function (){
		clearInterval(this.inv);
	},
	go:function (n){
		this.imgContainer.stop();
		this.curImg=this.btns[n];
		this.icons.eq(n).addClass(this.hoverClass).siblings().removeClass(this.hoverClass);
		this.imgContainer.animate({left: -n*this.imgWid+'px'}, 400);
	},
	prev:function (){
		var prevIndex=this.curImg.index-1;
		if(prevIndex<=0){
			prevIndex=0;
		}
		this.go(prevIndex);
	},
	next:function (){
		var nextIndex=this.curImg.index+1;
		if(nextIndex>=this.btns.length){
			nextIndex=0;
		}
		this.go(nextIndex);
	}
};