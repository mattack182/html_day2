let array = [];

// CONCATENATION
// es6 syntax to concatenate arrays
let alex = ["Alex","Bohn","33"];
let pedro = ["Pedro","Dionisio","24"];
let joao = ["Joao","Robert","25"];
// ES6 syntax
let people = [...alex, ...pedro, ...joao];
// using concat() not ES6 syntax
// let people = alex.concat(pedro, joao);
console.log(people);

// function pushToArray(event){
// 	event.preventDefault();
// 	array.push(document.getElementById("input").value);
// 	document.getElementById("input").value = "";
// 	document.getElementById("numberOf").innerHTML = `${array.length} items`;
// 	document.getElementById("output").innerHTML = array;
// }

// function popToArray(event){
// 	event.preventDefault();	
// 	array.pop();
// 	document.getElementById("numberOf").innerHTML = `${array.length} items`;
// 	document.getElementById("output").innerHTML = array;
// }


function pushToArray(event){
	event.preventDefault();
	
	let textbox = document.querySelector("#data_input");
	let label1 = document.querySelector("#label1");
	let lebel2 = document.querySelector("#label2");

	array.push(textbox.value);
	
	textbox.value = "";
	label1.innerHTML = `${array.length} items`;
	label2.innerHTML = array.toString();
}

function popToArray(event){
	event.preventDefault();
	
	let textbox = document.querySelector("#data_input");
	let label1 = document.querySelector("#label1");
	let lebel2 = document.querySelector("#label2");

	array.pop();
	
	label1.innerHTML = `${array.length} items`;
	label2.innerHTML = array.toString();
}

function filterByLength(event){
	event.preventDefault();
	let word_length = document.querySelector("#filter_input");
	let filter_output = document.querySelector("#filter_output");
	filter_output.innerHTML = array.filter(word => (word.length > parseInt(word_length.value)));
}

function sortArray(event){
	event.preventDefault();
	let lebel2 = document.querySelector("#label2");
	array.sort();
	label2.innerHTML = array.toString();
}



let addNumbers = [];
let counter = 0;
let value = 1;
for (counter = 0; counter < 10; counter +=1){
	addNumbers[counter] = value;
	value += 2;
}

document.getElementById("addNumbers").innerHTML = addNumbers;
