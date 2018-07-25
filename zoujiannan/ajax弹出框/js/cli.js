var demobg = document.querySelector(".demo-bg");
var demotxt = document.querySelector(".demo-txt");
var que = document.querySelector('#rem')
//function openDialog() {
//  demotxt.style.display = "block";
//  demobg.style.display = "block";
//}

function closeDialog() {
    demotxt.style.display = "none";
    demobg.style.display = "none";
}



var ojust = document.getElementById("just");
var opackage = document.getElementById("package");

console.log(opackage)
ojust.onclick = function(){
	var e = e || event
	var target = e.target || e.srcElement
	if(target.className=="button"&&target.tagName=="BUTTON"){
		demotxt.style.display = "block";
	    demobg.style.display = "block";
	   
	    que.onclick = function(){
	    	target.parentNode.parentNode.parentNode.remove()
	    	demotxt.style.display = "none";
	    	demobg.style.display = "none";
	    }
	}
}

