//let numberArray = [6,5,7,8,11,4,19,22,3,12,99,1,123];
let array = generateRandomArray(15);
console.log(`Original array: ${array}`);

addToBodyAsP("Original array: " + array.join(", "));
bubbleSort(array);

function bubbleSort(numberArray){	
	let i, j;
	for(i = 0; i < numberArray.length; i += 1){
		for(j = 0; j < numberArray.length - i; j += 1){
			if(numberArray[j] > numberArray[j+1]){
				let temp = numberArray[j];
				numberArray[j] = numberArray[j+1];
				numberArray[j+1] = temp;
			}
		}
		console.log(`Loop ${i+1}        : ${numberArray}`);
		let output = `Loop ${i+1}        : ${numberArray.join(", ")}`;
		addToBodyAsP(output);
	}

	return numberArray;
}

function generateRandomArray(n){
	let array = [];
	let i;
	for(i = 0; i < n; i += 1){
		array.push(Math.floor(Math.random() * (59)));
	}
	return array;
}

function addToBodyAsP(string){
	let x = document.createElement("p");
	x.setAttribute("class", "my_par");
	let z = document.createTextNode(string);
	x.appendChild(z);
	document.body.appendChild(x);
}

function changeColour(colourName, className){
	let i;
	let element = document.getElementsByClassName(className);
	for(i = 0; i < element.length; i += 1){
		// element[i].style.color = colourName;
		// element[i].style.background = "#ddd";
	}
}
changeColour("blue", "my_par");

function toggleStyle(class_n, style_n){
	let element = document.getElementsByClassName(class_n);
	let i;
	for(i = 0; i < element.length; i += 1){
		element[i].classList.toggle(style_n);
	}
	
}

// Arrow Functions JS with default values
let func_name1 = (a = 0, b = 0) => {
	console.log(`this is func_name1 saying hello! param1 = ${a}, param2 = ${b}`);
}


// Direct access to arguments passed to a function
function sum(){
	let args = arguments.length;
	let i;
	let result = 0;
	for(i = 0; i < args; i += 1){
		result += arguments[i];
	}
	return result;
}

console.log("Sum is " + sum(1,2,3,4));

// exception handling 
try {
	consolee.log("Teste");
} catch(e) {
	// statements
	console.log("Voce acabou de usar um try-catch que bonitinho " + e.line + " " + e.message);
}



