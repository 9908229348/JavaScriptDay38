const prompt = require("prompt-sync")();
let day = prompt("Enter a number");
const Sunday = 0, Monday = 1, Tuesday = 2, Wednesday = 3, Thursday = 4, Friday = 5, Saterday = 6;
if(day == Sunday){
    console.log("SUNDAY");
}else if(day == Monday){
    console.log("MONDAY");
}else if(day == Tuesday){
    console.log("TUESDAY");
}else if(day == Wednesday){
    console.log("WEDNESDAY");
}else if(day == Thursday){
    console.log("THURSDAY");
}else if(day == Friday){
    console.log("FRIDAY");
}else if(day == Saterday){
    console.log("SATERDAY");
}else{
    console.log("Invalid input");
}