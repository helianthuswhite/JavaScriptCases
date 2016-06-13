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

//创建通用的事件监听函数
function _34 () {
	//创建监听函数
	function listenEvent(eventTarget,eventType,eventHandler) {
		if (eventTarget.addEventListener) {
			eventTarget.addEventListener(eventType,eventHandler,false);
		} else if (eventTarget.attachEvent) {
			eventType = "on" + eventType;
			eventTarget.attachEvent(eventType,eventHandler);
		}
	}

	//停止监听
	function stopListening (eventTarget,eventType,eventHandler) {
		if (eventTarget.removeEventListener) {
			eventTarget.removeEventListener(eventType,eventHandler,false);
		} else if (eventTarget.detachEvent) {
			eventType = "on" + eventType;
			eventTarget.detachEvent(eventType,eventHandler);
		} else {
			eventTarget["on" + eventType] = null;
		}
	}
}

//阻止默认事件发生
function _35 () {
	function cancelEvent (event) {
		if (event.preventDefault()) {
			event.preventDefault();
		} else {
			event.returnValue = false;
		}
	}
}

//阻止事件冒泡
function _36 () {
	function cancelPropagation (event) {
		if (event.stopPropagation) {
			event.stopPropagation();
		} else {
			event.cancelBubble = true;
		}
	}
}

