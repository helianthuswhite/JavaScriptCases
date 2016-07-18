/*
 *
 *第十八章 通信
 *
 */

// 使用JSONP实现跨域请求
function _66() {
	function addScript(url) {
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.src = url;
		document.getElementsByTagName('head')[0].appendChild(script);
	}
	addScript('http://xxx.com/test?name=111');
}

// 创建一个Ajax应用
function _67() {
	function popluteSelect() {
		var value;
		var inputs = this.getElementsByTagName('input');
		for (var i = 0; i < inputs.length; i++) {
			if(inputs[i].checked) {
				value = inputs[i].value;
				break;
			}
		}

		//发起请求
		if (!xmlhttp) {  //IE6
			xmlhttp = new XMLHttpRequest();
		}
		var url = 'nicething.php?nicething = ' + value;
		xmlhttp.open('GET',url,true);
		xmlhttp.onreadystatechange = getThings;
		xmlhttp.sned(null);
	}

	//处理返回值
	function getThings() {
		if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			var select = document.getElementById('nicestuff');
			select.lenght = 0;
			var nicethings = xmlhttp.responseText.split(',');
			for (var i = 0; i < nicethings.length; i++) {
				select.options[select.length] = new option(nicethings[i],nicethings[i]);
			}
			select.style.display = 'block';
		} else if(xmlhttp.readyState == 4 && xmlhttp.status != 200) {
			alert('No items return for request!');
		}
	}

	document.getElementById('nicething').onclick = popluteSelect;
}

// 使用PostMessage跨窗口通信
function _68() {
	//发送器页面代码
	function managerEvent(eventObj,event,eventHandler) {
		if (eventObj.addEventListener) {
			eventObj.addEventListener(event,eventHandler,false);
		} else if(eventObj.attachEvent) {
			event = 'on' + event;
			eventObj.attachEvent(event,eventHandler);
		}
	}

	function sendMessage() {
		try {
			//这里获得一个iframe
			var farAwayWindow = document.getElementById('widgetId').contentWindow;
			farAwayWindow.postMessage('参数','链接');
		} catch(e) {
			alert(e);
		}
	}

	managerEvent(document.getElementById('button'),'click',sendMessage);

	// 监听器页面代码
	function receive(e) {
		var img = document.getElementById('img');
		img.src = e.data.split(',')[0];
		img.alt = e.data.split(',')[1];
		e.source.postMessage('Received ' + e.data,'返回的链接');
	}

	managerEvent(window,'message',receive);
}

