let number = process.argv[2];
let harmonic = 0;
let count;
for(count = 1; count <= number; count++){
    harmonic = harmonic + 1/count;
}
console.log(number + "Harmonic value is : " + harmonic);