function myFunction(event){
	// cancel the normal event related to that button or link
	//event.preventDefault();
	
	let name = document.getElementById('nameinput').value;
	let lastName = document.getElementById('lastNameInput').value;
	let emailInput = document.getElementById('emailInput').value;


	document.getElementById('inputSummary').innerHTML = `Hello ${name} ${lastName}, thank you for filling out and submitting the form. You will receive an email to the provided email: <h4>${emailInput}</h4>`;
}