/*
 *
 *使用JavaScript函数构建重用性
 *
 *
 */

 
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

//缓存计算提高程序性能
function _32 () {
	//缓存计算
	var fibonacci = function () {
		var memo = [0,1];
		var fib = function (n) {
			var result = memo[n];
			if (typeof result != "number") {
				result = fib(n-1) + fib(n-2);
				memo[n] = result;
			}
			return result;
		}
		return fib;
	}();

	//非缓存计算函数
	var fib = function (n) {
		return n < 2 ? n : fib(n-1) + fib(n-2);
	};

	//运行非缓存计算函数
	console.time("非缓存计算");
	for (var i = 0; i < 30; i++) {
		console.log(i + " " + fib(i));
	}
	console.timeEnd("非缓存计算");

	//运行缓存计算后的函数
	console.time("缓存计算");
	for (var i = 0; i < 30; i++) {
		console.log(i + " " + fibonacci(i));
	}
	console.timeEnd("缓存计算");

	//非缓存计算：54761ms
	//缓存计算：160ms
}

