let s=1000;
let sa=new Number(100);

console.log(s);
console.log(sa,"Array with key and value pairs.");

console.log(sa.toString());

s.toString();

console.log(typeof s);

let t=s.toString();

console.log(typeof t);

let no=674.875787
console.log(no);
console.log(no.toFixed(2));
console.log(no.toPrecision(3));//Return the no. to a good fixed or presise value till the given parameter length


/*
1000
[Number: 100] Array with key and value pairs.
100
number
string
674.875787
674.88
675
*/


let ha=190000
console.log(ha.toLocaleString());
