var userInput; //restrictive version of any
var userName;
userInput = 5;
userInput = "Max";
if (typeof userInput == 'string') {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('An Error Occurred', 500);
