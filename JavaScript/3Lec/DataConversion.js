let Score =68;
console.log(typeof Score);


let val ="45.76"
console.log("'val' value =",typeof val);

let NumVal=Number(val);
console.log("'NumVal' value =",typeof NumVal);

/*Output- 
number
'val' value = string
'NumVal' value = number
*/

function storeInVariable(n) {
    return n*3;
}

let multi3=storeInVariable(3);
console.log(multi3);

// output-9