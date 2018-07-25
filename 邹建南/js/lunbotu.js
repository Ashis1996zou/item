var banner = document.getElementById("banna-wrap");
var photo= banner.getElementsByClassName("photo")[0];
var aimg = photo.getElementsByTagName("a");
var btn = document.querySelectorAll(".dot>a");
var iW = aimg[0].offsetWidth;
var qwer = aimg[0].cloneNode(true);
var iNow = 0;
var timer = null;


photo.appendChild(qwer);
photo.style.width = aimg.length*iW+"px";


for(var i=0;i<btn.length;i++){
	btn[i].index = i;
	btn[i].onmouseover = function(){
		for(var j=0;j<btn.length;j++){
			btn[j].className = "";
		}
		this.className = "active";
		move(photo,{left:-this.index*iW})
		iNow = this.index;
	}
}


photo.onmouseover = function(){
	clearInterval(timer)
}
//移除的时候轮播图继续运行
photo.onmouseout = function(){
	autoPlay()
}


autoPlay()
//自动轮播
function autoPlay(){
	timer = setInterval(function(){
		if(iNow == aimg.length-1){
			iNow = 1;
			photo.style.left = 0;
		}else{
			iNow++;
		}
		toImg()
	},3000)
}


function toImg(){
	move(photo,{left:-iNow*iW})

	for(var i=0;i<btn.length;i++){
			btn[i].className = "";
		}

	btn[iNow>3?0:iNow].className = "active";
}
