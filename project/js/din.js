var toto = document.getElementById("toto");
var iHY = document.documentElement.clientHeight-toto.offsetHeight*2;
toto.style.top = iHY+'px';
window.onscroll = function(){
	var t = document.documentElement.scrollTop || document.body.scrollTop;
	toto.style.top = t+iHY+'px';
}
toto.onclick = function(){
	document.documentElement.scrollTop = document.body.scrollTop = 0
}	
function testScrollTop() {
    /*判断滚动高度，让返回顶部按钮隐藏显示*/
    var iScrollT = window.scroll();
    if(iScrollT>300){
        //alert(iScrollT)
        toto.style.display = "block";
    }else {
        toto.style.display = "none";
    }
}
testScrollTop();