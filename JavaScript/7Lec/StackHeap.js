// Stack(Give a copy of original value to other if change in other then it's doesnot change in the original value)

let age=19;
let age2=age;

console.log("age:",age);
console.log("age2:",age2);

age2=20;
console.log("After Change in age2:");
console.log("age:",age);
console.log("age2:",age2);

/*Output
age: 19
age2: 19
After Change in age2:
age: 19
age2: 20
*/

//Heap(In Heap Original Variable give it object reference to other if we change value through the other variable then from original variable it  also change)

let myObj={
    name:"Sanket",
    redg:9465
}

let myObj2=myObj;
console.log("Before Change in Name through myObj2..... ");
console.log("myObj.name:",myObj.name);

myObj2.name="SANKET SIDHIVINAYAK";
console.log("After Change in Name through myObj2..... ");
console.log("myObj.name:",myObj.name);
console.log("myObj2.name:",myObj2.name);

myObj2="INDIA"
console.log(myObj2.name);
console.log(myObj2);


/*Output
Before Change in Name through myObj2..... 
myObj.name: Sanket
After Change in Name through myObj2..... 
myObj.name: SANKET SIDHIVINAYAK
myObj2.name: SANKET SIDHIVINAYAK
undefined
INDIA
*/