const n = process.argv[2];
let i = 1;
while(Math.pow(2, i) <= Math.pow(2, n)){
    console.log("2^" + i + " = " + Math.pow(2, i));
    i++;
}