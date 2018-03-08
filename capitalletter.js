"use strict"
function firstCapitalLetter() {
	let myString = "hi mikola zhmendak";
	let stringSplit = myString.split(" ");
	let newString = "";
	for ( let i = 0; i < stringSplit.length; i++) {
		let temporatyValue = stringSplit[i].substr(0,1).toUpperCase() 
		                     + stringSplit[i].substr(1,stringSplit[i].length);
	    newString = newString + " " + temporatyValue;
	}
	newString = newString.substring(1, newString.lenght);
    console.log(newString);
}
firstCapitalLetter();