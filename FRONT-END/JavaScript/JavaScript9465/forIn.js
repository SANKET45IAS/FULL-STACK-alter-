const person = {
    name: "Sanket",
    age: 25,
    city: "Bhubaneswar"
};

for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}



// const users = [
//     { name: "Alice", age: 22 },
//     { name: "Bob", age: 30 }
// ];

// for (let index in users) {
//     console.log(`User ${index}:`);
//     for (let key in users[index]) {
//         console.log(`  ${key}: ${users[index][key]}`);
//     }
// }
// Output
// User 0:
//   name: Alice
//   age: 22
// User 1:
//   name: Bob
//   age: 30
