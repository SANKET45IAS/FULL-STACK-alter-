let obj = {
    name: "Alice",
    age: 25,
    city: "New York",
    greet: function () {
        return "Hello, " + this.name;
    },
};

// 1. Object.keys() - Get all keys 
console.log("keys:", Object.keys(obj));//Return in array format

// 2. Object.values() - Get all values
console.log("values:", Object.values(obj));

// 3. Object.entries() - Get key-value pairs
console.log("entries:", Object.entries(obj));

// 4. Object.fromEntries() - Convert key-value pairs into an object
let entries = Object.entries(obj);
let objFromEntries = Object.fromEntries(entries);
console.log("fromEntries:", objFromEntries);

// 5. hasOwnProperty() - Check if property exists
console.log("hasOwnProperty age:", obj.hasOwnProperty("age"));

// 6. Object.hasOwn() - Newer way to check if property exists
console.log("hasOwn age:", Object.hasOwn(obj, "age"));

// 7. Object.assign() - Copy properties to another object
let obj2 = Object.assign({}, obj, { country: "USA" });
console.log("assign:", obj2);

// 8. Object.seal() - Prevent adding/removing properties but allow modification
let obj3 = { brand: "Toyota", model: "Camry" };
Object.seal(obj3);
obj3.model = "Corolla"; // Allowed
obj3.year = 2022; // Not allowed
console.log("seal:", obj3);

// 9. Object.defineProperty() - Define new property
Object.defineProperty(obj, "gender", { value: "Female", writable: false });
console.log("defineProperty:", obj.gender);

// 10. Object.getOwnPropertyDescriptor() - Get property attributes
console.log("getOwnPropertyDescriptor:", Object.getOwnPropertyDescriptor(obj, "name"));

// 11. Object.getPrototypeOf() - Get prototype of object
console.log("getPrototypeOf:", Object.getPrototypeOf(obj));

// 12. Object.setPrototypeOf() - Set prototype of object
let proto = { country: "Unknown" };
Object.setPrototypeOf(obj, proto);
console.log("setPrototypeOf country:", obj.country);

// 13. Object.create() - Create a new object with prototype
let obj4 = Object.create(obj);
obj4.language = "English";
console.log("create:", obj4.language, obj4.country);

// 14. delete - Remove a property
delete obj.city;
console.log("delete:", obj);

// 15. Object.is() - Compare if two values are the same
console.log("is:", Object.is(25, obj.age));

// 16. obj.greet() - Calling object method
console.log("method:", obj.greet());

// 17. Object.freeze() - Prevent all modifications
Object.freeze(obj);
obj.name = "Bob"; // Won't change
console.log("freeze:", obj.name);

// 18. Object.getOwnPropertyNames() - Get all property names (including non-enumerable ones)
console.log("getOwnPropertyNames:", Object.getOwnPropertyNames(obj));

// 19. Object.getOwnPropertySymbols() - Get symbols used as keys in the object
let sym = Symbol("id");
obj[sym] = 12345;
console.log("getOwnPropertySymbols:", Object.getOwnPropertySymbols(obj));

// 20. Object.isExtensible() - Check if properties can be added to an object
console.log("isExtensible:", Object.isExtensible(obj));

// 21. Object.preventExtensions() - Prevent adding new properties
Object.preventExtensions(obj);
obj.newProp = "Blocked"; // Won't be added
console.log("preventExtensions:", obj);

// 22. Object.entries() + Object.fromEntries() (Clone an object)
let clonedObj = Object.fromEntries(Object.entries(obj));
console.log("clonedObj:", clonedObj);

/*Output
keys: [ 'name', 'age', 'city', 'greet' ] return in form of array
values: [ 'Alice', 25, 'New York', [Function: greet] ]
entries: [
  [ 'name', 'Alice' ],
  [ 'age', 25 ],
  [ 'city', 'New York' ],
  [ 'greet', [Function: greet] ]
]
fromEntries: { name: 'Alice', age: 25, city: 'New York', greet: [Function: greet] }
hasOwnProperty age: true
hasOwn age: true
assign: {
  name: 'Alice',
  age: 25,
  city: 'New York',
  greet: [Function: greet],
  country: 'USA'
}
seal: { brand: 'Toyota', model: 'Corolla' }
defineProperty: Female
getOwnPropertyDescriptor: {
  value: 'Alice',
  writable: true,
  enumerable: true,
  configurable: true
}
getPrototypeOf: [Object: null prototype] {}
setPrototypeOf country: Unknown
create: English Unknown
delete: { name: 'Alice', age: 25, greet: [Function: greet] }
is: true
method: Hello, Alice
freeze: Alice
getOwnPropertyNames: [ 'name', 'age', 'greet', 'gender' ]
getOwnPropertySymbols: []
isExtensible: false
preventExtensions: { name: 'Alice', age: 25, greet: [Function: greet] }
clonedObj: { name: 'Alice', age: 25, greet: [Function: greet] } */