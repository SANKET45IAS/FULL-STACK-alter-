console.log("FIRST");

async function getDate() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("JAY JAGANNATH");
            resolve("Completed");
        }, 2000);
    });
}

// Using await to wait for getDate() to complete
await getDate();

console.log("END");

// Calling getDate() again and storing the returned Promise
let result = await getDate();//result store Promise resolve value
console.log(result); // Logs "Completed"
