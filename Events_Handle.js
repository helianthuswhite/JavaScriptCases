/*
 *
 *JavaScript事件处理
 *
 *
 */


//使用Event对象捕获鼠标点击事件的位置
function _33 () {
	document.onclick = processClick;

	function processClick (evt) {
		//访问事件对象
		evt = evt || window.event;
		var x = 0,y = 0;

		//如果事件对象有pageX,pageY属性
		if (evt.pageX&&evt.pageY) {
			x = evt.pageX;
			y = evt.pageY;
		} else if (evt.clientX&&evt.clientY) {
			var offsetX = 0,offsetY = 0;
			//IE6以上版本
			if(document.doucmentElement.scrollLeft) {
				offsetX = document.doucmentElement.scrollLeft;
				offsetY = doucment.doucmentElement.scrollTop;
			//IE6以前的版本
			} else if(doucment.body) {
				offsetX = doucment.body.scrollLeft;
				offsetY = doucment.body.scrollTop;
			}
			x = evt.clientX + offsetX;
			y = evt.clientY + offsetY;
		}
		alert("you clicked aata x=" + x + " y=" + y);
	}
}

//
