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

// 打印出日期
function _8 () {
	var dt = new Date();
	var month = dt.getMonth();
	month++;
	var day = dt.getDate();
	var yr = dt.getFullYear();
	dtElem.innerHTML = "<p>" + month +"/" + day +"/" + yr;
}

// 打印出UTC日期和时间
function _9 () {
	var dateElement = document.getElementById("date");
	var today = new Date();
	var utcDate = today.toUTCString();
	dateElement.innerHTML = "<p>local datetime:" + today + "UTC datetime:" + utcDate + "</p>";
}

// 打印出一个ISO 8601格式日期
function _10 () {
	var dt = new Date();
	var mnth = dt.getUTCMonth();
	mnth++;
	var day = dt.getUTCDate();
	if(day < 10) day = "0" + day;
	var yr = dt.getUTCFullYear();
	var hrs = dt.getUTCHours();
	if(hrs < 10) hrs = "0" + hrs;
	var min = dt.getUTCMinutes();
	if(min < 10) min = "0" + min;
	var secs = dt.getUTCSeconds();
	if(secs < 10) secs = "0" + secs;
	var newdate = yr + "-" + mnth + "-" + day + "T" + hrs + ":" + min + ":" + secs + "Z";

}

// 把ISO 8601格式的日期转换为Date对象可接受的一种格式
function _11 () {
	var dtstr = "2009-10-15T14:42:51Z";
	// 将非数字全部转换为空格
	dtstr = dtstr.replace(/\D/g," ");
	var dtcomps = dtstr.split(" ");

	// 在基于1的ISO 8601月份和基于0的日期格式之间转换
	dtcomps[1]--;
	var convdt = new Date(Date.UTC(dtcomps[0],dtcomps[1],dtcomps[2],dtcomps[3],dtcomps[4],dtcomps[5]));
}

// 创建一个特定的日期
function _12 () {
	var month = 10; //在基于0的系统中月份表示11月
	var day = 18;
	var year = 1964;
	var dt = new Date(year,month,day);
}

// 记录两次事件的时间差
function _13 () {
	var firstDate = new Date();
	document.getElementById('date').onclick = doEvent;
	function doEvent () {
		var SecondDate = new Date();
		alert((SecondDate - firstDate) / 1000);
	}
}


