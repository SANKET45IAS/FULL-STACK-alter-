let f=function(){return "Hello";}
let a=[1,2,3,4,[2,3],true,f]

console.log(a);

console.log(a[2]);
console.log(a[4][1]);
console.log(a[6]);
console.log(a[6]());//If we call a function then it return it return type,otherwise it's return 
// nundefined it's also print the log statement before returning the return statement.
