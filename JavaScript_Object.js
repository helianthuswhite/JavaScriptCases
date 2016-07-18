/*
 *
 *JavaSript对象
 *
 */


// 定义一个基本的javascript对象
 function _55() {
 	function Tune (song,artist) {
 		this.title = song;
 		this.artist = artist;
 		this.concat = function (){
 			return this.title + '-' + this.artist;
 		}
 	}
 	var happySong = new Array();
 	happySong[0] = new Tune('lalala','white');
 	console.log(happySong.concat());
 }


//保持对象私有化
function _56() {
	function Tune(song,artist) {
		var title = song;
		var artist = artist;
		this.concat = function () {
			return title + '-' + artist;
		}
	}
	var happySong = new Array();
	happySong[0] = new Tune('lalala','white');
	try {
		alert(happySong[0].title); //报错
	}catch(e) {
		alert(e);
	}
	console.log(happySong[0].concat());
}

//用原型扩展对象
function _57() {
	function Tune(song,artist) {
		var title = song;
		var artist = artist;
		this.concat = function () {
			return title + '-' + artist;
		}
	}
	// 创建实例
	var happySong = new Tune('lalala','white');
	// 扩展对象
	Tune.prototype.addCategory = function(categoryName) {
		this.category = categoryName;
	};

	//添加分类
	happySong.addCategory('hit');
	// 打印
	console.log('Title and artist:' + happySong.concat() + 'category:' + happySong.category);

}

// 继承一个对象的功能
function _58() {
	function oldObject(param1) {
		this.param1 = param1;
		this.getParam = function () {
			return this.param1;
		}
	}

	function newObject(param1,param2) {
		this.param2 = param2;
		this.getParam2 = function () {
			return this.param2;
		}
		//通过Funciton.apply方法实现函数链的继承
		oldObject.apply(this,arguments);
		this.getAllparams = function () {
			return this.getParam() + this.getParam2();
		}
	}
	// 链化该对象的构造函数
	newObject.prototype = new oldObject();
	var obj = new newObject('value1','value2');
	console.log(obj.getAllparams());
}

// 通过定义一个新的属性来扩展对象
function _59() {
	// 定义单个属性
	Object.defineProperty(newBook,'publisher',{
		value:'hit',
		// 若为true则可以修改，否则不可以修改
		writable:false,
		// 是否可以迭代
		enumerable:true,
		// 是否可以删除
		configurable:true
	});

	//定义多个属性
	Object.defineProperties(newBook, {
		'stock':{
			value:true,
			writable:true,
			enumerable:true
		},
		'age':{
			value:'13',
			writable:'false'
		}
	});
}

// 阻止对象的可扩展性
function _60() {
	'use strict';

	var Test = {
		value1:'111',
		value2:function () {
			return this.value1;
		}
	}

	try {
		Object.preventExtensions(Test);
		Test.value3 = '222';	//抛出异常
	} catch(e) {
		alert(e);
	}
}

// 阻止对象修改和添加属性描述符
function _61() {
	'use strict';

	var Test = {
		value1:'111',
		value2:function () {
			return this.value1;
		}
	}

	try {
		// 冻结对象
		Object.seal(Test);

		Test.newProp = 'value3';	//抛出异常

		// 使用如下代码
		Object.defineProperty(Title,'category',{
			get:function () {
				return category;
			},
			set:function (value) {
				category = value;
			},
			enumerable:true,
			configurable:true
		});
	} catch(e) {
		alert(e);
	}

}

// 阻止对对象的任何修改
function _62() {
	var Test = {
		value1:'111',
		value2:function () {
			return this.value1;
		}
	}

	try {
		// 冻结对象
		Object.freeze(Test);

		Test.value2 = '222';	//抛出异常

		// 使用如下代码
		Object.defineProperty(Title,'category',{
			get:function () {
				return category;
			},
			set:function (value) {
				category = value;
			},
			enumerable:true,
			configurable:true
		});
	} catch(e) {
		alert(e);
	}

}

// 一次性对象和为你的JavaScript提供命名
function _63() {
	var jscbObject = {
		getElem:function (id) {
			return document.getElementById(id);
		},
		stripslashes:function (str) {
			return str.replace(/\\/g,'');
		},
		removeAngleBrackets:function (str) {
			return str.replace(/</g,'&lt;').replace(/>/g,'&gt;');
		}
	}

	var incoming = jscbObject.getElem('incoming');
	var content = incoming.innerHTML;

	var result = jscbObject.stripslashes(content);
	result = jscbObject.removeAngleBrackets(result);
}

//使用prototype.bind()来控制函数作用域
function _64() {
	window.name = 'window';
	var newObject = {
		name:'newObject',
		sayHello:function () {
			nestedGreeting = function (greeting) {
				alert(greeting + this.name);
			}.bind(this);  //这里将this指向了该对象的原对象
			nestedGreeting('hello');
		}
	}
	newObject.sayHello('hello'); //弹出 hello window
}

//将对象方法链化
function _65() {
	function oldObject(param1) {
		this.param1 = param1;
		this.getParam = function () {
			return this.param1;
		}
	}

	function newObject(param1,param2) {
		this.param2 = param2;
		this.getParam2 = function () {
			return this.param2;
		}
		//通过返回this将对象链化
		oldObject.apply(this,arguments);
		this.getAllparams = function () {
			this.getParam();
			return this;
		}
	}
	var obj = new newObject('value1','value2');
	console.log(obj.getAllparams().getParam2());
}
