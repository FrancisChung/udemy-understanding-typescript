let userInput: unknown; //restrictive version of any
let userName: string;

userInput = 5;
userInput = "Max";
if (typeof userInput == 'string') {
    userName = userInput;
}

//Never is a newer version of void  
function generateError(message: string, code: number):never {
    throw {message: message, errorCode: code}
}

const result = generateError('An Error Occurred',500);
console.log()