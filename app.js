"use strict";
let userInput; //restrictive version of any
let userName;
userInput = 51;
userInput = "Max";
if (typeof userInput == 'string') {
    userName = userInput;
}
//Never is a newer version of void  
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
const result = generateError('An Error Occurred', 500);
console.log();
