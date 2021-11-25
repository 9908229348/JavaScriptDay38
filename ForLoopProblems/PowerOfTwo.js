let power = process.argv[2];
let powerValue = Math.pow(2, parseInt(power));
let count;
for(count = 1; Math.pow(2, parseInt(count)) <= powerValue; count++){
    console.log("2^" + count + " = " + Math.pow(2, parseInt(count)));
}