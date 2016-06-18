/*
 *
 *使用日期、时间、定时器
 *
 *
 */

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