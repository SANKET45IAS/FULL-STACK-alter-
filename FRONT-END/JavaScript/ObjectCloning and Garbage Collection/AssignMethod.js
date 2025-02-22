let main={
    age:19,
}

let clone=Object.assign({},main);

console.log("Before Updatation...");
console.log("Main Object:",main);
console.log("Clone Object:",clone);

clone.age=20;
console.log("After Updatation-[clone Object age:20]");
console.log("Main Object:",main);
console.log("Clone Object:",clone);