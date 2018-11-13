
// This will fill all <p> tags in the HTML file, overriding 
// for(let i = 0; i < document.getElementsByTagName("p").length; i++){
// 	document.getElementsByTagName("p")[i].innerHTML = "number " + (i+1);
// }

let student = ["Leonardo","Rafael", "Donatello", "Michalangelo"];
document.querySelector(".demo").innerHTML = student[3];

let userDetails = [];
userDetails[0] = prompt("What is your name?");
userDetails[1] = prompt("What is last name?");
userDetails[2] = prompt("How old are you?");

// not ECMA 6 style
// document.getElementById("demo").innerHTML = userDetails[0] + " " + userDetails[1] + " " 
// 											+ userDetails[2];

//     ECMA 6 style
document.getElementById("demo1").innerHTML = 
`${userDetails[0]} - ${userDetails[1]} - ${userDetails[2]}`;



