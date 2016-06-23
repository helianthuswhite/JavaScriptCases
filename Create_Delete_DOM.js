/*
 *
 *创建和删除元素和属性
 *
 */

 //在已有元素之前插入新的元素
 function _43() {
 	function addDiv() {
 		//获取父节点
 		var parent = this.parentNode;
 		//创建新的元素
 		var div = document.createElement('div');
 		//第一个参数为插入的元素，第二个为被插入的元素
 		parent.insertBefore(div,this);
 	}
 }

 //向一个已有元素添加属性
 function _44() {
 	var someElement = document.getElement('elem');
 	var newAttr = document.createAttribute('newAttribute');
 	newAttr.nodeValue = 'testValue';
 	someElement.setAttribute(newAttr);
 	//或者
 	someElement.setAttribute(newAttr,'testValue');
 }

 //从WEB文档中提取链接并添加到页面末尾
 function _45() {
 	var links = document.querySelectorAll('a');
 	var footnode = document.createElement('ul');
 	//针对所有的链接
 	for (var i = 0;i<links.length;i++) {
 		//获取父元素
 		var parent = links[i].parentNode;
 		//创建编号索引文本
 		var num = document.createTextNode(i+1);
 		var sup = document.createElement('sup');
 		sup.appendChild(num);
 		//处理子节点
 		var children = links[i].childNodes;
 		for (var j = 0;j<children.length;j++) {
 			var newChild = children[j].cloneNode(true);
 			parent.insertBefore(newChild,links[i]);
 		}
 		//添加上编号
 		var sup2 = sup.cloneNode(true);
 		parent.insertBefore(sup2,link[i]);
 		//添加到末尾的一个链接
 		var li = document.createElement('li');
 		li.appendChild(sup);
 		li.appendChild(links[i]);
 		footnode.appendChild(li);
 	}
 	document.getElementsByTagName('body')[0].appendChild(footnode);
 }

 