function add(a,b) {
    console.log(a+b);
}

add(5,6);
let result=add(5,8);
console.log(result);

/*Output
11
13
undefined
*/

function add(a,b) {
    console.log(a+b);
    return a+b;
    console.log("Code after return statement");   
}

add(5,6);
result=add(5,8);
console.log(result);
// console.log(result(6,7));//TypeError: result is not a function
result = add;  // Store function reference
console.log(result(6, 7));  // Calls add(6,7)



/*Output
11
13
13*/