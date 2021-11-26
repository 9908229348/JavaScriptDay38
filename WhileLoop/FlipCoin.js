let heads = 0;
let tails = 0;
const HEADS = 0;
let flip;
while(heads != 11 && tails != 11){
    flip = Math.floor(Math.random() * 10) % 2;
    if(flip == HEADS){
        console.log("HEADS");
        heads++;
    }else{
        console.log("TAILS");
        tails++;
    }
}
console.log(heads);
console.log(tails);