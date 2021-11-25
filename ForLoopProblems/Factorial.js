const prompt = require("prompt-sync")();
const number = prompt('Enter number: ');
let factorial = 1;
if(number == 0){
    console.log("0! = 1");
}else if(number > 0){
    for(let i = 1; i <= number; i++){
        factorial = factorial * i;
    }
}
console.log(number + " factorial is : " + factorial);