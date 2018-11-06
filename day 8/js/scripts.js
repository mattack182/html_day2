function toggle(){
	
	var pColor = document.getElementById("first").style.color;	

	if(pColor == "yellow"){
		document.getElementById("first").style.color = "blue";
		document.getElementById("first").style.display = "block";
	}
	else{
		document.getElementById("first").style.color = "yellow";
		document.getElementById("first").style.display = "none";
	}
}