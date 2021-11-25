const prompt = require("prompt-sync")();
let value = prompt("Enter a number");
let choice = prompt("Enter 1.Feet to Inch 2.Inch to Feet 3.Feet to Meter 4.Meter to Feet");
let output;
switch(choice){
    case "1" :
        console.log("Feet to Inch");
        output = parseFloat(value) * 12;
        break;
    case "2" :
        console.log("Inch to Feet");
        output = parseFloat(value) / 12;
        break;
    case "3" :
        console.log("Feet to Meter");
        output = parseFloat(value) * 0.3048;
        break;
    case "4" :
        console.log("Meter to feet");
        output = parseFloat(value) *3.28084;
        break;
}
console.log(value + " = " + output);