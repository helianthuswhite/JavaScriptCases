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

//创建多维数组
function _19 () {
	var arrayLength = 3;

	//创建数组
	var multiArray = new Array(arrayLength);
	for(var i = 0;i < multiArray.length;i++){
		multiArray[i] = new Array(arrayLength);
	}

	//给第一个数组索引添加项
	multiArray[0][0] = "apple";
	multiArray[0][1] = "banana";
	multiArray[0][2] = "cherry";

	//给第二个数组索引添加项
	multiArray[1][0] = "2";
	multiArray[1][1] = "56";
	multiArray[1][2] = "83";

	//给第三个数组索引项添加
	multiArray[2][0] = ['test','again'];
	multiArray[2][1] = ['java','script'];
	multiArray[2][2] = ['read','books'];

	alert(multiArray); //打印出所有数组的内容
	alert(multiArray[2]); //打印出子数组
	alert(multiArray[2][2][0]); //单个项目
}

//排序数组
function _20 () {
	var numberArray = [4,13,2,31,5];
	alert(numberArray.sort()); //返回13,2,31,4,5

	function compareNumbers (a,b) {
		return a-b;
	}
	var numArray = [13,2,31,4,5];
	alert(numArray.sort(compareNumbers));  //打印出2,4,5,13,31
}

//push()、pop()、unshift()、shift()方法
function _21 () {
	var stack = []; //stack:[]
	stack.push(1); //stack:[1] 
	stack.push(2); //stack:[1,2]
	stack.pop(); //stack:[1] return 2;
	stack.push([4,5]); //stack:[1,[4,5]]
	stack.pop();  //stack:[1] return [4,5]
	stack.unshift(22); //stack:[22,1] return: 2
	stack.shift(); //stack:[1] return 22
	stack.unshift(3,[4,5]); //stack:[3,[4,5],1] return :3
	stack.shift(); //stack:[[4,5],1] return : 3
	stack.shift(); //stack:[1] return:[4,5]
}

//将一个多维数组扁平化为一个单维数组
function _22 () {
	var origArray = new Array();
	origArray[0] = new Array("one","two");
	origArray[1] = new Array("three","four");
	origArray[2] = new Array("five","six");
	//扁平化数组
	var newArray = origArray[0].concat(origArray[1],origArray[2]);
	alert(newArray[5]); //打印出six
}

//创建一个过滤后的数组
function _23 () {
	function removeChars (element,index,array) {
		return (element !== "**"); 
	}
	var charSet = new Array("**","bb","cd","**","dd","**");
	var newArray = charSet.filter(removeChars); //参数为true则加入
	alert(newArray); //bb,cd,dd
}

//验证数组内容
function _24 () {
	var elemSet = new Array("**",123,"aaa","abc","-",46,"AAA");

	function textValue (element,index,array) {
		var textExp = /^[a-zA-Z]+$/;
		return textExp.test(element);
	}

	alert(elemSet.every(textValue)); //弹出false

	alert(elemSet.some(textValue)); //弹出true
}

