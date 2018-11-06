function toggle(){
	// var my_value = prompt("Give me a color name", "blue");
	// document.getElementById("h1_2nd").innerHTML = document.getElementById("h1_2nd").innerHTML.toUpperCase();
	
	// var pColor = document.getElementById("first").style.color;	
	// document.getElementById("first").style.color = my_value;

	var array_items = document.getElementsByClassName("class_can_be_reused");

	for(i = 0; i < array_items.length; i++){
		array_items[i].innerHTML = "CHANGED";
		console.log("print i " + i);
	}
	// if(pColor == "yellow"){
	// 	document.getElementById("first").style.color = "blue";
	// 	document.getElementById("first").style.display = "block";
	// }
	// else{
	// 	document.getElementById("first").style.color = "yellow";
	// 	document.getElementById("first").style.display = "none";
	// }
}