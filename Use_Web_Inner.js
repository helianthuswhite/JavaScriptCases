/*
 *
 *第13章、确定Web页面的区域
 *
 */

//获取web页面的区域
function _46() {
	function size() {
		var width = 0;
		var height = 0;
		if(!window.innerWidth) {
			width = (document.documentElement.clientWidth?document.documentElement.clientWidth:
				document.body.clientWidth);
			height = (document.documentElement.clientHeight?document.documentElement.clientHeight:
				document.body.clientHeight);
		} else {
			width = window.innerWidth;
			height = window.innerHeight;
		}
		return {width:width,height:height};
	}
}

//创建标签页程序
function _47() {
	function start() {
		//针对每个容器
		var containers = document.querySelectorAll('.tabcontainer');
		for (var i = 0; i < containers.length; i++) {
			//显示并隐藏元素
			var nav = containers[i].querySelector('.tabnavigation ul');
			nav.style.display = 'block';
			//设置当前标签
			var navitem = containers[i].querySelector('.tabnavigation ul li');
			var ident = navitem.id.split('_')[1];
			navitem.parentNode.setAttribute('data-current',ident);
			navitem.setAttribute('style','background:#f00');
			var pages = containers[i].querySelectorAll('.tabpage');
			for (var j = 0; j < pages.length; i++) {
				pages[j].style.display = 'none';
			}
			var tabs = containers[i].querySelectorAll('.tabnavigation ul li');
			for (var j = 0; j < tabs.length; i++) {
				tabs[j].onclick = displayPage;
			}
		}
	}

	//点击标签
	function displayPage() {
		var current = this.parentNode.getAttribute('data-current');
		document.getElementById('tabnav_'+current).setAttribute('style','background:#fff');
		document.getElementById('tabpage_'+current).style.display = 'none';
		var ident = this.id.split('_')[1];
		this.setAttribute('style','background:#f00');
		document.getElementById('tabpage_'+ident).style.display = 'block';
		this.parentNode.setAttribute('data-current',ident);
	}
}

//创建基于悬停的弹出窗口信息
function _48() {
	
}
