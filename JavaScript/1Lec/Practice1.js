let a=10;
{
    console.log(a);
    let b=20;
}

// console.log(b);

/*OUTPUT
10
console.log(b);
            ^
ReferenceError: b is not defined [Because Let doesn't Support the Global Variable Path]*/

var b=20;
{
    console.log(b);
    var c=90
}
console.log(c);

/*Output
10
20
90[var support the Global Scope Variable concept]
*/

let s=10;
{
    let s=20;
    console.log(s);   
}

/*Output
10
20
90
20[Because the s declare at Global level and the s at the local level both are different from each other if we 
redlare s inside local variable and modify it value it acan happen and if we print s value it take local variable value]
*/