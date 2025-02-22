// Defining an object 'sa' with properties and a method
let sa = {
    name: "Sanket",
    language: "Java",
    run: function () { // Using a function expression for better readability
        console.log("Self run");
    }
};

console.log(sa); // Printing 'sa' object

// Defining another object 'ro' with a 'run' method
let ro = {
    run: function () {
        console.log("Prototype run");
    }
};

// Setting 'ro' as the prototype of 'sa'
Object.setPrototypeOf(sa, ro);

console.log(sa); // Printing 'sa' object after setting prototype
console.log(ro); // Printing 'ro' object

// Calling 'run' method from 'sa' (own method)
sa.run();

// Calling 'run' method from prototype (ro) using prototype chain
sa.__proto__.run(); // Corrected way to access prototype method
