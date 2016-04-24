// 在字符串中查找子字符串
function _1() {
	var testValue = "This id the Cookbook's test string";
	var subsValue = "Cookbook";
	var iValue = testValue.indexof(subsValue,1); //返回值为12，字符串的索引,第二个参数为索引的起始位置
	if(iValue != -1); //成功，因为子字符串存在
}

// 从一个字符串提取子字符串
function _2() {
	var sentence = 'This is one sentence. This is a sentence with a list of
	items: cherries, oranges, apples, bananas.';
	var start = sentence.indexof(":");
	var end = sentence.indexof(".",start + 1);
	var list = sentence.substring(start + 1, end);
}

// 检查一个存在的、非空的字符串
function _3 () {
	if(((typeof test != "undefined")&&(typeof test == "string"))&&(test.length > 0)){
		//执行语句
	}
}

// 讲一个关键字字符串分解为单独的关键字
function _4 () {
	//获取关键字列表
	var keywordList = prompt("Enter keywords,separated by commas","");
	var arrayList = keywordList.split(",");
	//构建最终HTML
	var resultString = "";
	for (var i = 0; i < arrayList.length; i++) {
		resultString += "keyword:" + arrayList[i] + "<br/>";
	};
}

//处理textarea中的单个行
function _5 () {
	var textBox = document.getElementById('inputbox');
	var lines = textBox.value.split("\n");

	var result = "<p>";
	for (var i = 0; i < lines.length; i++) {
		result += lines[i] + "<br/>";
	};
	result += "</p>";
}

// 去除字符串末尾的空白
function _6 () {
	var textBox = document.getElementById('inputbox');
	var lines = textBox.value.split("\n");
	var result = "";
	for (var i = 0; i < lines.length; i++) {
		var temp = lines[i].trim();
		result += temp + "-";
	};
}

// 左右补充一个字符串
function _7 () {
	var prefLineLength = 20;
	var oldStr = "This is a string";
	var diff = prefLineLength - oldStr.length;
	var filler = "&nbsp;";
	for (var i = 0; i < diff.length; i++) {
		oldStr = filler + oldStr;
	};
}