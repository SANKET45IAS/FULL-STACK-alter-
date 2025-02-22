let add=(x,y=10)=>{
    return x+y;
}
console.log(add(5,8));
console.log(add(5));

let add1=function(a,b){
    return add(a,b);
}

console.log(add1(5));
console.log(add1(5,8));