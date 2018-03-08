"use strict";
function pallindrom(){
let pallindromQuestion = prompt("Plese enter you phrase");
let pallindromString = "";
for ( let i = pallindromQuestion.length; i >=0 ; i--){
     pallindromString = pallindromString + pallindromQuestion.substr(i,1);
     
 }
     if (pallindromQuestion == pallindromString){
     	console.log("This is a pallindrom");
	     }
     	else {
     	console.log("This is not pallindrom");
     }
    
 }


pallindrom();