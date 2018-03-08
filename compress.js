"use strict"
function stringCompress(){
  	let myString = "aabbcc"
  	let previousLetter = myString.substr(0,1);
  	let compressedString = ""
  	let letterCounter = 1;
    for ( let i = 1; i <= myString.length; i++){
    	let newLetter = myString.substr(i,1);
        if(newLetter === previousLetter )  {
        	letterCounter++;
   
        }
        	else  if (newLetter != previousLetter){
        		compressedString = compressedString + letterCounter + previousLetter;
        		letterCounter = 1;
       	}
         previousLetter = newLetter;
    }
     console.log(compressedString);
  }
  stringCompress();