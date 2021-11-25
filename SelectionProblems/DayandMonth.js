let date = process.argv[2];
let month = process.argv[3];
console.log(date);
console.log(month);
const LASTMONTH = 6, FIRSTDATE = 20, LASTDATE = 31, FIRSTMONTH = 3;
if(month <= LASTMONTH && month >= FIRSTMONTH){
    if(month == LASTMONTH){
        if(date <= FIRSTDATE){
            console.log("TRUE");
        }else{
            console.log("FALSE");
        }
    }
    if(month == FIRSTMONTH){
        if(date < FIRSTDATE || date >= LASTDATE){
            console.log("FALSE");
        }else{
            console.log("TRUE");
        }
    }
    if(month != LASTMONTH && month != FIRSTMONTH){
        if(date <= LASTDATE)
        console.log("TRUE");
    }
}else{
    console.log("FALSE");
}