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


