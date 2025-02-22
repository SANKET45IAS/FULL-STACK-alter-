try {
    let age = 15;
    if (age < 18) {
        throw new Error("Age must be 18 or above!");
    }
    console.log("You are eligible.");
} catch (error) {
    console.log("Custom Error:", error);
}
