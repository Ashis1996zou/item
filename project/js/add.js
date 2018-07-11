var aAdd = document.querySelectorAll(".add");

for(var i=0;i<aAdd.length;i++){
	aAdd[i].onclick = function () {
		//获取到数量的值
		var n = Number(this.previousElementSibling.value);
		//商品的数据++
		n++;
		//加加完毕以后再赋值给input
		this.previousElementSibling.value = n;
	}
}