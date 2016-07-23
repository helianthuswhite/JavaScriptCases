/*
 *
 *	持久化
 *
 */

// 使用url和查询字符串来保留状态
function _66() {
	function getQueryParam(name) {
		name = name.replace(/[\[]/,'\\\[').replace(/[\]]/,'\\\]');
		var regexS = '[\\?&]' + name + '=([^&#]*)';
		var regex = new RegExp(regexS);
		var results = regex.exec(window.location.href);
		if(results == null) {
			return null;
		}else {
			return results[1];
		}
	}

	function updateURL() {
		var move = document.getElementById('move').getAttribute('data-state');
		var size = document.getElementById('size').getAttribute('data-state');

		var link = document.getElementById('link');
		var path = location.protocol + '//' + location.hostname + location.pathname +
			'?move='+ move + '&size=' + size;
		link.innerHTML = '<p><a href="' + path + '">static state link</a></p>';
	}

	function moveSquare() {
		var move = parseInt(document.getElementById('move').getAttribute('data-state'));
		move += 100;
		document.getElementById('square').style.left = move + 'px';
		document.getElementById('move').setAttribute('data-state',move);
		updateURL();
	}

	function resizeSquare() {
		var size = parseInt(document.getElementById('size').getAttribute('data-state'));
		size += 50;
		var square = document.getElementById('square');
		square.style.width = size + 'px';
		square.style.height = size + 'px';
		document.getElementById('size').setAttribute('data-state',size);
		updateURL();
	}

	document.getElementById('move').onclick = moveSquare;
	document.getElementById('size').onclick = resizeSquare;

	var move = getQueryParam('move');
	if (!move) return;

	var size = getQueryParam('size');

	var square = document.getElementById('square');
	square.style.left = move + 'px';
	square.style.height = size + 'px';
	square.style.width = size + 'px';

	document.getElementById('move').setAttribute('data-state',move);
	document.getElementById('size').setAttribute('data-state',size);
}

// 通过创建cookie来跨页面持久化信息
function _67() {

	// 设置cookie过期时间
	function setCookie() {
		var cookie = document.getElementById('cookie').value;
		var value = document.getElementById('value').value;

		var futureDate = new Date();
		futureDate.setDate(futureDate.getDate() + 10);

		var tmp = cookie + '=' + encodeURI(value) + ';expires=' + futureDate.toGMTString()
			+ ';path=/';
		document.cookie = tmp;
	}

	//将每个cookie用分号隔开
	function readCookie() {
		var key = document.getElementById('cookie').value;

		var cookie = document.cookie;
		var first = cookie.indexOf(key + '=');
		if(first >= 0) {
			var str = cookie.substring(first,cookie.length);
			var last = str.indexOf(';');
			if(last < 0) last = str.length;
			str = str.substring(0,last).split('=');
			alert(decodeURI(str[1]));
		}else {
			alert('none found');
		}
	}

	//清除cookie
	function eraseCookie() {
		var key = document.getElementById('cookie').value;

		var cookieDate = new Date();
		cookieDate.setDate(cookieDate.getDate() - 10);

		document.cookie = key + '=; expires=' + cookieDate.toGMTString() + ';path=/';
	}

	if(navigator.cookieEnabled) {
		document.getElementById('set').onclick = setCookie;
		document.getElementById('get').onclick = readCookie;
		document.getElementById('erase').onclick = eraseCookie;
	}
}

// 针对客户端存储使用的sessionStorage
function _68() {
	sessionStorage.setItem('name','Shelley');
	sessionStorage.city = 'St. louis';

	var name = sessionStorage.getItem('name');
	var city = sessionStorage.city;

	sessionStorage.removeItem('name');
	sessionStorage.clear();
}

//使用localStorage备份表单条目，以防页面重载或浏览器崩溃
function _69() {
	//存储字段值
	function processField() {
		localStorage.setItem(window.location.href,'true');
		localStorage.setItem(this.id,this.value);
	}

	//清除单个字段
	function clearStored() {
		var elems = document.getElementsByTagName('input');
		for (var i = 0; i < elems.length; i++) {
			if(elems[i].type == 'text') {
				localStorage.removeItem(elems[i].id);
			}
		}
	}

	try {
		var elems = document.getElementsByTagName('input');
		//捕获提交，以清除存储
		document.getElementById('inputForm').onsubmit = clearStored;

		for (var i = 0; i < elems.length; i++) {
			if (elems[i].type == 'text') {
				//恢复
				var value = localStorage.getItem(elems[i].id);
				if (value) {
					elems[i].value = value;
				}
				elems[i].onchange = processField;
			}
		}
	} catch(e) {
		alert(e);
	}
}

// 使用关系数据存储来持久化数据
function _70() {
	//在客户端使用SQLite数据库
	//创建数据库
	var db = openDatabase('dbname','1.0','Bird Database',1024*1024);
	//创建表
	db.transaction(function(tx){
		tx.executeSQL('CREATE TABLE birdTable(birdid INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,'
			+ 'birdname VARCHAR(20) NOT NULL');
	});
	//创建查询
	db.transaction(function(tx) {
		tx.executeSQL('SELECT * birdTable',[],sqlFunction,sqlError);
		var sqlFunction = function(tx,recs) {
			var rows = recs.rows;
			for (var i = 0; i < rows.length; i++) {
				alert(recs.rows.items(i).text);
			}
		}
	});
}
