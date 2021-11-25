const prompt = require("prompt-sync")();
let number = prompt("Enter a number");
if(number >= 0 && number < 10){
    console.log("UNIT");
}else if(number >= 10 && number < 100){
    console.log("TEN");
}else if(number >= 100 && number < 1000){
    console.log("HUNDRED");
}else if(number >= 1000 && number < 10000){
    console.log("THOUSAND");
}else if(number >= 10000 && number < 100000){
    console.log("TEN THOUSAND");
}else{
    console.log("Enter number below 1,00,000");
}

