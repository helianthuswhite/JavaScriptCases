/*
 *
 *创建富媒体和交互应用程序
 *
 */


//向页面中插入一个canvas
function _52() {
	var imgcanvas = document.getElementById('imgcanvas');
	if (imgcanvas.getContext) {
		var ctx = imgcanvas.getContext('2d');
		ctx.fillStyle = '#000';
		ctx.fillRect(0,0,100,100);
		ctx.strokeRect(0,0,100,100);
	}
}

// 当一个音频文件开始播放时运行一个程序
function _53() {
	function managerEvent(eventObj,event,eventHandler) {
		if (eventObj.addEventListener) {
			eventObj.addEventListener(event,eventHandler,false);
		} else if(eventObj.attachEvent) {
			event = 'on' + event;
			eventObj.attachEvent(event,eventHandler);
		}
	}

	function aboutAudio() {
		var txt = document.createTextNode('hhh');
		var div = document.createElement('div');
		div.appendChild(txt);
		div.setAttribute('role','alert');
		document.body.appendChild(div);
	}

	var audio = document.getElementById('audio');
	managerEvent(audio,'play',aboutAudio);
}

//javascript控制视频播放
function _54() {
	function managerEvent(eventObj,event,eventHandler) {
		if (eventObj.addEventListener) {
			eventObj.addEventListener(event,eventHandler,false);
		} else if(eventObj.attachEvent) {
			event = 'on' + event;
			eventObj.attachEvent(event,eventHandler);
		}
	}

	//关闭播放
	function startPlayback() {
		var video = document.getElementById('video');
		video.play();
		document.getElementById('stop').disabled = false;
		document.getElementById('pause').disabled = false;
		this.disabled = true;
	}
	//暂停播放
	function pausePlayback() {
		var video = document.getElementById('video');
		video.pause();
		this.disabled = true;
		document.getElementById('stop').disabled = true;
		document.getElementById('start').disabled = false;
	}
	//停止播放
	function stopPlayback() {
		var video = document.getElementById('video');
		video.pause();
		video.currentTime = 0;
		document.getElementById('stop').disabled = true;
		document.getElementById('start').disabled = false;
		this.disabled = true;
	}

	managerEvent(document.getElementById('start'),'click',startPlayback);
	managerEvent(document.getElementById('pause'),'click',pausePlayback);
	managerEvent(document.getElementById('stop'),'click',stopPlayback);

}
