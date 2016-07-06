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

//像一个SVG文件中添加javascript
<?xml version="1.0" encoding='UTF-8' standalone='on'?>
<svg xmlns='http://www.w3.org/2000/svg'
	xmlns:xlink='http://www.w3.org/1999/xlink' width='600' height='600'>
	<script type="text/javascript">
		<![CDATA[
			window.onload = function () {
				var square = document.getElementById('square');
				square.onclick = function () {
					var color = this.setAttribute('fill');
					if (color == '#ff0000') {
						this.setAttribute('fill','#0000ff');
					} else {
						this.setAttribute('fill','#ff0000');
					}
				}
			}
		]]>
	</script>
	<rect id='square' width='400' height='400' fill='#ff0000' x='10' y='10'/>
</svg>

