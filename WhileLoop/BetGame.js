let money = 100;
let win = 200;
const WIN = 1;
let flip;
let noOfWins = 0;
let noOfFlips = 0;
while(money != 0 && money != 200){
    noOfFlips++
    flip = Math.floor(Math.random() * 10) % 2;
    if(flip == WIN){
        noOfWins++;
        money = money + 1;
    }else{
        money = money - 1;
    }
}
console.log("Money : " + money);
console.log("Number of bets made : " + noOfFlips);
console.log("Number of times wins : " + noOfWins);