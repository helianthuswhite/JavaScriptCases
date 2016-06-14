/*
 *
 *浏览器模块
 *
 *
 */


//请求Web页面访问者确认一项操作
function _37 () {
	var answer = confirm("Are sure you want to do that?");
	if (answer == true) {
		alert("You are sure.");
	} else {
		alert("You decided against.");
	}
}

//找到关于浏览器的访问页面
function _38 () {
	var browser = navigator.userAgent;
	var info = "<p>Browser: " + browser + "</p>";
	var platform = navigator.platform;
	info += "<p>Platform: " + platform + "</p>";
}

//JS创建面包屑路径
function _39 () {
	//分割相对路径
	var items = location.pathname.substr(1).split("/");
	//构建主路径
	var mainpath = "<a href='"location.protocol + "//" + location.hostname + "/";
	//开始面包屑路径
	var breadcrumbTrail = "<p>";
	for (var i = 0;i < items.length; i++) {
		//结尾的斜杠
		if (items[i].length == 0) break;
		//将主路径扩展到一个新的层级
		mainpath += items[i];
		//在所有的项之后添加斜杠，最后一项除外
		if (i < items.length - 1) {
			mainpath += "/";
		}
		//创建面包屑路径部分
		if (i > 0 && i < items.length) {
			breadcrumbTrail += "->";
		}
		//添加面包屑
		breadcrumbTrail += mainpath + "'>" + items[i] + "</a>";
	}
	//插入到页面
	breadcrumbTrail += "</p>";
}
