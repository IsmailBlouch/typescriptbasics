"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(number) {
    // return "hello"
    return number + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
getUpper('Hello from the other side...');
addTwo(4);
function signUpUser(name, email, ispaid) { }
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
loginUser("Ismail", "i@i.com");
signUpUser("Ismail", "test@test.com", true);
// function getValue(myVal: number):boolean{
//     if(myVal>5){
//         return true
//     }
//     return "200 ok"
// }
// const getHello = (s: string): string =>{
//     return ""
// }
var heros = ["thor", "profaisal", "ironman"];
// const heros = [1,2,3]
heros.map(function (hero) {
    return "Hero is ".concat(hero, ".");
});
function consoleError(errormsg) {
    console.log(errormsg);
    // return 1
}
function handleError(errormsg) {
    throw new Error(errormsg);
    // return 1
}
