/*
 *
 *使用Number和Math对象
 *
 *
 */



// 十进制数的转换
function _14 () {
	var num = 255;
	var octNum = num.toString(8); //转换为8进制数
	var hexNum = num.toString(16); //转换为16进制数
	var binNum = num.toString(2); //转换为2进制数
}

 // 随机产生颜色
function _15 () {
 	function randomVal (val) {
 		return Math.floor(Math.random() * (val + 1));
 	}
 	function randomColor () {
 		return "rgb(" + randomVal(255) + "," + randomVal(255) + "," + randomVal(255) + ")";
 	}
}

// 把表中的字符串转换为数字
function _16 () {
	var rows = document.getElementById('table').children[0].rows;
	var numArray = new Array();
	for (var i = 0; i < rows.length; i++) {
		numArray[numArray.length] = parseInt(rows[i].cells[1].firstChild.data);
	};
}

// 把表格值转换为数字，并且求得加和结果（两行）
function _17 () {
	var sum = 0;
	var dataTable = document.getElementById('table');
	//使用querySelector找到第二列中的所有单元格
	var cells = document.querySelectorAll("td:nth-of-type(2)");
	for (var i = 0; i < cells.length; i++) {
		sum += parseFloat(cells[i].firstChild.data);
	};
	//新建一行
	var newRow = document.createElement("tr");
	//新建第一个单元格
	var firstCell = document.createElement("td");
	var firstCellText = document.createTextNode("Sum；")；
	firstCell.appendChild(firstCellText);
	newRow.appendChild(firstCell);
	// 新建第二个单元格
	var secondCell = document.createElement("td");
	var secondCellText = document.createTextNode(sum);
	secondCell.appendChild(secondCellText);
	newRow.appendChild(secondCell);

	dataTable.appendChild(newRow);
}

//将一个SVG圆放入到一个div元素中
function _18 () {
	function compStyle (elemId,property) {
		var elem = document.getElementById('elemId');
		var style;
		if(window.getComputedStyle){
			style = window.getComputedStyle(elem,null).getPropertyValue(property);
		}
		else if(elem.currentStyle) {
			style = elem.currentStyle[property];
		}
		return style;
	}
	var height = parseInt(compStyle("elem","height"));
	var width = parseInt(compStyle("elem","width"));

	var x = width/2;
	var y = height/2;

	var circleRadius = Math.min(x,y);
	var circ = document.getElementById("circ");
	circ.setAttribute("r",circleRadius);
	circ.setAttribute("cx",x);
	circ.setAttribute("cy",y);
}
