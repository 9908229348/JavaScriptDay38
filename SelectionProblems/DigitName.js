const prompt = require("prompt-sync")();
let digit = prompt("Enter a Digit");
const zero = 0, one = 1, two = 2, three = 3, four = 4, five = 5, six = 6, seven = 7, eight = 8, nine = 9;
if(digit == zero){
    console.log("ZERO");
}else if(digit == one){
    console.log("ONE");
}else if(digit == two){
    console.log("TWO");
}else if(digit == three){
    console.log("THREE");
}else if(digit == four){
    console.log("FOUR");
}else if(digit == five){
    console.log("FIVE");
}else if(digit == six){
    console.log("SIX");
}else if(digit == seven){
    console.log("SEVEN");
}else if(digit == eight){
    console.log("EIGHT");
}else if(digit == nine){
    console.log("NINE");
}else {
    console.log("Enter digit only");
}