console.log("FIRST");

async function getDate() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("JAY JAGANNATH");
            reject("Not completed"); // This causes an error with value Not completed
        }, 2000);
    });
}

// Using await to wait for getDate() to complete
try {
    await getDate();//At time of run after JAY JAGANNATH execution it also occur error that error value pass as catch parameter
} catch (error) {
    console.log("Error:", error);
}

console.log("END");

// Calling getDate() again and storing the returned Promise
try {
    let result = await getDate();
    console.log(result);
} catch (error) {
    console.log("Error:", error);
}
