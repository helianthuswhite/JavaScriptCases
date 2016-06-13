/*
 *
 *使用正则表达式
 *
 *
 */



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
