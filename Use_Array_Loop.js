/*
 *
 *使用数组和循环
 *
 *
 */


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
