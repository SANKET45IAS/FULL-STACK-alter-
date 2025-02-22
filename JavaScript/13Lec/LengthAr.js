let n = new Number(20);  // n is a Number object (not a primitive)

let result = n.toString().length; // Converts 20 to "20", length = 2
console.log(result);  // Output: 2

console.log(n.length); 
// Output: undefined, because the Number object does not have a `length` property by default

n.length = result; // Adding a new property `length` to the Number object

console.log(n.length);  // Output: 2 (because objects can store properties)