//测试一个字符串是否存在
function _25 () {
	var cookbookString = new Array();

	cookbookString[0] = "Joe's Cooking Book";
	cookbookString[1] = "Sam's cookBook";
	cookbookString[2] = "JavaSript CookBook";
	cookbookString[3] = "JavaSript BookCook";

	//搜索模式
	var pattern = /Cook.*Book/;
	for (var i = 0; i < cookbookString.length; i++) {
		alert(cookbookString[i] + " " + pattern.test(cookbookString[i]);
	};
	/*RegExp test方法接受两个参数：要测试的字符串和一个可选的修饰符
	  它对该字符串应用正则表达式，匹配是返回true，否则返回false*/
}

//测试不区分大小写的字符串匹配
function _26 () {
	var cookbookString = new Array();

	cookbookString[0] = "Joe's Cooking Book";
	cookbookString[1] = "Sam's cookBook";
	cookbookString[2] = "JavaSript CookBook";
	cookbookString[3] = "JavaSript BookCook";

	//搜索模式
	var pattern = /Cook.*Book/i;  //i是忽略大小写
	for (var i = 0; i < cookbookString.length; i++) {
		alert(cookbookString[i] + " " + pattern.test(cookbookString[i]);
	};
	//四个都匹配到
}

//找到并突出显示一个模式的所有实例
function _27 () {
	var searchString = "Now is the time and this is the time and that is the time ";
	var pattern = /t\w*e/g;
	var matchArray;

	var str = " ";
	while((matchArray = pattern.exec(searchString)) != null) {
		str += "at" matchArray.index + "we found" + matchArray[0] + "<br/>";
	}
	console.log(str);
	//使用g和RegExp exec的方法来找到一个模式的所有实例
}

//使用正则表达式去除空白
function _28 () {
	var testString = " this is the string ";

	//去除开头的处的空白
	testString = testString.replace(/^\s+/,"");
	//去除结尾处的空白
	testString = testString.replace(/^\s+$/,"");

	//	ES5中使用trim方法
}

//递归函数斐波那契数列和求阶乘
function _29 () {
	//斐波那契
	var fibonacci = function (n) {
		return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
	}

	//求阶乘
	function Factorial(n) {
		return n == 1 ? 1 : n * Factorial(n-1);
	}
	var val = Factorial(4);
}

//JS闭包函数
function _30 () {
	function greetingMaker (greeting) {
		function addName (name) {
			return greeting + " " + name;
		}
		return addName;
	}

	//创建新的局部函数
	var daytimeGreeting = greetingMaker("Good Day to you");
	var nightGreeting = greetingMaker("Good Evening");

	//白天
	alert(daytimeGreeting(name));
	//黑夜
	alert(nightGreeting(name));
}

//JS科里化函数减少参数
function _31 () {

	/* 
	 *
	 *
	通过官员包养老婆来讲解和通过大小柯南来讲解，来自张鑫旭的个人博客
	*
	*
	*/

	var currying = function(fn) {
	    // fn 指官员消化老婆的手段
	    var args = [].slice.call(arguments, 1);
	    // args 指的是那个合法老婆
	    return function() {
	        // 已经有的老婆和新搞定的老婆们合成一体，方便控制
	        var newArgs = args.concat([].slice.call(arguments));
	        // 这些老婆们用 fn 这个手段消化利用，完成韦小宝前辈的壮举并返回
	        return fn.apply(null, newArgs);
	    };
	};

	// 下为官员如何搞定7个老婆的测试
	// 获得合法老婆
	var getWife = currying(function() {
	    var allWife = [].slice.call(arguments);
	    // allwife 就是所有的老婆的，包括暗渡陈仓进来的老婆
	    console.log(allWife.join(";"));
	}, "合法老婆");

	// 获得其他6个老婆
	getWife("大老婆","小老婆","俏老婆","刁蛮老婆","乖老婆","送上门老婆");

	// 换一批老婆
	getWife("超越韦小宝的老婆");

/*******************************************/

	var smallKenan = function(action) {
	    var bigKenan = function(doing) {
	        var result = "";
	        if (action === "take drugs") {
	            if (doing === "bathWithGirlFriend") {
	                result = "尖叫，新一，你这个色狼，然后一巴掌，脸煮熟了~";
	            } else if (doing === "pointOutKiller") {
	                result = "新一，这个案子就交给你的，快点找出谁是凶手吧~";
	            }
	        } else {
	            if (doing === "bathWithGirlFriend") {
	                result = "来吧，柯南，一起洗澡吧~";
	            } else if (doing === "pointOutKiller") {
	                result = "小孩子家，滚一边去！";
	            }
	        }
	        console.log(result);
	        return arguments.callee; // 等同于return bigKenan
	    };
	    return bigKenan;
	};

	// 小柯南吃药了，然后和毛利兰洗澡，凶案现场指证犯人；结果是……
	smallKenan("take drugs")("bathWithGirlFriend")("pointOutKiller");

}

//