/*
 *
 *DOM元素操作
 *
 *
 */

//将一个表行中所有值相加
function _40 () {
	try {
		var cells = document.querySelectorAll("tr:nth-child(3) td");
	} catch(e) {
		var tableElement = document.getElementById('thetable');
		var trs = tableElement.getElementsByTagName('tr');
		var cells = trs[2].getElementsByTagName("td");
	}

	//处理单元格数据
	var sum = 0;
	for (var i = 0;i < cells.length; i++) {
		var val = parseFloat(cells[i].firstChild.data);
		if (!isNaN(val)) {
			sum += val;
		}
	}
	alert(sum);
}

//将第三列中的单元格加和
function _41 () {
	var rows = document.getElementById('table').getElementsByTagName('tr');
	var sum = 0;

	//跳过第一行的标题
	for (var i = 1; i < rows.length; i++) {
		sum += parseFloat(rows[i].childNode[2].firstChild.data);
	}
	alert(sum);
}

//获取一个元素的样式信息
function _42 () {
	function getStyle(elem,cssprop,cssprop2) {
		//IE
		if (elem.currentStyle) {
			return elem.currentStyle[cssprop];
		}else if(document.defaultView && document.defaultView.getComputedStyle) {
			return document.defaultView.getComputedStyle(elem,null).getPropertyValue(cssprop2);
		}else {
			return null;
		}
	}

	function start() {
		var elem = document.getElementById('elem');
		var color = getStyle(elem,'backgroundColor','background-color');
		alert(color);
	}
}

