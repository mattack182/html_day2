let aDomObj = document.getElementById('demo');

// // addEventListening
// aDomObj.addEventListener('dblclick', trigger);


// function trigger(){

// 	let t = 0;
// 	let myVariable = setInterval(function(){
// 		startCounting();
// 	}, 1000);

// 	function startCounting(){
// 		document.getElementById("demo").innerHTML = (t += 1);
// 		if( t === 10){
// 			clearInterval(myVariable);
// 		}
// 	}
// }

// Closure
function outerFunction(){
	let counter = 0;
	function inner(){
		counter += 1;
		return counter;
	}
	return inner;
}

// we call the function once and the scope is "saved" inside the var
let projectCounter = outerFunction();

console.log(projectCounter());
