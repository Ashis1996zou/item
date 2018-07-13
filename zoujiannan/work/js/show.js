var oli = $("li");
var oshow = $("#show");

//oli.mouseout(function(){
//	oshow.hide(1000,"linear")
//})
//oli.mouseover(function(){
//	oshow.show(1000,"linear")
//})

oli.eq(0).mouseenter(function(){
	oshow.toggle(1000,"linear")
})
