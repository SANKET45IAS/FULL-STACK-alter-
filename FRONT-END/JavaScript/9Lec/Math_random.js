// Math.random(); return always value between 0 to 1
console.log(Math.random().toFixed(2));
console.log(Math.floor((Math.random()*10)+1));


let min=1;
let max=6;
let dice=Math.round((Math.random())*(max-min+1))+min

console.log("Dice:",dice);
// Formula

/*Output
0.43
8
Dice: 6
 */