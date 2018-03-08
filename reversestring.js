"use strict";

 function reverseString(){

let myString = "Hello Mikola";
let newString = "";
    for( let i = myString.length; i >= 0; i--){
    	newString = newString + myString.substr(i,1); //.substr takes a portion of string at i = 12 and ends after 1 charcter is returned.
}
console.log(newString);
}
reverseString();

