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