const prompt = require("prompt-sync")();
let number = prompt("Enter a number");
let flag = 0;
if(number == 1){
    console.log(number + " is neither prime not composite");
}else{
    for(let i = 2; i < number; i++){
        if(parseInt(number) % parseInt(i) == 0){
            flag = 1;
        }
    }
    if(flag == 1){
        console.log(number + " is not a prime");
    }else{
        console.log(number + " is a prime");
    }
}

