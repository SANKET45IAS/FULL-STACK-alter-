function noItem(...n){
    return n;
}
console.log(noItem(2,3,4,5));

/*Output
[ 2, 3, 4, 5 ]*/

function noItem(a,b,...n){
    return n;
}
console.log(noItem(2,3,4,5));

/*Output
[ 4, 5 ]*/