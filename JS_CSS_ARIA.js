/*
 *
 *第14章、使用JS、CSS和ARIA（可访问性富Internet应用）创建交互式和可访问性效果
 *
 */

//让照片显示成为键盘可访问的
function _50() {
	//在连接的图像上点击鼠标
	function imgClick() {
		var img = this.firstChild();
		expandPhoto(img.getAttribute("data-larger"));
		return false;
	}

	//在链接中的图像上按下键
	function imgKeyPress(event) {
		event = (event) ? event :((window.event) ? window.event : "");
		var keycode = (event.which) ? event.which : event.keyCode;
		if (document.getElementById('overlay')) {
			if(keycode == 27) {
				restore();
				return false;
			}

		}else {
			if(keycode == 13) {
				var img = this.firstChild;
				var src = img.getAttribute('date-larger');
				expandPhoto(src);
				return false;
			}
		}
	}

	//创建覆盖，展开图像
	function expandPhoto(src) {
		//创建覆盖元素
		var overlay = document.createElement("div");
		overlay.setAttribute("id","overlay");
		overlay.setAttribute('class','overlay');

		document.body.appendChild(overlay);

		//添加图像
		var img = document.createElement('img');
		img.src = src;
		img.setAttribute('id','img');

		//设置tabindex以获取焦点
		img.setAttribute('tabindex','-1');

		//样式化图像
		img.setAttribute('class','overlaying');

		img.onclick = restore;
		img.onkeydown = imgKeyDown;
		document.body.appendChild(img);

		//聚焦所点击图像
		img.focus();

	}

	//移除覆盖和图像
	function restore() {
		document.body.removeChild(document.getElementById('overlay'));
		document.body.removeChild(document.getElementById('img'));
	}

	var aimgs = document.getElementsByTagName('a');
	aimgs[0].focus();
	for (var i = 0; i < aimgs.length; i++) {
		aimgs[i].onclick = imgClick;
	}
}

//显示一个带颜色的闪烁以表示一个动作
function _51() {
	var fadingObject = {
		yellowColor:function (val) {
			var r = 'ff';
			var g = 'ff';
			var b = val.toString(16);
			var newval = '#'+r+g+b;
			return newval;
		},
		fade:function (id,start,finish) {
			this.count = this.start = start;
			this.finish = finish;
			this.id = id;
			this.countDown =  function() {
				this.count += 30;
				if(this.count > = this.finish) {
					document.getElementById(this.id).style.background = 'transparent';
					this.countDown = null;
					return;
				}
				document.getElementById(this.id).style.background = this.yellowColor(this.count);
				setTimeout(this.countDown.bind(this),100);
			}
		}
	};
	fadingObject.fade('one',0,300);
	fadingObject.countDown();
}

