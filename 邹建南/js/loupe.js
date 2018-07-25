var small = document.querySelectorAll(".small");
var middle = document.querySelector(".middle");
var maximg = document.getElementsByClassName("maximg")[0];
var filter = document.getElementsByClassName("filter")[0];
var seeshow = document.getElementsByClassName("seeshow")[0];
var glass = document.getElementsByClassName("glass")[0];
var magnify = document.getElementsByClassName("magnify")[0];
for(var i=0;i<small.length;i++){
	small[i].onmouseover = function() {
		var src = this.getAttribute("data-url"); 
		middle.src = src;
		maximg.src = src;
	}
}

seeshow.onmouseover = function(){
	filter.style.display = "block";
	magnify.style.display = "block";
	this.onmousemove = function(e){
		var e = e||event;
		var l = e.pageX - glass.offsetLeft - filter.offsetWidth/2;
		var t = e.pageY - glass.offsetTop - filter.offsetHeight/2;
console.log(e.offsetX,e.offsetY);

		l = l>seeshow.offsetWidth - filter.offsetWidth?seeshow.offsetWidth - filter.offsetWidth:(l<0?0:l);

		t = t>seeshow.offsetHeight - filter.offsetHeight?seeshow.offsetHeight - filter.offsetHeight:(t<0?0:t);

		filter.style.left = l+'px';
		filter.style.top = t+'px';

		maximg.style.left = -2*l+'px';
		maximg.style.top = -2*t+'px';
	}
}
seeshow.onmouseout = function(){
	filter.style.display = "none";
	magnify.style.display = "none";
}