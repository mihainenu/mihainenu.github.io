
var patratel = null;
var left = null;

window.onload = init;

function init(){
	patratel = document.getElementById("patratel");
	left = 0;
	patratel.style.left = left;
	doMove();
}

function doMove() {
	left += 5;
	if (left>1000)
		left = 0;
	patratel.style.left = left;
	setTimeout(doMove,20); 
}